
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2, AlertCircle, Sparkles } from "lucide-react";

interface EvaluationFormProps {
  onSubmit: (data: {
    linkedinProfile: string;
    resume: File | null;
    additionalInfo: string;
  }) => void;
  onGenerateNFT: (skills: string) => void;
  isLoading: boolean;
  isGeneratingNFT: boolean;
}

const EvaluationForm = ({ onSubmit, onGenerateNFT, isLoading, isGeneratingNFT }: EvaluationFormProps) => {
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [skills, setSkills] = useState("");
  const [formError, setFormError] = useState("");

  const handleGenerateNFT = () => {
    if (!skills.trim()) {
      setFormError("Please enter your skills to generate an NFT");
      return;
    }
    setFormError("");
    onGenerateNFT(skills);
  };

  return (
    <div className="space-y-6">
      {formError && (
        <div className="flex items-center gap-2 p-3 rounded bg-red-950/50 border border-red-500/50 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <p>{formError}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="skills" className="text-[#00ff41]">Enter Your Skills for NFT Generation</Label>
        <Textarea
          id="skills"
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
            setFormError("");
          }}
          className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
          placeholder="e.g., Expert in React.js development with 5 years of experience, proficient in TypeScript and Node.js..."
          rows={4}
        />
        <Button
          onClick={handleGenerateNFT}
          disabled={isGeneratingNFT}
          className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow mt-2"
        >
          {isGeneratingNFT ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating NFT...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate NFT
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EvaluationForm;
