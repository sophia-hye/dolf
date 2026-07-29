import { createContext, useContext } from 'react'

// The cart stores only a slug + quantity. Display data (name, price, image)
// is derived from the product catalog for the current locale at render time,
// so prices always match the active language and never go stale.
export interface CartLine {
  readonly slug: string
  readonly quantity: number
}

export interface CartContextValue {
  readonly items: CartLine[]
  readonly count: number
  readonly addItem: (slug: string, quantity?: number) => void
  readonly removeItem: (slug: string) => void
  readonly setQuantity: (slug: string, quantity: number) => void
  readonly clear: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
