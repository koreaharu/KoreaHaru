# KoreaHaru — Claude Code 프로젝트

부산·경남·울산·대구·포항을 거점으로 한 외국인 인바운드 프리미엄 여행사 웹사이트.

## 폴더 구조

```
kwak-travel/
├── CLAUDE.md              # Claude Code 자동 로딩 — 프로젝트 지침 인덱스
├── PROMPT.md              # 새 세션 시작 시 첫 메시지로 붙여넣을 프롬프트
├── README.md              # 이 파일
├── setup.ps1              # Windows 자동 부트스트랩 (의존성 설치 + claude 실행)
│
├── docs/                  # 도메인별 명세서
│   ├── BRAND.md           # 브랜드 보이스, 카피톤, 금지어
│   ├── DESIGN.md          # 디자인 토큰, 컴포넌트 원칙
│   ├── SITEMAP.md         # 사이트맵, 페이지 구성
│   ├── DATA.md            # Prisma 데이터 모델
│   ├── SEO.md             # SEO 체크리스트, JSON-LD
│   ├── I18N.md            # 다국어 전략, 폰트 폴백
│   ├── PAYMENTS.md        # 결제, 통화, 환불 정책
│   ├── MESSENGERS.md      # 메신저 통합 (카카오/라인/왓츠앱 등)
│   └── ROADMAP.md         # Phase별 작업 우선순위
│
├── .claude/               # Claude Code 설정
│   ├── settings.json      # 권한, 자동 허용 명령
│   ├── agents/            # 서브에이전트
│   │   ├── seo-auditor.md
│   │   ├── translator.md
│   │   ├── design-critic.md
│   │   └── copy-editor.md
│   └── commands/          # 슬래시 커맨드
│       ├── new-service.md
│       ├── new-destination.md
│       ├── translate.md
│       ├── seo-audit.md
│       └── design-check.md
│
└── (Next.js 14 프로젝트 파일들)
```

## 처음 시작할 때

### Windows (PowerShell)

```powershell
.\setup.ps1
```

이 스크립트는 다음을 수행:
1. Node 18+ / pnpm 확인 (없으면 설치 안내)
2. `pnpm install`
3. `.env.local`이 없으면 `.env.example`에서 복사
4. `claude` 실행 (설치 안 되어 있으면 안내)
5. `PROMPT.md` 내용을 클립보드에 복사 — Claude 켜지면 Ctrl+V 한 번이면 시작

### 수동으로

```bash
pnpm install
cp .env.example .env.local
claude
# 그리고 PROMPT.md 전체를 첫 메시지로 붙여넣기
```

## 자주 쓰는 작업

세션 안에서 사용 가능한 슬래시 커맨드:

| 커맨드 | 용도 |
|---|---|
| `/new-service <slug>` | 새 서비스 페이지 + i18n 키 + SEO 메타 자동 생성 |
| `/new-destination <slug>` | 새 지역 페이지 자동 생성 |
| `/translate <locale>` | 누락된 번역 키 채우기 |
| `/seo-audit <path>` | 특정 페이지 SEO 점수 검사 |
| `/design-check` | 디자인 토큰 위반 검사 |

서브에이전트는 Claude가 필요할 때 자동으로 호출하지만, 명시적으로 부를 수도 있습니다:
"design-critic 에이전트로 이 컴포넌트 검토해줘"

## CLAUDE.md / docs 수정 팁

- 명세가 바뀌면 해당 `docs/*.md`만 수정하세요. CLAUDE.md는 인덱스 + 핵심 규칙만 유지.
- API 키, 비밀번호는 **절대** 이 폴더의 어떤 .md 파일에도 적지 마세요. `.env.local`에만.
- 디자인 토큰을 임의로 바꾸지 마세요 — `docs/DESIGN.md`가 진실의 원천.

## 막힐 때

```
"docs/[파일명] 다시 읽고, 이거 어떻게 해야 할지 알려줘"
"이 부분 옵션 3개 제안해줘"
"design-critic으로 검토 부탁"
```
