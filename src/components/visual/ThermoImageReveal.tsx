import { useEffect, useRef } from 'react'
import styled from 'styled-components'

// A 감온(thermochromic) image reveal: an image sits under a black canvas that
// clears where the pointer rubs and slowly cools (re-inks) back. Runs a single
// auto-reveal sweep when scrolled into view. Reduced motion → the ink is never
// painted, so the image shows plainly and the hint is hidden.
export function ThermoImageReveal({
  src,
  alt,
  hint,
}: {
  src: string
  alt: string
  hint?: string
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const INK = '#0b0b0c'
    let W = 0
    let H = 0
    let raf = 0
    let last = 0
    let cancelled = false

    const size = () => {
      const r = stage.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'source-over'
      if (reduce) {
        ctx.clearRect(0, 0, W, H)
      } else {
        ctx.fillStyle = INK
        ctx.fillRect(0, 0, W, H)
      }
    }

    const warm = (x: number, y: number, r: number) => {
      ctx.globalCompositeOperation = 'destination-out'
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, 'rgba(0,0,0,.14)')
      g.addColorStop(0.5, 'rgba(0,0,0,.07)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 7)
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'
    }

    const cool = (t: number) => {
      if (cancelled) return
      if (t - last > 40) {
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = 'rgba(11,11,12,.03)'
        ctx.fillRect(0, 0, W, H)
        last = t
      }
      raf = requestAnimationFrame(cool)
    }

    const at = (clientX: number, clientY: number) => {
      const r = stage.getBoundingClientRect()
      const x = clientX - r.left
      const y = clientY - r.top
      if (x < -50 || y < -50 || x > W + 50 || y > H + 50) return
      const R = Math.max(70, W * 0.26)
      warm(x, y, R)
      warm(x, y, R * 0.6)
      stage.classList.add('touched')
    }
    const onPointer = (e: PointerEvent) => at(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const p = e.touches[0]
      if (p) at(p.clientX, p.clientY)
    }

    size()
    let resizeTimer: number | undefined
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(size, 160)
    }
    window.addEventListener('resize', onResize)

    let io: IntersectionObserver | null = null
    if (!reduce) {
      stage.addEventListener('pointermove', onPointer, { passive: true })
      stage.addEventListener('touchmove', onTouch, { passive: true })
      raf = requestAnimationFrame(cool)
      let done = false
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !done) {
              done = true
              let i = 0
              const Np = 30
              const sweep = () => {
                if (cancelled || i > Np) return
                const px = W * (0.28 + 0.46 * (i / Np))
                const py = H * (0.46 + 0.2 * Math.sin((i / Np) * 6.28))
                const R = Math.max(72, W * 0.24)
                warm(px, py, R)
                warm(px, py, R * 0.6)
                stage.classList.add('touched')
                i++
                window.setTimeout(sweep, 60)
              }
              sweep()
            }
          }
        },
        { threshold: 0.55 },
      )
      io.observe(stage)
    } else {
      stage.classList.add('touched')
    }

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      stage.removeEventListener('pointermove', onPointer)
      stage.removeEventListener('touchmove', onTouch)
      io?.disconnect()
    }
  }, [])

  return (
    <Stage ref={stageRef}>
      <StageImg src={src} alt={alt} />
      <Canvas ref={canvasRef} aria-hidden />
      {hint && <Tip aria-hidden>{hint}</Tip>}
    </Stage>
  )
}

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  margin-inline: auto;
  aspect-ratio: 3 / 4;
  border-radius: 3px;
  overflow: hidden;
  background: #000;
  cursor: crosshair;
  touch-action: none;
`

const StageImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

const Tip = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(239, 236, 228, 0.5);
  pointer-events: none;
  transition: opacity 0.5s;

  ${Stage}.touched & {
    opacity: 0;
  }
`
