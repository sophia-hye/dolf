import styled from 'styled-components'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
  GhostButton,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { getMemberById, type MemberGrade } from '@/data/admin-mock'

// 회원별 개별 주문 내역은 공용 mock에 없으므로 이 파일에서만 사용하는 로컬 mock으로 정의.
interface MemberOrderRow {
  readonly id: string
  readonly product: string
  readonly amount: string
  readonly status: string
}

const memberOrders: MemberOrderRow[] = [
  { id: 'DLF-2041', product: 'Breathe — Planner & Diary', amount: '$38', status: 'Paid' },
  { id: 'DLF-2018', product: '2027 Calendar', amount: '$20', status: 'Shipped' },
  { id: 'DLF-1990', product: 'Bible Reading Tracker', amount: '$30', status: 'Shipped' },
]

const GRADE_DESC: Record<MemberGrade, string> = {
  VIP: 'VIP (상위 3%)',
  Gold: 'Gold (상위 15%)',
  Silver: 'Silver',
  Basic: 'Basic',
}

export function MemberDetailPage() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const member = getMemberById(id)

  if (!member) {
    return <Navigate to="/admin/members" replace />
  }

  const details = [
    { label: '가입일', value: member.joinedAt },
    { label: '최근 접속', value: '2026-06-23' },
    { label: '총 주문', value: `${member.orders}건` },
    { label: '총 구매액', value: member.totalSpent },
    { label: '연락처', value: '010-1234-5678' },
    { label: '등급', value: GRADE_DESC[member.grade] },
  ]

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>회원 상세</PageTitle>
          <PageDesc>{member.id} 회원의 정보와 주문 내역입니다.</PageDesc>
        </div>
        <GhostButton type="button" onClick={() => navigate('/admin/members')}>
          ← 목록으로
        </GhostButton>
      </PageHeader>

      <Panel>
        <Profile>
          <Avatar>{member.name.charAt(0)}</Avatar>
          <ProfileInfo>
            <NameRow>
              <Name>{member.name}</Name>
              <GradeBadge $vip={member.grade === 'VIP'}>{member.grade}</GradeBadge>
              <StatusBadge $status={member.status}>● {member.status}</StatusBadge>
            </NameRow>
            <Email>{member.email}</Email>
          </ProfileInfo>
        </Profile>

        <DetailGrid>
          {details.map((d) => (
            <DetailItem key={d.label}>
              <DetailLabel>{d.label}</DetailLabel>
              <DetailValue>{d.value}</DetailValue>
            </DetailItem>
          ))}
        </DetailGrid>

        <SectionLabel>최근 주문</SectionLabel>
        <OrderList>
          {memberOrders.map((o) => (
            <OrderRow key={o.id}>
              <OrderInfo>
                <OrderId>#{o.id}</OrderId>
                <OrderProduct>{o.product}</OrderProduct>
              </OrderInfo>
              <OrderMeta>
                <OrderAmount>{o.amount}</OrderAmount>
                <StatusBadge $status={o.status}>{o.status}</StatusBadge>
              </OrderMeta>
            </OrderRow>
          ))}
        </OrderList>

        <Actions>
          <PrimaryButton type="button">메시지 보내기</PrimaryButton>
          <GhostButton type="button">계정 정지</GhostButton>
        </Actions>
      </Panel>
    </>
  )
}

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const GradeBadge = styled.span<{ $vip: boolean }>`
  padding: 3px 8px;
  border-radius: 4px;
  background-color: ${({ theme, $vip }) =>
    $vip ? theme.colors.brandRed : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.white};
`

const Email = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 20px;
  margin-top: 22px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.cream};

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const DetailLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const DetailValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const SectionLabel = styled.h2`
  margin-top: 22px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const OrderList = styled.div`
  margin-top: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
`

const OrderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const OrderId = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const OrderProduct = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const OrderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const OrderAmount = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 22px;

  & > * {
    flex: 1;
    text-align: center;
  }
`
