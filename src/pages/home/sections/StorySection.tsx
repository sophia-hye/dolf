import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useReveal } from '@/hooks/useReveal'
import { StoryLine } from '@/components/visual/StoryLine'

export function StorySection() {
  const { t } = useLocale()
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Section id="story">
      <Rule />
      <Inner ref={ref} $visible={visible}>
        <Head>
          <Title>{t.story.title}</Title>
          <Lab>{t.story.eyebrow}</Lab>
        </Head>
        <Body>{t.story.body}</Body>
        <LineWrap>
          <StoryLine />
        </LineWrap>
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

const Rule = styled.hr`
  height: 1px;
  background: ${({ theme }) => theme.colors.line};
  border: 0;
  margin: 0;
`

const Inner = styled(Container)<{ $visible: boolean }>`
  max-width: 920px;
  padding-top: clamp(72px, 11vw, 150px);
  padding-bottom: clamp(72px, 11vw, 150px);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(26px)')};
  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: clamp(36px, 5vw, 64px);
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 5vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.ink};
  max-width: 18ch;
`

const Lab = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: clamp(24px, 3.4vw, 36px);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink};
  white-space: pre-line;
`

const LineWrap = styled.div`
  margin-block: clamp(22px, 4vw, 48px);
`

const Closing = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 34px;
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: clamp(21px, 3vw, 29px);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.brandRed};
`
