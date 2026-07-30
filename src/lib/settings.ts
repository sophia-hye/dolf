import { supabase } from '@/lib/supabase'

// Single-row store configuration (store_settings, id = 1). Shipping policy is
// read by the storefront; the rest is admin-managed store info + notif prefs.
export interface StoreSettings {
  readonly store_name: string
  readonly store_email: string
  readonly instagram: string
  readonly biz_number: string
  readonly shipping_fee_krw: number
  readonly shipping_fee_usd: number
  readonly shipping_fee_jpy: number
  readonly free_ship_threshold_krw: number
  readonly notify_new_order: boolean
  readonly notify_new_member: boolean
  readonly notify_low_stock: boolean
}

export const DEFAULT_SETTINGS: StoreSettings = {
  store_name: 'DoLF',
  store_email: 'hello@dolfstory.com',
  instagram: '@dolf._official',
  biz_number: '',
  shipping_fee_krw: 3500,
  shipping_fee_usd: 3.5,
  shipping_fee_jpy: 500,
  free_ship_threshold_krw: 70000,
  notify_new_order: true,
  notify_new_member: true,
  notify_low_stock: false,
}

const COLUMNS =
  'store_name, store_email, instagram, biz_number, shipping_fee_krw, shipping_fee_usd, shipping_fee_jpy, free_ship_threshold_krw, notify_new_order, notify_new_member, notify_low_stock'

export async function fetchSettings(): Promise<StoreSettings> {
  if (!supabase) return DEFAULT_SETTINGS
  const { data, error } = await supabase
    .from('store_settings')
    .select(COLUMNS)
    .eq('id', 1)
    .maybeSingle()
  if (error || !data) return DEFAULT_SETTINGS
  const r = data as unknown as Record<string, unknown>
  return {
    store_name: String(r.store_name ?? DEFAULT_SETTINGS.store_name),
    store_email: String(r.store_email ?? DEFAULT_SETTINGS.store_email),
    instagram: String(r.instagram ?? DEFAULT_SETTINGS.instagram),
    biz_number: String(r.biz_number ?? ''),
    shipping_fee_krw: Number(r.shipping_fee_krw ?? DEFAULT_SETTINGS.shipping_fee_krw),
    shipping_fee_usd: Number(r.shipping_fee_usd ?? DEFAULT_SETTINGS.shipping_fee_usd),
    shipping_fee_jpy: Number(r.shipping_fee_jpy ?? DEFAULT_SETTINGS.shipping_fee_jpy),
    free_ship_threshold_krw: Number(
      r.free_ship_threshold_krw ?? DEFAULT_SETTINGS.free_ship_threshold_krw,
    ),
    notify_new_order: Boolean(r.notify_new_order),
    notify_new_member: Boolean(r.notify_new_member),
    notify_low_stock: Boolean(r.notify_low_stock),
  }
}

export async function updateSettings(
  patch: Partial<StoreSettings>,
): Promise<{ error: string | null }> {
  if (!supabase) return { error: 'Supabase is not configured.' }
  const { error } = await supabase
    .from('store_settings')
    .upsert({ id: 1, ...patch, updated_at: new Date().toISOString() }, { onConflict: 'id' })
  return { error: error ? error.message : null }
}

// Shipping config consumed by the cart/checkout fee calculation.
export interface ShippingConfig {
  readonly krw: number
  readonly usd: number
  readonly jpy: number
  readonly freeKrwThreshold: number
}

export function toShippingConfig(s: StoreSettings): ShippingConfig {
  return {
    krw: s.shipping_fee_krw,
    usd: s.shipping_fee_usd,
    jpy: s.shipping_fee_jpy,
    freeKrwThreshold: s.free_ship_threshold_krw,
  }
}
