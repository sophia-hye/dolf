// Meta (Facebook/Instagram) Pixel loader + event forwarder. Mirrors
// analytics.ts / gtm.ts: loads once on the client, skips local dev, and only
// runs when a pixel id is set via VITE_META_PIXEL_ID. Ecommerce events pushed
// through pushEvent() are forwarded to the matching Meta standard events (see
// pixelForward), so call sites don't need Meta-specific code.

// Pixel id is a public value (visible in the client), so we keep a code default
// like GA/GTM; override via VITE_META_PIXEL_ID if needed.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1090823467075880'

let initialized = false

export function initMetaPixel(): void {
  if (initialized) return
  if (typeof window === 'undefined') return
  if (import.meta.env.DEV) return // no tracking in local dev
  if (!PIXEL_ID) return

  initialized = true

  // Standard Meta Pixel bootstrap: queue calls until fbevents.js loads.
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = fbq as any
      if (f.callMethod) f.callMethod(...args)
      else f.queue.push(args)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const f = fbq as any
    f.queue = []
    f.loaded = true
    f.version = '2.0'
    f.push = fbq
    window.fbq = fbq
    window._fbq = window._fbq || fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }

  window.fbq?.('init', PIXEL_ID)
  window.fbq?.('track', 'PageView')
}

export function pixelPageView(): void {
  if (!initialized || typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', 'PageView')
}

// Drop undefined/null so the pixel payload stays clean.
function clean(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const k in obj) {
    if (obj[k] !== undefined && obj[k] !== null) out[k] = obj[k]
  }
  return out
}

// Map the GA4-style events pushed via pushEvent() to Meta standard events.
export function pixelForward(
  event: string,
  params: Record<string, unknown>,
): void {
  if (!initialized || typeof window === 'undefined' || !window.fbq) return
  const ids = params.item_id ? [params.item_id] : undefined

  switch (event) {
    case 'view_item':
      window.fbq(
        'track',
        'ViewContent',
        clean({
          content_type: 'product',
          content_name: params.item_name,
          content_ids: ids,
          value: params.value,
          currency: params.currency,
        }),
      )
      break
    case 'add_to_cart':
      window.fbq(
        'track',
        'AddToCart',
        clean({
          content_type: 'product',
          content_name: params.item_name,
          content_ids: ids,
        }),
      )
      break
    case 'begin_checkout':
      window.fbq(
        'track',
        'InitiateCheckout',
        clean({
          value: params.value,
          currency: params.currency,
          num_items: params.item_count,
        }),
      )
      break
    case 'purchase':
      window.fbq(
        'track',
        'Purchase',
        clean({
          content_type: 'product',
          value: params.value,
          currency: params.currency,
          num_items: params.item_count,
        }),
      )
      break
    case 'sign_up':
      window.fbq('track', 'CompleteRegistration')
      break
  }
}
