@echo off
chcp 65001 >nul
title لوحة التحكم - متجر الكويت

echo ========================================
echo   فتح لوحة التحكم الشاملة
echo ========================================
echo.

start "" "%~dp0admin\dashboard.html"

echo ✅ تم فتح لوحة التحكم في المتصفح
echo.
echo 💡 يمكنك الآن:
echo    • إدارة المنتجات
echo    • إدارة Code Snippets
echo    • إدارة SEO
echo    • إدارة المحتوى
echo.

timeout /t 3 >nul
