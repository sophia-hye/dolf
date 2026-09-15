import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'
import { useReveal } from '@/hooks/useReveal'
import breatheImg from '@/assets/products/breathe.png'
import trackerImg from '@/assets/products/tracker.png'
import calendarImg from '@/assets/products/calendar.png'

const IMAGES = [breatheImg, trackerImg, calendarImg]
// Card destinations. Unpublished products (tracker) point to the shop grid.
const LINKS = ['/shop/breathe', '/shop', '/shop/calendar']

interface CardItem {
  readonly name: string
  readonly description: string
}

function ProductCard({
  item,
  image,
  to,
  index,
  more,
}: {
  item: CardItem
  image: string
  to: string
  index: number
  more: string
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>()
  return (
    <Card ref={ref} to={to} $visible={visible} style={{ transitionDelay: `${index * 100}ms` }}>
      <ImageWrap>
        <ProductImage src={image} alt={item.name} />
        <Peek>
          {more}
          <span aria-hidden>→</span>
        </Peek>
      </ImageWrap>
      <CardTitle>{item.name}</CardTitle>
      <CardDesc>{item.description}</CardDesc>
    </Card>
  )
}

export function ProductsSection() {
  const { t, locale } = useLocale()
  const more = locale === 'ko' ? '자세히 보기' : locale === 'ja' ? '詳しく見る' : 'View details'

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{t.products.eyebrow}</Eyebrow>
          <SectionTitle>{t.products.title}</SectionTitle>
        </Head>

        <Grid>
          {t.products.items.map((item, i) => (
            <ProductCard
              key={item.name}
              item={item}
              image={IMAGES[i]}
              to={LINKS[i] ?? '/shop'}
              index={i}
              more={more}
            />
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`

const Inner = styled(Container)`
  padding-top: 96px;
  padding-bottom: 104px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  margin-bottom: 56px;

  ${({ theme }) => theme.media.mobile} {
    margin-bottom: 36px;
  }
`

const Grid = styled.div`
  display: flex;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`

const Card = styled(Link)<{ $visible: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: inherit;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(28px)')};
  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  margin-bottom: 20px;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  ${Card}:hover & {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(31, 31, 33, 0.12);
    border-color: ${({ theme }) => theme.colors.ink};
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    ${Card}:hover & {
      transform: none;
    }
  }
`

const Peek = styled.span`
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  letter-spacing: 0.4px;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    opacity: 1;
    transform: none;
  }
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 8px;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`
