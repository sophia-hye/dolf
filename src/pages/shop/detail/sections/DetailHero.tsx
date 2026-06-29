import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import type { ShopProduct } from '@/data/shop-types'

export function DetailHero({ product }: { product: ShopProduct }) {
  const { t } = useLocale()
  const { addItem } = useCart()
  const { hero } = product

  const add = () =>
    addItem({
      slug: product.slug,
      name: hero.title,
      price: hero.price,
      image: product.catalogImage,
    })

  return (
    <Section>
      <Inner>
        <ImageCard>
          <ProductImage src={hero.gallery[0]} alt={hero.title} />
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
            <BuyNow type="button" onClick={add}>
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
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    height: 420px;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
