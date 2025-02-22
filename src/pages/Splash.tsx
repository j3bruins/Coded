
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Broken Chain Icon with Matrix Animation */}
      <div className="relative mb-8 animate-float w-64 h-64 transform-gpu">
        <div className="absolute inset-0 blur-2xl bg-[#00ff41]/10"></div>
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full filter drop-shadow-[0_0_25px_rgba(0,255,65,0.6)]"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004d14" />
              <stop offset="50%" stopColor="#00ff41" />
              <stop offset="100%" stopColor="#004d14" />
            </linearGradient>
          </defs>

          {/* Left Broken Chain Link */}
          <g className="animate-pulse" transform="translate(20,20) rotate(-10)">
            <path
              d="M10,20 C10,10 20,0 30,0 H50 C60,0 70,10 70,20 C70,30 60,40 50,40 H30 C20,40 10,30 10,20"
              fill="url(#chainGradient)"
              className="opacity-90"
            />
            {/* Chain Break Fragments */}
            <g className="animate-float" style={{ animationDelay: '0.2s' }}>
              <path
                d="M65,18 L68,20 L71,18 L69,22"
                fill="#00ff41"
                className="animate-pulse opacity-75"
              />
              <path
                d="M67,15 L70,13 L69,17"
                fill="#00ff41"
                className="animate-pulse opacity-60"
              />
            </g>
          </g>

          {/* Right Broken Chain Link */}
          <g className="animate-pulse" transform="translate(110,20) rotate(10)">
            <path
              d="M10,20 C10,10 20,0 30,0 H50 C60,0 70,10 70,20 C70,30 60,40 50,40 H30 C20,40 10,30 10,20"
              fill="url(#chainGradient)"
              className="opacity-90"
            />
            {/* Chain Break Fragments */}
            <g className="animate-float" style={{ animationDelay: '0.3s' }}>
              <path
                d="M5,18 L8,20 L11,18 L9,22"
                fill="#00ff41"
                className="animate-pulse opacity-75"
              />
              <path
                d="M7,15 L10,13 L9,17"
                fill="#00ff41"
                className="animate-pulse opacity-60"
              />
            </g>
          </g>

          {/* Matrix Code Effect */}
          <g className="matrix-code-overlay opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <text
                key={i}
                x={30 + Math.random() * 140}
                y={20 + Math.random() * 60}
                fill="#00ff41"
                fontSize="4"
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
