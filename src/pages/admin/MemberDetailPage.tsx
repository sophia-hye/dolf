import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  GhostButton,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { ORDER_STATUS_LABEL_KO } from '@/lib/orders'
import { fetchMemberDetail, type MemberDetail } from '@/lib/admin-data'

export function MemberDetailPage() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const [member, setMember] = useState<MemberDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    void fetchMemberDetail(id).then((m) => {
      if (!active) return
      setMember(m)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [id])

  if (loading) return null
  if (!member) return <Navigate to="/admin/members" replace />

  const details = [
    { label: '가입일', value: member.joinedAt },
    { label: '국가', value: member.country },
    { label: '총 주문', value: `${member.orderCount}건` },
    { label: '총 구매액', value: member.totalSpent },
    { label: '등급', value: member.grade },
    { label: '상태', value: member.status },
  ]

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>회원 상세</PageTitle>
          <PageDesc>{member.email} 회원의 정보와 주문 내역입니다.</PageDesc>
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
        {member.orders.length === 0 ? (
          <EmptyOrders>주문 내역이 없습니다.</EmptyOrders>
        ) : (
          <OrderList>
            {member.orders.map((o) => (
              <OrderRow key={o.id}>
                <OrderInfo>
                  <OrderId>#{o.id.slice(0, 8)}</OrderId>
                  <OrderProduct>{o.product}</OrderProduct>
                </OrderInfo>
                <OrderMeta>
                  <OrderAmount>{o.amount}</OrderAmount>
                  <StatusBadge $status={o.status}>
                    {ORDER_STATUS_LABEL_KO[o.status]}
                  </StatusBadge>
                </OrderMeta>
              </OrderRow>
            ))}
          </OrderList>
        )}
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

const EmptyOrders = styled.p`
  margin-top: 14px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
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
