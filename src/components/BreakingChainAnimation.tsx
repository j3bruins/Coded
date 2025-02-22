
export const BreakingChainAnimation = () => {
  return (
    <div className="relative w-[500px] h-[300px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/294cffb5-7813-4975-957c-9096dee3022d.png"
          alt="Digital chain link"
          className="w-full h-full object-contain mix-blend-screen"
          style={{ 
            filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 10px rgba(0, 255, 65, 0.6))'
          }}
        />
      </div>
    </div>
  );
};
