import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { WalletButton } from "@/components/WalletButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { mintNFT, SkillNFT } from "@/utils/nftUtils";
import EvaluationForm from "@/components/skill-evaluation/EvaluationForm";
import EvaluationResults from "@/components/skill-evaluation/EvaluationResults";
import NFTPreview from "@/components/skill-evaluation/NFTPreview";

interface NFTGeneration {
  description: string;
  imageUrl: string;
}

const SkillEvaluation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingNFT, setIsGeneratingNFT] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [evaluation, setEvaluation] = useState("");
  const [recommendedNFTs, setRecommendedNFTs] = useState<SkillNFT[]>([]);
  const [selectedNFTs, setSelectedNFTs] = useState<SkillNFT[]>([]);
  const [nftPreview, setNftPreview] = useState<NFTGeneration | null>(null);
  const { toast } = useToast();
  const { connection } = useConnection();
  const wallet = useWallet();

  const handleSubmit = async ({ linkedinProfile, resume, additionalInfo }: {
    linkedinProfile: string;
    resume: File | null;
    additionalInfo: string;
  }) => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-evaluation', {
        body: {
          linkedinProfile,
          additionalInfo,
        },
      });

      if (error) {
        throw error;
      }

      if (!data?.evaluation) {
        throw new Error('No evaluation data received');
      }

      setEvaluation(data.evaluation);
      
      if (data.recommendedNFTs) {
        setRecommendedNFTs(data.recommendedNFTs);
      }

      toast({
        title: "Evaluation Complete",
        description: "Your skill evaluation has been generated successfully.",
      });
    } catch (error) {
      console.error("Error evaluating skills:", error);
      toast({
        title: "Error",
        description: "Failed to generate evaluation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNFTSelection = (nft: SkillNFT) => {
    setSelectedNFTs(prev => {
      const isSelected = prev.some(item => item.name === nft.name);
      if (isSelected) {
        return prev.filter(item => item.name !== nft.name);
      }
      return [...prev, nft];
    });
  };

  const handleGenerateNFT = async (skills: string) => {
    setIsGeneratingNFT(true);
    try {
      const description = `NFT Concept: A digital badge showcasing ${skills}`;
      const imageUrl = `https://via.placeholder.com/300?text=${encodeURIComponent(skills.slice(0, 20))}`;
      
      setNftPreview({ description, imageUrl });
      
      toast({
        title: "NFT Generated",
        description: "Your NFT concept has been generated successfully.",
      });
    } catch (error) {
      console.error("Error generating NFT:", error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate NFT. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingNFT(false);
    }
  };

  const handleMintNFT = async () => {
    if (!wallet.connected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to mint NFTs",
        variant: "destructive",
      });
      return;
    }

    if (!nftPreview) return;

    setIsMinting(true);
    try {
      console.log("Minting NFT:", nftPreview);
      
      toast({
        title: "NFT Minted",
        description: "Your NFT has been minted successfully!",
      });
    } catch (error) {
      console.error("Error minting NFT:", error);
      toast({
        title: "Minting Failed",
        description: "Failed to mint NFT. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
  };

  const handleLoadToMarketplace = () => {
    if (selectedNFTs.length === 0) {
      toast({
        title: "Selection Required",
        description: "Please select at least one skill to tokenize",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Skills Added to Marketplace",
      description: `${selectedNFTs.length} skills have been prepared for tokenization`,
    });
  };

  return (
    <div className="min-h-screen bg-matrix">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <Card className="bg-black/80 backdrop-blur-md border-[#00ff41]/30 text-[#00ff41]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-[#00ff41] text-glow">
                Skill Evaluation & Tokenization
              </h2>
              <WalletButton />
            </div>
            <p className="text-center text-[#00ff41]/80 mt-2">
              Let our AI analyze your professional profile and recommend the best tokenization strategy
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <EvaluationForm
              onSubmit={handleSubmit}
              onGenerateNFT={handleGenerateNFT}
              isLoading={isLoading}
              isGeneratingNFT={isGeneratingNFT}
            />
            
            {nftPreview && (
              <NFTPreview
                description={nftPreview.description}
                imageUrl={nftPreview.imageUrl}
                onMint={handleMintNFT}
                isMinting={isMinting}
              />
            )}
            
            {evaluation && (
              <EvaluationResults
                evaluation={evaluation}
                recommendedNFTs={recommendedNFTs}
                selectedNFTs={selectedNFTs}
                onNFTSelection={handleNFTSelection}
                onMintNFT={handleMintNFT}
                onLoadToMarketplace={handleLoadToMarketplace}
                isLoading={isLoading}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillEvaluation;
