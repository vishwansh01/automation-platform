import {
  Keypair,
  SystemProgram,
  PublicKey,
  Transaction,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  Connection,
} from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection(
  "https://solana-mainnet.g.alchemy.com/v2/-yvyNvAlTcSaXv5-Y3f6j",
  "finalized"
);

export async function sendSol(to: string, amount: string) {
  const keypair = Keypair.fromSecretKey(
    base58.decode(process.env.SOL_PRIVATE_KEY ?? "")
  );
  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey: new PublicKey(to),
      lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
    })
  );
  await sendAndConfirmTransaction(connection, transferTransaction, [keypair]);
}
