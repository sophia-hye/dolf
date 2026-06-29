import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
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
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile drawer on route change.
  useEffect(() => setOpen(false), [location.pathname])

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

  const langSwitcher = (
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
  )

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
          {langSwitcher}
          <AccountLink to={accountLink.to}>{accountLink.label}</AccountLink>
          <CartLink to="/shop">
            {t.shop.cart}
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </CartLink>
        </Right>

        <Hamburger type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </Inner>

      {open && (
        <Drawer>
          <DrawerNav>
            {navItems.map((item) => (
              <DrawerLink key={item.to} to={item.to}>
                {item.label}
              </DrawerLink>
            ))}
          </DrawerNav>
          <DrawerDivider />
          <DrawerRow>
            <DrawerLink to={accountLink.to}>{accountLink.label}</DrawerLink>
            <CartLink to="/shop">
              {t.shop.cart}
              {cartCount > 0 && <Badge>{cartCount}</Badge>}
            </CartLink>
          </DrawerRow>
          {langSwitcher}
        </Drawer>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
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

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
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

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 24px;
  padding: 4px 0;
  border: none;
  background: none;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.ink};
  }

  ${({ theme }) => theme.media.mobile} {
    display: flex;
  }
`

const Drawer = styled.div`
  display: none;

  ${({ theme }) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px 28px 32px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cream};
  }
`

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const DrawerLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
`

const DrawerDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
`

const DrawerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
