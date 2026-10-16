import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'

// A personal note from the founder, placed on a quiet dark band so the human
// origin of DoLF — made to keep one's own faith, and to hold on through a hard
// season — reads as the heart of the About page.
export function FounderNote() {
  const { t } = useLocale()
  const f = t.about.founder

  return (
    <Section>
      <Inner>
        <DarkEyebrow>{f.eyebrow}</DarkEyebrow>
        <Title>{f.title}</Title>
        <Body>
          {f.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Body>
        <Signature>{f.signature}</Signature>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: calc(680px + 128px);
  padding-top: 104px;
  padding-bottom: 104px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const DarkEyebrow = styled(Eyebrow)`
  color: ${({ theme }) => theme.colors.brandRed};
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 4.4vw, 42px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkFg};
  text-wrap: balance;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;

  p {
    font-family: ${({ theme }) => theme.fonts.kr};
    font-size: 16px;
    line-height: 1.95;
    color: ${({ theme }) => theme.colors.darkMuted};
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  /* Lift the closing paragraph a touch for emphasis. */
  p:last-child {
    color: ${({ theme }) => theme.colors.darkFg};
  }
`

const Signature = styled.p`
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1;
  color: ${({ theme }) => theme.colors.darkFg};
  margin-top: 10px;
`
