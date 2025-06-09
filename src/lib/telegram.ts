import TelegramBot, { type Message } from 'node-telegram-bot-api';
import { writeFileSync, readFileSync, existsSync } from 'fs';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const USERS_FILE = 'users.json';
const bot = new TelegramBot(TOKEN, { polling: true });

type UserId = number;
type Users = UserId[];

const loadUsers = (): Users => {
    if (!existsSync(USERS_FILE)) return [];
    return JSON.parse(readFileSync(USERS_FILE, 'utf-8'));
}

const saveUsers = (users: Users): void => {
    writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

const registerUser = (id: UserId): void => {
    const users = loadUsers();
    if (!users.includes(id)) {
        users.push(id);
        saveUsers(users);
    }
}

bot.onText(/\/start/, (msg: Message) => {
    const chatId = msg.chat.id;
    registerUser(chatId);
    bot.sendMessage(chatId,
        `👋 Hey there!  
You're all set and registered to receive real-time trade alerts from Avantis.  
Sit back and let the bot keep you updated on all the big moves with margin over $100! 🚀  
If you have any questions, just type /help to get started.`
    );
});


const chunk = (arr: number[], size: number): number[][] =>
    arr.length > size ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : [arr];

export const broadcastMessage = async (message: string) => {
    const users = loadUsers();
    const userChunks = chunk(users, 25);

    for (const group of userChunks) {
        await Promise.allSettled(
            group.map((id: number) => bot.sendMessage(id, message, { parse_mode: 'Markdown' }))
        );
        await new Promise((res) => setTimeout(res, 1000));
    }

    console.log(`Broadcasted to ${users.length} users safely in chunks.`);
}

