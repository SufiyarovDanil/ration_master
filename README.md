# Запуск проекта

Устанавливаете wsl на Windows 10
```
https://github.com/microsoft/WSL/releases/download/2.0.14/wsl.2.0.14.0.x64.msi
```

Устанавливете Докер
```
https://www.docker.com/products/docker-desktop/
```

При запущенном `Docker desktop` в powershell, находясь в корневой директории проекта, введите команду
```
docker-compose up
```

После запуска следует немного подождать, так как приложение
не сразу начинает обрабатывать запросы.

Для открытия приложения нужно ввести
```http://localhost:3000``` в адресной строке браузера
