import styled from 'styled-components'

// Serif section heading (Cormorant, h2 scale).
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.2;
  /* Keep Korean words whole; break only very long unbreakable tokens. */
  word-break: keep-all;
  overflow-wrap: break-word;
`
