import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useLocale } from '@/i18n/context'
import { getProductBySlug } from '@/data/products'
import { editionsFor } from '@/lib/product-editions'

// "Editions" line-sheet for Breathe — makes the Faith / English / Japanese
// editions explicit so a buyer sees the full range before choosing one. The
// body is identical across editions (English); only the How-to-use guide and
// purpose/language differ. Selecting a card opens that edition's page.

const TITLE: Record<string, string> = {
  ko: '에디션',
  en: 'Editions',
  ja: 'エディション',
}
const SUB: Record<string, string> = {
  ko: '하나의 Breathe, 목적과 언어에 따라 세 가지 에디션으로 제공됩니다.',
  en: 'One Breathe, offered in three editions by purpose and language.',
  ja: 'ひとつのBreathe、目的と言語で選べる3つのエディション。',
}
const DESC: Record<string, Record<string, string>> = {
  breathe: {
    ko: 'QT 신앙판 — 말씀·묵상·감사를 기록',
    en: 'Faith (QT) edition — scripture, reflection, gratitude',
    ja: '信仰(QT)版 — みことば・黙想・感謝',
  },
  'breathe-en': {
    ko: '영문 일반판 — 누구나 쓰는 데일리 저널',
    en: 'English general edition — a daily journal for everyone',
    ja: '英語・一般版 — だれでも使えるデイリー',
  },
  'breathe-jp': {
    ko: '일문 일반판 — 일본어 사용자를 위한 데일리',
    en: 'Japanese general edition — a daily for Japanese readers',
    ja: '日本語・一般版 — 日本語ユーザー向け',
  },
}
const VIEW: Record<string, string> = { ko: '이 에디션 보기', en: 'View edition', ja: 'このエディションを見る' }
const CURRENT: Record<string, string> = { ko: '현재 보는 중', en: 'Currently viewing', ja: '表示中' }

export function BreatheEditions({ currentSlug }: { currentSlug: string }) {
  const { locale } = useLocale()
  const navigate = useNavigate()
  const lang = locale in TITLE ? locale : 'en'
  const editions = editionsFor('breathe', locale) ?? []
  if (editions.length < 2) return null

  return (
    <Section aria-label={TITLE[lang]}>
      <Head>
        <H>{TITLE[lang]}</H>
        <Sub>{SUB[lang]}</Sub>
      </Head>
      <Grid>
        {editions.map((ed) => {
          const p = getProductBySlug(ed.slug, locale)
          const active = ed.slug === currentSlug
          return (
            <Card
              key={ed.slug}
              type="button"
              $active={active}
              aria-current={active ? 'true' : undefined}
              onClick={() => {
                if (!active) navigate(`/shop/${ed.slug}`)
              }}
            >
              <Top>
                <Name>{ed.label}</Name>
                {active && <Dot aria-hidden />}
              </Top>
              <Desc>{DESC[ed.slug]?.[lang] ?? ''}</Desc>
              <Foot>
                <Price>{p?.catalogPrice}</Price>
                <State $active={active}>{active ? CURRENT[lang] : VIEW[lang]}</State>
              </Foot>
            </Card>
          )
        })}
      </Grid>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: clamp(24px, 4vw, 44px) 0 clamp(8px, 2vw, 20px);
`
const Head = styled.div`
  margin-bottom: clamp(16px, 2.4vw, 26px);
`
const H = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(22px, 3.2vw, 30px);
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 6px;
`
const Sub = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
  overflow-wrap: break-word;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(12px, 1.6vw, 18px);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
const Card = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  padding: clamp(16px, 2vw, 22px);
  border: 1.5px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 4px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.surface : theme.colors.white};
  cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
    transform: ${({ $active }) => ($active ? 'none' : 'translateY(-2px)')};
  }
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`
const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(18px, 2.4vw, 22px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`
const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandRed};
`
const Desc = styled.p`
  margin: 0;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 13px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
`
const Foot = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`
const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`
const State = styled.span<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.brandRed : theme.colors.textSecondary};
`
