
import { useEffect, useState } from 'react';
import { Unlink } from 'lucide-react';

export const BreakingChainAnimation = () => {
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    // Start the break animation after a short delay
    const timer = setTimeout(() => {
      setBroken(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className={`transition-transform duration-700 ${broken ? '-translate-x-6' : ''}`}>
        <Unlink
          className="w-16 h-16 text-[#00ff41] animate-pulse"
          strokeWidth={1.5}
        />
      </div>
      <div 
        className={`transition-all duration-700 transform ${
          broken 
            ? 'scale-150 opacity-0 translate-y-2' 
            : 'scale-100 opacity-100'
        }`}
      >
        <div className="w-3 h-3 bg-[#00ff41] rounded-full animate-ping" />
      </div>
      <div className={`transition-transform duration-700 ${broken ? 'translate-x-6' : ''}`}>
        <Unlink
          className="w-16 h-16 text-[#00ff41] animate-pulse"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};
