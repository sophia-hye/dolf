import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocale } from '@/i18n/context'
import { HeroWordReveal } from '@/components/visual/HeroWordReveal'

// Localized microcopy for the reveal hint — decorative, not part of the i18n
// dictionary (it only describes the interaction).
const HINT: Record<string, string> = {
  ko: '커서를 올리면 단어가 피어납니다',
  en: 'Move your cursor to let the words bloom',
  ja: 'カーソルを重ねると言葉が浮かび上がります',
}

export function HeroSection() {
  const { t, locale } = useLocale()

  return (
    <Section data-hero-host>
      <HeroWordReveal>
        <Label>
          <Dot aria-hidden />
          {t.hero.tagline}
        </Label>
        <Title data-heat>{t.hero.title}</Title>
        <Kr data-heat>{t.hero.subhead}</Kr>
        <Body data-heat>{t.hero.body}</Body>
      </HeroWordReveal>

      <Cta to="/about">
        {t.hero.cta}
        <span aria-hidden>→</span>
      </Cta>

      <Meta>
        <span>Est. 2026 · Seoul</span>
        <span>{HINT[locale] ?? HINT.en}</span>
        <Spacer />
        <span>Scroll</span>
        <Cue aria-hidden />
      </Meta>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding-inline: clamp(18px, 4vw, 56px);
  padding-block: clamp(54px, 10vw, 118px) clamp(34px, 5vw, 60px);
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 26px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandRed};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(42px, 10vw, 152px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.ink};
  white-space: pre-line;
  overflow-wrap: break-word;
  font-optical-sizing: auto;
`

const Kr = styled.p`
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: clamp(23px, 3.6vw, 34px);
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.soft};
  margin-top: clamp(18px, 3vw, 30px);
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
  font-size: 15px;
  word-break: keep-all;
`

const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 34px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  padding-bottom: 7px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.ink};
  transition: all 0.25s ease;

  &:hover {
    gap: 16px;
    color: ${({ theme }) => theme.colors.brandRed};
    border-color: ${({ theme }) => theme.colors.brandRed};
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px 30px;
  flex-wrap: wrap;
  margin-top: clamp(26px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

const Spacer = styled.span`
  flex: 1 1 30px;
`

const slide = `
  @keyframes heroCue {
    0% { transform: translateX(-101%); }
    50% { transform: translateX(0); }
    100% { transform: translateX(101%); }
  }
`

const Cue = styled.span`
  ${slide}
  display: inline-block;
  width: 34px;
  height: 1px;
  background: ${({ theme }) => theme.colors.line2};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.ink};
    transform: translateX(-100%);
    animation: heroCue 2.4s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`
