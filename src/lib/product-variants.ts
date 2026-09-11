import type { Locale } from '@/i18n/types'
import type { ProductVariant } from '@/data/shop-types'
import { getProductBySlug } from '@/data/products'

// Cart lines are keyed by slug. A product option (variant) is encoded as a
// suffix: "breathe::set3". The default (first / single) variant uses the bare
// slug so it stays consistent with the Shop grid's add-to-cart and with any
// pre-existing cart entries.
export const VARIANT_SEP = '::'

export interface ParsedKey {
  readonly slug: string
  readonly variantId?: string
}

export function parseCartKey(key: string): ParsedKey {
  const i = key.indexOf(VARIANT_SEP)
  if (i === -1) return { slug: key }
  return { slug: key.slice(0, i), variantId: key.slice(i + VARIANT_SEP.length) }
}

// Build a cart key for a chosen variant. The first variant (single) maps to the
// bare slug so single purchases never fragment into a separate key.
export function makeCartKey(
  slug: string,
  variantId: string,
  firstVariantId?: string,
): string {
  if (!variantId || variantId === firstVariantId) return slug
  return `${slug}${VARIANT_SEP}${variantId}`
}

// Resolve the selected variant for a cart key, defaulting to the first variant.
// Returns undefined for products that have no variants.
export function resolveVariant(key: string, locale: Locale): ProductVariant | undefined {
  const { slug, variantId } = parseCartKey(key)
  const variants = getProductBySlug(slug, locale)?.variants
  if (!variants?.length) return undefined
  return variants.find((v) => v.id === variantId) ?? variants[0]
}
