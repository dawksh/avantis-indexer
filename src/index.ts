import { createPublicClient, webSocket, type Transaction } from "viem";
import { base } from "viem/chains";

import { config } from "dotenv";
import { decodeTransaction } from "./lib/decode";
import logger from "./lib/logger";
import "./lib/telegram";
import { broadcastMessage } from "./lib/telegram";

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
                logger.info(`Trade Amount: ${trade.amount}`);
                broadcastMessage(
                    "📢 *New Trade Opened!*\n\n" +
                    "👤 *Trader*: " +
                    trade.trader +
                    "\n" +
                    "💱 *Token*: " +
                    trade.token +
                    "\n" +
                    "🟢 *Direction*: " +
                    (trade.buy ? "Long" : "Short") +
                    "\n" +
                    "💰 *Entry Price*: " +
                    trade.price +
                    "\n" +
                    "⚖️ *Leverage*: " +
                    trade.leverage +
                    "x\n" +
                    "📊 *Amount*: $" +
                    trade.amount +
                    "\n\n" +
                    "🎯 *Take Profit*: $" +
                    trade.tp +
                    "\n" +
                    "🛑 *Stop Loss*: $" +
                    trade.sl,
                    trade.trader!,
                    trade.amount
                );
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
                broadcastMessage(msg, trade.trader!, trade.amount);
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
