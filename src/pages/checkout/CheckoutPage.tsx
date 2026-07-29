import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useAuth } from '@/state/auth-context'
import { useProductOverrides } from '@/state/products-context'
import { getProductBySlug } from '@/data/products'
import {
  createOrder,
  formatMoney,
  shippingFeeFor,
  CURRENCY_BY_LOCALE,
} from '@/lib/orders'
import { effectivePriceAmount } from '@/lib/product-pricing'
import { pushEvent } from '@/lib/gtm'

export function CheckoutPage() {
  const { t, locale } = useLocale()
  const { items, clear } = useCart()
  const { user } = useAuth()
  const { overrides } = useProductOverrides()
  const navigate = useNavigate()
  const c = t.account.checkout

  const [recipient, setRecipient] = useState(user?.name ?? '')
  const [phone, setPhone] = useState(user?.phone ?? '')
  const [address, setAddress] = useState(user?.address ?? '')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const currency = CURRENCY_BY_LOCALE[locale]

  const lines = useMemo(
    () =>
      items
        .map((line) => {
          const product = getProductBySlug(line.slug, locale)
          return product ? { ...line, product } : null
        })
        .filter((l): l is NonNullable<typeof l> => l !== null),
    [items, locale],
  )

  const subtotal = lines.reduce(
    (sum, l) => sum + effectivePriceAmount(l.slug, locale, overrides) * l.quantity,
    0,
  )
  const shipping = lines.length ? shippingFeeFor(currency, subtotal) : 0
  const total = subtotal + shipping

  // Report begin_checkout once when the checkout is entered with items.
  useEffect(() => {
    if (lines.length === 0) return
    pushEvent('begin_checkout', {
      value: total,
      currency,
      item_count: lines.reduce((n, l) => n + l.quantity, 0),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    const { id, error: err } = await createOrder({
      currency,
      subtotal,
      shippingFee: shipping,
      total,
      recipient: recipient.trim(),
      address: address.trim(),
      phone: phone.trim(),
      items: lines.map((l) => ({
        productSlug: l.slug,
        name: l.product.catalogName,
        unitPrice: effectivePriceAmount(l.slug, locale, overrides),
        currency,
        quantity: l.quantity,
      })),
    })
    setBusy(false)
    if (err) {
      setError(err)
      return
    }
    pushEvent('purchase', {
      transaction_id: id ?? undefined,
      value: total,
      currency,
      item_count: lines.reduce((n, l) => n + l.quantity, 0),
    })
    clear()
    setDone(true)
  }

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title>{c.title}</Title>
        </Head>

        {done ? (
          <Panel>
            <SuccessTitle>{c.success}</SuccessTitle>
            <SuccessNote>{c.successNote}</SuccessNote>
            <SuccessActions>
              <PrimaryLink to="/mypage">{c.viewOrders}</PrimaryLink>
              <TextLink to="/shop">{c.backToShop}</TextLink>
            </SuccessActions>
          </Panel>
        ) : lines.length === 0 ? (
          <Panel>
            <SuccessNote>{c.emptyCart}</SuccessNote>
            <PrimaryLink to="/shop">{c.backToShop}</PrimaryLink>
          </Panel>
        ) : (
          <Grid>
            <form onSubmit={handleSubmit}>
              {error && <ErrorText>{error}</ErrorText>}
              <Field>
                <Label htmlFor="recipient">{c.recipientLabel}</Label>
                <Input
                  id="recipient"
                  type="text"
                  placeholder={c.recipientPlaceholder}
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="phone">{c.phoneLabel}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={c.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="address">{c.addressLabel}</Label>
                <Textarea
                  id="address"
                  placeholder={c.addressPlaceholder}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  required
                />
              </Field>
              <SubmitButton type="submit" disabled={busy}>
                {busy ? c.placing : c.placeOrder}
              </SubmitButton>
            </form>

            <aside>
              <SummaryCard>
                <SummaryItems>
                  {lines.map(({ slug, quantity, product }) => (
                    <SummaryItem key={slug}>
                      <span>
                        {product.catalogName} × {quantity}
                      </span>
                      <span>
                        {formatMoney(
                          effectivePriceAmount(slug, locale, overrides) * quantity,
                          currency,
                        )}
                      </span>
                    </SummaryItem>
                  ))}
                </SummaryItems>
                <SummaryRow>
                  <span>{c.subtotal}</span>
                  <span>{formatMoney(subtotal, currency)}</span>
                </SummaryRow>
                <SummaryRow>
                  <span>{c.shipping}</span>
                  <span>{formatMoney(shipping, currency)}</span>
                </SummaryRow>
                <TotalRow>
                  <span>{c.total}</span>
                  <span>{formatMoney(total, currency)}</span>
                </TotalRow>
              </SummaryCard>
            </aside>
          </Grid>
        )}
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;
`

const Inner = styled(Container)`
  padding-top: 64px;
  padding-bottom: 96px;
  max-width: 900px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 48px;
    padding-bottom: 64px;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
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
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const Textarea = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ink};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

const ErrorText = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`

const SummaryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const SummaryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 40px 0;
`

const SuccessTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const SuccessNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SuccessActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
