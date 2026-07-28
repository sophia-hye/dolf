import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/breathe.png'
import hero from '@/assets/shop/breathe/hero.png'
import insideMonthly from '@/assets/shop/breathe/inside-monthly.png'
import insideWeekly from '@/assets/shop/breathe/inside-weekly.png'
import insideDaily from '@/assets/shop/breathe/inside-daily.png'
import page1 from '@/assets/shop/breathe/page1.png'
import page2 from '@/assets/shop/breathe/page2.png'
import page3 from '@/assets/shop/breathe/page3.png'
import page4 from '@/assets/shop/breathe/page4.png'
import page5 from '@/assets/shop/breathe/page5.png'
import page6 from '@/assets/shop/breathe/page6.png'
import relatedTracker from '@/assets/shop/breathe/related-tracker.png'
import relatedCalendar from '@/assets/shop/breathe/related-calendar.png'

export const breathe: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'breathe',
    catalogImage: catalog,
    catalogName: 'Breathe — Planner & Diary',
    badge: 'Faith',
    catalogPrice: '$38',
    hero: {
      gallery: [hero],
      title: 'Breathe',
      subtitle: 'Planner & Diary — 신앙과 일상을 함께 기록하는 플래너',
      price: '$38',
      description:
        '하루를 계획하는 동시에 감사·묵상·성찰을 기록할 수 있도록 설계된 루틴 플래너입니다. 완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 돕습니다.',
      specLines: ['B5 · 176 × 250mm', '128 페이지', 'Lay-flat 제본'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why Breathe',
      paragraphs: [
        'Breathe는 단순한 일정 관리 도구가 아닙니다. 하루를 계획하는 동시에 하나님을 기억하고, 삶을 돌아보며, 작은 감사와 묵상을 기록할 수 있도록 설계된 루틴 플래너입니다.',
        '완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 만들었습니다. 매일의 작은 기록이 쌓여 신앙과 일상이 자연스럽게 연결되는 경험을 선물합니다.',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'Monthly', image: insideMonthly },
        { caption: 'Weekly', image: insideWeekly },
        { caption: 'Daily', image: insideDaily },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Designed for your day',
      items: [
        { title: 'Monthly', desc: '한 달의 흐름을 한눈에' },
        { title: 'Weekly', desc: '주간 계획과 루틴' },
        { title: 'Daily', desc: '하루를 의미 있게' },
        { title: 'Sermon Note', desc: '말씀과 설교 기록' },
        { title: 'Reflection', desc: '하루를 돌아보는 성찰' },
        { title: 'Gratitude', desc: '감사 한 줄의 기록' },
      ],
    },
    pagesExplained: {
      eyebrow: 'DESIGNED WITH INTENT',
      title: 'Every page has a reason',
      intro:
        '모든 페이지에는 이유가 있습니다. 각 속지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.',
      items: [
        {
          title: 'Dot of Line and Form',
          desc: '다이어리의 첫 장은 하나의 점(Dot)과 DoLF 로고로 시작합니다. QR 코드로 인스타그램과 연결되어 브랜드의 이야기로 이어집니다.',
          usage:
            '어떻게 쓰나요 — 한 해를 시작하며 점·선·형(Dot·Line·Form)의 철학을 떠올리며 펼쳐보세요.',
          image: page1,
        },
        {
          title: 'One line a day',
          desc: '작은 점이 선이 된다는 믿음에서 출발한 트래커입니다. 하루 한 줄의 기록이 쌓여 습관이 됩니다 — Turn your days from − to +.',
          usage:
            '어떻게 쓰나요 — 매일 한 칸씩 한 줄로 하루를 기록하세요. − 였던 하루가 + 로 바뀌는 것을 보게 됩니다.',
          image: page2,
        },
        {
          title: 'Monthly',
          desc: '한 달의 흐름을 한눈에 봅니다. 약속과 계획, 그리고 신앙의 리듬을 월 단위로 그립니다.',
          usage: '어떻게 쓰나요 — 매달 시작에 주요 일정과 QT·예배 계획을 함께 적어보세요.',
          image: page3,
        },
        {
          title: 'Weekly',
          desc: '7am부터 11pm까지 이어지는 시간축은 하루를 의도적으로 설계하게 합니다. 생산성과 신앙을 하나의 흐름 안에 둡니다.',
          usage: '어떻게 쓰나요 — 한 주의 일정과 QT·기도 시간을 함께 계획하세요.',
          image: page4,
        },
        {
          title: 'Daily QT',
          desc: 'the Word · Question · Reflect · Apply · Pray의 흐름으로 매일의 묵상을 기록합니다. 말씀이 하루의 삶에 적용되도록 설계했습니다.',
          usage:
            '어떻게 쓰나요 — 말씀을 적고, 질문하고, 묵상하고, 삶에 적용하고, 기도로 마무리하세요.',
          image: page5,
        },
        {
          title: 'Man does not live on bread alone',
          desc: "'사람이 떡으로만 살 것이 아니라 하나님의 입으로 나오는 모든 말씀으로 산다'(신명기 8:3). 말씀이 다이어리의 중심임을 기억하게 합니다.",
          usage: '어떻게 쓰나요 — 한 챕터를 시작할 때 이 말씀을 떠올리며 하루를 시작하세요.',
          image: page6,
        },
      ],
    },
    howToUse: {
      eyebrow: 'HOW TO USE',
      title: 'A simple daily rhythm',
      steps: [
        { num: '01', title: 'Plan', desc: 'Monthly · Weekly로 하루와 한 주를 계획하세요.' },
        { num: '02', title: 'Reflect', desc: 'Daily에 말씀과 묵상, 감사를 기록하세요.' },
        { num: '03', title: 'Grow', desc: '매일의 작은 점이 모여 신앙 습관이 됩니다.' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Pages', value: '128 페이지' },
        { label: 'Binding', value: 'Lay-flat 사철 제본' },
        { label: 'Paper', value: '미색 모조지' },
        { label: 'Layout', value: 'Monthly · Weekly · Daily · Sermon · Reflection · Gratitude' },
        { label: 'Dating', value: 'Undated — 원하는 날부터 시작' },
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
          image: relatedCalendar,
          title: '2027 Calendar',
          desc: '점자로 표현한 미니멀 캘린더',
        },
      ],
    },
  },
  en: {
    slug: 'breathe',
    catalogImage: catalog,
    catalogName: 'Breathe — Planner & Diary',
    badge: 'Faith',
    catalogPrice: '$38',
    hero: {
      gallery: [hero],
      title: 'Breathe',
      subtitle: 'Planner & Diary — a planner for recording faith and daily life together',
      price: '$38',
      description:
        'A routine planner designed to let you plan your day while recording gratitude, devotion, and reflection. It helps you focus on living each day meaningfully rather than planning it perfectly.',
      specLines: ['B5 · 176 × 250mm', '128 pages', 'Lay-flat binding'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why Breathe',
      paragraphs: [
        'Breathe is more than a simple scheduling tool. It is a routine planner designed to help you plan your day while remembering God, looking back on your life, and recording small moments of gratitude and devotion.',
        'It was made to help you focus on living each day meaningfully rather than planning it perfectly. Small daily entries accumulate, giving you the experience of faith and everyday life connecting naturally.',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'Monthly', image: insideMonthly },
        { caption: 'Weekly', image: insideWeekly },
        { caption: 'Daily', image: insideDaily },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Designed for your day',
      items: [
        { title: 'Monthly', desc: 'See the flow of the month at a glance' },
        { title: 'Weekly', desc: 'Weekly plans and routines' },
        { title: 'Daily', desc: 'Make each day meaningful' },
        { title: 'Sermon Note', desc: 'Record the Word and sermons' },
        { title: 'Reflection', desc: 'Look back on your day' },
        { title: 'Gratitude', desc: 'A single line of gratitude' },
      ],
    },
    pagesExplained: {
      eyebrow: 'DESIGNED WITH INTENT',
      title: 'Every page has a reason',
      intro:
        'Every page has a reason. Here is why each insert was designed the way it is, and how to use it.',
      items: [
        {
          title: 'Dot of Line and Form',
          desc: 'The first page of the diary begins with a single Dot and the DoLF logo. A QR code links to Instagram, leading into the brand’s story.',
          usage:
            'How to use — As you begin a new year, open it while recalling the philosophy of Dot · Line · Form.',
          image: page1,
        },
        {
          title: 'One line a day',
          desc: 'A tracker born from the belief that small dots become a line. One line a day accumulates into a habit — Turn your days from − to +.',
          usage:
            'How to use — Record your day in a single line, one box each day. You will see days that were − turn into +.',
          image: page2,
        },
        {
          title: 'Monthly',
          desc: 'See the flow of the month at a glance. Map out appointments, plans, and the rhythm of your faith on a monthly scale.',
          usage:
            'How to use — At the start of each month, write down your key schedules alongside your QT and worship plans.',
          image: page3,
        },
        {
          title: 'Weekly',
          desc: 'A timeline running from 7am to 11pm lets you design your day with intention, keeping productivity and faith within one flow.',
          usage:
            'How to use — Plan your weekly schedule together with your QT and prayer time.',
          image: page4,
        },
        {
          title: 'Daily QT',
          desc: 'Record your daily devotion through the flow of the Word · Question · Reflect · Apply · Pray. Designed to help the Word be applied to daily life.',
          usage:
            'How to use — Write down the Word, ask questions, reflect, apply it to your life, and close with prayer.',
          image: page5,
        },
        {
          title: 'Man does not live on bread alone',
          desc: "'Man shall not live on bread alone, but on every word that comes from the mouth of God' (Deuteronomy 8:3). A reminder that the Word is at the heart of the diary.",
          usage:
            'How to use — As you begin a new chapter, recall this verse and start your day with it.',
          image: page6,
        },
      ],
    },
    howToUse: {
      eyebrow: 'HOW TO USE',
      title: 'A simple daily rhythm',
      steps: [
        { num: '01', title: 'Plan', desc: 'Plan your day and week with Monthly · Weekly.' },
        { num: '02', title: 'Reflect', desc: 'Record the Word, devotion, and gratitude in Daily.' },
        { num: '03', title: 'Grow', desc: 'Small daily dots gather into a habit of faith.' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Pages', value: '128 pages' },
        { label: 'Binding', value: 'Lay-flat thread-sewn binding' },
        { label: 'Paper', value: 'Cream wood-free paper' },
        { label: 'Layout', value: 'Monthly · Weekly · Daily · Sermon · Reflection · Gratitude' },
        { label: 'Dating', value: 'Undated — start from any day you like' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Orders ship within 2–3 days via domestic courier. Exchanges and returns for a change of mind are accepted within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. Are the dates pre-printed?',
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
          desc: 'A recording tool that visualizes your Bible reading at a glance',
        },
        {
          image: relatedCalendar,
          title: '2027 Calendar',
          desc: 'A minimal calendar expressed in braille',
        },
      ],
    },
  },
  ja: {
    slug: 'breathe',
    catalogImage: catalog,
    catalogName: 'Breathe — Planner & Diary',
    badge: 'Faith',
    catalogPrice: '$38',
    hero: {
      gallery: [hero],
      title: 'Breathe',
      subtitle: 'Planner & Diary — 信仰と日常をともに記録するプランナー',
      price: '$38',
      description:
        '一日を計画すると同時に、感謝・黙想・省察を記録できるよう設計されたルーティンプランナーです。完璧な計画よりも、一日を意味あるものとして生きることに集中できるよう手助けします。',
      specLines: ['B5 · 176 × 250mm', '128ページ', 'Lay-flat 製本'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why Breathe',
      paragraphs: [
        'Breatheは単なるスケジュール管理ツールではありません。一日を計画すると同時に、神を思い起こし、人生を振り返り、小さな感謝と黙想を記録できるよう設計されたルーティンプランナーです。',
        '完璧な計画よりも、一日を意味あるものとして生きることに集中できるよう作りました。毎日の小さな記録が積み重なり、信仰と日常が自然につながる体験を贈ります。',
      ],
    },
    insidePages: {
      eyebrow: 'INSIDE THE PAGES',
      title: 'A look inside',
      items: [
        { caption: 'Monthly', image: insideMonthly },
        { caption: 'Weekly', image: insideWeekly },
        { caption: 'Daily', image: insideDaily },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Designed for your day',
      items: [
        { title: 'Monthly', desc: 'ひと月の流れを一目で' },
        { title: 'Weekly', desc: '週間の計画とルーティン' },
        { title: 'Daily', desc: '一日を意味あるものに' },
        { title: 'Sermon Note', desc: 'みことばと説教の記録' },
        { title: 'Reflection', desc: '一日を振り返る省察' },
        { title: 'Gratitude', desc: '感謝の一行の記録' },
      ],
    },
    pagesExplained: {
      eyebrow: 'DESIGNED WITH INTENT',
      title: 'Every page has a reason',
      intro:
        'すべてのページには理由があります。それぞれの中紙がなぜこのようにデザインされ、どう使えばよいのかをご紹介します。',
      items: [
        {
          title: 'Dot of Line and Form',
          desc: 'ダイアリーの最初のページは、一つの点（Dot）とDoLFロゴから始まります。QRコードでInstagramとつながり、ブランドの物語へと続きます。',
          usage:
            'どう使うのか — 一年の始まりに、点・線・形（Dot・Line・Form）の哲学を思い起こしながら開いてみてください。',
          image: page1,
        },
        {
          title: 'One line a day',
          desc: '小さな点が線になるという信念から生まれたトラッカーです。一日一行の記録が積み重なり、習慣になります — Turn your days from − to +.',
          usage:
            'どう使うのか — 毎日ひとマスずつ、一行で一日を記録してください。− だった一日が + に変わっていくのが見えてきます。',
          image: page2,
        },
        {
          title: 'Monthly',
          desc: 'ひと月の流れを一目で見渡します。約束や計画、そして信仰のリズムを月単位で描きます。',
          usage:
            'どう使うのか — 毎月の始めに、主な予定とQT・礼拝の計画をあわせて書いてみてください。',
          image: page3,
        },
        {
          title: 'Weekly',
          desc: '7amから11pmまで続く時間軸が、一日を意図的に設計させてくれます。生産性と信仰を一つの流れの中に置きます。',
          usage:
            'どう使うのか — 一週間の予定とQT・祈りの時間をあわせて計画してください。',
          image: page4,
        },
        {
          title: 'Daily QT',
          desc: 'the Word · Question · Reflect · Apply · Prayの流れで、毎日の黙想を記録します。みことばが一日の生活に適用されるよう設計しました。',
          usage:
            'どう使うのか — みことばを書き、問いかけ、黙想し、生活に適用し、祈りで締めくくってください。',
          image: page5,
        },
        {
          title: 'Man does not live on bread alone',
          desc: "「人はパンだけで生きるのではなく、神の口から出る一つ一つのことばによって生きる」（申命記8:3）。みことばがダイアリーの中心であることを思い起こさせます。",
          usage:
            'どう使うのか — 一つの章を始めるとき、このみことばを思い起こしながら一日を始めてください。',
          image: page6,
        },
      ],
    },
    howToUse: {
      eyebrow: 'HOW TO USE',
      title: 'A simple daily rhythm',
      steps: [
        { num: '01', title: 'Plan', desc: 'Monthly · Weeklyで一日と一週間を計画してください。' },
        { num: '02', title: 'Reflect', desc: 'Dailyにみことばと黙想、感謝を記録してください。' },
        { num: '03', title: 'Grow', desc: '毎日の小さな点が集まり、信仰の習慣になります。' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Pages', value: '128ページ' },
        { label: 'Binding', value: 'Lay-flat 糸かがり製本' },
        { label: 'Paper', value: 'クリーム色の上質紙' },
        { label: 'Layout', value: 'Monthly · Weekly · Daily · Sermon · Reflection · Gratitude' },
        { label: 'Dating', value: 'Undated — お好きな日から始められます' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'ご注文後2〜3日以内に出荷され、国内宅配便でお届けします。お客様都合による交換・返品は、商品受け取り後7日以内に承ります。',
      },
      faq: [
        {
          q: 'Q. 日付は印刷されていますか？',
          a: 'Undated方式のため、お好きな日から自由に始められます。',
        },
        { q: 'Q. ギフト包装はできますか？', a: 'DMでご依頼いただければ、ギフト包装についてご案内します。' },
        { q: 'Q. 海外配送は可能ですか？', a: 'Etsyを通じてグローバル配送が可能です。' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedTracker,
          title: 'Bible Reading Tracker',
          desc: '聖書通読を一目で可視化する記録ツール',
        },
        {
          image: relatedCalendar,
          title: '2027 Calendar',
          desc: '点字で表現したミニマルなカレンダー',
        },
      ],
    },
  },
}
