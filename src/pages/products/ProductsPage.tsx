import { ProductsHero } from '@/pages/products/sections/ProductsHero'
import { ProductFeatureRow } from '@/pages/products/sections/ProductFeatureRow'
import { useLocale } from '@/i18n/context'
import coverBreathe from '@/assets/products/cover-breathe.png'
import coverTracker from '@/assets/products/cover-tracker.png'
import coverCalendar from '@/assets/products/cover-calendar.png'
import coverTopical from '@/assets/products/cover-topical.png'

const IMAGES = [coverBreathe, coverTracker, coverCalendar, coverTopical]
const BACKGROUNDS = ['cream', 'surface', 'cream', 'cream'] as const
const SLUGS = ['breathe', 'tracker', 'calendar', 'topical']

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
          detailHref={`/products/${SLUGS[i]}`}
          detailLabel={t.productsPage.detailCta}
        />
      ))}
    </>
  )
}
