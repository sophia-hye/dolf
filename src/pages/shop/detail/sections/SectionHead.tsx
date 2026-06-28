import styled from 'styled-components'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface SectionHeadProps {
  readonly eyebrow: string
  readonly title: string
  readonly intro?: string
}

// Shared header for Shop Detail sections: eyebrow + serif H2 (+ optional intro).
export function SectionHead({ eyebrow, title, intro }: SectionHeadProps) {
  return (
    <Wrapper>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      {intro && <Intro>{intro}</Intro>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`

const Intro = styled.p`
  max-width: 640px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
