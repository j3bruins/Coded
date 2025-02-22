
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Logo/Title Section */}
      <div className="text-center mb-12 relative">
        <h1 className="text-6xl font-bold tracking-wider text-[#00ff41] animate-pulse">
          <span className="opacity-80">CHAIN</span>
          <span className="mx-2 animate-ping">•</span>
          <span className="opacity-80">BREAK</span>
        </h1>
        <div className="mt-4 text-[#00ff41]/60 text-xl tracking-widest animate-fade-in">
          UNLOCK YOUR POTENTIAL
        </div>
      </div>

      {/* Call to Action Button */}
      <Button
        onClick={() => navigate('/main')}
        className="px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
      >
        Enter The Matrix
      </Button>
    </div>
  );
};

export default Splash;
