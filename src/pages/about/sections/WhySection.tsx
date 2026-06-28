import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'

export function WhySection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Eyebrow>{t.about.why.eyebrow}</Eyebrow>
        <SectionTitle>{t.about.why.title}</SectionTitle>
        <Body>{t.about.why.body}</Body>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: calc(760px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`
