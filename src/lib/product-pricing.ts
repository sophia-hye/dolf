import type { Locale } from '@/i18n/types'
import { CURRENCY_BY_LOCALE, formatMoney, parseAmount } from '@/lib/orders'
import { getProductBySlug } from '@/data/products'
import type { ProductOverride } from '@/lib/products-admin'
import { parseCartKey, resolveVariant } from '@/lib/product-variants'

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

// Numeric price used for cart/checkout math. Accepts a cart key that may carry
// a variant suffix. For products with variants, the (code-defined) variant
// price wins; admin price overrides apply only to products without variants.
export function effectivePriceAmount(
  key: string,
  locale: Locale,
  overrides: Overrides,
): number {
  const variant = resolveVariant(key, locale)
  if (variant) return variant.price
  const { slug } = parseCartKey(key)
  const amount = overrideAmount(overrides[slug], locale)
  if (amount != null) return amount
  return parseAmount(getProductBySlug(slug, locale)?.catalogPrice ?? '')
}

// Formatted price string for display.
export function effectivePriceString(
  key: string,
  locale: Locale,
  overrides: Overrides,
): string {
  const variant = resolveVariant(key, locale)
  if (variant) return formatMoney(variant.price, CURRENCY_BY_LOCALE[locale])
  const { slug } = parseCartKey(key)
  const amount = overrideAmount(overrides[slug], locale)
  if (amount != null) return formatMoney(amount, CURRENCY_BY_LOCALE[locale])
  return getProductBySlug(slug, locale)?.catalogPrice ?? ''
}

// Whether the product is visible on the storefront (defaults to true).
export function isPublished(key: string, overrides: Overrides): boolean {
  return overrides[parseCartKey(key).slug]?.published ?? true
}

// Sold out only when a product has a managed row and its stock is 0 or less.
// Products without a row are treated as unmanaged (not sold out).
export function isSoldOut(key: string, overrides: Overrides): boolean {
  const o = overrides[parseCartKey(key).slug]
  return o !== undefined && o.stock <= 0
}

function localeName(o: ProductOverride | undefined, locale: Locale): string | null {
  if (!o) return null
  return locale === 'ko' ? o.name_ko : locale === 'en' ? o.name_en : o.name_ja
}

function localeDesc(o: ProductOverride | undefined, locale: Locale): string | null {
  if (!o) return null
  return locale === 'ko' ? o.desc_ko : locale === 'en' ? o.desc_en : o.desc_ja
}

// Display name (admin override else the code catalog name). For a non-default
// variant (a set), the option label is appended: "Breathe — 3권 세트".
export function effectiveName(key: string, locale: Locale, overrides: Overrides): string {
  const { slug } = parseCartKey(key)
  const base = localeName(overrides[slug], locale) ?? getProductBySlug(slug, locale)?.catalogName ?? ''
  const variants = getProductBySlug(slug, locale)?.variants
  if (variants?.length) {
    const variant = resolveVariant(key, locale)
    if (variant && variant.id !== variants[0].id) return `${base} — ${variant.label}`
  }
  return base
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
