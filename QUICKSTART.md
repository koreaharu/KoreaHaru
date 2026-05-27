# Quick Start — KoreaHaru

새 환경에서 로컬 개발을 시작하는 가장 빠른 방법입니다.

## 1단계: 의존성 설치

```bash
pnpm install
```

> 📌 이 프로젝트는 `pnpm` 사용. npm/yarn으로도 가능하지만 `pnpm-lock.yaml` 있는 경우 pnpm 권장.

## 2단계: 개발 서버 시작

```bash
npm run dev
```

서버가 시작되면:

```
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
  ✓ Ready in X.Xs
```

## 3단계: 브라우저에서 확인

**[http://localhost:3000](http://localhost:3000)** 열기

> ⚠️ **포트 3000이 점유 중이면?**  
> 서버가 자동으로 3001, 3002 등으로 시도합니다. 터미널의 "Local:" 주소를 따라가세요.

## 주요 폴더 구조

```
kwak-travel/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈페이지
│   ├── services/          # 5개 서비스 페이지
│   ├── destinations/      # 지역 페이지 (준비중)
│   ├── about/             # About 페이지
│   ├── contact/           # Contact 폼
│   └── layout.tsx         # Root 레이아웃
├── components/
│   ├── ui/                # 기본 컴포넌트 (Button, Container 등)
│   ├── layout/            # Header, Footer, Widget
│   ├── home/              # 홈페이지 섹션
│   └── services/          # 서비스 페이지 레이아웃 컴포넌트
├── messages/
│   └── en.json            # i18n 메시지 (현재 영어만)
├── lib/                   # 유틸 (seo.ts, cn.ts)
├── styles/                # Tailwind 설정
└── docs/                  # 명세 (BRAND, DESIGN, ROADMAP 등)
```

## 자주 쓰는 커맨드

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 (hot reload) |
| `npm run build` | 프로덕션 빌드 |
| `npm run typecheck` | TypeScript 컴파일 체크 |
| `npm run format` | Prettier로 포맷 |
| `npm run lint` | ESLint 체크 |

## 문서 읽기

주요 설정은 모두 `docs/`에 있습니다:

- **[CLAUDE.md](CLAUDE.md)** — 전체 프로젝트 지침 (여기부터 시작)
- **[docs/ROADMAP.md](docs/ROADMAP.md)** — Phase별 작업 우선순위
- **[docs/BRAND.md](docs/BRAND.md)** — 브랜드 톤, 금지사항
- **[docs/DESIGN.md](docs/DESIGN.md)** — 디자인 토큰, 컴포넌트 원칙
- **[docs/I18N.md](docs/I18N.md)** — 다국어 전략 (현재 연기됨)

## 개발 팁

### i18n 메시지 추가
`messages/en.json`에 새 키를 추가하고 컴포넌트에서:
```tsx
const t = useTranslations('namespace.section');
<h1>{t('key')}</h1>
```

### 새 페이지 추가
`app/` 아래 폴더 + `page.tsx` 만들기:
```tsx
export const metadata = buildMetadata({
  title: 'Page Title',
  description: 'Meta description',
  path: '/your-path',
});

export default function YourPage() {
  const t = useTranslations('namespace');
  return <>{/* content */}</>;
}
```

### 스타일링
Tailwind CSS 사용. 컬러, 타이포그래피, 스페이싱은 `tailwind.config.ts` 참조.

## 배포

준비 완료 시:
```bash
npm run build
npm run start
```

또는 [Vercel](https://vercel.com)에 직접 배포 (GitHub 연동 권장).

---

**질문이 있으면 CLAUDE.md 또는 해당 docs 파일을 먼저 확인하세요.** 이 프로젝트는 명세 우선 문화입니다.
