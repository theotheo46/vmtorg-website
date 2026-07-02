# ВМ-Торг — сайт

Одностраничный сайт премиальной мебели ручной работы. Статический (React + Babel
в браузере), без сборки — публикуется на GitHub Pages «как есть».

🔗 Сайт: https://theotheo46.github.io/vmtorg-website/

## Структура

```
index.html            ← единственная точка входа (открывается по умолчанию)
app.jsx               ← весь интерфейс
styles.css            ← стили
tweaks-panel.jsx      ← панель настроек (видна только в редакторе, на сайте скрыта)
images/               ← фотографии изделий
favicon.svg, *.png    ← иконки сайта (вкладка браузера, иконка на iOS)
.nojekyll             ← отключает обработку Jekyll на GitHub Pages
404.html              ← возврат на главную для неизвестных путей
.github/workflows/    ← автодеплой через GitHub Actions
deploy.sh             ← скрипт первичной публикации
```

## Локальный запуск

Сайт статический, но открывать `index.html` напрямую через `file://` не стоит —
браузер может заблокировать загрузку скриптов и шрифтов из-за CORS. Нужен любой
локальный HTTP-сервер, например:

```bash
python3 -m http.server 8000
```

или

```bash
npx serve .
```

Затем открыть http://localhost:8000 в браузере.

## Публикация

### Быстро (рекомендуется)

```bash
bash deploy.sh
```

Скрипт создаст репозиторий, включит Pages и запушит код. Нужен установленный и
авторизованный [GitHub CLI](https://cli.github.com/) (`gh auth login`).

### Вручную

```bash
git init && git branch -M main
git add -A && git commit -m "Deploy ВМ-Торг site"
git remote add origin https://github.com/<USERNAME>/vmtorg-site.git
git push -u origin main
```

Затем в репозитории: **Settings → Pages → Source = «GitHub Actions»**.

Сайт будет доступен по адресу `https://<USERNAME>.github.io/<repo>/`.
Каждый последующий `git push` в `main` автоматически переразвёртывает сайт.

## Заметки

- Все пути к ресурсам относительные — сайт работает в подпапке `/<repo>/` без изменений.
- Перед публичным запуском замените контактные данные (телефон, e-mail, адрес)
  в начале `app.jsx`.
