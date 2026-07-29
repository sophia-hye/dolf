import { LegalPage, type LegalDoc } from '@/pages/legal/LegalPage'
import { businessInfo } from '@/data/business'

const doc: LegalDoc = {
  title: '개인정보처리방침',
  updated: '[YYYY.MM.DD]',
  intro: `${businessInfo.companyName}(이하 "회사")는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 방침은 회사가 어떤 개인정보를 수집·이용하며, 이를 어떻게 보호하는지 설명합니다.`,
  sections: [
    {
      heading: '1. 수집하는 개인정보 항목',
      paragraphs: [
        '① 회원가입: 이름, 이메일, 비밀번호, (선택) 전화번호, 국가/지역',
        '② 주문/결제: 수령인, 배송지 주소, 연락처, 결제 정보(결제는 결제대행사(PG)를 통해 처리되며 회사는 카드번호 등 민감 결제정보를 저장하지 않습니다)',
        '③ 자동 수집: 접속 로그, 쿠키, 서비스 이용 기록',
      ],
    },
    {
      heading: '2. 개인정보의 수집 및 이용 목적',
      paragraphs: [
        '회원 관리 및 본인 확인, 주문·결제·배송, 고객 문의 응대, 서비스 개선 및 안내를 위해 이용합니다.',
      ],
    },
    {
      heading: '3. 개인정보의 보유 및 이용 기간',
      paragraphs: [
        '① 원칙적으로 수집·이용 목적 달성 시 지체 없이 파기합니다.',
        '② 관련 법령에 따라 일정 기간 보관합니다. (예: 계약·청약철회 기록 5년, 대금결제 및 재화공급 기록 5년, 소비자 불만·분쟁처리 기록 3년 — 전자상거래법)',
      ],
    },
    {
      heading: '4. 개인정보의 제3자 제공',
      paragraphs: [
        '회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 배송·결제 이행을 위해 필요한 최소한의 정보를 배송업체 및 결제대행사에 제공합니다.',
      ],
    },
    {
      heading: '5. 개인정보 처리의 위탁',
      paragraphs: [
        '① 결제 처리: [결제대행사(PG)명]',
        '② 배송: [택배사 / 우체국(해외 K-Packet)]',
        '③ 인프라/호스팅: ' + businessInfo.hostingProvider,
      ],
    },
    {
      heading: '6. 이용자의 권리',
      paragraphs: [
        '이용자는 언제든지 자신의 개인정보를 조회·수정·삭제하거나 처리 정지를 요청할 수 있으며, 회원 탈퇴를 통해 개인정보 이용에 대한 동의를 철회할 수 있습니다.',
      ],
    },
    {
      heading: '7. 쿠키(Cookie)의 운용',
      paragraphs: [
        '회사는 서비스 제공을 위해 쿠키를 사용할 수 있으며, 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.',
      ],
    },
    {
      heading: '8. 개인정보 보호책임자',
      paragraphs: [
        `성명: ${businessInfo.privacyOfficer}`,
        `연락처: ${businessInfo.email} / ${businessInfo.phone}`,
      ],
    },
    {
      heading: '부칙',
      paragraphs: ['본 방침은 [YYYY.MM.DD]부터 시행합니다.'],
    },
  ],
}

export function PrivacyPage() {
  return <LegalPage doc={doc} />
}
