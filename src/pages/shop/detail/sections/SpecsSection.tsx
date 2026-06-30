import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { SpecsData } from '@/data/shop-types'

export function SpecsSection({ data }: { data: SpecsData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Table>
          {data.rows.map((row) => (
            <Row key={row.label}>
              <Label>{row.label}</Label>
              <Value>{row.value}</Value>
            </Row>
          ))}
        </Table>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({ theme }) => theme.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Table = styled.dl`
  width: 100%;
  max-width: 640px;
  margin: 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Label = styled.dt`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Value = styled.dd`
  margin: 0;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`
