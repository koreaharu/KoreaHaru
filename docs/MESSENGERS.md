# MESSENGERS — 메신저 통합

## 위젯 위치

- 모바일: 우측 하단 플로팅 버튼 (탭하면 메신저 목록 펼침)
- 데스크탑: 우측 사이드 고정 (스크롤 따라 이동)

## 지원 메신저

| 메신저 | 아이콘 | 링크 형식 |
|---|---|---|
| KakaoTalk | 노란 말풍선 | `http://pf.kakao.com/_XXXXX/chat` |
| LINE | 초록 | `https://line.me/R/ti/p/@XXXXX` |
| WhatsApp | 초록 전화 | `https://wa.me/8210XXXXXXXX` |
| WeChat | 초록 | QR 코드 모달 (URL 직접 안 됨) |
| Telegram | 파랑 종이비행기 | `https://t.me/koreaharu` |

## 국가별 우선순위

방문자 IP 기반 국가 감지 → 해당 국가에서 가장 많이 쓰는 메신저를 **상단에 우선 노출**:

| 국가 | 1순위 | 2순위 |
|---|---|---|
| KR | KakaoTalk | LINE |
| JP | LINE | WhatsApp |
| TW / HK | LINE | WhatsApp |
| CN | WeChat | WhatsApp |
| TH | LINE | WhatsApp |
| VN | Zalo (추후) | WhatsApp |
| US / EU / SEA | WhatsApp | Telegram |
| 기타 | WhatsApp | Telegram |

## 환경변수

```bash
NEXT_PUBLIC_KAKAO_CHANNEL=
NEXT_PUBLIC_LINE_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_WECHAT_QR_URL=
NEXT_PUBLIC_TELEGRAM_HANDLE=
```

## 구현 가이드

- 클라이언트 컴포넌트 (`'use client'`) — 국가 감지/모달 사용
- 국가 감지: 서버에서 헤더로 전달 (`x-vercel-ip-country`) → 클라이언트로 prop 전달
- 접근성: `aria-label`로 메신저 이름 명시
- 모바일에서 위젯이 CTA 버튼 가리지 않도록 z-index/위치 조정

## CTA Strip과의 관계

홈페이지 9번째 섹션 CTA Strip에도 동일한 메신저 아이콘 5개를 큰 버튼으로 노출. 위젯과 시각적 일관성 유지.

## 금지

- 자동 팝업 (사용자가 열기 전에 자동으로 열리는 채팅창)
- 닫기 버튼 없는 위젯
- 모바일에서 화면을 가로지르는 큰 위젯
