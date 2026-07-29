import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/tracker.png'
import hero from '@/assets/shop/tracker/hero.png'
import coverBack from '@/assets/shop/tracker/cover-back.png'
import insideNewTestament from '@/assets/shop/tracker/inside-new-testament.png'
import insideChapter from '@/assets/shop/tracker/inside-chapter.png'
import insideVerse from '@/assets/shop/tracker/inside-verse.png'
import pageBefore from '@/assets/shop/tracker/page-before.png'
import pageReadDots from '@/assets/shop/tracker/page-read-dots.png'
import pageVisualMap from '@/assets/shop/tracker/page-visual-map.png'
import relatedBreathe from '@/assets/shop/tracker/related-breathe.png'
import relatedCalendar from '@/assets/shop/tracker/related-calendar.png'

export const tracker: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'tracker',
    catalogImage: catalog,
    catalogName: 'Bible Reading Tracker',
    catalogPrice: '$30',
    hero: {
      gallery: [hero, coverBack],
      title: 'Bible Reading Tracker',
      subtitle: 'Reading Tracker — 성경 통독을 한눈에 시각화하는 기록 도구',
      price: '$30',
      description:
        '1절을 하나의 점(Dot)으로 기록합니다. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하며, 완주를 향한 동기를 지속시킵니다.',
      specLines: ['B5 · 176 × 250mm', '120 페이지', 'Lay-flat 제본', '성경 66권 전체'],
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
        { label: 'Binding', value: 'Lay-flat 사철 제본' },
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
        { q: 'Q. 해외 배송이 가능한가요?', a: '우체국 K-Packet으로 해외 배송이 가능합니다.' },
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
  },
  en: {
    slug: 'tracker',
    catalogImage: catalog,
    catalogName: 'Bible Reading Tracker',
    catalogPrice: '$30',
    hero: {
      gallery: [hero, coverBack],
      title: 'Bible Reading Tracker',
      subtitle: 'Reading Tracker — a journaling tool that visualizes your Bible reading at a glance',
      price: '$30',
      description:
        'Record each verse as a single dot. As dots gather into lines and surfaces, your reading journey takes visual shape, keeping your motivation alive all the way to the finish.',
      specLines: ['B5 · 176 × 250mm', '120 pages', 'Lay-flat binding', 'All 66 books of the Bible'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Tracker',
      paragraphs: [
        'The Bible Reading Tracker is more than a simple reading chart. It focuses not on making you read the Bible, but on helping you keep reading.',
        'Each verse becomes a single dot, so the more you read, the more dots fill in—completing your own reading journey like a piece of data art.',
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
        { title: 'Verse Check', desc: 'Check off verse by verse' },
        { title: 'Progress', desc: 'Visualize your progress' },
        { title: '66 Books', desc: 'All 66 books of the Bible' },
        { title: 'By Genre', desc: 'A reading flow organized by genre' },
        { title: 'Data Art', desc: 'Data art formed by gathering dots' },
        { title: 'Achievement', desc: 'The satisfaction of finishing' },
      ],
    },
    pagesExplained: {
      eyebrow: 'DESIGNED WITH INTENT',
      title: 'Every dot has a reason',
      intro:
        'Every page of the tracker has a reason behind it. Here we introduce why each page is designed the way it is and how to use it.',
      items: [
        {
          title: 'Before You Begin',
          desc: "66 books, 1,189 chapters, 31,102 verses. 'Your word is a lamp to my feet' (Psalm 119:105). A page of resolve to begin your reading journey.",
          usage:
            'How to use it — Write down the date you started and connect to Instagram via the QR code to share your journey.',
          image: pageBefore,
        },
        {
          title: 'Read the Dots',
          desc: 'One verse or one chapter is a single dot. Color it in as you read; the size of the dot shows the length, and the bold rings mark units of 5 and 10.',
          usage: 'How to use it — Color in the circle for the part you read. The more dots fill in, the more clearly you can see your progress at a glance.',
          image: pageReadDots,
        },
        {
          title: 'The Visual Map',
          desc: 'All 66 books of the Bible spread out as a single map. The size of each dot shows the length of the chapter, so the structure of the Bible is visible at a glance.',
          usage: 'How to use it — Check your overall progress at a glance and plan where to read next.',
          image: pageVisualMap,
        },
        {
          title: 'Chapter Tracker',
          desc: 'Divided by genre (Pentateuch, History, Poetry, Prophets, Gospels…) and checked off chapter by chapter. The dot size shows the length of each chapter.',
          usage: 'How to use it — Color in the corresponding circle each time you read a chapter.',
          image: insideChapter,
        },
        {
          title: 'Verse Tracker',
          desc: 'One verse, one dot. As all 31,102 dots fill in one by one, your own data art comes together.',
          usage: 'How to use it — Use this when you want to track more finely, verse by verse.',
          image: insideVerse,
        },
      ],
    },
    howToUse: {
      eyebrow: 'HOW TO USE',
      title: 'A simple daily rhythm',
      steps: [
        { num: '01', title: 'Read', desc: "Read today's portion of Scripture." },
        { num: '02', title: 'Check', desc: 'Check off the verses you read as dots.' },
        { num: '03', title: 'See', desc: 'The dots gather to complete your own reading map.' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Pages', value: '120 pages' },
        { label: 'Binding', value: 'Lay-flat thread-sewn binding' },
        { label: 'Paper', value: 'Cream uncoated paper' },
        { label: 'Layout', value: 'Verse-by-verse check · progress visualization' },
        { label: 'Coverage', value: 'All 66 books of the Bible' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns due to a simple change of mind are accepted within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. Are the dates pre-printed?',
          a: "It's undated, so you can start freely from any day you like.",
        },
        { q: 'Q. Is gift wrapping available?', a: 'Send us a DM and we will guide you through gift wrapping.' },
        { q: 'Q. Is international shipping available?', a: 'International shipping is available via Korea Post K-Packet.' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedBreathe,
          title: 'Breathe — Planner & Diary',
          desc: 'A planner for journaling faith and daily life together',
        },
        {
          image: relatedCalendar,
          title: '2027 Calendar',
          desc: 'A minimalist calendar expressed in braille',
        },
      ],
    },
  },
  ja: {
    slug: 'tracker',
    catalogImage: catalog,
    catalogName: 'Bible Reading Tracker',
    catalogPrice: '$30',
    hero: {
      gallery: [hero, coverBack],
      title: 'Bible Reading Tracker',
      subtitle: 'Reading Tracker — 聖書通読を一目で可視化する記録ツールです',
      price: '$30',
      description:
        '1節を1つの点（Dot）として記録します。点が集まって線になり面になる通読の旅を視覚的に完成させ、読み通すための動機を持続させます。',
      specLines: ['B5 · 176 × 250mm', '120ページ', 'Lay-flat製本', '聖書66巻すべて'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why the Tracker',
      paragraphs: [
        'Bible Reading Tracker は単なる通読表ではありません。聖書を読ませることではなく、読み続けられるようにすることに重点を置いています。',
        '1節を1つの点（Dot）で表現し、読むほどに点が埋まっていき、データアートのように自分だけの通読の旅が完成します。',
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
        { title: 'Verse Check', desc: '節単位でチェック' },
        { title: 'Progress', desc: '進捗の可視化' },
        { title: '66 Books', desc: '聖書66巻すべて' },
        { title: 'By Genre', desc: 'ジャンル別の通読の流れ' },
        { title: 'Data Art', desc: '点が集まって生まれるデータアート' },
        { title: 'Achievement', desc: '読み通す達成感' },
      ],
    },
    pagesExplained: {
      eyebrow: 'DESIGNED WITH INTENT',
      title: 'Every dot has a reason',
      intro:
        '通読表のすべてのページには理由があります。各ページがなぜこのようにデザインされ、どう使えばよいのかをご紹介します。',
      items: [
        {
          title: 'Before You Begin',
          desc: "66巻1,189章31,102節。『あなたのみことばは、私の足のともしび』（詩篇119:105）。通読の旅を始める決意のページです。",
          usage:
            'どう使うの — 始めた日付を書き、QRでInstagramとつないで旅を一緒に分かち合いましょう。',
          image: pageBefore,
        },
        {
          title: 'Read the Dots',
          desc: '1節または1章が1つの点（Dot）です。読んだら色を塗り、点の大きさは分量を、太いリングは5・10の単位を表します。',
          usage: 'どう使うの — 読んだところの円を塗りましょう。点が埋まるほど進み具合が一目でわかります。',
          image: pageReadDots,
        },
        {
          title: 'The Visual Map',
          desc: '聖書66巻すべてを1つの地図として広げました。点の大きさは章の長さを表し、聖書の構造が一目でわかります。',
          usage: 'どう使うの — 全体の進み具合を一目で確認し、次に読むところを計画しましょう。',
          image: pageVisualMap,
        },
        {
          title: 'Chapter Tracker',
          desc: 'ジャンル別（モーセ五書・歴史書・詩歌書・預言書・福音書…）に分け、章単位でチェックします。点の大きさは各章の長さを表します。',
          usage: 'どう使うの — 1章読むごとに、その円を塗っていきましょう。',
          image: insideChapter,
        },
        {
          title: 'Verse Tracker',
          desc: '1節を1つの点に。31,102個の点が1つずつ埋まっていき、自分だけのデータアートが完成します。',
          usage: 'どう使うの — 節単位でより細かく記録したいときにお使いください。',
          image: insideVerse,
        },
      ],
    },
    howToUse: {
      eyebrow: 'HOW TO USE',
      title: 'A simple daily rhythm',
      steps: [
        { num: '01', title: 'Read', desc: '今日の分量のみことばを読みましょう。' },
        { num: '02', title: 'Check', desc: '読んだ節を点（Dot）でチェックしましょう。' },
        { num: '03', title: 'See', desc: '点が集まって自分だけの通読地図が完成します。' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Pages', value: '120ページ' },
        { label: 'Binding', value: 'Lay-flat 糸かがり製本' },
        { label: 'Paper', value: 'クリーム色の上質紙' },
        { label: 'Layout', value: '節単位チェック · 進捗の可視化' },
        { label: 'Coverage', value: '聖書66巻すべて' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。単なるお気持ちの変化による交換・返品は、商品お受け取り後7日以内に承ります。',
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
          image: relatedBreathe,
          title: 'Breathe — Planner & Diary',
          desc: '信仰と日常を一緒に記録するプランナー',
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
