
import { useEffect, useState } from 'react';

export const BreakingChainAnimation = () => {
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBroken(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const ChainLink = ({ isLeft }: { isLeft: boolean }) => (
    <div className="relative">
      <div 
        className={`
          w-16 h-24 relative
          transition-all duration-1000 ease-in-out transform-gpu
          hover:scale-110
          ${broken ? (isLeft ? '-translate-x-8 -rotate-12' : 'translate-x-8 rotate-12') : ''}
        `}
      >
        {/* Main outer ring */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-24 bg-[#00ff41] rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-16 h-8 bg-[#00ff41] rounded-full" />
        </div>

        {/* Inner cutout */}
        <div className="absolute inset-[3px]">
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-6 h-[90px] bg-black rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-[58px] h-6 bg-black rounded-full" />
        </div>

        {/* Metallic effect overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-24 rounded-full bg-gradient-to-b from-[#00ff41]/50 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 w-16 h-8 rounded-full bg-gradient-to-r from-[#00ff41]/50 via-transparent to-[#00ff41]/50" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 filter blur-[2px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-24 bg-[#00ff41]/20 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-16 h-8 bg-[#00ff41]/20 rounded-full" />
        </div>

        {/* Break effect */}
        {broken && (
          <div 
            className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 
              w-4 h-16 bg-[#00ff41]/30 blur-md`}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center">
      <ChainLink isLeft={true} />
      <div className="-ml-8">
        <ChainLink isLeft={false} />
      </div>
    </div>
  );
};
