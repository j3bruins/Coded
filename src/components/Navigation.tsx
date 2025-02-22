
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WalletButton } from "./WalletButton";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#a2d298]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/f097724b-1511-474b-b38a-5bb387720bcf.png"
              alt="Coded Logo"
              className="h-8 w-auto cursor-pointer"
              onClick={() => navigate('/main')}
            />
            <span className="text-2xl font-bold text-[#a2d298] text-glow cursor-pointer" onClick={() => navigate('/main')}>
              Coded
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#a2d298]/80 hover:text-[#a2d298] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-[#a2d298]/80 hover:text-[#a2d298] transition-colors">
              How it Works
            </a>
            <a href="#validator" className="text-[#a2d298]/80 hover:text-[#a2d298] transition-colors">
              Validator
            </a>
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#a2d298] hover:text-[#a2d298]/80"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-b border-[#a2d298]/30">
            <a
              href="#features"
              className="block px-3 py-2 text-[#a2d298]/80 hover:text-[#a2d298] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-[#a2d298]/80 hover:text-[#a2d298] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#validator"
              className="block px-3 py-2 text-[#a2d298]/80 hover:text-[#a2d298] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Validator
            </a>
            <div className="px-3 py-2">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
