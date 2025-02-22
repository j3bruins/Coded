
export const BreakingChainAnimation = () => {
  return (
    <div className="relative w-[300px] h-[200px] mx-auto">
      <div className="absolute inset-0 animate-pulse">
        <img 
          src="/lovable-uploads/8f40772d-736b-4ab1-b43c-0ea103a55cf6.png" 
          alt="Interconnected rings"
          className="w-full h-full object-contain mix-blend-screen filter brightness-125"
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 mix-blend-overlay"></div>
      </div>
    </div>
  );
};
