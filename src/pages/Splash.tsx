
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Matrix Chain Link Icon with Animation */}
      <div className="relative mb-8 animate-float w-48 h-48">
        <div className="absolute inset-0 blur-lg bg-[#00ff41]/20"></div>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
        >
          {/* First Chain Link */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <path
              d="M35,30 L50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 L35,70 C25,70 15,60 15,50 C15,40 25,30 35,30"
              fill="none"
              stroke="#00ff41"
              strokeWidth="4"
              className="opacity-70"
            />
            <path
              d="M33,35 L50,35 C57,35 65,42 65,50 C65,58 57,65 50,65 L33,65 C26,65 18,58 18,50 C18,42 26,35 33,35"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-90"
            />
          </g>
          
          {/* Second Chain Link */}
          <g className="animate-pulse">
            <path
              d="M50,30 L65,30 C75,30 85,40 85,50 C85,60 75,70 65,70 L50,70 C40,70 30,60 30,50 C30,40 40,30 50,30"
              fill="none"
              stroke="#00ff41"
              strokeWidth="4"
              className="opacity-70"
            />
            <path
              d="M48,35 L65,35 C72,35 80,42 80,50 C80,58 72,65 65,65 L48,65 C41,65 33,58 33,50 C33,42 41,35 48,35"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-90"
            />
          </g>

          {/* Matrix Code Effect */}
          <g className="matrix-code-overlay opacity-30">
            {Array.from({ length: 10 }).map((_, i) => (
              <text
                key={i}
                x={20 + Math.random() * 60}
                y={20 + Math.random() * 60}
                fill="#00ff41"
                fontSize="4"
                className="font-mono animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                1
              </text>
            ))}
          </g>
        </svg>
      </div>

      {/* Button with Matrix Style */}
      <Button
        onClick={() => navigate('/home')}
        className="mt-8 px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
      >
        Unlock Your Talent
      </Button>
    </div>
  );
};

export default Splash;
