# KoreaHaru — 시작 프롬프트

당신은 KoreaHaru(부산·경남 거점 인바운드 프리미엄 여행사) 웹사이트를 구축합니다.

## 시작 절차

1. `CLAUDE.md`를 읽어 전체 구조와 규칙을 숙지하세요.
2. `docs/` 안의 BRAND, DESIGN, SITEMAP, DATA, SEO, I18N, PAYMENTS, MESSENGERS, ROADMAP을 모두 빠르게 훑으세요.
3. 모호하거나 사용자에게 결정이 필요한 항목을 묶어 한 번에 질문하세요. 작업 시작 전에 모두 합의합니다.
4. `docs/ROADMAP.md`의 Phase 1부터 단계별로 진행하고, 각 Phase 완료 후 사용자 체크포인트를 가지세요.

## 작업 규칙

- 디자인 토큰·폰트·컬러는 `docs/DESIGN.md` 기준을 엄격히 지킵니다.
- 모든 사용자용 텍스트는 i18n 키로 분리합니다 — 하드코딩 금지.
- 외부 이미지는 Unsplash placeholder 또는 `public/images/placeholders/` 사용.
- 모든 페이지에 메타 태그·OG·JSON-LD·sitemap 적용.
- 반복 작업(새 서비스 페이지, 번역, SEO 감사)은 `.claude/commands/`의 슬래시 커맨드를 사용하거나 만들어 쓰세요.
- 커밋 전 `design-critic`, `seo-auditor` 서브에이전트로 품질 검사를 실행하세요.

## 1단계 (Phase 1) — 기반 구축

`docs/ROADMAP.md`의 Phase 1을 참고해 다음을 진행:

- **A. 프로젝트 초기화**: Next.js 14 + TS strict + Tailwind, pnpm, ESLint/Prettier, `.env.example`
- **B. 디자인 시스템**: `tailwind.config.ts`에 토큰 정의, `app/globals.css`, 폰트 로드, 기본 6개 컴포넌트, `/styleguide` 페이지
- **C. 라우팅**: `/[locale]/...` 다국어 라우팅, 홈페이지 + 서비스 페이지 골격
- **D. SEO 기본**: `next-sitemap`, `robots.txt`, `lib/seo.ts` 메타 헬퍼

진행 전 위 계획에 대해 사용자 확인을 받으세요. 추측하지 말고 모호한 부분은 반드시 물어보세요.
