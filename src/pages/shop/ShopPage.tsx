import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useProductOverrides } from '@/state/products-context'
import { getProducts } from '@/data/products'
import { effectivePriceString, isPublished } from '@/lib/product-pricing'

export function ShopPage() {
  const { t, locale } = useLocale()
  const { addItem } = useCart()
  const { overrides } = useProductOverrides()
  const products = getProducts(locale).filter((p) => isPublished(p.slug, overrides))

  return (
    <>
      <Hero>
        <HeroInner>
          <Eyebrow>{t.shop.hero.eyebrow}</Eyebrow>
          <Title>{t.shop.hero.title}</Title>
          <Subhead>{t.shop.hero.subhead}</Subhead>
        </HeroInner>
      </Hero>

      <GridSection>
        <Grid>
          {products.map((product) => (
            <Card key={product.slug}>
              <CardLink to={`/shop/${product.slug}`}>
                <ImageCard>
                  {product.badge && <Badge>{product.badge}</Badge>}
                  <ProductImage src={product.catalogImage} alt={product.catalogName} />
                </ImageCard>
                <Name>{product.catalogName}</Name>
                <Price>{effectivePriceString(product.slug, locale, overrides)}</Price>
              </CardLink>
              <AddButton type="button" onClick={() => addItem(product.slug)}>
                {t.shop.addToCart}
              </AddButton>
            </Card>
          ))}
        </Grid>
      </GridSection>
    </>
  )
}

const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const HeroInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 56px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 40px;
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.ink};
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const GridSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 28px;
  max-width: 1180px;
  padding-top: 40px;
  padding-bottom: 96px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 64px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  padding: 4px 11px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.ink};
  /* Clamp long names to 2 lines with an ellipsis; reserve a fixed 2-line
     height so every card's name block matches and the buttons align. */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6em;
`

const Price = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const AddButton = styled.button`
  width: 100%;
  /* Pin to the bottom so buttons line up even if a card is taller. */
  margin-top: auto;
  padding: 14px;
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
