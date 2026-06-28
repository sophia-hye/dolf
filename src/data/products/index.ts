import type { ShopProduct } from '@/data/shop-types'
import { breathe } from '@/data/products/breathe'
import { tracker } from '@/data/products/tracker'
import { calendar } from '@/data/products/calendar'
import { poster } from '@/data/products/poster'
import { topical } from '@/data/products/topical'

// Product catalog ordered as shown in the Shop grid.
export const products: ShopProduct[] = [breathe, tracker, calendar, poster, topical]

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return products.find((p) => p.slug === slug)
}
