# Инструкция: Безопасный Cloudflare Worker для приема заявок в Telegram

## В чем проблема прямого Telegram API на статическом сайте?
На GitHub Pages нет сервера. Если вставить токен Telegram-бота в код фронтенда, любой пользователь может открыть консоль (F12) и увидеть ваш секретный токен `TELEGRAM_BOT_TOKEN`.
**Решение**: Бесплатный Cloudflare Worker (100,000 запросов в день бесплатно), который работает как серверный шлюз. Токен хранится внутри защищенных переменных Cloudflare, а сайт отправляет заявку на URL воркера.

---

## Развертывание за 3 минуты (через панель Cloudflare)

### Шаг 1. Создание Worker
1. В панели [dash.cloudflare.com](https://dash.cloudflare.com/) в левом меню нажмите:  
   **Compute (Workers & Pages)** $\to$ **Create** (или **Create application**).
2. Выберите вкладку **Workers** $\to$ нажмите **Create Worker**.
3. Имя воркера: `dubai-architecture-lead-proxy` $\to$ нажмите **Deploy** (Развернуть).

---

### Шаг 2. Вставка кода
1. Нажмите **Edit code** (или **Quick Edit**).
2. Удалите шаблонный код и полностью вставьте содержимое нашего файла:  
   `cloudflare-worker/telegram-lead-proxy.js`.
3. Нажмите в правом верхнем углу **Deploy** (Сохранить и развернуть).

---

### Шаг 3. Добавление секретных переменных Telegram
1. Вернитесь на страницу вашего воркера $\to$ перейдите во вкладку **Settings** $\to$ **Variables and Secrets**.
2. Нажмите **Add** (Добавить) и создайте две переменные:
   * **Переменная 1**:
     * Variable name: `TELEGRAM_BOT_TOKEN`
     * Value: *ваш токен от @BotFather* (нажмите **Encrypt**, чтобы зашифровать).
   * **Переменная 2**:
     * Variable name: `TELEGRAM_CHAT_ID`
     * Value: *ваш ID чата Telegram* (нажмите **Encrypt**).
3. Нажмите **Deploy**.

---

### Шаг 4. Подключение к сайту
1. Скопируйте адрес вашего воркера (он отображается вверху страницы воркера, например:  
   `https://dubai-architecture-lead-proxy.<ваш-аккаунт>.workers.dev`).
2. В файле `.env.local` укажите:
   ```env
   NEXT_PUBLIC_LEAD_WORKER_URL=https://dubai-architecture-lead-proxy.<ваш-аккаунт>.workers.dev
   ```
3. И в секретах GitHub Actions (`Settings -> Secrets and variables -> Actions -> Repository secrets`):
   * Добавьте секрет `NEXT_PUBLIC_LEAD_WORKER_URL` со значением вашего воркера.

Теперь каждая заявка с сайта будет мгновенно и безопасно прилетать в ваш личный Telegram без риска утечки токена!
