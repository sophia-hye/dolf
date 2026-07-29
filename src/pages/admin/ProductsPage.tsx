import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
  GhostButton,
  Table,
  TableWrap,
  Th,
  Td,
} from '@/pages/admin/components/ui'
import { Modal } from '@/pages/admin/components/Modal'
import { getProducts, getProductBySlug } from '@/data/products'
import { parseAmount, formatMoney } from '@/lib/orders'
import {
  fetchProductOverrides,
  fetchSalesBySlug,
  upsertProduct,
  type ProductOverride,
} from '@/lib/products-admin'

interface Row {
  readonly slug: string
  readonly name: string
  readonly priceKrw: number
  readonly priceUsd: number
  readonly priceJpy: number
  readonly stock: number
  readonly threshold: number
  readonly published: boolean
  readonly sales: number
}

function catalogPrice(slug: string, locale: 'ko' | 'en' | 'ja'): number {
  const p = getProductBySlug(slug, locale)
  return p ? parseAmount(p.catalogPrice) : 0
}

export function ProductsPage() {
  const [overrides, setOverrides] = useState<Record<string, ProductOverride>>({})
  const [sales, setSales] = useState<Record<string, number>>({})
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [krw, setKrw] = useState('')
  const [usd, setUsd] = useState('')
  const [jpy, setJpy] = useState('')
  const [stock, setStock] = useState('')
  const [threshold, setThreshold] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const refetch = async () => {
    const [ov, sl] = await Promise.all([fetchProductOverrides(), fetchSalesBySlug()])
    setOverrides(ov)
    setSales(sl)
  }

  useEffect(() => {
    void refetch()
  }, [])

  const rows = useMemo<Row[]>(
    () =>
      getProducts('ko').map((p) => {
        const o = overrides[p.slug]
        return {
          slug: p.slug,
          name: p.catalogName,
          priceKrw: o?.price_krw ?? catalogPrice(p.slug, 'ko'),
          priceUsd: o?.price_usd ?? catalogPrice(p.slug, 'en'),
          priceJpy: o?.price_jpy ?? catalogPrice(p.slug, 'ja'),
          stock: o?.stock ?? 0,
          threshold: o?.low_stock_threshold ?? 20,
          published: o?.published ?? true,
          sales: sales[p.slug] ?? 0,
        }
      }),
    [overrides, sales],
  )

  const togglePublished = async (row: Row) => {
    setError('')
    const { error: err } = await upsertProduct(row.slug, { published: !row.published })
    if (err) {
      setError(err)
      return
    }
    await refetch()
  }

  const openEdit = (row: Row) => {
    setEditSlug(row.slug)
    setKrw(String(row.priceKrw))
    setUsd(String(row.priceUsd))
    setJpy(String(row.priceJpy))
    setStock(String(row.stock))
    setThreshold(String(row.threshold))
    setError('')
  }

  const saveEdit = async () => {
    if (!editSlug) return
    setSaving(true)
    const { error: err } = await upsertProduct(editSlug, {
      price_krw: Number(krw) || 0,
      price_usd: Number(usd) || 0,
      price_jpy: Number(jpy) || 0,
      stock: Number(stock) || 0,
      low_stock_threshold: Number(threshold) || 0,
    })
    setSaving(false)
    if (err) {
      setError(err)
      return
    }
    await refetch()
    setEditSlug(null)
  }

  const editingName = rows.find((r) => r.slug === editSlug)?.name ?? ''

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Products</PageTitle>
          <PageDesc>판매 중인 제품과 재고를 관리합니다.</PageDesc>
        </div>
        <PrimaryButton type="button">+ 상품 추가</PrimaryButton>
      </PageHeader>

      {error && <ErrorBanner>{error}</ErrorBanner>}

      <Panel>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th>상품명</Th>
                <Th>가격 (₩ / $ / ¥)</Th>
                <Th>재고</Th>
                <Th>판매</Th>
                <Th>공개</Th>
                <Th>관리</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const low = r.stock < r.threshold
                return (
                  <tr key={r.slug}>
                    <Td>{r.name}</Td>
                    <Td>
                      <Prices>
                        <span>{formatMoney(r.priceKrw, 'KRW')}</span>
                        <span>{formatMoney(r.priceUsd, 'USD')}</span>
                        <span>{formatMoney(r.priceJpy, 'JPY')}</span>
                      </Prices>
                    </Td>
                    <StockCell $low={low}>
                      {r.stock}
                      {low && <LowTag>부족</LowTag>}
                    </StockCell>
                    <Muted>{r.sales}</Muted>
                    <Td>
                      <ToggleWrap>
                        <Toggle
                          type="button"
                          role="switch"
                          aria-checked={r.published}
                          aria-label={`${r.name} 공개`}
                          $on={r.published}
                          onClick={() => togglePublished(r)}
                        >
                          <Knob $on={r.published} />
                        </Toggle>
                        <ToggleText $on={r.published}>
                          {r.published ? '공개' : '비공개'}
                        </ToggleText>
                      </ToggleWrap>
                    </Td>
                    <Td>
                      <EditButton type="button" onClick={() => openEdit(r)}>
                        수정
                      </EditButton>
                    </Td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </TableWrap>
        <Note>
          판매수는 주문 데이터에서 실시간 집계됩니다. 가격·재고·공개는 저장 시
          products 테이블에 반영됩니다. (스토어 노출 반영은 추후 단계)
        </Note>
      </Panel>

      {editSlug && (
        <Modal title={`상품 수정 · ${editingName}`} onClose={() => setEditSlug(null)}>
          {error && <ModalError>{error}</ModalError>}
          <Group>
            <GroupLabel>가격</GroupLabel>
            <Field>
              <Label htmlFor="p-krw">원화 (₩)</Label>
              <Input id="p-krw" type="number" min={0} value={krw} onChange={(e) => setKrw(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="p-usd">달러 ($)</Label>
              <Input id="p-usd" type="number" min={0} step="0.01" value={usd} onChange={(e) => setUsd(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="p-jpy">엔화 (¥)</Label>
              <Input id="p-jpy" type="number" min={0} value={jpy} onChange={(e) => setJpy(e.target.value)} />
            </Field>
          </Group>
          <Field>
            <Label htmlFor="p-stock">재고</Label>
            <Input id="p-stock" type="number" min={0} value={stock} onChange={(e) => setStock(e.target.value)} />
          </Field>
          <Field>
            <Label htmlFor="p-threshold">재고 부족 기준 (이 수량 미만이면 부족)</Label>
            <Input id="p-threshold" type="number" min={0} value={threshold} onChange={(e) => setThreshold(e.target.value)} />
          </Field>
          <ModalActions>
            <GhostButton type="button" onClick={() => setEditSlug(null)}>
              취소
            </GhostButton>
            <PrimaryButton type="button" disabled={saving} onClick={saveEdit}>
              {saving ? '저장 중...' : '저장'}
            </PrimaryButton>
          </ModalActions>
        </Modal>
      )}
    </>
  )
}

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.ink};
  white-space: nowrap;
`

const Muted = styled(Td)`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StockCell = styled(Td)<{ $low: boolean }>`
  color: ${({ theme, $low }) => ($low ? theme.colors.brandRed : theme.colors.textSecondary)};
`

const LowTag = styled.span`
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.brandRed};
`

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Toggle = styled.button<{ $on: boolean }>`
  position: relative;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: none;
  border-radius: 11px;
  padding: 0;
  cursor: pointer;
  background-color: ${({ theme, $on }) => ($on ? theme.colors.brandRed : theme.colors.border)};
  transition: background-color 0.2s ease;
`

const Knob = styled.span<{ $on: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $on }) => ($on ? '20px' : '2px')};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: left 0.2s ease;
`

const ToggleText = styled.span<{ $on: boolean }>`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.textSecondary)};
`

const EditButton = styled.button`
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const Note = styled.p`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const ErrorBanner = styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 6px;
  background-color: #fbeaea;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`

const ModalError = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`

const Group = styled.div`
  margin-bottom: 8px;
`

const GroupLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 8px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ink};
`

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`
