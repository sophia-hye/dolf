import styled from 'styled-components'
import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface AuthShellProps {
  readonly eyebrow: string
  readonly title: string
  readonly subhead: string
  readonly children: ReactNode
}

export function AuthShell({ eyebrow, title, subhead, children }: AuthShellProps) {
  return (
    <Section>
      <Card>
        <Head>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Subhead>{subhead}</Subhead>
        </Head>
        {children}
      </Card>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 80px 64px 120px;
`

const Card = styled.div`
  width: 100%;
  max-width: 460px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 40px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 28px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`
