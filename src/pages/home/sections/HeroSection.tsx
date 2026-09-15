import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { DotField } from '@/components/visual/DotField'

export function HeroSection() {
  const { t } = useLocale()

  return (
    <Section>
      <DotField />
      <Inner>
        <Tagline>{t.hero.tagline}</Tagline>
        <Title>{t.hero.title}</Title>
        <Subhead>{t.hero.subhead}</Subhead>
        <Body>{t.hero.body}</Body>
        <Cta to="/about">
          {t.hero.cta}
          <span aria-hidden>→</span>
        </Cta>
      </Inner>
      <ScrollCue aria-hidden>
        <span />
      </ScrollCue>
    </Section>
  )
}

const rise = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
`

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: min(88vh, 860px);
  padding-top: 96px;
  padding-bottom: 112px;

  ${({ theme }) => theme.media.mobile} {
    min-height: 78vh;
    padding-top: 64px;
    padding-bottom: 72px;
  }

  /* Staggered entrance for the direct children. */
  & > * {
    opacity: 0;
    animation: ${rise} 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  & > *:nth-child(1) { animation-delay: 0.05s; }
  & > *:nth-child(2) { animation-delay: 0.18s; }
  & > *:nth-child(3) { animation-delay: 0.34s; }
  & > *:nth-child(4) { animation-delay: 0.46s; }
  & > *:nth-child(5) { animation-delay: 0.58s; }

  @media (prefers-reduced-motion: reduce) {
    & > * {
      opacity: 1;
      animation: none;
    }
  }
`

const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.brandRed};
  margin-bottom: 12px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.ink};
  white-space: pre-line;
  margin-bottom: 28px;
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 12px;
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 36px;
`

const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 6px 20px rgba(168, 18, 18, 0.18);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.25s ease,
    background-color 0.2s ease;

  span {
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(168, 18, 18, 0.26);
  }
  &:hover span {
    transform: translateX(4px);
  }
`

const drift = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(8px); opacity: 1; }
`

const ScrollCue = styled.div`
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  z-index: 1;
  width: 22px;
  height: 34px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 7px;

  span {
    width: 3px;
    height: 7px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.brandRed};
    animation: ${drift} 1.8s ease-in-out infinite;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`
