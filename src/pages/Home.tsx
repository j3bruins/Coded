
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold text-[#00ff41] mb-6 text-glow">Welcome to TokenifyTalents</h1>
          <p className="text-xl text-[#00ff41]/80 mb-12">
            Discover and connect with top blockchain talent through our decentralized marketplace.
          </p>
          
          <Button
            onClick={() => navigate('/marketplace')}
            className="px-8 py-6 text-xl bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 button-glow matrix-border"
          >
            <Briefcase className="w-6 h-6" />
            Enter Marketplace
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
