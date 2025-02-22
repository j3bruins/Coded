
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Linkedin, Loader2, AlertCircle } from "lucide-react";

interface EvaluationFormProps {
  onSubmit: (data: {
    linkedinProfile: string;
    resume: File | null;
    additionalInfo: string;
  }) => void;
  isLoading: boolean;
}

const EvaluationForm = ({ onSubmit, isLoading }: EvaluationFormProps) => {
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [formError, setFormError] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ linkedinProfile, resume, additionalInfo });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formError && (
        <div className="flex items-center gap-2 p-3 rounded bg-red-950/50 border border-red-500/50 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <p>{formError}</p>
        </div>
      )}

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
  );
};

export default EvaluationForm;
