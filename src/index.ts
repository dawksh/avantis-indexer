import {
    createPublicClient,
    webSocket,
    type Block,
    type Transaction,
} from "viem";
import { base } from "viem/chains";

import { config } from "dotenv";
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
    console.log(filters)
};

const unwatch = publicClient.watchBlocks({
    onBlock: processBlock,
    includeTransactions: true,
});

process.on('SIGINT', () => {
    unwatch()
    process.exit(0)
})
