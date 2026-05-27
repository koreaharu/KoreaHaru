# ROADMAP — Phase별 작업 우선순위

## Phase 1 (Week 1-2) — 기반

- [x] Next.js 14 + TS strict + Tailwind 프로젝트 초기화
- [x] 디자인 시스템 셋업 (`tailwind.config.ts`, 폰트, 6개 기본 컴포넌트)
- [x] 라우팅 — **영어 단일, flat 구조** (`/`, `/services` 등). i18n 라우팅은 Phase 3+로 연기
- [x] 홈페이지 (10개 섹션, 영어)
- [ ] 5개 핵심 서비스 페이지: Chauffeur, Accommodation, SIM, Rail, Beauty-Medical
- [ ] 8개 지역 페이지 골격 (콘텐츠는 placeholder)
- [ ] About / Contact / FAQ
- [ ] SEO 기본기 (`next-sitemap`, `robots.txt`, `lib/seo.ts`, JSON-LD)
- [ ] `/styleguide` 페이지 (디자인 토큰 검토용)

**완료 기준**: 영어 사이트가 Vercel preview에서 모든 페이지 200 응답, Lighthouse 90+

## Phase 2 (Week 3-4) — 운영 준비

- [ ] Supabase + Prisma 셋업, 마이그레이션
- [ ] 예약 시스템 (Stripe Checkout)
- [ ] 블로그 (Sanity CMS 연동, MDX)
- [ ] 메신저 위젯 (5개 메신저, 국가별 정렬)
- [ ] (다국어 추가는 Phase 3+로 연기 — SEO/콘텐츠 안정화 후 진행)
- [ ] Resend 트랜잭션 이메일

**완료 기준**: 실제 결제 1건 (테스트 카드) 흐름 완료, 예약 → 이메일 → DB 저장 확인

## Phase 3 (Week 5-6) — 콘텐츠 & 확장

- [ ] 나머지 7개 서비스 페이지
- [ ] 추가 언어: `vi`, `th`, `ko`
- [ ] SEO 콘텐츠
  - [ ] 일정표 3편: `3-days-busan`, `5-days-southern-korea`, `7-days-grand-tour`
  - [ ] 가이드 5편 (BRAND.md 참조)
- [ ] 사용자 마이페이지 (예약 내역, 환불 신청)
- [ ] 신뢰 페이지 (`/trust/...`)

**완료 기준**: Google Search Console에 sitemap 등록, 첫 100 페이지 인덱싱 시작

## Phase 4 (Week 7-8) — 고도화

- [ ] AI 챗봇 (Claude API 또는 OpenAI)
- [ ] 동적 일정 생성기 (위치/날짜/관심사 입력 → 추천 일정)
- [ ] 어필리에이트 연동 (Klook, KKday) — 일부 카테고리
- [ ] 분석 (Plausible 또는 GA4) + A/B 테스트 (Vercel Edge Config)
- [ ] PWA / 오프라인 지원

**완료 기준**: 실 트래픽 측정 가능, 전환율 베이스라인 확보

## 체크포인트 규칙

각 Phase 완료 시:
1. 사용자에게 배포된 URL과 변경 요약 제공
2. 다음 Phase 시작 전 사용자 승인 받기
3. 변경사항이 명세를 벗어나면 `docs/`를 먼저 업데이트한 후 진행

## 우선순위 충돌 시

- **신뢰 시그널 vs 디자인 미니멀** → 신뢰 우선 (단, 디자인 톤은 유지)
- **다국어 vs 콘텐츠 양** → 영어 콘텐츠 깊이 우선, 번역은 핵심 페이지부터
- **SEO vs 사용자 경험** → 사용자 경험 우선 (Google도 결국 사용자 신호 중시)
