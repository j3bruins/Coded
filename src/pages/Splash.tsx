
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Logo Section */}
      <div className="text-center mb-12 relative animate-fade-in">
        <img 
          src="/lovable-uploads/f097724b-1511-474b-b38a-5bb387720bcf.png" 
          alt="Coded Logo" 
          className="w-64 h-auto mb-8 animate-pulse"
        />
        <div className="text-[#a2d298] text-2xl tracking-widest animate-fade-in" style={{ animationDelay: "0.5s" }}>
          UNLOCK YOUR TALENT
        </div>
      </div>

      {/* Enter Button */}
      <Button
        onClick={() => navigate('/main')}
        className="px-8 py-6 text-xl bg-transparent border-2 border-[#a2d298] text-[#a2d298] hover:bg-[#a2d298]/10 transition-all duration-300 button-glow matrix-border animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        Enter
      </Button>
    </div>
  );
};

export default Splash;
