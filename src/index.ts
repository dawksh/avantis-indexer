import { createPublicClient, webSocket, type Transaction } from "viem";
import { base } from "viem/chains";

import { config } from "dotenv";
import { decodeTransaction } from "./lib/decode";
import logger from "./lib/logger";
import "./lib/telegram";
import { broadcastMessage } from "./lib/telegram";
import { saveTrade } from "./lib/db";
import type { Trade } from "@prisma/client";

config();

const publicClient = createPublicClient({
    chain: base,
    transport: webSocket(process.env.BASE_RPC!),
});

const processBlock = async (block: any) => {
    const filters = (block.transactions as unknown as Transaction[]).filter(
        (tx) => tx.to === "0x44914408af82bc9983bbb330e3578e1105e11d4e"
    );
    const decoded = filters.map((tx) => decodeTransaction(tx));
    const trades = decoded.filter((tx) => tx !== null);
    logger.info(`Parsed ${trades.length} trades`);

    for (const trade of trades) {
        switch (trade.action) {
            case "open":
                const tradeStore = {
                    direction: trade.buy ? "long" : "short",
                    amount: trade.amount,
                    price: trade.price!,
                    leverage: trade.leverage!,
                    tp: trade.tp!,
                    sl: trade.sl!,
                    trader: trade.trader!,
                    token: trade.token!,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    id: crypto.randomUUID(),
                }
                await saveTrade(tradeStore as Trade);
                break;
            case "close":
                logger.info(`Trade Amount: ${trade.amount}`);
                const msg =
                    "✅ *Position Closed*\n\n" +
                    "👤 *Trader*: " +
                    trade.trader +
                    "\n" +
                    "💱 *Token*: " +
                    trade.token +
                    "\n" +
                    "💸 *Amount*: $" +
                    trade.amount +
                    "\n\n";
                // broadcastMessage(msg, trade.trader!, trade.amount);
                saveTrade({
                    direction: trade.buy ? "long" : "short",
                    amount: trade.amount,
                    price: trade.price!,
                    leverage: trade.leverage!,
                    tp: trade.tp!,
                    sl: trade.sl!,
                    trader: trade.trader!,
                    token: trade.token!,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    id: crypto.randomUUID(),
                });
                break;
        }
    }
};

const unwatch = publicClient.watchBlocks({
    onBlock: processBlock,
    includeTransactions: true,
});

process.on("SIGINT", () => {
    unwatch();
    process.exit(0);
});
