import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { businessInfo } from '@/data/business'

// Church / small-group bulk-order (B2B) section. Pairs with the Breathe
// editions line-sheet: churches and groups can mix Faith / EN / JP editions,
// get a volume quote and a tax invoice, and ship to one place.

type Copy = {
  eyebrow: string
  title: string
  body: string
  benefits: string[]
  cta: string
  mailSubject: string
  contactLabel: string
}

const COPY: Record<string, Copy> = {
  ko: {
    eyebrow: '교회 · 단체 발주',
    title: '교회와 소그룹을 위한 단체 발주',
    body: '신앙(Faith)·영문·일문 에디션을 자유롭게 조합해 단체로 주문하실 수 있습니다. 수량에 맞춘 할인 견적, 세금계산서 발행, 단체 배송까지 도와드립니다 — 소그룹 선물, 새가족 환영, 수련회 배포에 좋습니다.',
    benefits: [
      '수량별 맞춤 할인 견적',
      '신앙 · 영문 · 일문 에디션 혼합 주문',
      '세금계산서 발행 · 단체 배송',
      '선물 포장 · 단체 문구 상담 (선택)',
    ],
    cta: '단체 발주 문의하기',
    mailSubject: '교회·단체 발주 문의',
    contactLabel: '빠른 상담',
  },
  en: {
    eyebrow: 'For Churches & Groups',
    title: 'Bulk orders for churches & small groups',
    body: 'Order the Faith, English and Japanese editions in any mix. We provide volume-based quotes, tax invoices and group shipping — perfect for small-group gifts, welcoming new members, or retreats.',
    benefits: [
      'Volume-based custom quotes',
      'Mix Faith / English / Japanese editions',
      'Tax invoice · group shipping',
      'Gift wrapping · custom message (optional)',
    ],
    cta: 'Inquire about bulk orders',
    mailSubject: 'Church / group bulk-order inquiry',
    contactLabel: 'Quick contact',
  },
  ja: {
    eyebrow: '教会・団体発注',
    title: '教会・小グループのための団体発注',
    body: 'Faith・英語・日本語エディションを自由に組み合わせて団体注文できます。数量に応じたお見積り、適格請求書の発行、団体配送まで対応します — 小グループの贈り物、新来者の歓迎、リトリート配布に最適です。',
    benefits: [
      '数量別のお見積り',
      'Faith・英語・日本語の組み合わせ注文',
      '適格請求書・団体配送',
      'ギフト包装・名入れ相談（任意）',
    ],
    cta: '団体発注を問い合わせる',
    mailSubject: '教会・団体発注のお問い合わせ',
    contactLabel: 'クイック連絡',
  },
}

export function GroupOrderSection() {
  const { locale } = useLocale()
  const c = COPY[locale] ?? COPY.en
  const mailto = `mailto:${businessInfo.email}?subject=${encodeURIComponent(
    c.mailSubject,
  )}`

  return (
    <Section aria-label={c.title}>
      <Inner>
        <Copy>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title>{c.title}</Title>
          <Body>{c.body}</Body>
          <Actions>
            <Cta to="/group-order">
              {c.cta}
              <span aria-hidden>→</span>
            </Cta>
            <Quick>
              {c.contactLabel} ·{' '}
              <a href={mailto}>{businessInfo.email}</a> · {businessInfo.phone}
            </Quick>
          </Actions>
        </Copy>

        <Benefits>
          {c.benefits.map((b) => (
            <Benefit key={b}>
              <Mark aria-hidden />
              <span>{b}</span>
            </Benefit>
          ))}
        </Benefits>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
`
const Inner = styled(Container)`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
  padding-top: clamp(56px, 8vw, 96px);
  padding-bottom: clamp(56px, 8vw, 96px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
const Copy = styled.div``
const Eyebrow = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 4.4vw, 46px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.white};
`
const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.8;
  max-width: 48ch;
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.72);
  word-break: keep-all;
`
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 28px;
`
const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  padding: 14px 26px;
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
const Quick = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);

  a {
    color: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }
  a:hover {
    border-bottom-color: rgba(255, 255, 255, 0.6);
  }
`
const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`
const Benefit = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
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
