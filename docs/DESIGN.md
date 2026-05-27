# DESIGN — 디자인 시스템

## 디자인 철학

키워드: **Warm · Clean · Luxurious · Minimal**

- 차갑지 않은 미니멀리즘 — 베이지/크림 톤 기반
- 골드 액센트는 **절제** (1페이지에 2~3곳)
- 사진은 크게, 텍스트는 작게 — 호텔 브랜드 웹사이트 톤
- 애니메이션은 페이드/슬라이드만 — 화려한 효과 금지
- 그림자 거의 사용 안 함 — 대신 얇은 라인 디바이더

## 컬러 토큰

`tailwind.config.ts`에 다음 그대로 정의:

```ts
colors: {
  // Primary — Warm Cream / Ivory
  cream: {
    50:  '#FBF7F0',  // 메인 배경
    100: '#F6EFE0',  // 카드 배경
    200: '#F3EAD8',  // 호버 배경
    300: '#E8DCC4',  // 디바이더
  },
  // Brand — Antique Gold / Bronze
  gold: {
    400: '#D4B481',  // 보조 액센트
    500: '#C9A87A',  // 메인 액센트 (로고, 버튼)
    600: '#B8915C',  // 호버
    700: '#9C7B4A',  // 활성
    800: '#8A6F4A',  // 보조 텍스트
  },
  // Text — Warm Brown
  ink: {
    900: '#2C2418',  // 메인 텍스트
    800: '#3A2D1A',  // 제목
    700: '#3D3120',  // 본문 강조
    600: '#5A3F1A',  // 보조 강조
    500: '#6B553A',  // 보조 텍스트
    400: '#8A7050',  // 캡션
  },
  // Accent — 절제 사용
  accent: {
    rust: '#B54A2A',   // "HOT" 배지, 긴급 CTA
    sage: '#6B7A5A',   // 성공/완료
    navy: '#2C3E50',   // 정보
  },
}
```

## 타이포그래피

```ts
fontFamily: {
  serif:   ['"Cormorant Garamond"', '"Noto Serif KR"', 'serif'],
  sans:    ['Inter', '"Noto Sans KR"', 'sans-serif'],
  korean:  ['"Noto Serif KR"', 'serif'],
  cjk:     ['"Noto Sans CJK"', 'sans-serif'],
}
```

| 용도 | 클래스 |
|---|---|
| Hero 제목 | `font-serif text-6xl md:text-7xl font-light tracking-tight` |
| 섹션 제목 | `font-serif text-4xl font-normal` |
| 카드 제목 | `font-sans text-lg font-semibold` |
| 본문 | `font-sans text-base leading-relaxed text-ink-700` |
| 캡션 | `font-sans text-sm text-ink-400 tracking-wider uppercase` |

## 스페이싱 & 레이아웃

- 컨테이너 최대폭: `max-w-7xl` (1280px)
- 섹션 패딩: 모바일 `py-16`, 데스크탑 `py-28`
- 카드 내부 패딩: `p-8` 이상
- 그리드 갭: `gap-8` 이상

## 컴포넌트 스타일 원칙

- **버튼**: `rounded-sm`, 두꺼운 보더보다 솔리드 채움
- **카드**: 그림자 대신 `border border-cream-300`
- **이미지**: `aspect-ratio` 고정 (`aspect-[4/5]`, `aspect-video`)
- **모서리**: 4px 또는 8px 통일 (12px 이상 금지)
- **호버**: 미세한 색상 변화만 — 큰 스케일/그림자 변화 금지

## 기본 6개 컴포넌트

`components/ui/` 아래 다음을 우선 구현:

1. `Button` — primary (gold), secondary (outline), ghost
2. `Card` — 이미지 + 본문 슬롯 구조
3. `Section` — 섹션 wrapper (패딩 일관)
4. `Container` — `max-w-7xl mx-auto px-6`
5. `Badge` — HOT/NEW/CURATED 등
6. `Divider` — 얇은 라인 (`bg-cream-300`)

확인 페이지: `/[locale]/styleguide` — 위 6개 컴포넌트 변형들을 한 번에 볼 수 있게.

## 안티패턴 (절대 금지)

- 그라데이션 남발 (특히 무지개/네온)
- 글래스모피즘 (블러 + 반투명)
- 카드에 큰 그림자 (`shadow-xl` 이상)
- 둥근 모서리 12px 이상
- 화려한 애니메이션 (바운스, 스피닝, 무한 루프)
- 자동재생 비디오 + 사운드
