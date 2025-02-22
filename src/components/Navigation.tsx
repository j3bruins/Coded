
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#00ff41]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#00ff41] text-glow cursor-pointer" onClick={() => navigate('/main')}>
              TokenifyTalents
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#00ff41]/80 hover:text-[#00ff41] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-[#00ff41]/80 hover:text-[#00ff41] transition-colors">
              How it Works
            </a>
            <Button
              variant="outline"
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border"
            >
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border flex items-center gap-2"
              onClick={() => navigate('/marketplace')}
            >
              <ShoppingBag className="w-4 h-4" />
              Marketplace
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00ff41] hover:text-[#00ff41]/80"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-b border-[#00ff41]/30">
            <a
              href="#features"
              className="block px-3 py-2 text-[#00ff41]/80 hover:text-[#00ff41] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-[#00ff41]/80 hover:text-[#00ff41] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <Button
              variant="outline"
              className="w-full mt-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border"
            >
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="w-full mt-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border flex items-center justify-center gap-2"
              onClick={() => {
                navigate('/marketplace');
                setIsOpen(false);
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Marketplace
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
