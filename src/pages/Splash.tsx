
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Enhanced 3D Chain Link Icon with Animation */}
      <div className="relative mb-8 animate-float w-64 h-64 transform-gpu">
        <div className="absolute inset-0 blur-2xl bg-[#00ff41]/10"></div>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_25px_rgba(0,255,65,0.6)]"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="chainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004d14" />
              <stop offset="50%" stopColor="#00ff41" />
              <stop offset="100%" stopColor="#004d14" />
            </linearGradient>
            <linearGradient id="chainGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#004d14" />
              <stop offset="50%" stopColor="#00ff41" />
              <stop offset="100%" stopColor="#004d14" />
            </linearGradient>
          </defs>

          {/* First Chain Link with 3D Effect */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            {/* Deep Shadow */}
            <path
              d="M33,32 L48,32 C58,32 68,40 68,50 C68,60 58,68 48,68 L33,68 C23,68 13,60 13,50 C13,40 23,32 33,32"
              fill="rgba(0,20,0,0.5)"
              transform="translate(2,2)"
            />
            {/* Main Link Body */}
            <path
              d="M33,30 L48,30 C58,30 68,40 68,50 C68,60 58,70 48,70 L33,70 C23,70 13,60 13,50 C13,40 23,30 33,30"
              fill="url(#chainGradient1)"
              className="opacity-90"
            />
            {/* Highlight */}
            <path
              d="M33,33 L48,33 C56,33 64,41 64,50 C64,59 56,67 48,67 L33,67 C25,67 17,59 17,50 C17,41 25,33 33,33"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            />
          </g>
          
          {/* Second Chain Link with 3D Effect */}
          <g className="animate-pulse" style={{ animationDelay: '0.3s' }}>
            {/* Deep Shadow */}
            <path
              d="M52,32 L67,32 C77,32 87,40 87,50 C87,60 77,68 67,68 L52,68 C42,68 32,60 32,50 C32,40 42,32 52,32"
              fill="rgba(0,20,0,0.5)"
              transform="translate(2,2)"
            />
            {/* Main Link Body */}
            <path
              d="M52,30 L67,30 C77,30 87,40 87,50 C87,60 77,70 67,70 L52,70 C42,70 32,60 32,50 C32,40 42,30 52,30"
              fill="url(#chainGradient2)"
              className="opacity-90"
            />
            {/* Highlight */}
            <path
              d="M52,33 L67,33 C75,33 83,41 83,50 C83,59 75,67 67,67 L52,67 C44,67 36,59 36,50 C36,41 44,33 52,33"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            />
          </g>

          {/* Enhanced Matrix Code Effect */}
          <g className="matrix-code-overlay opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <text
                key={i}
                x={15 + Math.random() * 70}
                y={15 + Math.random() * 70}
                fill="#00ff41"
                fontSize="3"
                className="font-mono animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </text>
            ))}
          </g>
        </svg>
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
