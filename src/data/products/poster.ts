import type { ShopProduct } from '@/data/shop-types'
import catalog from '@/assets/shop/poster.png'
import hero from '@/assets/shop/poster/hero.png'
import insideB2 from '@/assets/shop/poster/inside-b2.png'
import relatedCalendar from '@/assets/shop/poster/related-calendar.png'
import relatedBreathe from '@/assets/shop/poster/related-breathe.png'

export const poster: ShopProduct = {
  slug: 'poster',
  catalogImage: catalog,
  catalogName: '2027 Poster (B2)',
  catalogPrice: '$32',
  hero: {
    gallery: [hero],
    title: '2027 Poster',
    subtitle: 'B2 Wall Poster — 점자와 7-세그먼트 숫자로 표현한 캘린더 포스터',
    price: '$32',
    description:
      'DoLF 2027 캘린더를 B2(500×707mm) 대형 포스터로. 미니멀한 점·선 디자인이 한 해 동안 공간을 채웁니다.',
    specLines: ['B2 · 500 × 707mm', '대형 월 포스터', '점자 + 7-세그먼트'],
  },
  story: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why a poster',
    paragraphs: [
      '캘린더는 책상 위에만 있지 않습니다. B2 포스터는 한 해 전체를 벽에 펼쳐, 매일 시선이 닿는 곳에서 시간을 바라보게 합니다.',
      '점자와 7-세그먼트 숫자로 표현한 미니멀 디자인은 공간을 채우는 하나의 오브제가 됩니다.',
    ],
  },
  insidePages: {
    eyebrow: 'INSIDE THE PAGES',
    title: 'A look inside',
    items: [{ caption: 'B2 · 500 × 707mm', image: insideB2 }],
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
    title: 'Made for your wall',
    items: [
      { title: 'B2 Size', desc: '500 × 707mm 대형' },
      { title: '12 Months', desc: '한 해 전체를 한 면에' },
      { title: 'Braille', desc: '점자 모티프 디자인' },
      { title: '7-Segment', desc: '디지털 숫자 월 표기' },
      { title: 'Holidays', desc: '2027 공휴일 표기' },
      { title: 'Wall-ready', desc: '벽을 채우는 미니멀 오브제' },
    ],
  },
  specs: {
    eyebrow: 'SPECIFICATIONS',
    title: 'The details',
    rows: [
      { label: 'Size', value: 'B2 · 500 × 707mm' },
      { label: 'Type', value: '월 포스터 (Wall)' },
      { label: 'Orientation', value: '세로 (Portrait)' },
      { label: 'Design', value: '점자 + 7-세그먼트' },
      { label: 'Year', value: '2027' },
      { label: 'Holidays', value: '대한민국 공휴일' },
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
        image: relatedCalendar,
        title: '2027 Calendar (B5)',
        desc: '점자로 표현한 B5 미니멀 캘린더',
      },
      {
        image: relatedBreathe,
        title: 'Breathe — Planner & Diary',
        desc: '신앙과 일상을 함께 기록하는 플래너',
      },
    ],
  },
}
