import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import { breathe } from '@/data/products/breathe'
import cover from '@/assets/shop/breathe-v1/hero.png'
import coverBack from '@/assets/shop/breathe-v1/back.png'
import insideMonthly from '@/assets/shop/breathe-v1/inside-monthly.png'
import insideWeekly from '@/assets/shop/breathe-v1/inside-weekly.png'
import insideTracker from '@/assets/shop/breathe-v1/inside-tracker.png'
import insideDaily from '@/assets/shop/breathe-v1/inside-daily.png'

// Breathe v1 — the compact B6 mono edition of the Breathe QT planner.
// Reuses the Breathe line (devotional story, features, specs, FAQ, related)
// and overrides only what differs for the new edition: name, slug, badge,
// the B6 cover + inside-page previews, and the format spec rows (B6 · 112p).

const SUBTITLE: Record<Locale, string> = {
  ko: 'Planner & Diary — 신앙과 일상을 담은 B6 컴팩트 신판',
  en: 'Planner & Diary — the compact B6 edition',
  ja: 'Planner & Diary — 信仰と日常を綴るB6コンパクト版',
}

const DESCRIPTION: Record<Locale, string> = {
  ko: '손에 잡히는 B6 판형으로 새롭게 선보이는 Breathe입니다. Monthly · Weekly · Tracker · Daily로 하루를 계획하고, 감사와 묵상을 가볍게 들고 다니며 기록하세요.',
  en: 'Breathe, reimagined in a pocketable B6 size. Plan the day with Monthly · Weekly · Tracker · Daily, and carry your gratitude and reflection wherever you go.',
  ja: '手になじむB6サイズで新しくなったBreathe。Monthly · Weekly · Tracker · Daily で一日を計画し、感謝と黙想を軽やかに持ち歩いて記録できます。',
}

const SPEC_LINES: Record<Locale, readonly string[]> = {
  ko: ['B6 · 128 × 182mm', '112 페이지', 'Lay-flat 제본'],
  en: ['B6 · 128 × 182mm', '112 pages', 'Lay-flat binding'],
  ja: ['B6 · 128 × 182mm', '112ページ', 'Lay-flat 製本'],
}

const PAGES_VALUE: Record<Locale, string> = {
  ko: '112 페이지',
  en: '112 pages',
  ja: '112ページ',
}

function build(locale: Locale): ShopProduct {
  const base = breathe[locale]
  return {
    ...base,
    slug: 'breathe-v1',
    catalogImage: cover,
    catalogName: 'Breathe v1',
    badge: 'v1',
    hero: {
      ...base.hero,
      gallery: [cover, coverBack],
      subtitle: SUBTITLE[locale],
      description: DESCRIPTION[locale],
      specLines: SPEC_LINES[locale],
    },
    insidePages: base.insidePages && {
      ...base.insidePages,
      items: [
        { caption: 'Monthly', image: insideMonthly },
        { caption: 'Weekly', image: insideWeekly },
        { caption: 'Tracker', image: insideTracker },
        { caption: 'Daily · Journal', image: insideDaily },
      ],
    },
    // Update the format-specific spec rows for the B6 edition.
    specs: base.specs && {
      ...base.specs,
      rows: base.specs.rows.map((r) => {
        if (r.label === 'Size') return { ...r, value: 'B6 · 128 × 182mm' }
        if (r.label === 'Pages') return { ...r, value: PAGES_VALUE[locale] }
        return r
      }),
    },
  }
}

export const breatheV1: Record<Locale, ShopProduct> = {
  ko: build('ko'),
  en: build('en'),
  ja: build('ja'),
}
