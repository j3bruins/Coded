
import { useEffect, useState } from 'react';

export const BreakingChainAnimation = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnected(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {/* Left Chain Link */}
      <div className="relative">
        <div 
          className={`
            w-24 h-12 relative
            transition-all duration-1000 ease-in-out
            ${connected ? 'translate-x-2' : '-translate-x-2'}
          `}
        >
          {/* Multiple parallel lines for 3D effect */}
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 opacity-30" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-95 opacity-50" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-90 opacity-70" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-85" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#00ff41]/5 rounded-full transform rotate-45 animate-pulse" />
        </div>
      </div>

      {/* Right Chain Link */}
      <div className="relative -ml-12">
        <div 
          className={`
            w-24 h-12 relative
            transition-all duration-1000 ease-in-out
            ${connected ? '-translate-x-2' : 'translate-x-2'}
          `}
        >
          {/* Multiple parallel lines for 3D effect */}
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 opacity-30" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-95 opacity-50" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-90 opacity-70" />
          <div className="absolute inset-0 border-2 border-[#00ff41] rounded-full transform rotate-45 scale-85" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#00ff41]/5 rounded-full transform rotate-45 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
