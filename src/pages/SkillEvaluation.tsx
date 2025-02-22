import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Linkedin, Loader2, AlertCircle, CheckCircle2, Coins } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { WalletButton } from "@/components/WalletButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { mintNFT } from "@/utils/nftUtils";

interface SkillNFT {
  name: string;
  category: string;
  description: string;
  suggestedPrice: string;
}

const SkillEvaluation = () => {
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluation, setEvaluation] = useState("");
  const [formError, setFormError] = useState("");
  const [recommendedNFTs, setRecommendedNFTs] = useState<SkillNFT[]>([]);
  const [selectedNFTs, setSelectedNFTs] = useState<SkillNFT[]>([]);
  const { toast } = useToast();
  const { connection } = useConnection();
  const wallet = useWallet();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      setFormError("");
    }
  };

  const validateForm = () => {
    if (!linkedinProfile && !resume && !additionalInfo.trim()) {
      setFormError("Please provide at least one of: LinkedIn profile URL, resume, or additional information");
      return false;
    }
    setFormError("");
    return true;
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

  const loadToMarketplace = async () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please provide at least one source of information for evaluation.",
        variant: "destructive",
      });
      return;
    }

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

  const handleMintNFT = async (nft: SkillNFT) => {
    if (!wallet.connected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your Phantom wallet to mint NFTs",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const signature = await mintNFT(connection, wallet, nft);
      
      toast({
        title: "NFT Minted Successfully!",
        description: `Your skill "${nft.name}" has been minted as an NFT`,
      });
      
      toast({
        title: "NFT Minted Successfully!",
        description: `Your skill "${nft.name}" has been minted as an NFT`,
      });
      
      // Here you would update the marketplace with the new NFT
      // This could involve calling a Supabase function or updating the database
      
    } catch (error) {
      console.error("Error minting NFT:", error);
      toast({
        title: "Minting Failed",
        description: "There was an error minting your NFT. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          <CardContent>
            {formError && (
              <div className="flex items-center gap-2 p-3 rounded bg-red-950/50 border border-red-500/50 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <p>{formError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-[#00ff41]">LinkedIn Profile URL (Optional)</Label>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-5 h-5" />
                  <Input
                    id="linkedin"
                    type="url"
                    value={linkedinProfile}
                    onChange={(e) => {
                      setLinkedinProfile(e.target.value);
                      setFormError("");
                    }}
                    className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume" className="text-[#00ff41]">Upload Resume (Optional)</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] file:bg-[#00ff41] file:text-black file:border-0"
                  />
                  {resume && <FileText className="w-5 h-5 text-[#00ff41]" />}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional" className="text-[#00ff41]">Additional Information (Optional)</Label>
                <Textarea
                  id="additional"
                  value={additionalInfo}
                  onChange={(e) => {
                    setAdditionalInfo(e.target.value);
                    setFormError("");
                  }}
                  className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
                  placeholder="Add any additional skills or experiences you'd like the AI to consider..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Profile...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Evaluate My Skills
                  </>
                )}
              </Button>
            </form>

            {evaluation && (
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
                        <div
                          key={index}
                          className={`p-4 border rounded-lg ${
                            selectedNFTs.some(item => item.name === nft.name)
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
                                onClick={() => handleNFTSelection(nft)}
                                variant="outline"
                                className="border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10"
                              >
                                {selectedNFTs.some(item => item.name === nft.name) ? (
                                  <CheckCircle2 className="w-5 h-5" />
                                ) : (
                                  "Select"
                                )}
                              </Button>
                              <Button
                                onClick={() => handleMintNFT(nft)}
                                disabled={isLoading}
                                className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
                              >
                                <Coins className="w-4 h-4 mr-2" />
                                Mint NFT
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedNFTs.length > 0 && (
                      <Button
                        onClick={loadToMarketplace}
                        className="w-full mt-4 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
                      >
                        Load Selected Skills to Marketplace
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillEvaluation;
