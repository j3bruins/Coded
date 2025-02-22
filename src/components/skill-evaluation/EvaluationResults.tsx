
import React from "react";
import { Button } from "@/components/ui/button";
import NFTCard from "./NFTCard";
import { SkillNFT } from "@/utils/nftUtils";

interface EvaluationResultsProps {
  evaluation: string;
  recommendedNFTs: SkillNFT[];
  selectedNFTs: SkillNFT[];
  onNFTSelection: (nft: SkillNFT) => void;
  onMintNFT: (nft: SkillNFT) => void;
  onLoadToMarketplace: () => void;
  isLoading: boolean;
}

const EvaluationResults = ({
  evaluation,
  recommendedNFTs,
  selectedNFTs,
  onNFTSelection,
  onMintNFT,
  onLoadToMarketplace,
  isLoading,
}: EvaluationResultsProps) => {
  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 border border-[#00ff41]/30 rounded-lg bg-black/50">
        <h3 className="text-xl font-semibold mb-4 text-[#00ff41]">AI Evaluation Results</h3>
        <pre className="whitespace-pre-wrap text-[#00ff41]/90 font-mono text-sm">
          {evaluation}
        </pre>
      </div>

      {recommendedNFTs.length > 0 && (
        <div className="p-6 border border-[#00ff41]/30 rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-4 text-[#00ff41]">Recommended Skill NFTs</h3>
          <div className="space-y-4">
            {recommendedNFTs.map((nft, index) => (
              <NFTCard
                key={index}
                nft={nft}
                isSelected={selectedNFTs.some(item => item.name === nft.name)}
                onSelect={onNFTSelection}
                onMint={onMintNFT}
                isLoading={isLoading}
              />
            ))}
          </div>

          {selectedNFTs.length > 0 && (
            <Button
              onClick={onLoadToMarketplace}
              className="w-full mt-4 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
            >
              Load Selected Skills to Marketplace
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EvaluationResults;
