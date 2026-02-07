@echo off
chcp 65001 >nul
title متجر الكويت - تشغيل شامل

echo ========================================
echo   متجر الكويت - تشغيل شامل
echo ========================================
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0start.ps1"

pause
