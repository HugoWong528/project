@echo off
REM ============================================
REM Local Data Platform Launcher
REM One-click startup - No setup required
REM ============================================

setlocal enabledelayedexpansion

REM Color settings (Windows command prompt colors)
color 0A

echo.
echo ============================================
echo  Local Data Platform
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, run this file again.
    echo.
    pause
    exit /b 1
)

REM Get Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo Node.js detected: %NODE_VERSION%
echo.

REM Check if server.js exists
if not exist "server.js" (
    echo ERROR: server.js not found!
    echo Please make sure this file is in the same directory as server.js
    echo.
    pause
    exit /b 1
)

REM Start the server
echo Starting server...
echo Please wait...
echo.

REM Start Node.js server and capture PID
start /b node server.js
set SERVER_PID=!ERRORLEVEL!

REM Wait for server to start
timeout /t 2 /nobreak

REM Try to open browser
echo Opening browser...
start http://localhost:3000

echo.
echo ============================================
echo Server is running at http://localhost:3000
echo.
echo Browser should open automatically.
echo If it doesn't, manually open:
echo http://localhost:3000
echo.
echo Press any key to keep the server running...
echo (Close this window to stop the server)
echo ============================================
echo.

pause >nul
