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
    bot.sendMessage(chatId, 'You are now registered for updates!');
});

export const broadcastMessage = (message: string) => {
    const users = loadUsers();

    users.forEach((id) => {
        bot.sendMessage(id, message).catch((err) => {
            console.error(`Failed to send to ${id}:`, err.message);
        });
    });

    console.log(`Broadcasted to ${users.length} users.`);
}

