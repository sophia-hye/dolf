// Google Analytics 4 (gtag.js) loader for the SPA. Loads once on the client,
// skips local dev, and sends a page_view per route change (auto page_view is
// disabled so client-side navigations aren't missed or double-counted).

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-PZ28S5JRM4'

let initialized = false

export function initAnalytics(): void {
  if (initialized) return
  if (typeof window === 'undefined') return
  if (import.meta.env.DEV) return // no tracking in local dev
  if (!GA_ID) return

  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
}

export function trackPageView(path: string): void {
  if (!initialized || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}
