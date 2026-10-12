import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useProductOverrides } from '@/state/products-context'
import {
  effectiveName,
  effectivePriceString,
  isSoldOut,
} from '@/lib/product-pricing'
import { makeCartKey } from '@/lib/product-variants'
import { formatMoney, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import type { ShopProduct } from '@/data/shop-types'

// Sticky price bar that follows the viewport on a product detail page — the
// same pattern as the Breathe PDP, made reusable for every other product.

export function StickyPurchaseBar({ product }: { product: ShopProduct }) {
  const { t, locale } = useLocale()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { overrides } = useProductOverrides()
  const currency = CURRENCY_BY_LOCALE[locale]

  const variants = useMemo(() => product.variants ?? [], [product])
  const [variantId, setVariantId] = useState(variants[0]?.id ?? '')
  // Reset the selection when the product (or edition) changes.
  useEffect(() => {
    setVariantId(product.variants?.[0]?.id ?? '')
  }, [product])
  const selected = variants.find((v) => v.id === variantId) ?? variants[0]

  const sold = isSoldOut(product.slug, overrides)
  const comingSoon = !!product.comingSoon
  const name = effectiveName(product.slug, locale, overrides)
  const priceText = selected
    ? formatMoney(selected.price, currency)
    : effectivePriceString(product.slug, locale, overrides)

  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
      setShowBar(window.scrollY > 360 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const add = () => {
    const key = makeCartKey(product.slug, variantId, variants[0]?.id)
    addItem(key)
    pushEvent('add_to_cart', { item_id: key, item_name: product.catalogName })
  }
  const buyNow = () => {
    add()
    navigate('/cart')
  }

  const disabled = sold || comingSoon
  const primaryLabel = comingSoon
    ? t.shop.comingSoon
    : sold
      ? t.shop.soldOut
      : t.shop.buyNow

  return (
    <Bar $show={showBar} aria-hidden={!showBar}>
      <Inner>
        <Info>
          <Name>{name}</Name>
          <Price>{priceText}</Price>
        </Info>
        <Actions>
          {variants.length > 1 && (
            <Select
              aria-label={locale === 'ko' ? '구성 선택' : 'Choose an option'}
              value={selected?.id ?? ''}
              onChange={(e) => setVariantId(e.target.value)}
            >
              {variants.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label} · {formatMoney(v.price, currency)}
                </option>
              ))}
            </Select>
          )}
          {!comingSoon && (
            <Cart type="button" onClick={add} disabled={disabled}>
              {t.shop.addToCart}
            </Cart>
          )}
          <Buy type="button" onClick={buyNow} disabled={disabled}>
            {primaryLabel}
          </Buy>
        </Actions>
      </Inner>
    </Bar>
  )
}

const Bar = styled.div<{ $show: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.07);
  transform: translateY(${({ $show }) => ($show ? '0' : '110%')});
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;
  padding: 10px clamp(12px, 3vw, 40px);
  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
const Inner = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`
const Info = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: 0;

  @media (max-width: 520px) {
    display: none;
  }
`
const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(15px, 2.4vw, 20px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 34vw;
`
const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(15px, 2.4vw, 20px);
  color: ${({ theme }) => theme.colors.ink};
  white-space: nowrap;
`
const Actions = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  min-width: 0;

  @media (max-width: 520px) {
    flex: 1;
    gap: 6px;
  }
`
const Select = styled.select`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 0 10px;
  max-width: 44vw;
  cursor: pointer;

  @media (max-width: 520px) {
    flex: 1 1 auto;
    min-width: 0;
    max-width: none;
    padding: 0 6px;
  }
`
const Btn = styled.button`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 12px clamp(14px, 2.4vw, 26px);
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    cursor: default;
    opacity: 0.55;
  }

  @media (max-width: 520px) {
    padding: 11px 12px;
  }
`
const Cart = styled(Btn)`
  border: 1px solid ${({ theme }) => theme.colors.ink};
  background: none;
  color: ${({ theme }) => theme.colors.ink};
`
const Buy = styled(Btn)`
  border: 1px solid ${({ theme }) => theme.colors.brandRed};
  background: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
`
