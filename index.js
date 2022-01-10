const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair
} = require('@solana/web3.js')

// generate new wallet
const newPair = new Keypair()