import { LegalPage, type LegalDoc } from '@/pages/legal/LegalPage'
import { businessInfo } from '@/data/business'

const doc: LegalDoc = {
  title: '환불·교환/반품 안내',
  updated: '[YYYY.MM.DD]',
  intro:
    '고객님의 소중한 주문에 감사드립니다. 아래는 청약철회, 교환 및 반품에 관한 안내입니다. 관련 법령(전자상거래법)에 따라 운영됩니다.',
  sections: [
    {
      heading: '1. 청약철회(반품) 기간',
      paragraphs: [
        '① 단순 변심에 의한 반품은 상품 수령 후 7일 이내 신청할 수 있습니다.',
        '② 상품이 표시·광고와 다르거나 하자가 있는 경우, 이를 안 날 또는 알 수 있었던 날부터 30일 이내(수령 후 3개월 이내) 청약철회가 가능합니다.',
      ],
    },
    {
      heading: '2. 교환·반품 절차',
      paragraphs: [
        `① ${businessInfo.email} 또는 고객센터(${businessInfo.phone})로 주문번호와 사유를 알려 주세요.`,
        '② 안내에 따라 상품을 반송해 주시면, 상품 확인 후 환불 또는 교환을 진행합니다.',
        '③ 반송지: [반품 주소]',
      ],
    },
    {
      heading: '3. 반품 배송비 부담',
      paragraphs: [
        '① 단순 변심: 왕복 배송비는 고객 부담입니다.',
        '② 상품 하자·오배송: 배송비는 회사가 부담합니다.',
        '③ 해외 주문(우체국 K-Packet)의 경우 반송 배송비 및 통관 비용은 사유에 따라 고객 부담일 수 있습니다.',
      ],
    },
    {
      heading: '4. 환불 처리',
      paragraphs: [
        '반품 상품 회수 및 확인 후 [영업일 기준 O일] 이내 환불합니다. 결제 수단에 따라 카드 취소·계좌 환불 등으로 처리되며, 카드 취소는 카드사 정책에 따라 반영 시점이 다를 수 있습니다.',
      ],
    },
    {
      heading: '5. 교환·반품이 제한되는 경우',
      paragraphs: [
        '① 고객의 사용 또는 훼손으로 상품 가치가 현저히 감소한 경우',
        '② 개봉·사용으로 재판매가 곤란한 경우',
        '③ 주문 제작 등 이용자의 주문에 따라 개별 제작되는 상품',
      ],
    },
    {
      heading: '6. 문의',
      paragraphs: [
        `${businessInfo.companyName}`,
        `이메일 ${businessInfo.email} · 고객센터 ${businessInfo.phone}`,
      ],
    },
  ],
}

export function RefundPage() {
  return <LegalPage doc={doc} />
}
