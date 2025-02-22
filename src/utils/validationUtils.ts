
import { supabase } from "@/integrations/supabase/client";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { toast } from "sonner";

export interface ValidationRequest {
  wallet_address: string;
  nft_name: string;
  category: string;
  proof_of_skill: string;
}

export interface ServiceDelivery {
  nft_mint_address: string;
  client_wallet: string;
  talent_wallet: string;
  amount_locked: number;
  delivery_proof?: string;
}

export const createValidationRequest = async (request: ValidationRequest) => {
  const { data, error } = await supabase
    .from('nft_validations')
    .insert([request])
    .select()
    .single();

  if (error) {
    console.error('Error creating validation request:', error);
    throw error;
  }

  return data;
};

export const checkValidationStatus = async (wallet_address: string, nft_name: string) => {
  const { data, error } = await supabase
    .from('nft_validations')
    .select('*')
    .eq('wallet_address', wallet_address)
    .eq('nft_name', nft_name)
    .single();

  if (error) {
    console.error('Error checking validation status:', error);
    throw error;
  }

  return data;
};

export const createServiceDelivery = async (delivery: ServiceDelivery) => {
  const { data, error } = await supabase
    .from('service_deliveries')
    .insert([delivery])
    .select()
    .single();

  if (error) {
    console.error('Error creating service delivery:', error);
    throw error;
  }

  return data;
};

export const confirmServiceDelivery = async (
  id: string,
  client_wallet: string,
  connection: Connection,
  signTransaction: (transaction: Transaction) => Promise<Transaction>
) => {
  // First, update the delivery status
  const { error: updateError } = await supabase
    .from('service_deliveries')
    .update({ 
      client_confirmation: true,
      status: 'approved'
    })
    .eq('id', id)
    .eq('client_wallet', client_wallet);

  if (updateError) {
    console.error('Error confirming service delivery:', updateError);
    throw updateError;
  }

  // Here you would implement the actual fund release logic using Solana
  // This is a placeholder for the actual implementation
  try {
    // Create a new transaction
    const transaction = new Transaction();
    
    // Add instructions to release funds
    // ... This would involve your specific escrow/payment contract logic

    // Sign and send the transaction
    const signedTx = await signTransaction(transaction);
    const txId = await connection.sendTransaction(transaction, []);
    await connection.confirmTransaction(txId);

    toast.success("Funds released successfully!");
    return txId;
  } catch (error) {
    console.error('Error releasing funds:', error);
    throw error;
  }
};
