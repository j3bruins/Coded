
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Matrix-style Chain Links */}
      <div className="relative mb-8 animate-float w-96 h-48">
        <div className="absolute inset-0 blur-lg bg-[#00ff41]/20"></div>
        <svg
          viewBox="0 0 240 120"
          className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
        >
          {/* Left Chain Link */}
          <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
            <path
              d="M40,45 L60,45 C75,45 75,75 60,75 L40,75 C25,75 25,45 40,45 Z"
              fill="none"
              stroke="#00ff41"
              strokeWidth="4"
              className="opacity-90"
            />
            {/* Inner details for depth */}
            <path
              d="M40,50 L60,50 C70,50 70,70 60,70 L40,70 C30,70 30,50 40,50"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-40"
            />
            {/* Matrix-style texture */}
            <g className="opacity-30">
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`left-texture-${i}`}
                  x1={35 + i * 8}
                  y1="50"
                  x2={35 + i * 8}
                  y2="70"
                  stroke="#00ff41"
                  strokeWidth="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </g>
          </g>

          {/* Breaking Effect */}
          <g className="animate-pulse" style={{ animationDelay: '0.3s' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`break-${i}`} className="animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
                <path
                  d={`M${110 + Math.random() * 20},${55 + Math.random() * 10} l${Math.random() * 6 - 3},${Math.random() * 6 - 3}`}
                  stroke="#00ff41"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <circle
                  cx={110 + Math.random() * 20}
                  cy={55 + Math.random() * 10}
                  r="1"
                  fill="#00ff41"
                  className="opacity-80"
                />
              </g>
            ))}
          </g>

          {/* Right Chain Link */}
          <g className="animate-pulse" style={{ animationDelay: '0.4s' }}>
            <path
              d="M140,45 L160,45 C175,45 175,75 160,75 L140,75 C125,75 125,45 140,45 Z"
              fill="none"
              stroke="#00ff41"
              strokeWidth="4"
              className="opacity-90"
            />
            {/* Inner details for depth */}
            <path
              d="M140,50 L160,50 C170,50 170,70 160,70 L140,70 C130,70 130,50 140,50"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="opacity-40"
            />
            {/* Matrix-style texture */}
            <g className="opacity-30">
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`right-texture-${i}`}
                  x1={135 + i * 8}
                  y1="50"
                  x2={135 + i * 8}
                  y2="70"
                  stroke="#00ff41"
                  strokeWidth="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </g>
          </g>

          {/* Digital particles effect */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={`particle-${i}`}
              cx={70 + Math.random() * 100}
              cy={40 + Math.random() * 40}
              r="0.5"
              fill="#00ff41"
              className="animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
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
