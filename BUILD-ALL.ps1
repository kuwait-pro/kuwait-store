$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Kuwait Store - Build All" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/7] Checking Node.js..." -ForegroundColor Yellow
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Node.js not installed!" -ForegroundColor Red
    pause
    exit 1
}
$nodeVersion = node -v
Write-Host "OK: Node.js $nodeVersion" -ForegroundColor Green
Write-Host ""

Write-Host "[2/7] Installing packages..." -ForegroundColor Yellow
npm install --legacy-peer-deps
Write-Host "OK: Packages installed" -ForegroundColor Green
Write-Host ""

Write-Host "[3/7] Cleaning old folders..." -ForegroundColor Yellow
$folders = @(".next", "out", "out-github", "out-cloudflare", "out-gitlab")
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder -ErrorAction SilentlyContinue
    }
}
Write-Host "OK: Cleaned" -ForegroundColor Green
Write-Host ""

Write-Host "[4/7] Building GitHub Pages..." -ForegroundColor Yellow
$env:DIST_DIR = "out-github"
$env:BASE_PATH = ""
npm run build:github
Write-Host ""

Write-Host "[5/7] Building Cloudflare Pages..." -ForegroundColor Yellow
$env:DIST_DIR = "out-cloudflare"
$env:BASE_PATH = ""
npm run build:cloudflare
Write-Host ""

Write-Host "[6/7] Building GitLab Pages..." -ForegroundColor Yellow
$env:DIST_DIR = "out-gitlab"
$env:BASE_PATH = "/kuwait-store"
npm run build:gitlab
Write-Host ""

Write-Host "[7/7] Optimizing SEO..." -ForegroundColor Yellow
if (Test-Path "mass-seo.js") {
    node mass-seo.js
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  BUILD COMPLETED!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Ready folders:" -ForegroundColor Yellow
if (Test-Path "out-github") { Write-Host "  - out-github" -ForegroundColor Green }
if (Test-Path "out-cloudflare") { Write-Host "  - out-cloudflare" -ForegroundColor Green }
if (Test-Path "out-gitlab") { Write-Host "  - out-gitlab" -ForegroundColor Green }
Write-Host ""

Write-Host "Start dev server now? (Y/N)" -ForegroundColor Cyan
$response = Read-Host

if ($response -eq "Y" -or $response -eq "y") {
    Write-Host ""
    Write-Host "Starting server..." -ForegroundColor Green
    Write-Host "URL: http://localhost:3000" -ForegroundColor Yellow
    Write-Host ""
    
    $dashboardPath = Join-Path $PSScriptRoot "admin\dashboard.html"
    if (Test-Path $dashboardPath) {
        Start-Process $dashboardPath
    }
    
    npm run dev
} else {
    Write-Host ""
    Write-Host "Done! Run later with: npm run dev" -ForegroundColor Green
    Write-Host ""
}
