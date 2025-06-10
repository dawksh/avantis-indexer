import { announcement } from '../lib/telegram';

const main = async () => {
    await announcement('🚨 Hey traders! To keep things tidy, alerts are sent only for trades over $500 to avoid spam.\n\n🔔 Want updates on all trades for a specific wallet? Use the /subscribe command and never miss a move!\n\n✨ New: Unsubscribe from wallet alerts anytime using /unsubscribe.\n\n✨ New: Set your own minimum margin threshold for alerts with /setthreshold.');
    process.exit(0);
};

main();
