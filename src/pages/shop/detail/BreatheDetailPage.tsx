import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { getProductBySlug } from '@/data/products'
import { useCart } from '@/state/cart-context'
import { useProductOverrides } from '@/state/products-context'
import { isSoldOut } from '@/lib/product-pricing'
import { makeCartKey } from '@/lib/product-variants'
import { formatMoney, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import type { Locale } from '@/i18n/types'

const P = '/images/breathe/'

// Editorial moodboard PDP for Breathe. Bespoke layout (not the shared template)
// matching the Figma "PDP" mood: bold display headline, monospace labels,
// asymmetric image collages, a desktop sticky purchase rail and a mobile
// fixed bottom bar.

type Copy = {
  brandLine: string
  aboutStory: string
  whyBody: string
  stillLine: string
  insideLead: string
  monthly: string
  weekly: string
  daily: string
  dailyNote: string
  layFlat: string
  howToUse: string
  editions: string
  cta: string
  materials: Array<[string, string]>
  shipping: string[]
  free: string
}

const COPY: Record<Locale, Copy> = {
  ko: {
    brandLine: '숨을 고르듯, 하루를 씁니다.',
    aboutStory:
      'DoLF는 하나의 점(dot)이 선(line)이 되고 형(form)이 되는 과정을 믿는 브랜드입니다. Breathe는 그 믿음에서 시작된 다이어리예요. 하루를 계획하는 일과 하나님을 기억하는 일을 한 페이지 안에 자연스럽게 담았습니다. 완벽한 계획보다, 하루를 의미 있게 살아가는 데 집중하도록. 매일의 작은 기록이 쌓여 신앙과 일상이 하나의 리듬이 됩니다.',
    whyBody:
      '완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 설계된 루틴 플래너입니다. 매일의 작은 기록이 쌓여 신앙과 일상이 자연스럽게 연결됩니다.',
    stillLine: '숨을 고르는 순간, 곁에 둔 작은 초록.',
    insideLead: '모든 속지에는 이유가 있습니다.',
    monthly: '한 달의 흐름과 신앙의 리듬을 한눈에.',
    weekly: '7am–11pm, 하루를 의도적으로 설계하는 주간.',
    daily: '말씀·묵상·감사를 하루 한 페이지에.',
    dailyNote:
      'the Word · Question · Reflect · Apply · Pray — 말씀을 하루에 적용하는 QT 기록의 예시.',
    layFlat: '완전히 펼쳐지는 노출 제본',
    howToUse: '신앙 · 영어 · 일본 에디션',
    editions: '구성 선택',
    cta: 'ADD TO CART · 장바구니 담기',
    materials: [
      ['SIZE', 'B6 · 128 × 182 mm'],
      ['PAGES', '128p'],
      ['BINDING', '사철 노출제본'],
      ['PAPER', '올드밀 130g'],
      ['COVER', 'Extra Cotton 240g'],
    ],
    shipping: [
      '주문 후 2–3일 내 출고 · 국내 택배',
      '단순 변심 교환·반품 — 상품 수령 후 7일 내',
      '해외 배송 — 우체국 K-Packet',
      '선물 포장 — DM 문의',
    ],
    free: '7만원 이상 구매 시 국내 무료배송',
  },
  en: {
    brandLine: 'Breathe in, write it down.',
    aboutStory:
      'DoLF believes in the process where a dot becomes a line and a line becomes a form. Breathe is a diary born from that belief. Planning your day and remembering God live together on one page — designed so you focus on living each day meaningfully rather than planning it perfectly. Small daily entries gather until faith and everyday life become a single rhythm.',
    whyBody:
      'A routine planner designed to help you focus on living each day meaningfully rather than planning it perfectly. Small daily entries accumulate, connecting faith and everyday life.',
    stillLine: 'A moment to breathe, a little green kept close.',
    insideLead: 'Every page has a reason.',
    monthly: 'The flow of the month and the rhythm of faith, at a glance.',
    weekly: '7am–11pm — a week you design with intention.',
    daily: 'The Word, devotion, and gratitude on a single page a day.',
    dailyNote:
      'the Word · Question · Reflect · Apply · Pray — an example of QT notes applying the Word to your day.',
    layFlat: 'Exposed binding that lies completely flat',
    howToUse: 'Faith · English · Japanese editions',
    editions: 'Choose an option',
    cta: 'ADD TO CART',
    materials: [
      ['SIZE', 'B6 · 128 × 182 mm'],
      ['PAGES', '128p'],
      ['BINDING', 'Thread-sewn, exposed spine'],
      ['PAPER', 'Old Mill 130g'],
      ['COVER', 'Extra Cotton 240g'],
    ],
    shipping: [
      'Ships within 2–3 days · domestic courier',
      'Exchange/return within 7 days of receipt',
      'International — Korea Post K-Packet',
      'Gift wrapping — DM us',
    ],
    free: 'Free domestic shipping over ₩70,000',
  },
  ja: {
    brandLine: '呼吸を整えるように、一日を書く。',
    aboutStory:
      'DoLFは、点（dot）が線（line）になり、形（form）になる過程を信じるブランドです。Breatheはその信念から生まれたダイアリー。一日を計画することと神を思い起こすことを、一つのページの中に自然に収めました。完璧な計画よりも、一日を意味あるものとして生きることに集中できるように。毎日の小さな記録が積み重なり、信仰と日常が一つのリズムになります。',
    whyBody:
      '完璧な計画よりも、一日を意味あるものとして生きることに集中できるよう設計されたルーティンプランナーです。毎日の小さな記録が積み重なり、信仰と日常が自然につながります。',
    stillLine: '息を整える瞬間、傍らの小さな緑。',
    insideLead: 'すべてのページには理由があります。',
    monthly: 'ひと月の流れと信仰のリズムを一目で。',
    weekly: '7am–11pm、意図的に設計する一週間。',
    daily: 'みことば・黙想・感謝を一日一ページに。',
    dailyNote:
      'the Word · Question · Reflect · Apply · Pray — みことばを一日に適用するQT記録の例。',
    layFlat: '完全に開く露出製本',
    howToUse: '信仰 · 英語 · 日本語エディション',
    editions: '構成を選択',
    cta: 'ADD TO CART · カートへ',
    materials: [
      ['SIZE', 'B6 · 128 × 182 mm'],
      ['PAGES', '128p'],
      ['BINDING', '糸かがり・露出製本'],
      ['PAPER', 'オールドミル 130g'],
      ['COVER', 'Extra Cotton 240g'],
    ],
    shipping: [
      'ご注文後2〜3日以内に出荷・国内宅配',
      '受け取り後7日以内に交換・返品',
      '海外配送 — 郵便局 K-Packet',
      'ギフト包装 — DMでお問い合わせ',
    ],
    free: '₩70,000以上のご購入で国内送料無料',
  },
}

const INUSE = [
  `${P}inuse_leather.jpg`,
  `${P}inuse_suit.jpg`,
  `${P}look5_C26DF7F5.jpg`,
  `${P}inuse_look3.jpg`,
  `${P}inuse_denim.jpg`,
  `${P}inuse_reading.jpg`,
  `${P}face_643B6376.jpg`,
]

export function BreatheDetailPage() {
  const { locale, t } = useLocale()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { overrides } = useProductOverrides()
  const product = getProductBySlug('breathe', locale)
  const c = COPY[locale] ?? COPY.ko
  const variants = product?.variants ?? []
  const [variantId, setVariantId] = useState(variants[0]?.id ?? '')
  const [slide, setSlide] = useState(0)

  const currency = CURRENCY_BY_LOCALE[locale]
  const selected = useMemo(
    () => variants.find((v) => v.id === variantId) ?? variants[0],
    [variants, variantId],
  )
  if (!product) return null
  const sold = isSoldOut(product.slug, overrides)
  const priceText = selected ? formatMoney(selected.price, currency) : product.catalogPrice

  const add = () => {
    const key = makeCartKey(product.slug, variantId, variants[0]?.id)
    addItem(key)
    pushEvent('add_to_cart', { item_id: key, item_name: product.catalogName })
  }
  const buyNow = () => {
    add()
    navigate('/cart')
  }

  const Purchase = (
    <>
      <PLabel>PLANNER &amp; DIARY</PLabel>
      <PName>Breathe</PName>
      <PPrice>{priceText}</PPrice>
      <Options role="radiogroup" aria-label={c.editions}>
        {variants.map((v) => (
          <Opt
            key={v.id}
            type="button"
            role="radio"
            aria-checked={v.id === (selected?.id ?? '')}
            $on={v.id === (selected?.id ?? '')}
            onClick={() => setVariantId(v.id)}
          >
            <span>{v.label}</span>
            <em>{formatMoney(v.price, currency)}</em>
          </Opt>
        ))}
      </Options>
      <Cta type="button" onClick={buyNow} disabled={sold}>
        {sold ? t.shop.soldOut : c.cta}
      </Cta>
      <Free>{c.free}</Free>
    </>
  )

  return (
    <Page>
      <Layout>
        <Main>
          {/* HERO */}
          <Hero>
            <Display>
              Breathe
              <br />
              Planner &amp; Diary
            </Display>
            <BrandLine>{c.brandLine}</BrandLine>
          </Hero>
          <HeroImg src={`${P}hero_cover_front.jpg`} alt="Breathe cover" loading="eager" />

          {/* ABOUT */}
          <Section>
            <Eyebrow $align="right">ABOUT BREATHE</Eyebrow>
            <AboutGrid>
              <Img src={`${P}hero_cover_detail.jpg`} alt="cover detail" $tall />
              <div>
                <Spec>
                  <span>B6</span>
                  <span>128p</span>
                  <span>PLANNER &amp; DIARY</span>
                </Spec>
                <Body>{c.aboutStory}</Body>
              </div>
            </AboutGrid>
          </Section>

          {/* WHY */}
          <Section>
            <Eyebrow $align="left">WHY BREATHE</Eyebrow>
            <Body $lead>{c.whyBody}</Body>
            <Collage3>
              <figure>
                <Img src={`${P}sozi_howto.jpg`} alt="how to use" />
                <Cap>{c.howToUse}</Cap>
              </figure>
              <figure>
                <Img src={`${P}hero_set.jpg`} alt="set" />
                <Cap>LAY FLAT</Cap>
              </figure>
              <figure>
                <Img src={`${P}sozi_monthly.jpg`} alt="monthly" />
                <Cap>{c.layFlat}</Cap>
              </figure>
            </Collage3>
          </Section>

          {/* STILL LIFE */}
          <Section>
            <Eyebrow $align="right">STILL LIFE</Eyebrow>
            <StillLine>{c.stillLine}</StillLine>
            <StillGrid>
              <Img src={`${P}hero_plant1.jpg`} alt="still life" $tall />
              <Img src={`${P}hero_plant2.jpg`} alt="still life" />
            </StillGrid>
          </Section>

          {/* INSIDE */}
          <Section>
            <Eyebrow $align="left">INSIDE THE DIARY</Eyebrow>
            <Lead>{c.insideLead}</Lead>
            <InsideRow>
              <Img src={`${P}sozi_monthly.jpg`} alt="monthly" />
              <div>
                <RowLabel>MONTHLY</RowLabel>
                <Body>{c.monthly}</Body>
              </div>
            </InsideRow>
            <InsideRow $rev>
              <Img src={`${P}sozi_weekly.jpg`} alt="weekly" />
              <div>
                <RowLabel>WEEKLY</RowLabel>
                <Body>{c.weekly}</Body>
              </div>
            </InsideRow>
            <InsideRow>
              <Img src={`${P}sozi_daily.jpg`} alt="daily" />
              <div>
                <RowLabel>DAILY</RowLabel>
                <Body>{c.daily}</Body>
                <Note>{c.dailyNote}</Note>
              </div>
            </InsideRow>
          </Section>

          {/* IN USE — carousel */}
          <Section>
            <Eyebrow $align="right">IN USE</Eyebrow>
            <Carousel>
              <Arrow
                type="button"
                aria-label="previous"
                onClick={() => setSlide((s) => (s - 1 + INUSE.length) % INUSE.length)}
              >
                ‹
              </Arrow>
              <CarImg src={INUSE[slide]} alt={`in use ${slide + 1}`} />
              <Arrow
                type="button"
                aria-label="next"
                onClick={() => setSlide((s) => (s + 1) % INUSE.length)}
              >
                ›
              </Arrow>
            </Carousel>
            <Dots>
              {INUSE.map((src, i) => (
                <Dot
                  key={src}
                  type="button"
                  aria-label={`slide ${i + 1}`}
                  $on={i === slide}
                  onClick={() => setSlide(i)}
                />
              ))}
            </Dots>
          </Section>

          {/* MATERIALS */}
          <Section>
            <Eyebrow $align="left">MATERIALS</Eyebrow>
            <Spec2>
              {c.materials.map(([k, v], i) => (
                <Spec2Row key={k}>
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  <b>{k}</b>
                  <span>{v}</span>
                </Spec2Row>
              ))}
            </Spec2>
          </Section>

          {/* SHIPPING & FAQ */}
          <Section>
            <Eyebrow $align="left">SHIPPING &amp; FAQ</Eyebrow>
            <FaqList>
              {c.shipping.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </FaqList>
          </Section>
        </Main>

        <Rail>
          <RailCard>{Purchase}</RailCard>
        </Rail>
      </Layout>

      {/* MOBILE fixed bottom bar */}
      <MobileBar>
        <div>
          <small>{selected?.label}</small>
          <strong>{priceText}</strong>
        </div>
        <MobileCta type="button" onClick={buyNow} disabled={sold}>
          {sold ? t.shop.soldOut : t.shop.addToCart}
        </MobileCta>
      </MobileBar>
    </Page>
  )
}

/* ---------- styles ---------- */
const DISPLAY = `'Futura PT','Futura','Inter','Noto Sans KR',system-ui,sans-serif`
const MONO = `'Roboto Mono',ui-monospace,'SF Mono',Menlo,monospace`

const Page = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.ink};
  padding-bottom: 120px;
`
const Layout = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px clamp(20px, 5vw, 64px) 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 56px;
  align-items: start;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 0;
  }
`
const Main = styled.div`
  min-width: 0;
`
const Hero = styled.header`
  padding-top: 8px;
`
const Display = styled.h1`
  font-family: ${DISPLAY};
  font-weight: 800;
  font-size: clamp(48px, 9vw, 104px);
  line-height: 0.98;
  letter-spacing: -0.01em;
  margin: 0;
`
const BrandLine = styled.p`
  margin-top: 20px;
  font-family: ${MONO};
  font-size: 13px;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textSecondary};
`
const HeroImg = styled.img`
  width: 100%;
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 4 / 5;
  object-fit: cover;
`
const Section = styled.section`
  margin-top: clamp(72px, 12vw, 150px);
`
const Eyebrow = styled.p<{ $align: 'left' | 'right' }>`
  font-family: ${MONO};
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin: 0 0 28px;
  text-align: ${({ $align }) => ($align === 'right' ? 'right' : 'left')};

  ${({ theme }) => theme.media.mobile} {
    text-align: left;
  }
`
const Body = styled.p<{ $lead?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ $lead }) => ($lead ? '17px' : '15px')};
  line-height: 1.85;
  color: ${({ theme, $lead }) => ($lead ? theme.colors.ink : theme.colors.textSecondary)};
  margin: 0;
  max-width: 46ch;
`
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 40px;
  align-items: start;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
const Img = styled.img<{ $tall?: boolean }>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  object-fit: cover;
  aspect-ratio: ${({ $tall }) => ($tall ? '3 / 4' : '1 / 1')};
  display: block;
`
const Spec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: ${MONO};
  font-size: 13px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 28px;
`
const Collage3 = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  figure {
    margin: 0;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`
const Cap = styled.figcaption`
  margin-top: 10px;
  font-family: ${MONO};
  font-size: 11px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textSecondary};
`
const StillLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 500;
  text-align: right;
  margin: 0 0 32px;
  ${({ theme }) => theme.media.mobile} {
    text-align: left;
  }
`
const StillGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
  align-items: start;
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`
const Lead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 500;
  margin: 0 0 40px;
`
const InsideRow = styled.div<{ $rev?: boolean }>`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
  direction: ${({ $rev }) => ($rev ? 'rtl' : 'ltr')};

  & > * {
    direction: ltr;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
    direction: ltr;
  }
`
const RowLabel = styled.p`
  font-family: ${MONO};
  font-size: 13px;
  letter-spacing: 0.2em;
  margin: 0 0 10px;
`
const Note = styled.p`
  margin-top: 14px;
  font-family: ${MONO};
  font-size: 11px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`
const Carousel = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
`
const CarImg = styled.img`
  width: min(560px, 100%);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`
const Arrow = styled.button`
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.white};
  }
`
const Dots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
`
const Dot = styled.button<{ $on: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.border)};
`
const Spec2 = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.ink};
`
const Spec2Row = styled.div`
  display: grid;
  grid-template-columns: 40px 160px 1fr;
  gap: 12px;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${MONO};
  font-size: 13px;

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  b {
    letter-spacing: 0.14em;
    font-weight: 500;
  }
  span {
    text-align: right;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.kr};
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 32px 1fr auto;
  }
`
const FaqList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
/* ---- desktop sticky rail ---- */
const Rail = styled.aside`
  position: sticky;
  top: 96px;
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`
const RailCard = styled.div`
  border: 1.5px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.white};
  padding: 28px 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
`
const PLabel = styled.p`
  font-family: ${MONO};
  font-size: 11px;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 8px;
`
const PName = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 34px;
  font-weight: 500;
  margin: 0;
`
const PPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 30px;
  margin: 8px 0 20px;
`
const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`
const Opt = styled.button<{ $on: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border: 1.5px solid ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.border)};
  background: ${({ theme, $on }) => ($on ? theme.colors.surface : theme.colors.white)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.kr};

  span {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.ink};
  }
  em {
    font-style: normal;
    font-family: ${MONO};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
const Cta = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${MONO};
  font-size: 12px;
  letter-spacing: 0.14em;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.88;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: default;
  }
`
const Free = styled.p`
  margin: 14px 0 0;
  text-align: center;
  font-family: ${MONO};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textSecondary};
`
/* ---- mobile fixed bar ---- */
const MobileBar = styled.div`
  display: none;
  ${({ theme }) => theme.media.mobile} {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    align-items: center;
    gap: 14px;
    padding: 12px 18px calc(12px + env(safe-area-inset-bottom));
    background: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    & > div {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    small {
      font-family: ${MONO};
      font-size: 10px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
    strong {
      font-family: ${({ theme }) => theme.fonts.serif};
      font-size: 22px;
      font-weight: 500;
    }
  }
`
const MobileCta = styled.button`
  flex: 1;
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${MONO};
  font-size: 12px;
  letter-spacing: 0.12em;
  cursor: pointer;
  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
