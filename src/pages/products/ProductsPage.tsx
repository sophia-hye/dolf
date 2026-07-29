import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductsHero } from '@/pages/products/sections/ProductsHero'
import { ProductFeatureRow } from '@/pages/products/sections/ProductFeatureRow'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import coverBreathe from '@/assets/products/cover-breathe.png'
import coverBreatheV1 from '@/assets/products/cover-breathe-v1.png'
import coverTracker from '@/assets/products/cover-tracker.png'
import coverCalendar from '@/assets/products/cover-calendar.png'
import coverTopical from '@/assets/products/cover-topical.png'

// breathe-en / breathe-jp share the Breathe cover art (different edition);
// breathe-v1 is the new B6 edition with its own cover.
const IMAGES = [
  coverBreathe,
  coverBreathe,
  coverBreathe,
  coverBreatheV1,
  coverTracker,
  coverCalendar,
  coverTopical,
]
const BACKGROUNDS = [
  'cream',
  'surface',
  'cream',
  'surface',
  'cream',
  'surface',
  'cream',
] as const
const SLUGS = [
  'breathe',
  'breathe-en',
  'breathe-jp',
  'breathe-v1',
  'tracker',
  'calendar',
  'topical',
]
const BADGES: (string | undefined)[] = [
  'Faith',
  'EN',
  'JP',
  'Faith',
  'Faith',
  undefined,
  'Faith',
]

export function ProductsPage() {
  const { t } = useLocale()

  return (
    <>
      <ProductsHero />
      {t.productsPage.features.map((feature, i) => (
        <ProductFeatureRow
          key={feature.name}
          imageSide={i % 2 === 0 ? 'left' : 'right'}
          background={BACKGROUNDS[i]}
          name={feature.name}
          description={feature.description}
          spec={feature.spec}
          image={IMAGES[i]}
          badge={BADGES[i]}
          detailHref={`/products/${SLUGS[i]}`}
          detailLabel={t.productsPage.detailCta}
        />
      ))}

      <B2BSection>
        <B2BInner>
          <Eyebrow>{t.productsPage.b2b.eyebrow}</Eyebrow>
          <B2BTitle>{t.productsPage.b2b.title}</B2BTitle>
          <B2BBody>{t.productsPage.b2b.body}</B2BBody>
          <B2BCta to="/contact">{t.productsPage.b2b.cta}</B2BCta>
        </B2BInner>
      </B2BSection>
    </>
  )
}

const B2BSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const B2BInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding-top: 72px;
  padding-bottom: 88px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 64px;
  }
`

const B2BTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const B2BBody = styled.p`
  max-width: 560px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: pre-line;
`

const B2BCta = styled(Link)`
  margin-top: 8px;
  padding: 15px 34px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`
