@echo off
setlocal

if exist "D:\jdks\jdk-21.0.8\bin\java.exe" (
	set "JAVA_HOME=D:\jdks\jdk-21.0.8"
) else (
	set "JAVA_HOME=C:\Program Files\Java\jdk-17"
)
set "PATH=%JAVA_HOME%\bin;%PATH%"
set "GRADLE_USER_HOME=D:\gradle-home"
set "TEMP=D:\gradle-temp"
set "TMP=D:\gradle-temp"
set "JAVA_TOOL_OPTIONS="
set "_JAVA_OPTIONS="
set "GRADLE_OPTS="

cd /d D:\react-js\Vocal\android
call gradlew.bat %*

endlocal