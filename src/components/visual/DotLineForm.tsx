import { useEffect, useRef } from 'react'
import styled from 'styled-components'

// The brand idea, animated: ~20 scattered points gather into a horizontal line,
// then close into a circle, looping. Reports the active phase (0=dot, 1=line,
// 2=form) via `onPhase` so the caller can highlight the matching column. Pauses
// the rAF when offscreen. Reduced motion → draws the static circle and reports
// phase -1 (meaning "all active").
export function DotLineForm({ onPhase }: { onPhase?: (phase: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phaseRef = useRef<((phase: number) => void) | undefined>(onPhase)
  phaseRef.current = onPhase

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const N = 20
    let W = 0
    let H = 0
    let cx = 0
    let cy = 0
    type Pt = { dx: number; dy: number; lx: number; ly: number; fx: number; fy: number }
    let P: Pt[] = []
    let raf: number | null = null
    let run = false
    let t0 = 0
    let lastPhase = -2

    const rnd = (n: number) => {
      const x = Math.sin(n * 127.1) * 43758.5453
      return x - Math.floor(x)
    }
    const ease = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t))

    const layout = () => {
      const r = canvas.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = W / 2
      cy = H / 2
      const R = Math.min(W * 0.33, H * 0.4)
      P = []
      for (let i = 0; i < N; i++) {
        const a = (i / N) * 6.2832 - 1.5708
        P.push({
          dx: W * (0.07 + 0.86 * rnd(i * 3.3 + 1)),
          dy: H * (0.12 + 0.76 * rnd(i * 5.7 + 2)),
          lx: W * (0.08 + 0.84 * (i / (N - 1))),
          ly: H * 0.5,
          fx: cx + R * Math.cos(a),
          fy: cy + R * Math.sin(a),
        })
      }
    }

    const draw = (pos: number[][], lineA: number, closed: number, phase: number) => {
      ctx.clearRect(0, 0, W, H)
      if (lineA > 0.01) {
        ctx.strokeStyle = `rgba(24,23,27,${0.5 * lineA})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(pos[0][0], pos[0][1])
        for (let i = 1; i < N; i++) ctx.lineTo(pos[i][0], pos[i][1])
        ctx.stroke()
        if (closed > 0.01) {
          ctx.strokeStyle = `rgba(24,23,27,${0.5 * lineA * closed})`
          ctx.beginPath()
          ctx.moveTo(pos[N - 1][0], pos[N - 1][1])
          ctx.lineTo(pos[0][0], pos[0][1])
          ctx.stroke()
        }
      }
      for (let i = 0; i < N; i++) {
        const red = i === 0
        ctx.fillStyle = red ? 'rgba(187,14,14,.95)' : 'rgba(24,23,27,.5)'
        ctx.beginPath()
        ctx.arc(pos[i][0], pos[i][1], red ? 3.4 : 2.2, 0, 7)
        ctx.fill()
      }
      if (phase !== lastPhase) {
        lastPhase = phase
        phaseRef.current?.(phase)
      }
    }

    const frame = (ts: number) => {
      if (!t0) t0 = ts
      const p = ((ts - t0) % 11000) / 11000
      let from: string
      let to: string
      let mix: number
      let lineA: number
      let closed: number
      let phase: number
      if (p < 0.16) {
        from = 'd'
        to = 'd'
        mix = 0
        lineA = 0
        closed = 0
        phase = 0
      } else if (p < 0.4) {
        mix = ease((p - 0.16) / 0.24)
        from = 'd'
        to = 'l'
        lineA = mix
        closed = 0
        phase = 0
      } else if (p < 0.46) {
        from = 'l'
        to = 'l'
        mix = 0
        lineA = 1
        closed = 0
        phase = 1
      } else if (p < 0.7) {
        mix = ease((p - 0.46) / 0.24)
        from = 'l'
        to = 'f'
        lineA = 1
        closed = mix
        phase = 1
      } else if (p < 0.9) {
        from = 'f'
        to = 'f'
        mix = 0
        lineA = 1
        closed = 1
        phase = 2
      } else {
        mix = ease((p - 0.9) / 0.1)
        from = 'f'
        to = 'd'
        lineA = 1 - mix
        closed = 1 - mix
        phase = 2
      }
      const pos: number[][] = []
      for (let i = 0; i < N; i++) {
        const pt = P[i] as unknown as Record<string, number>
        const ax = pt[from + 'x']
        const ay = pt[from + 'y']
        const bx = pt[to + 'x']
        const by = pt[to + 'y']
        pos.push([ax + (bx - ax) * mix, ay + (by - ay) * mix])
      }
      draw(pos, lineA, closed, phase)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (!run) {
        run = true
        t0 = 0
        raf = requestAnimationFrame(frame)
      }
    }
    const stop = () => {
      run = false
      if (raf) cancelAnimationFrame(raf)
      raf = null
    }

    layout()
    let resizeTimer: number | undefined
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(layout, 180)
    }
    window.addEventListener('resize', onResize)

    if (reduce) {
      const pos: number[][] = []
      for (let i = 0; i < N; i++) pos.push([P[i].fx, P[i].fy])
      draw(pos, 1, 1, 2)
      phaseRef.current?.(-1)
      return () => {
        window.removeEventListener('resize', onResize)
        window.clearTimeout(resizeTimer)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) start()
          else stop()
        }
      },
      { threshold: 0.08 },
    )
    io.observe(canvas)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resizeTimer)
    }
  }, [])

  return <Canvas ref={canvasRef} aria-hidden />
}

const Canvas = styled.canvas`
  width: 100%;
  height: clamp(200px, 26vw, 300px);
  display: block;
  margin-bottom: clamp(20px, 3vw, 40px);
`
