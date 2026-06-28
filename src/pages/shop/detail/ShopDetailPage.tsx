import { useParams, Navigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'
import { useLocale } from '@/i18n/context'
import { DetailHero } from '@/pages/shop/detail/sections/DetailHero'
import { StorySection } from '@/pages/shop/detail/sections/StorySection'
import { InsidePagesSection } from '@/pages/shop/detail/sections/InsidePagesSection'
import { FeaturesSection } from '@/pages/shop/detail/sections/FeaturesSection'
import { PagesExplainedSection } from '@/pages/shop/detail/sections/PagesExplainedSection'
import { HowToUseSection } from '@/pages/shop/detail/sections/HowToUseSection'
import { SpecsSection } from '@/pages/shop/detail/sections/SpecsSection'
import { ShippingFaqSection } from '@/pages/shop/detail/sections/ShippingFaqSection'
import { RelatedSection } from '@/pages/shop/detail/sections/RelatedSection'

export function ShopDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const product = slug ? getProductBySlug(slug, locale) : undefined

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <>
      <DetailHero product={product} />
      {product.story && <StorySection data={product.story} />}
      {product.insidePages && <InsidePagesSection data={product.insidePages} />}
      {product.features && <FeaturesSection data={product.features} />}
      {product.pagesExplained && <PagesExplainedSection data={product.pagesExplained} />}
      {product.howToUse && <HowToUseSection data={product.howToUse} />}
      {product.specs && <SpecsSection data={product.specs} />}
      {product.shippingFaq && <ShippingFaqSection data={product.shippingFaq} />}
      {product.related && <RelatedSection data={product.related} />}
    </>
  )
}
