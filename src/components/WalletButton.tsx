
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "./ui/button";
import { Loader2, Wallet } from "lucide-react";
import { toast } from "sonner";
import "@solana/wallet-adapter-react-ui/styles.css";

export const WalletButton = () => {
  const { wallet, disconnect, connecting, connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) {
      disconnect();
      toast.success("Wallet disconnected");
    } else {
      try {
        setVisible(true);
      } catch (error) {
        console.error("Wallet connection error:", error);
        toast.error("Failed to connect wallet. Please try again.");
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow relative"
      disabled={connecting}
    >
      {connecting ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Connecting...
        </>
      ) : connected ? (
        <>
          <Wallet className="w-4 h-4 mr-2" />
          {publicKey?.toBase58().slice(0, 4)}...
          {publicKey?.toBase58().slice(-4)}
        </>
      ) : (
        <>
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </>
      )}
    </Button>
  );
};
