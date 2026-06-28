// Mock data for the Admin Console (KO, internal tool). No backend.

export type MemberGrade = 'VIP' | 'Gold' | 'Silver' | 'Basic'
export type MemberStatus = 'Active' | 'Inactive'

export interface AdminMember {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly joinedAt: string
  readonly orders: number
  readonly totalSpent: string
  readonly grade: MemberGrade
  readonly status: MemberStatus
}

export const adminMembers: AdminMember[] = [
  { id: 'M-1001', name: '김지혜', email: 'jihye@example.com', joinedAt: '2026-01-12', orders: 8, totalSpent: '$284', grade: 'VIP', status: 'Active' },
  { id: 'M-1002', name: '이서준', email: 'seojun@example.com', joinedAt: '2026-02-03', orders: 3, totalSpent: '$98', grade: 'Silver', status: 'Active' },
  { id: 'M-1003', name: '박민지', email: 'minji@example.com', joinedAt: '2026-02-21', orders: 0, totalSpent: '$0', grade: 'Basic', status: 'Inactive' },
  { id: 'M-1004', name: '정우성', email: 'woosung@example.com', joinedAt: '2026-03-15', orders: 12, totalSpent: '$476', grade: 'VIP', status: 'Active' },
  { id: 'M-1005', name: '최유나', email: 'yuna@example.com', joinedAt: '2026-04-02', orders: 5, totalSpent: '$152', grade: 'Gold', status: 'Active' },
  { id: 'M-1006', name: '한도윤', email: 'doyoon@example.com', joinedAt: '2026-05-19', orders: 1, totalSpent: '$38', grade: 'Basic', status: 'Active' },
  { id: 'M-1007', name: '오세훈', email: 'sehoon@example.com', joinedAt: '2026-05-28', orders: 2, totalSpent: '$66', grade: 'Silver', status: 'Active' },
  { id: 'M-1008', name: '강민서', email: 'minseo@example.com', joinedAt: '2026-06-10', orders: 4, totalSpent: '$134', grade: 'Gold', status: 'Active' },
]

export type OrderStatus = 'Pending' | 'Paid' | 'Shipped' | 'Cancelled'

export interface AdminOrder {
  readonly id: string
  readonly customer: string
  readonly product: string
  readonly date: string
  readonly amount: string
  readonly status: OrderStatus
  readonly overseas?: boolean
}

export const adminOrders: AdminOrder[] = [
  { id: 'DLF-2046', customer: '김지혜', product: 'Breathe + Tracker 세트', date: '2026-06-22', amount: '$68', status: 'Cancelled' },
  { id: 'DLF-2045', customer: '정우성', product: '2027 Poster (B2)', date: '2026-06-21', amount: '$32', status: 'Shipped', overseas: true },
  { id: 'DLF-2044', customer: '최유나', product: 'Topical Tracker (Foldout)', date: '2026-06-20', amount: '$16', status: 'Paid' },
  { id: 'DLF-2043', customer: '강민서', product: '2027 Calendar', date: '2026-06-19', amount: '$20', status: 'Pending' },
  { id: 'DLF-2042', customer: '이서준', product: 'Bible Reading Tracker', date: '2026-06-18', amount: '$30', status: 'Shipped' },
  { id: 'DLF-2041', customer: '오세훈', product: 'Breathe — Planner & Diary', date: '2026-06-17', amount: '$38', status: 'Shipped', overseas: true },
]

export interface AdminProductRow {
  readonly name: string
  readonly sku: string
  readonly price: string
  readonly stock: number
  readonly sales: number
}

export const adminProducts: AdminProductRow[] = [
  { name: 'Breathe — Planner & Diary', sku: 'DLF-BR-01', price: '$38', stock: 142, sales: 920 },
  { name: 'Bible Reading Tracker', sku: 'DLF-BT-01', price: '$30', stock: 210, sales: 780 },
  { name: '2027 Calendar', sku: 'DLF-CA-01', price: '$20', stock: 305, sales: 640 },
  { name: 'Topical Reading Tracker', sku: 'DLF-TT-01', price: 'from $12', stock: 188, sales: 470 },
  { name: '2027 Poster (B2)', sku: 'DLF-PO-01', price: '$32', stock: 96, sales: 330 },
]

export interface DashboardStat {
  readonly label: string
  readonly value: string
  readonly delta: string
}

export const dashboardStats: DashboardStat[] = [
  { label: '총 회원', value: '1,284', delta: '8.6% this month' },
  { label: '총 주문', value: '3,672', delta: '12.4% this month' },
  { label: '매출 (월)', value: '$48.2K', delta: '5.1% this month' },
  { label: '신규 가입', value: '86', delta: '최근 30일' },
]

export interface ChartBar {
  readonly label: string
  readonly value: number
  readonly highlight?: boolean
}

// Monthly revenue trend (relative values for bar heights).
export const revenueChart: ChartBar[] = [
  { label: 'Jan', value: 58 },
  { label: 'Feb', value: 72 },
  { label: 'Mar', value: 64 },
  { label: 'Apr', value: 86 },
  { label: 'May', value: 70 },
  { label: 'Jun', value: 100, highlight: true },
]

export interface ProductSale {
  readonly name: string
  readonly percent: number
}

export const productSales: ProductSale[] = [
  { name: 'Breathe', percent: 92 },
  { name: 'Bible Reading Tracker', percent: 78 },
  { name: '2027 Calendar', percent: 64 },
  { name: 'Topical Tracker', percent: 47 },
  { name: '2027 Poster', percent: 33 },
]

export function getMemberById(id: string): AdminMember | undefined {
  return adminMembers.find((m) => m.id === id)
}

export function getOrderById(id: string): AdminOrder | undefined {
  return adminOrders.find((o) => o.id === id)
}
