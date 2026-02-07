# ====================================
# Kuwait Store - Build & Run Script
# ====================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  متجر الكويت - تشغيل شامل" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Continue"

# التحقق من Node.js
Write-Host "[1/6] التحقق من Node.js..." -ForegroundColor Yellow
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js غير مثبت! الرجاء تثبيته من nodejs.org" -ForegroundColor Red
    pause
    exit 1
}
$nodeVersion = node -v
Write-Host "✅ Node.js $nodeVersion مثبت" -ForegroundColor Green
Write-Host ""

# تثبيت الحزم
Write-Host "[2/6] تثبيت الحزم..." -ForegroundColor Yellow
if (!(Test-Path "node_modules")) {
    npm install --legacy-peer-deps
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ فشل تثبيت الحزم!" -ForegroundColor Red
        pause
        exit 1
    }
    Write-Host "✅ تم تثبيت الحزم بنجاح" -ForegroundColor Green
} else {
    Write-Host "✅ الحزم مثبتة مسبقاً" -ForegroundColor Green
}
Write-Host ""

# تنظيف المجلدات القديمة
Write-Host "[3/6] تنظيف المجلدات القديمة..." -ForegroundColor Yellow
$foldersToClean = @(".next", "out", "out-github", "out-cloudflare", "out-gitlab")
foreach ($folder in $foldersToClean) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder -ErrorAction SilentlyContinue
        Write-Host "  🗑️  تم حذف $folder" -ForegroundColor Gray
    }
}
Write-Host "✅ تم التنظيف" -ForegroundColor Green
Write-Host ""

# بناء المشروع لجميع المنصات
Write-Host "[4/6] بناء المشروع..." -ForegroundColor Yellow

Write-Host "  📦 بناء GitHub Pages..." -ForegroundColor Cyan
$env:DIST_DIR = "out-github"
$env:BASE_PATH = ""
npm run build:github
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ⚠️  تحذير: فشل بناء GitHub" -ForegroundColor Yellow
}

Write-Host "  📦 بناء Cloudflare Pages..." -ForegroundColor Cyan
$env:DIST_DIR = "out-cloudflare"
$env:BASE_PATH = ""
npm run build:cloudflare
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ⚠️  تحذير: فشل بناء Cloudflare" -ForegroundColor Yellow
}

Write-Host "  📦 بناء GitLab Pages..." -ForegroundColor Cyan
$env:DIST_DIR = "out-gitlab"
$env:BASE_PATH = "/kuwait-store"
npm run build:gitlab
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ⚠️  تحذير: فشل بناء GitLab" -ForegroundColor Yellow
}

Write-Host "✅ اكتمل البناء" -ForegroundColor Green
Write-Host ""

# تشغيل SEO
Write-Host "[5/6] تحسين SEO..." -ForegroundColor Yellow
if (Test-Path "mass-seo.js") {
    node mass-seo.js
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ تم تحسين SEO" -ForegroundColor Green
    } else {
        Write-Host "⚠️  تحذير: فشل تحسين SEO" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  ملف mass-seo.js غير موجود" -ForegroundColor Yellow
}
Write-Host ""

# فتح لوحة التحكم
Write-Host "[6/6] فتح لوحة التحكم..." -ForegroundColor Yellow
$dashboardPath = Join-Path $PSScriptRoot "admin\dashboard.html"
if (Test-Path $dashboardPath) {
    Start-Process $dashboardPath
    Write-Host "✅ تم فتح لوحة التحكم" -ForegroundColor Green
} else {
    Write-Host "⚠️  لم يتم العثور على لوحة التحكم" -ForegroundColor Yellow
}
Write-Host ""

# تشغيل السيرفر
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🚀 تشغيل السيرفر..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📍 الروابط المتاحة:" -ForegroundColor Yellow
Write-Host "   • الموقع: http://localhost:3000" -ForegroundColor White
Write-Host "   • لوحة التحكم: $dashboardPath" -ForegroundColor White
Write-Host ""
Write-Host "💡 اضغط Ctrl+C لإيقاف السيرفر" -ForegroundColor Gray
Write-Host ""

npm run dev
