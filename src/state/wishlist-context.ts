import { createContext, useContext } from 'react'

export interface WishlistContextValue {
  readonly slugs: string[]
  readonly count: number
  readonly has: (slug: string) => boolean
  readonly toggle: (slug: string) => void
  readonly remove: (slug: string) => void
}

export const WishlistContext = createContext<WishlistContextValue | null>(null)

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext)
  if (!ctx) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return ctx
}
