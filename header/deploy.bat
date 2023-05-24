@echo off

set BUILD_FOLDER=.dist

rd /s /q %BUILD_FOLDER%
xcopy .next\standalone\ %BUILD_FOLDER%\ /E
del %BUILD_FOLDER%\.next\
mkdir %BUILD_FOLDER%\.next
xcopy .next\ %BUILD_FOLDER%\.next\ /E
del %BUILD_FOLDER%\server.js
rd /s %BUILD_FOLDER%\.next\cache
rd /s %BUILD_FOLDER%\.next\standalone
copy next.config.js %BUILD_FOLDER%\
copy serverless.yml %BUILD_FOLDER%\
copy server.ts %BUILD_FOLDER%\
xcopy public %BUILD_FOLDER%\
cd %BUILD_FOLDER%
sls deploy --verbose