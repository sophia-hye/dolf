import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'
import { mockOrders, mockWishlistSlugs } from '@/data/mock-account'
import { getProductBySlug } from '@/data/products'

export function MyPage() {
  const { t, locale } = useLocale()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const c = t.account.myPage

  if (!user) return null

  const wishlist = mockWishlistSlugs
    .map((slug) => getProductBySlug(slug, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const settings = [
    { label: c.settingName, value: user.name },
    { label: c.settingEmail, value: user.email },
    { label: c.settingPhone, value: user.phone ?? '-' },
    { label: c.settingAddress, value: user.address ?? '-' },
    { label: c.settingMembership, value: user.membership ?? 'Member' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <Wrapper>
      <Header>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Greeting>{c.greeting.replace('{name}', user.name)}</Greeting>
        <Subhead>{c.subhead}</Subhead>
      </Header>

      <Stats>
        <Stat>
          <StatValue>{mockOrders.length}</StatValue>
          <StatLabel>{c.statsOrders}</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{wishlist.length}</StatValue>
          <StatLabel>{c.statsWishlist}</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{user.membership ?? 'Member'}</StatValue>
          <StatLabel>{c.statsSpent}</StatLabel>
        </Stat>
      </Stats>

      <Section>
        <SectionTitle>{c.ordersTitle}</SectionTitle>
        <Orders>
          {mockOrders.map((order) => (
            <OrderRow key={order.id}>
              <OrderMeta>
                <OrderId>
                  {order.id} · {order.date}
                </OrderId>
                <OrderTitle>{order.title}</OrderTitle>
                <OrderStatus>{order.status}</OrderStatus>
              </OrderMeta>
              <OrderAmount>{order.amount}</OrderAmount>
            </OrderRow>
          ))}
        </Orders>
      </Section>

      <Section>
        <SectionTitle>{c.wishlistTitle}</SectionTitle>
        <Wishlist>
          {wishlist.map((p) => (
            <WishCard key={p.slug} to={`/shop/${p.slug}`}>
              <WishImage>
                <img src={p.catalogImage} alt={p.catalogName} />
              </WishImage>
              <WishName>{p.catalogName}</WishName>
              <WishPrice>{p.catalogPrice}</WishPrice>
            </WishCard>
          ))}
        </Wishlist>
      </Section>

      <Section>
        <SectionTitle>{c.settingsTitle}</SectionTitle>
        <Settings>
          {settings.map((row) => (
            <SettingRow key={row.label}>
              <SettingLabel>{row.label}</SettingLabel>
              <SettingValue>{row.value}</SettingValue>
              <EditLink>{c.edit}</EditLink>
            </SettingRow>
          ))}
        </Settings>
        <LogoutButton type="button" onClick={handleLogout}>
          {t.account.logout}
        </LogoutButton>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  padding-top: 64px;
  padding-bottom: 104px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`

const Greeting = styled.h1`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
`

const Subhead = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`

const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 6px;
`

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Section = styled.section`
  margin-bottom: 56px;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 20px;
`

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const OrderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.mobile} {
    gap: 12px;
  }
`

const OrderMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const OrderId = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const OrderTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const OrderStatus = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brandRed};
`

const OrderAmount = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.ink};
`

const Wishlist = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`

const WishCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const WishImage = styled.div`
  height: 280px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 200px;
  }
`

const WishName = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const WishPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const SettingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.mobile} {
    gap: 12px;
  }
`

const SettingLabel = styled.span`
  width: 100px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SettingValue = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ink};
`

const EditLink = styled.button`
  border: none;
  background: none;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
  cursor: pointer;
`

const LogoutButton = styled.button`
  margin-top: 32px;
  padding: 12px 28px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.ink};
  }
`
