
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MatrixBackground } from "@/components/MatrixBackground";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      {/* Enhanced 3D Chain Links Animation */}
      <div className="relative mb-8 animate-float w-64 h-64">
        <div className="absolute inset-0 blur-lg bg-[#00ff41]/20"></div>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
        >
          {/* First Chain Link */}
          <g className="animate-pulse" style={{ transform: 'translate(-10px, 0) rotate(-5deg)' }}>
            <path
              d="M20,35 C20,25 35,25 35,35 L35,65 C35,75 20,75 20,65 L20,35"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* 3D effect for first link */}
            <path
              d="M20,35 C20,45 35,45 35,35"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
            <path
              d="M20,65 C20,55 35,55 35,65"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
          </g>

          {/* Middle Chain Link */}
          <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
            <path
              d="M35,50 C35,40 65,40 65,50 L65,80 C65,90 35,90 35,80 L35,50"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* 3D effect for middle link */}
            <path
              d="M35,50 C35,60 65,60 65,50"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
            <path
              d="M35,80 C35,70 65,70 65,80"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
          </g>

          {/* Last Chain Link */}
          <g className="animate-pulse" style={{ transform: 'translate(10px, 0) rotate(5deg)', animationDelay: '0.4s' }}>
            <path
              d="M65,20 C65,10 95,10 95,20 L95,50 C95,60 65,60 65,50 L65,20"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-80"
            />
            {/* 3D effect for last link */}
            <path
              d="M65,20 C65,30 95,30 95,20"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
            <path
              d="M65,50 C65,40 95,40 95,50"
              fill="none"
              stroke="#00ff41"
              strokeWidth="3"
              className="opacity-60"
            />
          </g>

          {/* Highlight effects */}
          <g className="opacity-30">
            {Array.from({ length: 3 }).map((_, i) => (
              <ellipse
                key={i}
                cx={30 + i * 30}
                cy={40 + i * 15}
                rx="4"
                ry="2"
                fill="#00ff41"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>

          {/* Breaking effect particles */}
          <g className="opacity-50">
            {Array.from({ length: 6 }).map((_, i) => (
              <circle
                key={i}
                cx={45 + Math.sin(i) * 10}
                cy={55 + Math.cos(i) * 10}
                r="1"
                fill="#00ff41"
                className="animate-float"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
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

