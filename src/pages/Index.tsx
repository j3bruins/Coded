
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { MatrixBackground } from "@/components/MatrixBackground";
import { useNavigate } from "react-router-dom";
import Globe from "@/components/Globe";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix">
      <MatrixBackground />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 matrix-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="/lovable-uploads/88eb9bb7-e7e1-4590-8962-dad42cb603c0.png"
              alt="Coded Waveform Logo"
              className="h-64 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ff41] text-glow matrix-fade-in" style={{ animationDelay: "0.4s" }}>
            Tokenize Your Talents
          </h1>
          <p className="text-lg text-[#00ff41]/80 mb-8 max-w-2xl mx-auto matrix-fade-in" style={{ animationDelay: "0.6s" }}>
            Transform your skills into digital assets. Connect, trade, and grow in the new talent economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center matrix-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              onClick={() => navigate('/skill-evaluation')}
              className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/marketplace')}
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Marketplace
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#00ff41] text-glow">Why Coded?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl text-[#00ff41]/90 leading-relaxed">
                Take your talents beyond the trenches. Tokenize them and sell them via NFTs.
                <span className="block mt-4 text-3xl font-bold">The world is yours.</span>
              </p>
            </div>
            <div className="relative">
              <Globe />
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-black/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00ff41]/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff41] text-glow animate-pulse">
            How Coded Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Create Profile",
                description: "Start by creating your professional profile. AI Agent Skills Analyst activated",
              },
              {
                title: "Skills Based NFTs",
                description: "Your skills are evaluated and minted as unique NFTs",
              },
              {
                title: "Market & Shop",
                description: "Market your talent & shop around in the marketplace",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative bg-black/40 p-8 rounded-lg border border-[#00ff41]/30 hover:border-[#00ff41] transition-all duration-300 matrix-border matrix-fade-in group hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-[#00ff41] tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[#00ff41] leading-relaxed opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-matrix">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#00ff41] mb-6 text-glow">
            Ready to Tokenize Your Talents?
          </h2>
          <p className="text-[#00ff41]/90 mb-8">
            Join the future of the talent economy today.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/skill-evaluation')}
            className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
