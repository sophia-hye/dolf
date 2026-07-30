import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ProductsContext,
  type ProductsContextValue,
} from '@/state/products-context'
import {
  fetchProductOverrides,
  type ProductOverride,
} from '@/lib/products-admin'
import { fetchSettings, DEFAULT_SETTINGS, type StoreSettings } from '@/lib/settings'

// Loads product overrides + store settings once and provides them to the
// storefront. Falls back to defaults (catalog prices, built-in shipping) when
// Supabase isn't configured or during prerender, so pages always render.
export function ProductsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, ProductOverride>>({})
  const [settings, setSettings] = useState<StoreSettings>(DEFAULT_SETTINGS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    void Promise.all([fetchProductOverrides(), fetchSettings()]).then(
      ([ov, st]) => {
        if (!active) return
        setOverrides(ov)
        setSettings(st)
        setLoading(false)
      },
    )
    return () => {
      active = false
    }
  }, [])

  const value = useMemo<ProductsContextValue>(
    () => ({ overrides, settings, loading }),
    [overrides, settings, loading],
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
