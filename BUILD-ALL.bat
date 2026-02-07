@echo off
chcp 65001 >nul
title بناء المشروع بالكامل

powershell -ExecutionPolicy Bypass -File "%~dp0BUILD-ALL.ps1"
