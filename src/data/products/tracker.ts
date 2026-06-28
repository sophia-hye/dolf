import type { ShopProduct } from '@/data/shop-types'
import catalog from '@/assets/shop/tracker.png'
import hero from '@/assets/shop/tracker/hero.png'
import insideNewTestament from '@/assets/shop/tracker/inside-new-testament.png'
import insideChapter from '@/assets/shop/tracker/inside-chapter.png'
import insideVerse from '@/assets/shop/tracker/inside-verse.png'
import pageBefore from '@/assets/shop/tracker/page-before.png'
import pageReadDots from '@/assets/shop/tracker/page-read-dots.png'
import pageVisualMap from '@/assets/shop/tracker/page-visual-map.png'
import relatedBreathe from '@/assets/shop/tracker/related-breathe.png'
import relatedCalendar from '@/assets/shop/tracker/related-calendar.png'

export const tracker: ShopProduct = {
  slug: 'tracker',
  catalogImage: catalog,
  catalogName: 'Bible Reading Tracker',
  catalogPrice: '$30',
  hero: {
    gallery: [hero],
    title: 'Bible Reading Tracker',
    subtitle: 'Reading Tracker — 성경 통독을 한눈에 시각화하는 기록 도구',
    price: '$30',
    description:
      '1절을 하나의 점(Dot)으로 기록합니다. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하며, 완주를 향한 동기를 지속시킵니다.',
    specLines: ['B5 · 176 × 250mm', '120 페이지', '성경 66권 전체'],
  },
  story: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why the Tracker',
    paragraphs: [
      'Bible Reading Tracker는 단순한 통독표가 아닙니다. 성경을 읽게 만드는 것이 아니라, 읽기를 지속하게 만드는 데 집중합니다.',
      '1절을 하나의 점(Dot)으로 표현해, 읽을수록 점이 채워지고 데이터 아트처럼 나만의 통독 여정이 완성됩니다.',
    ],
  },
  insidePages: {
    eyebrow: 'INSIDE THE PAGES',
    title: 'A look inside',
    items: [
      { caption: 'New Testament', image: insideNewTestament },
      { caption: 'Chapter Tracker', image: insideChapter },
      { caption: 'Verse Tracker', image: insideVerse },
    ],
  },
  features: {
    eyebrow: "WHAT'S INSIDE",
    title: 'Built for the whole journey',
    items: [
      { title: 'Verse Check', desc: '절 단위로 체크' },
      { title: 'Progress', desc: '진행률 시각화' },
      { title: '66 Books', desc: '성경 66권 전체' },
      { title: 'By Genre', desc: '장르별 통독 흐름' },
      { title: 'Data Art', desc: '점이 모여 만드는 데이터 아트' },
      { title: 'Achievement', desc: '완주의 성취감' },
    ],
  },
  pagesExplained: {
    eyebrow: 'DESIGNED WITH INTENT',
    title: 'Every dot has a reason',
    intro:
      '통독표의 모든 페이지에는 이유가 있습니다. 각 페이지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.',
    items: [
      {
        title: 'Before You Begin',
        desc: "66권 1,189장 31,102절. '주의 말씀은 내 발의 등이요'(시 119:105). 통독의 여정을 시작하는 다짐의 페이지입니다.",
        usage:
          '어떻게 쓰나요 — 시작한 날짜를 적고, QR로 인스타그램과 연결해 여정을 함께 나누세요.',
        image: pageBefore,
      },
      {
        title: 'Read the Dots',
        desc: '1절 또는 1장이 하나의 점(Dot)입니다. 읽으면 색을 칠하고, 점의 크기는 분량을, 굵은 링은 5·10 단위를 나타냅니다.',
        usage: '어떻게 쓰나요 — 읽은 곳의 원을 칠하세요. 점이 채워질수록 진도가 한눈에 보입니다.',
        image: pageReadDots,
      },
      {
        title: 'The Visual Map',
        desc: '성경 66권 전체를 하나의 지도로 펼쳤습니다. 점의 크기는 장의 길이를 나타내, 성경의 구조가 한눈에 보입니다.',
        usage: '어떻게 쓰나요 — 전체 진행을 한눈에 확인하며 다음에 읽을 곳을 계획하세요.',
        image: pageVisualMap,
      },
      {
        title: 'Chapter Tracker',
        desc: '장르별(오경·역사서·시가서·선지서·복음서…)로 나누어 장 단위로 체크합니다. 점 크기는 각 장의 길이를 나타냅니다.',
        usage: '어떻게 쓰나요 — 한 장을 읽을 때마다 해당 원을 칠해 나가세요.',
        image: insideChapter,
      },
      {
        title: 'Verse Tracker',
        desc: '1절을 1개의 점으로. 31,102개의 점이 하나씩 채워지며 나만의 데이터 아트가 완성됩니다.',
        usage: '어떻게 쓰나요 — 절 단위로 더 촘촘하게 기록하고 싶을 때 사용하세요.',
        image: insideVerse,
      },
    ],
  },
  howToUse: {
    eyebrow: 'HOW TO USE',
    title: 'A simple daily rhythm',
    steps: [
      { num: '01', title: 'Read', desc: '오늘 분량의 말씀을 읽으세요.' },
      { num: '02', title: 'Check', desc: '읽은 절을 점(Dot)으로 체크하세요.' },
      { num: '03', title: 'See', desc: '점이 모여 나만의 통독 지도가 완성됩니다.' },
    ],
  },
  specs: {
    eyebrow: 'SPECIFICATIONS',
    title: 'The details',
    rows: [
      { label: 'Size', value: 'B5 · 176 × 250mm' },
      { label: 'Pages', value: '120 페이지' },
      { label: 'Binding', value: '사철 제본' },
      { label: 'Paper', value: '미색 모조지' },
      { label: 'Layout', value: '절 단위 체크 · 진행률 시각화' },
      { label: 'Coverage', value: '성경 66권 전체' },
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
        image: relatedBreathe,
        title: 'Breathe — Planner & Diary',
        desc: '신앙과 일상을 함께 기록하는 플래너',
      },
      {
        image: relatedCalendar,
        title: '2027 Calendar',
        desc: '점자로 표현한 미니멀 캘린더',
      },
    ],
  },
}
