import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth, type Role } from '@/state/auth-context'

interface ProtectedRouteProps {
  readonly children: ReactNode
  readonly role?: Role
}

// Guards routes by auth state and (optionally) role.
export function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/signin" replace />
  }
  if (role && user.role !== role) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}
