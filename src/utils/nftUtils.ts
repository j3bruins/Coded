
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
    // For testing purposes, we'll simulate the validation as approved
    console.log("Simulating NFT minting for testing...");
    
    // Create a mock transaction
    const mockSignature = "mock_" + Date.now();
    
    // Simulate a delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("NFT minted with mock signature:", mockSignature);
    
    // Save the minted NFT data to localStorage for the marketplace
    const mintedNFTs = JSON.parse(localStorage.getItem('mintedNFTs') || '[]');
    mintedNFTs.push({
      ...skillNFT,
      ownerAddress: wallet.publicKey.toString(),
      mintSignature: mockSignature,
      mintedAt: new Date().toISOString()
    });
    localStorage.setItem('mintedNFTs', JSON.stringify(mintedNFTs));
    
    return mockSignature;
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
    // For testing purposes, simulate the escrow process
    console.log("Simulating fund lock for testing...");
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockTxId = "escrow_" + Date.now();
    
    console.log("Funds locked with mock transaction:", mockTxId);
    return mockTxId;
  } catch (error) {
    console.error("Error locking funds:", error);
    throw error;
  }
};

