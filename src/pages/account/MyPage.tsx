import { useEffect, useState, type FormEvent } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'
import { useProductOverrides } from '@/state/products-context'
import { mockWishlistSlugs } from '@/data/mock-account'
import { getProductBySlug } from '@/data/products'
import { fetchMyOrders, formatMoney, type OrderRow } from '@/lib/orders'
import { effectivePriceString, effectiveName } from '@/lib/product-pricing'
import { isValidPhone } from '@/lib/validation'

const WISHLIST_KEY = 'dolf.wishlist'

// Compact order title from its line items, e.g. "Breathe +2" for multiple.
function orderTitle(order: OrderRow): string {
  const first = order.order_items[0]
  if (!first) return `#${order.id.slice(0, 8)}`
  const extra = order.order_items.length - 1
  return extra > 0 ? `${first.name} +${extra}` : first.name
}

function loadWishlist(): string[] {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(WISHLIST_KEY) : null
    if (raw) return JSON.parse(raw) as string[]
  } catch {
    /* ignore */
  }
  return mockWishlistSlugs
}

export function MyPage() {
  const { t, locale } = useLocale()
  const { user, signOut, updateProfile } = useAuth()
  const { overrides } = useProductOverrides()
  const navigate = useNavigate()
  const c = t.account.myPage

  const [orders, setOrders] = useState<OrderRow[]>([])
  useEffect(() => {
    let active = true
    void fetchMyOrders().then((rows) => {
      if (active) setOrders(rows)
    })
    return () => {
      active = false
    }
  }, [])

  // Wishlist is persisted locally (no backend); seeded from the demo list.
  const [wishSlugs, setWishSlugs] = useState<string[]>(loadWishlist)
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishSlugs))
    } catch {
      /* ignore */
    }
  }, [wishSlugs])

  // Profile edit (name / phone / address only).
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  if (!user) return null

  const membership = user.membership ?? 'Basic'

  // Only orders from the last 3 months are shown.
  const cutoff = (() => {
    const d = new Date()
    d.setMonth(d.getMonth() - 3)
    return d.getTime()
  })()
  const recentOrders = orders.filter(
    (o) => new Date(o.created_at).getTime() >= cutoff,
  )

  const wishlist = wishSlugs
    .map((slug) => getProductBySlug(slug, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const removeWish = (slug: string) =>
    setWishSlugs((prev) => prev.filter((s) => s !== slug))

  const startEdit = () => {
    setName(user.name)
    setPhone(user.phone ?? '')
    setAddress(user.address ?? '')
    setError('')
    setEditing(true)
  }

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    if (phone.trim() && !isValidPhone(phone)) {
      setError(t.account.signUp.phoneInvalid)
      return
    }
    setBusy(true)
    const { error: err } = await updateProfile({
      name: name.trim(),
      phone: phone.trim() || undefined,
      address: address.trim() || undefined,
    })
    setBusy(false)
    if (err) {
      setError(err)
      return
    }
    setEditing(false)
  }

  const handleLogout = () => {
    void signOut()
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
          <StatValue>{recentOrders.length}</StatValue>
          <StatLabel>{c.statsOrders}</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{wishlist.length}</StatValue>
          <StatLabel>{c.statsWishlist}</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{membership}</StatValue>
          <StatLabel>{c.statsSpent}</StatLabel>
        </Stat>
      </Stats>

      <Section>
        <SectionTitle>{c.ordersTitle}</SectionTitle>
        {recentOrders.length === 0 ? (
          <EmptyOrders>{c.noOrders}</EmptyOrders>
        ) : (
          <>
            <Orders>
              {recentOrders.map((order) => (
                <OrderRow key={order.id}>
                  <OrderMeta>
                    <OrderId>
                      #{order.id.slice(0, 8)} · {order.created_at.slice(0, 10)}
                    </OrderId>
                    <OrderTitle>{orderTitle(order)}</OrderTitle>
                    <OrderStatus>{t.account.orderStatus[order.status]}</OrderStatus>
                    {order.tracking_no && (
                      <OrderId>
                        {c.tracking}: {order.carrier ? `${order.carrier} ` : ''}
                        {order.tracking_no}
                      </OrderId>
                    )}
                  </OrderMeta>
                  <OrderAmount>{formatMoney(order.total, order.currency)}</OrderAmount>
                </OrderRow>
              ))}
            </Orders>
            <SectionNote>{c.ordersNote}</SectionNote>
          </>
        )}
      </Section>

      <Section>
        <SectionTitle>{c.wishlistTitle}</SectionTitle>
        {wishlist.length === 0 ? (
          <EmptyOrders>{c.emptyWishlist}</EmptyOrders>
        ) : (
          <Wishlist>
            {wishlist.map((p) => (
              <WishCard key={p.slug}>
                <RemoveBtn
                  type="button"
                  aria-label={c.removeWish}
                  onClick={() => removeWish(p.slug)}
                >
                  ×
                </RemoveBtn>
                <WishLink to={`/shop/${p.slug}`}>
                  <WishImage>
                    <img src={p.catalogImage} alt={p.catalogName} />
                  </WishImage>
                  <WishName>{effectiveName(p.slug, locale, overrides)}</WishName>
                  <WishPrice>{effectivePriceString(p.slug, locale, overrides)}</WishPrice>
                </WishLink>
              </WishCard>
            ))}
          </Wishlist>
        )}
      </Section>

      <Section>
        <SectionHead>
          <SectionTitle>{c.settingsTitle}</SectionTitle>
          {!editing && (
            <EditLink type="button" onClick={startEdit}>
              {c.edit}
            </EditLink>
          )}
        </SectionHead>

        {editing ? (
          <form onSubmit={handleSave}>
            {error && <ErrorText>{error}</ErrorText>}
            <Settings>
              <EditRow>
                <SettingLabel>{c.settingName}</SettingLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </EditRow>
              <SettingRow>
                <SettingLabel>{c.settingEmail}</SettingLabel>
                <SettingValue>{user.email}</SettingValue>
              </SettingRow>
              <EditRow>
                <SettingLabel>{c.settingPhone}</SettingLabel>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </EditRow>
              <EditRow>
                <SettingLabel>{c.settingAddress}</SettingLabel>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </EditRow>
              <SettingRow>
                <SettingLabel>{c.settingMembership}</SettingLabel>
                <SettingValue>{membership}</SettingValue>
              </SettingRow>
            </Settings>
            <FormActions>
              <CancelButton type="button" onClick={() => setEditing(false)}>
                {c.cancel}
              </CancelButton>
              <SaveButton type="submit" disabled={busy || !name.trim()}>
                {c.save}
              </SaveButton>
            </FormActions>
          </form>
        ) : (
          <Settings>
            <SettingRow>
              <SettingLabel>{c.settingName}</SettingLabel>
              <SettingValue>{user.name}</SettingValue>
            </SettingRow>
            <SettingRow>
              <SettingLabel>{c.settingEmail}</SettingLabel>
              <SettingValue>{user.email}</SettingValue>
            </SettingRow>
            <SettingRow>
              <SettingLabel>{c.settingPhone}</SettingLabel>
              <SettingValue>{user.phone ?? '-'}</SettingValue>
            </SettingRow>
            <SettingRow>
              <SettingLabel>{c.settingAddress}</SettingLabel>
              <SettingValue>{user.address ?? '-'}</SettingValue>
            </SettingRow>
            <SettingRow>
              <SettingLabel>{c.settingMembership}</SettingLabel>
              <SettingValue>{membership}</SettingValue>
            </SettingRow>
          </Settings>
        )}

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

const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 20px;
`

const SectionNote = styled.p`
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const EmptyOrders = styled.p`
  padding: 24px 0;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
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

const WishCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const RemoveBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.brandRed};
    color: ${({ theme }) => theme.colors.brandRed};
  }
`

const WishLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const WishImage = styled.div`
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

const EditRow = styled(SettingRow)``

const SettingLabel = styled.span`
  width: 100px;
  flex-shrink: 0;
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

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
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

const ErrorText = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.brandRed};
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`

const SaveButton = styled.button`
  padding: 11px 24px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

const CancelButton = styled.button`
  padding: 11px 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
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
