import { announcement } from '../lib/telegram';

const main = async () => {
    await announcement('🚨 Hey traders! To keep things tidy, alerts are sent only for trades over $500 to avoid spam. \n \n🔔 Want updates on all trades for a specific wallet? Use the /subscribe command and never miss a move!');
    process.exit(0);
};

main();
