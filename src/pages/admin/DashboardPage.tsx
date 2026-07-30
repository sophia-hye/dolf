import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PanelTitle,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { ORDER_STATUS_LABEL_KO } from '@/lib/orders'
import { fetchDashboard, type DashboardData } from '@/lib/admin-data'

const EMPTY: DashboardData = {
  stats: [],
  monthly: [],
  productSales: [],
  recentOrders: [],
  recentMembers: [],
}

export function DashboardPage() {
  const [data, setData] = useState<DashboardData>(EMPTY)

  useEffect(() => {
    let active = true
    void fetchDashboard().then((d) => {
      if (active) setData(d)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Dashboard</PageTitle>
          <PageDesc>DoLF 스토어 현황을 한눈에 살펴봅니다.</PageDesc>
        </div>
      </PageHeader>

      <StatGrid>
        {data.stats.map((s) => (
          <StatCard key={s.label}>
            <StatLabel>{s.label}</StatLabel>
            <StatValue>{s.value}</StatValue>
            <StatDelta>{s.delta}</StatDelta>
          </StatCard>
        ))}
      </StatGrid>

      <TwoCol>
        <Panel>
          <PanelTitle>매출 추이 (최근 6개월 · ₩)</PanelTitle>
          <Bars>
            {data.monthly.map((b) => (
              <BarCol key={b.label}>
                <Bar style={{ height: `${b.value}%` }} $highlight={b.highlight} />
                <BarLabel>{b.label}</BarLabel>
              </BarCol>
            ))}
          </Bars>
        </Panel>

        <Panel>
          <PanelTitle>상품별 판매 (수량)</PanelTitle>
          <SalesList>
            {data.productSales.length === 0 && <Muted>판매 데이터가 없습니다.</Muted>}
            {data.productSales.map((p) => (
              <SalesRow key={p.name}>
                <SalesHead>
                  <span>{p.name}</span>
                  <span>{p.percent}%</span>
                </SalesHead>
                <Track>
                  <Fill style={{ width: `${p.percent}%` }} />
                </Track>
              </SalesRow>
            ))}
          </SalesList>
        </Panel>
      </TwoCol>

      <TwoCol>
        <Panel>
          <PanelHead>
            <PanelTitle>최근 주문</PanelTitle>
            <SeeAll to="/admin/orders">전체 보기 →</SeeAll>
          </PanelHead>
          <List>
            {data.recentOrders.length === 0 && <Muted>주문이 없습니다.</Muted>}
            {data.recentOrders.map((o) => (
              <ListRow key={o.id}>
                <div>
                  <RowMain>#{o.id.slice(0, 8)}</RowMain>
                  <RowSub>{o.product}</RowSub>
                </div>
                <StatusBadge $status={o.status}>
                  {ORDER_STATUS_LABEL_KO[o.status]}
                </StatusBadge>
              </ListRow>
            ))}
          </List>
        </Panel>

        <Panel>
          <PanelHead>
            <PanelTitle>신규 회원</PanelTitle>
            <SeeAll to="/admin/members">전체 보기 →</SeeAll>
          </PanelHead>
          <List>
            {data.recentMembers.length === 0 && <Muted>회원이 없습니다.</Muted>}
            {data.recentMembers.map((m) => (
              <ListRow key={m.id}>
                <div>
                  <RowMain>{m.name}</RowMain>
                  <RowSub>{m.email}</RowSub>
                </div>
                <RowSub>{m.joinedAt}</RowSub>
              </ListRow>
            ))}
          </List>
        </Panel>
      </TwoCol>
    </>
  )
}

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 22px;
`

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 10px 0 8px;
`

const StatDelta = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  height: 180px;
`

const BarCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  gap: 10px;
`

const Bar = styled.div<{ $highlight?: boolean }>`
  width: 100%;
  max-width: 40px;
  min-height: 2px;
  border-radius: 2px 2px 0 0;
  background-color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.ink};
`

const BarLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SalesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SalesRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SalesHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const Track = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
`

const Fill = styled.div`
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
`

const Muted = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const PanelHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SeeAll = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
  margin-bottom: 20px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const RowMain = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const RowSub = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 2px;
`
