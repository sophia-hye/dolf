import { useEffect, useRef, type ReactNode } from 'react'
import styled from 'styled-components'

// Covers the hero headline block with soft black 감온(thermochromic) ink bars
// that clear where the pointer moves and slowly re-ink while idle. Runs a single
// auto-reveal sweep on load. The real text stays in the DOM (accessible); the
// canvas is a pointer-events:none overlay. Respects prefers-reduced-motion by
// never painting the cover.
//
// Children should be the headline lines, each tagged with `data-heat` so their
// line boxes can be measured and masked.
export function HeroWordReveal({ children }: { children: ReactNode }) {
  const heatRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const heat = heatRef.current
    const canvas = canvasRef.current
    if (!heat || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const OFF = 7
    let width = 0
    let height = 0
    let bars: { x: number; y: number; w: number; h: number }[] = []
    let revealed = false
    let cancelled = false

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      ctx.closePath()
    }

    const paint = (a: number) => {
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = `rgba(20,19,23,${a})`
      for (const b of bars) {
        roundRect(b.x, b.y, b.w, b.h, 4)
        ctx.fill()
      }
    }

    const measure = () => {
      const hr = heat.getBoundingClientRect()
      width = hr.width + OFF * 2
      height = hr.height + OFF * 2
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bars = []
      heat.querySelectorAll('[data-heat]').forEach((el) => {
        const rects = el.getClientRects()
        for (let i = 0; i < rects.length; i++) {
          const r = rects[i]
          bars.push({
            x: r.left - hr.left + OFF - 6,
            y: r.top - hr.top + OFF - 1,
            w: r.width + 12,
            h: r.height + 2,
          })
        }
      })
      ctx.clearRect(0, 0, width, height)
      if (!reduce && !revealed) paint(1)
    }

    const warm = (x: number, y: number, r: number) => {
      ctx.globalCompositeOperation = 'destination-out'
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, 'rgba(0,0,0,.2)')
      g.addColorStop(0.5, 'rgba(0,0,0,.09)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 7)
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'
    }

    const at = (clientX: number, clientY: number) => {
      const hr = heat.getBoundingClientRect()
      const x = clientX - hr.left + OFF
      const y = clientY - hr.top + OFF
      if (x < -60 || y < -60 || x > width + 60 || y > height + 60) return
      const R = Math.max(56, width * 0.095)
      warm(x, y, R)
      warm(x, y, R * 0.6)
    }
    const onPointer = (e: PointerEvent) => at(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const p = e.touches[0]
      if (p) at(p.clientX, p.clientY)
    }

    const host: HTMLElement =
      (heat.closest('[data-hero-host]') as HTMLElement | null) ?? heat

    const onResize = () => measure()
    let resizeTimer: number | undefined
    const debouncedResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(onResize, 180)
    }

    if (document.fonts?.ready) document.fonts.ready.then(measure)
    const measureTimer = window.setTimeout(measure, 350)
    window.addEventListener('resize', debouncedResize)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    ro?.observe(heat)

    if (!reduce) {
      host.addEventListener('pointermove', onPointer, { passive: true })
      host.addEventListener('touchmove', onTouch, { passive: true })
      // Intro once: cover the headline, sweep it clear, then leave it revealed —
      // a hero headline must stay readable, so we don't re-ink it afterwards.
      window.setTimeout(() => {
        let i = 0
        const N = 30
        const sweep = () => {
          if (cancelled) return
          if (i > N) {
            revealed = true
            ctx.clearRect(0, 0, width, height)
            return
          }
          const px = width * (0.08 + 0.84 * (i / N))
          const py = height * (0.18 + 0.6 * ((i % 3) / 2))
          warm(px, py, Math.max(70, width * 0.1))
          i++
          window.setTimeout(sweep, 42)
        }
        sweep()
      }, 650)
    }

    return () => {
      cancelled = true
      window.clearTimeout(measureTimer)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', debouncedResize)
      ro?.disconnect()
      host.removeEventListener('pointermove', onPointer)
      host.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <Heat ref={heatRef}>
      {children}
      <Canvas ref={canvasRef} aria-hidden />
    </Heat>
  )
}

const Heat = styled.div`
  position: relative;
  display: block;
`

const Canvas = styled.canvas`
  position: absolute;
  inset: -7px;
  width: calc(100% + 14px);
  height: calc(100% + 14px);
  z-index: 2;
  pointer-events: none;
`
