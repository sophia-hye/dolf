import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { useCart } from '@/state/cart-context'
import { useAuth } from '@/state/auth-context'
import type { Locale } from '@/i18n/types'
import logoUrl from '@/assets/logo.png'

const LOCALES: Locale[] = ['en', 'ko', 'ja']

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 8h13l-1 11.4a1.6 1.6 0 0 1-1.6 1.45H8.1A1.6 1.6 0 0 1 6.5 19.4L5.5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

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

  const cartLink = (
    <CartLink to="/cart" aria-label={t.shop.cart}>
      <CartIcon />
      {cartCount > 0 && <Badge>{cartCount}</Badge>}
    </CartLink>
  )

  return (
    <Wrapper>
      <Inner>
        <Logo to="/" aria-label="DoLF">
          <LogoImg src={logoUrl} alt="DoLF" />
        </Logo>

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
          {cartLink}
        </Right>

        <MobileActions>
          {cartLink}
          <Hamburger
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </MobileActions>
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
  display: inline-flex;
  align-items: center;
`

const LogoImg = styled.img`
  height: 28px;
  width: auto;
  display: block;
`

const Nav = styled.nav`
  display: flex;
  gap: 36px;

  ${({ theme }) => theme.media.nav} {
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

  ${({ theme }) => theme.media.nav} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  ${({ theme }) => theme.media.nav} {
    display: flex;
    align-items: center;
    gap: 18px;
  }
`

const Hamburger = styled.button`
  display: flex;
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
`

const Drawer = styled.div`
  display: none;

  ${({ theme }) => theme.media.nav} {
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
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const AccountLink = styled(Link)`
  white-space: nowrap;
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
  position: absolute;
  top: -6px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
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
