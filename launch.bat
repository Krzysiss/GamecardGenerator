@echo off
start "" "http://127.0.0.1:80/tak.html"
python -m http.server 80
pause