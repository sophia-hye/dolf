import type { Locale } from '@/i18n/types'

// Products that are different editions of the same item are grouped so the
// storefront can show one card with an edition selector, while each edition
// keeps its own slug (and therefore its own stock and detail content).
const GROUPS: Record<string, readonly string[]> = {
  breathe: ['breathe', 'breathe-en', 'breathe-jp'],
}

const LABELS: Record<string, Record<Locale, string>> = {
  breathe: { ko: '신앙', en: 'Faith', ja: '信仰' },
  'breathe-en': { ko: '영어', en: 'English', ja: '英語' },
  'breathe-jp': { ko: '일본어', en: 'Japanese', ja: '日本語' },
}

export interface EditionOption {
  readonly slug: string
  readonly label: string
}

// The editions of the group a slug belongs to (in order), or undefined if the
// product is standalone.
export function editionsFor(slug: string, locale: Locale): EditionOption[] | undefined {
  const group = Object.values(GROUPS).find((g) => g.includes(slug))
  if (!group) return undefined
  return group.map((s) => ({ slug: s, label: LABELS[s]?.[locale] ?? s }))
}
