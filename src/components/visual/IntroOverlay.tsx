import { useEffect, useRef, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useLocale } from '@/i18n/context'

// Fullscreen entrance intro on a black ground, played once per browser session.
//
// Sequence:
//   1. "dot of line and form" is typed out letter by letter (with a caret).
//   2. The hero slogan — hidden from the very first frame — is slowly revealed
//      by a soft left-to-right wipe (no flash of text before it is covered).
//   3. "What's your story?" fades up.
//   4. The whole black overlay fades out to the page underneath.
//
// Respects prefers-reduced-motion by never rendering. The real text stays in
// the DOM so the overlay never traps a reader on a blank screen.

const SESSION_KEY = 'dolf-intro-shown'
const TAGLINE = 'dot of line and form'
const STORY = "What's your story?"

type Phase = 'type' | 'reveal' | 'story'

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

  // Decide synchronously, before first paint, whether the intro runs at all.
  const [active, setActive] = useState(
    () => !reduce && typeof window !== 'undefined' && !introAlreadyShown(),
  )
  const [phase, setPhase] = useState<Phase>('type')
  const [typed, setTyped] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const timers = useRef<number[]>([])

  // Called when the slogan wipe finishes (or a fallback timer). Freezes the
  // slogan fully visible (mask removed) so later re-renders can never restart
  // the wipe, then brings in the closing line.
  const onRevealDone = () => {
    setRevealed((was) => {
      if (was) return was
      setPhase('story')
      return true
    })
  }

  const push = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms))
  }

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

  // Drive the timeline.
  useEffect(() => {
    if (!active) return

    // 1) Type the tagline, char by char.
    let i = 0
    const type = () => {
      i += 1
      setTyped(i)
      if (i < TAGLINE.length) {
        push(type, 78)
      } else {
        // hold on the full tagline, then start the slow slogan reveal
        push(() => setPhase('reveal'), 620)
      }
    }
    push(type, 480)

    return () => {
      timers.current.forEach((id) => window.clearTimeout(id))
      timers.current = []
    }
  }, [active])

  // Advance through reveal -> story -> fade out.
  useEffect(() => {
    if (!active) return
    if (phase === 'reveal') {
      // Fallback in case onAnimationEnd never fires (duration + lead-in margin).
      push(onRevealDone, 3000)
    } else if (phase === 'story') {
      push(() => setLeaving(true), 1600)
      push(() => setActive(false), 1600 + 820)
    }
  }, [phase, active])

  if (!active) return null

  return (
    <Overlay $leaving={leaving} aria-hidden>
      <Center>
        <Tag>
          <Dot />
          <TagText>{TAGLINE.slice(0, typed)}</TagText>
          {phase === 'type' && <Caret />}
        </Tag>

        <Title
          $reveal={phase === 'reveal' && !revealed}
          $done={revealed}
          onAnimationEnd={onRevealDone}
        >
          {t.hero.title}
        </Title>

        <Story $show={phase === 'story'}>{STORY}</Story>
      </Center>
    </Overlay>
  )
}

/* ── animations ─────────────────────────────────────────────── */

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`

// Soft left-to-right wipe: the white text starts fully masked (hidden) and the
// opaque band of the mask slides in from the left, uncovering it gradually.
const revealAnim = keyframes`
  from { -webkit-mask-position: 150% 0; mask-position: 150% 0; }
  to   { -webkit-mask-position: 0% 0;   mask-position: 0% 0; }
`

/* ── styled ─────────────────────────────────────────────────── */

const Overlay = styled.div<{ $leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ink};
  opacity: ${({ $leaving }) => ($leaving ? 0 : 1)};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity;
`

const Center = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-inline: clamp(24px, 6vw, 72px);
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 30px;
  min-height: 14px;
`

const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandRed};
  flex: none;
`

const TagText = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
  white-space: pre;
`

const Caret = styled.span`
  display: inline-block;
  width: 2px;
  height: 13px;
  margin-left: 1px;
  background: ${({ theme }) => theme.colors.brandRed};
  animation: ${blink} 0.9s step-end infinite;
`

const Title = styled.h1<{ $reveal: boolean; $done: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(40px, 8.4vw, 128px);
  line-height: 0.94;
  letter-spacing: -0.03em;
  color: #f5f2ea;
  white-space: pre-line;
  overflow-wrap: break-word;
  font-optical-sizing: auto;
  margin: 0;

  /* Masked (hidden) from the first frame — no flash of visible text. */
  -webkit-mask-image: linear-gradient(90deg, #000 42%, transparent 72%);
  mask-image: linear-gradient(90deg, #000 42%, transparent 72%);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 280% 100%;
  mask-size: 280% 100%;
  -webkit-mask-position: 150% 0;
  mask-position: 150% 0;

  ${({ $reveal }) =>
    $reveal &&
    css`
      animation: ${revealAnim} 2.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
    `}

  /* Once revealed, drop the mask entirely so no later re-render can restart the
     wipe — the slogan simply stays fully visible. */
  ${({ $done }) =>
    $done &&
    css`
      animation: none;
      -webkit-mask-image: none;
      mask-image: none;
    `}
`

const Story = styled.p<{ $show: boolean }>`
  margin-top: clamp(26px, 4vw, 44px);
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(20px, 3.2vw, 34px);
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateY(${({ $show }) => ($show ? '0' : '14px')});
  transition:
    opacity 0.9s ease,
    transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1);
`
