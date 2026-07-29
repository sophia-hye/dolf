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
  readonly password: string
  readonly phone?: string
  readonly country?: string
  // UI locale at signup; stored in user metadata so auth emails can localize.
  readonly locale?: string
}

export interface AuthResult {
  readonly error: string | null
  readonly user?: User
}

export interface AuthContextValue {
  readonly user: User | null
  // True while the initial Supabase session is being resolved.
  readonly loading: boolean
  readonly signIn: (email: string, password: string) => Promise<AuthResult>
  readonly signUp: (input: SignUpInput) => Promise<AuthResult>
  readonly signOut: () => Promise<void>
  // Sends a localized password-reset email with a link back to /reset-password.
  readonly resetPassword: (email: string, locale?: string) => Promise<AuthResult>
  // Updates the current (recovery) session's password.
  readonly updatePassword: (password: string) => Promise<AuthResult>
  // Updates the signed-in user's editable profile fields (name/phone/address).
  readonly updateProfile: (input: ProfileInput) => Promise<AuthResult>
}

export interface ProfileInput {
  readonly name: string
  readonly phone?: string
  readonly address?: string
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
