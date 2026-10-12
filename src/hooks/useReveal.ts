import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  readonly threshold?: number
  readonly rootMargin?: string
}

// Reveals an element when it scrolls into view (once). Returns a ref to attach
// and a `visible` flag to drive the entrance transition. Falls back to visible
// immediately when IntersectionObserver is unavailable or the viewer prefers
// reduced motion.
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: RevealOptions,
): { ref: React.RefObject<T | null>; visible: boolean } {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        }
      },
      {
        // Fire as soon as any part enters the viewport — reliable even for
        // sections taller than the screen (a high threshold can leave a tall
        // block waiting, so it reads as "missing" on a quick scroll).
        threshold: options?.threshold ?? 0,
        rootMargin: options?.rootMargin ?? '0px 0px -5% 0px',
      },
    )
    obs.observe(el)
    // Safety net: never let a section stay hidden. If the observer hasn't fired
    // shortly after mount (odd layouts, embedded/preview frames, fast scrolls),
    // reveal it anyway so content is always visible at rest.
    const fallback = window.setTimeout(() => setVisible(true), 700)
    return () => {
      obs.disconnect()
      window.clearTimeout(fallback)
    }
  }, [options?.threshold, options?.rootMargin])

  return { ref, visible }
}
