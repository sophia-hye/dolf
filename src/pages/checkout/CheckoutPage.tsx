import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useAuth } from '@/state/auth-context'
import { useProductOverrides } from '@/state/products-context'
import { getProductBySlug } from '@/data/products'
import { formatMoney, shippingFeeFor, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { effectivePriceAmount, effectiveName } from '@/lib/product-pricing'
import { toShippingConfig } from '@/lib/settings'
import { pushEvent } from '@/lib/gtm'
import { requestCardPayment, makeOrderId } from '@/lib/toss'
import { PENDING_ORDER_KEY, type PendingOrder } from '@/lib/pending-order'
import { openPostcode } from '@/lib/postcode'

export function CheckoutPage() {
  const { t, locale } = useLocale()
  const { items } = useCart()
  const { user } = useAuth()
  const { overrides, settings } = useProductOverrides()
  const c = t.account.checkout

  const [recipient, setRecipient] = useState(user?.name ?? '')
  const [email, setEmail] = useState(user?.email ?? '')
  const [phone, setPhone] = useState(user?.phone ?? '')
  const [zonecode, setZonecode] = useState('')
  const [baseAddress, setBaseAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState(user?.address ?? '')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const openAddressSearch = async () => {
    const result = await openPostcode()
    if (result) {
      setZonecode(result.zonecode)
      setBaseAddress(result.address)
    }
  }

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
  const shipping = lines.length
    ? shippingFeeFor(currency, subtotal, toShippingConfig(settings))
    : 0
  const total = subtotal + shipping
  const itemCount = lines.reduce((n, l) => n + l.quantity, 0)

  // Report begin_checkout once when the checkout is entered with items.
  useEffect(() => {
    if (lines.length === 0) return
    pushEvent('begin_checkout', {
      value: total,
      currency,
      item_count: itemCount,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setBusy(true)

    if (!zonecode || !baseAddress) {
      setBusy(false)
      setError(c.addressRequired)
      return
    }
    const fullAddress = `(${zonecode}) ${baseAddress} ${detailAddress}`.trim()

    const orderId = makeOrderId()
    const orderName =
      lines.length === 1
        ? effectiveName(lines[0].slug, locale, overrides)
        : `${effectiveName(lines[0].slug, locale, overrides)} 외 ${lines.length - 1}건`

    // Stash the order so /checkout/success can persist it after Toss redirects.
    const pending: PendingOrder = {
      orderId,
      currency,
      subtotal,
      shippingFee: shipping,
      total,
      recipient: recipient.trim(),
      email: email.trim(),
      address: fullAddress,
      phone: phone.trim(),
      isGuest: !user,
      items: lines.map((l) => ({
        productSlug: l.slug,
        name: effectiveName(l.slug, locale, overrides),
        unitPrice: effectivePriceAmount(l.slug, locale, overrides),
        currency,
        quantity: l.quantity,
      })),
    }
    sessionStorage.setItem(PENDING_ORDER_KEY, JSON.stringify(pending))

    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    const origin = window.location.origin

    try {
      await requestCardPayment({
        orderId,
        orderName,
        amount: total,
        currency,
        customerName: recipient.trim(),
        customerEmail: email.trim(),
        successUrl: `${origin}${base}/checkout/success`,
        failUrl: `${origin}${base}/checkout/fail`,
      })
      // On success Toss redirects the browser; nothing else runs here.
    } catch (err) {
      // User closed the window or the SDK reported an error.
      setBusy(false)
      const message =
        (err as { message?: string })?.message || c.failNote
      setError(message)
    }
  }

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title>{c.title}</Title>
        </Head>

        {lines.length === 0 ? (
          <Panel>
            <SuccessNote>{c.emptyCart}</SuccessNote>
            <PrimaryLink to="/shop">{c.backToShop}</PrimaryLink>
          </Panel>
        ) : (
          <Grid>
            <form onSubmit={handleSubmit}>
              <Badge $guest={!user}>{user ? c.memberBadge : c.guestBadge}</Badge>
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
                <Label htmlFor="email">{c.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={c.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <Label htmlFor="postcode">{c.postcodeLabel}</Label>
                <PostcodeRow>
                  <Input
                    id="postcode"
                    type="text"
                    style={{ flex: 1, minWidth: 0 }}
                    placeholder={c.postcodeLabel}
                    value={zonecode}
                    readOnly
                    onClick={openAddressSearch}
                  />
                  <SearchButton type="button" onClick={openAddressSearch}>
                    {c.searchAddress}
                  </SearchButton>
                </PostcodeRow>
              </Field>
              <Field>
                <Label htmlFor="baseAddress">{c.addressBaseLabel}</Label>
                <Input
                  id="baseAddress"
                  type="text"
                  placeholder={c.addressPlaceholder}
                  value={baseAddress}
                  readOnly
                  onClick={openAddressSearch}
                />
              </Field>
              <Field>
                <Label htmlFor="detail">{c.addressDetailLabel}</Label>
                <Input
                  id="detail"
                  type="text"
                  placeholder={c.addressDetailPlaceholder}
                  value={detailAddress}
                  onChange={(e) => setDetailAddress(e.target.value)}
                  required
                />
              </Field>
              <SubmitButton type="submit" disabled={busy}>
                {busy ? c.redirecting : c.placeOrder}
              </SubmitButton>
            </form>

            <aside>
              <SummaryCard>
                <SummaryItems>
                  {lines.map(({ slug, quantity }) => (
                    <SummaryItem key={slug}>
                      <span>
                        {effectiveName(slug, locale, overrides)} × {quantity}
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

const Badge = styled.div<{ $guest: boolean }>`
  margin-bottom: 18px;
  padding: 10px 14px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.ink};
  background-color: ${({ theme, $guest }) =>
    $guest ? theme.colors.surface : 'rgba(168, 18, 18, 0.06)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
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

const PostcodeRow = styled.div`
  display: flex;
  gap: 8px;
`

const SearchButton = styled.button`
  flex: 0 0 auto;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 0.3px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
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

const SuccessNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
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
