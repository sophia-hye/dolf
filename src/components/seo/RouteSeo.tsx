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

  // Dedicated group/bulk-order landing (not in the i18n seo dictionary).
  if (path === '/group-order') {
    const title =
      locale === 'ja' ? '教会・団体発注' : locale === 'en' ? 'Bulk orders' : '교회·단체 발주'
    const description =
      locale === 'ja'
        ? '教会・小グループのためのBreathe団体発注 — 信仰・英語・日本語エディションの組み合わせ、数量別のお見積り。'
        : locale === 'en'
          ? 'Bulk orders of Breathe for churches and small groups — mix Faith / English / Japanese editions with a custom quote.'
          : '교회·소그룹을 위한 Breathe 단체 발주 — 신앙·영문·일문 에디션 혼합, 수량별 맞춤 견적.'
    return <Seo title={title} description={description} path={path} />
  }

  // Editions of Breathe are options on the one Breathe page → canonical there.
  const EDITION_CANONICAL: Record<string, string> = {
    'breathe-en': 'breathe',
    'breathe-jp': 'breathe',
  }

  // Product detail pages → per-product meta + Product structured data.
  const productMatch = path.match(/^\/(?:shop|products)\/(.+)$/)
  if (productMatch) {
    const product = getProductBySlug(productMatch[1], locale)
    if (product) {
      // /shop is the canonical section; editions fold to the primary slug.
      const primarySlug = EDITION_CANONICAL[productMatch[1]] ?? productMatch[1]
      const canonical = `/shop/${primarySlug}`
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
          canonical={canonical}
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
