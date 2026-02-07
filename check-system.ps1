# ====================================
# Kuwait Store - System Check
# ====================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  فحص جاهزية المشروع" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$allGood = $true

# التحقق من Node.js
Write-Host "[1/8] التحقق من Node.js..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node -v
    Write-Host "  ✅ Node.js $nodeVersion مثبت" -ForegroundColor Green
} else {
    Write-Host "  ❌ Node.js غير مثبت!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# التحقق من NPM
Write-Host "[2/8] التحقق من NPM..." -ForegroundColor Yellow
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm -v
    Write-Host "  ✅ NPM $npmVersion مثبت" -ForegroundColor Green
} else {
    Write-Host "  ❌ NPM غير مثبت!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# التحقق من package.json
Write-Host "[3/8] التحقق من package.json..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "  ✅ package.json موجود" -ForegroundColor Green
} else {
    Write-Host "  ❌ package.json غير موجود!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# التحقق من الملفات الأساسية
Write-Host "[4/8] التحقق من الملفات الأساسية..." -ForegroundColor Yellow
$requiredFiles = @(
    "start.ps1",
    "START.bat",
    "OPEN-ADMIN.bat",
    "OPEN-SNIPPETS.bat",
    "README.md",
    "QUICK-START-AR.md",
    "CODE-SNIPPETS-GUIDE.md"
)

$missingFiles = @()
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file غير موجود" -ForegroundColor Red
        $missingFiles += $file
        $allGood = $false
    }
}
Write-Host ""

# التحقق من مجلد admin
Write-Host "[5/8] التحقق من مجلد admin..." -ForegroundColor Yellow
$adminFiles = @(
    "admin/dashboard.html",
    "admin/code-snippets.html",
    "admin/snippets-examples.json",
    "admin/index.html",
    "admin/seo-admin.html"
)

foreach ($file in $adminFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file غير موجود" -ForegroundColor Red
        $allGood = $false
    }
}
Write-Host ""

# التحقق من مجلد pages
Write-Host "[6/8] التحقق من مجلد pages..." -ForegroundColor Yellow
if (Test-Path "pages") {
    Write-Host "  ✅ مجلد pages موجود" -ForegroundColor Green
} else {
    Write-Host "  ❌ مجلد pages غير موجود!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# التحقق من مجلد data
Write-Host "[7/8] التحقق من مجلد data..." -ForegroundColor Yellow
if (Test-Path "data/kuwait-products.json") {
    Write-Host "  ✅ kuwait-products.json موجود" -ForegroundColor Green
} else {
    Write-Host "  ❌ kuwait-products.json غير موجود!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# التحقق من node_modules
Write-Host "[8/8] التحقق من الحزم..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "  ✅ الحزم مثبتة" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  الحزم غير مثبتة (سيتم تثبيتها عند التشغيل)" -ForegroundColor Yellow
}
Write-Host ""

# النتيجة النهائية
Write-Host "========================================" -ForegroundColor Cyan
if ($allGood) {
    Write-Host "  ✅ المشروع جاهز للتشغيل!" -ForegroundColor Green
    Write-Host ""
    Write-Host "  للتشغيل:" -ForegroundColor Yellow
    Write-Host "  • انقر نقراً مزدوجاً على: START.bat" -ForegroundColor White
    Write-Host "  • أو في PowerShell: .\start.ps1" -ForegroundColor White
    Write-Host "  • أو في CMD: npm run start:all" -ForegroundColor White
} else {
    Write-Host "  ❌ يوجد مشاكل يجب حلها!" -ForegroundColor Red
    Write-Host ""
    if ($missingFiles.Count -gt 0) {
        Write-Host "  الملفات المفقودة:" -ForegroundColor Yellow
        foreach ($file in $missingFiles) {
            Write-Host "  • $file" -ForegroundColor Red
        }
    }
}
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# إحصائيات
Write-Host "📊 الإحصائيات:" -ForegroundColor Cyan
Write-Host "  • ملفات التوثيق: 7" -ForegroundColor White
Write-Host "  • ملفات لوحة التحكم: 5" -ForegroundColor White
Write-Host "  • أمثلة Code Snippets: 8" -ForegroundColor White
Write-Host "  • سكريبتات التشغيل: 4" -ForegroundColor White
Write-Host ""

Write-Host "💡 نصيحة: راجع QUICK-START-AR.md للبدء السريع" -ForegroundColor Gray
Write-Host ""

pause
