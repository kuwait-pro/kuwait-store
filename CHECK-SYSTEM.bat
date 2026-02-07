@echo off
chcp 65001 >nul
title فحص جاهزية المشروع

echo ========================================
echo   فحص جاهزية المشروع
echo ========================================
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0check-system.ps1"
