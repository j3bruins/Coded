
import { useEffect, useState } from 'react';

export const BreakingChainAnimation = () => {
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBroken(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-3">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`
            w-12 h-12 rounded-lg border-2 border-[#00ff41] 
            flex items-center justify-center
            transition-all duration-700
            ${broken && index === 2 ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}
            ${broken && index < 3 ? '-translate-x-6' : ''}
            ${broken && index > 3 ? 'translate-x-6' : ''}
          `}
        >
          <div className="w-6 h-6 rounded-sm bg-[#00ff41]/20 animate-pulse" />
        </div>
      ))}
    </div>
  );
};
