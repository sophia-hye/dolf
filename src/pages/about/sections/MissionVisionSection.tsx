import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'

export function MissionVisionSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <CenteredEyebrow>{t.about.missionVision.eyebrow}</CenteredEyebrow>
        <Columns>
          {t.about.missionVision.items.map((item) => (
            <Column key={item.label}>
              <Label>{item.label}</Label>
              <Subhead>{item.subhead}</Subhead>
              <Body>{item.description}</Body>
            </Column>
          ))}
        </Columns>
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
  gap: 44px;
  padding-top: 96px;
  padding-bottom: 96px;
`

const CenteredEyebrow = styled(Eyebrow)`
  text-align: center;
`

const Columns = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
  max-width: 980px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Label = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({ theme }) => theme.colors.ink};
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
