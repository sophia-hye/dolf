import { useParams, Navigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'
import { useLocale } from '@/i18n/context'
import { useProductOverrides } from '@/state/products-context'
import {
  effectivePriceString,
  effectiveName,
  effectiveDescription,
  isPublished,
} from '@/lib/product-pricing'
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
  const { overrides, loading } = useProductOverrides()
  const product = slug ? getProductBySlug(slug, locale) : undefined

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  // Hide unpublished products from the storefront (wait for overrides to load).
  if (!loading && slug && !isPublished(slug, overrides)) {
    return <Navigate to="/shop" replace />
  }

  // Reflect the admin-set name/description/price for the current currency.
  const heroProduct = {
    ...product,
    hero: {
      ...product.hero,
      title: effectiveName(product.slug, locale, overrides),
      description: effectiveDescription(product.slug, locale, overrides),
      price: effectivePriceString(product.slug, locale, overrides),
    },
  }

  return (
    <>
      <DetailHero product={heroProduct} />
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
