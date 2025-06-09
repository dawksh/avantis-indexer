import {
    createPublicClient,
    webSocket,
    type Transaction,
} from "viem";
import { base } from "viem/chains";

import { config } from "dotenv";
import { decodeTransaction } from "./lib/decode";
import logger from "./lib/logger";
import './lib/telegram'


config();

const publicClient = createPublicClient({
    chain: base,
    transport: webSocket(
        process.env.BASE_RPC!
    ),
});

const processBlock = async (block: any) => {
    const filters = (block.transactions as unknown as Transaction[]).filter(
        (tx) => tx.to === "0x44914408af82bc9983bbb330e3578e1105e11d4e"
    );
    const decoded = filters.map(tx => decodeTransaction(tx))
    const trades = decoded.filter(tx => tx !== null)
    logger.info(`Parsed ${trades.length} trades`)
};

const unwatch = publicClient.watchBlocks({
    onBlock: processBlock,
    includeTransactions: true,
});

process.on('SIGINT', () => {
    unwatch()
    process.exit(0)
})
