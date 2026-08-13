import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useAuth } from '@/state/auth-context'
import { formatMoney } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import { isTossTestKey } from '@/lib/toss'
import { confirmPayment } from '@/lib/payments'
import { readPendingOrder, clearPendingOrder } from '@/lib/pending-order'
import { businessInfo } from '@/data/business'

type Phase = 'saving' | 'done' | 'error'

// Toss redirects here with ?paymentKey=&orderId=&amount= after the buyer
// authorizes the card payment. We hand those to the `confirm-payment` Edge
// Function, which verifies the payment with Toss (secret key) and persists the
// order — for guests and members alike.
export function CheckoutSuccessPage() {
  const { t } = useLocale()
  const { clear } = useCart()
  const { user } = useAuth()
  const c = t.account.checkout
  const [params] = useSearchParams()
  const [amount, setAmount] = useState<number | null>(null)
  const [currency, setCurrency] = useState('KRW')
  const [phase, setPhase] = useState<Phase>('saving')
  const [errorMsg, setErrorMsg] = useState('')
  const ran = useRef(false)

  useEffect(() => {
    if (ran.current) return
    ran.current = true

    const pending = readPendingOrder()
    const paymentKey = params.get('paymentKey')
    const tossOrderId = params.get('orderId')
    const amtQ = Number(params.get('amount'))
    const displayAmount =
      Number.isFinite(amtQ) && amtQ > 0 ? amtQ : (pending?.total ?? null)
    setAmount(displayAmount)
    if (pending) setCurrency(pending.currency)

    // No order snapshot or missing params (e.g. a page refresh after it was
    // already saved) — just show the confirmation.
    if (!pending || !paymentKey || !tossOrderId || !(amtQ > 0)) {
      setPhase('done')
      return
    }

    void (async () => {
      const { error } = await confirmPayment({
        paymentKey,
        tossOrderId,
        amount: amtQ,
        order: {
          currency: pending.currency,
          subtotal: pending.subtotal,
          shippingFee: pending.shippingFee,
          total: pending.total,
          recipient: pending.recipient,
          email: pending.email,
          address: pending.address,
          phone: pending.phone,
          items: pending.items,
        },
      })

      // The card was already charged at this point — clear the cart either way.
      pushEvent('purchase', {
        transaction_id: pending.orderId,
        value: pending.total,
        currency: pending.currency,
        item_count: pending.items.reduce((n, it) => n + it.quantity, 0),
      })
      clear()
      clearPendingOrder()

      if (error) {
        setErrorMsg(error)
        setPhase('error')
      } else {
        setPhase('done')
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section>
      <Inner>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Panel>
          {phase === 'saving' ? (
            <Note>{c.confirmPending}</Note>
          ) : (
            <>
              <PaidTitle>{c.paid}</PaidTitle>
              {amount !== null && <Amount>{formatMoney(amount, currency)}</Amount>}
              <Note>{c.paidNote}</Note>
              {phase === 'error' && (
                <ErrorNote>
                  주문 저장 중 문제가 발생했습니다. 결제는 정상 처리되었으니{' '}
                  {businessInfo.email} 으로 문의해 주세요. ({errorMsg})
                </ErrorNote>
              )}
              {isTossTestKey && (
                <TestNote>테스트 결제창으로 진행되었습니다 (실제 청구 없음).</TestNote>
              )}
              <Actions>
                {user ? (
                  <PrimaryLink to="/mypage">{c.viewOrders}</PrimaryLink>
                ) : (
                  <PrimaryLink to="/shop">{c.backToShop}</PrimaryLink>
                )}
                <TextLink to="/shop">{c.backToShop}</TextLink>
              </Actions>
            </>
          )}
        </Panel>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;
`

const Inner = styled(Container)`
  padding-top: 72px;
  padding-bottom: 96px;
  max-width: 720px;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 0;
`

const PaidTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Amount = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const ErrorNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.brandRed};
`

const TestNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
`

const PrimaryLink = styled(Link)`
  padding: 14px 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
`

const TextLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: ${({ theme }) => theme.colors.ink};
  text-decoration: underline;
`
