@echo off
setlocal

cd /d "%~dp0"

if not exist ".env" (
    echo [Bounty Bot] Creating .env from .env.example ...
    copy /y ".env.example" ".env" >nul
)

if not exist "webapp\frontend\dist\index.html" (
    echo [Bounty Bot] No frontend build found.
    echo [Bounty Bot] Run this once from webapp\frontend to build it:
    echo.
    echo     cd webapp\frontend
    echo     npm install
    echo     npm run build
    echo.
    pause
    exit /b 1
)

echo [Bounty Bot] Starting server ...
start "Bounty Bot Server" cmd /k python -m uvicorn webapp.backend.app:app --port 8000

echo [Bounty Bot] Waiting for server to come up ...
timeout /t 3 /nobreak >nul

start "" http://localhost:8000

echo [Bounty Bot] Opened http://localhost:8000 in your browser.
echo [Bounty Bot] Closing this window will NOT stop the server -
echo [Bounty Bot] close the "Bounty Bot Server" window to stop it.

endlocal

