import type { ShopProduct } from '@/data/shop-types'
import catalog from '@/assets/shop/topical.png'
import hero from '@/assets/shop/topical/hero.png'
import insideFoldout from '@/assets/shop/topical/inside-foldout.png'
import topicPsalms from '@/assets/shop/topical/topic-psalms.png'
import topicKings from '@/assets/shop/topical/topic-kings.png'
import topicSynoptic from '@/assets/shop/topical/topic-synoptic.png'
import relatedTracker from '@/assets/shop/topical/related-tracker.png'
import relatedCalendar from '@/assets/shop/topical/related-calendar.png'

export const topical: ShopProduct = {
  slug: 'topical',
  catalogImage: catalog,
  catalogName: 'Topical Reading Tracker',
  catalogPrice: 'from $12',
  hero: {
    gallery: [hero],
    title: 'Topical Reading Tracker',
    subtitle: 'Single Sheet & Foldout — 주제별 성경 통독 트래커',
    price: 'from $12',
    description:
      '한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 복음서 조화, 시편·잠언, 평행 본문 등 주제별로 골라보세요.',
    specLines: ['B5 · 176 × 250mm', '낱장(Single) 또는 접지(Foldout)', '주제별 디자인'],
  },
  story: {
    eyebrow: 'ABOUT THIS PRODUCT',
    title: 'Why topical reading?',
    paragraphs: [
      '성경 전체 통독이 부담될 때, 한 주제를 깊이 따라가 보세요. 복음서 조화, 시편·잠언, 평행 본문 등 주제별로 짜인 1장짜리 트래커입니다.',
      '낱장은 가볍게, 접지는 펼쳐서 더 넓게. 원하는 형태를 골라 책상에 두거나 성경에 끼워 사용하세요.',
    ],
  },
  insidePages: {
    eyebrow: 'A LOOK INSIDE',
    title: 'Single & Foldout',
    items: [
      { caption: 'SINGLE SHEET · 낱장', image: hero },
      { caption: 'FOLDOUT · 접지', image: insideFoldout },
    ],
  },
  pagesExplained: {
    eyebrow: 'TOPICS',
    title: 'A few of the topics',
    intro: '각 주제가 성경의 어느 부분을, 어떤 내용으로 다루는지 살펴보세요.',
    items: [
      {
        title: 'A Harmony of the Gospels',
        desc: '예수님의 탄생부터 부활·승천까지, 네 복음서의 같은 사건을 한 줄에 모아 따라 읽습니다. 복음서마다 강조점이 어떻게 다른지 비교하며 예수님의 생애를 입체적으로 보게 됩니다. (낱장·접지)',
        usage: 'READING · 마태 · 마가 · 누가 · 요한 (4복음서)',
        image: hero,
      },
      {
        title: 'Psalms & Proverbs',
        desc: '매일 시편 5편과 잠언 1장씩, 30일이면 지혜서를 한 바퀴. 예배와 기도의 언어(시편)와 삶의 지혜(잠언)를 매일 함께 묵상합니다.',
        usage: 'READING · 시편 150편 · 잠언 31장',
        image: topicPsalms,
      },
      {
        title: 'Kings & Chronicles',
        desc: '같은 시대를 다룬 두 역사서를 나란히 읽습니다. 열왕기(선지자의 시선)와 역대기(제사장의 시선)가 같은 사건을 어떻게 다르게 기록했는지 비교하며 이스라엘 왕정의 흐름을 봅니다. (낱장·접지)',
        usage: 'READING · 열왕기상·하 · 역대기상·하',
        image: topicKings,
      },
      {
        title: 'Synoptic Gospels',
        desc: '세 공관복음을 평행으로 두고, 같은 비유와 기적이 복음서마다 어떻게 기록됐는지 비교하며 읽습니다. (낱장·접지)',
        usage: 'READING · 마태 · 마가 · 누가 (공관복음)',
        image: topicSynoptic,
      },
    ],
  },
  features: {
    eyebrow: "WHAT'S INSIDE",
    title: 'What you get',
    items: [
      { title: '9 Topics', desc: '복음서 조화부터 평행 본문까지' },
      { title: 'Single & Foldout', desc: '낱장 또는 접지 형태 선택' },
      { title: 'By Chapter', desc: '장(chapter)을 점으로 체크' },
      { title: 'By Theme', desc: '한 주제를 깊이 따라 읽기' },
      { title: 'Notes', desc: '묵상·메모 공간 포함' },
      { title: 'B5 Size', desc: '176 × 250mm' },
    ],
  },
  specs: {
    eyebrow: 'SPECIFICATIONS',
    title: 'The details',
    rows: [
      { label: 'Size', value: 'B5 · 176 × 250mm' },
      { label: 'Format', value: '낱장(Single) · 접지(Foldout)' },
      { label: 'Topics', value: '낱장 9종 · 접지 3종' },
      { label: 'Print', value: '단면 또는 양면' },
      { label: 'Paper', value: '미색 모조지' },
      { label: 'Foldout', value: '+$4 추가' },
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
        desc: '성경 전체를 한 권으로 통독',
      },
      {
        image: relatedCalendar,
        title: '2027 Calendar',
        desc: '점자로 표현한 미니멀 캘린더',
      },
    ],
  },
}
