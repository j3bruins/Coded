
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* 3D Locks with Breaking Animation */}
      <div className="relative mb-8 animate-float w-48 h-48">
        <div className="absolute inset-0 blur-lg bg-[#00ff41]/20"></div>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
        >
          {/* First Lock - Breaking Apart */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            {/* Lock Body */}
            <path
              d="M25,45 L45,45 L45,65 L25,65 L25,45"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* Lock Shackle - Breaking */}
            <path
              d="M30,45 C30,35 40,35 40,45"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Breaking Pieces */}
            <path
              d="M35,38 L37,36"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_1.5s_ease-in-out_infinite]"
            />
            <path
              d="M33,40 L35,38"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_2s_ease-in-out_infinite]"
              style={{ animationDelay: '0.2s' }}
            />
          </g>

          {/* Second Lock - Breaking Apart */}
          <g className="animate-pulse" transform="translate(30,0)">
            {/* Lock Body */}
            <path
              d="M25,45 L45,45 L45,65 L25,65 L25,45"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* Lock Shackle - Breaking */}
            <path
              d="M40,45 C40,35 30,35 30,45"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Breaking Pieces */}
            <path
              d="M35,38 L33,36"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_1.5s_ease-in-out_infinite]"
            />
            <path
              d="M37,40 L35,38"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_2s_ease-in-out_infinite]"
              style={{ animationDelay: '0.3s' }}
            />
          </g>

          {/* 3D Effect Highlights */}
          <g className="opacity-40">
            {/* Lock 1 Highlight */}
            <path
              d="M27,47 L43,47"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-pulse"
            />
            {/* Lock 2 Highlight */}
            <path
              d="M57,47 L73,47"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-pulse"
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
        onClick={() => navigate('/main')}
        className="mt-8 px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
      >
        Unlock Your Talent
      </Button>
    </div>
  );
};

export default Splash;
