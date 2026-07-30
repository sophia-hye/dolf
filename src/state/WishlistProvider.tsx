import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  WishlistContext,
  type WishlistContextValue,
} from '@/state/wishlist-context'
import { useAuth } from '@/state/auth-context'
import { fetchDbWishlist, saveDbWishlist, mergeWishlists } from '@/lib/user-wishlist'

const STORAGE_KEY = 'dolf.wishlist'

function loadWishlist(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === 'string') : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const userId = user?.id ?? null
  const [slugs, setSlugs] = useState<string[]>(loadWishlist)
  const [dbSynced, setDbSynced] = useState(false)
  const syncedUser = useRef<string | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
    } catch {
      /* ignore */
    }
  }, [slugs])

  useEffect(() => {
    if (!userId) {
      setDbSynced(false)
      syncedUser.current = null
      return
    }
    let active = true
    setDbSynced(false)
    void fetchDbWishlist(userId).then((dbSlugs) => {
      if (!active) return
      setSlugs((local) => mergeWishlists(dbSlugs, local))
      syncedUser.current = userId
      setDbSynced(true)
    })
    return () => {
      active = false
    }
  }, [userId])

  useEffect(() => {
    if (!userId || !dbSynced || syncedUser.current !== userId) return
    void saveDbWishlist(userId, slugs)
  }, [slugs, userId, dbSynced])

  const has = useCallback((slug: string) => slugs.includes(slug), [slugs])
  const toggle = useCallback((slug: string) => {
    setSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }, [])
  const remove = useCallback((slug: string) => {
    setSlugs((prev) => prev.filter((s) => s !== slug))
  }, [])

  const value = useMemo<WishlistContextValue>(
    () => ({ slugs, count: slugs.length, has, toggle, remove }),
    [slugs, has, toggle, remove],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
