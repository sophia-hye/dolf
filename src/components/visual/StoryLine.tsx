import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useTheme } from 'styled-components'

// Visualizes the DoLF story: a single line breaks, a point (dot) appears and
// reconnects it, then light spreads and the line is made whole — "끊어졌던 선을
// 다시 이어… 빛으로 드러나 완전한 형상이 되는 것." Loops gently, pauses offscreen,
// and shows a static healed line under prefers-reduced-motion.
export function StoryLine() {
  const ref = useRef<HTMLCanvasElement>(null)
  const theme = useTheme()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const inkRGB = '24,23,27'
    const red = theme.colors.brandRed
    let W = 0
    let H = 0
    let raf = 0
    let t0 = 0
    let running = false

    const ease = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t))

    const layout = () => {
      const r = canvas.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = (p: number) => {
      const cx = W / 2
      const y = H / 2
      const padL = W * 0.07
      const padR = W * 0.07
      const maxLen = cx - padL
      const gapHalf = Math.min(42, W * 0.05)

      // phase envelopes
      const breakE = ease((p - 0.12) / 0.18)
      const dotE = ease((p - 0.28) / 0.18)
      const healE = ease((p - 0.46) / 0.2)
      const lightE = p < 0.64 ? 0 : ease((p - 0.64) / 0.26)
      const fade = Math.min(ease(p / 0.05), ease((1 - p) / 0.06))

      let gap = 0
      if (p >= 0.12 && p < 0.46) gap = gapHalf * breakE
      else if (p >= 0.46) gap = gapHalf * (1 - healE)

      const leftEnd = cx - gap
      const rightStart = cx + gap
      const activeHalf = lightE * maxLen

      ctx.clearRect(0, 0, W, H)
      ctx.globalAlpha = fade
      ctx.lineCap = 'round'

      // faint base line (two segments around the gap)
      ctx.strokeStyle = `rgba(${inkRGB},0.22)`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(padL, y)
      ctx.lineTo(leftEnd, y)
      ctx.moveTo(rightStart, y)
      ctx.lineTo(W - padR, y)
      ctx.stroke()

      // light-activated solid portion spreading out from the centre
      if (activeHalf > 1) {
        const a = Math.max(padL, cx - activeHalf)
        const b = Math.min(W - padR, cx + activeHalf)
        ctx.strokeStyle = `rgba(${inkRGB},0.82)`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(a, y)
        ctx.lineTo(b, y)
        ctx.stroke()

        // travelling light at the wavefronts (while still spreading)
        if (lightE < 1) {
          for (const wx of [cx - activeHalf, cx + activeHalf]) {
            const g = ctx.createRadialGradient(wx, y, 0, wx, y, 16)
            g.addColorStop(0, `rgba(${inkRGB},0.5)`)
            g.addColorStop(1, `rgba(${inkRGB},0)`)
            ctx.fillStyle = g
            ctx.beginPath()
            ctx.arc(wx, y, 16, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // the point (dot) — Christ enters as one dot and reconnects the line
      if (dotE > 0) {
        const halo = ctx.createRadialGradient(cx, y, 0, cx, y, 18)
        halo.addColorStop(0, hexToRgba(red, 0.28 * dotE))
        halo.addColorStop(1, hexToRgba(red, 0))
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(cx, y, 18, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = hexToRgba(red, dotE)
        ctx.beginPath()
        ctx.arc(cx, y, 4.2, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    const frame = (ts: number) => {
      if (!t0) t0 = ts
      const p = (((ts - t0) % 7600) / 7600)
      render(p)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || reduce) return
      running = true
      t0 = 0
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    layout()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(layout) : null
    ro?.observe(canvas)

    if (reduce) {
      // static healed line + dot
      render(0.95)
    }

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                if (e.isIntersecting) start()
                else stop()
              }
            },
            { threshold: 0.2 },
          )
        : null
    if (io) io.observe(canvas)
    else start()

    return () => {
      stop()
      ro?.disconnect()
      io?.disconnect()
    }
  }, [theme.colors.brandRed])

  return <Canvas ref={ref} aria-hidden />
}

function hexToRgba(hex: string, a: number): string {
  const h = hex.replace('#', '')
  const n = parseInt(
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h,
    16,
  )
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `rgba(${r},${g},${b},${a})`
}

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: clamp(110px, 16vw, 170px);
`
