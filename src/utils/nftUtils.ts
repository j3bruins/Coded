
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { createValidationRequest, checkValidationStatus } from "./validationUtils";
import { toast } from "sonner";

export interface SkillNFT {
  name: string;
  category: string;
  description: string;
  suggestedPrice: string;  // Price in SOL
}

export const mintNFT = async (
  connection: Connection,
  wallet: { publicKey: PublicKey; signTransaction: (transaction: Transaction) => Promise<Transaction> },
  skillNFT: SkillNFT,
  proofOfSkill: string
) => {
  if (!wallet.publicKey) throw new Error("Wallet not connected");

  try {
    // First, submit validation request
    await createValidationRequest({
      wallet_address: wallet.publicKey.toString(),
      nft_name: skillNFT.name,
      category: skillNFT.category,
      proof_of_skill: proofOfSkill
    });

    toast.success("Validation request submitted! Please wait for approval.");

    // Check validation status
    const validation = await checkValidationStatus(wallet.publicKey.toString(), skillNFT.name);
    
    if (validation.status !== 'approved') {
      toast.error("NFT minting requires validation approval");
      return;
    }

    // Create a new transaction for minting
    const transaction = new Transaction();
    
    // Add NFT minting instructions here
    // This would involve creating a token mint, metadata, and master edition
    
    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [/* Your keypair */]
    );
    
    console.log("NFT minted!", signature);
    return signature;
  } catch (error) {
    console.error("Error in NFT minting process:", error);
    throw error;
  }
};

export const lockFundsForService = async (
  connection: Connection,
  wallet: { publicKey: PublicKey; signTransaction: (transaction: Transaction) => Promise<Transaction> },
  nftMintAddress: string,
  talentWallet: string,
  amount: number
) => {
  if (!wallet.publicKey) throw new Error("Wallet not connected");

  try {
    // Create escrow transaction
    const transaction = new Transaction();
    // Add instructions for locking funds in escrow
    // ... This would involve your specific escrow contract logic

    // Create service delivery record
    await createServiceDelivery({
      nft_mint_address: nftMintAddress,
      client_wallet: wallet.publicKey.toString(),
      talent_wallet: talentWallet,
      amount_locked: amount
    });

    // Sign and send the transaction
    const signedTx = await wallet.signTransaction(transaction);
    const txId = await connection.sendTransaction(transaction, []);
    await connection.confirmTransaction(txId);

    toast.success("Funds locked successfully!");
    return txId;
  } catch (error) {
    console.error("Error locking funds:", error);
    throw error;
  }
};
