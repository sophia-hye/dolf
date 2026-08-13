import { supabase } from '@/lib/supabase'
import type { OrderItemInput } from '@/lib/orders'

export interface ConfirmPaymentOrder {
  readonly currency: string
  readonly subtotal: number
  readonly shippingFee: number
  readonly total: number
  readonly recipient: string
  readonly email: string
  readonly address: string
  readonly phone: string
  readonly items: readonly OrderItemInput[]
}

export interface ConfirmPaymentInput {
  readonly paymentKey: string
  readonly tossOrderId: string
  readonly amount: number
  readonly order: ConfirmPaymentOrder
}

// Verifies the Toss payment and persists the order server-side (guest + member)
// via the `confirm-payment` Edge Function. The signed-in user's JWT is attached
// automatically by supabase-js, so member orders keep their user_id; guests get
// user_id = null.
export async function confirmPayment(
  input: ConfirmPaymentInput,
): Promise<{ id: string | null; error: string | null }> {
  if (!supabase) return { id: null, error: 'Supabase is not configured.' }
  const { data, error } = await supabase.functions.invoke('confirm-payment', {
    body: input,
  })
  if (error) return { id: null, error: error.message }
  if (data?.error) return { id: null, error: String(data.error) }
  return { id: (data?.id as string) ?? null, error: null }
}
