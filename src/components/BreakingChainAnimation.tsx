
import { useEffect, useState } from 'react';

export const BreakingChainAnimation = () => {
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBroken(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center perspective-[1000px]">
      {/* Left Chain Link */}
      <div className="relative">
        <div 
          className={`
            w-24 h-12 relative
            transition-all duration-1000 ease-in-out transform-gpu
            hover:scale-110
            ${broken ? '-translate-x-8 -rotate-12 translate-z-12' : ''}
          `}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Broken edge effect */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#00ff41]/20 blur-sm" />
          
          {/* Multiple parallel lines for enhanced 3D effect */}
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 opacity-30 shadow-[0_0_15px_rgba(0,255,65,0.3)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-95 opacity-50 shadow-[0_0_10px_rgba(0,255,65,0.4)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-90 opacity-70 shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-85 shadow-[0_0_5px_rgba(0,255,65,0.6)]" />
          
          {/* Inner glow and depth effect */}
          <div className="absolute inset-0 bg-[#00ff41]/5 rounded-full transform rotate-45 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/10 to-transparent rounded-full transform rotate-45" />
        </div>
      </div>

      {/* Right Chain Link */}
      <div className="relative -ml-12">
        <div 
          className={`
            w-24 h-12 relative
            transition-all duration-1000 ease-in-out transform-gpu
            hover:scale-110
            ${broken ? 'translate-x-8 rotate-12 translate-z-12' : ''}
          `}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Broken edge effect */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#00ff41]/20 blur-sm" />
          
          {/* Multiple parallel lines for enhanced 3D effect */}
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 opacity-30 shadow-[0_0_15px_rgba(0,255,65,0.3)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-95 opacity-50 shadow-[0_0_10px_rgba(0,255,65,0.4)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-90 opacity-70 shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
          <div className="absolute inset-0 border-[3px] border-[#00ff41] rounded-full transform rotate-45 scale-85 shadow-[0_0_5px_rgba(0,255,65,0.6)]" />
          
          {/* Inner glow and depth effect */}
          <div className="absolute inset-0 bg-[#00ff41]/5 rounded-full transform rotate-45 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#00ff41]/10 to-transparent rounded-full transform rotate-45" />
        </div>
      </div>
    </div>
  );
};
