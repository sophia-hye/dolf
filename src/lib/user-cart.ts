import { supabase } from '@/lib/supabase'
import type { CartLine } from '@/state/cart-context'

// The signed-in user's cart, from Supabase (empty on error / not configured).
export async function fetchDbCart(userId: string): Promise<CartLine[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('cart_items')
    .select('product_slug, quantity')
    .eq('user_id', userId)
  if (error || !data) return []
  return data.map((r) => ({
    slug: String(r.product_slug),
    quantity: Math.max(1, Number(r.quantity) || 1),
  }))
}

// Full-replace the user's cart (carts are small; keeps DB == memory state).
export async function saveDbCart(userId: string, items: CartLine[]): Promise<void> {
  if (!supabase) return
  await supabase.from('cart_items').delete().eq('user_id', userId)
  if (items.length) {
    await supabase.from('cart_items').insert(
      items.map((i) => ({ user_id: userId, product_slug: i.slug, quantity: i.quantity })),
    )
  }
}

// Merge two carts by slug, keeping the larger quantity (avoids inflating on
// repeated logins while preserving guest additions).
export function mergeCarts(a: CartLine[], b: CartLine[]): CartLine[] {
  const map = new Map<string, number>()
  for (const it of a) map.set(it.slug, it.quantity)
  for (const it of b) map.set(it.slug, Math.max(map.get(it.slug) ?? 0, it.quantity))
  return [...map].map(([slug, quantity]) => ({ slug, quantity }))
}
