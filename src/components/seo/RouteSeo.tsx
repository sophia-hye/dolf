import { useLocation } from 'react-router-dom'
import { useLocale } from '@/i18n/context'
import { Seo } from '@/components/seo/Seo'

type SeoKey = 'home' | 'about' | 'products' | 'community' | 'contact' | 'shop'

const ROUTE_MAP: Record<string, SeoKey> = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/community': 'community',
  '/contact': 'contact',
  '/shop': 'shop',
}

const NOINDEX_PREFIXES = ['/signin', '/signup', '/mypage', '/admin']

/**
 * Renders per-route SEO/OG tags based on the current path and locale.
 * Mounted once inside Layout so every public route gets correct meta.
 */
export function RouteSeo() {
  const { t } = useLocale()
  const { pathname } = useLocation()
  const path = pathname.replace(/\/+$/, '') || '/'

  const noindex = NOINDEX_PREFIXES.some(
    (p) => path === p || path.startsWith(`${p}/`),
  )

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
