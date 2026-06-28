import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'

export function StorySection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Eyebrow>{t.story.eyebrow}</Eyebrow>
        <SectionTitle>{t.story.title}</SectionTitle>
        <Body>{t.story.body}</Body>
        <Closing>
          {t.story.closing.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </Closing>
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
  max-width: 720px;
  padding-top: 104px;
  padding-bottom: 104px;
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
`

const Closing = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink};
  margin-top: 12px;
`
