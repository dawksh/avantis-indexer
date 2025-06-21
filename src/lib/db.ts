import { PrismaClient, type Trade } from '@prisma/client'

const prisma = new PrismaClient()

export const db = prisma

export const saveTrade = async (trade: Trade) => {
    await prisma.trade.create({
        data: trade,
    });
};