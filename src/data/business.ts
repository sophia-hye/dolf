// Business / seller disclosure required by Korean e-commerce law.
// Values below match the business registration (사업자등록증, 간이과세자, 2026-08-01 개업).
// TODO(사용자 입력 필요): phone(유선/안심번호), mailOrderNumber(통신판매업 신고 후 or 면제 기재).
export const businessInfo = {
  companyName: '도울프',
  owner: '김지혜',
  registrationNumber: '116-09-70051',
  // 간이과세자(직전기 공급대가 4,800만원 미만)는 통신판매업 신고 면제 대상일 수 있음.
  // 신고 시 번호로, 면제 시 '통신판매업 신고 면제(간이과세자)'로 교체.
  mailOrderNumber: '[통신판매업 신고번호 또는 "신고 면제(간이과세자)"]',
  address: '서울특별시 강동구 천호대로168다길 37-7, 301호(성내동)',
  phone: '[고객센터 전화번호 — 예: 0507-xxxx-xxxx]',
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
