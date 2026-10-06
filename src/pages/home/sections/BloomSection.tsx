import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'
import { ThermoImageReveal } from '@/components/visual/ThermoImageReveal'
import tulip from '@/assets/bloom/tulip.jpg'

// Localized rub-hint for the thermo reveal (interaction microcopy, not part of
// the i18n dictionary).
const HINT: Record<string, string> = {
  ko: 'move · 문질러보세요',
  en: 'move · rub to reveal',
  ja: 'move · こすってみて',
}

export function BloomSection() {
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
              <Cta to="/shop/bloom">
                {t.bloom.cta}
                <span aria-hidden>→</span>
              </Cta>
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
  color: #e6897f;
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

const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkFg};
  padding-bottom: 7px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkFg};
  transition: all 0.25s ease;

  &:hover {
    gap: 16px;
    color: #e6897f;
    border-color: #e6897f;
  }
`
