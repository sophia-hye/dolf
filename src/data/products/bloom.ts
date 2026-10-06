import type { ShopProduct } from '@/data/shop-types'
import type { Locale } from '@/i18n/types'
import tulip from '@/assets/bloom/tulip.jpg'

// bloom — a thermochromic full-cover B6 note whose black cover reveals a tulip
// with your body warmth. New release (comingSoon until on sale).
export const bloom: Record<Locale, ShopProduct> = {
  ko: {
    slug: 'bloom',
    catalogImage: tulip,
    catalogName: 'bloom — 감온 노트',
    catalogPrice: '₩24,000',
    badge: 'NEW',
    comingSoon: true,
    hero: {
      gallery: [tulip],
      title: 'bloom — 감온 노트',
      subtitle: 'Thermochromic Note — 체온으로 피어나는 노트',
      price: '₩24,000',
      description:
        '평상시엔 고요한 블랙. 손끝의 온기가 닿는 곳마다 튤립이 피어오르고, 식으면 다시 사라집니다. 흰 튤립을 흑백으로 전면 인쇄한 뒤 블랙 감온(thermochromic) 잉크로 덮어, 당신의 체온이 유일한 잉크가 됩니다.',
      specLines: ['B6 · 128 × 182mm', '노출사철 · 좌철', '감온 풀커버 · 형압 bloom·breathe'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'A notebook that blooms with warmth',
      paragraphs: [
        'bloom은 가장 단순한 잉크로 쓰입니다 — 당신의 체온. 평상시엔 완전한 블랙이지만, 손이 닿는 ~33℃의 온기에 감온 잉크가 투명해지며 그 아래 숨어 있던 튤립이 번지듯 피어오릅니다.',
        '겉은 체온으로 피어나고, 속은 깨끗한 무지 필기지로 당신의 하루를 담습니다. 꽃이 피어나듯, 당신의 하루도 당신의 속도대로 피어나기를.',
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Crafted to bloom',
      items: [
        { title: '감온 풀커버', desc: '체온 ~33℃에 발색' },
        { title: '흑백 베다인쇄', desc: '흰 튤립 B&W 전면 인쇄' },
        { title: '형압', desc: 'bloom · breathe · 점자 DoLF (무잉크)' },
        { title: '노출사철', desc: '좌철 · 180도 펼침' },
        { title: '무지 속지', desc: '쓰기 좋은 필기지' },
        { title: 'B6', desc: '128 × 182mm' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6 · 128 × 182mm' },
        { label: 'Binding', value: '노출사철 (Exposed Smyth-sewn) · 좌철' },
        { label: 'Cover', value: '감온 풀커버 (Thermochromic)' },
        { label: 'Deboss', value: 'bloom · breathe · 점자 DoLF (무잉크)' },
        { label: 'Inside', value: '무지 (Plain)' },
        { label: 'Made in', value: 'Korea' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: '정식 출시 후 주문하신 상품은 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다.',
      },
      faq: [
        {
          q: 'Q. 발색은 어떻게 되나요?',
          a: '손의 체온(약 31–33℃)이 닿으면 감온 잉크가 투명해지며 튤립이 드러나고, 식으면 다시 검게 돌아옵니다.',
        },
        {
          q: 'Q. 더운 곳에 두면 발색되나요?',
          a: '직사광선이나 더운 환경에서는 일시적으로 발색될 수 있으나, 온도가 내려가면 원래의 블랙으로 돌아옵니다.',
        },
        { q: 'Q. 커버에 필기할 수 있나요?', a: '커버는 감온 코팅면이라 필기용이 아니며, 속지(무지)에 필기해 주세요.' },
      ],
    },
  },
  en: {
    slug: 'bloom',
    catalogImage: tulip,
    catalogName: 'bloom — Thermochromic Note',
    catalogPrice: '$18',
    badge: 'NEW',
    comingSoon: true,
    hero: {
      gallery: [tulip],
      title: 'bloom — Thermochromic Note',
      subtitle: 'A notebook that blooms with your warmth',
      price: '$18',
      description:
        'A calm black at rest. Wherever your fingertips’ warmth touches, a tulip blooms — and fades again as it cools. A white tulip printed in black-and-white, then flooded with black thermochromic ink, so your body heat becomes the only ink.',
      specLines: ['B6 · 128 × 182mm', 'Exposed Smyth-sewn', 'Thermochromic full cover · blind deboss'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'A notebook that blooms with warmth',
      paragraphs: [
        'bloom is written with the simplest ink — your body heat. Fully black at rest, at the ~33℃ warmth of a touch the thermochromic ink turns clear and the hidden tulip blooms through.',
        'The cover blooms with warmth; inside, clean plain paper holds your day. May your days bloom at your own pace, the way a flower does.',
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Crafted to bloom',
      items: [
        { title: 'Thermo cover', desc: 'Reveals at ~33℃ body heat' },
        { title: 'B&W full print', desc: 'White tulip printed edge to edge' },
        { title: 'Blind deboss', desc: 'bloom · breathe · braille DoLF' },
        { title: 'Exposed sewn', desc: 'Left-bound · lies flat' },
        { title: 'Plain inside', desc: 'Smooth writing paper' },
        { title: 'B6', desc: '128 × 182mm' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6 · 128 × 182mm' },
        { label: 'Binding', value: 'Exposed Smyth-sewn · left-bound' },
        { label: 'Cover', value: 'Thermochromic full cover' },
        { label: 'Deboss', value: 'bloom · breathe · braille DoLF' },
        { label: 'Inside', value: 'Plain' },
        { label: 'Made in', value: 'Korea' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: 'Once on sale, orders ship within 2–3 days by domestic courier. Exchanges and returns due to a change of mind are accepted within 7 days of receiving the item.',
      },
      faq: [
        {
          q: 'Q. How does the reveal work?',
          a: 'Your body heat (about 31–33℃) turns the thermochromic ink clear so the tulip appears, then it returns to black as it cools.',
        },
        {
          q: 'Q. Will it reveal in warm places?',
          a: 'Direct sunlight or hot environments may reveal it temporarily; it returns to black as the temperature drops.',
        },
        { q: 'Q. Can I write on the cover?', a: 'The cover is a thermochromic coating and is not for writing — please write on the plain inside pages.' },
      ],
    },
  },
  ja: {
    slug: 'bloom',
    catalogImage: tulip,
    catalogName: 'bloom — 感温ノート',
    catalogPrice: '¥2,600',
    badge: 'NEW',
    comingSoon: true,
    hero: {
      gallery: [tulip],
      title: 'bloom — 感温ノート',
      subtitle: '体温で咲くノート',
      price: '¥2,600',
      description:
        '普段は静かなブラック。指先の温もりが触れたところからチューリップが咲き、冷めるとまた消えていきます。白いチューリップをモノクロで全面に印刷し、ブラックの感温インクで覆うことで、あなたの体温が唯一のインクになります。',
      specLines: ['B6 · 128 × 182mm', '露出スモース綴じ・左綴じ', '感温フルカバー・空押し'],
    },
    story: {
      eyebrow: 'ABOUT THIS PRODUCT',
      title: 'A notebook that blooms with warmth',
      paragraphs: [
        'bloomは最もシンプルなインク—あなたの体温で書かれます。普段は完全なブラックですが、触れた約33℃の温もりで感温インクが透明になり、隠れていたチューリップが咲きます。',
        '表紙は体温で咲き、中は清潔な無地の用紙があなたの一日を受けとめます。花が咲くように、あなたの毎日もあなたのペースで咲きますように。',
      ],
    },
    features: {
      eyebrow: "WHAT'S INSIDE",
      title: 'Crafted to bloom',
      items: [
        { title: '感温カバー', desc: '体温 ~33℃で発色' },
        { title: 'モノクロ全面印刷', desc: '白いチューリップをB&Wで印刷' },
        { title: '空押し', desc: 'bloom · breathe · 点字 DoLF' },
        { title: '露出綴じ', desc: '左綴じ・180度フラット' },
        { title: '無地の中紙', desc: '書きやすい用紙' },
        { title: 'B6', desc: '128 × 182mm' },
      ],
    },
    specs: {
      eyebrow: 'SPECIFICATIONS',
      title: 'The details',
      rows: [
        { label: 'Size', value: 'B6 · 128 × 182mm' },
        { label: 'Binding', value: '露出スモース綴じ・左綴じ' },
        { label: 'Cover', value: '感温フルカバー' },
        { label: 'Deboss', value: 'bloom · breathe · 点字 DoLF' },
        { label: 'Inside', value: '無地' },
        { label: 'Made in', value: 'Korea' },
      ],
    },
    shippingFaq: {
      eyebrow: 'SHIPPING & FAQ',
      title: 'Good to know',
      shipping: {
        title: 'Shipping & Returns',
        body: '正式発売後、ご注文の商品は2〜3日以内に出荷し、国内宅配便にてお届けします。お客様のご都合による交換・返品は、商品お受け取りから7日以内に承ります。',
      },
      faq: [
        {
          q: 'Q. 発色はどうなりますか？',
          a: '体温（約31〜33℃）が触れると感温インクが透明になりチューリップが現れ、冷めると再び黒に戻ります。',
        },
        {
          q: 'Q. 暑い場所では発色しますか？',
          a: '直射日光や暑い環境では一時的に発色することがありますが、温度が下がると元のブラックに戻ります。',
        },
        { q: 'Q. カバーに書けますか？', a: 'カバーは感温コーティング面のため筆記用ではありません。中紙（無地）にお書きください。' },
      ],
    },
  },
}
