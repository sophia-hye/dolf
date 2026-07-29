import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/i18n/context'

export function ProgramSection({ selected }: { selected: number }) {
  const { t } = useLocale()
  const circles = t.community.circles.items
  const circle = circles[selected] ?? circles[0]

  return (
    <Section>
      <Inner>
        <Eyebrow>{t.community.program.eyebrow}</Eyebrow>
        <SectionTitle>{circle.title}</SectionTitle>
        <Subhead>{circle.subhead}</Subhead>
        <Body>{circle.description}</Body>
        {circle.comingSoon ? (
          <Coming>{t.community.program.comingSoon}</Coming>
        ) : (
          <>
            {circle.fee && <Fee>{circle.fee}</Fee>}
            <Button type="button">{t.community.program.cta}</Button>
          </>
        )}
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
  gap: 14px;
  padding-top: 96px;
  padding-bottom: 104px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Body = styled.p`
  max-width: 640px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Fee = styled.p`
  margin-top: 6px;
  margin-bottom: 14px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Coming = styled.span`
  margin-top: 12px;
  padding: 10px 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
