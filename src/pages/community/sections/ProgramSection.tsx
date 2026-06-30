import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/i18n/context'

export function ProgramSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Eyebrow>{t.community.program.eyebrow}</Eyebrow>
        <SectionTitle>{t.community.program.title}</SectionTitle>
        <Body>{t.community.program.body}</Body>
        <Button type="button">{t.community.program.cta}</Button>
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
  padding-top: 96px;
  padding-bottom: 104px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Body = styled.p`
  max-width: 640px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 14px;
`
