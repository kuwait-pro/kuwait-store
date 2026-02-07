@echo off
chcp 65001 >nul
title Deploy to Cloudflare

powershell -ExecutionPolicy Bypass -File "%~dp0DEPLOY-CLOUDFLARE.ps1"
pause
