import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  Table,
  TableWrap,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import {
  fetchAllOrders,
  formatMoney,
  ORDER_STATUS_LABEL_KO,
  ALL_STATUSES,
  type OrderRow,
  type OrderStatus,
} from '@/lib/orders'

const TABS = ['전체', ...ALL_STATUSES] as const

function orderProduct(o: OrderRow): string {
  const first = o.order_items[0]
  if (!first) return '—'
  const extra = o.order_items.length - 1
  return extra > 0 ? `${first.name} +${extra}` : first.name
}

export function OrdersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('전체')
  const [orders, setOrders] = useState<OrderRow[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let active = true
    void fetchAllOrders().then((rows) => {
      if (!active) return
      setOrders(rows)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  const rows = useMemo(
    () =>
      orders.filter((o) => tab === '전체' || o.status === (tab as OrderStatus)),
    [orders, tab],
  )

  const overseasCount = orders.filter((o) => o.currency !== 'KRW').length

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Orders</PageTitle>
          <PageDesc>전체 {orders.length}건의 주문을 관리합니다.</PageDesc>
        </div>
      </PageHeader>

      <Toolbar>
        <Tabs>
          {TABS.map((t) => (
            <Tab key={t} type="button" $active={tab === t} onClick={() => setTab(t)}>
              {t === '전체' ? '전체' : ORDER_STATUS_LABEL_KO[t as OrderStatus]}
            </Tab>
          ))}
        </Tabs>
      </Toolbar>

      <Panel>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th>주문번호</Th>
                <Th>고객</Th>
                <Th>상품</Th>
                <Th>금액</Th>
                <Th>배송지</Th>
                <Th>상태</Th>
                <Th>날짜</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o) => (
                <Row key={o.id} onClick={() => navigate(`/admin/orders/${o.id}`)}>
                  <Td>#{o.id.slice(0, 8)}</Td>
                  <Td>{o.recipient ?? '—'}</Td>
                  <Td>{orderProduct(o)}</Td>
                  <Td>{formatMoney(o.total, o.currency)}</Td>
                  <Td>{o.currency === 'KRW' ? '국내' : '해외'}</Td>
                  <Td>
                    <StatusBadge $status={o.status}>
                      {ORDER_STATUS_LABEL_KO[o.status]}
                    </StatusBadge>
                  </Td>
                  <Td>{o.created_at.slice(0, 10)}</Td>
                </Row>
              ))}
            </tbody>
          </Table>
        </TableWrap>
        {!loading && rows.length === 0 && <Empty>주문이 없습니다.</Empty>}
        <Footer>
          <FootInfo>
            {rows.length}건 표시 · 전체 {orders.length}건 · 해외 {overseasCount}건
          </FootInfo>
        </Footer>
      </Panel>
    </>
  )
}

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`

const Tabs = styled.div`
  display: flex;
  gap: 8px;

  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
  }
`

const Tab = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 20px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.white)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.textSecondary)};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  cursor: pointer;
`

const Row = styled.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

const FootInfo = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Empty = styled.div`
  padding: 40px 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`
