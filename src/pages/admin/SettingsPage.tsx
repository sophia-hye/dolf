import { useState } from 'react'
import styled from 'styled-components'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
} from '@/pages/admin/components/ui'

type TextField = {
  id: string
  label: string
  value: string
}

const STORE_FIELDS: TextField[] = [
  { id: 'storeName', label: '스토어 이름', value: 'DoLF' },
  { id: 'storeEmail', label: '대표 이메일', value: 'hello@dolf.official' },
  { id: 'instagram', label: '인스타그램', value: '@dolf._official' },
  { id: 'bizNumber', label: '사업자등록번호', value: '123-45-67890' },
]

const SHIPPING_FIELDS: TextField[] = [
  { id: 'currency', label: '기본 통화', value: 'USD ($)' },
  { id: 'shippingFee', label: '기본 배송비', value: '₩ 3,000' },
  { id: 'freeShipping', label: '무료배송 기준', value: '₩ 50,000 이상' },
  { id: 'dispatch', label: '기본 출고일', value: '결제 후 2–3일' },
]

type ToggleSetting = {
  id: string
  label: string
  desc: string
  on: boolean
}

const NOTIFICATION_SETTINGS: ToggleSetting[] = [
  {
    id: 'newOrder',
    label: '신규 주문 알림',
    desc: '새 주문이 들어오면 이메일로 알립니다.',
    on: true,
  },
  {
    id: 'newMember',
    label: '신규 회원 가입 알림',
    desc: '새 회원이 가입하면 알립니다.',
    on: true,
  },
  {
    id: 'lowStock',
    label: '재고 부족 알림',
    desc: '상품 재고가 60개 미만이면 알립니다.',
    on: false,
  },
]

export function SettingsPage() {
  const [store, setStore] = useState(() =>
    Object.fromEntries(STORE_FIELDS.map((f) => [f.id, f.value])),
  )
  const [shipping, setShipping] = useState(() =>
    Object.fromEntries(SHIPPING_FIELDS.map((f) => [f.id, f.value])),
  )
  const [notifications, setNotifications] = useState(() =>
    Object.fromEntries(NOTIFICATION_SETTINGS.map((s) => [s.id, s.on])),
  )

  const updateStore = (id: string, value: string) =>
    setStore((prev) => ({ ...prev, [id]: value }))
  const updateShipping = (id: string, value: string) =>
    setShipping((prev) => ({ ...prev, [id]: value }))
  const toggleNotification = (id: string) =>
    setNotifications((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Settings</PageTitle>
          <PageDesc>스토어 운영 설정을 관리합니다.</PageDesc>
        </div>
      </PageHeader>

      <Section>
        <SectionHead>
          <SectionTitle>스토어 정보</SectionTitle>
          <SectionDesc>기본 스토어 정보를 설정합니다.</SectionDesc>
        </SectionHead>
        <FieldGrid>
          {STORE_FIELDS.map((f) => (
            <Field key={f.id}>
              <FieldLabel htmlFor={f.id}>{f.label}</FieldLabel>
              <Input
                id={f.id}
                value={store[f.id]}
                onChange={(e) => updateStore(f.id, e.target.value)}
              />
            </Field>
          ))}
        </FieldGrid>
      </Section>

      <Section>
        <SectionHead>
          <SectionTitle>결제 · 배송</SectionTitle>
          <SectionDesc>통화와 배송 정책을 설정합니다.</SectionDesc>
        </SectionHead>
        <FieldGrid>
          {SHIPPING_FIELDS.map((f) => (
            <Field key={f.id}>
              <FieldLabel htmlFor={f.id}>{f.label}</FieldLabel>
              <Input
                id={f.id}
                value={shipping[f.id]}
                onChange={(e) => updateShipping(f.id, e.target.value)}
              />
            </Field>
          ))}
        </FieldGrid>
      </Section>

      <Section>
        <SectionHead>
          <SectionTitle>알림</SectionTitle>
          <SectionDesc>관리자 알림 수신을 설정합니다.</SectionDesc>
        </SectionHead>
        <ToggleList>
          {NOTIFICATION_SETTINGS.map((s) => (
            <ToggleRow key={s.id}>
              <div>
                <ToggleLabel>{s.label}</ToggleLabel>
                <ToggleDesc>{s.desc}</ToggleDesc>
              </div>
              <Toggle
                type="button"
                role="switch"
                aria-checked={notifications[s.id]}
                aria-label={s.label}
                $on={notifications[s.id]}
                onClick={() => toggleNotification(s.id)}
              >
                <Knob $on={notifications[s.id]} />
              </Toggle>
            </ToggleRow>
          ))}
        </ToggleList>
      </Section>

      <Actions>
        <PrimaryButton type="button">변경사항 저장</PrimaryButton>
      </Actions>
    </>
  )
}

const Section = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.mobile} {
    gap: 16px;
    padding: 20px;
    margin-bottom: 16px;
  }
`

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const SectionDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FieldLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ink};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.ink};
  }
`

const ToggleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0;
`

const ToggleLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const ToggleDesc = styled.p`
  margin-top: 3px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Toggle = styled.button<{ $on: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ theme, $on }) =>
    $on ? theme.colors.brandRed : theme.colors.border};
  transition: background-color 0.2s ease;
`

const Knob = styled.span<{ $on: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $on }) => ($on ? '22px' : '2px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: left 0.2s ease;
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`
