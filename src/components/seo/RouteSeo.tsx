import { useLocation } from 'react-router-dom'
import { useLocale } from '@/i18n/context'
import { Seo } from '@/components/seo/Seo'
import { getProductBySlug } from '@/data/products'
import { CURRENCY_BY_LOCALE, parseAmount } from '@/lib/orders'

const SITE_URL = 'https://dolfstory.com'

type SeoKey = 'home' | 'about' | 'products' | 'community' | 'contact' | 'shop'

const ROUTE_MAP: Record<string, SeoKey> = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/community': 'community',
  '/contact': 'contact',
  '/shop': 'shop',
}

const NOINDEX_PREFIXES = ['/signin', '/signup', '/mypage', '/admin', '/cart', '/checkout']

/**
 * Renders per-route SEO/OG tags based on the current path and locale.
 * Mounted once inside Layout so every public route gets correct meta.
 * Product detail pages (/shop/:slug, /products/:slug) get per-product meta
 * (title, description, image) and Product JSON-LD.
 */
export function RouteSeo() {
  const { t, locale } = useLocale()
  const { pathname } = useLocation()
  const path = pathname.replace(/\/+$/, '') || '/'

  const noindex = NOINDEX_PREFIXES.some(
    (p) => path === p || path.startsWith(`${p}/`),
  )

  // Product detail pages → per-product meta + Product structured data.
  const productMatch = path.match(/^\/(?:shop|products)\/(.+)$/)
  if (productMatch) {
    const product = getProductBySlug(productMatch[1], locale)
    if (product) {
      const image = product.catalogImage.startsWith('http')
        ? product.catalogImage
        : SITE_URL + product.catalogImage
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.catalogName,
        description: product.hero.description,
        image,
        brand: { '@type': 'Brand', name: 'DoLF' },
        offers: {
          '@type': 'Offer',
          price: parseAmount(product.catalogPrice),
          priceCurrency: CURRENCY_BY_LOCALE[locale],
          availability: 'https://schema.org/InStock',
          url: SITE_URL + path,
        },
      }
      return (
        <Seo
          title={product.catalogName}
          description={product.hero.description}
          path={path}
          image={product.catalogImage}
          type="product"
          jsonLd={jsonLd}
        />
      )
    }
  }

  const key: SeoKey =
    ROUTE_MAP[path] ??
    (path.startsWith('/products/')
      ? 'products'
      : path.startsWith('/shop/')
        ? 'shop'
        : 'home')

  const meta = t.seo[key]

  return (
    <Seo
      title={meta.title}
      description={meta.description}
      path={path}
      noindex={noindex}
    />
  )
}
