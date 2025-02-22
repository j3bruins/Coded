
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Coins } from "lucide-react";
import { SkillNFT } from "@/utils/nftUtils";

interface NFTCardProps {
  nft: SkillNFT;
  isSelected: boolean;
  onSelect: (nft: SkillNFT) => void;
  onMint: (nft: SkillNFT) => void;
  isLoading: boolean;
}

const NFTCard = ({ nft, isSelected, onSelect, onMint, isLoading }: NFTCardProps) => {
  return (
    <div
      className={`p-4 border rounded-lg ${
        isSelected
          ? 'border-[#00ff41] bg-[#00ff41]/10'
          : 'border-[#00ff41]/30 hover:border-[#00ff41]/60'
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-semibold text-[#00ff41]">{nft.name}</h4>
          <p className="text-sm text-[#00ff41]/70">{nft.description}</p>
          <div className="mt-2 flex gap-2">
            <Badge variant="outline" className="border-[#00ff41]/50 text-[#00ff41]">
              {nft.category}
            </Badge>
            <Badge variant="outline" className="border-[#00ff41]/50 text-[#00ff41]">
              {nft.suggestedPrice}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onSelect(nft)}
            variant="outline"
            className="border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10"
          >
            {isSelected ? <CheckCircle2 className="w-5 h-5" /> : "Select"}
          </Button>
          <Button
            onClick={() => onMint(nft)}
            disabled={isLoading}
            className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
          >
            <Coins className="w-4 h-4 mr-2" />
            Mint NFT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
