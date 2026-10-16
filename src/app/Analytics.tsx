import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageView } from '@/lib/analytics'
import { initGtm } from '@/lib/gtm'
import { initMetaPixel, pixelPageView } from '@/lib/metaPixel'

// Initializes GA4 + GTM + Meta Pixel once and reports a page_view on every
// route change (to GA4 and the Meta Pixel).
export function Analytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    initAnalytics()
    initGtm()
    initMetaPixel()
  }, [])

  useEffect(() => {
    trackPageView(pathname + search)
    pixelPageView()
  }, [pathname, search])

  return null
}
