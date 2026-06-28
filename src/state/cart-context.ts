import { createContext, useContext } from 'react'

export interface CartItem {
  readonly slug: string
  readonly name: string
  readonly price: string
  readonly image: string
  readonly quantity: number
}

export type AddPayload = Omit<CartItem, 'quantity'>

export interface CartContextValue {
  readonly items: CartItem[]
  readonly count: number
  readonly addItem: (item: AddPayload, quantity?: number) => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
