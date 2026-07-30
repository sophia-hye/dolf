import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
} from '@/pages/admin/components/ui'
import {
  fetchSettings,
  updateSettings,
  DEFAULT_SETTINGS,
  type StoreSettings,
} from '@/lib/settings'

const STORE_FIELDS: { key: keyof StoreSettings; label: string }[] = [
  { key: 'store_name', label: '스토어 이름' },
  { key: 'store_email', label: '대표 이메일' },
  { key: 'instagram', label: '인스타그램' },
  { key: 'biz_number', label: '사업자등록번호' },
]

const SHIPPING_FIELDS: { key: keyof StoreSettings; label: string; step?: string }[] = [
  { key: 'shipping_fee_krw', label: '기본 배송비 (원화 ₩)' },
  { key: 'free_ship_threshold_krw', label: '무료배송 기준 (국내 ₩ 이상)' },
  { key: 'shipping_fee_usd', label: '해외 배송비 (달러 $)', step: '0.01' },
  { key: 'shipping_fee_jpy', label: '해외 배송비 (엔화 ¥)' },
]

const NOTIFICATIONS: { key: keyof StoreSettings; label: string; desc: string }[] = [
  { key: 'notify_new_order', label: '신규 주문 알림', desc: '새 주문이 들어오면 이메일로 알립니다.' },
  { key: 'notify_new_member', label: '신규 회원 가입 알림', desc: '새 회원이 가입하면 알립니다.' },
  { key: 'notify_low_stock', label: '재고 부족 알림', desc: '상품 재고가 기준 미만이면 알립니다.' },
]

export function SettingsPage() {
  const [settings, setSettings] = useState<StoreSettings>(DEFAULT_SETTINGS)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let active = true
    void fetchSettings().then((s) => {
      if (active) setSettings(s)
    })
    return () => {
      active = false
    }
  }, [])

  function set<K extends keyof StoreSettings>(key: K, value: StoreSettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setMessage('')
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    const { error } = await updateSettings(settings)
    setSaving(false)
    setIsError(!!error)
    setMessage(error ? error : '저장되었습니다.')
  }

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
            <Field key={f.key}>
              <FieldLabel htmlFor={f.key}>{f.label}</FieldLabel>
              <Input
                id={f.key}
                value={String(settings[f.key])}
                onChange={(e) => set(f.key, e.target.value as StoreSettings[typeof f.key])}
              />
            </Field>
          ))}
        </FieldGrid>
      </Section>

      <Section>
        <SectionHead>
          <SectionTitle>결제 · 배송</SectionTitle>
          <SectionDesc>배송비와 무료배송 정책을 설정합니다.</SectionDesc>
        </SectionHead>
        <FieldGrid>
          {SHIPPING_FIELDS.map((f) => (
            <Field key={f.key}>
              <FieldLabel htmlFor={f.key}>{f.label}</FieldLabel>
              <Input
                id={f.key}
                type="number"
                min={0}
                step={f.step}
                value={String(settings[f.key])}
                onChange={(e) =>
                  set(f.key, (Number(e.target.value) || 0) as StoreSettings[typeof f.key])
                }
              />
            </Field>
          ))}
        </FieldGrid>
        <HintNote>무료배송은 국내(원화) 주문에만 적용됩니다. 해외 주문은 무료배송이 없습니다.</HintNote>
      </Section>

      <Section>
        <SectionHead>
          <SectionTitle>알림</SectionTitle>
          <SectionDesc>관리자 알림 수신을 설정합니다.</SectionDesc>
        </SectionHead>
        <ToggleList>
          {NOTIFICATIONS.map((s) => (
            <ToggleRow key={s.key}>
              <div>
                <ToggleLabel>{s.label}</ToggleLabel>
                <ToggleDesc>{s.desc}</ToggleDesc>
              </div>
              <Toggle
                type="button"
                role="switch"
                aria-checked={Boolean(settings[s.key])}
                aria-label={s.label}
                $on={Boolean(settings[s.key])}
                onClick={() => set(s.key, !settings[s.key] as StoreSettings[typeof s.key])}
              >
                <Knob $on={Boolean(settings[s.key])} />
              </Toggle>
            </ToggleRow>
          ))}
        </ToggleList>
        <HintNote>알림 발송(이메일)은 아직 연동 전이라 저장만 됩니다.</HintNote>
      </Section>

      <Actions>
        {message && <SaveMsg $error={isError}>{message}</SaveMsg>}
        <PrimaryButton type="button" disabled={saving} onClick={handleSave}>
          {saving ? '저장 중...' : '변경사항 저장'}
        </PrimaryButton>
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
  box-sizing: border-box;
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

const HintNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
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
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

const SaveMsg = styled.span<{ $error: boolean }>`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme, $error }) => ($error ? theme.colors.brandRed : theme.colors.textSecondary)};
`
