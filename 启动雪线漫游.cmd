@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo 请先安装 Node.js 20.19 或更新版本。
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  echo 首次启动，正在安装本工程依赖。
  call npm install
  if errorlevel 1 (
    echo 安装失败，请检查网络后重试。
    pause
    exit /b 1
  )
)
start "雪线漫游 本地开发服务" /min node node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5187 --strictPort
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:5187/
