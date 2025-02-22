
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
      <div 
        className={`
          w-12 h-16 border-2 border-[#00ff41] rounded-full
          flex items-center justify-center relative
          transition-all duration-1000 ease-in-out
          ${connected ? 'translate-x-2' : '-translate-x-2'}
        `}
      >
        <div className="absolute inset-0 bg-[#00ff41]/10 rounded-full animate-pulse" />
      </div>

      {/* Right Chain Link */}
      <div 
        className={`
          w-12 h-16 border-2 border-[#00ff41] rounded-full
          flex items-center justify-center relative -ml-6
          transition-all duration-1000 ease-in-out
          ${connected ? '-translate-x-2' : 'translate-x-2'}
        `}
      >
        <div className="absolute inset-0 bg-[#00ff41]/10 rounded-full animate-pulse" />
      </div>
    </div>
  );
};
