import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'

// The meaning behind the slogan "dot of line and form" — the brand's core
// philosophy, read as both a gospel narrative and a way of living each day.
export function DotLineFormSection() {
  const { t } = useLocale()
  const s = t.about.dotLineForm

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <SectionTitle>{s.title}</SectionTitle>
          <Intro>{s.intro}</Intro>
        </Head>

        <Columns>
          {s.items.map((item) => (
            <Column key={item.label}>
              <Symbol aria-hidden>{item.symbol}</Symbol>
              <Label>{item.label}</Label>
              <Body>{item.description}</Body>
            </Column>
          ))}
        </Columns>

        <Closing>{s.closing}</Closing>
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

  ${({ theme }) => theme.media.mobile} {
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 720px;
`

const Intro = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
`

const Columns = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 980px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 28px;
  }
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`

const Symbol = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 40px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.brandRed};
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
  max-width: 30ch;
  word-break: keep-all;
`

const Closing = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.soft};
  text-align: center;
  max-width: 720px;
  word-break: keep-all;
`
