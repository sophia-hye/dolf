import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'

export function ContactInfoSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Columns>
          {t.contact.info.map((item) => (
            <Column key={item.label}>
              <Label>{item.label}</Label>
              <Value>{item.value}</Value>
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
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`

const Columns = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`

const Label = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Value = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
