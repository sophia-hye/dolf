import styled from 'styled-components'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/state/auth-context'

const NAV_ITEMS = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/insights', label: 'Customer Insights', indent: true },
  { to: '/admin/members', label: 'Members' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/settings', label: 'Settings' },
]

// Bottom tab bar (mobile) — 5 primary destinations, matching the Figma design.
const TAB_ITEMS = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/members', label: 'Members' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/settings', label: 'Settings' },
]

export function AdminLayout() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    void signOut()
    navigate('/', { replace: true })
  }

  return (
    <Shell>
      <Sidebar>
        <Brand>
          <BrandName>DoLF</BrandName>
          <BrandSub>ADMIN CONSOLE</BrandSub>
        </Brand>
        <Nav>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} to={item.to} end={item.end} $indent={item.indent}>
              {item.label}
            </NavItem>
          ))}
        </Nav>
        <SidebarFoot>
          <AdminName>관리자 · {user?.name ?? 'admin'}</AdminName>
          <LogoutButton type="button" onClick={handleLogout}>
            로그아웃
          </LogoutButton>
        </SidebarFoot>
      </Sidebar>

      <TopBar>
        <TopBrand>
          DoLF <TopBrandSub>ADMIN</TopBrandSub>
        </TopBrand>
        <Avatar>{(user?.name ?? 'A').charAt(0)}</Avatar>
      </TopBar>

      <Content>
        <Outlet />
      </Content>

      <TabBar>
        {TAB_ITEMS.map((item) => (
          <Tab key={item.to} to={item.to} end={item.end}>
            {item.label}
          </Tab>
        ))}
      </TabBar>
    </Shell>
  )
}

const Shell = styled.div`
  display: flex;
  min-height: 100vh;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  padding: 32px 0;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const TopBar = styled.header`
  display: none;

  ${({ theme }) => theme.media.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 16px 20px;
    background-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.white};
  }
`

const TopBrand = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5px;
`

const TopBrandSub = styled.span`
  font-size: 11px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 4px;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
`

const TabBar = styled.nav`
  display: none;

  ${({ theme }) => theme.media.mobile} {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const Tab = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};

  &.active {
    color: ${({ theme }) => theme.colors.brandRed};
    font-weight: 600;
  }
`

const Brand = styled.div`
  padding: 0 28px 36px;
`

const BrandName = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.5px;
`

const BrandSub = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const NavItem = styled(NavLink)<{ $indent?: boolean }>`
  padding: 11px 28px;
  padding-left: ${({ $indent }) => ($indent ? '44px' : '28px')};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: rgba(255, 255, 255, 0.65);
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    border-left-color: ${({ theme }) => theme.colors.brandRed};
    background-color: rgba(255, 255, 255, 0.05);
  }
`

const SidebarFoot = styled.div`
  padding: 24px 28px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const AdminName = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.7);
`

const LogoutButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 36px 40px;
  overflow-x: auto;

  ${({ theme }) => theme.media.mobile} {
    padding: 24px 20px 84px;
  }
`
