# CLAUDE.md — KoreaHaru

> Claude Code가 매 세션마다 자동으로 읽는 프로젝트 지침입니다.
> 충돌 시 이 문서가 우선합니다. 모호하면 묻기 전에 먼저 docs/를 다시 읽으세요.

## 프로젝트 한 줄 요약

부산·경남·울산·대구·포항을 거점으로 한 **외국인 인바운드 프리미엄 여행사** 웹사이트.
태그라인: *A Curated Journey Through Korea*

## 핵심 결정사항 (변경 시 사용자 확인 필수)

| 항목 | 값 |
|---|---|
| 기본 언어 | 영어 (현재 영어 단일, URL prefix 없음) |
| i18n 상태 | **연기됨** — 인프라(next-intl + 메시지 키)는 유지, 라우팅은 flat. SEO/콘텐츠 안정화 후 다국어 추가 |
| 향후 지원 언어 | en, ja, zh-CN, zh-TW, vi, th, ko |
| 주력 시장 | 대만(1) · 일본(2) · 홍콩(3) · 중국 · 미국 · 동남아 |
| 포지셔닝 | 프리미엄 · 신뢰 · 큐레이션 (가성비 X) |
| 타겟 | FIT (개별여행객) 중심 |

## 기술 스택

- **Frontend**: Next.js 14 (App Router, RSC) · TypeScript strict · Tailwind · shadcn/ui · Framer Motion · next-intl · next-seo
- **Backend**: Supabase (PostgreSQL + Auth + Storage) · Prisma · Resend · Sanity CMS
- **결제**: Stripe (글로벌 + Alipay+/WeChat Pay) · PayPal · 카카오/네이버페이 (한국)
- **Infra**: Vercel · Cloudflare · Plausible

## 도메인 별 상세 명세 (반드시 함께 읽기)

| 영역 | 문서 |
|---|---|
| 브랜드 보이스 · 카피톤 · 금지어 | [docs/BRAND.md](docs/BRAND.md) |
| 디자인 토큰 · 컴포넌트 원칙 | [docs/DESIGN.md](docs/DESIGN.md) |
| 사이트맵 · 페이지 구성 | [docs/SITEMAP.md](docs/SITEMAP.md) |
| Prisma 데이터 모델 | [docs/DATA.md](docs/DATA.md) |
| SEO 체크리스트 · JSON-LD | [docs/SEO.md](docs/SEO.md) |
| i18n 전략 · 폰트 폴백 | [docs/I18N.md](docs/I18N.md) |
| 결제 · 통화 · 환불 정책 | [docs/PAYMENTS.md](docs/PAYMENTS.md) |
| 메신저 통합 | [docs/MESSENGERS.md](docs/MESSENGERS.md) |
| Phase별 작업 우선순위 | [docs/ROADMAP.md](docs/ROADMAP.md) |

## 작업 원칙

1. **명세 우선**: 디자인/카피/스키마 결정 전에 항상 해당 docs 먼저 확인
2. **단계별 진행**: Phase 단위로 작업하고 각 단계 끝에 사용자 체크포인트
3. **품질 게이트**: 커밋 전 `design-critic`, `seo-auditor` 서브에이전트 호출 권장
4. **반복 작업 자동화**: 새 서비스/지역 페이지 추가는 슬래시 커맨드 사용
5. **i18n 키 분리**: 사용자용 텍스트는 절대 하드코딩 금지

## 코딩 컨벤션

- 컴포넌트: PascalCase (`HeroSection.tsx`), 폴더: kebab-case
- 모든 컴포넌트는 named export
- `interface XxxProps`는 같은 파일에 선언
- 서버 컴포넌트 우선, 클라이언트는 `'use client'` 최상단 명시
- 이미지는 `next/image` 필수, `priority`는 above-the-fold만
- 외부 링크: `rel="noopener noreferrer" target="_blank"`

## 환경변수

`.env.example` 참조. **API 키/시크릿을 이 문서나 코드에 기재하지 말 것.**

## 절대 하지 말 것

자세한 목록은 [docs/BRAND.md#금지사항](docs/BRAND.md)과 [docs/DESIGN.md#안티패턴](docs/DESIGN.md) 참조. 핵심:

- 그라데이션 남발 / 글래스모피즘 / 큰 그림자 / 라운드 12px+
- 영어 본문에 한국식 마침표 (。)
- 가짜 후기 · 가짜 카운터
- 가격 KRW 단독 표시
- TripAdvisor 별점 직접 그리기 (실제 위젯만)
