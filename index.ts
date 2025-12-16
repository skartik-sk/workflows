import nodeCron from "node-cron";
import {
    airdropFactory,
    createSolanaRpc,
    createSolanaRpcSubscriptions,
    lamports,
    type Address,
} from '@solana/kit';

console.log('🚀 Airdrop scheduler started!');
console.log('⏰ Cron schedule: Every 10 minutes (keeps Render awake)');
console.log('⏱️  Current time:', new Date().toISOString());
console.log('📍 Runs at: :00, :10, :20, :30, :40, :50 of each hour');
console.log('---');

nodeCron.schedule("*/10 * * * *", async () => {
    console.log('\n🔄 Starting airdrop at', new Date().toISOString());
    try {
        const rpc = createSolanaRpc("https://api.devnet.solana.com");
        const rpcSubscriptions = createSolanaRpcSubscriptions("wss://api.devnet.solana.com");
        const airdrop = airdropFactory({ rpc, rpcSubscriptions });
        
        await airdrop({
            recipientAddress: "FzzJuBTvpLsi517P1ELMZ7HwtFWxB4JFoRw6myraFgdB" as Address,
            lamports: lamports(400_000_000n),
            commitment: 'confirmed',
        });
        
        console.log('✅ Airdrop completed successfully!');
    } catch (error) {
        console.error('❌ Airdrop failed:', error);
    }
});


