import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/i18n/context'

export function HeroSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Tagline>{t.hero.tagline}</Tagline>
        <Title>{t.hero.title}</Title>
        <Subhead>{t.hero.subhead}</Subhead>
        <Body>{t.hero.body}</Body>
        <Button type="button">{t.hero.cta}</Button>
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
  padding-top: 96px;
  padding-bottom: 112px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 64px;
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
