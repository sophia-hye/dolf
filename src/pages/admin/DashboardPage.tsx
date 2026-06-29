import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageHeader, PageTitle, PageDesc, Panel, PanelTitle, GhostButton, StatusBadge } from '@/pages/admin/components/ui'
import {
  dashboardStats,
  revenueChart,
  productSales,
  adminOrders,
  adminMembers,
} from '@/data/admin-mock'

export function DashboardPage() {
  const recentOrders = adminOrders.slice(0, 5)
  const recentMembers = [...adminMembers].reverse().slice(0, 5)

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Dashboard</PageTitle>
          <PageDesc>DoLF 스토어 현황을 한눈에 살펴봅니다.</PageDesc>
        </div>
        <GhostButton type="button">최근 30일 ▾</GhostButton>
      </PageHeader>

      <StatGrid>
        {dashboardStats.map((s) => (
          <StatCard key={s.label}>
            <StatLabel>{s.label}</StatLabel>
            <StatValue>{s.value}</StatValue>
            <StatDelta>▲ {s.delta}</StatDelta>
          </StatCard>
        ))}
      </StatGrid>

      <TwoCol>
        <Panel>
          <PanelTitle>매출 추이</PanelTitle>
          <Bars>
            {revenueChart.map((b) => (
              <BarCol key={b.label}>
                <Bar style={{ height: `${b.value}%` }} $highlight={b.highlight} />
                <BarLabel>{b.label}</BarLabel>
              </BarCol>
            ))}
          </Bars>
        </Panel>

        <Panel>
          <PanelTitle>상품별 판매</PanelTitle>
          <SalesList>
            {productSales.map((p) => (
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
            {recentOrders.map((o) => (
              <ListRow key={o.id}>
                <div>
                  <RowMain>#{o.id}</RowMain>
                  <RowSub>{o.product}</RowSub>
                </div>
                <StatusBadge $status={o.status}>{o.status}</StatusBadge>
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
            {recentMembers.map((m) => (
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
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 10px 0 8px;
`

const StatDelta = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brandRed};
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
