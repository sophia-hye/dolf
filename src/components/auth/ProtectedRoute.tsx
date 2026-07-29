import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth, type Role } from '@/state/auth-context'

interface ProtectedRouteProps {
  readonly children: ReactNode
  readonly role?: Role
}

// Guards routes by auth state and (optionally) role.
export function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  // Wait for the initial session to resolve before deciding to redirect.
  if (loading) {
    return null
  }
  if (!user) {
    return <Navigate to="/signin" replace />
  }
  if (role && user.role !== role) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}
