import { type Transaction, decodeFunctionData } from "viem";
import { TRADING } from "./abi";
import type { Trade } from "./types";
import { pairs } from "./pairs";

export const decodeTransaction = (tx: Transaction) => {

    const decoded = decodeFunctionData({
        abi: TRADING,
        data: tx.input,
    });

    switch (decoded.functionName) {
        case "openTrade":
            const margin = Number((decoded.args as unknown as Trade[])[0]?.positionSizeUSDC) / 10 ** 6
            const leverage = Number((decoded.args as unknown as Trade[])[0]?.leverage) / 10 ** 10
            const price = Number((decoded.args as unknown as Trade[])[0]?.openPrice) / 10 ** 10
            const buy = (decoded.args as unknown as Trade[])[0]?.buy
            const tp = Number((decoded.args as unknown as Trade[])[0]?.tp) / 10 ** 10
            const sl = Number((decoded.args as unknown as Trade[])[0]?.sl) / 10 ** 10
            const timestamp = Number((decoded.args as unknown as Trade[])[0]?.timestamp)
            const trader = (decoded.args as unknown as Trade[])[0]?.trader
            const tokenIndex = Number((decoded.args as unknown as Trade[])[0]?.pairIndex)
            const index = Number((decoded.args as unknown as Trade[])[0]?.index)
            return {
                amount: margin,
                leverage,
                price,
                buy,
                tp,
                sl,
                timestamp,
                trader,
                token: pairs[tokenIndex.toString() as keyof typeof pairs].feed.attributes.symbol,
                index,
                action: "open"
            }
        case "closeTradeMarket":
            const closePair = Number((decoded.args as any)[0])
            const amount = Number((decoded.args as any)[2]) / 10 ** 6
            const closeTrader = tx.from
            return {
                amount,
                trader: closeTrader,
                pair: closePair,
                token: pairs[closePair.toString() as keyof typeof pairs].feed.attributes.symbol,
                action: "close"
            }
        default:
            return null
    }
}
