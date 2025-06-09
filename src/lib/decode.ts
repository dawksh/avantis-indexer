import { type Transaction, decodeFunctionData } from "viem";
import { TRADING } from "./abi";

export const decodeTransaction = (tx: Transaction) => {

    const decoded = decodeFunctionData({
        abi: TRADING,
        data: tx.input,
    });

    switch (decoded.functionName) {
        case "openTrade":
            console.log(decoded.args)
            break;
        case "closeTradeMarket":
            console.log(decoded.args)
            break;
    }
}
