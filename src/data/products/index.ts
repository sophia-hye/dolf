import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import { breathe } from '@/data/products/breathe'
import { breatheEn } from '@/data/products/breathe-en'
import { breatheJp } from '@/data/products/breathe-jp'
import { breatheV1 } from '@/data/products/breathe-v1'
import { tracker } from '@/data/products/tracker'
import { calendar } from '@/data/products/calendar'
import { poster } from '@/data/products/poster'
import { topical } from '@/data/products/topical'

// Each product holds a per-locale ShopProduct. Catalog order = Shop grid order.
const localizedProducts: Record<Locale, ShopProduct>[] = [
  breathe,
  breatheEn,
  breatheJp,
  breatheV1,
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
