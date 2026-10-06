import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'
import type { ProductItem } from '@/i18n/types'
import breatheImg from '@/assets/products/breathe.png'
import trackerImg from '@/assets/products/tracker.png'
import calendarImg from '@/assets/products/calendar.png'

const IMAGES = [breatheImg, trackerImg, calendarImg]
// Card destinations. Unpublished products (tracker) point to the shop grid.
const LINKS = ['/shop/breathe', '/shop', '/shop/calendar']
const MARKS = ['Breathe', 'Tracker', '2027']

function ProductCard({
  item,
  image,
  mark,
  to,
}: {
  item: ProductItem
  image?: string
  mark: string
  to: string
}) {
  return (
    <Card to={to}>
      <Thumb>
        {image ? <ProductImage src={image} alt={item.name} /> : <Mark>{mark}</Mark>}
      </Thumb>
      <Meta>
        <CardTitle>{item.name}</CardTitle>
        <Go>View →</Go>
      </Meta>
      <CardDesc>{item.description}</CardDesc>
    </Card>
  )
}

export function ProductsSection() {
  const { t } = useLocale()

  return (
    <Section id="products">
      <Rule />
      <Inner>
        <Reveal>
          <Head>
            <Title>{t.products.title}</Title>
            <Lab>
              {t.products.eyebrow} / <span>제품</span>
            </Lab>
          </Head>
        </Reveal>

        <Grid>
          {t.products.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <ProductCard
                item={item}
                image={IMAGES[i]}
                mark={MARKS[i] ?? item.name}
                to={LINKS[i] ?? '/shop'}
              />
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Rule = styled.hr`
  height: 1px;
  background: ${({ theme }) => theme.colors.line};
  border: 0;
  margin: 0;
`

const Inner = styled(Container)`
  padding-top: clamp(72px, 11vw, 150px);
  padding-bottom: clamp(72px, 11vw, 150px);
`

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: clamp(36px, 5vw, 64px);
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 5vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.ink};
`

const Lab = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.2vw, 30px);

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`

const Card = styled(Link)`
  display: block;
  color: inherit;
`

const Thumb = styled.div`
  aspect-ratio: 4 / 5;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(160deg, #edeae3, #e2dfd7);
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    ${Card}:hover & {
      transform: none;
    }
  }
`

const Mark = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(28px, 4vw, 44px);
  color: #c9c5bc;
  letter-spacing: -0.01em;
  transition: transform 0.5s;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`

const Meta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  margin-top: 16px;
  padding-bottom: 4px;
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: 21px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
`

const Go = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 4px 0 0;
`
