import { createContext, useContext } from 'react'
import type { ProductOverride } from '@/lib/products-admin'

// Product operational data (price overrides, published) loaded from Supabase and
// shared across the storefront so admin changes reflect for customers.
export interface ProductsContextValue {
  readonly overrides: Record<string, ProductOverride>
  readonly loading: boolean
}

export const ProductsContext = createContext<ProductsContextValue>({
  overrides: {},
  loading: false,
})

export function useProductOverrides(): ProductsContextValue {
  return useContext(ProductsContext)
}
