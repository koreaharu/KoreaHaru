# KoreaHaru — Windows 부트스트랩 스크립트
# 사용: PowerShell에서 .\setup.ps1

$ErrorActionPreference = 'Stop'

Write-Host ""
Write-Host "=== KoreaHaru — Setup ===" -ForegroundColor Cyan
Write-Host ""

# 1. Node 확인
try {
  $nodeVersion = (& node --version) 2>$null
  Write-Host "✓ Node $nodeVersion" -ForegroundColor Green
} catch {
  Write-Host "✗ Node가 설치되어 있지 않습니다." -ForegroundColor Red
  Write-Host "  https://nodejs.org/ 에서 LTS 버전을 설치하세요 (18 이상)."
  exit 1
}

# 2. pnpm 확인 / 설치 안내
$pnpm = Get-Command pnpm -ErrorAction SilentlyContinue
if (-not $pnpm) {
  Write-Host "✗ pnpm이 없습니다. 설치할까요? [Y/n]" -ForegroundColor Yellow
  $answer = Read-Host
  if ($answer -ne 'n' -and $answer -ne 'N') {
    Write-Host "pnpm 설치 중..."
    & npm install -g pnpm
    if ($LASTEXITCODE -ne 0) {
      Write-Host "pnpm 설치 실패. 수동으로 'npm install -g pnpm' 실행 후 다시 시도하세요." -ForegroundColor Red
      exit 1
    }
  } else {
    Write-Host "pnpm 없이는 진행할 수 없습니다." -ForegroundColor Red
    exit 1
  }
}
Write-Host "✓ pnpm 사용 가능" -ForegroundColor Green

# 3. 의존성 설치
if (Test-Path "package.json") {
  Write-Host ""
  Write-Host "의존성 설치 중 (pnpm install)..." -ForegroundColor Cyan
  & pnpm install
  if ($LASTEXITCODE -ne 0) {
    Write-Host "pnpm install 실패." -ForegroundColor Red
    exit 1
  }
} else {
  Write-Host "package.json이 아직 없습니다. Claude Code 세션 안에서 프로젝트가 초기화될 예정입니다." -ForegroundColor Yellow
}

# 4. .env.local 셋업
if ((Test-Path ".env.example") -and -not (Test-Path ".env.local")) {
  Copy-Item ".env.example" ".env.local"
  Write-Host "✓ .env.local 생성 (필요한 키들을 채워주세요)" -ForegroundColor Green
}

# 5. PROMPT.md를 클립보드에 복사
if (Test-Path "PROMPT.md") {
  $prompt = Get-Content "PROMPT.md" -Raw -Encoding UTF8
  $prompt | Set-Clipboard
  Write-Host "✓ PROMPT.md 내용이 클립보드에 복사되었습니다." -ForegroundColor Green
}

# 6. claude 실행
$claude = Get-Command claude -ErrorAction SilentlyContinue
if (-not $claude) {
  Write-Host ""
  Write-Host "Claude Code가 설치되어 있지 않습니다." -ForegroundColor Yellow
  Write-Host "설치: npm install -g @anthropic-ai/claude-code"
  Write-Host ""
  Write-Host "설치 후 'claude' 실행하고 클립보드 내용(PROMPT.md)을 첫 메시지로 붙여넣으세요."
  exit 0
}

Write-Host ""
Write-Host "=== 준비 완료 ===" -ForegroundColor Cyan
Write-Host "Claude Code를 실행합니다. 켜지면 Ctrl+V로 PROMPT.md를 붙여넣으세요."
Write-Host ""

& claude
