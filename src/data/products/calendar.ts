import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/calendar.png'
import hero from '@/assets/shop/calendar/hero.png'
import insideBack from '@/assets/shop/calendar/inside-back.png'
import relatedTracker from '@/assets/shop/calendar/related-tracker.png'
import relatedBreathe from '@/assets/shop/calendar/related-breathe.png'

export const calendar: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'calendar',
    catalogImage: catalog,
    catalogName: '2027 Calendar',
    catalogPrice: '$20',
    hero: {
      gallery: [hero],
      title: '2027 Calendar',
      subtitle: 'Calendar & Poster — 점자와 숫자로 표현한 미니멀 캘린더',
      price: '$20',
      description:
        '점자(braille) 모티프로 각 월을 표현한 미니멀 캘린더입니다. B5 양면 캘린더와 B2 포스터로 구성되어 일상의 공간을 따뜻하게 채웁니다.',
      specLines: ['B5 양면 · 176 × 250mm', 'B2 포스터 동봉', '2027 공휴일 표기'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        '2027 Calendar는 점(dot)으로 시간을 그립니다. 점자와 숫자로 각 월의 날짜를 표현한 미니멀한 디자인입니다.',
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
        { title: '숫자', desc: '미니멀한 숫자 표현' },
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
        { label: 'Design', value: '점자 + 숫자' },
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
  },
  en: {
    slug: 'calendar',
    catalogImage: catalog,
    catalogName: '2027 Calendar',
    catalogPrice: '$20',
    hero: {
      gallery: [hero],
      title: '2027 Calendar',
      subtitle: 'Calendar & Poster — a minimalist calendar expressed in braille and numbers',
      price: '$20',
      description:
        'A minimalist calendar that expresses each month with a braille motif. Comprising a B5 double-sided calendar and a B2 poster, it warmly fills your everyday spaces.',
      specLines: ['B5 double-sided · 176 × 250mm', 'B2 poster included', '2027 holidays marked'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        'The 2027 Calendar draws time with dots. A minimalist design that expresses each month’s dates with braille and numbers.',
        'Comprising a B5 double-sided calendar and a B2 poster, it adds the DoLF mood to your desk and your wall alike.',
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
        { num: '01', title: 'Hang', desc: 'Hang it on your desk or wall to begin the year.' },
        { num: '02', title: 'Read', desc: 'Follow the months and dates expressed in braille.' },
        { num: '03', title: 'Live', desc: 'Fill your everyday spaces with the DoLF mood.' },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Crafted with braille',
      items: [
        { title: '12 Months', desc: '12-month mini calendar' },
        { title: 'Braille', desc: 'Braille motif design' },
        { title: 'Numbers', desc: 'minimal number forms' },
        { title: 'Double-side', desc: 'B5 double-sided layout' },
        { title: 'B2 Poster', desc: 'B2 poster included' },
        { title: 'Holidays', desc: '2027 holidays marked' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 double-sided · 176 × 250mm' },
        { label: 'Format', value: 'Calendar + poster' },
        { label: 'Poster', value: 'B2 · 500 × 707mm' },
        { label: 'Design', value: 'Braille + numbers' },
        { label: 'Year', value: '2027' },
        { label: 'Holidays', value: 'South Korean holidays marked' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns due to a change of mind are accepted within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. Are the dates printed in?',
          a: 'It is undated, so you can freely start from any day you like.',
        },
        { q: 'Q. Is gift wrapping available?', a: 'Send us a DM and we will guide you through gift wrapping.' },
        { q: 'Q. Is international shipping available?', a: 'Global shipping is available through Etsy.' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedTracker,
          title: 'Bible Reading Tracker',
          desc: 'A logging tool that visualizes your Bible read-through at a glance',
        },
        {
          image: relatedBreathe,
          title: 'Breathe — Planner & Diary',
          desc: 'A planner for recording faith and daily life together',
        },
      ],
    },
  },
  ja: {
    slug: 'calendar',
    catalogImage: catalog,
    catalogName: '2027 Calendar',
    catalogPrice: '$20',
    hero: {
      gallery: [hero],
      title: '2027 Calendar',
      subtitle: 'Calendar & Poster — 点字と数字で表現したミニマルなカレンダー',
      price: '$20',
      description:
        '点字（braille）モチーフで各月を表現したミニマルなカレンダーです。B5両面カレンダーとB2ポスターで構成され、日常の空間を温かく彩ります。',
      specLines: ['B5両面 · 176 × 250mm', 'B2ポスター同梱', '2027年の祝日を記載'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        '2027 Calendarは点（dot）で時間を描きます。点字と数字で各月の日付を表現したミニマルなデザインです。',
        'B5両面カレンダーとB2ポスターで構成され、机の上にも壁にもDoLFのムードを添えます。',
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
        { num: '01', title: 'Hang', desc: '机や壁に掛けて一年を始めましょう。' },
        { num: '02', title: 'Read', desc: '点字で表現された月や日付をたどってみましょう。' },
        { num: '03', title: 'Live', desc: '毎日の空間をDoLFのムードで満たしましょう。' },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Crafted with braille',
      items: [
        { title: '12 Months', desc: '12か月のミニカレンダー' },
        { title: 'Braille', desc: '点字モチーフのデザイン' },
        { title: '数字', desc: 'ミニマルな数字表現' },
        { title: 'Double-side', desc: 'B5両面構成' },
        { title: 'B2 Poster', desc: 'B2ポスター同梱' },
        { title: 'Holidays', desc: '2027年の祝日を記載' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5両面 · 176 × 250mm' },
        { label: 'Format', value: 'カレンダー + ポスター' },
        { label: 'Poster', value: 'B2 · 500 × 707mm' },
        { label: 'Design', value: '点字 + 数字' },
        { label: 'Year', value: '2027' },
        { label: 'Holidays', value: '大韓民国の祝日を記載' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'ご注文後2〜3日以内に出荷し、国内宅配便にてお届けします。お客様のご都合による交換・返品は、商品お受け取りから7日以内に承ります。',
      },
      faq: [
        {
          q: 'Q. 日付は印刷されていますか？',
          a: 'Undated（日付なし）方式で、お好きな日から自由に始められます。',
        },
        { q: 'Q. ギフト包装はできますか？', a: 'DMでご依頼いただければ、ギフト包装についてご案内いたします。' },
        { q: 'Q. 海外配送は可能ですか？', a: 'Etsyを通じて世界各国への配送が可能です。' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedTracker,
          title: 'Bible Reading Tracker',
          desc: '聖書通読を一目で可視化できる記録ツール',
        },
        {
          image: relatedBreathe,
          title: 'Breathe — Planner & Diary',
          desc: '信仰と日常を一緒に記録するプランナー',
        },
      ],
    },
  },
}
