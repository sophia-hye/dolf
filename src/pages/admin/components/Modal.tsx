import { useEffect, type ReactNode } from 'react'
import styled from 'styled-components'

interface ModalProps {
  readonly title: string
  readonly onClose: () => void
  readonly children: ReactNode
}

// Lightweight admin modal: backdrop click and Escape close it.
export function Modal({ title, onClose, children }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <Overlay onClick={onClose}>
      <Card role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <Close type="button" aria-label="닫기" onClick={onClose}>
            ×
          </Close>
        </Header>
        {children}
      </Card>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(31, 31, 33, 0.45);
`

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  max-height: 88vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
`

const Close = styled.button`
  border: none;
  background: none;
  padding: 0;
  width: 28px;
  height: 28px;
  font-size: 22px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`
