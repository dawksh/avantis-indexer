export type Trade = {
    trader: string
    pairIndex: bigint
    index: bigint
    initialPosToken: bigint
    positionSizeUSDC: bigint
    openPrice: bigint
    buy: boolean
    leverage: bigint
    tp: bigint
    sl: bigint
    timestamp: bigint
}