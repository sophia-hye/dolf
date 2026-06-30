import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import { breathe } from '@/data/products/breathe'
import { tracker } from '@/data/products/tracker'
import { calendar } from '@/data/products/calendar'
import { poster } from '@/data/products/poster'
import { topical } from '@/data/products/topical'

// Each product holds a per-locale ShopProduct. Catalog order = Shop grid order.
const localizedProducts: Record<Locale, ShopProduct>[] = [
  breathe,
  tracker,
  calendar,
  poster,
  topical,
]

export function getProducts(locale: Locale): ShopProduct[] {
  return localizedProducts.map((p) => p[locale])
}

export function getProductBySlug(slug: string, locale: Locale): ShopProduct | undefined {
  return localizedProducts.map((p) => p[locale]).find((p) => p.slug === slug)
}

// Stable slug list (locale-independent) for building marketing links.
export const productSlugs: string[] = localizedProducts.map((p) => p.ko.slug)
