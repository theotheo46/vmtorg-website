# ВМ-Торг — сайт

Одностраничный сайт премиальной мебели ручной работы. Статический (React + Babel
в браузере), без сборки — публикуется на GitHub Pages «как есть».

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
