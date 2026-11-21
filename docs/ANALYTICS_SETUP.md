# 📊 Подключение Google Search Console, Google Analytics 4 и Microsoft Clarity к AI-агенту

Для того чтобы AI-агент мог напрямую подключаться по API, читать метрики, анализировать поисковые запросы, поведение пользователей, конверсии и тепловые карты, в проекте настроена подсистема аналитики (`scripts/analytics/`).

Все запросы к Google работают через существующий сервисный аккаунт (`service_account.json`), поэтому вам **не нужно проходить сложную OAuth2-авторизацию в браузере**.

---

## 1. Google Search Console (GSC API)

Сервисный аккаунт проекта:
```text
dubai-architecture-indexer@tensile-analyst-452010-q7.iam.gserviceaccount.com
```

### Шаг 1. Включить API в Google Cloud
Перейдите по ссылке и нажмите **«Включить» (Enable)**:
👉 [Включить Google Search Console API](https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=104605878224)

### Шаг 2. Дать доступ сервисному аккаунту в GSC
1. Откройте [Google Search Console](https://search.google.com/search-console).
2. Выберите ресурс (например, `sc-domain:dubai-architecture.info` или `https://dubai-architecture.info/`).
3. Перейдите в **Настройки (Settings)** ➡️ **Пользователи и разрешения (Users and permissions)**.
4. Нажмите **«Добавить пользователя» (Add User)**.
5. Введите Email:
   ```text
   dubai-architecture-indexer@tensile-analyst-452010-q7.iam.gserviceaccount.com
   ```
6. Укажите разрешение: **Полный доступ (Full)** или **Только чтение (Restricted)**.

---

## 2. Google Analytics 4 (GA4 Data API)

В проекте уже настроен клиентский трекинг `NEXT_PUBLIC_GA_ID=G-S9Q49RFJE1`.
Для прямого чтения данных через API требуется числовой **Property ID** и права на чтение.

### Шаг 1. Включить API в Google Cloud
Перейдите по ссылкам и нажмите **«Включить» (Enable)**:
👉 [Включить Google Analytics Data API](https://console.developers.google.com/apis/api/analyticsdata.googleapis.com/overview?project=104605878224)  
👉 [Включить Google Analytics Admin API](https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=104605878224)

### Шаг 2. Дать доступ сервисному аккаунту в GA4
1. Откройте [Google Analytics](https://analytics.google.com/).
2. Внизу слева нажмите шестеренку **Администратор (Admin)**.
3. В колонке ресурса выберите **Управление доступом к ресурсу (Property Access Management)**.
4. Нажмите синий плюс **«+» ➡️ Добавить пользователей**.
5. Введите Email:
   ```text
   dubai-architecture-indexer@tensile-analyst-452010-q7.iam.gserviceaccount.com
   ```
6. Выберите роль: **Читатель (Viewer)**.

### Шаг 3. Указать Property ID в `.env.local`
1. В GA4: **Администратор** ➡️ **Настройки ресурса** ➡️ **Сведения о ресурсе (Property details)**.
2. Скопируйте числовой **Идентификатор ресурса (Property ID)** (например, `459123847`).
3. Добавьте его в `.env.local`:
   ```bash
   GA4_PROPERTY_ID=459123847
   ```

---

## 3. Microsoft Clarity (Data Export API)

В проекте уже подключен счетчик `NEXT_PUBLIC_CLARITY_ID=z956pgqwta`.
Для выгрузки тепловых карт, кликов ярости (rage clicks), мертвых кликов и UX-метрик через API:

1. Откройте панель [Microsoft Clarity](https://clarity.microsoft.com/) и выберите проект `z956pgqwta`.
2. Перейдите в **Settings** ➡️ **Data Export**.
3. Нажмите **Generate new API token**.
4. Задайте имя токена (например, `agent-analytics`).
5. Скопируйте полученный токен и добавьте в `.env.local`:
   ```bash
   CLARITY_API_TOKEN=ваш_токен_здесь
   ```

---

## 4. Команды для проверки и запуска анализа

Вы или AI-агент можете в любой момент выполнить:

- **Проверить статус подключения всех сервисов:**
  ```bash
  npm run analytics:verify
  ```
- **Сводный отчет по всем системам:**
  ```bash
  npm run analytics
  # или с указанием периода (например, за 14 дней):
  node scripts/analytics/cli.mjs --all --days 14
  ```
- **Только Search Console (клики, показы, CTR, позиции, топ-запросы, топ-страницы):**
  ```bash
  npm run analytics:gsc
  ```
- **Только Google Analytics (посетители, сессии, отказы, каналы трафика, топ-страницы):**
  ```bash
  npm run analytics:ga4
  ```
- **Только Microsoft Clarity (UX-аномалии, rage clicks, скролл, ошибки JS):**
  ```bash
  npm run analytics:clarity
  ```
