import { Helmet } from 'react-helmet-async'
import { useLocale } from '@/i18n/context'

const SITE_URL = 'https://dolfstory.com'

const OG_LOCALE: Record<string, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  ja: 'ja_JP',
}

interface SeoProps {
  readonly title: string
  readonly description: string
  readonly path?: string
  readonly image?: string
  readonly type?: 'website' | 'article' | 'product'
  readonly noindex?: boolean
  // Optional JSON-LD structured data (e.g. a Product schema).
  readonly jsonLd?: object
}

export function Seo({
  title,
  description,
  path = '/',
  image = '/og-image.png',
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoProps) {
  const { locale } = useLocale()
  const url = SITE_URL + path
  const img = image.startsWith('http') ? image : SITE_URL + image
  const fullTitle = title.includes('DoLF') ? title : `${title} — DoLF`

  return (
    <Helmet>
      <html lang={locale} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
      )}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="DoLF" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={OG_LOCALE[locale] ?? 'ko_KR'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
