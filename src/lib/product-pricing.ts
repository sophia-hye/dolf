import type { Locale } from '@/i18n/types'
import { CURRENCY_BY_LOCALE, formatMoney, parseAmount } from '@/lib/orders'
import { getProductBySlug } from '@/data/products'
import type { ProductOverride } from '@/lib/products-admin'

type Overrides = Record<string, ProductOverride>

// The admin-set price for a slug in a locale's currency, or null to fall back
// to the code catalog price.
function overrideAmount(o: ProductOverride | undefined, locale: Locale): number | null {
  if (!o) return null
  const currency = CURRENCY_BY_LOCALE[locale]
  const amount =
    currency === 'KRW' ? o.price_krw : currency === 'USD' ? o.price_usd : o.price_jpy
  return amount ?? null
}

// Numeric price used for cart/checkout math.
export function effectivePriceAmount(
  slug: string,
  locale: Locale,
  overrides: Overrides,
): number {
  const amount = overrideAmount(overrides[slug], locale)
  if (amount != null) return amount
  return parseAmount(getProductBySlug(slug, locale)?.catalogPrice ?? '')
}

// Formatted price string for display.
export function effectivePriceString(
  slug: string,
  locale: Locale,
  overrides: Overrides,
): string {
  const amount = overrideAmount(overrides[slug], locale)
  if (amount != null) return formatMoney(amount, CURRENCY_BY_LOCALE[locale])
  return getProductBySlug(slug, locale)?.catalogPrice ?? ''
}

// Whether the product is visible on the storefront (defaults to true).
export function isPublished(slug: string, overrides: Overrides): boolean {
  return overrides[slug]?.published ?? true
}
