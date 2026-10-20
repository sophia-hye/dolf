// Business / seller disclosure required by Korean e-commerce law.
// Values below match the business registration (사업자등록증, 간이과세자, 2026-08-01 개업).
export const businessInfo = {
  companyName: '도울프',
  owner: '김지혜',
  registrationNumber: '116-09-70051',
  mailOrderNumber: '2026-서울강동-1459',
  address: '서울특별시 강동구 천호대로168다길 37-7, 301호(성내동)',
  phone: '010-6291-8111',
  email: 'hello@dolfstory.com',
  hostingProvider: 'Vercel Inc.',
  privacyOfficer: '김지혜',
} as const

// Legal pages the footer links to.
export const legalLinks = [
  { to: '/terms', label: '이용약관' },
  { to: '/privacy', label: '개인정보처리방침' },
  { to: '/refund', label: '환불·교환/반품 안내' },
] as const

// Official Instagram profile.
export const instagramUrl = 'https://www.instagram.com/dolf._official/'
