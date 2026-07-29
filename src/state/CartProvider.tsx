import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  CartContext,
  type CartContextValue,
  type CartLine,
} from '@/state/cart-context'

const STORAGE_KEY = 'dolf.cart'

function loadCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter(
        (l): l is CartLine =>
          !!l &&
          typeof (l as CartLine).slug === 'string' &&
          typeof (l as CartLine).quantity === 'number',
      )
      .map((l) => ({ slug: l.slug, quantity: Math.max(1, Math.floor(l.quantity)) }))
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>(loadCart)

  // Persist across reloads.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable — ignore */
    }
  }, [items])

  const addItem = useCallback((slug: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      return [...prev, { slug, quantity }]
    })
  }, [])

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }, [])

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, quantity } : i)),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      addItem,
      removeItem,
      setQuantity,
      clear,
    }),
    [items, addItem, removeItem, setQuantity, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
