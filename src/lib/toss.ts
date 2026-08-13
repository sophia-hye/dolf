import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk'

// Toss Payments 클라이언트 키.
// 실제 심사/운영 시 발급받은 키를 `.env`의 VITE_TOSS_CLIENT_KEY 에 넣으세요.
// (상점 MID: dolfstf23l — 토스페이먼츠 대시보드 → 개발자센터 → API 키)
// 미설정 시 아래 공개 테스트 키로 동작합니다(실제 청구 없음, 테스트 결제창).
const FALLBACK_TEST_KEY = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'
export const TOSS_CLIENT_KEY =
  import.meta.env.VITE_TOSS_CLIENT_KEY || FALLBACK_TEST_KEY
export const isTossTestKey = TOSS_CLIENT_KEY.startsWith('test_')

export interface RequestCardPaymentParams {
  readonly orderId: string
  readonly orderName: string
  readonly amount: number
  readonly currency: string
  readonly customerName?: string
  readonly customerEmail?: string
  readonly successUrl: string
  readonly failUrl: string
}

// A unique, human-traceable order id for the payment window.
export function makeOrderId(): string {
  const rand = Math.random().toString(36).slice(2, 10)
  return `dolf_${Date.now()}_${rand}`
}

// Opens the Toss card payment window. On success/failure Toss redirects the
// browser to successUrl/failUrl. If the user closes the window, the returned
// promise rejects with an error carrying a `code` (e.g. USER_CANCEL).
export async function requestCardPayment(
  p: RequestCardPaymentParams,
): Promise<void> {
  const tossPayments = await loadTossPayments(TOSS_CLIENT_KEY)
  const payment = tossPayments.payment({ customerKey: ANONYMOUS })
  const value = p.currency === 'USD' ? p.amount : Math.round(p.amount)
  await payment.requestPayment({
    method: 'CARD',
    amount: { currency: p.currency as 'KRW', value },
    orderId: p.orderId,
    orderName: p.orderName,
    successUrl: p.successUrl,
    failUrl: p.failUrl,
    customerName: p.customerName || undefined,
    customerEmail: p.customerEmail || undefined,
    card: {
      useEscrow: false,
      flowMode: 'DEFAULT',
      useCardPoint: false,
      useAppCardOnly: false,
    },
  })
}
