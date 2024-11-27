@echo off
for %%i in (*.jpg) do (
    "C:\Users\brett\webptool\libwebp-0.4.2-rc2-windows-x64\libwebp-0.4.2-rc2-windows-x64\bin\cwebp.exe" "%%i" -o "%%~ni.webp"
)
echo Conversion complete!
pause
