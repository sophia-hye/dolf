import { createContext, useContext } from 'react'
import type { ProductOverride } from '@/lib/products-admin'
import { DEFAULT_SETTINGS, type StoreSettings } from '@/lib/settings'

// Product operational data (price overrides, published) and store settings
// (shipping policy) loaded from Supabase and shared across the storefront so
// admin changes reflect for customers.
export interface ProductsContextValue {
  readonly overrides: Record<string, ProductOverride>
  readonly settings: StoreSettings
  readonly loading: boolean
}

export const ProductsContext = createContext<ProductsContextValue>({
  overrides: {},
  settings: DEFAULT_SETTINGS,
  loading: false,
})

export function useProductOverrides(): ProductsContextValue {
  return useContext(ProductsContext)
}
