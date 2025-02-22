
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Chain Image Section */}
      <div className="text-center mb-12 relative">
        <img 
          src="/lovable-uploads/3ce72ebc-2a94-4c11-887c-6f1453e766b5.png" 
          alt="Chain Link" 
          className="w-64 h-auto opacity-80 mix-blend-screen mb-8"
        />
      </div>

      {/* Call to Action Button */}
      <Button
        onClick={() => navigate('/main')}
        className="px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
      >
        Enter
      </Button>
    </div>
  );
};

export default Splash;
