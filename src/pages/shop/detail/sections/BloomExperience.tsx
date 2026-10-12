import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'
import { ThermoImageReveal } from '@/components/visual/ThermoImageReveal'
import tulip from '@/assets/bloom/tulip.jpg'

// The bloom "thermo experience" — rub the black cover to let your body heat
// bloom the hidden tulip, then watch it cool back. Opens the bloom PDP (moved
// here from the homepage) so the thermochromic feel lives on the product page.

const HINT: Record<string, string> = {
  ko: 'move · 문질러보세요',
  en: 'move · rub to reveal',
  ja: 'move · こすってみて',
}

export function BloomExperience() {
  const { t, locale } = useLocale()

  return (
    <Section id="bloom">
      <Inner>
        <Grid>
          <Reveal>
            <Copy>
              <Lab>{t.bloom.eyebrow}</Lab>
              <Name>{t.bloom.name}</Name>
              <Tag>{t.bloom.tagline}</Tag>
              <Body>{t.bloom.body}</Body>
            </Copy>
          </Reveal>

          <Reveal>
            <ThermoImageReveal src={tulip} alt={t.bloom.alt} hint={HINT[locale] ?? HINT.en} />
          </Reveal>
        </Grid>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.darkFg};
`

const Inner = styled(Container)`
  padding-top: clamp(72px, 11vw, 150px);
  padding-bottom: clamp(72px, 11vw, 150px);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.92fr;
  gap: clamp(30px, 6vw, 80px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const Copy = styled.div``

const Lab = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Name = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(60px, 13vw, 132px);
  line-height: 0.88;
  letter-spacing: -0.03em;
  margin: 18px 0 6px;
  color: ${({ theme }) => theme.colors.darkFg};
`

const Tag = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(20px, 3vw, 30px);
  color: ${({ theme }) => theme.colors.darkFg};
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  color: ${({ theme }) => theme.colors.darkMuted};
  max-width: 40ch;
  margin: 20px 0 0;
  font-size: 15px;
  line-height: 1.8;
`
