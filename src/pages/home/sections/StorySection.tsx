import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'
import { useReveal } from '@/hooks/useReveal'

export function StorySection() {
  const { t } = useLocale()
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Section>
      <Inner ref={ref} $visible={visible}>
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

const Inner = styled(Container)<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: 720px;
  padding-top: 104px;
  padding-bottom: 104px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(26px)')};
  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
  white-space: pre-line;
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
