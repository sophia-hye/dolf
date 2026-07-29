import { supabase } from '@/lib/supabase'
import type { Locale } from '@/i18n/types'

export type OrderStatus =
  | 'pending'
  | 'paid'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

// Currency code per UI locale, and the display symbol per currency.
export const CURRENCY_BY_LOCALE: Record<Locale, string> = {
  ko: 'KRW',
  en: 'USD',
  ja: 'JPY',
}

export const CURRENCY_SYMBOL: Record<string, string> = {
  KRW: '₩',
  USD: '$',
  JPY: '¥',
}

// Fixed shipping fee per currency. KRW is confirmed at 3,500; USD/JPY are
// placeholders until finalized — change them here in one place.
export const SHIPPING_FEE: Record<string, number> = {
  KRW: 3500,
  USD: 3.5,
  JPY: 500,
}

// Free shipping above this subtotal, per currency. Domestic (KRW) only for now;
// overseas currencies have no free-shipping threshold.
export const FREE_SHIPPING_THRESHOLD: Record<string, number> = {
  KRW: 70000,
}

// Shipping fee for a given subtotal: 0 when the currency has a free-shipping
// threshold and the subtotal reaches it, otherwise the flat fee.
export function shippingFeeFor(currency: string, subtotal: number): number {
  const threshold = FREE_SHIPPING_THRESHOLD[currency]
  if (threshold !== undefined && subtotal >= threshold) return 0
  return SHIPPING_FEE[currency] ?? 0
}

export function formatMoney(amount: number, currency: string): string {
  const symbol = CURRENCY_SYMBOL[currency] ?? ''
  return `${symbol}${amount.toLocaleString()}`
}

// Parse the numeric amount out of a catalog price string like "₩52,000",
// "$38", or "from ₩8,000".
export function parseAmount(price: string): number {
  const digits = price.replace(/[^0-9.]/g, '')
  return Number(digits) || 0
}

export interface OrderItemInput {
  readonly productSlug: string
  readonly name: string
  readonly unitPrice: number
  readonly currency: string
  readonly quantity: number
}

export interface CreateOrderInput {
  readonly currency: string
  readonly subtotal: number
  readonly shippingFee: number
  readonly total: number
  readonly recipient: string
  readonly address: string
  readonly phone: string
  readonly items: readonly OrderItemInput[]
}

export interface OrderItemRow {
  readonly product_slug: string
  readonly name: string
  readonly unit_price: number
  readonly currency: string
  readonly quantity: number
}

export interface OrderRow {
  readonly id: string
  readonly status: OrderStatus
  readonly currency: string
  readonly subtotal: number
  readonly shipping_fee: number
  readonly total: number
  readonly recipient: string | null
  readonly address: string | null
  readonly phone: string | null
  readonly created_at: string
  readonly order_items: OrderItemRow[]
}

// Insert an order plus its line items. RLS ties both to the current user, so
// the order and items must belong to the signed-in account.
export async function createOrder(
  input: CreateOrderInput,
): Promise<{ id: string | null; error: string | null }> {
  if (!supabase) return { id: null, error: 'Supabase is not configured.' }

  const { data: auth } = await supabase.auth.getUser()
  const userId = auth.user?.id
  if (!userId) return { id: null, error: 'Not signed in.' }

  const { data: order, error: orderErr } = await supabase
    .from('orders')
    .insert({
      user_id: userId,
      status: 'pending',
      currency: input.currency,
      subtotal: input.subtotal,
      shipping_fee: input.shippingFee,
      total: input.total,
      recipient: input.recipient,
      address: input.address,
      phone: input.phone,
    })
    .select('id')
    .single()

  if (orderErr || !order) {
    return { id: null, error: orderErr?.message ?? 'Failed to create order.' }
  }

  const rows = input.items.map((it) => ({
    order_id: order.id,
    product_slug: it.productSlug,
    name: it.name,
    unit_price: it.unitPrice,
    currency: it.currency,
    quantity: it.quantity,
  }))

  const { error: itemsErr } = await supabase.from('order_items').insert(rows)
  if (itemsErr) return { id: order.id, error: itemsErr.message }

  return { id: order.id, error: null }
}

export const ALL_STATUSES: readonly OrderStatus[] = [
  'pending',
  'paid',
  'shipped',
  'delivered',
  'cancelled',
]

// Korean labels for the admin console (admin UI is Korean-only).
export const ORDER_STATUS_LABEL_KO: Record<OrderStatus, string> = {
  pending: '주문접수',
  paid: '결제완료',
  shipped: '배송중',
  delivered: '배송완료',
  cancelled: '취소',
}

const ORDER_SELECT =
  'id, status, currency, subtotal, shipping_fee, total, recipient, address, phone, created_at, order_items ( product_slug, name, unit_price, currency, quantity )'

interface RawOrderRow
  extends Omit<OrderRow, 'subtotal' | 'shipping_fee' | 'total' | 'order_items'> {
  subtotal: number | string
  shipping_fee: number | string
  total: number | string
  order_items:
    | Array<
        Omit<OrderItemRow, 'unit_price' | 'quantity'> & {
          unit_price: number | string
          quantity: number | string
        }
      >
    | null
}

// Postgres `numeric` can arrive as a string via PostgREST; coerce to numbers.
function normalizeOrder(o: RawOrderRow): OrderRow {
  return {
    ...o,
    subtotal: Number(o.subtotal),
    shipping_fee: Number(o.shipping_fee),
    total: Number(o.total),
    order_items: (o.order_items ?? []).map((it) => ({
      ...it,
      unit_price: Number(it.unit_price),
      quantity: Number(it.quantity),
    })),
  }
}

// The current user's orders (newest first), with line items. RLS scopes the
// result to the signed-in account automatically.
export async function fetchMyOrders(): Promise<OrderRow[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('orders')
    .select(ORDER_SELECT)
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return (data as unknown as RawOrderRow[]).map(normalizeOrder)
}

// All orders (admin only — RLS returns everything when is_admin()).
export async function fetchAllOrders(): Promise<OrderRow[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('orders')
    .select(ORDER_SELECT)
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return (data as unknown as RawOrderRow[]).map(normalizeOrder)
}

// A single order by id (own order, or any order for an admin, per RLS).
export async function fetchOrderById(id: string): Promise<OrderRow | null> {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('orders')
    .select(ORDER_SELECT)
    .eq('id', id)
    .maybeSingle()
  if (error || !data) return null
  return normalizeOrder(data as unknown as RawOrderRow)
}

// Admin-only status change (enforced by the "orders: admin update" policy).
export async function updateOrderStatus(
  id: string,
  status: OrderStatus,
): Promise<{ error: string | null }> {
  if (!supabase) return { error: 'Supabase is not configured.' }
  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
  return { error: error ? error.message : null }
}
