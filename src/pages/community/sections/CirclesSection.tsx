import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'

export function CirclesSection({
  selected,
  onSelect,
}: {
  selected: number
  onSelect: (index: number) => void
}) {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <CenteredEyebrow>{t.community.circles.eyebrow}</CenteredEyebrow>
        <Cards>
          {t.community.circles.items.map((item, i) => (
            <Card
              key={item.title}
              type="button"
              $active={i === selected}
              aria-pressed={i === selected}
              onClick={() => onSelect(i)}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardSubhead>{item.subhead}</CardSubhead>
              <CardDesc>{item.description}</CardDesc>
            </Card>
          ))}
        </Cards>
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
  gap: 44px;
  padding-top: 88px;
  padding-bottom: 88px;

  ${({ theme }) => theme.media.mobile} {
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const CenteredEyebrow = styled(Eyebrow)`
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1120px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
`

const Card = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  box-shadow: ${({ theme, $active }) =>
    $active ? `0 0 0 1px ${theme.colors.ink}` : 'none'};
  border-radius: 3px;
  padding: 36px 32px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`


const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const CardSubhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
