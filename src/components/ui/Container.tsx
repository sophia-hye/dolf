import styled from 'styled-components'

// Centered content column: max 1440px with horizontal page padding.
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.layout.pagePadding};
  padding-right: ${({ theme }) => theme.layout.pagePadding};
`
