
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
            {/* Main Link Body */}
            <path
              d="M25,40 C25,30 35,30 45,40 L45,60 C35,70 25,70 25,60 L25,40"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* Breaking Point - Left Side */}
            <path
              d="M45,40 C55,30 65,30 65,40"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Breaking Pieces */}
            <path
              d="M45,42 L47,40"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_1.5s_ease-in-out_infinite]"
            />
            <path
              d="M48,41 L50,39"
              fill="none"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-[float_2s_ease-in-out_infinite]"
              style={{ animationDelay: '0.2s' }}
            />
          </g>

          {/* Second Chain Link Breaking */}
          <g className="animate-pulse" transform="translate(20,0)">
            {/* Main Link Body */}
            <path
              d="M65,40 C65,30 55,30 45,40 L45,60 C55,70 65,70 65,60 L65,40"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* Breaking Point - Right Side */}
            <path
              d="M45,60 C35,70 35,70 45,60"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-90 animate-[float_2s_ease-in-out_infinite]"
            />
            {/* Breaking Pieces */}
            <path
              d="M43,58 L41,60"
              fill="none"
              stroke="#00ff41"
              strokeWidth="2"
              className="animate-[float_1.5s_ease-in-out_infinite]"
            />
            <path
              d="M40,61 L38,63"
              fill="none"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-[float_2s_ease-in-out_infinite]"
              style={{ animationDelay: '0.3s' }}
            />
          </g>

          {/* 3D Effect Highlights */}
          <g className="opacity-40">
            {/* Link 1 Highlights */}
            <path
              d="M27,45 L43,45"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-pulse"
            />
            <path
              d="M27,55 L43,55"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-pulse"
            />
            {/* Link 2 Highlights */}
            <path
              d="M47,45 L63,45"
              stroke="#00ff41"
              strokeWidth="1"
              className="animate-pulse"
            />
            <path
              d="M47,55 L63,55"
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
