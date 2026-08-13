import type { OrderItemInput } from '@/lib/orders'

// A checkout snapshot stashed before opening the Toss payment window, so the
// success page can persist the order after Toss redirects back.
export const PENDING_ORDER_KEY = 'dolf_pending_order'

export interface PendingOrder {
  readonly orderId: string
  readonly currency: string
  readonly subtotal: number
  readonly shippingFee: number
  readonly total: number
  readonly recipient: string
  readonly email: string
  readonly address: string
  readonly phone: string
  readonly isGuest: boolean
  readonly items: readonly OrderItemInput[]
}

export function readPendingOrder(): PendingOrder | null {
  try {
    const raw = sessionStorage.getItem(PENDING_ORDER_KEY)
    return raw ? (JSON.parse(raw) as PendingOrder) : null
  } catch {
    return null
  }
}

export function clearPendingOrder(): void {
  sessionStorage.removeItem(PENDING_ORDER_KEY)
}
