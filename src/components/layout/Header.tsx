import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import type { Locale } from '@/i18n/types'

const LOCALES: Locale[] = ['en', 'ko', 'ja']

export function Header() {
  const { t, locale, setLocale } = useLocale()

  const navItems = [
    { label: t.nav.about, to: '/about' },
    { label: t.nav.products, to: '/products' },
    { label: t.nav.community, to: '/community' },
    { label: t.nav.contact, to: '/contact' },
    { label: t.nav.shop, to: '/shop' },
  ]

  return (
    <Wrapper>
      <Inner>
        <Logo to="/">DoLF</Logo>

        <Nav>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <LangSwitcher>
          {LOCALES.map((code) => (
            <LangButton
              key={code}
              type="button"
              $active={locale === code}
              onClick={() => setLocale(code)}
            >
              {code.toUpperCase()}
            </LangButton>
          ))}
        </LangSwitcher>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
`

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.ink};
`

const Nav = styled.nav`
  display: flex;
  gap: 36px;
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const LangSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const LangButton = styled.button<{ $active: boolean }>`
  border: none;
  background: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.ink : theme.colors.textSecondary};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`
