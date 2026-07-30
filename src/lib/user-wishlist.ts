import { supabase } from '@/lib/supabase'

// The signed-in user's wishlist slugs, from Supabase.
export async function fetchDbWishlist(userId: string): Promise<string[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('wishlist_items')
    .select('product_slug')
    .eq('user_id', userId)
  if (error || !data) return []
  return data.map((r) => String(r.product_slug))
}

// Full-replace the user's wishlist (small set; keeps DB == memory state).
export async function saveDbWishlist(userId: string, slugs: string[]): Promise<void> {
  if (!supabase) return
  await supabase.from('wishlist_items').delete().eq('user_id', userId)
  if (slugs.length) {
    await supabase
      .from('wishlist_items')
      .insert(slugs.map((slug) => ({ user_id: userId, product_slug: slug })))
  }
}

export function mergeWishlists(a: string[], b: string[]): string[] {
  return [...new Set([...a, ...b])]
}
