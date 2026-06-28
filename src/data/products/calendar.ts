import type { ShopProduct } from '@/data/shop-types'
import catalog from '@/assets/shop/calendar.png'
import hero from '@/assets/shop/calendar/hero.png'
import insideBack from '@/assets/shop/calendar/inside-back.png'
import relatedTracker from '@/assets/shop/calendar/related-tracker.png'
import relatedBreathe from '@/assets/shop/calendar/related-breathe.png'

export const calendar: ShopProduct = {
  slug: 'calendar',
  catalogImage: catalog,
  catalogName: '2027 Calendar',
  catalogPrice: '$20',
  hero: {
    gallery: [hero],
    title: '2027 Calendar',
    subtitle: 'Calendar & Poster — 점자와 7-세그먼트로 표현한 미니멀 캘린더',
    price: '$20',
    description:
      '점자(braille) 모티프로 각 월을 표현한 미니멀 캘린더입니다. B5 양면 캘린더와 B2 포스터로 구성되어 일상의 공간을 따뜻하게 채웁니다.',
    specLines: ['B5 양면 · 176 × 250mm', 'B2 포스터 동봉', '2027 공휴일 표기'],
  },
  story: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why the Calendar',
    paragraphs: [
      '2027 Calendar는 점(dot)으로 시간을 그립니다. 점자와 7-세그먼트 라인으로 각 월의 숫자를 표현한 미니멀한 디자인입니다.',
      'B5 양면 캘린더와 B2 포스터로 구성되어, 책상 위에도 벽에도 DoLF의 무드를 더합니다.',
    ],
  },
  insidePages: {
    eyebrow: 'INSIDE THE PAGES',
    title: 'A look inside',
    items: [
      { caption: 'B5 · 12 Months', image: hero },
      { caption: 'B5 · DoLF Back', image: insideBack },
    ],
  },
  howToUse: {
    eyebrow: 'HOW TO USE',
    title: 'A simple daily rhythm',
    steps: [
      { num: '01', title: 'Hang', desc: '책상이나 벽에 걸어 한 해를 시작하세요.' },
      { num: '02', title: 'Read', desc: '점자로 표현된 달과 날짜를 따라가세요.' },
      { num: '03', title: 'Live', desc: '매일의 공간을 DoLF의 무드로 채우세요.' },
    ],
  },
  features: {
    eyebrow: "WHAT'S INSIDE",
    title: 'Crafted with braille',
    items: [
      { title: '12 Months', desc: '12개월 미니 캘린더' },
      { title: 'Braille', desc: '점자 모티프 디자인' },
      { title: '7-Segment', desc: '7-세그먼트 숫자 라인' },
      { title: 'Double-side', desc: 'B5 양면 구성' },
      { title: 'B2 Poster', desc: 'B2 포스터 동봉' },
      { title: 'Holidays', desc: '2027 공휴일 표기' },
    ],
  },
  specs: {
    eyebrow: 'SPECIFICATIONS',
    title: 'The details',
    rows: [
      { label: 'Size', value: 'B5 양면 · 176 × 250mm' },
      { label: 'Format', value: '캘린더 + 포스터' },
      { label: 'Poster', value: 'B2 · 500 × 707mm' },
      { label: 'Design', value: '점자 + 7-세그먼트' },
      { label: 'Year', value: '2027' },
      { label: 'Holidays', value: '대한민국 공휴일 표기' },
    ],
  },
  shippingFaq: {
    eyebrow: 'SHIPPING & FAQ',
    title: 'Good to know',
    shipping: {
      title: 'Shipping & Returns',
      body: '주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다.',
    },
    faq: [
      {
        q: 'Q. 날짜가 인쇄되어 있나요?',
        a: 'Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다.',
      },
      { q: 'Q. 선물 포장이 되나요?', a: 'DM으로 요청해 주시면 선물 포장을 안내해 드립니다.' },
      { q: 'Q. 해외 배송이 가능한가요?', a: 'Etsy를 통해 글로벌 배송이 가능합니다.' },
    ],
  },
  related: {
    eyebrow: 'MORE FROM DoLF',
    cards: [
      {
        image: relatedTracker,
        title: 'Bible Reading Tracker',
        desc: '성경 통독을 한눈에 시각화하는 기록 도구',
      },
      {
        image: relatedBreathe,
        title: 'Breathe — Planner & Diary',
        desc: '신앙과 일상을 함께 기록하는 플래너',
      },
    ],
  },
}
