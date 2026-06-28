import { useParams, Navigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'
import { useLocale } from '@/i18n/context'
import { DetailHero } from '@/pages/shop/detail/sections/DetailHero'
import { FeaturesSection } from '@/pages/shop/detail/sections/FeaturesSection'
import { RelatedSection } from '@/pages/shop/detail/sections/RelatedSection'

// Concise marketing detail (Product Detail): purchase hero + features + related.
// Full purchase page lives at /shop/:slug (Shop Detail).
export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const product = slug ? getProductBySlug(slug, locale) : undefined

  if (!product) {
    return <Navigate to="/products" replace />
  }

  return (
    <>
      <DetailHero product={product} />
      {product.features && <FeaturesSection data={product.features} />}
      {product.related && <RelatedSection data={product.related} />}
    </>
  )
}
