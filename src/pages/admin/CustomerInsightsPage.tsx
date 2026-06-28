import styled from 'styled-components'
import { PageHeader, PageTitle, PageDesc, Panel, PanelTitle, GhostButton } from '@/pages/admin/components/ui'

// Local mock data for Customer Insights (KO, internal tool). No backend.

interface KpiCard {
  readonly label: string
  readonly value: string
  readonly delta: string
}

const kpiCards: KpiCard[] = [
  { label: '주 연령대', value: '20–30대', delta: '전체의 72%' },
  { label: '주 성별', value: '여성', delta: '72% : 28%' },
  { label: '주 국가', value: '대한민국', delta: '58% · 해외 42%' },
  { label: '재구매율', value: '34%', delta: '▲ 6% vs 평균' },
]

interface AgeBar {
  readonly label: string
  readonly percent: number
  readonly highlight?: boolean
}

const ageDistribution: AgeBar[] = [
  { label: '10대', percent: 8 },
  { label: '20대', percent: 38, highlight: true },
  { label: '30대', percent: 34, highlight: true },
  { label: '40대', percent: 14 },
  { label: '50대+', percent: 6 },
]

interface GenderBar {
  readonly label: string
  readonly percent: number
  readonly highlight?: boolean
}

const genderDistribution: GenderBar[] = [
  { label: '여성 (Female)', percent: 72, highlight: true },
  { label: '남성 (Male)', percent: 28 },
]

interface CountryBar {
  readonly label: string
  readonly percent: number
  readonly highlight?: boolean
}

const countryDistribution: CountryBar[] = [
  { label: '🇰🇷 대한민국', percent: 58, highlight: true },
  { label: '🇺🇸 미국', percent: 19 },
  { label: '🇯🇵 일본', percent: 12 },
  { label: '🇫🇷 프랑스', percent: 6 },
  { label: '기타', percent: 5 },
]

const keyInsights: readonly string[] = [
  '20–30대 여성이 핵심 구매층으로 전체의 절반 이상을 차지합니다.',
  '해외 비중이 42%까지 성장 — 미국·일본 고객 대상 영문화·국제배송 우선순위.',
  '재구매율 34%로 평균 대비 높아 리필·시즌 에디션 기회가 있습니다.',
  '선물 수요(12월·신년)에 매출이 집중되는 경향이 보입니다.',
]

export function CustomerInsightsPage() {
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Customer Insights</PageTitle>
          <PageDesc>상품별 주 고객층을 연령·성별·국가로 분석합니다.</PageDesc>
        </div>
        <GhostButton type="button">Breathe — Planner &amp; Diary ▾</GhostButton>
      </PageHeader>

      <KpiGrid>
        {kpiCards.map((c) => (
          <KpiCardBox key={c.label}>
            <KpiLabel>{c.label}</KpiLabel>
            <KpiValue>{c.value}</KpiValue>
            <KpiDelta>{c.delta}</KpiDelta>
          </KpiCardBox>
        ))}
      </KpiGrid>

      <TwoCol>
        <Panel>
          <PanelTitle>연령대 분포</PanelTitle>
          <Bars>
            {ageDistribution.map((b) => (
              <BarCol key={b.label}>
                <BarValue $highlight={b.highlight}>{b.percent}%</BarValue>
                <Bar style={{ height: `${b.percent * 2.6}px` }} $highlight={b.highlight} />
                <BarLabel>{b.label}</BarLabel>
              </BarCol>
            ))}
          </Bars>
        </Panel>

        <Panel>
          <PanelTitle>성별 분포</PanelTitle>
          <BreakdownList>
            {genderDistribution.map((g) => (
              <BreakdownRow key={g.label}>
                <BreakdownHead>
                  <span>{g.label}</span>
                  <span>{g.percent}%</span>
                </BreakdownHead>
                <Track $thick>
                  <Fill style={{ width: `${g.percent}%` }} $highlight={g.highlight} />
                </Track>
              </BreakdownRow>
            ))}
          </BreakdownList>
          <Caption>Breathe 플래너는 20–30대 여성 구매 비중이 가장 높습니다.</Caption>
        </Panel>
      </TwoCol>

      <TwoCol>
        <Panel>
          <PanelTitle>국가 분포</PanelTitle>
          <BreakdownList>
            {countryDistribution.map((c) => (
              <BreakdownRow key={c.label}>
                <BreakdownHead>
                  <span>{c.label}</span>
                  <Percent $highlight={c.highlight}>{c.percent}%</Percent>
                </BreakdownHead>
                <Track>
                  <Fill style={{ width: `${c.percent}%` }} $highlight={c.highlight} />
                </Track>
              </BreakdownRow>
            ))}
          </BreakdownList>
          <Caption>
            해외 비중 42%. 미국·일본 순으로 높아 영문 상세·국제배송 강화 시 성장 여지가 큽니다.
          </Caption>
        </Panel>

        <DarkPanel>
          <DarkTitle>주요 인사이트</DarkTitle>
          <InsightList>
            {keyInsights.map((text) => (
              <InsightRow key={text}>
                <Dot />
                <InsightText>{text}</InsightText>
              </InsightRow>
            ))}
          </InsightList>
        </DarkPanel>
      </TwoCol>
    </>
  )
}

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`

const KpiCardBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 22px;
`

const KpiLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const KpiValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 8px 0;
`

const KpiDelta = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brandRed};
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
`

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 180px;
`

const BarCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 8px;
`

const BarValue = styled.span<{ $highlight?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.textSecondary};
`

const Bar = styled.div<{ $highlight?: boolean }>`
  width: 40px;
  border-radius: 4px 4px 0 0;
  background-color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.ink};
  opacity: ${({ $highlight }) => ($highlight ? 1 : 0.78)};
`

const BarLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
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
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Percent = styled.span<{ $highlight?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.textSecondary};
`

const Track = styled.div<{ $thick?: boolean }>`
  height: ${({ $thick }) => ($thick ? '10px' : '8px')};
  border-radius: ${({ $thick }) => ($thick ? '5px' : '4px')};
  background-color: ${({ theme }) => theme.colors.surface};
`

const Fill = styled.div<{ $highlight?: boolean }>`
  height: 100%;
  border-radius: inherit;
  background-color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.brandRed : theme.colors.ink};
  opacity: ${({ $highlight }) => ($highlight ? 1 : 0.8)};
`

const Caption = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const DarkPanel = styled.section`
  background-color: ${({ theme }) => theme.colors.ink};
  border-radius: 6px;
  padding: 26px;
`

const DarkTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`

const InsightList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const InsightRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`

const Dot = styled.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  margin-top: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brandRed};
`

const InsightText = styled.p`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.92;
`
