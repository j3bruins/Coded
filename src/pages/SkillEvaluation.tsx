
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SkillEvaluation = () => {
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluation, setEvaluation] = useState("");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          linkedinProfile,
          additionalInfo,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate evaluation');
      }

      const data = await response.json();
      setEvaluation(data.evaluation);
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

  return (
    <div className="min-h-screen bg-matrix">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <Card className="bg-black/80 backdrop-blur-md border-[#00ff41]/30 text-[#00ff41]">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center text-[#00ff41] text-glow">
              Skill Evaluation & Tokenization
            </h2>
            <p className="text-center text-[#00ff41]/80 mt-2">
              Let our AI analyze your professional profile and recommend the best tokenization strategy
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-[#00ff41]">LinkedIn Profile URL</Label>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-5 h-5" />
                  <Input
                    id="linkedin"
                    type="url"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                    className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-[#00ff41]/50"
                    placeholder="https://linkedin.com/in/your-profile"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume" className="text-[#00ff41]">Upload Resume</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="bg-black/50 border-[#00ff41]/30 text-[#00ff41] file:bg-[#00ff41] file:text-black file:border-0"
                    required
                  />
                  {resume && <FileText className="w-5 h-5 text-[#00ff41]" />}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional" className="text-[#00ff41]">Additional Information</Label>
                <Textarea
                  id="additional"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
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
              <div className="mt-8 p-6 border border-[#00ff41]/30 rounded-lg bg-black/50">
                <h3 className="text-xl font-semibold mb-4 text-[#00ff41]">AI Evaluation Results</h3>
                <pre className="whitespace-pre-wrap text-[#00ff41]/90 font-mono text-sm">
                  {evaluation}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillEvaluation;
