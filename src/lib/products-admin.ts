import { supabase } from '@/lib/supabase'

// Operational overrides stored per product slug. Null price = use the catalog
// price. Rows are created on demand when an admin first edits a product.
export interface ProductOverride {
  readonly slug: string
  readonly name_ko: string | null
  readonly name_en: string | null
  readonly name_ja: string | null
  readonly desc_ko: string | null
  readonly desc_en: string | null
  readonly desc_ja: string | null
  readonly badge: string | null
  readonly price_krw: number | null
  readonly price_usd: number | null
  readonly price_jpy: number | null
  readonly stock: number
  readonly low_stock_threshold: number
  readonly published: boolean
}

export interface ProductPatch {
  readonly name_ko?: string | null
  readonly name_en?: string | null
  readonly name_ja?: string | null
  readonly desc_ko?: string | null
  readonly desc_en?: string | null
  readonly desc_ja?: string | null
  readonly badge?: string | null
  readonly price_krw?: number | null
  readonly price_usd?: number | null
  readonly price_jpy?: number | null
  readonly stock?: number
  readonly low_stock_threshold?: number
  readonly published?: boolean
}

function num(v: number | string | null): number | null {
  return v === null || v === undefined ? null : Number(v)
}

function str(v: unknown): string | null {
  return v === null || v === undefined || v === '' ? null : String(v)
}

// Map of slug -> override. Resilient: returns empty on error (e.g. before the
// products table is created), so the admin page still renders catalog defaults.
export async function fetchProductOverrides(): Promise<Record<string, ProductOverride>> {
  if (!supabase) return {}
  const { data, error } = await supabase
    .from('products')
    .select(
      'slug, name_ko, name_en, name_ja, desc_ko, desc_en, desc_ja, badge, price_krw, price_usd, price_jpy, stock, low_stock_threshold, published',
    )
  if (error || !data) return {}
  const out: Record<string, ProductOverride> = {}
  for (const r of data as Array<Record<string, number | string | null>>) {
    const slug = String(r.slug)
    out[slug] = {
      slug,
      name_ko: str(r.name_ko),
      name_en: str(r.name_en),
      name_ja: str(r.name_ja),
      desc_ko: str(r.desc_ko),
      desc_en: str(r.desc_en),
      desc_ja: str(r.desc_ja),
      badge: str(r.badge),
      price_krw: num(r.price_krw),
      price_usd: num(r.price_usd),
      price_jpy: num(r.price_jpy),
      stock: Number(r.stock ?? 0),
      low_stock_threshold: Number(r.low_stock_threshold ?? 0),
      published: Boolean(r.published),
    }
  }
  return out
}

// Units sold per slug, aggregated from order items (cancelled orders excluded).
export async function fetchSalesBySlug(): Promise<Record<string, number>> {
  if (!supabase) return {}
  const { data, error } = await supabase
    .from('order_items')
    .select('product_slug, quantity, orders(status)')
  if (error || !data) return {}
  const out: Record<string, number> = {}
  for (const r of data as Array<{
    product_slug: string
    quantity: number | string
    orders: { status: string } | { status: string }[] | null
  }>) {
    const order = Array.isArray(r.orders) ? r.orders[0] : r.orders
    if (order?.status === 'cancelled') continue
    out[r.product_slug] = (out[r.product_slug] ?? 0) + Number(r.quantity)
  }
  return out
}

// Create or update a product's operational row (admin only, per RLS).
export async function upsertProduct(
  slug: string,
  patch: ProductPatch,
): Promise<{ error: string | null }> {
  if (!supabase) return { error: 'Supabase is not configured.' }
  const { error } = await supabase
    .from('products')
    .upsert({ slug, ...patch, updated_at: new Date().toISOString() }, { onConflict: 'slug' })
  return { error: error ? error.message : null }
}
