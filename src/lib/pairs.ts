export const pairs = {
    "0": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
            "attributes": {
                "symbol": "Crypto.ETH/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 1.5,
            "feedId": "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 75,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.25,
        "groupIndex": 0,
        "feeIndex": 0,
        "values": {
            "maxGainP": 1500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 100,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 100,
            "maxWalletOI": 50
        },
        "from": "ETH",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 982982.09,
            "short": 971945.07
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 1954927.16,
        "pairMaxOI": 7613021.85,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 28057518,
            "onePercentDepthBelow": 28283386
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 1,
            "pnlPriceImpactMultiplier": 1.2,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 2,
            "pnlNegSpreadCap": 3,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 10,
            "tierP": [
                1,
                5,
                10,
                25,
                50,
                100,
                250,
                500,
                1200,
                3000
            ],
            "feesP": [
                80,
                50,
                45,
                30,
                26.25,
                22.5,
                22.5,
                15,
                15,
                2.5
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 0,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "1": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
            "attributes": {
                "symbol": "Crypto.BTC/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 1.5,
            "feedId": "0xCCADC697c55bbB68dc5bCdf8d3CBe83CdD4E071E"
        },
        "spreadP": 0,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 75,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 0,
        "feeIndex": 1,
        "values": {
            "maxGainP": 1500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 100,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 100,
            "maxWalletOI": 50
        },
        "from": "BTC",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 559504.93,
            "short": 518722.94
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 1078227.87,
        "pairMaxOI": 7613021.85,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 20381950.28,
            "onePercentDepthBelow": 22403055.792
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 1,
            "pnlPriceImpactMultiplier": 1.4,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 2,
            "pnlNegSpreadCap": 5,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 10,
            "tierP": [
                1,
                5,
                10,
                25,
                50,
                100,
                250,
                500,
                1200,
                3000
            ],
            "feesP": [
                80,
                50,
                45,
                30,
                26.25,
                22.5,
                22.5,
                15,
                15,
                2.5
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 1,
        "pairSpreadP": 0,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "2": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
            "attributes": {
                "symbol": "Crypto.SOL/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 1.5,
            "feedId": "0x975043adBb80fc32276CbF9Bbcfd4A601a12462D"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 75,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.25,
        "groupIndex": 1,
        "feeIndex": 2,
        "values": {
            "maxGainP": 1500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 95,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 95,
            "maxWalletOI": 50
        },
        "from": "SOL",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 74170.4,
            "short": 56597.69
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 130768.08,
        "pairMaxOI": 1180795.23,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 13017572.288,
            "onePercentDepthBelow": 11001789.12
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 1,
            "pnlPriceImpactMultiplier": 1.2,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 2,
            "pnlNegSpreadCap": 3,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 10,
            "tierP": [
                1,
                5,
                10,
                25,
                50,
                100,
                250,
                500,
                1200,
                3000
            ],
            "feesP": [
                80,
                50,
                45,
                30,
                26.25,
                22.5,
                22.5,
                15,
                15,
                2.5
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 2,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "3": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
            "attributes": {
                "symbol": "Crypto.BNB/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.07,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 3,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "BNB",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 568.8,
            "short": 403.51
        },
        "marginFee": {
            "long": 0.00256104,
            "short": 0.00174492
        },
        "pairOI": 972.31,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 2377954.952,
            "onePercentDepthBelow": 2473007.712
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 3,
        "pairSpreadP": 0.07,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "4": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
            "attributes": {
                "symbol": "Crypto.ARB/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.07,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 4,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "ARB",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 683809.824,
            "onePercentDepthBelow": 666895.28
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 4,
        "pairSpreadP": 0.07,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "5": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c",
            "attributes": {
                "symbol": "Crypto.DOGE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.02,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 1,
        "feeIndex": 5,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 22,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 22,
            "maxWalletOI": 50
        },
        "from": "DOGE",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 6414.18,
            "short": 6729.46
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.00117252
        },
        "pairOI": 13143.64,
        "pairMaxOI": 273447.32,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 14682594.88,
            "onePercentDepthBelow": 12932758.16
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 3,
            "2": 3,
            "3": 3
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 5,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "6": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x93da3352f9f1d105fdfe4971cfa80e9dd777bfc5d0f683ebb6e1294b92137bb7",
            "attributes": {
                "symbol": "Crypto.AVAX/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 6,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "AVAX",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 3628.37,
            "short": 3893.02
        },
        "marginFee": {
            "long": 0.0022287599999999998,
            "short": 0.00238464
        },
        "pairOI": 7521.39,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1866048.568,
            "onePercentDepthBelow": 1720874.44
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 6,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "7": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x385f64d993f7b77d8182ed5003d97c60aa3361f3cecfe711544d2d59165e9bdf",
            "attributes": {
                "symbol": "Crypto.OP/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 1,
            "feedId": "0x3E3A6bD129A63564FE7abde85FA67c3950569060"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 7,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "OP",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 9868.79,
            "short": 9293.61
        },
        "marginFee": {
            "long": 0.0026879399999999998,
            "short": 0.0025099199999999997
        },
        "pairOI": 19162.4,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 707172.784,
            "onePercentDepthBelow": 483817.936
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 7,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "8": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xffd11c5a1cfd42f80afb2df4d9f264c15f956d68153335374ec10722edd70472",
            "attributes": {
                "symbol": "Crypto.POL/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 8,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "POL",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 11741.79,
            "short": 11057.45
        },
        "marginFee": {
            "long": 0.0027844199999999997,
            "short": 0.0025992
        },
        "pairOI": 22799.23,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 340420.976,
            "onePercentDepthBelow": 169759.44
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 8,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "9": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x09f7c1d7dfbb7df2b8fe3d3d87ee94a2259d212da4f30c1f0540d066dfa44723",
            "attributes": {
                "symbol": "Crypto.TIA/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 9,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 15
        },
        "from": "TIA",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 7907.51,
            "short": 7999.86
        },
        "marginFee": {
            "long": 0.0028911600000000003,
            "short": 0.0029588400000000003
        },
        "pairOI": 15907.37,
        "pairMaxOI": 62147.12,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 395455.408,
            "onePercentDepthBelow": 316735.152
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 9,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "10": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb",
            "attributes": {
                "symbol": "Crypto.SEI/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 10,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 15
        },
        "from": "SEI",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 2204.57,
            "short": 2076.08
        },
        "marginFee": {
            "long": 0.0024114600000000003,
            "short": 0.0022536
        },
        "pairOI": 4280.64,
        "pairMaxOI": 62147.12,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 287835.576,
            "onePercentDepthBelow": 275572.4
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 10,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "11": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b",
            "attributes": {
                "symbol": "FX.EUR/USD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 500,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 11,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 70,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 70,
            "maxWalletOI": 15
        },
        "from": "EUR",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 75410.47,
            "short": 16660.39
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 92070.86,
        "pairMaxOI": 2175149.1,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 11,
        "pairSpreadP": 0,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "12": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52",
            "attributes": {
                "symbol": "FX.USD/JPY",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 500,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 12,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 70,
            "maxWalletOIP": 50,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 70,
            "maxWalletOI": 50
        },
        "from": "USD",
        "to": "JPY",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 188615.34,
            "short": 191460.83
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 380076.17,
        "pairMaxOI": 2175149.1,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 12,
        "pairSpreadP": 0,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "13": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1",
            "attributes": {
                "symbol": "FX.GBP/USD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0,
        "pnlSpreadP": 0,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 500,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 13,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 70,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 70,
            "maxWalletOI": 15
        },
        "from": "GBP",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 360803.54,
            "short": 0
        },
        "marginFee": {
            "long": 0.0006364799999999999,
            "short": 0.0005707762557077625
        },
        "pairOI": 360803.54,
        "pairMaxOI": 2175149.1,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 13,
        "pairSpreadP": 0,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "14": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x3112b03a41c910ed446852aacf67118cb1bec67b2cd0b9a214c58cc0eaa2ecca",
            "attributes": {
                "symbol": "FX.USD/CAD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 14,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 15,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "CAD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 2498.92,
            "short": 19921.15
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 22420.07,
        "pairMaxOI": 1553677.93,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 14,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "15": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x0b1e3297e69f162877b577b0d6a47a0d63b2392bc8499e6540da4187a63e28f8",
            "attributes": {
                "symbol": "FX.USD/CHF",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 15,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 15,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "CHF",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 83400.53,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 83400.53,
        "pairMaxOI": 1553677.93,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 15,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "16": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x8ccb376aa871517e807358d4e3cf0bc7fe4950474dbe6c9ffc21ef64e43fc676",
            "attributes": {
                "symbol": "FX.USD/SEK",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 16,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "SEK",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 0.3,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0.3,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 16,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "17": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x67a6f93030420c1c9e3fe37c1ab6b77966af82f995944a9fefce357a22854a80",
            "attributes": {
                "symbol": "FX.AUD/USD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 17,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "AUD",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 0.08,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0.08,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 17,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "18": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x92eea8ba1b00078cdc2ef6f64f091f262e8c7d0576ee4677572f314ebfafa4c7",
            "attributes": {
                "symbol": "FX.NZD/USD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 18,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "NZD",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 884.84,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 884.84,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 18,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "19": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x396a969a9c1480fa15ed50bc59149e2c0075a72fe8f458ed941ddec48bdb4918",
            "attributes": {
                "symbol": "FX.USD/SGD",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1750021200,
                "next_close": 1749848400,
                "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 75,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 75
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 19,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 75,
            "maxShortOiP": 75,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "SGD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 3502.43,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 3502.43,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 750,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 19,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 750,
        "pairMinLeverage": 1
    },
    "20": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e",
            "attributes": {
                "symbol": "Metal.XAG/USD",
                "asset_type": "Metal",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;0418/C,0526/1800-2400,0619/1800-2400,0704/0000-1300"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.02,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 50,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 3,
        "feeIndex": 20,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 70,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 70,
            "maxWalletOI": 15
        },
        "from": "XAG",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 29632.76,
            "short": 0
        },
        "marginFee": {
            "long": 0.0008561643835616438,
            "short": 0.0008561643835616438
        },
        "pairOI": 29632.76,
        "pairMaxOI": 870059.64,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 7.5
        },
        "openFeeP": 0.08,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                800
            ],
            [
                -5,
                800
            ],
            [
                -5,
                800
            ],
            [
                -5,
                800
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                -5,
                900
            ],
            [
                -5,
                900
            ],
            [
                -5,
                900
            ],
            [
                -5,
                900
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 20,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 1
    },
    "21": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2",
            "attributes": {
                "symbol": "Metal.XAU/USD",
                "asset_type": "Metal",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;0418/C,0526/1800-2400,0619/1800-2400,0704/0000-1300"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.02,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 100,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 3,
        "feeIndex": 21,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 80,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 80,
            "maxWalletOI": 15
        },
        "from": "XAU",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 72258.7,
            "short": 17236.18
        },
        "marginFee": {
            "long": 0.0008561643835616438,
            "short": 0.0008561643835616438
        },
        "pairOI": 89494.88,
        "pairMaxOI": 994353.87,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 7.5
        },
        "openFeeP": 0.08,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 21,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 1
    },
    "22": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xf0d57deca57b3da2fe63a493f4c25925fdfd8edf834b20f93e1f84dbd1504d4a",
            "attributes": {
                "symbol": "Crypto.SHIB/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.01,
        "groupIndex": 4,
        "feeIndex": 22,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 50
        },
        "from": "SHIB",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 1437.88,
            "short": 1319.88
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 2757.76,
        "pairMaxOI": 155367.79,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 2135698.168,
            "onePercentDepthBelow": 1898598.32
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 3,
            "2": 3,
            "3": 3
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 22,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "23": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xd69731a2e74ac1ce884fc3890f7ee324b6deb66147055249568869ed700882e4",
            "attributes": {
                "symbol": "Crypto.PEPE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.01,
        "groupIndex": 4,
        "feeIndex": 23,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 50
        },
        "from": "PEPE",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 1597.47,
            "short": 1461.91
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 3059.37,
        "pairMaxOI": 155367.79,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 5711609.456,
            "onePercentDepthBelow": 5031831.096
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 3,
            "2": 3,
            "3": 3
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 23,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "24": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x72b021217ca3fe68922a19aaf990109cb9d84e9ad004b4d2025ad6f529314419",
            "attributes": {
                "symbol": "Crypto.BONK/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.01,
        "groupIndex": 4,
        "feeIndex": 24,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 50
        },
        "from": "BONK",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 20.27,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 20.27,
        "pairMaxOI": 155367.79,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 992281.76,
            "onePercentDepthBelow": 947704.12
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 3,
            "2": 3,
            "3": 3
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 24,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "25": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x4ca4beeca86f0d164160323817a4e42b10010a724c2217c6ee41b54cd4cc61fc",
            "attributes": {
                "symbol": "Crypto.WIF/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.01,
        "groupIndex": 4,
        "feeIndex": 25,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 50
        },
        "from": "WIF",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 1600.2,
            "short": 1748.3
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 3348.5,
        "pairMaxOI": 155367.79,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 2222774.016,
            "onePercentDepthBelow": 2344691.776
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 3,
            "2": 3,
            "3": 3
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 25,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 1
    },
    "26": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x3d4a2bd9535be6ce8059d75eadeba507b043257321aa544717c56fa19b49e35d",
            "attributes": {
                "symbol": "Crypto.RENDER/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 26,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 15
        },
        "from": "RENDER",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 233051.69,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 329557,
            "onePercentDepthBelow": 215167
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 26,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "27": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xd6835ad1f773de4a378115eb6824bd0c0e42d84d1c84d9750e853fb6b6c7794a",
            "attributes": {
                "symbol": "Crypto.WLD/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 27,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 50,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 50,
            "maxWalletOI": 15
        },
        "from": "WLD",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 404.35,
            "short": 429.37
        },
        "marginFee": {
            "long": 0.0013062599999999998,
            "short": 0.00139356
        },
        "pairOI": 833.72,
        "pairMaxOI": 233051.69,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 351717.896,
            "onePercentDepthBelow": 401802.392
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 27,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "28": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 1,
            "feedId": "0xb98e7ae8af2d298d2651eb21ab5b8b5738212e13efb43bd0dfbce7a74ba4b5d0",
            "attributes": {
                "symbol": "",
                "asset_type": "",
                "is_open": false,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 2,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 100,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 100
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.25,
        "groupIndex": 0,
        "feeIndex": 28,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 100,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 100,
            "maxWalletOI": 50
        },
        "from": "FET",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 994.86,
            "short": 0
        },
        "marginFee": {
            "long": 0.012788279999999999,
            "short": 0
        },
        "pairOI": 994.86,
        "pairMaxOI": 7613021.85,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 98536.333333,
            "onePercentDepthBelow": 96122
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 0
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": false,
        "index": 28,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 2
    },
    "29": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x7677dd124dee46cfcd46ff03cf405fb0ed94b1f49efbea3444aadbda939a7ad3",
            "attributes": {
                "symbol": "Crypto.ARKM/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 29,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "ARKM",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 168278.4,
            "onePercentDepthBelow": 114088.824
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 29,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "30": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x9a4df90b25497f66b1afb012467e316e801ca3d839456db028892fe8c70c8016",
            "attributes": {
                "symbol": "Crypto.PENDLE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 30,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "PENDLE",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 691.33,
            "short": 651.04
        },
        "marginFee": {
            "long": 0.0014112,
            "short": 0.0013226400000000001
        },
        "pairOI": 1342.37,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 250422.68,
            "onePercentDepthBelow": 205207.744
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 30,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "31": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xd40472610abe56d36d065a0cf889fc8f1dd9f3b7f2a478231a5fc6df07ea5ce3",
            "attributes": {
                "symbol": "Crypto.ONDO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 31,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "ONDO",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1389.02,
            "short": 972.92
        },
        "marginFee": {
            "long": 0.0016451999999999999,
            "short": 0.001141552511415525
        },
        "pairOI": 2361.94,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 709356,
            "onePercentDepthBelow": 552982.392
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 31,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "32": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 1,
            "feedId": "0xe417fb7d1edcfe70283c608fa9f14d11ebf4d1b3ecf2e97e42a110f7fb649843",
            "attributes": {
                "symbol": "",
                "asset_type": "",
                "is_open": false,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 2,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 100,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 100
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.25,
        "groupIndex": 0,
        "feeIndex": 32,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "",
        "to": "",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0,
            "short": 0
        },
        "pairOI": 0,
        "pairMaxOI": 2283906.55,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 39476,
            "onePercentDepthBelow": 28946
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 0
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": false,
        "index": 32,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 2
    },
    "33": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xa9f3b2a89c6f85a6c20a9518abde39b944e839ca49a0c92307c65974d3f14a57",
            "attributes": {
                "symbol": "Crypto.DYM/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 33,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 20,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 20,
            "maxWalletOI": 15
        },
        "from": "DYM",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 93220.68,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 47501.52,
            "onePercentDepthBelow": 33479.6
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 33,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "34": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x193c739db502aadcef37c2589738b1e37bdb257d58cf1ab3c7ebc8e6df4e3ec0",
            "attributes": {
                "symbol": "Crypto.ORDI/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.06,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 0,
        "feeIndex": 34,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 1,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 1,
            "maxWalletOI": 15
        },
        "from": "ORDI",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 299.64,
            "short": 0
        },
        "marginFee": {
            "long": 0.008564219999999999,
            "short": 0.001141552511415525
        },
        "pairOI": 299.64,
        "pairMaxOI": 76130.22,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 209595.528,
            "onePercentDepthBelow": 210507.336
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 34,
        "pairSpreadP": 0.06,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "35": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17",
            "attributes": {
                "symbol": "Crypto.STX/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.08,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 0,
        "feeIndex": 35,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 1,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 1,
            "maxWalletOI": 15
        },
        "from": "STX",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 76130.22,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 173394.88,
            "onePercentDepthBelow": 166802.272
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 35,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "36": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xb7910ba7322db020416fcac28b48c01212fd9cc8fbcbaf7d30477ed8605f6bd4",
            "attributes": {
                "symbol": "Crypto.ENA/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.12,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 36,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 2,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 2,
            "maxWalletOI": 15
        },
        "from": "ENA",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 4598.1,
            "short": 4826.11
        },
        "marginFee": {
            "long": 0.00321516,
            "short": 0.0034509600000000003
        },
        "pairOI": 9424.21,
        "pairMaxOI": 24858.85,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 779529.936,
            "onePercentDepthBelow": 718758.52
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 36,
        "pairSpreadP": 0.12,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "37": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x9db37f4d5654aad3e37e2e14ffd8d53265fb3026d1d8f91146539eebaa2ef45f",
            "attributes": {
                "symbol": "Crypto.AERO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.12,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 37,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 13,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 13,
            "maxWalletOI": 15
        },
        "from": "AERO",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 462.11
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.00295524
        },
        "pairOI": 462.11,
        "pairMaxOI": 60593.44,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 43641.984,
            "onePercentDepthBelow": 39995.024
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.16,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 37,
        "pairSpreadP": 0.12,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "38": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xb27578a9654246cb0a2950842b92330e9ace141c52b63829cc72d5c45a5a595a",
            "attributes": {
                "symbol": "Crypto.ETHFI/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.12,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 38,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "ETHFI",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 200000,
            "onePercentDepthBelow": 200000
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 38,
        "pairSpreadP": 0.12,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "39": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996",
            "attributes": {
                "symbol": "Crypto.JUP/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 39,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "JUP",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1613.99,
            "short": 1519.92
        },
        "marginFee": {
            "long": 0.0014486400000000002,
            "short": 0.00135774
        },
        "pairOI": 3133.91,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 285162.56,
            "onePercentDepthBelow": 271944.816
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 39,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "40": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x9df307038f76e26ba0f9aaa1d5eefce919bf5b7b282d0ad247d4f77ffb506ede",
            "attributes": {
                "symbol": "Crypto.REZ/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.12,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 40,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "REZ",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 67848,
            "onePercentDepthBelow": 57032
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 40,
        "pairSpreadP": 0.12,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "41": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
            "attributes": {
                "symbol": "Crypto.LINK/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 50
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 41,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "LINK",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 8902.73,
            "short": 9999.68
        },
        "marginFee": {
            "long": 0.00244512,
            "short": 0.00274086
        },
        "pairOI": 18902.41,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1931368.744,
            "onePercentDepthBelow": 1812357.152
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 41,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "42": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xc63e2a7f37a04e5e614c07238bedb25dcc38927fba8fe890597a593c0b2fa4ad",
            "attributes": {
                "symbol": "Crypto.LDO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 42,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 4,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 4,
            "maxWalletOI": 15
        },
        "from": "LDO",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 9920.64,
            "short": 9342.44
        },
        "marginFee": {
            "long": 0.0034801199999999997,
            "short": 0.0032423400000000002
        },
        "pairOI": 19263.08,
        "pairMaxOI": 49717.69,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 258468,
            "onePercentDepthBelow": 237888
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 42,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "43": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xc415de8d2eba7db216527dff4b60e8f3a5311c740dadb233e13e12547e226750",
            "attributes": {
                "symbol": "Crypto.NEAR/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 40
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 43,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "NEAR",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 207.54,
            "short": 0
        },
        "marginFee": {
            "long": 0.009639,
            "short": 0.001141552511415525
        },
        "pairOI": 207.54,
        "pairMaxOI": 124294.23,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 665499.872,
            "onePercentDepthBelow": 648254.176
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 43,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "44": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592",
            "attributes": {
                "symbol": "Crypto.INJ/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 44,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 4,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 4,
            "maxWalletOI": 15
        },
        "from": "INJ",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 198.4,
            "short": 496.2
        },
        "marginFee": {
            "long": 0.0011691,
            "short": 0.0032570999999999998
        },
        "pairOI": 694.6,
        "pairMaxOI": 49717.69,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 684534.288,
            "onePercentDepthBelow": 481849.056
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 44,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "45": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xcc03dc09298fb447e0bf9afdb760d5b24340fd2167fd33d8967dd8f9a141a2e8",
            "attributes": {
                "symbol": "Crypto.ZK/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 45,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 4,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 4,
            "maxWalletOI": 15
        },
        "from": "ZK",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 977.08,
            "short": 920.14
        },
        "marginFee": {
            "long": 0.00231354,
            "short": 0.0021627000000000005
        },
        "pairOI": 1897.22,
        "pairMaxOI": 49717.69,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 76476.8,
            "onePercentDepthBelow": 65981.224
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 45,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "46": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x3bd860bea28bf982fa06bcf358118064bb114086cc03993bd76197eaab0b8018",
            "attributes": {
                "symbol": "Crypto.ZRO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 46,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 15
        },
        "from": "ZRO",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 17189.21,
            "short": 11632.03
        },
        "marginFee": {
            "long": 0.004471559999999999,
            "short": 0.0028278
        },
        "pairOI": 28821.24,
        "pairMaxOI": 62147.12,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 148959.672,
            "onePercentDepthBelow": 117331.352
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 46,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "47": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 1,
            "feedId": "0x057345a7e9ef0f36dca8ad1c4e5788808b85f3084cc7b0d8cb29ac5012d88f0d",
            "attributes": {
                "symbol": "",
                "asset_type": "",
                "is_open": false,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 2,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 40,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 40
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.25,
        "groupIndex": 0,
        "feeIndex": 47,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 100,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 100,
            "maxWalletOI": 50
        },
        "from": "",
        "to": "",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0,
            "short": 0
        },
        "pairOI": 0,
        "pairMaxOI": 7613021.85,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 2178.5,
            "onePercentDepthBelow": 1.5
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 0
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 10,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": false,
        "index": 47,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 10,
        "pairMinLeverage": 2
    },
    "48": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x2b9ab1e972a281585084148ba1389800799bd4be63b957507db1349314e47445",
            "attributes": {
                "symbol": "Crypto.AAVE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 40
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 48,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 15
        },
        "from": "AAVE",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1234.54,
            "short": 1162.58
        },
        "marginFee": {
            "long": 0.0023148,
            "short": 0.00216396
        },
        "pairOI": 2397.12,
        "pairMaxOI": 62147.12,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1295440.016,
            "onePercentDepthBelow": 957620.68
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 48,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "49": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744",
            "attributes": {
                "symbol": "Crypto.SUI/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 49,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 8,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 8,
            "maxWalletOI": 15
        },
        "from": "SUI",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 4947.03,
            "short": 4658.72
        },
        "marginFee": {
            "long": 0.0025005599999999998,
            "short": 0.0023362200000000004
        },
        "pairOI": 9605.75,
        "pairMaxOI": 99435.39,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 2441211,
            "onePercentDepthBelow": 1937050
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 49,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "50": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x410f41de235f2db824e562ea7ab2d3d3d4ff048316c61d629c0b93f58584e1af",
            "attributes": {
                "symbol": "Crypto.TAO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 50,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 28,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 28,
            "maxWalletOI": 15
        },
        "from": "TAO",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1156.51,
            "short": 1089.09
        },
        "marginFee": {
            "long": 0.00143334,
            "short": 0.00134334
        },
        "pairOI": 2245.61,
        "pairMaxOI": 130508.95,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 665392.6,
            "onePercentDepthBelow": 404983.008
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 50,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "51": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xc65db025687356496e8653d0d6608eec64ce2d96e2e28c530e574f0e4f712380",
            "attributes": {
                "symbol": "Crypto.EIGEN/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 51,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 15
        },
        "from": "EIGEN",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1230.22,
            "short": 1457.15
        },
        "marginFee": {
            "long": 0.0020277,
            "short": 0.0024836399999999996
        },
        "pairOI": 2687.36,
        "pairMaxOI": 62147.12,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 233315.68,
            "onePercentDepthBelow": 198941.424
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 51,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "52": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x032a2eba1c2635bf973e95fb62b2c0705c1be2603b9572cc8d5edeaf8744e058",
            "attributes": {
                "symbol": "FX.USD/TRY",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 500,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 52,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 50
        },
        "from": "USD",
        "to": "TRY",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 5437.35,
            "short": 0
        },
        "marginFee": {
            "long": 0.0017829000000000002,
            "short": 0.00087408
        },
        "pairOI": 5437.35,
        "pairMaxOI": 310735.59,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 10000000,
            "onePercentDepthBelow": 10000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 52,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "53": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x9b5729efe3d68e537cdcb2ca70444dea5f06e1660b562632609757076d0b9448",
            "attributes": {
                "symbol": "Crypto.BRETT/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 4,
        "feeIndex": 53,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 7,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 7,
            "maxWalletOI": 50
        },
        "from": "BRETT",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 402.32,
            "short": 0
        },
        "marginFee": {
            "long": 0.0014652,
            "short": 0.001141552511415525
        },
        "pairOI": 402.32,
        "pairMaxOI": 21751.49,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 60873.92,
            "onePercentDepthBelow": 54417.52
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 53,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "54": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xb9312a7ee50e189ef045aa3c7842e099b061bd9bdc99ac645956c3b660dc8cce",
            "attributes": {
                "symbol": "Crypto.POPCAT/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 4,
        "feeIndex": 54,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 50
        },
        "from": "POPCAT",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 31073.56,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 211106.464,
            "onePercentDepthBelow": 220457.2
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 54,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "55": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xf7731dc812590214d3eb4343bfb13d1b4cfa9b1d4e020644b5d5d8e07d60c66c",
            "attributes": {
                "symbol": "Crypto.GOAT/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 5,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 4,
        "feeIndex": 55,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 50
        },
        "from": "GOAT",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 15536.78,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 156811.736,
            "onePercentDepthBelow": 139319.136
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 55,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "56": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x15add95022ae13563a11992e727c91bdb6b55bc183d9d747436c80a483d8c864",
            "attributes": {
                "symbol": "Crypto.APE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 4,
        "feeIndex": 56,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 15,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 15,
            "maxWalletOI": 50
        },
        "from": "APE",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 314.4
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.0013977
        },
        "pairOI": 314.4,
        "pairMaxOI": 46610.34,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 416416.72,
            "onePercentDepthBelow": 332366.176
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 56,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "57": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5",
            "attributes": {
                "symbol": "Crypto.APT/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.08,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 57,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 8,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 8,
            "maxWalletOI": 50
        },
        "from": "APT",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 1058.11,
            "short": 1123.61
        },
        "marginFee": {
            "long": 0.0021149999999999997,
            "short": 0.00226224
        },
        "pairOI": 2181.72,
        "pairMaxOI": 99435.39,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 540653.728,
            "onePercentDepthBelow": 425000.32
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 57,
        "pairSpreadP": 0.08,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "58": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xd98869edbb4a0d2803dc1054405bceb1ddc546bfc9a3d0e31bb0e0448e6181e1",
            "attributes": {
                "symbol": "Crypto.CHILLGUY/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 5,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 4,
        "feeIndex": 58,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 5,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 5,
            "maxWalletOI": 50
        },
        "from": "CHILLGUY",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 15536.78,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 49583.696,
            "onePercentDepthBelow": 43698.04
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 58,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "59": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8",
            "attributes": {
                "symbol": "Crypto.XRP/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.02,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 40,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 80
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 1,
        "feeIndex": 59,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 75,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 75,
            "maxWalletOI": 50
        },
        "from": "XRP",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 5463.33,
            "short": 5019.28
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 10482.61,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 7752631.5,
            "onePercentDepthBelow": 6800475.5
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 59,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "60": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x879551021853eec7a7dc827578e8e69da7e4fa8148339aa0d3d5296405be4b1a",
            "attributes": {
                "symbol": "Crypto.TRUMP/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 4,
        "feeIndex": 60,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 65,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 65,
            "maxWalletOI": 50
        },
        "from": "TRUMP",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 39.88,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 39.88,
        "pairMaxOI": 201978.13,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 2720628.704,
            "onePercentDepthBelow": 2518955.776
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 60,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "61": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x58cd29ef0e714c5affc44f269b2c1899a52da4169d7acc147b9da692e6953608",
            "attributes": {
                "symbol": "Crypto.FARTCOIN/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 25,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 4,
        "feeIndex": 61,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 65,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 65,
            "maxWalletOI": 15
        },
        "from": "FARTCOIN",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 15579.98,
            "short": 845.05
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 16425.03,
        "pairMaxOI": 201978.13,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 575265.288,
            "onePercentDepthBelow": 429122.456
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 61,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "62": {
        "feed": {
            "maxOpenDeviationP": 1.5,
            "maxCloseDeviationP": 5,
            "feedId": "0x4279e31cc369bbcc2faf022b382b080e32a8e689ff20fbc530d2a603eb6cd98b",
            "attributes": {
                "symbol": "Crypto.HYPE/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 5,
        "feeIndex": 62,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 100,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 100,
            "maxWalletOI": 50
        },
        "from": "HYPE",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 28142.5,
            "short": 27366.78
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 55509.28,
        "pairMaxOI": 466103.38,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 62,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "63": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x962088abcfdbdb6e30db2e340c8cf887d9efb311b1f2f17b155a63dbb6d40265",
            "attributes": {
                "symbol": "Crypto.BERA/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.02,
        "pnlSpreadP": 0.04,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 5,
        "feeIndex": 63,
        "values": {
            "maxGainP": 1000,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 35,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 35,
            "maxWalletOI": 15
        },
        "from": "BERA",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 1126.1,
            "short": 1195.78
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 2321.88,
        "pairMaxOI": 163136.18,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 144955.136,
            "onePercentDepthBelow": 149944
        },
        "storagePairParams": {
            "posSpreadCap": 2,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 63,
        "pairSpreadP": 0.02,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "64": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x7302dee641a08507c297a7b0c8b3efa74a48a3baa6c040acab1e5209692b7e59",
            "attributes": {
                "symbol": "Crypto.KAITO/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 0.1,
        "groupIndex": 5,
        "feeIndex": 64,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 25,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 25,
            "maxWalletOI": 50
        },
        "from": "KAITO",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 180
            }
        },
        "openInterest": {
            "long": 1565.97,
            "short": 1662.87
        },
        "marginFee": {
            "long": 0.00137214,
            "short": 0.0014641200000000002
        },
        "pairOI": 3228.84,
        "pairMaxOI": 116525.84,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 221063.2,
            "onePercentDepthBelow": 187645.68
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.06,
        "closeFeeP": 0.06,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ],
            [
                0,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 64,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "65": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x925ca92ff005ae943c158e3563f59698ce7e75c5a8c8dd43303a0a154887b3e6",
            "attributes": {
                "symbol": "Commodities.USOILSPOT",
                "asset_type": "Commodities",
                "is_open": true,
                "next_open": 1749510000,
                "next_close": 1749506400,
                "schedule": "GMT;0000-2200&2300-2400,0000-2200&2300-2400,0000-2200&2300-2400,0000-2200&2300-2400,0000-2145,C,2300-2400;0418/C,0526/0000-1830&2200-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.03,
        "pnlSpreadP": 0.03,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 50,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 20
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 3,
        "feeIndex": 65,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 70,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 70,
            "maxWalletOI": 15
        },
        "from": "USOILSPOT",
        "to": "USD",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 60
            }
        },
        "openInterest": {
            "long": 67801.3,
            "short": 0
        },
        "marginFee": {
            "long": 0.0008561643835616438,
            "short": 0.0008561643835616438
        },
        "pairOI": 67801.3,
        "pairMaxOI": 870059.64,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 7.5
        },
        "openFeeP": 0.08,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 65,
        "pairSpreadP": 0.03,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 1
    },
    "66": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xeef52e09c878ad41f6a81803e3640fe04dceea727de894edd4ea117e2e332e66",
            "attributes": {
                "symbol": "FX.USD/CNH",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 66,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "CNH",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 66,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "67": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x0ac0f9a2886fc2dd708bc66cc2cea359052ce89d324f45d95fadbc6c4fcf1809",
            "attributes": {
                "symbol": "FX.USD/INR",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 67,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 75,
            "maxShortOiP": 75,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "INR",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0,
        "pairMaxOI": 932206.76,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 67,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "68": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xe539120487c29b4defdf9a53d337316ea022a2688978a468f9efd847201be7e3",
            "attributes": {
                "symbol": "",
                "asset_type": "",
                "is_open": false,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 68,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 20,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 20,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "KRW",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0,
        "pairMaxOI": 621471.17,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": false,
        "index": 68,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "69": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xe13b1c1ffb32f34e1be9545583f01ef385fde7f42ee66049d30570dc866b77ca",
            "attributes": {
                "symbol": "FX.USD/MXN",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 69,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "MXN",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0,
        "pairMaxOI": 310735.59,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 69,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "70": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x389d889017db82bf42141f23b61b8de938a4e2d156e36312175bebf797f493f1",
            "attributes": {
                "symbol": "FX.USD/ZAR",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 70,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 15,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 15
        },
        "from": "USD",
        "to": "ZAR",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.0005707762557077625,
            "short": 0.0005707762557077625
        },
        "pairOI": 0,
        "pairMaxOI": 310735.59,
        "maxWalletOI": 2097465.2,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 70,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "71": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xbed3097008b9b5e3c93bec20be79cb43986b85a996475589351a21e67bae9b61",
            "attributes": {
                "symbol": "Crypto.PENGU/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.04,
        "pnlSpreadP": 0.06,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 15,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 4,
        "feeIndex": 71,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 35,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 35,
            "maxWalletOI": 50
        },
        "from": "PENGU",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 0,
            "short": 0
        },
        "marginFee": {
            "long": 0.001141552511415525,
            "short": 0.001141552511415525
        },
        "pairOI": 0,
        "pairMaxOI": 108757.45,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 375615.12,
            "onePercentDepthBelow": 354311.88
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 5,
            "2": 5,
            "3": 5
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 71,
        "pairSpreadP": 0.04,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "72": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x8132e3eb1dac3e56939a16ff83848d194345f6688bff97eb1c8bd462d558802b",
            "attributes": {
                "symbol": "Crypto.VIRTUAL/USD",
                "asset_type": "Crypto",
                "is_open": true,
                "next_open": 0,
                "next_close": 0,
                "schedule": "America/New_York;O,O,O,O,O,O,O;"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.1,
        "pnlSpreadP": 0.1,
        "leverages": {
            "minLeverage": 1,
            "maxLeverage": 10,
            "pnlMinLeverage": 1,
            "pnlMaxLeverage": 25
        },
        "priceImpactMultiplier": 1.2,
        "skewImpactMultiplier": 1,
        "groupIndex": 5,
        "feeIndex": 72,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 100,
            "maxShortOiP": 100,
            "groupOpenInterestPercentageP": 30,
            "maxWalletOIP": 50,
            "isUSDCAligned": false,
            "groupOpenInterestPecentage": 30,
            "maxWalletOI": 50
        },
        "from": "VIRTUAL",
        "to": "USD",
        "timer": {
            "numTiers": 3,
            "positionSizeToThresholdTierMap": {
                "0": 0,
                "1": 10000,
                "2": 50000
            },
            "thresholdTierToTimerMap": {
                "0": 180,
                "1": 600,
                "2": 900
            }
        },
        "openInterest": {
            "long": 6044.16,
            "short": 347.2
        },
        "marginFee": {
            "long": 0.007468919999999999,
            "short": 0.001141552511415525
        },
        "pairOI": 6391.36,
        "pairMaxOI": 139831.01,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 200871.008,
            "onePercentDepthBelow": 182005.128
        },
        "storagePairParams": {
            "posSpreadCap": 5,
            "negSpreadCap": 50,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 10
        },
        "openFeeP": 0.08,
        "closeFeeP": 0.08,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 200,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ],
            [
                0,
                800
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 50,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 72,
        "pairSpreadP": 0.1,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 200,
        "pairMinLeverage": 1
    },
    "73": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0xd2db4dbf1aea74e0f666b0e8f73b9580d407f5e5cf931940b06dc633d7a95906",
            "attributes": {
                "symbol": "FX.USD/BRL",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749556800,
                "next_close": 1749502800,
                "schedule": "America/New_York;0800-1700,0800-1700,0800-1700,0800-1700,0800-1700,C,C;1225/C,0101/C"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 73,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 50,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 50
        },
        "from": "USD",
        "to": "BRL",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 12037.14,
            "short": 333.29
        },
        "marginFee": {
            "long": 0.0008163,
            "short": 0.0005707762557077625
        },
        "pairOI": 12370.43,
        "pairMaxOI": 310735.59,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 73,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    },
    "74": {
        "feed": {
            "maxOpenDeviationP": 1,
            "maxCloseDeviationP": 5,
            "feedId": "0x6693afcd49878bbd622e46bd805e7177932cf6ab0b1c91b135d71151b9207433",
            "attributes": {
                "symbol": "FX.USD/IDR",
                "asset_type": "FX",
                "is_open": true,
                "next_open": 1749506400,
                "next_close": 1749502800,
                "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
            }
        },
        "backupFeed": {
            "maxDeviationP": 0,
            "feedId": "0x0000000000000000000000000000000000000000"
        },
        "spreadP": 0.01,
        "pnlSpreadP": 0.01,
        "leverages": {
            "minLeverage": 2,
            "maxLeverage": 50,
            "pnlMinLeverage": 2,
            "pnlMaxLeverage": 500
        },
        "priceImpactMultiplier": 0,
        "skewImpactMultiplier": 0,
        "groupIndex": 2,
        "feeIndex": 74,
        "values": {
            "maxGainP": 500,
            "maxSlP": 80,
            "maxLongOiP": 50,
            "maxShortOiP": 50,
            "groupOpenInterestPercentageP": 10,
            "maxWalletOIP": 50,
            "isUSDCAligned": true,
            "groupOpenInterestPecentage": 10,
            "maxWalletOI": 50
        },
        "from": "USD",
        "to": "IDR",
        "timer": {
            "numTiers": 1,
            "positionSizeToThresholdTierMap": {
                "0": 0
            },
            "thresholdTierToTimerMap": {
                "0": 0
            }
        },
        "openInterest": {
            "long": 557.45,
            "short": 0
        },
        "marginFee": {
            "long": 0.00079488,
            "short": 0.0005707762557077625
        },
        "pairOI": 557.45,
        "pairMaxOI": 310735.59,
        "maxWalletOI": 6991550.68,
        "pairParams": {
            "onePercentDepthAbove": 1000000,
            "onePercentDepthBelow": 1000000
        },
        "storagePairParams": {
            "posSpreadCap": 2.5,
            "negSpreadCap": 25,
            "isPnlTypeAllowed": 0,
            "pnlPriceImpactMultiplier": 0,
            "pnlSkewImpactMultiplier": 0,
            "pnlPosSpreadCap": 0,
            "pnlNegSpreadCap": 0,
            "minBorrowFee": 5
        },
        "openFeeP": 0.03,
        "closeFeeP": 0,
        "limitOrderFeeP": 0.01,
        "minLevPosUSDC": 300,
        "pnlFees": {
            "numTiers": 9,
            "tierP": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500
            ],
            "feesP": [
                80,
                80,
                60,
                50,
                40,
                30,
                20,
                20,
                20
            ]
        },
        "lossProtectionMultiplier": {
            "0": 0,
            "1": 10,
            "2": 10,
            "3": 10
        },
        "skewEqParams": [
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                -5,
                500
            ],
            [
                0,
                300
            ],
            [
                0,
                300
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ],
            [
                -5,
                600
            ]
        ],
        "longSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "shortSkewConfig": {
            "0": 0,
            "1": 55,
            "2": 70,
            "3": 80
        },
        "isPairListed": true,
        "index": 74,
        "pairSpreadP": 0.01,
        "pairLimitOrderFeeP": 0.01,
        "pairMinLevPosUSDC": 300,
        "pairMinLeverage": 2
    }
}