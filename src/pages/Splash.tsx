
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* 3D Chain Links Breaking Animation */}
      <div className="relative mb-8 animate-float w-48 h-48">
        <div className="absolute inset-0 blur-lg bg-[#00ff41]/20"></div>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
        >
          {/* First Chain Link Breaking */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            {/* Main Link Body - More tubular shape */}
            <path
              d="M20,40 C20,32 28,32 35,40 
                 L35,60 C28,68 20,68 20,60 
                 L20,40 
                 M20,40 C20,48 28,48 35,40
                 M20,60 C20,52 28,52 35,60"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-80"
            />
            {/* Breaking Point with more detail */}
            <path
              d="M35,40 C42,32 50,32 50,40"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Matrix-style inner details */}
            <path
              d="M22,45 L33,45 M22,55 L33,55"
              stroke="#00ff41"
              strokeWidth="0.5"
              className="opacity-40"
            />
            {/* Breaking Pieces with Matrix effect */}
            <path
              d="M35,42 L38,40 M39,41 L41,39"
              fill="none"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-[float_1.5s_ease-in-out_infinite]"
              strokeDasharray="2,2"
            />
          </g>

          {/* Second Chain Link Breaking */}
          <g className="animate-pulse" transform="translate(25,0)">
            {/* Main Link Body - More tubular shape */}
            <path
              d="M65,40 C65,32 57,32 50,40 
                 L50,60 C57,68 65,68 65,60 
                 L65,40
                 M65,40 C65,48 57,48 50,40
                 M65,60 C65,52 57,52 50,60"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-80"
            />
            {/* Breaking Point with more detail */}
            <path
              d="M50,60 C43,68 35,68 35,60"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Matrix-style inner details */}
            <path
              d="M52,45 L63,45 M52,55 L63,55"
              stroke="#00ff41"
              strokeWidth="0.5"
              className="opacity-40"
            />
            {/* Breaking Pieces with Matrix effect */}
            <path
              d="M48,58 L45,60 M44,61 L42,63"
              fill="none"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-[float_1.5s_ease-in-out_infinite]"
              strokeDasharray="2,2"
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
