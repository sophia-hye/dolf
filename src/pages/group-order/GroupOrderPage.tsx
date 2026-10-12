import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { businessInfo } from '@/data/business'

// Dedicated church / group bulk-order (B2B) landing. Pricing is quote-based
// (by inquiry), so the page leads to a quote request rather than fixed bulk
// prices.

type Step = { n: string; t: string; d: string }
type Copy = {
  eyebrow: string
  title: string
  subhead: string
  ctaPrimary: string
  quickLabel: string
  processTitle: string
  steps: Step[]
  benefitsTitle: string
  benefits: string[]
  editionsTitle: string
  editionsBody: string
  editionsCta: string
  pricingTitle: string
  pricingBody: string
  finalTitle: string
  finalBody: string
  finalCta: string
  mailSubject: string
}

const COPY: Record<string, Copy> = {
  ko: {
    eyebrow: '교회 · 단체 발주',
    title: '교회와 소그룹을 위한 단체 발주',
    subhead:
      '신앙(Faith)·영문·일문 에디션을 자유롭게 조합해 단체로 주문하세요. 가격은 수량과 구성에 따라 맞춤 견적으로 안내드립니다.',
    ctaPrimary: '가격·견적 문의하기',
    quickLabel: '빠른 상담',
    processTitle: '진행 방법',
    steps: [
      { n: '01', t: '문의', d: '수량·에디션 구성·희망 일정을 알려주세요.' },
      { n: '02', t: '맞춤 견적', d: '수량에 맞춘 할인 견적과 세금계산서를 안내드립니다.' },
      { n: '03', t: '발주 · 결제', d: '견적 확정 후 발주서/결제를 진행합니다.' },
      { n: '04', t: '단체 배송', d: '한 곳으로 일괄 배송 또는 분산 배송해 드립니다.' },
    ],
    benefitsTitle: '단체 발주 혜택',
    benefits: [
      '수량별 맞춤 할인 견적',
      '신앙 · 영문 · 일문 에디션 혼합 주문',
      '세금계산서 발행',
      '단체 일괄 배송',
      '선물 포장 · 단체 문구 상담 (선택)',
      '소그룹 선물 · 새가족 환영 · 수련회 배포에 적합',
    ],
    editionsTitle: '에디션 구성',
    editionsBody:
      'Breathe는 본문이 모두 영문으로 제작되어 글로벌하게 쓰이며, 사용 가이드만 목적·언어별(신앙·영문·일문)로 제공됩니다. 단체 발주 시 세 에디션을 자유롭게 섞어 주문할 수 있어요.',
    editionsCta: 'Breathe 에디션 보기',
    pricingTitle: '가격 안내',
    pricingBody:
      '기본가는 1권 ₩19,000이며, 단체 수량 할인은 구성과 수량에 따라 달라집니다. 정확한 금액은 견적으로 안내드리니 편하게 문의 주세요.',
    finalTitle: '단체 발주, 지금 문의하세요',
    finalBody: '수량과 에디션 구성만 알려주시면 맞춤 견적을 보내드립니다.',
    finalCta: '견적 문의하기',
    mailSubject: '교회·단체 발주 견적 문의',
  },
  en: {
    eyebrow: 'For Churches & Groups',
    title: 'Bulk orders for churches & small groups',
    subhead:
      'Order the Faith, English and Japanese editions in any mix. Pricing is tailored to your quantity and mix — we send a custom quote.',
    ctaPrimary: 'Request a quote',
    quickLabel: 'Quick contact',
    processTitle: 'How it works',
    steps: [
      { n: '01', t: 'Inquire', d: 'Tell us the quantity, edition mix and timing.' },
      { n: '02', t: 'Custom quote', d: 'We send a volume-based quote and a tax invoice.' },
      { n: '03', t: 'Order · pay', d: 'Confirm the quote, then place the order.' },
      { n: '04', t: 'Group shipping', d: 'Ship to one place or split across recipients.' },
    ],
    benefitsTitle: 'Bulk-order benefits',
    benefits: [
      'Volume-based custom quotes',
      'Mix Faith / English / Japanese editions',
      'Tax invoice',
      'Consolidated group shipping',
      'Gift wrapping · custom message (optional)',
      'Great for small-group gifts, new members, retreats',
    ],
    editionsTitle: 'Editions',
    editionsBody:
      'Breathe is written entirely in English for global use, with the How-to-use guide provided per purpose and language (Faith / English / Japanese). For bulk orders, mix the three editions freely.',
    editionsCta: 'See Breathe editions',
    pricingTitle: 'Pricing',
    pricingBody:
      'The base price is ₩19,000 per copy; bulk discounts depend on the mix and quantity. We provide exact pricing by quote — just reach out.',
    finalTitle: 'Ready to order for your group?',
    finalBody: 'Share your quantity and edition mix and we’ll send a tailored quote.',
    finalCta: 'Request a quote',
    mailSubject: 'Church / group bulk-order quote',
  },
  ja: {
    eyebrow: '教会・団体発注',
    title: '教会・小グループのための団体発注',
    subhead:
      'Faith・英語・日本語エディションを自由に組み合わせて団体注文できます。価格は数量と構成に応じたお見積りでご案内します。',
    ctaPrimary: '見積もりを依頼する',
    quickLabel: 'クイック連絡',
    processTitle: 'ご利用の流れ',
    steps: [
      { n: '01', t: 'お問い合わせ', d: '数量・エディション構成・希望時期をお知らせください。' },
      { n: '02', t: 'お見積り', d: '数量に応じた割引見積りと適格請求書をご案内します。' },
      { n: '03', t: '発注・お支払い', d: '見積り確定後、発注・お支払いへ進みます。' },
      { n: '04', t: '団体配送', d: '一括配送または分散配送に対応します。' },
    ],
    benefitsTitle: '団体発注の特典',
    benefits: [
      '数量別のお見積り',
      'Faith・英語・日本語の組み合わせ注文',
      '適格請求書の発行',
      '団体一括配送',
      'ギフト包装・名入れ相談（任意）',
      '小グループの贈り物・新来者歓迎・リトリートに最適',
    ],
    editionsTitle: 'エディション',
    editionsBody:
      'Breatheは本文がすべて英語で、How-to-useガイドのみ目的・言語別（信仰・英語・日本語）で提供します。団体発注では3エディションを自由に組み合わせられます。',
    editionsCta: 'Breatheのエディションを見る',
    pricingTitle: '価格について',
    pricingBody:
      '基本価格は1冊₩19,000で、団体割引は構成と数量によって異なります。正確な金額はお見積りでご案内しますので、お気軽にお問い合わせください。',
    finalTitle: '団体発注のお問い合わせ',
    finalBody: '数量とエディション構成をお知らせいただければ、お見積りをお送りします。',
    finalCta: '見積もりを依頼する',
    mailSubject: '教会・団体発注のお見積り',
  },
}

export function GroupOrderPage() {
  const { locale } = useLocale()
  const c = COPY[locale] ?? COPY.en
  const mailto = `mailto:${businessInfo.email}?subject=${encodeURIComponent(c.mailSubject)}`

  return (
    <>
      <Hero>
        <HeroInner>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title>{c.title}</Title>
          <Subhead>{c.subhead}</Subhead>
          <HeroActions>
            <Primary to="/contact?type=group">
              {c.ctaPrimary}
              <span aria-hidden>→</span>
            </Primary>
            <Quick>
              {c.quickLabel} · <a href={mailto}>{businessInfo.email}</a> ·{' '}
              {businessInfo.phone}
            </Quick>
          </HeroActions>
        </HeroInner>
      </Hero>

      <Band>
        <BandInner>
          <SectionTitle>{c.processTitle}</SectionTitle>
          <Steps>
            {c.steps.map((s) => (
              <Step key={s.n}>
                <StepNum>{s.n}</StepNum>
                <StepT>{s.t}</StepT>
                <StepD>{s.d}</StepD>
              </Step>
            ))}
          </Steps>
        </BandInner>
      </Band>

      <Plain>
        <PlainInner>
          <SectionTitle>{c.benefitsTitle}</SectionTitle>
          <Benefits>
            {c.benefits.map((b) => (
              <Benefit key={b}>
                <Mark aria-hidden />
                <span>{b}</span>
              </Benefit>
            ))}
          </Benefits>
        </PlainInner>
      </Plain>

      <Band>
        <TwoCol>
          <div>
            <SectionTitle>{c.editionsTitle}</SectionTitle>
            <P>{c.editionsBody}</P>
            <Link2 to="/shop/breathe">
              {c.editionsCta}
              <span aria-hidden>→</span>
            </Link2>
          </div>
          <div>
            <SectionTitle>{c.pricingTitle}</SectionTitle>
            <P>{c.pricingBody}</P>
          </div>
        </TwoCol>
      </Band>

      <Final>
        <FinalInner>
          <FinalTitle>{c.finalTitle}</FinalTitle>
          <FinalBody>{c.finalBody}</FinalBody>
          <Primary to="/contact?type=group">
            {c.finalCta}
            <span aria-hidden>→</span>
          </Primary>
          <Quick $onDark>
            {c.quickLabel} · <a href={mailto}>{businessInfo.email}</a> ·{' '}
            {businessInfo.phone}
          </Quick>
        </FinalInner>
      </Final>
    </>
  )
}

const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`
const HeroInner = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: clamp(64px, 10vw, 120px);
  padding-bottom: clamp(48px, 7vw, 80px);
`
const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(34px, 6vw, 68px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 16px 0 0;
  max-width: 18ch;
  color: ${({ theme }) => theme.colors.ink};
`
const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.7;
  max-width: 52ch;
  margin: 20px 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
`
const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 32px;
`
const Primary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  padding: 15px 30px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition:
    gap 0.25s ease,
    opacity 0.2s ease;

  &:hover {
    gap: 16px;
    opacity: 0.9;
  }
`
const Quick = styled.p<{ $onDark?: boolean }>`
  margin: ${({ $onDark }) => ($onDark ? '18px 0 0' : '0')};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  color: ${({ theme, $onDark }) =>
    $onDark ? 'rgba(255,255,255,0.6)' : theme.colors.textSecondary};

  a {
    color: ${({ theme, $onDark }) =>
      $onDark ? 'rgba(255,255,255,0.85)' : theme.colors.ink};
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }
  a:hover {
    border-bottom-color: currentColor;
  }
`
const Band = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`
const BandInner = styled(Container)`
  padding-top: clamp(48px, 7vw, 80px);
  padding-bottom: clamp(48px, 7vw, 80px);
`
const Plain = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`
const PlainInner = styled(Container)`
  padding-top: clamp(48px, 7vw, 80px);
  padding-bottom: clamp(48px, 7vw, 80px);
`
const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(22px, 3.4vw, 32px);
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 clamp(22px, 3vw, 36px);
`
const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(18px, 2.4vw, 32px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`
const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.line2};
`
const StepNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.brandRed};
`
const StepT = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`
const StepD = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
`
const Benefits = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
const Benefit = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
`
const Mark = styled.span`
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  margin-top: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandRed};
`
const TwoCol = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 72px);
  padding-top: clamp(48px, 7vw, 80px);
  padding-bottom: clamp(48px, 7vw, 80px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`
const P = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 46ch;
  margin: 0;
  word-break: keep-all;
`
const Link2 = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  padding-bottom: 6px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.ink};
  transition: gap 0.25s ease;

  &:hover {
    gap: 14px;
  }
`
const Final = styled.section`
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
`
const FinalInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: clamp(56px, 8vw, 96px);
  padding-bottom: clamp(56px, 8vw, 96px);

  /* Centre the CTA here (it is left-aligned in the hero). */
  ${Primary} {
    align-self: center;
  }
`
const FinalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(26px, 4vw, 42px);
  letter-spacing: -0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`
const FinalBody = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.7;
  max-width: 44ch;
  margin: 16px 0 28px;
  color: rgba(255, 255, 255, 0.72);
  word-break: keep-all;
`
