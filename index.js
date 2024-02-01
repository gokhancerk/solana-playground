import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`.env publicKey`, keypair.publicKey.toBase58());
//console.log(`Keypair secretKey: ${keypair.secretKey}`);

const suppliedPublicKey = process.argv[2] || null;
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

// connect to the network
const connection = new Connection(clusterApiUrl("devnet"));

// to read the balance of an account

const address = new PublicKey(suppliedPublicKey);

const balance = await connection.getBalance(address); // The balance returned is in lamports

const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`----------------------------------------------------------------`);
console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
//console.log(`✅ Finished!`);

// Create Transactions on the Solana Network

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 100000000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: keypair.publicKey,
  toPubkey: address,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

// Once all the instructions have been added,
// a transaction needs to be sent to the cluster and confirmed:

const signature = await sendAndConfirmTransaction(connection, transaction, [keypair]);

console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${address}. `
  );
console.log(`Transaction signature is ${signature}!`);
