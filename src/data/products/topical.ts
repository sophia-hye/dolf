import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import catalog from '@/assets/shop/topical.png'
import hero from '@/assets/shop/topical/hero.png'
import coverBack from '@/assets/shop/topical/cover-back.png'
import insideFoldout from '@/assets/shop/topical/inside-foldout.png'
import topicPsalms from '@/assets/shop/topical/topic-psalms.png'
import topicKings from '@/assets/shop/topical/topic-kings.png'
import topicSynoptic from '@/assets/shop/topical/topic-synoptic.png'
import relatedTracker from '@/assets/shop/topical/related-tracker.png'
import relatedCalendar from '@/assets/shop/topical/related-calendar.png'

export const topical: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'topical',
    catalogImage: catalog,
    catalogName: 'Topical Reading Tracker',
    badge: 'Faith',
    catalogPrice: 'from ₩8,000',
    hero: {
      gallery: [hero, coverBack],
      title: 'Topical Reading Tracker',
      subtitle: 'Single Sheet & Foldout — 주제별 성경 통독 트래커',
      price: 'from ₩8,000',
      description:
        '한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 사복음서 대조, 시편·잠언, 평행 본문 등 주제별로 골라보세요.',
      specLines: ['B5 · 176 × 250mm', '낱장(Single) 또는 접지(Foldout)', '주제별 디자인'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why topical reading?',
      paragraphs: [
        '성경 전체 통독이 부담될 때, 한 주제를 깊이 따라가 보세요. 사복음서 대조, 시편·잠언, 평행 본문 등 주제별로 짜인 1장짜리 트래커입니다.',
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
        { title: '9 Topics', desc: '사복음서 대조부터 평행 본문까지' },
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
        { label: 'Foldout', value: '+₩8,000 추가' },
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
          desc: '성경 전체를 한 권으로 통독',
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
    slug: 'topical',
    catalogImage: catalog,
    catalogName: 'Topical Reading Tracker',
    badge: 'Faith',
    catalogPrice: 'from $6',
    hero: {
      gallery: [hero, coverBack],
      title: 'Topical Reading Tracker',
      subtitle: 'Single Sheet & Foldout — Topical Bible Reading Tracker',
      price: 'from $6',
      description:
        'A one-page reading tracker for following a single theme in depth. Choose by topic—a Harmony of the Gospels, Psalms & Proverbs, parallel passages, and more.',
      specLines: ['B5 · 176 × 250mm', 'Single sheet or Foldout', 'Designed by topic'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why topical reading?',
      paragraphs: [
        'When reading the whole Bible feels overwhelming, try following one theme in depth. It is a one-page tracker organized by topic—a Harmony of the Gospels, Psalms & Proverbs, parallel passages, and more.',
        'The single sheet is light and simple; the foldout opens up for more space. Pick the format you like and keep it on your desk or tucked into your Bible.',
      ],
    },
    insidePages: {
      eyebrow: 'A LOOK INSIDE',
      title: 'Single & Foldout',
      items: [
        { caption: 'SINGLE SHEET · single', image: hero },
        { caption: 'FOLDOUT · foldout', image: insideFoldout },
      ],
    },
    pagesExplained: {
      eyebrow: 'TOPICS',
      title: 'A few of the topics',
      intro: 'See which part of the Bible each topic covers, and what it focuses on.',
      items: [
        {
          title: 'A Harmony of the Gospels',
          desc: 'From the birth of Jesus to His resurrection and ascension, the same events across all four Gospels are gathered on one line to read together. By comparing how each Gospel emphasizes things differently, you see the life of Jesus in fuller dimension. (Single · Foldout)',
          usage: 'READING · Matthew · Mark · Luke · John (4 Gospels)',
          image: hero,
        },
        {
          title: 'Psalms & Proverbs',
          desc: 'Five Psalms and one chapter of Proverbs each day—a full lap through the wisdom books in 30 days. Meditate daily on both the language of worship and prayer (Psalms) and the wisdom for living (Proverbs).',
          usage: 'READING · Psalms 150 · Proverbs 31',
          image: topicPsalms,
        },
        {
          title: 'Kings & Chronicles',
          desc: 'Read two history books covering the same era side by side. By comparing how Kings (the prophet’s view) and Chronicles (the priest’s view) record the same events differently, you trace the course of Israel’s monarchy. (Single · Foldout)',
          usage: 'READING · 1–2 Kings · 1–2 Chronicles',
          image: topicKings,
        },
        {
          title: 'Synoptic Gospels',
          desc: 'Place the three Synoptic Gospels in parallel and read while comparing how the same parables and miracles are recorded in each Gospel. (Single · Foldout)',
          usage: 'READING · Matthew · Mark · Luke (Synoptic Gospels)',
          image: topicSynoptic,
        },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'What you get',
      items: [
        { title: '9 Topics', desc: 'From a Harmony of the Gospels to parallel passages' },
        { title: 'Single & Foldout', desc: 'Choose a single sheet or foldout format' },
        { title: 'By Chapter', desc: 'Check off each chapter with a dot' },
        { title: 'By Theme', desc: 'Follow one theme in depth' },
        { title: 'Notes', desc: 'Includes space for reflection and notes' },
        { title: 'B5 Size', desc: '176 × 250mm' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Format', value: 'Single · Foldout' },
        { label: 'Topics', value: '9 single sheets · 3 foldouts' },
        { label: 'Print', value: 'Single-sided or double-sided' },
        { label: 'Paper', value: 'Ivory woodfree paper' },
        { label: 'Foldout', value: '+$6 extra' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Orders ship within 2–3 days and are delivered by domestic courier. Exchanges or returns due to a simple change of mind are possible within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. Are dates pre-printed?',
          a: 'It is undated, so you can start freely from any day you like.',
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
          desc: 'Read through the whole Bible in a single book',
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
    slug: 'topical',
    catalogImage: catalog,
    catalogName: 'Topical Reading Tracker',
    badge: 'Faith',
    catalogPrice: 'from ¥900',
    hero: {
      gallery: [hero, coverBack],
      title: 'Topical Reading Tracker',
      subtitle: 'Single Sheet & Foldout — テーマ別聖書通読トラッカー',
      price: 'from ¥900',
      description:
        '一つのテーマを深く追って読む、1枚の通読トラッカーです。福音書の調和、詩篇・箴言、並行箇所など、テーマ別にお選びください。',
      specLines: ['B5 · 176 × 250mm', '1枚（Single）または折り（Foldout）', 'テーマ別デザイン'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'Why topical reading?',
      paragraphs: [
        '聖書全体の通読が負担に感じるときは、一つのテーマを深く追ってみてください。福音書の調和、詩篇・箴言、並行箇所など、テーマ別に組まれた1枚のトラッカーです。',
        '1枚は手軽に、折りは広げてより大きく。お好みの形を選び、机に置いたり聖書に挟んだりしてお使いください。',
      ],
    },
    insidePages: {
      eyebrow: 'A LOOK INSIDE',
      title: 'Single & Foldout',
      items: [
        { caption: 'SINGLE SHEET · 1枚', image: hero },
        { caption: 'FOLDOUT · 折り', image: insideFoldout },
      ],
    },
    pagesExplained: {
      eyebrow: 'TOPICS',
      title: 'A few of the topics',
      intro: '各テーマが聖書のどの部分を、どのような内容で扱っているかをご覧ください。',
      items: [
        {
          title: 'A Harmony of the Gospels',
          desc: 'イエス様の誕生から復活・昇天まで、四つの福音書の同じ出来事を一行にまとめて追って読みます。福音書ごとに強調点がどのように異なるかを比較しながら、イエス様の生涯を立体的に見ることができます。（1枚・折り）',
          usage: 'READING · マタイ · マルコ · ルカ · ヨハネ（4福音書）',
          image: hero,
        },
        {
          title: 'Psalms & Proverbs',
          desc: '毎日、詩篇5篇と箴言1章ずつ、30日で知恵の書を一巡。礼拝と祈りの言葉（詩篇）と人生の知恵（箴言）を毎日ともに黙想します。',
          usage: 'READING · 詩篇150篇 · 箴言31章',
          image: topicPsalms,
        },
        {
          title: 'Kings & Chronicles',
          desc: '同じ時代を扱う二つの歴史書を並べて読みます。列王記（預言者の視点）と歴代誌（祭司の視点）が同じ出来事をどのように異なって記録したかを比較しながら、イスラエル王政の流れを見ます。（1枚・折り）',
          usage: 'READING · 列王記上・下 · 歴代誌上・下',
          image: topicKings,
        },
        {
          title: 'Synoptic Gospels',
          desc: '三つの共観福音書を並行に置き、同じたとえや奇跡が福音書ごとにどのように記録されているかを比較しながら読みます。（1枚・折り）',
          usage: 'READING · マタイ · マルコ · ルカ（共観福音書）',
          image: topicSynoptic,
        },
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'What you get',
      items: [
        { title: '9 Topics', desc: '福音書の調和から並行箇所まで' },
        { title: 'Single & Foldout', desc: '1枚または折りの形を選択' },
        { title: 'By Chapter', desc: '章（chapter）を点でチェック' },
        { title: 'By Theme', desc: '一つのテーマを深く追って読む' },
        { title: 'Notes', desc: '黙想・メモのスペースを含む' },
        { title: 'B5 Size', desc: '176 × 250mm' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B5 · 176 × 250mm' },
        { label: 'Format', value: '1枚（Single） · 折り（Foldout）' },
        { label: 'Topics', value: '1枚9種 · 折り3種' },
        { label: 'Print', value: '片面または両面' },
        { label: 'Paper', value: 'アイボリー上質紙' },
        { label: 'Foldout', value: '+¥900 追加' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。お客様都合による交換・返品は、商品お受け取り後7日以内に承ります。',
      },
      faq: [
        {
          q: 'Q. 日付は印刷されていますか？',
          a: 'Undated（日付なし）方式で、お好きな日から自由に始められます。',
        },
        { q: 'Q. ギフト包装はできますか？', a: 'DMでご依頼いただければ、ギフト包装についてご案内いたします。' },
        { q: 'Q. 海外発送は可能ですか？', a: '郵便局のK-Packetで海外配送が可能です。' },
      ],
    },
    related: {
      eyebrow: 'MORE FROM DoLF',
      cards: [
        {
          image: relatedTracker,
          title: 'Bible Reading Tracker',
          desc: '聖書全体を一冊で通読',
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
