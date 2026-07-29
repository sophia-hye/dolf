import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ProductsContext,
  type ProductsContextValue,
} from '@/state/products-context'
import {
  fetchProductOverrides,
  type ProductOverride,
} from '@/lib/products-admin'

// Loads product overrides once and provides them to the storefront. Falls back
// to no overrides (catalog defaults) when Supabase isn't configured or during
// prerender, so pages always render.
export function ProductsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, ProductOverride>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    void fetchProductOverrides().then((data) => {
      if (!active) return
      setOverrides(data)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  const value = useMemo<ProductsContextValue>(
    () => ({ overrides, loading }),
    [overrides, loading],
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
