$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploy to Cloudflare Pages" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if wrangler is installed
Write-Host "[1/3] Checking Wrangler..." -ForegroundColor Yellow
if (!(Get-Command wrangler -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Wrangler..." -ForegroundColor Yellow
    npm install -g wrangler
}
Write-Host "OK: Wrangler ready" -ForegroundColor Green
Write-Host ""

# Login to Cloudflare
Write-Host "[2/3] Login to Cloudflare..." -ForegroundColor Yellow
wrangler login
Write-Host ""

# Deploy
Write-Host "[3/3] Deploying..." -ForegroundColor Yellow
wrangler pages deploy out-cloudflare --project-name=kuwait-store
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
