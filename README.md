# 🎮 MMORPG для Telegram (Mini App)

Полноценный многопользовательский MMORPG прототип для Telegram.

## 📁 Структура

```
mmorpg-telegram/
├── bot/              # Telegram Bot (Grammy)
│   ├── bot.js
│   └── package.json
├── server/           # Игровой сервер (Node.js + Socket.io)
│   ├── server.js
│   └── package.json
└── client/           # Mini App (HTML5 Canvas)
    └── index.html
```

## 🚀 Быстрый старт

### 1. Создай бота в Telegram

1. Напиши [@BotFather](https://t.me/BotFather)
2. Отправь `/newbot`
3. Получи **токен** (сохрани!)
4. Отправь `/mybots` → выбери бота → **Bot Settings** → **Menu Button** → **Menu Button URL**
5. Укажи URL (пока любой, потом обновишь)

### 2. Задеплой сервер на Render.com

1. Зарегистрируйся на [render.com](https://render.com)
2. Нажми **New +** → **Web Service**
3. Подключи GitHub репозиторий или загрузи файлы
4. Заполни поля:
   - **Name:** `mmorpg-server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** `Free`
5. Перейди во вкладку **Environment** → **Add Environment Variable**:
   - `BOT_TOKEN` = твой токен от @BotFather
6. Нажми **Create Web Service**
7. Жди 2-3 минуты, пока статус станет **Live** 🟢
8. Скопируй URL (например `https://mmorpg-server.onrender.com`)

### 3. Задеплой клиент на Vercel

1. Зарегистрируйся на [vercel.com](https://vercel.com)
2. Установи CLI: `npm i -g vercel`
3. В папке `client/` запусти: `vercel`
4. Получи URL (например `https://mmorpg-client.vercel.app`)

Или через GitHub Pages:
1. Залей `client/` в GitHub репозиторий
2. Включи GitHub Pages в настройках

### 4. Обнови конфиги

**В `bot/bot.js`:**
```javascript
const BOT_TOKEN = 'ТВОЙ_ТОКЕН';
const WEBAPP_URL = 'https://твой-клиент.vercel.app';
```

**В `client/index.html`:**
```javascript
const SERVER_URL = 'https://твой-сервер.onrender.com';
```

### 5. Запусти бота

```bash
cd bot
npm install
node bot.js
```

Бот будет работать локально или можешь задеплоить его тоже (например на Railway).

## 🎮 Игровые фичи

| Фича | Описание |
|------|----------|
| 🔐 Авторизация | Через Telegram ID, без паролей |
| 🌍 Открытый мир | 2000×2000 пикселей |
| 👥 Мультиплеер | Все игроки в одном мире в реальном времени |
| ⚔️ PvE | 6 типов врагов (слаймы, гоблины, скелеты, волки, орки, драконы) |
| ⚔️ PvP | Атака других игроков |
| 📈 Прокачка | Уровни, HP, MP, урон, защита |
| 🎒 Лут | Зелья, золото |
| ✨ Скиллы | AOE магия (тратит MP) |
| 💬 Чат | Между игроками |
| 🗺️ Миникарта | Все игроки на карте |
| 📱 Управление | Джойстик + кнопки (мобильные) |
| 💀 Смерть | Теряешь 30% золота, возрождаешься в центре |

## 🛠️ Управление

**Мобильное (основное):**
- 🕹️ Джойстик слева — движение
- ⚔️ Кнопка справа — атака
- ✨ Кнопка скилла — магия
- 🎒 Кнопка инвентаря — подобрать предмет

**Десктоп (для тестов):**
- WASD / Стрелки — движение
- ЛКМ — атака
- Пробел — скилл
- E — подобрать

## 📡 API Endpoints

| Endpoint | Описание |
|----------|----------|
| `GET /health` | Статус сервера |
| `GET /leaderboard` | Топ 10 игроков |

## 🔮 Что добавить

- [ ] Гильдии / кланы
- [ ] Торговля между игроками
- [ ] Боссы с редким лутом
- [ ] Данжи / инстансы
- [ ] Квесты
- [ ] Система крафта
- [ ] PvP арена
- [ ] Таблица лидеров в Telegram
- [ ] Уведомления в Telegram (бот)
- [ ] Сохранение в PostgreSQL
- [ ] Админ-панель

## 📄 Лицензия

MIT
