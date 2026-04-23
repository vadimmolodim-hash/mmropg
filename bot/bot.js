const { Bot, InlineKeyboard } = require('grammy');

const BOT_TOKEN = process.env.BOT_TOKEN || 'ВСТАВЬ_ТОКЕН_СЮДА';
const WEBAPP_URL = process.env.WEBAPP_URL || 'https://твой-домен.vercel.app';

const bot = new Bot(BOT_TOKEN);

bot.command('start', async (ctx) => {
    const keyboard = new InlineKeyboard().webApp('🎮 Играть', WEBAPP_URL);
    await ctx.reply(
        `👋 Привет, ${ctx.from.first_name}!

` +
        `⚔️ Добро пожаловать в **MMORPG**!
` +
        `🌍 Открытый мир, битвы, прокачка и друзья.

` +
        `Нажми кнопку ниже, чтобы начать:`,
        { parse_mode: 'Markdown', reply_markup: keyboard }
    );
});

bot.command('profile', async (ctx) => {
    await ctx.reply(`📊 Твой профиль:
🆔 ID: ${ctx.from.id}
👤 Имя: ${ctx.from.first_name}`);
});

bot.command('top', async (ctx) => {
    await ctx.reply('🏆 Топ игроков скоро будет здесь!');
});

bot.on('message:web_app_data', async (ctx) => {
    try {
        const data = JSON.parse(ctx.message.web_app_data.data);
        if (data.action === 'level_up') {
            await ctx.reply(`🎉 Поздравляем! Ты достиг уровня ${data.level}!`);
        }
    } catch (e) {}
});

bot.start();
console.log('🤖 Bot started!');
