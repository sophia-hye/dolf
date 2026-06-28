import styled from 'styled-components'
import { Container } from '@/components/ui/Container'

// Temporary stand-in for pages not yet implemented (About, Products, etc.).
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Note>이 페이지는 곧 준비됩니다.</Note>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  min-height: 60vh;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`
