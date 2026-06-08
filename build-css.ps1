# Money Logger — compile the design-system CSS with the Tailwind standalone CLI.
#
#   Build once:   ./build-css.ps1
#   Watch mode:   ./build-css.ps1 -Watch
#
# The compiled, optimized file is written to static/css/app.css and IS committed,
# so production (Zeabur) needs no build step — just `collectstatic`.
param([switch]$Watch)

$ErrorActionPreference = "Stop"
$bin = Join-Path $PSScriptRoot "tools/tailwindcss.exe"

if (-not (Test-Path $bin)) {
    Write-Host "Tailwind binary missing. Downloading v3.4.17..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force (Join-Path $PSScriptRoot "tools") | Out-Null
    Invoke-WebRequest `
        -Uri "https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe" `
        -OutFile $bin
}

$inp = Join-Path $PSScriptRoot "static_src/input.css"
$out = Join-Path $PSScriptRoot "static/css/app.css"

if ($Watch) {
    & $bin -i $inp -o $out --watch
} else {
    & $bin -i $inp -o $out --minify
    Write-Host "Built static/css/app.css" -ForegroundColor Green
}
