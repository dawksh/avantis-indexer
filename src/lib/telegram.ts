import TelegramBot, { type Message } from 'node-telegram-bot-api';
import { redis } from './redis';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const REDIS_USERS_KEY = 'telegram_users';
const bot = new TelegramBot(TOKEN, { polling: true });

type UserId = number;
type Users = UserId[];

const loadUsers = async (): Promise<Users> => (await redis.smembers(REDIS_USERS_KEY)).map(Number);
const saveUser = async (id: UserId): Promise<void> => { await redis.sadd(REDIS_USERS_KEY, id.toString()); };
const registerUser = async (id: UserId): Promise<void> => { await saveUser(id); };

bot.onText(/\/start/, async (msg: Message) => {
    const chatId = msg.chat.id;
    await registerUser(chatId);
    bot.sendMessage(chatId,
        `👋 Hey there!  
You're all set and registered to receive real-time trade alerts from Avantis.  
Sit back and let the bot keep you updated on all the big moves with margin over $50! 🚀  `
    );
});

const chunk = (arr: number[], size: number): number[][] =>
    arr.length > size ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : [arr];

export const broadcastMessage = async (message: string) => {
    const users = await loadUsers();
    const userChunks = chunk(users, 25);
    for (const group of userChunks) {
        await Promise.allSettled(
            group.map((id: number) => bot.sendMessage(id, message, { parse_mode: 'Markdown' }))
        );
        await new Promise((res) => setTimeout(res, 1000));
    }
    console.log(`Broadcasted to ${users.length} users safely in chunks.`);
}

