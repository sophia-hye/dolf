import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageView } from '@/lib/analytics'

// Initializes GA4 once and reports a page_view on every route change.
export function Analytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(pathname + search)
  }, [pathname, search])

  return null
}
