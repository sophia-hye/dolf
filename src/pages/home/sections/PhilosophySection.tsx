import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'
import { DotLineForm } from '@/components/visual/DotLineForm'

export function PhilosophySection() {
  const { t } = useLocale()
  // -1 means "all active" (reduced motion); otherwise 0=dot, 1=line, 2=form.
  const [phase, setPhase] = useState(0)

  return (
    <Section id="philosophy">
      <Inner>
        <Reveal>
          <Head>
            <Title>{t.philosophy.title}</Title>
            <Lab>
              {t.philosophy.eyebrow} / <span>철학</span>
            </Lab>
          </Head>
          <Intro>{t.philosophy.intro}</Intro>
        </Reveal>

        <Reveal>
          <DotLineForm onPhase={setPhase} />
        </Reveal>

        <Triad>
          {t.philosophy.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Col $active={phase === -1 || phase === i}>
                <Num>{`0${i + 1} — ${item.title}`}</Num>
                <ColTitle>{item.title}</ColTitle>
                <ColDesc>{item.description}</ColDesc>
              </Col>
            </Reveal>
          ))}
        </Triad>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  padding-top: clamp(72px, 11vw, 150px);
  padding-bottom: clamp(72px, 11vw, 150px);
`

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: clamp(20px, 3vw, 32px);
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 5vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.ink};
  max-width: 18ch;
`

const Lab = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Intro = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 52ch;
  margin-bottom: clamp(28px, 4vw, 48px);
`

const Triad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }

  /* Hairline between columns (desktop only). */
  & > *:not(:first-child) > div {
    border-left: 1px solid ${({ theme }) => theme.colors.line};
  }
  ${({ theme }) => theme.media.mobile} {
    & > *:not(:first-child) > div {
      border-left: 0;
    }
  }
`

const Col = styled.div<{ $active: boolean }>`
  padding: clamp(26px, 3vw, 40px) clamp(20px, 2.4vw, 34px) clamp(30px, 4vw, 48px);
  border-top: 1px solid ${({ theme }) => theme.colors.ink};
  opacity: ${({ $active }) => ($active ? 1 : 0.46)};
  transition: opacity 0.6s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
  }
`

const Num = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.brandRed};
  letter-spacing: 0.1em;
`

const ColTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(34px, 5vw, 50px);
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin: 22px 0 14px;
`

const ColDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: pre-line;
  max-width: 26ch;
  margin: 0;
`
