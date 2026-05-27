# SEO — 체크리스트 & JSON-LD

## 모든 페이지 체크리스트

- [ ] `<title>` 60자 이내, 키워드 + 브랜드
- [ ] meta description 155자 이내
- [ ] OG 이미지 (1200x630)
- [ ] Twitter Card (`summary_large_image`)
- [ ] JSON-LD 스키마 (페이지 타입별, 아래 참고)
- [ ] `hreflang` 태그 (모든 언어 버전 자동)
- [ ] canonical URL
- [ ] sitemap.xml에 자동 등록
- [ ] 이미지 `alt` 텍스트 (다국어)
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

## 페이지 타입별 JSON-LD

| 페이지 | 스키마 |
|---|---|
| 홈 | `Organization`, `WebSite`, `LocalBusiness` |
| 서비스 | `Service`, `Product` |
| 블로그 포스트 | `Article`, `BreadcrumbList` |
| 지역 | `TouristDestination`, `Place` |
| 호텔/숙소 | `Hotel`, `LodgingBusiness` |
| 일정표 | `TouristTrip` |
| FAQ | `FAQPage` |

## 헬퍼 위치

- `lib/seo.ts` — 메타데이터 빌더 (`buildMetadata({ title, description, path, locale, image })`)
- `lib/structured-data.ts` — JSON-LD 빌더 함수들 (페이지 타입별)
- `next-sitemap.config.js` — sitemap 설정

## hreflang

next-intl 사용 시 자동 생성. 수동 확인 포인트:
- `<link rel="alternate" hreflang="x-default" href="...">` 항상 포함
- `/[locale]/...` 라우트의 모든 언어 버전이 sitemap에 들어가는지

## 이미지 SEO

- 모든 이미지에 다국어 `alt` (메시지 키로 분리)
- `next/image` 사용 — `width`, `height` 명시
- LCP 후보 이미지에만 `priority`
- Cloudflare Images로 WebP/AVIF 자동 변환 + 리사이즈

## 콘텐츠 SEO 우선순위 (Phase 3)

1. **일정표 3편** — `3-days-busan`, `5-days-southern-korea`, `7-days-grand-tour`
2. **가이드 5편** — Things to do in Busan / Best beaches in Geoje / Gyeongju temple guide / Seoul vs Busan / Korean BBQ etiquette
3. 각 글 1500단어 이상, H2/H3 구조, 내부 링크 5개+, 외부 권위 링크 1~2개

## 금지

- 키워드 스터핑
- 클로킹 (검색봇과 사용자에게 다른 콘텐츠)
- 중복 콘텐츠 — 다국어 페이지에 동일 내용을 다른 언어 코드로 노출하면 안 됨, 반드시 번역 제공
- 가짜 별점/리치 결과 — Google 가이드라인 위반
