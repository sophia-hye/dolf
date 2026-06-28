import styled from 'styled-components'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PanelTitle,
  PrimaryButton,
  GhostButton,
  Table,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { getOrderById } from '@/data/admin-mock'

// Fields the shared mock lacks (contact, shipping, intl. customs) — local to this page.
interface OrderDetailExtra {
  readonly email: string
  readonly phone: string
  readonly country: string
  readonly address: string
  readonly addressLine2: string
  readonly carrier: string
  readonly trackingNo: string
  readonly hsCode: string
  readonly customsTerms: string
  readonly qty: number
  readonly subtotal: string
  readonly intlShipping: string
  readonly payment: string
  readonly currency: string
  readonly total: string
}

const ORDER_EXTRAS: Record<string, OrderDetailExtra> = {
  'DLF-2045': {
    email: 'emma.w@example.com',
    phone: '+1 415-555-0142',
    country: 'United States (US)',
    address: '123 Market St, San Francisco',
    addressLine2: 'CA 94103',
    carrier: 'EMS (국제특급)',
    trackingNo: 'EE123456789KR',
    hsCode: '4910.00 · Calendars',
    customsTerms: 'DDU (관세 수취인 부담)',
    qty: 1,
    subtotal: '$32',
    intlShipping: '$18',
    payment: 'PayPal',
    currency: 'USD ($)',
    total: '$50 USD',
  },
}

const DEFAULT_EXTRA: OrderDetailExtra = {
  email: '—',
  phone: '—',
  country: '대한민국 (KR)',
  address: '주소 정보 없음',
  addressLine2: '',
  carrier: '—',
  trackingNo: '—',
  hsCode: '—',
  customsTerms: '—',
  qty: 1,
  subtotal: '—',
  intlShipping: '$0',
  payment: '—',
  currency: 'USD ($)',
  total: '—',
}

export function OrderDetailPage() {
  const { id = '' } = useParams()
  const order = getOrderById(id)

  if (!order) {
    return <Navigate to="/admin/orders" replace />
  }

  const extra = ORDER_EXTRAS[order.id] ?? DEFAULT_EXTRA

  return (
    <>
      <PageHeader>
        <div>
          <BackLink to="/admin/orders">‹ 주문 목록</BackLink>
          <TitleRow>
            <PageTitle>주문 #{order.id}</PageTitle>
            <StatusBadge $status={order.status}>{order.status}</StatusBadge>
            {order.overseas && <Tag>International</Tag>}
          </TitleRow>
          <PageDesc>{order.date} · {order.customer}</PageDesc>
        </div>
        <Actions>
          <GhostButton type="button">상태 변경 ▾</GhostButton>
          <PrimaryButton as={Link} to={`/admin/orders/${order.id}/tracking`}>
            배송 추적
          </PrimaryButton>
        </Actions>
      </PageHeader>

      <Grid>
        <Panel>
          <PanelTitle>고객 (Customer)</PanelTitle>
          <Field label="이름" value={order.customer} />
          <Field label="이메일" value={extra.email} />
          <Field label="연락처" value={extra.phone} />
        </Panel>

        <Panel>
          <PanelTitle>배송지 (Ship to)</PanelTitle>
          <Field label="국가" value={extra.country} />
          <Field label="주소" value={extra.address} />
          {extra.addressLine2 && <Field label="" value={extra.addressLine2} />}
        </Panel>

        {order.overseas && (
          <Panel>
            <PanelTitle>국제배송 (International Shipping)</PanelTitle>
            <Field label="배송 수단" value={extra.carrier} />
            <Field label="트래킹 번호" value={extra.trackingNo} />
            <Field label="HS Code" value={extra.hsCode} />
            <Field label="통관 조건" value={extra.customsTerms} />
          </Panel>
        )}

        <Panel>
          <PanelTitle>결제</PanelTitle>
          <Field label="결제수단" value={extra.payment} />
          <Field label="통화" value={extra.currency} />
          <Field label="소계 (Subtotal)" value={extra.subtotal} />
          <Field label="국제배송비 (Intl. shipping)" value={extra.intlShipping} />
          <TotalField label="합계 (Total)" value={extra.total} />
        </Panel>
      </Grid>

      <Panel style={{ marginTop: 20 }}>
        <PanelTitle>주문 상품</PanelTitle>
        <Table>
          <thead>
            <tr>
              <Th>상품</Th>
              <Th>수량</Th>
              <Th>금액</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>{order.product}</Td>
              <Td>×{extra.qty}</Td>
              <Td>{order.amount}</Td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    </>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <FieldValue>{value}</FieldValue>
    </FieldRow>
  )
}

function TotalField({ label, value }: { label: string; value: string }) {
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <TotalValue>{value}</TotalValue>
    </FieldRow>
  )
}

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Tag = styled.span`
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

const FieldRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

const FieldLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const FieldValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
  text-align: right;
`

const TotalValue = styled(FieldValue)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brandRed};
`
