import styled from 'styled-components'

// Primary red CTA button.
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`
