import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import type { ShopProduct } from '@/data/shop-types'

// How long each cover stays fully visible before cross-fading to the next.
const SLIDE_MS = 3200

export function DetailHero({ product }: { product: ShopProduct }) {
  const { t } = useLocale()
  const { addItem } = useCart()
  const navigate = useNavigate()
  const { hero } = product
  const gallery = hero.gallery

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

  const add = () => addItem(product.slug)
  const buyNow = () => {
    addItem(product.slug)
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
          <Price>{hero.price}</Price>
          <Divider />
          <Description>{hero.description}</Description>
          <Specs>
            {hero.specLines.map((line) => (
              <SpecLine key={line}>{line}</SpecLine>
            ))}
          </Specs>
          <Buttons>
            <BuyNow type="button" onClick={buyNow}>
              {t.shop.buyNow}
            </BuyNow>
            <AddToCart type="button" onClick={add}>
              {t.shop.addToCart}
            </AddToCart>
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
`
