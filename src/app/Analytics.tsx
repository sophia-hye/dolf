import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageView } from '@/lib/analytics'
import { initGtm } from '@/lib/gtm'

// Initializes GA4 + GTM once and reports a page_view on every route change.
export function Analytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    initAnalytics()
    initGtm()
  }, [])

  useEffect(() => {
    trackPageView(pathname + search)
  }, [pathname, search])

  return null
}
