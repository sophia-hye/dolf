// Business / seller disclosure required by Korean e-commerce law.
// Placeholders — replace with the real values once the business registration
// (사업자등록) and mail-order sales report (통신판매업 신고) are issued.
export const businessInfo = {
  companyName: 'DoLF (돌프)',
  owner: '김지혜',
  registrationNumber: '[사업자등록번호 000-00-00000]',
  mailOrderNumber: '[통신판매업 신고번호 0000-지역-0000]',
  address: '[사업장 주소]',
  phone: '[고객센터 전화번호]',
  email: 'hello@dolfstory.com',
  hostingProvider: 'Vercel Inc.',
  privacyOfficer: '[개인정보 보호책임자명]',
} as const

// Legal pages the footer links to.
export const legalLinks = [
  { to: '/terms', label: '이용약관' },
  { to: '/privacy', label: '개인정보처리방침' },
  { to: '/refund', label: '환불·교환/반품 안내' },
] as const
