import styled from 'styled-components'

// Centered content column: max 1440px with horizontal page padding.
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: clamp(28px, 5vw, 64px);
  padding-right: clamp(28px, 5vw, 64px);
`
