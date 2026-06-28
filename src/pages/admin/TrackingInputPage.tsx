import { useState } from 'react'
import styled from 'styled-components'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
  GhostButton,
} from '@/pages/admin/components/ui'
import { getOrderById } from '@/data/admin-mock'

const CARRIERS = [
  'EMS · 국제특급 우편',
  'DHL Express',
  'FedEx International',
  'UPS Worldwide',
  'CJ대한통운',
] as const

export function TrackingInputPage() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const order = getOrderById(id)

  const [carrier, setCarrier] = useState<string>(CARRIERS[0])
  const [trackingNo, setTrackingNo] = useState('')
  const [shippedDate, setShippedDate] = useState('')
  const [notify, setNotify] = useState(true)

  if (!order) {
    return <Navigate to="/admin/orders" replace />
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // UI-only: no network. Return to the order detail after "saving".
    navigate(`/admin/orders/${id}`)
  }

  return (
    <>
      <PageHeader>
        <div>
          <BackLink to={`/admin/orders/${id}`}>‹ 주문 #{order.id}</BackLink>
          <PageTitle>송장 입력</PageTitle>
          <PageDesc>
            주문 #{order.id} · {order.customer} 배송 정보를 입력합니다.
          </PageDesc>
        </div>
      </PageHeader>

      <FormPanel>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="carrier">배송사 (Carrier)</Label>
            <Select
              id="carrier"
              value={carrier}
              onChange={(e) => setCarrier(e.target.value)}
            >
              {CARRIERS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="tracking">송장번호 (Tracking No.)</Label>
            <Input
              id="tracking"
              value={trackingNo}
              placeholder="예: EE123456789KR"
              onChange={(e) => setTrackingNo(e.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="shipped">발송일 (Shipped date)</Label>
            <Input
              id="shipped"
              type="date"
              value={shippedDate}
              onChange={(e) => setShippedDate(e.target.value)}
            />
          </FieldGroup>

          <Divider />

          <CheckRow>
            <input
              id="notify"
              type="checkbox"
              checked={notify}
              onChange={(e) => setNotify(e.target.checked)}
            />
            <CheckText>
              <CheckTitle>고객에게 배송 시작 알림 보내기</CheckTitle>
              <CheckDesc>
                {order.customer} 님께 배송 안내 이메일이 발송됩니다.
              </CheckDesc>
            </CheckText>
          </CheckRow>

          <Divider />

          <ButtonRow>
            <GhostButton as={Link} to={`/admin/orders/${id}`}>
              취소
            </GhostButton>
            <PrimaryButton type="submit" disabled={!trackingNo.trim()}>
              송장 저장 · 발송 처리
            </PrimaryButton>
          </ButtonRow>
        </form>
      </FormPanel>
    </>
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

const FormPanel = styled(Panel)`
  max-width: 520px;
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
`

const fieldStyles = `
  width: 100%;
  padding: 12px 14px;
  border-radius: 3px;
  box-sizing: border-box;
`

const Input = styled.input`
  ${fieldStyles}
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const Select = styled.select`
  ${fieldStyles}
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const Divider = styled.div`
  height: 1px;
  margin: 18px 0;
  background-color: ${({ theme }) => theme.colors.border};
`

const CheckRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

const CheckText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const CheckTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const CheckDesc = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;

  & > * {
    flex: 1;
    text-align: center;
  }
`
