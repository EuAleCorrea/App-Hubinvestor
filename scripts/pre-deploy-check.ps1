# pre-deploy-check.ps1
# Script de validacao para Deploy no EasyPanel (Nixpacks)

Write-Host "--- Iniciando verificacoes pre-deploy ---" -ForegroundColor Cyan

# 1. Verificar next.config.ts (Standalone)
if (Test-Path "next.config.ts") {
    $nextConfig = Get-Content "next.config.ts" -Raw
    if ($nextConfig -match 'output:\s*"standalone"') {
        Write-Host "[OK] next.config.ts: standalone configurado." -ForegroundColor Green
    }
    else {
        Write-Error "ERRO: next.config.ts deve ter output: 'standalone'"
        exit 1
    }
}

# 2. Verificar package.json (Engines)
if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $nodeVer = $packageJson.engines.node
    if ($nodeVer -match ">=20") {
        Write-Host "[OK] package.json: Versao do Node ($nodeVer)." -ForegroundColor Green
    }
    else {
        Write-Error "ERRO: package.json engines.node deve ser >= 20.9.0. Encontrado: $nodeVer"
        exit 1
    }
}

# 3. Verificar nixpacks.toml
if (Test-Path "nixpacks.toml") {
    $nixpacks = Get-Content "nixpacks.toml" -Raw
    if ($nixpacks -match 'providers = \["node"\]' -and $nixpacks -match 'cp -r .next/static') {
        Write-Host "[OK] nixpacks.toml: Configurado." -ForegroundColor Green
    }
    else {
        Write-Error "ERRO: nixpacks.toml incompleto."
        exit 1
    }
}

# 4. Verificar .nixpacksignore
if (Test-Path ".nixpacksignore") {
    Write-Host "[OK] .nixpacksignore presente." -ForegroundColor Green
}

# 5. Build Local
Write-Host "--- Executando build local de validacao ---" -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "ERRO: Build local falhou."
    exit 1
}

Write-Host "`n--- TUDO PRONTO PARA O DEPLOY! ---" -ForegroundColor Cyan
Write-Host "1. Git Push (Hubinvestor main)"
Write-Host "2. EasyPanel -> Rebuild"
Write-Host "3. No EasyPanel Domain: Protocolo HTTP, Porta 8000"
