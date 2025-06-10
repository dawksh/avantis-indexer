import TelegramBot, { type Message } from 'node-telegram-bot-api';
import { redis } from './redis';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const REDIS_USERS_KEY = 'telegram_users';
const bot = new TelegramBot(TOKEN, { polling: true });

type UserId = number;
type Users = UserId[];

const loadUsers = async (trader: string, amount: number): Promise<Users> =>
    amount > 500
        ? (await redis.smembers(REDIS_USERS_KEY)).map(Number)
        : (await redis.smembers(`address_subscribers:${trader.toLowerCase()}`)).map(Number);
const saveUser = async (id: UserId): Promise<void> => { await redis.sadd(REDIS_USERS_KEY, id.toString()); };
const registerUser = async (id: UserId): Promise<void> => { await saveUser(id); };

bot.onText(/\/start/, async (msg: Message) => {
    const chatId = msg.chat.id;
    await registerUser(chatId);
    bot.sendMessage(chatId,
        `👋 Hey there!  \nYou're all set and registered to receive real-time trade alerts from Avantis over $500.\n\nTo subscribe to alerts for a specific wallet address, use the /subscribe command.\nSit back and let the bot keep you updated on all the big moves! 🚀`
    );
});

bot.onText(/\/subscribe/, async (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Send the wallet address you want to subscribe to:');
    bot.once('message', async (m: Message) => {
        const address = m.text?.trim();
        if (!address) return bot.sendMessage(chatId, 'Invalid address.');
        const key = `address_subscribers:${address.toLowerCase()}`;
        await redis.sadd(key, chatId.toString());
        bot.sendMessage(chatId, `Subscribed to ${address}`);
    });
});

bot.onText(/\/unsubscribe/, async (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Send the wallet address you want to unsubscribe from:');
    bot.once('message', async (m: Message) => {
        const address = m.text?.trim();
        if (!address) return bot.sendMessage(chatId, 'Invalid address.');
        const key = `address_subscribers:${address.toLowerCase()}`;
        await redis.srem(key, chatId.toString());
        bot.sendMessage(chatId, `Unsubscribed from ${address}`);
    });
});

const chunk = (arr: number[], size: number): number[][] =>
    arr.length > size ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : [arr];

export const broadcastMessage = async (message: string, trader: string, amount: number) => {
    const users = await loadUsers(trader, amount);
    if (users.length === 0) return;
    const userChunks = chunk(users, 25);
    for (const group of userChunks) {
        await Promise.allSettled(
            group.map((id: number) => bot.sendMessage(id, message, { parse_mode: 'Markdown' }))
        );
        await new Promise((res) => setTimeout(res, 1000));
    }
    console.log(`Broadcasted to ${users.length} users safely in chunks.`);
}

export const announcement = async (message: string) => {
    const users = (await redis.smembers(REDIS_USERS_KEY)).map(Number);
    if (users.length === 0) return;
    const userChunks = chunk(users, 25);
    for (const group of userChunks) {
        await Promise.allSettled(
            group.map((id: number) => bot.sendMessage(id, message, { parse_mode: 'Markdown' }))
        );
        await new Promise(res => setTimeout(res, 1000));
    }
};

