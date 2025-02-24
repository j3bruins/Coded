
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Coins } from "lucide-react";

interface NFTPreviewProps {
  description: string;
  imageUrl: string;
  onMint: () => void;
  isMinting: boolean;
}

const NFTPreview = ({ description, imageUrl, onMint, isMinting }: NFTPreviewProps) => {
  return (
    <Card className="p-6 bg-black/50 border-[#00ff41]/30">
      <h3 className="text-xl font-bold text-[#00ff41] mb-4">Your NFT Preview</h3>
      <div className="space-y-4">
        <p className="text-[#00ff41]/90">{description}</p>
        <img
          src={imageUrl}
          alt="NFT Preview"
          className="max-w-[300px] mx-auto rounded-lg border border-[#00ff41]/30"
        />
        <Button
          onClick={onMint}
          disabled={isMinting}
          className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
        >
          {isMinting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Minting NFT...
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 mr-2" />
              Mint NFT
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default NFTPreview;
