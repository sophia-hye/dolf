import type { User } from '@/state/auth-context'

// Seed accounts from the Figma Auth & Role Routing spec (node 3252:11).
// Mock-only: passwords are not stored. Login matches by email.
export const seedAccounts: User[] = [
  {
    email: 'admin@dolf.official',
    name: 'DoLF Admin',
    role: 'admin',
  },
  {
    email: 'jihye@example.com',
    name: '김지혜',
    role: 'user',
    joinedAt: '2025.01.12',
    phone: '010-1234-5678',
    address: '서울특별시 마포구 양화로 123, 4층',
    membership: 'VIP',
  },
]
