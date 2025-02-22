
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lightbulb, BarChart3, ShoppingBag } from "lucide-react";
import { MatrixBackground } from "@/components/MatrixBackground";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-matrix">
      <MatrixBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 matrix-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#00ff41]/10 text-[#00ff41] matrix-border">
              Revolutionizing Talent Economy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#00ff41] text-glow matrix-fade-in" style={{ animationDelay: "0.4s" }}>
            Tokenize Your Talents
          </h1>
          <p className="text-xl text-[#00ff41]/80 mb-8 max-w-2xl mx-auto matrix-fade-in" style={{ animationDelay: "0.6s" }}>
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
            <Button size="lg" variant="outline" className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#00ff41] text-glow">Why Coded?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Smart contracts ensure safe and transparent talent exchanges",
              },
              {
                icon: Lightbulb,
                title: "AI-Powered Insights",
                description: "Get personalized recommendations for skill tokenization",
              },
              {
                icon: BarChart3,
                title: "Growth Opportunities",
                description: "Access a global marketplace of talent and opportunities",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-[#00ff41]/30 hover:border-[#00ff41] transition-all duration-300 matrix-border animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="h-12 w-12 text-[#00ff41] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#00ff41]">{feature.title}</h3>
                <p className="text-[#00ff41]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#00ff41] text-glow">How Coded Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Start by creating your professional profile",
              },
              {
                step: "02",
                title: "Skills Based NFTs",
                description: "Your skills are evaluated and minted as unique NFTs",
              },
              {
                step: "03",
                title: "Market & Shop",
                description: "Market your talent & shop around in the marketplace",
              },
            ].map((item, index) => (
              <div key={index} className="relative matrix-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-6xl font-bold text-[#00ff41]/20 absolute -top-8 -left-4">
                  {item.step}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 text-[#00ff41]">{item.title}</h3>
                  <p className="text-[#00ff41]/80">{item.description}</p>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/skill-evaluation')}
              className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 button-glow"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/marketplace')}
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 matrix-border flex items-center gap-2 animate-pulse"
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Marketplace
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
