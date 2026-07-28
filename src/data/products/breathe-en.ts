import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import { breathe } from '@/data/products/breathe'
import { generalStory, generalFeatures } from '@/data/products/breathe-general'
import insideMonthly from '@/assets/shop/breathe-en/inside-monthly.png'
import insideWeekly from '@/assets/shop/breathe-en/inside-weekly.png'
import insideDaily from '@/assets/shop/breathe-en/inside-daily.png'

// English "general" edition — reuses the Breathe line (cover, story, specs,
// related) and overrides only what differs: name, slug, hero copy and the
// English inside-page previews (Monthly · Weekly · Daily Journal).

const SUBTITLE: Record<Locale, string> = {
  ko: 'Planner & Diary — 영문 일반판 (General Edition)',
  en: 'Planner & Diary — English, General Edition',
  ja: 'Planner & Diary — 英語・一般版 (General Edition)',
}

const DESCRIPTION: Record<Locale, string> = {
  ko: '신앙 색채를 덜어 누구나 쓰기 좋은 영문 일반판입니다. Monthly · Weekly · Daily Journal 구성으로 하루를 계획하고 자유롭게 기록하세요.',
  en: 'The English everyday edition — a Monthly · Weekly · Daily Journal planner anyone can use to plan the day and reflect freely.',
  ja: '信仰的な要素を控えた、誰でも使いやすい英語の一般版です。Monthly · Weekly · Daily Journal で一日を計画し、自由に記録できます。',
}

function build(locale: Locale): ShopProduct {
  const base = breathe[locale]
  return {
    ...base,
    slug: 'breathe-en',
    catalogName: 'Breathe — English',
    badge: 'EN',
    story: generalStory[locale],
    features: generalFeatures[locale],
    // Replace the reused (devotional) Layout row with the general layout.
    specs: base.specs && {
      ...base.specs,
      rows: base.specs.rows.map((r) =>
        r.label === 'Layout'
          ? {
              ...r,
              value:
                'Monthly · Weekly · Tracker · Daily Journal · Dot grid · Still Becoming',
            }
          : r,
      ),
    },
    // Skip sections whose reused copy/assets are devotional-specific.
    howToUse: undefined,
    pagesExplained: undefined,
    hero: {
      ...base.hero,
      subtitle: SUBTITLE[locale],
      description: DESCRIPTION[locale],
    },
    insidePages: base.insidePages && {
      ...base.insidePages,
      items: [
        { caption: 'Monthly', image: insideMonthly },
        { caption: 'Weekly', image: insideWeekly },
        { caption: 'Daily · Journal', image: insideDaily },
      ],
    },
  }
}

export const breatheEn: Record<Locale, ShopProduct> = {
  ko: build('ko'),
  en: build('en'),
  ja: build('ja'),
}
