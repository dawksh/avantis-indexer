# avantis-indexer

An avantis index which indexes avantis' trading contracts and gains alpha from the open and closing of trades

Use the Telegram Bot
[![Telegram Bot](https://img.shields.io/badge/Telegram-AvantisTrade-blue)](https://t.me/avantistrade_bot)

## Features

-   Real-time trade monitoring and alerts
-   Telegram bot integration for instant notifications
-   Customizable alert thresholds
-   Wallet-specific trade subscriptions
-   Trade analytics including entry/exit prices, leverage, and PnL

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set environment variables:
    - `TELEGRAM_BOT_TOKEN`
4. Run: `npm start`

## Commands

-   `/start` - Register for trade alerts
-   `/subscribe <address>` - Subscribe to specific wallet trades
-   `/unsubscribe <address>` - Unsubscribe from wallet alerts
-   `/setthreshold` - Set minimum trade amount for alerts

## Trade Alerts

-   Trade openings with entry price, leverage, and position size
-   Trade closings with PnL information
-   Minimum alert threshold: $500 (customizable)
