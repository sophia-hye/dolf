import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useAuth } from '@/state/auth-context'
import type { Locale } from '@/i18n/types'

const LOCALES: Locale[] = ['en', 'ko', 'ja']

export function Header() {
  const { t, locale, setLocale } = useLocale()
  const { count: cartCount } = useCart()
  const { user } = useAuth()
  const accountLink = user
    ? { to: user.role === 'admin' ? '/admin' : '/mypage', label: t.account.myPageNav }
    : { to: '/signin', label: t.account.signInNav }

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

        <Right>
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

          <AccountLink to={accountLink.to}>{accountLink.label}</AccountLink>

          <CartLink to="/shop">
            {t.shop.cart}
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </CartLink>
        </Right>
      </Inner>
    </Wrapper>
  )
}

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const AccountLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0;
`

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
