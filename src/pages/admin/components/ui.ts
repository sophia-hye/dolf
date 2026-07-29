import styled from 'styled-components'

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

export const PageDesc = styled.p`
  margin-top: 6px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Panel = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 24px;
`

export const PanelTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 20px;
`

export const PrimaryButton = styled.button`
  padding: 11px 18px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`

export const GhostButton = styled.button`
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fonts.kr};
`

export const Th = styled.th`
  text-align: left;
  padding: 12px 14px;
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  white-space: nowrap;
`

export const Td = styled.td`
  padding: 14px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;
`

const STATUS_COLORS: Record<string, string> = {
  Paid: '#a81212',
  Shipped: '#1f1f21',
  Pending: '#6e6e72',
  Cancelled: '#b0b0b4',
  Active: '#a81212',
  Inactive: '#b0b0b4',
  // Supabase order statuses (lowercase)
  paid: '#a81212',
  shipped: '#1f1f21',
  delivered: '#1f1f21',
  pending: '#6e6e72',
  cancelled: '#b0b0b4',
}

export const StatusBadge = styled.span<{ $status: string }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({ $status }) => STATUS_COLORS[$status] ?? '#1f1f21'};
`
