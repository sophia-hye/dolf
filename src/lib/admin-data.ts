import { supabase } from '@/lib/supabase'
import { formatMoney, type OrderStatus } from '@/lib/orders'

// Admin analytics + member list built from the profiles and orders tables.
// Revenue figures are KRW-based (domestic launch); non-KRW orders are counted
// but excluded from the won totals. Cancelled orders are excluded from revenue.

interface RawProfile {
  id: string
  name: string | null
  email: string | null
  country: string | null
  grade: string | null
  status: string | null
  created_at: string | null
}

interface RawOrderItem {
  product_slug: string
  name: string
  quantity: number | string
}

interface RawOrder {
  id: string
  user_id: string
  status: OrderStatus
  currency: string
  total: number | string
  created_at: string
  order_items: RawOrderItem[] | null
}

async function getProfiles(): Promise<RawProfile[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, email, country, grade, status, created_at')
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return data as unknown as RawProfile[]
}

async function getOrders(): Promise<RawOrder[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('orders')
    .select(
      'id, user_id, status, currency, total, created_at, order_items ( product_slug, name, quantity )',
    )
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return (data as unknown as RawOrder[]).map((o) => ({ ...o, total: Number(o.total) }))
}

// ─── Members ─────────────────────────────────────────────────────────────────

export interface AdminMemberRow {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly country: string
  readonly joinedAt: string
  readonly grade: string
  readonly status: string
  readonly orders: number
  readonly totalSpent: string
}

export async function fetchMembers(): Promise<AdminMemberRow[]> {
  const [profiles, orders] = await Promise.all([getProfiles(), getOrders()])
  const byUser = new Map<string, { count: number; krw: number }>()
  for (const o of orders) {
    if (o.status === 'cancelled') continue
    const agg = byUser.get(o.user_id) ?? { count: 0, krw: 0 }
    agg.count += 1
    if (o.currency === 'KRW') agg.krw += Number(o.total)
    byUser.set(o.user_id, agg)
  }
  return profiles.map((p) => {
    const agg = byUser.get(p.id) ?? { count: 0, krw: 0 }
    return {
      id: p.id,
      name: p.name || '—',
      email: p.email || '—',
      country: p.country || '—',
      joinedAt: (p.created_at ?? '').slice(0, 10),
      grade: p.grade || 'Basic',
      status: p.status || 'Active',
      orders: agg.count,
      totalSpent: formatMoney(agg.krw, 'KRW'),
    }
  })
}

export interface MemberDetail {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly country: string
  readonly joinedAt: string
  readonly grade: string
  readonly status: string
  readonly orderCount: number
  readonly totalSpent: string
  readonly orders: ReadonlyArray<{
    readonly id: string
    readonly product: string
    readonly amount: string
    readonly status: OrderStatus
    readonly date: string
  }>
}

function productLabel(items: RawOrderItem[] | null): string {
  const first = items?.[0]
  if (!first) return '—'
  const extra = (items?.length ?? 0) - 1
  return extra > 0 ? `${first.name} +${extra}` : first.name
}

export async function fetchMemberDetail(id: string): Promise<MemberDetail | null> {
  const [profiles, orders] = await Promise.all([getProfiles(), getOrders()])
  const p = profiles.find((x) => x.id === id)
  if (!p) return null
  const mine = orders.filter((o) => o.user_id === id)
  const krw = mine
    .filter((o) => o.status !== 'cancelled' && o.currency === 'KRW')
    .reduce((s, o) => s + Number(o.total), 0)
  return {
    id: p.id,
    name: p.name || '—',
    email: p.email || '—',
    country: p.country || '—',
    joinedAt: (p.created_at ?? '').slice(0, 10),
    grade: p.grade || 'Basic',
    status: p.status || 'Active',
    orderCount: mine.filter((o) => o.status !== 'cancelled').length,
    totalSpent: formatMoney(krw, 'KRW'),
    orders: mine.slice(0, 8).map((o) => ({
      id: o.id,
      product: productLabel(o.order_items),
      amount: formatMoney(Number(o.total), o.currency),
      status: o.status,
      date: o.created_at.slice(0, 10),
    })),
  }
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export interface DashboardStat {
  readonly label: string
  readonly value: string
  readonly delta: string
}

export interface DashboardBar {
  readonly label: string
  readonly value: number
  readonly highlight?: boolean
}

export interface DashboardProductSale {
  readonly name: string
  readonly percent: number
}

export interface DashboardRecentOrder {
  readonly id: string
  readonly product: string
  readonly status: OrderStatus
}

export interface DashboardRecentMember {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly joinedAt: string
}

export interface DashboardData {
  readonly stats: DashboardStat[]
  readonly monthly: DashboardBar[]
  readonly productSales: DashboardProductSale[]
  readonly recentOrders: DashboardRecentOrder[]
  readonly recentMembers: DashboardRecentMember[]
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export async function fetchDashboard(): Promise<DashboardData> {
  const [profiles, orders] = await Promise.all([getProfiles(), getOrders()])
  const paid = orders.filter((o) => o.status !== 'cancelled')

  const revenueKrw = paid
    .filter((o) => o.currency === 'KRW')
    .reduce((s, o) => s + Number(o.total), 0)

  const now = new Date()
  const thisMonthKey = `${now.getFullYear()}-${now.getMonth()}`
  const newThisMonth = profiles.filter((p) => {
    if (!p.created_at) return false
    const d = new Date(p.created_at)
    return `${d.getFullYear()}-${d.getMonth()}` === thisMonthKey
  }).length

  const stats: DashboardStat[] = [
    { label: '총 회원', value: String(profiles.length), delta: `이번 달 +${newThisMonth}` },
    { label: '총 주문', value: String(paid.length), delta: `취소 제외` },
    { label: '매출 (₩)', value: formatMoney(revenueKrw, 'KRW'), delta: '국내(원화) 기준' },
    { label: '신규 가입', value: String(newThisMonth), delta: '이번 달' },
  ]

  // Monthly revenue (KRW) for the last 6 months.
  const buckets: { key: string; label: string; sum: number }[] = []
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    buckets.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: MONTH_LABELS[d.getMonth()], sum: 0 })
  }
  for (const o of paid) {
    if (o.currency !== 'KRW') continue
    const d = new Date(o.created_at)
    const b = buckets.find((x) => x.key === `${d.getFullYear()}-${d.getMonth()}`)
    if (b) b.sum += Number(o.total)
  }
  const maxSum = Math.max(1, ...buckets.map((b) => b.sum))
  const monthly: DashboardBar[] = buckets.map((b, i) => ({
    label: b.label,
    value: Math.round((b.sum / maxSum) * 100),
    highlight: i === buckets.length - 1,
  }))

  // Product sales share by units sold.
  const units = new Map<string, { name: string; qty: number }>()
  for (const o of paid) {
    for (const it of o.order_items ?? []) {
      const cur = units.get(it.product_slug) ?? { name: it.name, qty: 0 }
      cur.qty += Number(it.quantity)
      units.set(it.product_slug, cur)
    }
  }
  const sorted = [...units.values()].sort((a, b) => b.qty - a.qty).slice(0, 5)
  const maxQty = Math.max(1, ...sorted.map((s) => s.qty))
  const productSales: DashboardProductSale[] = sorted.map((s) => ({
    name: s.name,
    percent: Math.round((s.qty / maxQty) * 100),
  }))

  const recentOrders: DashboardRecentOrder[] = orders.slice(0, 5).map((o) => ({
    id: o.id,
    product: productLabel(o.order_items),
    status: o.status,
  }))

  const recentMembers: DashboardRecentMember[] = profiles.slice(0, 5).map((p) => ({
    id: p.id,
    name: p.name || '—',
    email: p.email || '—',
    joinedAt: (p.created_at ?? '').slice(0, 10),
  }))

  return { stats, monthly, productSales, recentOrders, recentMembers }
}

// ─── Customer insights ───────────────────────────────────────────────────────

export interface InsightBar {
  readonly label: string
  readonly percent: number
  readonly highlight?: boolean
}

export interface InsightsData {
  readonly kpis: DashboardStat[]
  readonly country: InsightBar[]
  readonly grade: InsightBar[]
  readonly insights: string[]
}

const COUNTRY_LABEL: Record<string, string> = {
  KR: '🇰🇷 대한민국',
  US: '🇺🇸 미국',
  JP: '🇯🇵 일본',
}

const GRADE_ORDER = ['VIP', 'Gold', 'Silver', 'Basic']

function pct(n: number, total: number): number {
  return total > 0 ? Math.round((n / total) * 100) : 0
}

export async function fetchInsights(): Promise<InsightsData> {
  const [profiles, orders] = await Promise.all([getProfiles(), getOrders()])
  const paid = orders.filter((o) => o.status !== 'cancelled')
  const total = profiles.length

  // Buyers and repurchase rate.
  const ordersByUser = new Map<string, number>()
  for (const o of paid) ordersByUser.set(o.user_id, (ordersByUser.get(o.user_id) ?? 0) + 1)
  const buyers = ordersByUser.size
  const repeatBuyers = [...ordersByUser.values()].filter((n) => n >= 2).length
  const repurchaseRate = buyers > 0 ? Math.round((repeatBuyers / buyers) * 100) : 0

  // AOV (KRW).
  const krwOrders = paid.filter((o) => o.currency === 'KRW')
  const krwRevenue = krwOrders.reduce((s, o) => s + Number(o.total), 0)
  const aov = krwOrders.length > 0 ? Math.round(krwRevenue / krwOrders.length) : 0

  const kpis: DashboardStat[] = [
    { label: '총 고객', value: String(total), delta: '가입 회원' },
    { label: '구매 고객', value: String(buyers), delta: `전환 ${pct(buyers, total)}%` },
    { label: '재구매율', value: `${repurchaseRate}%`, delta: '2회 이상 구매' },
    { label: '평균 주문금액', value: formatMoney(aov, 'KRW'), delta: '국내(₩) 기준' },
  ]

  // Country distribution.
  const countryCount = new Map<string, number>()
  for (const p of profiles) {
    const key = p.country && COUNTRY_LABEL[p.country] ? p.country : '기타'
    countryCount.set(key, (countryCount.get(key) ?? 0) + 1)
  }
  const country: InsightBar[] = [...countryCount.entries()]
    .map(([code, n]) => ({ label: COUNTRY_LABEL[code] ?? '기타', percent: pct(n, total), count: n }))
    .sort((a, b) => b.percent - a.percent)
    .map((b, i) => ({ label: b.label, percent: b.percent, highlight: i === 0 }))

  // Grade distribution.
  const gradeCount = new Map<string, number>()
  for (const p of profiles) gradeCount.set(p.grade || 'Basic', (gradeCount.get(p.grade || 'Basic') ?? 0) + 1)
  const grade: InsightBar[] = GRADE_ORDER.filter((g) => gradeCount.has(g)).map((g, i) => ({
    label: g,
    percent: pct(gradeCount.get(g) ?? 0, total),
    highlight: i === 0,
  }))

  // Derived text insights.
  const krShare = pct(countryCount.get('KR') ?? 0, total)
  const insights: string[] = [
    `전체 ${total}명 중 구매 고객 ${buyers}명(전환 ${pct(buyers, total)}%).`,
    `국내 ${krShare}% · 해외 ${100 - krShare}% 비중입니다.`,
    `재구매율 ${repurchaseRate}% (2회 이상 구매 고객 기준).`,
    `평균 주문금액은 ${formatMoney(aov, 'KRW')}입니다(국내 주문 기준).`,
  ]

  return { kpis, country, grade, insights }
}
