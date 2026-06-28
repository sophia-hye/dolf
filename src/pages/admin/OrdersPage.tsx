import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  GhostButton,
  Table,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { adminOrders, type OrderStatus } from '@/data/admin-mock'

const TABS = ['전체', 'Paid', 'Shipped', 'Pending', 'Cancelled'] as const

export function OrdersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('전체')
  const navigate = useNavigate()

  const rows = adminOrders.filter(
    (o) => tab === '전체' || o.status === (tab as OrderStatus),
  )

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Orders</PageTitle>
          <PageDesc>전체 3,672건의 주문을 관리합니다.</PageDesc>
        </div>
        <GhostButton type="button">주문 내보내기</GhostButton>
      </PageHeader>

      <Toolbar>
        <Tabs>
          {TABS.map((t) => (
            <Tab key={t} type="button" $active={tab === t} onClick={() => setTab(t)}>
              {t}
            </Tab>
          ))}
        </Tabs>
        <Search placeholder="주문번호 · 고객 검색…" />
      </Toolbar>

      <Panel>
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
                <Td>#{o.id}</Td>
                <Td>{o.customer}</Td>
                <Td>{o.product}</Td>
                <Td>{o.amount}</Td>
                <Td>{o.overseas ? '해외' : '국내'}</Td>
                <Td>
                  <StatusBadge $status={o.status}>{o.status}</StatusBadge>
                </Td>
                <Td>{o.date}</Td>
              </Row>
            ))}
          </tbody>
        </Table>
        <Footer>
          <FootInfo>1–8 / 3,672건 · 해외 1,420건</FootInfo>
          <Pagination>
            <PageBtn>‹</PageBtn>
            <PageBtn $active>1</PageBtn>
            <PageBtn>2</PageBtn>
            <PageBtn>3</PageBtn>
            <PageBtn>…</PageBtn>
            <PageBtn>459</PageBtn>
            <PageBtn>›</PageBtn>
          </Pagination>
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
`

const Tabs = styled.div`
  display: flex;
  gap: 8px;
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

const Search = styled.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
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

const Pagination = styled.div`
  display: flex;
  gap: 6px;
`

const PageBtn = styled.button<{ $active?: boolean }>`
  min-width: 32px;
  height: 32px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 4px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.white)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.textSecondary)};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  cursor: pointer;
`
