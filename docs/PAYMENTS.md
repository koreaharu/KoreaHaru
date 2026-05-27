# PAYMENTS — 결제 · 통화 · 환불 정책

## 결제수단 (사용자 국가별 정렬)

| 국가 | 우선 노출 |
|---|---|
| JP | PayPay → 카드 → LINE Pay |
| CN | WeChat Pay → Alipay → UnionPay |
| TW / HK | 카드 → LINE Pay |
| SEA (TH/VN/SG/ID) | 카드 → GrabPay |
| US / EU | 카드 → PayPal → Apple/Google Pay |
| KR | 카카오페이 → 네이버페이 → 카드 |
| 기타 | 카드 → PayPal |

국가 감지: 방문자 IP → Vercel Edge Geo. 사용자가 수동 변경 가능.

## 통화

- 내부 기준 통화: **USD** (Decimal로 저장)
- 표시 통화: 사용자 국가 자동 매핑, 사용자가 수동 변경 가능
- 환율 출처: Open Exchange Rates 또는 ECB API
- 환율 갱신 주기: **24시간 캐시** (가격 노출용), 실제 결제는 결제 직전 재조회
- 표시 형식: `Intl.NumberFormat(locale, { style: 'currency', currency })`
- KRW 단독 표시 금지 — 항상 사용자 통화 또는 USD 병기

## 결제 흐름

1. 서비스 선택 → 날짜/인원 입력
2. 가격 자동 계산 (USD 기준 → 사용자 통화 표시)
3. 게스트 체크아웃 가능 (이메일만 필수)
4. 결제수단 선택 (위 표 기준 정렬)
5. Stripe Checkout 또는 PaymentIntent
6. Webhook으로 Booking 상태 업데이트
7. Resend 다국어 확인 이메일 + (옵션) 카카오/라인 알림

## 환불 정책

| 시점 | 환불률 |
|---|---|
| 출발 7일 전까지 | 100% |
| 출발 3-6일 전 | 70% |
| 출발 1-2일 전 | 30% |
| 출발 당일 | 0% |
| 천재지변 / 항공편 결항 | 100% (증빙 시) |

- 모든 환불은 **원 결제수단**으로
- 환불 처리 기간: 영업일 5-10일 (카드사 정책에 따름)
- 환불 신청 채널: 마이페이지 / 이메일 / 메신저

## Stripe 설정

- 테스트 모드와 프로덕션 모드 키 분리 (`.env.local` vs Vercel env)
- Webhook endpoint: `/api/webhooks/stripe`
- Webhook 검증: `stripe.webhooks.constructEvent` 필수
- 결제 실패 시 사용자 친화적 에러 메시지 (i18n)

## 영수증 / 세금

- 인보이스: Stripe Invoice 자동 발행
- 한국 세금계산서: B2B 요청 시 별도 발급 (관리자 페이지에서)
- 부가세 표시: 사업자 등록 후 정책 확정

## 보안

- 카드 정보는 절대 서버에 저장 안 함 — Stripe Elements + Tokenization
- PCI-DSS 준수 (Stripe Checkout 사용 시 SAQ-A 적용)
- HTTPS 강제, HSTS 활성화

## 금지

- 가격을 KRW만 표시
- 환불 정책 모호하게 표기 ("상황에 따라" 같은)
- 숨겨진 수수료 — 모든 비용은 결제 전 명시
- 환율을 임의로 마진 붙여 표시 — 시장 환율 그대로
