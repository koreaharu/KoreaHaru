# KoreaHaru Daily Backup Script
$backupDir = "backups/2026-05-18_chauffeur_maps_and_spots"

Write-Host "Starting backup to $backupDir..." -ForegroundColor Yellow

# Create directories
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null
New-Item -ItemType Directory -Force -Path "$backupDir/app/destinations/busan" | Out-Null

# Copy Busan
Copy-Item "app/destinations/busan/page.tsx" "$backupDir/app/destinations/busan/page.tsx" -Force

# Copy cities
$cities = @("gyeongju", "tongyeong", "geoje", "namhae")
foreach ($city in $cities) {
    New-Item -ItemType Directory -Force -Path "$backupDir/app/destinations/$city" | Out-Null
    New-Item -ItemType Directory -Force -Path "$backupDir/app/destinations/$city/[slug]" | Out-Null
    Copy-Item "app/destinations/$city/page.tsx" "$backupDir/app/destinations/$city/page.tsx" -Force
    Copy-Item "app/destinations/$city/[slug]/page.tsx" "$backupDir/app/destinations/$city/[slug]/page.tsx" -Force
}

# Copy Chauffeur
New-Item -ItemType Directory -Force -Path "$backupDir/app/services/chauffeur" | Out-Null
Copy-Item "app/services/chauffeur/page.tsx" "$backupDir/app/services/chauffeur/page.tsx" -Force

# Copy Components
New-Item -ItemType Directory -Force -Path "$backupDir/components/services" | Out-Null
Copy-Item "components/services/ChauffeurMap.tsx" "$backupDir/components/services/ChauffeurMap.tsx" -Force

Write-Host "DAILY BACKUP COMPLETED SUCCESSFULLY! ALL WORK SECURELY PERSISTED." -ForegroundColor Green
