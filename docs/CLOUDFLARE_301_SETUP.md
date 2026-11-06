# Инструкция: Подключение Cloudflare и настройка серверных 301-редиректов

## Зачем это нужно?
На GitHub Pages нет возможности отдавать серверные заголовки `HTTP 301 Moved Permanently`. Сейчас старые ссылки 2006–2015 годов отдают код `200 OK` с meta-refresh, что передает PageRank медленно и с потерями.
Подключение бесплатного Cloudflare перед GitHub Pages позволяет:
1. Отдавать мгновенный серверный `301 Moved Permanently` по всем старым 1500–3000 ссылкам.
2. Склеить исторический ссылочный вес домена в Google и Bing за считанные дни.
3. Получить бесплатную защиту от DDoS, ускорение TTFB через глобальный CDN и автоматический SSL.

---

## Пошаговая настройка (10 минут)

### Шаг 1. Добавление домена в Cloudflare
1. Зарегистрируйтесь на [Cloudflare.com](https://dash.cloudflare.com/) (Free plan).
2. Нажмите **Add a site** и введите: `dubai-architecture.info`.
3. Выберите бесплатный тариф (**Free**).
4. Cloudflare автоматически просканирует существующие DNS-записи.
5. Убедитесь, что для корневого домена и `www` включено проксирование (**Оранжевое облако / Proxied**):
   * `A` -> IP-адреса GitHub Pages:
     * `185.199.108.153`
     * `185.199.109.153`
     * `185.199.110.153`
     * `185.199.111.153`
   * `CNAME` (`www`) -> `<ваш-логин-github>.github.io`
6. Замените NS-серверы у вашего регистратора домена на те, что выдал Cloudflare (обычно вида `amy.ns.cloudflare.com` / `dave.ns.cloudflare.com`).

---

### Шаг 2. Импорт 301-редиректов через Bulk Redirects (В 1 клик)
В проекте уже автоматически сгенерирован готовый файл со всеми 214 правилами:
`docs/cloudflare-bulk-redirects.csv`

1. В панели Cloudflare перейдите в:  
   **Rules** $\to$ **Redirect Rules** $\to$ вкладка **Bulk Redirects**.
2. Нажмите **Create Bulk Redirects List**.
3. Название списка: `legacy-dubai-architecture`.
4. Нажмите **Upload CSV** и выберите файл `docs/cloudflare-bulk-redirects.csv`.
5. Сохраните список.
6. Нажмите **Create Bulk Redirect Rule**, выберите созданный список `legacy-dubai-architecture` и нажмите **Deploy**.

---

### Шаг 3. Универсальное правило перенаправления всех остальных `.htm` в каталог (Fallback)
Для любых неучтенных файлов `.htm` из прошлого:
1. Перейдите в **Rules** $\to$ **Redirect Rules** $\to$ **Create Rule**.
2. Название: `Catch All Legacy HTM`.
3. Условие (When incoming requests match):
   * `URI Path` **ends with** `.htm`
4. Действие (Then):
   * Type: **Dynamic**
   * Expression: `concat("https://dubai-architecture.info/buildings/")`
   * Status code: **301**
   * Preserve query string: Checked
5. Нажмите **Deploy**.

Готово! Теперь каждая старая ссылка из форумов 2006–2015 годов моментально передает 100% PageRank в Google и Bing.
