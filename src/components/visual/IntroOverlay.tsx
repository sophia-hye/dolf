import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'

// Fullscreen entrance intro. Shows the hero slogan hidden under soft black
// 감온(thermochromic) ink bars, then auto-sweeps them clear — the same reveal
// motif used on the Home hero, played once as a splash — and fades out to the
// page underneath. Plays once per browser session (sessionStorage). Respects
// prefers-reduced-motion by never rendering. The real text stays in the DOM so
// the overlay never traps a reader with a blank screen.

const SESSION_KEY = 'dolf-intro-shown'

function introAlreadyShown(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

function markIntroShown() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    /* sessionStorage unavailable (private mode) — intro simply replays */
  }
}

export function IntroOverlay() {
  const { t } = useLocale()

  const reduce =
    typeof window !== 'undefined' &&
    (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)

  // Decide synchronously, before first paint, whether the intro runs at all —
  // avoids a flash of the overlay on repeat views or reduced-motion.
  const [active, setActive] = useState(
    () => !reduce && typeof window !== 'undefined' && !introAlreadyShown(),
  )
  const [leaving, setLeaving] = useState(false)

  const heatRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Lock scroll while the overlay owns the screen.
  useEffect(() => {
    if (!active) return
    markIntroShown()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [active])

  useEffect(() => {
    if (!active) return
    const heat = heatRef.current
    const canvas = canvasRef.current
    if (!heat || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const OFF = 10
    let width = 0
    let height = 0
    let bars: { x: number; y: number; w: number; h: number }[] = []
    let cancelled = false
    const timers: number[] = []

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
        roundRect(b.x, b.y, b.w, b.h, 6)
        ctx.fill()
      }
    }

    const warm = (x: number, y: number, r: number) => {
      ctx.globalCompositeOperation = 'destination-out'
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, 'rgba(0,0,0,.35)')
      g.addColorStop(0.5, 'rgba(0,0,0,.14)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 7)
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'
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
            x: r.left - hr.left + OFF - 8,
            y: r.top - hr.top + OFF - 2,
            w: r.width + 16,
            h: r.height + 4,
          })
        }
      })
      ctx.clearRect(0, 0, width, height)
      paint(1)
    }

    const finish = () => {
      if (cancelled) return
      setLeaving(true)
      timers.push(window.setTimeout(() => !cancelled && setActive(false), 760))
    }

    const runSweep = () => {
      if (cancelled) return
      let i = 0
      const N = 34
      const step = () => {
        if (cancelled) return
        if (i > N) {
          ctx.clearRect(0, 0, width, height)
          timers.push(window.setTimeout(finish, 620)) // hold on the clear slogan
          return
        }
        // Diagonal sweep across the slogan, clearing the ink bars.
        const px = width * (0.06 + 0.9 * (i / N))
        const py = height * (0.12 + 0.72 * ((i % 4) / 3))
        const R = Math.max(90, width * 0.11)
        warm(px, py, R)
        warm(px, py, R * 0.62)
        i++
        timers.push(window.setTimeout(step, 36))
      }
      step()
    }

    const start = () => {
      if (cancelled) return
      measure()
      timers.push(window.setTimeout(runSweep, 560))
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => !cancelled && start())
    } else {
      timers.push(window.setTimeout(start, 300))
    }
    // Fallback in case fonts.ready never settles.
    timers.push(window.setTimeout(() => bars.length === 0 && start(), 700))

    return () => {
      cancelled = true
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [active])

  if (!active) return null

  return (
    <Overlay $leaving={leaving} aria-hidden>
      <Center>
        <Heat ref={heatRef}>
          <Label>
            <Dot />
            {t.hero.tagline}
          </Label>
          <Title data-heat>{t.hero.title}</Title>
          <Kr data-heat>{t.hero.subhead}</Kr>
          <Canvas ref={canvasRef} />
        </Heat>
      </Center>
    </Overlay>
  )
}

const Overlay = styled.div<{ $leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cream};
  opacity: ${({ $leaving }) => ($leaving ? 0 : 1)};
  transition: opacity 0.72s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity;
`

const Center = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-inline: clamp(24px, 6vw, 72px);
`

const Heat = styled.div`
  position: relative;
  display: inline-block;
`

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandRed};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(40px, 8.4vw, 128px);
  line-height: 0.94;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.ink};
  white-space: pre-line;
  overflow-wrap: break-word;
  font-optical-sizing: auto;
  margin: 0;
`

const Kr = styled.p`
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: clamp(22px, 3.4vw, 32px);
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.soft};
  margin-top: clamp(18px, 3vw, 28px);
`

const Canvas = styled.canvas`
  position: absolute;
  inset: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  z-index: 2;
  pointer-events: none;
`
