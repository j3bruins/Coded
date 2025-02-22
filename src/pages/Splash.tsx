
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";
import { Link2 } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Chain Link Icon with Animation */}
      <div className="relative mb-8 animate-float">
        <div className="absolute inset-0 blur-sm bg-[#00ff41]/30"></div>
        <Link2 
          className="h-32 w-32 text-[#00ff41] filter drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
          strokeWidth={1.5}
        />
      </div>

      {/* Button with Matrix Style */}
      <Button
        onClick={() => navigate('/main')}
        className="mt-8 px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
      >
        Unlock Your Talent
      </Button>
    </div>
  );
};

export default Splash;
