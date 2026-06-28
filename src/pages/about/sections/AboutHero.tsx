import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'

export function AboutHero() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Eyebrow>{t.about.hero.eyebrow}</Eyebrow>
        <Title>{t.about.hero.title}</Title>
        <Subhead>{t.about.hero.subhead}</Subhead>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 72px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.ink};
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`
