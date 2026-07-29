import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import {
  AuthContext,
  type AuthContextValue,
  type AuthResult,
  type ProfileInput,
  type Role,
  type SignUpInput,
  type User,
} from '@/state/auth-context'
import { supabase } from '@/lib/supabase'

interface ProfileRow {
  name: string | null
  role: string | null
  phone: string | null
  address: string | null
  grade: string | null
  created_at: string | null
}

function formatJoined(iso?: string | null): string | undefined {
  return iso ? iso.slice(0, 10).replace(/-/g, '.') : undefined
}

// Combine the Supabase auth user with its profile row into the app User.
async function buildUser(su: SupabaseUser): Promise<User> {
  let profile: ProfileRow | null = null
  if (supabase) {
    const { data } = await supabase
      .from('profiles')
      .select('name, role, phone, address, grade, created_at')
      .eq('id', su.id)
      .maybeSingle<ProfileRow>()
    profile = data
  }
  const meta = (su.user_metadata ?? {}) as Record<string, string | undefined>
  return {
    email: su.email ?? '',
    name: profile?.name || meta.name || '',
    role: (profile?.role === 'admin' ? 'admin' : 'user') as Role,
    phone: profile?.phone || meta.phone || undefined,
    address: profile?.address || undefined,
    membership: profile?.grade || undefined,
    joinedAt: formatJoined(profile?.created_at ?? su.created_at),
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(!!supabase)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    let active = true

    void supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return
      if (data.session?.user) setUser(await buildUser(data.session.user))
      setLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!active) return
        setUser(session?.user ? await buildUser(session.user) : null)
      },
    )

    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const signIn = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      if (!supabase) return { error: 'Supabase is not configured.' }
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })
      if (error) return { error: error.message }
      const u = data.user ? await buildUser(data.user) : undefined
      if (u) setUser(u)
      return { error: null, user: u }
    },
    [],
  )

  const signUp = useCallback(
    async (input: SignUpInput): Promise<AuthResult> => {
      if (!supabase) return { error: 'Supabase is not configured.' }
      const { data, error } = await supabase.auth.signUp({
        email: input.email.trim(),
        password: input.password,
        options: {
          data: {
            name: input.name.trim(),
            phone: input.phone ?? '',
            country: input.country ?? '',
            locale: input.locale ?? '',
          },
        },
      })
      if (error) return { error: error.message }
      // With email confirmation off, signUp returns a session and logs in.
      const u = data.user ? await buildUser(data.user) : undefined
      if (u && data.session) setUser(u)
      return { error: null, user: u }
    },
    [],
  )

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut()
    setUser(null)
  }, [])

  const resetPassword = useCallback(
    async (email: string, locale?: string): Promise<AuthResult> => {
      if (!supabase) return { error: 'Supabase is not configured.' }
      const redirectTo =
        typeof window !== 'undefined'
          ? `${window.location.origin}${import.meta.env.BASE_URL}reset-password`
          : undefined
      // Custom Edge Function mints the recovery link and sends a localized email
      // via Resend, so the message matches the language the visitor is viewing.
      const { error } = await supabase.functions.invoke('send-reset-email', {
        body: { email: email.trim(), locale, redirectTo },
      })
      return { error: error ? error.message : null }
    },
    [],
  )

  const updatePassword = useCallback(
    async (password: string): Promise<AuthResult> => {
      if (!supabase) return { error: 'Supabase is not configured.' }
      const { data, error } = await supabase.auth.updateUser({ password })
      if (error) return { error: error.message }
      const u = data.user ? await buildUser(data.user) : undefined
      if (u) setUser(u)
      return { error: null, user: u }
    },
    [],
  )

  const updateProfile = useCallback(
    async (input: ProfileInput): Promise<AuthResult> => {
      if (!supabase) return { error: 'Supabase is not configured.' }
      const { data: auth } = await supabase.auth.getUser()
      const id = auth.user?.id
      if (!id) return { error: 'Not signed in.' }
      const name = input.name.trim()
      const phone = input.phone?.trim() || null
      const address = input.address?.trim() || null
      const { error } = await supabase
        .from('profiles')
        .update({ name, phone, address })
        .eq('id', id)
      if (error) return { error: error.message }
      const next = user
        ? { ...user, name, phone: phone ?? undefined, address: address ?? undefined }
        : user
      if (next) setUser(next)
      return { error: null, user: next ?? undefined }
    },
    [user],
  )

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      signIn,
      signUp,
      signOut,
      resetPassword,
      updatePassword,
      updateProfile,
    }),
    [
      user,
      loading,
      signIn,
      signUp,
      signOut,
      resetPassword,
      updatePassword,
      updateProfile,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
