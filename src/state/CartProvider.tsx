import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  CartContext,
  type AddPayload,
  type CartContextValue,
  type CartItem,
} from '@/state/cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((item: AddPayload, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      return [...prev, { ...item, quantity }]
    })
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      addItem,
    }),
    [items, addItem],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
