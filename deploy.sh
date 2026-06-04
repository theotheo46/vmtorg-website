#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
#  ВМ-Торг — деплой статического сайта на GitHub Pages
#  Запуск:  bash deploy.sh
#
#  Что делает скрипт:
#   1. Инициализирует git-репозиторий (если ещё не инициализирован)
#   2. Создаёт репозиторий на GitHub и включает Pages (через gh CLI, если есть)
#   3. Коммитит и пушит в ветку main
#  После пуша GitHub Actions (.github/workflows/deploy.yml) публикует сайт.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

# ── НАСТРОЙКИ ────────────────────────────────────────────────────────────────
REPO_NAME="vmtorg-website"        # имя репозитория на GitHub
VISIBILITY="public"            # public | private  (Pages для private требует платный план)
BRANCH="main"
# ─────────────────────────────────────────────────────────────────────────────

cd "$(dirname "$0")"

echo "→ Подготовка git-репозитория…"
if [ ! -d .git ]; then
  git init -q
  git branch -M "$BRANCH"
fi

git add -A
git commit -q -m "Deploy ВМ-Торг site" || echo "  (нет изменений для коммита)"

# ── Вариант A: автоматически через GitHub CLI ────────────────────────────────
if command -v gh >/dev/null 2>&1; then
  echo "→ Найден GitHub CLI (gh)."
  if ! git remote get-url origin >/dev/null 2>&1; then
    echo "→ Создаю репозиторий на GitHub и пушу…"
    gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push
  else
    echo "→ remote 'origin' уже настроен, пушу…"
    git push -u origin "$BRANCH"
  fi

  echo "→ Включаю GitHub Pages (источник: GitHub Actions)…"
  OWNER="$(gh api user --jq .login)"
  gh api -X POST "repos/$OWNER/$REPO_NAME/pages" \
    -f "build_type=workflow" >/dev/null 2>&1 \
    || gh api -X PUT "repos/$OWNER/$REPO_NAME/pages" -f "build_type=workflow" >/dev/null 2>&1 \
    || echo "  (Pages, возможно, уже включён — проверьте Settings → Pages)"

  echo ""
  echo "✓ Готово. Сайт будет доступен через 1–2 минуты по адресу:"
  echo "    https://$OWNER.github.io/$REPO_NAME/"
  echo "  Статус сборки: вкладка Actions в репозитории."
  exit 0
fi

# ── Вариант B: вручную (без gh CLI) ──────────────────────────────────────────
cat <<'EOF'

GitHub CLI (gh) не найден. Ручные шаги:

  1. Создайте пустой репозиторий на github.com (без README).
  2. Привяжите remote и запушьте:

       git remote add origin https://github.com/<USERNAME>/vmtorg-website.git
       git push -u origin main

  3. На GitHub: Settings → Pages → Build and deployment →
     Source = "GitHub Actions".

  Через ~1–2 минуты сайт будет здесь:
       https://<USERNAME>.github.io/vmtorg-website/

EOF
