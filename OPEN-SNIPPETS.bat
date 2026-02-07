@echo off
chcp 65001 >nul
title Code Snippets Manager

echo ========================================
echo   Code Snippets Manager
echo ========================================
echo.

start "" "%~dp0admin\code-snippets.html"

echo ✅ تم فتح Code Snippets Manager
echo.
echo 💡 الآن يمكنك:
echo    • إضافة أكواد PHP, JS, CSS, HTML
echo    • تفعيل/تعطيل الأكواد
echo    • تصدير/استيراد الأكواد
echo    • إدارة الأولويات
echo.

timeout /t 3 >nul
