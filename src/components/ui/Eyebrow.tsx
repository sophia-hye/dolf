import styled from 'styled-components'

// Small red uppercase label above section titles.
export const Eyebrow = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`
