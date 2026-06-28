import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
`

export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const Select = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ink};
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`

export const InlineLink = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 16px;
  cursor: pointer;
`

export const FootNote = styled.p`
  text-align: center;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Notice = styled.p`
  margin-top: 16px;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const ErrorText = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`
