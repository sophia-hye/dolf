import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { instagramUrl } from '@/data/business'

export function ContactInfoSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Columns>
          {t.contact.info.map((item) => (
            <Column key={item.label}>
              <Label>{item.label}</Label>
              {item.label === 'Instagram' ? (
                <ValueLink
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </ValueLink>
              ) : (
                <Value>{item.value}</Value>
              )}
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

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Columns = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1000px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
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

const ValueLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brandRed};
    border-bottom-color: ${({ theme }) => theme.colors.brandRed};
  }
`
