import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { getProductBySlug } from '@/data/products'

// Prices are display strings (e.g. "₩52,000", "$38", "from ₩8,000"). Within a
// locale session they share one currency, so we parse the number for math and
// reuse the symbol for formatting the total.
function parseAmount(price: string): number {
  const digits = price.replace(/[^0-9.]/g, '')
  return Number(digits) || 0
}

function symbolOf(price: string): string {
  const m = price.match(/[₩$¥]/)
  return m ? m[0] : ''
}

export function CartPage() {
  const { t, locale } = useLocale()
  const { items, setQuantity, removeItem, clear } = useCart()
  const [showNotice, setShowNotice] = useState(false)
  const c = t.shop.cartPage

  // Resolve each cart line to its product for the current locale.
  const lines = items
    .map((line) => {
      const product = getProductBySlug(line.slug, locale)
      return product ? { ...line, product } : null
    })
    .filter((l): l is NonNullable<typeof l> => l !== null)

  const symbol = lines.length ? symbolOf(lines[0].product.catalogPrice) : ''
  const subtotal = lines.reduce(
    (sum, l) => sum + parseAmount(l.product.catalogPrice) * l.quantity,
    0,
  )

  return (
    <Section>
      <Inner>
        <Title>{c.title}</Title>

        {lines.length === 0 ? (
          <Empty>
            <EmptyText>{c.empty}</EmptyText>
            <PrimaryLink to="/shop">{c.continueShopping}</PrimaryLink>
          </Empty>
        ) : (
          <>
            <List>
              {lines.map(({ slug, quantity, product }) => (
                <Row key={slug}>
                  <Thumb to={`/shop/${slug}`}>
                    <img src={product.catalogImage} alt={product.catalogName} />
                  </Thumb>
                  <Info>
                    <Name to={`/shop/${slug}`}>{product.catalogName}</Name>
                    <UnitPrice>{product.catalogPrice}</UnitPrice>
                    <RemoveButton type="button" onClick={() => removeItem(slug)}>
                      {c.remove}
                    </RemoveButton>
                  </Info>
                  <Stepper>
                    <StepButton
                      type="button"
                      aria-label="-"
                      onClick={() => setQuantity(slug, quantity - 1)}
                    >
                      −
                    </StepButton>
                    <Qty>{quantity}</Qty>
                    <StepButton
                      type="button"
                      aria-label="+"
                      onClick={() => setQuantity(slug, quantity + 1)}
                    >
                      +
                    </StepButton>
                  </Stepper>
                </Row>
              ))}
            </List>

            <Summary>
              <SubtotalRow>
                <span>{c.subtotal}</span>
                <SubtotalValue>
                  {symbol}
                  {subtotal.toLocaleString()}
                </SubtotalValue>
              </SubtotalRow>

              <Checkout type="button" onClick={() => setShowNotice(true)}>
                {c.checkout}
              </Checkout>
              {showNotice && <Notice>{c.paymentSoon}</Notice>}

              <Actions>
                <TextLink to="/shop">{c.continueShopping}</TextLink>
                <ClearButton type="button" onClick={clear}>
                  {c.clear}
                </ClearButton>
              </Actions>
            </Summary>
          </>
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
  max-width: 860px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 48px;
    padding-bottom: 64px;
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 44px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 36px;
`

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 48px 0;
`

const EmptyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Thumb = styled(Link)`
  flex: 0 0 auto;
  width: 72px;
  aspect-ratio: 348 / 494;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Name = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const UnitPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const RemoveButton = styled.button`
  align-self: flex-start;
  margin-top: 2px;
  padding: 0;
  background: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`

const Stepper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`

const StepButton = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.ink};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const Qty = styled.span`
  min-width: 36px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: ${({ theme }) => theme.colors.ink};
`

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

const SubtotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.ink};
`

const SubtotalValue = styled.span`
  font-weight: 600;
`

const Checkout = styled.button`
  width: 100%;
  padding: 17px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`

const Notice = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`

const PrimaryLink = styled(Link)`
  padding: 15px 30px;
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

const ClearButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`
