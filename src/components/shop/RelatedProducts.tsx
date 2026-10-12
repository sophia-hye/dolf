import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocale } from '@/i18n/context'
import { useProductOverrides } from '@/state/products-context'
import { getProducts } from '@/data/products'
import { editionsFor } from '@/lib/product-editions'
import {
  effectiveName,
  effectivePriceString,
  effectiveBadge,
  isPublished,
  isSoldOut,
} from '@/lib/product-pricing'

// "Other products" strip for a product detail page — image + link cards so a
// shopper can jump straight to another item without going back to the list.

const TITLE: Record<string, string> = {
  ko: '다른 제품도 둘러보기',
  en: 'Browse other products',
  ja: '他の商品も見る',
}

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const { t, locale } = useLocale()
  const { overrides } = useProductOverrides()

  const products = getProducts(locale).filter(
    (p) =>
      p.slug !== currentSlug &&
      isPublished(p.slug, overrides) &&
      !p.hideFromGrid,
  )
  if (products.length === 0) return null

  return (
    <Section aria-label={TITLE[locale] ?? TITLE.en}>
      <Head>{TITLE[locale] ?? TITLE.en}</Head>
      <Grid>
        {products.map((p) => {
          const sold = isSoldOut(p.slug, overrides)
          const name = effectiveName(p.slug, locale, overrides)
          const editions = editionsFor(p.slug, locale)
          const badges = (editions ? editions.map((e) => e.slug) : [p.slug])
            .map((s) => effectiveBadge(s, locale, overrides))
            .filter((b): b is string => !!b)
          return (
            <CardLink key={p.slug} to={`/shop/${p.slug}`}>
              <ImageCard>
                {badges.length > 0 && (
                  <Badges>
                    {badges.map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                  </Badges>
                )}
                <Img src={p.catalogImage} alt={name} loading="lazy" $dim={sold} />
                {sold && <SoldOut>{t.shop.soldOut}</SoldOut>}
              </ImageCard>
              <Name>{name}</Name>
              <Price>{effectivePriceString(p.slug, locale, overrides)}</Price>
            </CardLink>
          )
        })}
      </Grid>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding: clamp(40px, 6vw, 72px) clamp(12px, 3vw, 40px)
    clamp(72px, 9vw, 110px);
`
const Head = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(22px, 3.4vw, 32px);
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 clamp(24px, 3.5vw, 40px);
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(16px, 2.2vw, 28px);

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`
const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  transition: border-color 0.2s ease;

  ${CardLink}:hover & {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`
const Badges = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
`
const Img = styled.img<{ $dim?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${({ $dim }) => ($dim ? 0.45 : 1)};
  filter: ${({ $dim }) => ($dim ? 'grayscale(0.4)' : 'none')};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${CardLink}:hover & {
    transform: scale(1.03);
  }
`
const SoldOut = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 6px 15px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  font-weight: 600;
`
const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(14px, 1.8vw, 17px);
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.ink};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const Price = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(14px, 1.8vw, 17px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`
