import { createContext, useContext } from 'react'

export type Role = 'admin' | 'user'

export interface User {
  readonly email: string
  readonly name: string
  readonly role: Role
  readonly joinedAt?: string
  readonly phone?: string
  readonly address?: string
  readonly membership?: string
}

export interface SignUpInput {
  readonly name: string
  readonly email: string
  readonly phone?: string
}

export interface AuthContextValue {
  readonly user: User | null
  // Mock auth: matches by email against seed + registered accounts.
  // Password is never stored or validated (no backend).
  readonly login: (email: string) => User | null
  readonly signUp: (input: SignUpInput) => User
  readonly logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
