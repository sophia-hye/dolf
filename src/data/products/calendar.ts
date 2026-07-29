import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/calendar.png'
import hero from '@/assets/shop/calendar/hero.png'
import coverBack from '@/assets/shop/calendar/cover-back.png'
import insideBack from '@/assets/shop/calendar/inside-back.png'
import relatedTracker from '@/assets/shop/calendar/related-tracker.png'
import relatedBreathe from '@/assets/shop/calendar/related-breathe.png'

export const calendar: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'calendar',
    catalogImage: catalog,
    catalogName: '2027 Calendar',
    catalogPrice: '₩8,000',
    hero: {
      gallery: [hero, coverBack],
      title: '2027 Calendar',
      subtitle: 'Calendar — 점자와 숫자로 표현한 미니멀 캘린더',
      price: '₩8,000',
      description:
        '점자(braille) 모티프로 각 월을 표현한 미니멀 캘린더입니다. B6 양면 낱장으로, 일상의 공간을 따뜻하게 채웁니다.',
      specLines: ['B6 양면 · 128 × 182mm', '낱장 · 제본 없음', '2027 공휴일 표기'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        '2027 Calendar는 점(dot)으로 시간을 그립니다. 점자와 숫자로 각 월의 날짜를 표현한 미니멀한 디자인입니다.',
        'B6 양면 낱장으로, 책상 위에도 벽에도 DoLF의 무드를 더합니다.',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'B6 · 12 Months', image: hero },
        { caption: 'B6 · DoLF Back', image: insideBack },
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
        { title: 'Double-side', desc: 'B6 양면 구성' },
        { title: 'Single Sheet', desc: '낱장 · 제본 없음' },
        { title: 'Holidays', desc: '2027 공휴일 표기' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6 양면 · 128 × 182mm' },
        { label: 'Format', value: '낱장 (Single Sheet)' },
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
        { q: 'Q. 해외 배송이 가능한가요?', a: '우체국 K-Packet으로 해외 배송이 가능합니다.' },
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
    catalogPrice: '$6',
    hero: {
      gallery: [hero, coverBack],
      title: '2027 Calendar',
      subtitle: 'Calendar — a minimalist calendar expressed in braille and numbers',
      price: '$6',
      description:
        'A minimalist calendar that expresses each month with a braille motif. A B6 double-sided single sheet that warmly fills your everyday spaces.',
      specLines: ['B6 double-sided · 128 × 182mm', 'Single sheet · no binding', '2027 holidays marked'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        'The 2027 Calendar draws time with dots. A minimalist design that expresses each month’s dates with braille and numbers.',
        'A B6 double-sided single sheet that adds the DoLF mood to your desk and your wall alike.',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'B6 · 12 Months', image: hero },
        { caption: 'B6 · DoLF Back', image: insideBack },
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
        { title: 'Double-side', desc: 'B6 double-sided layout' },
        { title: 'Single Sheet', desc: 'Single sheet · no binding' },
        { title: 'Holidays', desc: '2027 holidays marked' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6 double-sided · 128 × 182mm' },
        { label: 'Format', value: 'Single sheet' },
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
        { q: 'Q. Is international shipping available?', a: 'International shipping is available via Korea Post K-Packet.' },
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
    catalogPrice: '¥900',
    hero: {
      gallery: [hero, coverBack],
      title: '2027 Calendar',
      subtitle: 'Calendar — 点字と数字で表現したミニマルなカレンダー',
      price: '¥900',
      description:
        '点字（braille）モチーフで各月を表現したミニマルなカレンダーです。B6両面の1枚もので、日常の空間を温かく彩ります。',
      specLines: ['B6両面 · 128 × 182mm', '1枚もの・製本なし', '2027年の祝日を記載'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Calendar',
      paragraphs: [
        '2027 Calendarは点（dot）で時間を描きます。点字と数字で各月の日付を表現したミニマルなデザインです。',
        'B6両面の1枚もので、机の上にも壁にもDoLFのムードを添えます。',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'B6 · 12 Months', image: hero },
        { caption: 'B6 · DoLF Back', image: insideBack },
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
        { title: 'Double-side', desc: 'B6両面構成' },
        { title: 'Single Sheet', desc: '1枚もの・製本なし' },
        { title: 'Holidays', desc: '2027年の祝日を記載' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6両面 · 128 × 182mm' },
        { label: 'Format', value: '1枚もの (Single Sheet)' },
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
        { q: 'Q. 海外配送は可能ですか？', a: '郵便局のK-Packetで海外配送が可能です。' },
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
