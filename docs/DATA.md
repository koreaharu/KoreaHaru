# DATA — Prisma 데이터 모델

## 핵심 모델 (초안)

```prisma
model Service {
  id           String   @id @default(cuid())
  slug         String   @unique
  category     ServiceCategory
  translations ServiceTranslation[]
  basePrice    Decimal
  currency     String   @default("USD")
  images       String[]
  features     Json
  isActive     Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model ServiceTranslation {
  id        String  @id @default(cuid())
  serviceId String
  locale    String
  title     String
  excerpt   String
  body      String  // MDX
  service   Service @relation(fields: [serviceId], references: [id], onDelete: Cascade)
  @@unique([serviceId, locale])
}

model Vehicle {
  id           String   @id @default(cuid())
  model        String   // "Mercedes S-Class"
  type         VehicleType
  capacity     Int
  pricePerHour Decimal
  pricePerDay  Decimal
  images       String[]
  features     String[]
  isAvailable  Boolean  @default(true)
}

model Driver {
  id        String   @id @default(cuid())
  name      String
  photo     String
  languages String[]    // ["en", "ja", "zh"]
  yearsExp  Int
  rating    Float
  bio       Json        // multilingual
}

model BlogPost {
  id           String   @id @default(cuid())
  slug         String   @unique
  locale       String
  title        String
  excerpt      String
  content      String   // MDX
  coverImage   String
  category     String
  tags         String[]
  publishedAt  DateTime
  author       String
  readingTime  Int
  seoTitle     String?
  seoDesc      String?
  @@unique([slug, locale])
}

model Booking {
  id          String        @id @default(cuid())
  userId      String?
  serviceId   String
  date        DateTime
  pax         Int
  total       Decimal
  currency    String
  status      BookingStatus
  paymentId   String?
  contactName String
  contactEmail String
  contactPhone String?
  notes       String?
  createdAt   DateTime @default(now())
}

enum ServiceCategory {
  CHAUFFEUR
  ACCOMMODATION
  SIM
  RAIL
  BEAUTY_MEDICAL
  FOOD
  EXPERIENCE
  TICKET
  SHOPPING
  BUSINESS
  CONSULTING
  CONCIERGE
}

enum VehicleType {
  SEDAN
  VAN
  MINIVAN
  BUS
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  REFUNDED
  COMPLETED
}
```

## 마이그레이션 정책

- 스키마 변경은 PR 단위로
- `prisma migrate dev` 로컬 → `prisma migrate deploy` 프로덕션
- 파괴적 변경(컬럼 삭제 등)은 2-step deploy: 코드에서 사용 중단 → 다음 배포에서 컬럼 제거

## 시드 데이터

`prisma/seed.ts`에 다음 최소 데이터:
- Vehicle 3종 (S-Class, Staria, Carnival)
- Driver 5명 (다국어 가능)
- Service 9개 (카테고리별 1개씩)
- BlogPost 3개 (en)
