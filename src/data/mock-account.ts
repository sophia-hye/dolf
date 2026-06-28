// Demo order history & wishlist for the My Page mock account (김지혜).
// Static placeholder data — no backend.

export interface MockOrder {
  readonly id: string
  readonly date: string
  readonly title: string
  readonly status: string
  readonly amount: string
}

export const mockOrders: MockOrder[] = [
  {
    id: 'DLF-1043',
    date: '2026-05-14',
    title: 'Breathe + Tracker 세트',
    status: '배송 완료',
    amount: '$68',
  },
  {
    id: 'DLF-1021',
    date: '2026-03-02',
    title: '2027 Calendar',
    status: '배송 완료',
    amount: '$20',
  },
  {
    id: 'DLF-0998',
    date: '2026-01-20',
    title: 'Bible Reading Tracker',
    status: '배송 완료',
    amount: '$30',
  },
]

// Wishlist references product slugs (resolved against the product catalog).
export const mockWishlistSlugs: string[] = ['poster', 'topical', 'breathe', 'calendar']
