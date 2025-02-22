
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
    <div className="flex items-center justify-center space-x-6">
      {/* Left Chain Link */}
      <div 
        className={`
          w-16 h-24 border-4 border-[#00ff41] rounded-full
          flex items-center justify-center relative
          transition-all duration-1000 ease-in-out
          ${connected ? 'translate-x-4' : '-translate-x-4'}
        `}
      >
        <div className="absolute inset-0 bg-[#00ff41]/10 rounded-full animate-pulse" />
      </div>

      {/* Right Chain Link */}
      <div 
        className={`
          w-16 h-24 border-4 border-[#00ff41] rounded-full
          flex items-center justify-center relative
          transition-all duration-1000 ease-in-out
          ${connected ? '-translate-x-4' : 'translate-x-4'}
        `}
      >
        <div className="absolute inset-0 bg-[#00ff41]/10 rounded-full animate-pulse" />
      </div>
    </div>
  );
};
