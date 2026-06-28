import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'

export function CoreValuesSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{t.about.coreValues.eyebrow}</Eyebrow>
          <SectionTitle>{t.about.coreValues.title}</SectionTitle>
        </Head>
        <Columns>
          {t.about.coreValues.items.map((item) => (
            <Column key={item.label}>
              <Label>{item.label}</Label>
              <Body>{item.description}</Body>
            </Column>
          ))}
        </Columns>
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
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 104px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`

const Columns = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
