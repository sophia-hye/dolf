import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { StoryData } from '@/data/shop-types'

export function StorySection({ data }: { data: StoryData }) {
  return (
    <Section>
      <Inner>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <SectionTitle>{data.title}</SectionTitle>
        {data.paragraphs.map((p) => (
          <Body key={p}>{p}</Body>
        ))}
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
  text-align: center;
  gap: 18px;
  max-width: calc(720px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`
