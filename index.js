const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js')

// generate new wallet
const newPair = new Keypair()
const publicKey = new PublicKey(newPair.publicKey).toString()
const secretKey = newPair.secretKey

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const myWallet = await Keypair.fromSecretKey(secretKey)
        const walletBalance = await connection.getBalance(myWallet.publicKey)
        console.log(`Wallet balance: ${parseInt(walletBalance)/LAMPORTS_PER_SOL}SOL`);
    } catch(err) {
        console.error(err)
    }
}