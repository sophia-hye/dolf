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
import {
  effectiveName,
  effectiveDescription,
  effectiveBadge,
} from '@/lib/product-pricing'

// SKU rule: brand prefix + zero-padded catalog index (fixed 3 digits).
function skuFor(index: number): string {
  return `DLF-${String(index + 1).padStart(3, '0')}`
}

interface Row {
  readonly slug: string
  readonly sku: string
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
  const [nameKo, setNameKo] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [nameJa, setNameJa] = useState('')
  const [descKo, setDescKo] = useState('')
  const [descEn, setDescEn] = useState('')
  const [descJa, setDescJa] = useState('')
  const [badge, setBadge] = useState('')
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
      getProducts('ko').map((p, i) => {
        const o = overrides[p.slug]
        return {
          slug: p.slug,
          sku: skuFor(i),
          name: effectiveName(p.slug, 'ko', overrides),
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
    setNameKo(effectiveName(row.slug, 'ko', overrides))
    setNameEn(effectiveName(row.slug, 'en', overrides))
    setNameJa(effectiveName(row.slug, 'ja', overrides))
    setDescKo(effectiveDescription(row.slug, 'ko', overrides))
    setDescEn(effectiveDescription(row.slug, 'en', overrides))
    setDescJa(effectiveDescription(row.slug, 'ja', overrides))
    setBadge(effectiveBadge(row.slug, 'ko', overrides) ?? '')
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
      name_ko: nameKo.trim() || null,
      name_en: nameEn.trim() || null,
      name_ja: nameJa.trim() || null,
      desc_ko: descKo.trim() || null,
      desc_en: descEn.trim() || null,
      desc_ja: descJa.trim() || null,
      badge: badge.trim() || null,
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
                <Th>공개</Th>
                <Th>SKU</Th>
                <Th>상품명</Th>
                <Th>가격 (₩ / $ / ¥)</Th>
                <Th>재고</Th>
                <Th>판매</Th>
                <Th>관리</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const low = r.stock < r.threshold
                return (
                  <tr key={r.slug}>
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
                    <Sku>{r.sku}</Sku>
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
          판매수는 주문 데이터에서 실시간 집계됩니다. 상품명·설명·배지·가격·재고·공개는
          저장 시 products 테이블에 저장되어 스토어에 바로 반영됩니다. (비우면 코드
          기본값 사용)
        </Note>
      </Panel>

      {editSlug && (
        <Modal title={`상품 수정 · ${editingName}`} onClose={() => setEditSlug(null)}>
          {error && <ModalError>{error}</ModalError>}
          <Group>
            <GroupLabel>상품명</GroupLabel>
            <Field>
              <Label htmlFor="n-ko">한국어</Label>
              <Input id="n-ko" value={nameKo} onChange={(e) => setNameKo(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="n-en">English</Label>
              <Input id="n-en" value={nameEn} onChange={(e) => setNameEn(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="n-ja">日本語</Label>
              <Input id="n-ja" value={nameJa} onChange={(e) => setNameJa(e.target.value)} />
            </Field>
          </Group>
          <Field>
            <Label htmlFor="p-badge">배지 (커버 라벨 · 비우면 없음)</Label>
            <Input id="p-badge" value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="예: Faith" />
          </Field>
          <Group>
            <GroupLabel>짧은 설명 (상세 페이지)</GroupLabel>
            <Field>
              <Label htmlFor="d-ko">한국어</Label>
              <Textarea id="d-ko" rows={2} value={descKo} onChange={(e) => setDescKo(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="d-en">English</Label>
              <Textarea id="d-en" rows={2} value={descEn} onChange={(e) => setDescEn(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="d-ja">日本語</Label>
              <Textarea id="d-ja" rows={2} value={descJa} onChange={(e) => setDescJa(e.target.value)} />
            </Field>
          </Group>
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

const Sku = styled(Td)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
`

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

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink};
  resize: vertical;
`

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`
