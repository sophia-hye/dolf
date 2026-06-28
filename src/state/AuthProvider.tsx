import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  AuthContext,
  type AuthContextValue,
  type SignUpInput,
  type User,
} from '@/state/auth-context'
import { seedAccounts } from '@/data/seed-accounts'

const SESSION_KEY = 'dolf_auth'
const USERS_KEY = 'dolf_users'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readJson<User | null>(SESSION_KEY, null))
  const [registered, setRegistered] = useState<User[]>(() => readJson<User[]>(USERS_KEY, []))

  const persistSession = useCallback((next: User | null) => {
    setUser(next)
    if (next) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(next))
    } else {
      localStorage.removeItem(SESSION_KEY)
    }
  }, [])

  const login = useCallback(
    (email: string): User | null => {
      const normalized = email.trim().toLowerCase()
      const found =
        seedAccounts.find((a) => a.email.toLowerCase() === normalized) ??
        registered.find((a) => a.email.toLowerCase() === normalized)
      if (!found) return null
      persistSession(found)
      return found
    },
    [registered, persistSession],
  )

  const signUp = useCallback(
    (input: SignUpInput): User => {
      const newUser: User = {
        email: input.email.trim(),
        name: input.name.trim(),
        role: 'user',
        phone: input.phone,
        joinedAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      }
      const nextRegistered = [
        ...registered.filter((u) => u.email.toLowerCase() !== newUser.email.toLowerCase()),
        newUser,
      ]
      setRegistered(nextRegistered)
      localStorage.setItem(USERS_KEY, JSON.stringify(nextRegistered))
      persistSession(newUser)
      return newUser
    },
    [registered, persistSession],
  )

  const logout = useCallback(() => persistSession(null), [persistSession])

  const value = useMemo<AuthContextValue>(
    () => ({ user, login, signUp, logout }),
    [user, login, signUp, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
