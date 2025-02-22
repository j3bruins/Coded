
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Megaphone, Briefcase, Headphones, Coins, Heart, Home, Cog, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";

interface TalentCard {
  name: string;
  title: string;
  description: string;
  rate: string;
  availability: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  talents: TalentCard[];
}

const categories: Category[] = [
  {
    name: "Developers",
    icon: <Code className="w-6 h-6" />,
    talents: [
      {
        name: "Alex Smith",
        title: "Senior Blockchain Developer",
        description: "Specialized in Solidity and Web3 development with 5+ years experience",
        rate: "15 SOL/hr",
        availability: "Available in 2 weeks"
      },
      {
        name: "Sarah Johnson",
        title: "Full Stack Developer",
        description: "Expert in React, Node.js, and blockchain integration",
        rate: "12 SOL/hr",
        availability: "Immediately Available"
      }
    ]
  },
  {
    name: "Marketing",
    icon: <Megaphone className="w-6 h-6" />,
    talents: [
      {
        name: "Mike Brown",
        title: "Web3 Marketing Strategist",
        description: "Specializing in crypto and NFT marketing campaigns",
        rate: "10 SOL/hr",
        availability: "Available Now"
      }
    ]
  },
  {
    name: "Investor Relations",
    icon: <Briefcase className="w-6 h-6" />,
    talents: [
      {
        name: "Emma Wilson",
        title: "IR Specialist",
        description: "10+ years experience in crypto investor relations",
        rate: "20 SOL/hr",
        availability: "Available in 1 week"
      }
    ]
  },
  {
    name: "Customer Service",
    icon: <Headphones className="w-6 h-6" />,
    talents: [
      {
        name: "David Lee",
        title: "Community Manager",
        description: "Experienced in Discord and Telegram community management",
        rate: "6 SOL/hr",
        availability: "Immediately Available"
      }
    ]
  },
  {
    name: "AI",
    icon: <Brain className="w-6 h-6" />,
    talents: [
      {
        name: "Lisa Chen",
        title: "AI Integration Specialist",
        description: "Expert in AI implementation for blockchain projects",
        rate: "18 SOL/hr",
        availability: "Available in 3 weeks"
      }
    ]
  },
  {
    name: "Finance",
    icon: <Coins className="w-6 h-6" />,
    talents: [
      {
        name: "James Wilson",
        title: "DeFi Analyst",
        description: "Specialized in DeFi protocols and financial modeling",
        rate: "16 SOL/hr",
        availability: "Available Now"
      }
    ]
  },
  {
    name: "Philanthropy",
    icon: <Heart className="w-6 h-6" />,
    talents: [
      {
        name: "Maria Garcia",
        title: "Impact Investment Advisor",
        description: "Focused on blockchain solutions for social impact",
        rate: "14 SOL/hr",
        availability: "Available in 1 week"
      }
    ]
  },
  {
    name: "Real Estate",
    icon: <Home className="w-6 h-6" />,
    talents: [
      {
        name: "Robert Taylor",
        title: "Real Estate Tokenization Expert",
        description: "Specialized in real estate asset tokenization",
        rate: "17 SOL/hr",
        availability: "Available Now"
      }
    ]
  },
  {
    name: "Business Operations",
    icon: <Cog className="w-6 h-6" />,
    talents: [
      {
        name: "Jennifer Kim",
        title: "Operations Manager",
        description: "Expert in scaling Web3 operations",
        rate: "13 SOL/hr",
        availability: "Available in 2 weeks"
      }
    ]
  },
  {
    name: "Web3",
    icon: <Globe className="w-6 h-6" />,
    talents: [
      {
        name: "Tom Anderson",
        title: "Web3 Architect",
        description: "Specialized in Web3 infrastructure and dApp development",
        rate: "19 SOL/hr",
        availability: "Available Now"
      }
    ]
  },
  {
    name: "Tokenomics",
    icon: <Coins className="w-6 h-6" />,
    talents: [
      {
        name: "Sophie Martinez",
        title: "Tokenomics Designer",
        description: "Expert in token economic models and incentive design",
        rate: "17.5 SOL/hr",
        availability: "Available in 1 week"
      }
    ]
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#00ff41] matrix-border p-4 inline-block">
          Talent Marketplace
        </h1>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <div className="flex items-center gap-2 matrix-border p-4">
                {category.icon}
                <h2 className="text-2xl font-semibold text-[#00ff41]">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {category.talents.map((talent, index) => (
                  <Card key={index} className="border-[#00ff41]/30 bg-black/50 backdrop-blur-sm hover:border-[#00ff41] transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-[#00ff41]">{talent.name}</CardTitle>
                      <CardDescription className="text-[#00ff41]/70">{talent.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[#00ff41]/90">{talent.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="border-[#00ff41] text-[#00ff41]">
                          {talent.rate}
                        </Badge>
                        <Badge variant="outline" className="border-[#00ff41] text-[#00ff41]">
                          {talent.availability}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
