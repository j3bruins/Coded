
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, Loader2, AlertCircle, Sparkles, Link as LinkIcon } from "lucide-react";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleGenerateNFT = () => {
    if (!skills.trim()) {
      setFormError("Please enter your skills to generate an NFT");
      return;
    }
    setFormError("");
    onGenerateNFT(skills);
  };

  const handleSubmit = () => {
    onSubmit({
      linkedinProfile,
      resume,
      additionalInfo: skills,
    });
  };

  return (
    <div className="space-y-6">
      {formError && (
        <div className="flex items-center gap-2 p-3 rounded bg-red-950/50 border border-red-500/50 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <p>{formError}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="linkedin" className="text-[#00ff41] flex items-center gap-2">
            <LinkIcon className="w-4 h-4" />
            LinkedIn Profile URL (Optional)
          </Label>
          <Input
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resume" className="text-[#00ff41] flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Resume (Optional)
          </Label>
          <Input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] file:bg-[#00ff41] file:text-black file:border-0 file:rounded file:px-2 file:py-1 file:mr-2 hover:file:bg-[#00ff41]/90"
          />
          {resume && (
            <p className="text-[#00ff41]/70 text-sm">
              Selected file: {resume.name}
            </p>
          )}
        </div>

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
    </div>
  );
};

export default EvaluationForm;
