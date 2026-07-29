import styled from 'styled-components'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
  Table,
  TableWrap,
  Th,
  Td,
} from '@/pages/admin/components/ui'
import { adminProducts, type AdminProductRow } from '@/data/admin-mock'

// 재고가 이 값 미만이면 "재고 부족"으로 표시 (in-file local rule, no backend).
const LOW_STOCK_THRESHOLD = 100

type ProductStatus = '판매중' | '재고 부족'

function getStatus(stock: number): ProductStatus {
  return stock < LOW_STOCK_THRESHOLD ? '재고 부족' : '판매중'
}

export function ProductsPage() {
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Products</PageTitle>
          <PageDesc>판매 중인 제품과 재고를 관리합니다.</PageDesc>
        </div>
        <PrimaryButton type="button">+ 상품 추가</PrimaryButton>
      </PageHeader>

      <Panel>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th>상품명</Th>
                <Th>SKU</Th>
                <Th>가격</Th>
                <Th>재고</Th>
                <Th>판매</Th>
                <Th>상태</Th>
              </tr>
            </thead>
            <tbody>
              {adminProducts.map((p: AdminProductRow) => {
                const status = getStatus(p.stock)
                const low = status === '재고 부족'
                return (
                  <Row key={p.sku}>
                    <Td>{p.name}</Td>
                    <Sku>{p.sku}</Sku>
                    <Td>{p.price}</Td>
                    <StockCell $low={low}>{p.stock}</StockCell>
                    <Muted>{p.sales}</Muted>
                    <StatusCell $low={low}>{status}</StatusCell>
                  </Row>
                )
              })}
            </tbody>
          </Table>
        </TableWrap>
      </Panel>
    </>
  )
}

const Row = styled.tr`
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const Sku = styled(Td)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Muted = styled(Td)`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StockCell = styled(Td)<{ $low: boolean }>`
  color: ${({ theme, $low }) => ($low ? theme.colors.brandRed : theme.colors.textSecondary)};
`

const StatusCell = styled(Td)<{ $low: boolean }>`
  font-weight: 500;
  color: ${({ theme, $low }) => ($low ? theme.colors.brandRed : theme.colors.ink)};
`
