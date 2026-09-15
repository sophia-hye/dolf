import type { ReactNode } from 'react'
import styled from 'styled-components'
import { useReveal } from '@/hooks/useReveal'

// Fades + rises its children into view on scroll. `delay` staggers siblings.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <Wrap ref={ref} $visible={visible} $delay={delay} className={className}>
      {children}
    </Wrap>
  )
}

const Wrap = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(26px)')};
  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ $delay }) => $delay}ms;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`
