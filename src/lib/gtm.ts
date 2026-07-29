// Google Tag Manager loader + dataLayer event helper. GA4 pageviews stay on the
// direct gtag setup (see analytics.ts); GTM is used for event tracking only.
// Loads once on the client and skips local dev to keep analytics clean.

const GTM_ID = import.meta.env.VITE_GTM_ID || 'GTM-T8HJWDSD'

let initialized = false

export function initGtm(): void {
  if (initialized) return
  if (typeof window === 'undefined') return
  if (import.meta.env.DEV) return // no tracking in local dev
  if (!GTM_ID) return

  initialized = true

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

// Push a named event (plus optional params) onto the dataLayer for GTM triggers.
export function pushEvent(
  event: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}
