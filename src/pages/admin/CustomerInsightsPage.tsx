import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageHeader, PageTitle, PageDesc, Panel, PanelTitle } from '@/pages/admin/components/ui'
import { fetchInsights, type InsightsData } from '@/lib/admin-data'

const EMPTY: InsightsData = { kpis: [], country: [], grade: [], insights: [] }

export function CustomerInsightsPage() {
  const [data, setData] = useState<InsightsData>(EMPTY)

  useEffect(() => {
    let active = true
    void fetchInsights().then((d) => {
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
          <PageTitle>Customer Insights</PageTitle>
          <PageDesc>가입 회원과 주문 데이터를 기반으로 한 고객 분석입니다.</PageDesc>
        </div>
      </PageHeader>

      <KpiGrid>
        {data.kpis.map((c) => (
          <KpiCardBox key={c.label}>
            <KpiLabel>{c.label}</KpiLabel>
            <KpiValue>{c.value}</KpiValue>
            <KpiDelta>{c.delta}</KpiDelta>
          </KpiCardBox>
        ))}
      </KpiGrid>

      <TwoCol>
        <Panel>
          <PanelTitle>국가 분포</PanelTitle>
          <BreakdownList>
            {data.country.length === 0 && <Muted>데이터가 없습니다.</Muted>}
            {data.country.map((b) => (
              <BreakdownRow key={b.label}>
                <BreakdownHead>
                  <span>{b.label}</span>
                  <span>{b.percent}%</span>
                </BreakdownHead>
                <Track>
                  <Fill style={{ width: `${b.percent}%` }} $highlight={b.highlight} />
                </Track>
              </BreakdownRow>
            ))}
          </BreakdownList>
        </Panel>

        <Panel>
          <PanelTitle>등급 분포</PanelTitle>
          <BreakdownList>
            {data.grade.length === 0 && <Muted>데이터가 없습니다.</Muted>}
            {data.grade.map((b) => (
              <BreakdownRow key={b.label}>
                <BreakdownHead>
                  <span>{b.label}</span>
                  <span>{b.percent}%</span>
                </BreakdownHead>
                <Track>
                  <Fill style={{ width: `${b.percent}%` }} $highlight={b.highlight} />
                </Track>
              </BreakdownRow>
            ))}
          </BreakdownList>
        </Panel>
      </TwoCol>

      <Panel>
        <PanelTitle>핵심 인사이트</PanelTitle>
        <InsightList>
          {data.insights.map((line) => (
            <InsightItem key={line}>{line}</InsightItem>
          ))}
        </InsightList>
        <Note>
          연령·성별은 현재 회원가입 시 수집하지 않아 표시하지 않습니다. 필요하면
          가입 폼에 항목을 추가한 뒤 분석에 반영할 수 있어요.
        </Note>
      </Panel>
    </>
  )
}

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`

const KpiCardBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 22px;
`

const KpiLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const KpiValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 10px 0 8px;
`

const KpiDelta = styled.div`
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

const BreakdownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const BreakdownRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const BreakdownHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const Track = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.surface};
`

const Fill = styled.div<{ $highlight?: boolean }>`
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.ink};
`

const Muted = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const InsightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 18px;
  margin: 0;
`

const InsightItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink};
`

const Note = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`
