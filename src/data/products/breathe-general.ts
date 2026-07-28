import type { Locale } from '@/i18n/types'
import type { StoryData, FeaturesData } from '@/data/shop-types'

// Secular copy shared by the Breathe general editions (breathe-en / breathe-jp).
// Keeps the story and feature list free of devotional framing.

export const generalStory: Record<Locale, StoryData> = {
  ko: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why Breathe',
    paragraphs: [
      'Breathe는 하루를 계획하고, 돌아보고, 자유롭게 기록하도록 설계된 심플한 루틴 플래너입니다. 정해진 규칙 없이 자신만의 방식으로 하루를 채워 보세요.',
      'Monthly로 한 달의 흐름을 잡고, Weekly로 한 주를 시간 단위로 계획하고, Daily Journal에 오늘의 생각과 할 일을 남깁니다. 매일의 작은 기록이 쌓여 나만의 리듬이 됩니다.',
    ],
  },
  en: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why Breathe',
    paragraphs: [
      'Breathe is a simple routine planner made to help you plan your day, look back on it, and write freely — no rules, just your own way to fill each day.',
      "Map the month with Monthly, block out the week with Weekly, and capture today's thoughts and to-dos in the Daily Journal. Small daily entries add up to a rhythm that is yours.",
    ],
  },
  ja: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why Breathe',
    paragraphs: [
      'Breatheは、一日を計画し、振り返り、自由に記録するためのシンプルなルーティンプランナーです。決まりごとはなく、自分らしい方法で一日を満たしていきましょう。',
      'Monthlyで一か月の流れをつかみ、Weeklyで一週間を時間単位で計画し、Daily Journalに今日の思いややることを書き留めます。日々の小さな記録が、自分だけのリズムになります。',
    ],
  },
}

export const generalFeatures: Record<Locale, FeaturesData> = {
  ko: {
    eyebrow: "WHAT'S INSIDE",
    title: 'Designed for your day',
    items: [
      { title: 'Monthly', desc: '한 달의 흐름을 한눈에' },
      { title: 'Weekly', desc: '시간 단위로 짜는 한 주' },
      { title: 'Tracker', desc: '매일의 습관을 점으로 기록' },
      { title: 'Daily · Journal', desc: '오늘의 생각과 할 일' },
      { title: 'Dot grid · Notes', desc: '자유롭게 쓰는 노트' },
      { title: 'Still Becoming', desc: '나를 돌아보는 페이지' },
    ],
  },
  en: {
    eyebrow: "WHAT'S INSIDE",
    title: 'Designed for your day',
    items: [
      { title: 'Monthly', desc: 'See the flow of the month at a glance' },
      { title: 'Weekly', desc: 'Plan the week by the hour' },
      { title: 'Tracker', desc: 'Mark a daily habit with dots' },
      { title: 'Daily · Journal', desc: "Today's thoughts and to-dos" },
      { title: 'Dot grid · Notes', desc: 'Free notes on dotted pages' },
      { title: 'Still Becoming', desc: 'A page to reflect on yourself' },
    ],
  },
  ja: {
    eyebrow: "WHAT'S INSIDE",
    title: 'Designed for your day',
    items: [
      { title: 'Monthly', desc: '一か月の流れをひと目で' },
      { title: 'Weekly', desc: '時間単位で組む一週間' },
      { title: 'Tracker', desc: '毎日の習慣をドットで記録' },
      { title: 'Daily · Journal', desc: '今日の思いとやること' },
      { title: 'Dot grid · Notes', desc: '自由に書けるノート' },
      { title: 'Still Becoming', desc: '自分を振り返るページ' },
    ],
  },
}
