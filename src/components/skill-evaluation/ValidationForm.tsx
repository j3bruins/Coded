
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ValidationFormProps {
  onSubmit: (proofOfSkill: string) => void;
  isLoading: boolean;
}

const ValidationForm = ({ onSubmit, isLoading }: ValidationFormProps) => {
  const [proofOfSkill, setProofOfSkill] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proofOfSkill.trim()) {
      toast.error("Please provide proof of your skills");
      return;
    }
    onSubmit(proofOfSkill);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#00ff41] mb-2">
          Proof of Skill
        </label>
        <Textarea
          value={proofOfSkill}
          onChange={(e) => setProofOfSkill(e.target.value)}
          placeholder="Provide links to your work, certifications, or other verifiable proof of your skills..."
          className="h-32 bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90"
      >
        {isLoading ? "Submitting..." : "Submit for Validation"}
      </Button>
    </form>
  );
};

export default ValidationForm;
