# SITEMAP — 사이트맵 / 페이지 구성

## 전체 라우팅

```
/[locale]/
├── /                              # 홈
├── /services/
│   ├── /chauffeur                 # 차량 + 기사
│   ├── /accommodation             # 숙소 (호텔/한옥/템플스테이/풀빌라)
│   ├── /sim                       # USIM / eSIM / WiFi
│   ├── /rail                      # KTX/SRT/Rail Pass
│   ├── /beauty-medical            # 뷰티 · 의료 관광 ★ HOT
│   ├── /food-tours                # 미식 투어
│   ├── /experiences               # 체험 (요트/한복/사진/쿠킹)
│   ├── /tickets                   # 입장권 · 공연
│   ├── /shopping                  # 쇼핑 컨시어지
│   ├── /business-mice             # 비즈니스 / MICE
│   ├── /consulting                # 유학/장기체류 컨설팅
│   └── /concierge                 # 24/7 컨시어지 (긴급통역 등)
├── /destinations/
│   ├── /busan
│   ├── /gyeongju
│   ├── /tongyeong
│   ├── /geoje
│   ├── /namhae
│   ├── /ulsan
│   ├── /daegu
│   ├── /pohang
│   └── /yangsan-gimhae
├── /blog/
│   ├── /                          # 매거진 메인
│   ├── /category/[slug]
│   ├── /[slug]
│   └── /tag/[slug]
├── /itineraries/
│   ├── /3-days-busan
│   ├── /5-days-southern-korea
│   └── /7-days-grand-tour
├── /about
├── /contact
├── /faq
├── /booking                       # 예약 페이지
├── /booking/[id]                  # 예약 상세
├── /account/...                   # 마이페이지
├── /trust/
│   ├── /certifications
│   ├── /insurance
│   ├── /reviews
│   └── /our-drivers
└── /legal/
    ├── /terms
    ├── /privacy
    ├── /refund-policy
    └── /cookies
```

## 홈페이지 (`/`)

위에서 아래 순서:

1. **Hero** — 풀스크린 이미지(남해/부산 야경), 중앙 세리프 카피, CTA 2개 (*Plan your trip* / *See services*)
2. **Quick Booking Bar** — Sticky, 3-필드 (Where? / When? / Service?)
3. **Service Categories** — 9개 카테고리, 3x3 그리드, 호버 시 미세 줌
4. **Featured Destinations** — 8개 도시, 매거진 스타일 비대칭 그리드
5. **Why KoreaHaru** — 4개 차별점: 24/7 컨시어지 · 검증된 기사 · 다국어 · 투명한 가격
6. **Testimonials** — 외국인 후기, 국기 + 별점 + 짧은 코멘트
7. **Latest from the Journal** — 블로그 최신 3개
8. **Trust Bar** — TripAdvisor, Google, KKday, Klook 로고
9. **CTA Strip** — *Plan your trip with us* + 메신저 아이콘 5개
10. **Footer** — 사이트맵, 메신저, 인증, 결제, 언어 셀렉터

## 차량/기사 서비스 (`/services/chauffeur`)

- Hero (차량 사진)
- 차량 3종 카드: Mercedes S-Class / Hyundai Staria / Carnival (사양, 인원, 가격대)
- 패키지: 공항픽업 / 시간제 / 데이투어 / 도시간이동
- 기사 프로필 갤러리 (외국어 가능 표시, 사진, 경력 연차)
- 예약 폼

## 블로그 (`/blog`)

- 매거진 스타일 레이아웃
- 카테고리: Guides / Itineraries / Food / Beauty / Hotels / Culture / Tips
- 포스트 카드: 큰 이미지, 카테고리 태그, 제목(세리프), 발췌, 읽기 시간
- 사이드바: 인기 글, 카테고리, 뉴스레터 구독
