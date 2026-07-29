import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PanelTitle,
  Table,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import {
  fetchOrderById,
  updateOrderStatus,
  formatMoney,
  ORDER_STATUS_LABEL_KO,
  ALL_STATUSES,
  type OrderRow,
  type OrderStatus,
} from '@/lib/orders'

export function OrderDetailPage() {
  const { id = '' } = useParams()
  const [order, setOrder] = useState<OrderRow | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    let active = true
    void fetchOrderById(id).then((row) => {
      if (!active) return
      setOrder(row)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [id])

  if (loading) return null
  if (!order) return <Navigate to="/admin/orders" replace />

  const overseas = order.currency !== 'KRW'

  const handleStatus = async (next: OrderStatus) => {
    if (next === order.status) return
    setUpdating(true)
    const { error } = await updateOrderStatus(order.id, next)
    setUpdating(false)
    if (!error) setOrder({ ...order, status: next })
  }

  return (
    <>
      <PageHeader>
        <div>
          <BackLink to="/admin/orders">‹ 주문 목록</BackLink>
          <TitleRow>
            <PageTitle>주문 #{order.id.slice(0, 8)}</PageTitle>
            <StatusBadge $status={order.status}>
              {ORDER_STATUS_LABEL_KO[order.status]}
            </StatusBadge>
            {overseas && <Tag>International</Tag>}
          </TitleRow>
          <PageDesc>
            {order.created_at.slice(0, 10)} · {order.recipient ?? '—'}
          </PageDesc>
        </div>
        <Actions>
          <StatusLabel>상태 변경</StatusLabel>
          <StatusSelect
            value={order.status}
            disabled={updating}
            onChange={(e) => handleStatus(e.target.value as OrderStatus)}
          >
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s}>
                {ORDER_STATUS_LABEL_KO[s]}
              </option>
            ))}
          </StatusSelect>
        </Actions>
      </PageHeader>

      <Grid>
        <Panel>
          <PanelTitle>고객 (Customer)</PanelTitle>
          <Field label="받는 분" value={order.recipient ?? '—'} />
          <Field label="연락처" value={order.phone ?? '—'} />
        </Panel>

        <Panel>
          <PanelTitle>배송지 (Ship to)</PanelTitle>
          <Field label="구분" value={overseas ? '해외' : '국내'} />
          <Field label="주소" value={order.address ?? '주소 정보 없음'} />
        </Panel>

        <Panel>
          <PanelTitle>결제</PanelTitle>
          <Field label="통화" value={order.currency} />
          <Field label="소계 (Subtotal)" value={formatMoney(order.subtotal, order.currency)} />
          <Field label="배송비 (Shipping)" value={formatMoney(order.shipping_fee, order.currency)} />
          <TotalField label="합계 (Total)" value={formatMoney(order.total, order.currency)} />
        </Panel>
      </Grid>

      <Panel style={{ marginTop: 20 }}>
        <PanelTitle>주문 상품</PanelTitle>
        <Table>
          <thead>
            <tr>
              <Th>상품</Th>
              <Th>수량</Th>
              <Th>금액</Th>
            </tr>
          </thead>
          <tbody>
            {order.order_items.map((it) => (
              <tr key={it.product_slug}>
                <Td>{it.name}</Td>
                <Td>×{it.quantity}</Td>
                <Td>{formatMoney(it.unit_price * it.quantity, it.currency)}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    </>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <FieldValue>{value}</FieldValue>
    </FieldRow>
  )
}

function TotalField({ label, value }: { label: string; value: string }) {
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <TotalValue>{value}</TotalValue>
    </FieldRow>
  )
}

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Tag = styled.span`
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StatusLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StatusSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`

const FieldRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

const FieldLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const FieldValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
  text-align: right;
`

const TotalValue = styled(FieldValue)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brandRed};
`
