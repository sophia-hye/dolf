import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/poster.png'
import hero from '@/assets/shop/poster/hero.png'
import insideB2 from '@/assets/shop/poster/inside-b2.png'
import relatedCalendar from '@/assets/shop/poster/related-calendar.png'
import relatedBreathe from '@/assets/shop/poster/related-breathe.png'

export const poster: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'poster',
    catalogImage: catalog,
    catalogName: '2027 Poster (B2)',
    catalogPrice: '$32',
    hero: {
      gallery: [hero],
      title: '2027 Poster',
      subtitle: 'B2 Wall Poster — 점자와 숫자로 표현한 캘린더 포스터',
      price: '$32',
      description:
        'DoLF 2027 캘린더를 B2(500×707mm) 대형 포스터로. 미니멀한 점·선 디자인이 한 해 동안 공간을 채웁니다.',
      specLines: ['B2 · 500 × 707mm', '대형 월 포스터', '점자 + 숫자'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why a poster',
      paragraphs: [
        '캘린더는 책상 위에만 있지 않습니다. B2 포스터는 한 해 전체를 벽에 펼쳐, 매일 시선이 닿는 곳에서 시간을 바라보게 합니다.',
        '점자와 숫자로 표현한 미니멀 디자인은 공간을 채우는 하나의 오브제가 됩니다.',
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
        { label: 'Design', value: '점자 + 숫자' },
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
        { q: 'Q. 해외 배송이 가능한가요?', a: '우체국 K-Packet으로 해외 배송이 가능합니다.' },
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
  },
  en: {
    slug: 'poster',
    catalogImage: catalog,
    catalogName: '2027 Poster (B2)',
    catalogPrice: '$32',
    hero: {
      gallery: [hero],
      title: '2027 Poster',
      subtitle: 'B2 Wall Poster — a calendar poster rendered in Braille and numbers',
      price: '$32',
      description:
        'The DoLF 2027 calendar as a large B2 (500×707mm) poster. A minimal dot-and-line design fills your space all year long.',
      specLines: ['B2 · 500 × 707mm', 'Large monthly poster', 'Braille + numbers'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why a poster',
      paragraphs: [
        'A calendar does not belong only on your desk. The B2 poster spreads the whole year across your wall, letting you see time wherever your eyes land each day.',
        'The minimal design rendered in Braille and numbers becomes an object that fills the space.',
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
        { num: '01', title: 'Hang', desc: 'Hang it on your desk or wall and begin the year.' },
        { num: '02', title: 'Read', desc: 'Follow the months and dates rendered in Braille.' },
        { num: '03', title: 'Live', desc: 'Fill your everyday space with the DoLF mood.' },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Made for your wall',
      items: [
        { title: 'B2 Size', desc: 'Large 500 × 707mm' },
        { title: '12 Months', desc: 'The whole year on one sheet' },
        { title: 'Braille', desc: 'Braille motif design' },
        { title: '7-Segment', desc: 'Digital-digit month notation' },
        { title: 'Holidays', desc: '2027 holidays marked' },
        { title: 'Wall-ready', desc: 'A minimal object that fills the wall' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B2 · 500 × 707mm' },
        { label: 'Type', value: 'Monthly poster (Wall)' },
        { label: 'Orientation', value: 'Portrait' },
        { label: 'Design', value: 'Braille + numbers' },
        { label: 'Year', value: '2027' },
        { label: 'Holidays', value: 'Republic of Korea holidays' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns for a change of mind are accepted within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. Are the dates pre-printed?',
          a: 'It is undated, so you can freely start from any day you like.',
        },
        { q: 'Q. Is gift wrapping available?', a: 'Send us a DM and we will guide you through gift wrapping.' },
        { q: 'Q. Do you ship internationally?', a: 'International shipping is available via Korea Post K-Packet.' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedCalendar,
          title: '2027 Calendar (B5)',
          desc: 'A minimal B5 calendar rendered in Braille',
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
    slug: 'poster',
    catalogImage: catalog,
    catalogName: '2027 Poster (B2)',
    catalogPrice: '$32',
    hero: {
      gallery: [hero],
      title: '2027 Poster',
      subtitle: 'B2 Wall Poster — 点字と数字で表現したカレンダーポスター',
      price: '$32',
      description:
        'DoLF 2027カレンダーをB2(500×707mm)の大判ポスターに。ミニマルな点と線のデザインが一年を通して空間を彩ります。',
      specLines: ['B2 · 500 × 707mm', '大判マンスリーポスター', '点字 + 数字'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why a poster',
      paragraphs: [
        'カレンダーは机の上だけのものではありません。B2ポスターは一年全体を壁に広げ、毎日視線が届く場所で時間を眺められるようにします。',
        '点字と数字で表現したミニマルなデザインは、空間を彩る一つのオブジェになります。',
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
        { num: '01', title: 'Hang', desc: '机や壁に掛けて一年を始めましょう。' },
        { num: '02', title: 'Read', desc: '点字で表現された月と日付をたどってみましょう。' },
        { num: '03', title: 'Live', desc: '毎日の空間をDoLFのムードで彩りましょう。' },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Made for your wall',
      items: [
        { title: 'B2 Size', desc: '500 × 707mmの大判' },
        { title: '12 Months', desc: '一年全体を一面に' },
        { title: 'Braille', desc: '点字モチーフのデザイン' },
        { title: '7-Segment', desc: 'デジタル数字での月表記' },
        { title: 'Holidays', desc: '2027年の祝日を表記' },
        { title: 'Wall-ready', desc: '壁を彩るミニマルなオブジェ' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B2 · 500 × 707mm' },
        { label: 'Type', value: 'マンスリーポスター (Wall)' },
        { label: 'Orientation', value: '縦 (Portrait)' },
        { label: 'Design', value: '点字 + 数字' },
        { label: 'Year', value: '2027' },
        { label: 'Holidays', value: '大韓民国の祝日' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。お客様都合による交換・返品は、商品受け取り後7日以内に承ります。',
      },
      faq: [
        {
          q: 'Q. 日付は印刷されていますか？',
          a: 'デイトフリー(Undated)仕様で、お好きな日から自由に始められます。',
        },
        { q: 'Q. ギフトラッピングは可能ですか？', a: 'DMでご依頼いただければ、ギフトラッピングをご案内いたします。' },
        { q: 'Q. 海外発送は可能ですか？', a: '郵便局のK-Packetで海外配送が可能です。' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedCalendar,
          title: '2027 Calendar (B5)',
          desc: '点字で表現したB5のミニマルカレンダー',
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
