import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'

// Top-of-page intro for the Breathe PDP — an animated retelling of the real
// diary cover, where the word "breathe" is the whitespace carved out of a
// dense field of breath/Spirit scripture.
//
// Unlike a simple knockout, every letter here is a real positioned glyph. The
// field starts solid; over THREE breaths (한숨 세 번) each glyph that sits
// inside the "breathe" letterforms is physically pushed out to the nearest
// edge of the shape — letter by letter — so the void opens by the text being
// shoved aside, finishing exactly like the printed cover. Pauses offscreen,
// replays on re-entry, static finished cover under reduced motion.

const SCRIPTURE =
  'Those who wait upon the LORD shall renew their strength, they shall mount up with wings like eagles, ' +
  'they shall run and not be weary, they shall walk and not faint. Be still, and know that I am God. ' +
  'Come to me, all you who labor and are heavy laden, and I will give you rest. ' +
  'The LORD God formed the man from the dust of the ground, and breathed into his nostrils the breath of life, ' +
  'and the man became a living being. The Spirit of God has made me, and the breath of the Almighty gives me life. ' +
  'In him we live and move and have our being. When you send forth your Spirit they are created, ' +
  'and you renew the face of the ground. Let everything that has breath praise the LORD. ' +
  'He breathed on them and said, Receive the Holy Spirit. I will put my Spirit within you, and you shall live. ' +
  'Peace I leave with you, my peace I give to you; let not your heart be troubled, neither let it be afraid. '

const CAPTION: Record<string, string> = {
  ko: '세 번의 숨, 그리고 여백',
  en: 'three breaths, and space',
  ja: '三つの息、そして余白',
}
const LABEL: Record<string, string> = {
  ko: '빽빽한 말씀이 한 글자씩 밀려나며 여백으로 드러나는 breathe',
  en: 'breathe, as the scripture is pushed aside letter by letter',
  ja: '文字が一つずつ押しのけられ、余白として現れる breathe',
}

const BREATHS = 3
const CYCLE = 2500
const SEQ = CYCLE * BREATHS
const smooth = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t))

// Parting progress across three breaths: inhale holds (faint gather), exhale
// pushes to the next plateau — three visible steps.
function partingAt(ms: number): number {
  if (ms >= SEQ) return 1
  const k = Math.min(BREATHS - 1, Math.floor(ms / CYCLE))
  const local = (ms - k * CYCLE) / CYCLE
  const start = k / BREATHS
  const end = (k + 1) / BREATHS
  if (local < 0.42) {
    const gather = -0.012 * Math.sin((local / 0.42) * Math.PI)
    return Math.max(0, start + gather)
  }
  return start + (end - start) * smooth((local - 0.42) / 0.58)
}

type Glyph = {
  ch: string
  x: number
  y: number
  w: number // advance width
  tx: number // pushed target x (inside glyphs)
  ty: number
  inside: boolean
  a: number // wave order 0..1 (when it starts pushing)
}

export function BreatheIntro({ framed = false }: { framed?: boolean } = {}) {
  const { locale } = useLocale()
  const lang = locale in CAPTION ? locale : 'en'

  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tickRefs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const ink = '#1f1f21'

    let W = 0
    let H = 0
    let fs = 14
    let glyphs: Glyph[] = []
    const staticLayer = document.createElement('canvas')
    const sctx = staticLayer.getContext('2d')

    const fontFor = (px: number) =>
      `${px}px Georgia, "Noto Serif KR", "Times New Roman", serif`

    const build = () => {
      if (!sctx) return
      fs = Math.max(8, Math.min(13, W / 104))
      const lh = fs * 1.1
      const padX = Math.max(14, W * 0.03)
      const maxW = W - padX * 2

      // 1) lay the scripture out as individual glyphs, grouped into lines
      ctx.font = fontFor(fs)
      const words = SCRIPTURE.split(' ')
      const spaceW = ctx.measureText(' ').width
      glyphs = []
      const lines: Glyph[][] = []
      let y = lh
      let wi = 0
      let guard = 0
      while (y < H - lh * 0.2 && guard < 6000) {
        // pack a line with natural widths
        let natW = 0
        const lineWords: string[] = []
        while (true) {
          const w = words[wi % words.length]
          const add = (lineWords.length ? spaceW : 0) + ctx.measureText(w).width
          if (natW + add > maxW && lineWords.length) break
          lineWords.push(w)
          natW += add
          wi++
        }
        // justify: distribute the slack evenly across the word gaps so both
        // edges are flush (no ragged right margin)
        const gaps = lineWords.length - 1
        const extra = gaps > 0 ? (maxW - natW) / gaps : 0
        const lineGlyphs: Glyph[] = []
        let x = padX
        for (let li = 0; li < lineWords.length; li++) {
          if (li) x += spaceW + extra
          const w = lineWords[li]
          for (const ch of w) {
            const cw = ctx.measureText(ch).width
            const g: Glyph = { ch, x, y, w: cw, tx: x, ty: y, inside: false, a: 0 }
            glyphs.push(g)
            lineGlyphs.push(g)
            x += cw
          }
        }
        lines.push(lineGlyphs)
        y += lh
        guard++
      }

      // 2) build a SOLID "breathe" silhouette (counters filled) so every glyph
      //    sitting anywhere on the letterforms gets pushed out, leaving a clean
      //    void. We flood the exterior in from the border through black pixels;
      //    the white strokes block it, so enclosed counters stay "inside".
      ctx.font = `800 100px "Archivo", "Futura PT", "Helvetica Neue", Arial, sans-serif`
      const w100 = ctx.measureText('breathe').width
      const bs = Math.min((100 * W * 0.78) / w100, H * 0.82)
      const mw = Math.max(1, Math.round(W))
      const mh = Math.max(1, Math.round(H))
      const mcan = document.createElement('canvas')
      mcan.width = mw
      mcan.height = mh
      const mctx = mcan.getContext('2d')!
      mctx.fillStyle = '#000'
      mctx.fillRect(0, 0, mw, mh)
      mctx.fillStyle = '#fff'
      mctx.font = `800 ${bs}px "Archivo", "Futura PT", "Helvetica Neue", Arial, sans-serif`
      mctx.textAlign = 'center'
      mctx.textBaseline = 'middle'
      mctx.fillText('breathe', mw / 2, mh / 2)
      const md = mctx.getImageData(0, 0, mw, mh).data
      const ext = new Uint8Array(mw * mh)
      const stack: number[] = []
      const pushIf = (ix: number, iy: number) => {
        const id = iy * mw + ix
        if (!ext[id] && md[id * 4] <= 128) {
          ext[id] = 1
          stack.push(id)
        }
      }
      for (let ix = 0; ix < mw; ix++) {
        pushIf(ix, 0)
        pushIf(ix, mh - 1)
      }
      for (let iy = 0; iy < mh; iy++) {
        pushIf(0, iy)
        pushIf(mw - 1, iy)
      }
      while (stack.length) {
        const id = stack.pop() as number
        const ix = id % mw
        const iy = (id / mw) | 0
        if (ix > 0) pushIf(ix - 1, iy)
        if (ix < mw - 1) pushIf(ix + 1, iy)
        if (iy > 0) pushIf(ix, iy - 1)
        if (iy < mh - 1) pushIf(ix, iy + 1)
      }
      const inside = (px: number, py: number) => {
        const ix = px | 0
        const iy = py | 0
        if (ix < 0 || iy < 0 || ix >= mw || iy >= mh) return false
        return ext[iy * mw + ix] === 0
      }
      // silhouette centroid — used only to order the three breaths
      let sx = 0
      let sy = 0
      let sn = 0
      for (let iy = 0; iy < mh; iy++) {
        for (let ix = 0; ix < mw; ix++) {
          if (ext[iy * mw + ix] === 0) {
            sx += ix
            sy += iy
            sn++
          }
        }
      }
      const cX = sn ? sx / sn : W / 2
      const cY = sn ? sy / sn : H / 2

      // 3) classify which glyphs sit inside the letterforms
      ctx.font = fontFor(fs)
      for (const g of glyphs) {
        const cx = g.x + g.w / 2
        const cy = g.y - fs * 0.34
        g.inside = inside(cx, cy)
      }

      // 4) per line, take each contiguous run of glyphs sitting inside a stroke
      //    and redistribute it to the stroke's two edges — kept in reading
      //    order and packed tight (slightly overlapping) so the result is the
      //    cover's clean, condensed overlap instead of a random pile. y never
      //    changes and glyphs only move inward, so the line keeps its width.
      const track = 0.7 // <1 => letters overlap as they pack
      const step = Math.max(1.5, fs * 0.3)
      for (const line of lines) {
        let i = 0
        while (i < line.length) {
          if (!line[i].inside) {
            i++
            continue
          }
          let j = i
          while (j + 1 < line.length && line[j + 1].inside) j++
          const run = line.slice(i, j + 1)
          const first = run[0]
          const last = run[run.length - 1]
          const cyr = first.y - fs * 0.34
          let leftEdge = first.x
          const cxFirst = first.x + first.w / 2
          for (let s = step; s < W; s += step) {
            if (!inside(cxFirst - s, cyr)) {
              leftEdge = cxFirst - s
              break
            }
          }
          let rightEdge = last.x + last.w
          const cxLast = last.x + last.w / 2
          for (let s = step; s < W; s += step) {
            if (!inside(cxLast + s, cyr)) {
              rightEdge = cxLast + s
              break
            }
          }
          const mid = (leftEdge + rightEdge) / 2
          const leftG: Glyph[] = []
          const rightG: Glyph[] = []
          for (const g of run) {
            if (g.x + g.w / 2 <= mid) leftG.push(g)
            else rightG.push(g)
          }
          let cur = leftEdge
          for (let k = leftG.length - 1; k >= 0; k--) {
            cur -= leftG[k].w * track
            leftG[k].tx = cur
            leftG[k].ty = leftG[k].y
          }
          cur = rightEdge
          for (let k = 0; k < rightG.length; k++) {
            rightG[k].tx = cur
            rightG[k].ty = rightG[k].y
            cur += rightG[k].w * track
          }
          i = j + 1
        }
      }

      // 5) wave order — rank inside glyphs inner->outer and spread them evenly
      //    across 0..1, so each of the three breaths clears about a third.
      const insiders = glyphs.filter((g) => g.inside)
      insiders.sort(
        (p, q) =>
          Math.hypot(p.x - cX, p.y - cY) - Math.hypot(q.x - cX, q.y - cY),
      )
      const n = Math.max(1, insiders.length - 1)
      insiders.forEach((g, i) => {
        g.a = i / n
      })

      // 6) pre-render the static (never-moving) glyphs once
      staticLayer.width = Math.round(W * dpr)
      staticLayer.height = Math.round(H * dpr)
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sctx.clearRect(0, 0, W, H)
      sctx.font = fontFor(fs)
      sctx.fillStyle = ink
      sctx.textBaseline = 'alphabetic'
      for (const g of glyphs) if (!g.inside) sctx.fillText(g.ch, g.x, g.y)
    }

    const layout = () => {
      const r = canvas.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }

    const WIN = 0.4 // per-glyph travel window within the 0..1 sequence
    const render = (P: number) => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, W, H)
      if (staticLayer.width) ctx.drawImage(staticLayer, 0, 0, W, H)

      ctx.font = fontFor(fs)
      ctx.fillStyle = ink
      ctx.textBaseline = 'alphabetic'
      for (const g of glyphs) {
        if (!g.inside) continue
        const start = g.a * (1 - WIN)
        const lp = smooth((P - start) / WIN)
        const x = g.x + (g.tx - g.x) * lp
        const y = g.y + (g.ty - g.y) * lp
        // keep them visible so the pushed letters pile up and overlap at the
        // stroke edges (the dense, layered look of the real cover)
        ctx.globalAlpha = 0.85
        ctx.fillText(g.ch, x, y)
      }
      ctx.globalAlpha = 1

      // soft paper fade at the edges — frames the field like the printed cover
      const fade = H * 0.15
      const gTop = ctx.createLinearGradient(0, 0, 0, fade)
      gTop.addColorStop(0, '#ffffff')
      gTop.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gTop
      ctx.fillRect(0, 0, W, fade)
      const gBot = ctx.createLinearGradient(0, H - fade, 0, H)
      gBot.addColorStop(0, 'rgba(255,255,255,0)')
      gBot.addColorStop(1, '#ffffff')
      ctx.fillStyle = gBot
      ctx.fillRect(0, H - fade, W, fade)

      const ticks = tickRefs.current
      for (let i = 0; i < ticks.length; i++) {
        const el = ticks[i]
        if (!el) continue
        const f = smooth((P - i / BREATHS) / (1 / BREATHS))
        el.style.opacity = String(0.18 + 0.82 * f)
        el.style.transform = `scaleY(${0.5 + 0.5 * f})`
      }
    }

    let raf = 0
    let t0 = 0
    let running = false
    const frame = (ts: number) => {
      if (!t0) t0 = ts
      const ms = ts - t0
      render(ms <= SEQ ? partingAt(ms) : 1)
      if (ms <= SEQ + 400) raf = requestAnimationFrame(frame)
      else running = false
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
    render(reduce ? 1 : 0)

    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            layout()
            render(reduce ? 1 : running ? 1 : 0)
          })
        : null
    ro?.observe(canvas)

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                if (e.isIntersecting) start()
                else {
                  stop()
                  if (!reduce) render(0)
                }
              }
            },
            { threshold: 0.3 },
          )
        : null
    if (io) io.observe(canvas)
    else start()

    return () => {
      stop()
      ro?.disconnect()
      io?.disconnect()
    }
  }, [])

  return (
    <Root ref={rootRef} role="img" aria-label={LABEL[lang]} $framed={framed}>
      <Canvas ref={canvasRef} />
      <Caption aria-hidden>
        <Ticks>
          {[0, 1, 2].map((i) => (
            <Tick
              key={i}
              ref={(el) => {
                tickRefs.current[i] = el
              }}
            />
          ))}
        </Ticks>
        <span>{CAPTION[lang]}</span>
      </Caption>
    </Root>
  )
}

const Root = styled.div<{ $framed?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ $framed }) =>
    $framed ? 'clamp(320px, 44vw, 480px)' : 'clamp(360px, 52vw, 600px)'};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  ${({ $framed, theme }) =>
    $framed
      ? `margin-bottom: 0;`
      : `border-bottom: 1px solid ${theme.colors.line}; margin-bottom: clamp(20px, 3vw, 40px);`}
`

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`

const Caption = styled.div`
  position: absolute;
  left: 50%;
  bottom: clamp(14px, 2.4vw, 26px);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Roboto Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
`

const Ticks = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const Tick = styled.span`
  display: inline-block;
  width: 2px;
  height: 14px;
  border-radius: 1px;
  background: ${({ theme }) => theme.colors.brandRed};
  opacity: 0.18;
  transform: scaleY(0.5);
  transform-origin: center;
`
