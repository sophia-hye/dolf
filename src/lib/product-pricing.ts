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

function localeName(o: ProductOverride | undefined, locale: Locale): string | null {
  if (!o) return null
  return locale === 'ko' ? o.name_ko : locale === 'en' ? o.name_en : o.name_ja
}

function localeDesc(o: ProductOverride | undefined, locale: Locale): string | null {
  if (!o) return null
  return locale === 'ko' ? o.desc_ko : locale === 'en' ? o.desc_en : o.desc_ja
}

// Display name (admin override else the code catalog name).
export function effectiveName(slug: string, locale: Locale, overrides: Overrides): string {
  return localeName(overrides[slug], locale) ?? getProductBySlug(slug, locale)?.catalogName ?? ''
}

// Detail-page description (admin override else the catalog hero description).
export function effectiveDescription(
  slug: string,
  locale: Locale,
  overrides: Overrides,
): string {
  return (
    localeDesc(overrides[slug], locale) ??
    getProductBySlug(slug, locale)?.hero.description ??
    ''
  )
}

// Cover badge (admin override else the catalog badge). Empty string hides it.
export function effectiveBadge(
  slug: string,
  locale: Locale,
  overrides: Overrides,
): string | undefined {
  const o = overrides[slug]
  if (o && o.badge !== null) return o.badge || undefined
  return getProductBySlug(slug, locale)?.badge
}
