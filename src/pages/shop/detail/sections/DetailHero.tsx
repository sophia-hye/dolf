import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useWishlist } from '@/state/wishlist-context'
import { useProductOverrides } from '@/state/products-context'
import { isSoldOut } from '@/lib/product-pricing'
import { makeCartKey } from '@/lib/product-variants'
import { formatMoney, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import type { ShopProduct } from '@/data/shop-types'

// How long each cover stays fully visible before cross-fading to the next.
const SLIDE_MS = 3200

export function DetailHero({ product }: { product: ShopProduct }) {
  const { t, locale } = useLocale()
  const { addItem } = useCart()
  const { has, toggle } = useWishlist()
  const { overrides } = useProductOverrides()
  const navigate = useNavigate()
  const sold = isSoldOut(product.slug, overrides)
  const { hero } = product
  const gallery = hero.gallery

  // Purchase options (single / sets). Defaults to the first (single) variant.
  const variants = product.variants
  const currency = CURRENCY_BY_LOCALE[locale]
  const [variantId, setVariantId] = useState(variants?.[0]?.id ?? '')
  const selected = variants?.find((v) => v.id === variantId) ?? variants?.[0]
  const priceText = selected ? formatMoney(selected.price, currency) : hero.price
  const optionsLabel =
    locale === 'ko' ? '구성 선택' : locale === 'ja' ? '構成を選択' : 'Choose an option'

  // Auto cross-fade between cover images (e.g. front ↔ back). Single-image
  // products stay static.
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (gallery.length < 2) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % gallery.length),
      SLIDE_MS,
    )
    return () => clearInterval(id)
  }, [gallery.length])

  const add = () => {
    const key = makeCartKey(product.slug, variantId, variants?.[0]?.id)
    addItem(key)
    pushEvent('add_to_cart', {
      item_id: key,
      item_name: product.catalogName,
    })
  }
  const buyNow = () => {
    add()
    navigate('/cart')
  }

  return (
    <Section>
      <Inner>
        <ImageCard>
          {gallery.map((src, i) => (
            <ProductImage
              key={src}
              src={src}
              alt={hero.title}
              $visible={i === active}
              aria-hidden={i !== active}
            />
          ))}
          {gallery.length > 1 && (
            <Dots>
              {gallery.map((src, i) => (
                <Dot
                  key={src}
                  type="button"
                  $active={i === active}
                  aria-label={`View cover ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </Dots>
          )}
        </ImageCard>
        <Info>
          <Title>{hero.title}</Title>
          <Subtitle>{hero.subtitle}</Subtitle>
          <Price>{priceText}</Price>
          {variants && variants.length > 1 && (
            <Options role="radiogroup" aria-label={optionsLabel}>
              {variants.map((v) => (
                <Option
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={v.id === variantId}
                  $active={v.id === variantId}
                  onClick={() => setVariantId(v.id)}
                >
                  <OptionName>{v.label}</OptionName>
                  <OptionPrice>{formatMoney(v.price, currency)}</OptionPrice>
                </Option>
              ))}
            </Options>
          )}
          <Divider />
          <Description>{hero.description}</Description>
          <Specs>
            {hero.specLines.map((line) => (
              <SpecLine key={line}>{line}</SpecLine>
            ))}
          </Specs>
          <Buttons>
            <BuyNow type="button" onClick={buyNow} disabled={sold}>
              {sold ? t.shop.soldOut : t.shop.buyNow}
            </BuyNow>
            <AddToCart type="button" onClick={add} disabled={sold}>
              {t.shop.addToCart}
            </AddToCart>
            <WishBtn
              type="button"
              aria-label="wishlist"
              aria-pressed={has(product.slug)}
              $on={has(product.slug)}
              onClick={() => toggle(product.slug)}
            >
              {has(product.slug) ? '♥' : '♡'}
            </WishBtn>
          </Buttons>
        </Info>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  display: flex;
  gap: 72px;
  padding-top: 64px;
  padding-bottom: 80px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 64px;
  }
`

const ImageCard = styled.div`
  position: relative;
  flex: 1;
  /* Keep the page ratio fixed instead of stretching to the row height. */
  align-self: flex-start;
  aspect-ratio: 499 / 709;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    align-self: stretch;
  }
`

const ProductImage = styled.img<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.9s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Dots = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.ink : theme.colors.border};
  transition: background-color 0.3s ease;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 64px;
  font-weight: 300;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.ink};
`

const Subtitle = styled.p`
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Price = styled.p`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`

const Option = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 12px 16px;
  min-width: 108px;
  border: 1.5px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 6px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.surface : theme.colors.white};
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`

const OptionName = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const OptionPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 24px 0;
`

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Specs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
`

const SpecLine = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 36px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`

const BuyNow = styled.button`
  flex: 1;
  padding: 16px;
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: default;
  }
`

const AddToCart = styled.button`
  flex: 1;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 4px;
  background: none;
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    background: none;
    cursor: default;
  }
`

const WishBtn = styled.button<{ $on: boolean }>`
  flex: 0 0 auto;
  width: 54px;
  padding: 16px 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: none;
  font-size: 20px;
  line-height: 1;
  color: ${({ theme, $on }) => ($on ? theme.colors.brandRed : theme.colors.textSecondary)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.brandRed};
    color: ${({ theme }) => theme.colors.brandRed};
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`
