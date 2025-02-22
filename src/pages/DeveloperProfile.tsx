
import React from 'react';
import { Navigation } from "@/components/Navigation";
import { MatrixBackground } from "@/components/MatrixBackground";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Code, Coins, ExternalLink, MessageSquare } from "lucide-react";

const DeveloperProfile = () => {
  const reviews = [
    {
      client: "Ethereum Foundation",
      rating: 5,
      comment: "Alex delivered exceptional work on our smart contract system. His deep understanding of blockchain technology and attention to security was impressive.",
      date: "February 2024"
    },
    {
      client: "DeFi Protocol",
      rating: 5,
      comment: "Outstanding blockchain developer. Alex helped us implement complex DeFi mechanisms with top-notch security considerations.",
      date: "December 2023"
    },
    {
      client: "NFT Marketplace",
      rating: 5,
      comment: "Alex's expertise in Web3 development helped us launch our NFT marketplace ahead of schedule. Highly recommended!",
      date: "October 2023"
    }
  ];

  const portfolio = [
    {
      title: "DeFi Lending Protocol",
      description: "Developed smart contracts for a decentralized lending platform with $10M+ TVL",
      link: "https://github.com/example/defi-lending"
    },
    {
      title: "NFT Marketplace",
      description: "Built a full-stack NFT marketplace with React and Solidity",
      link: "https://github.com/example/nft-marketplace"
    },
    {
      title: "DAO Governance System",
      description: "Implemented an on-chain governance system for a major DAO",
      link: "https://github.com/example/dao-governance"
    }
  ];

  const skills = [
    { name: "Smart Contract Development", level: "Expert" },
    { name: "Solidity", level: "Expert" },
    { name: "Web3.js", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Blockchain Security", level: "Expert" }
  ];

  const availableNFTs = [
    {
      name: "Smart Contract Development",
      description: "Expert-level smart contract development and auditing",
      rate: "15 SOL/hr",
      availability: "Available in 2 weeks"
    },
    {
      name: "DeFi Protocol Development",
      description: "End-to-end DeFi protocol implementation",
      rate: "18 SOL/hr",
      availability: "Available Now"
    },
    {
      name: "Web3 Integration",
      description: "Frontend and backend Web3 integration services",
      rate: "14 SOL/hr",
      availability: "Available in 1 week"
    }
  ];

  return (
    <div className="min-h-screen bg-matrix relative">
      <MatrixBackground />
      <Navigation />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff41]">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Alex Smith"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#00ff41] mb-2">Alex Smith</h1>
            <h2 className="text-xl text-[#00ff41]/80 mb-4">Senior Blockchain Developer</h2>
            <p className="text-[#00ff41]/70 mb-4 max-w-2xl">
              With over 5 years of experience in blockchain development, I specialize in
              building secure, scalable DeFi protocols and Web3 applications. Expert in
              Solidity, smart contract security, and full-stack development.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="border-[#00ff41] text-[#00ff41]"
                >
                  {skill.name} • {skill.level}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* NFTs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#00ff41] mb-6">Available Skill NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableNFTs.map((nft, index) => (
              <Card key={index} className="border-[#00ff41]/30 bg-black/50 backdrop-blur-sm hover:border-[#00ff41] transition-all">
                <CardHeader>
                  <CardTitle className="text-[#00ff41]">{nft.name}</CardTitle>
                  <CardDescription className="text-[#00ff41]/70">{nft.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="border-[#00ff41] text-[#00ff41]">
                      {nft.rate}
                    </Badge>
                    <Badge variant="outline" className="border-[#00ff41] text-[#00ff41]">
                      {nft.availability}
                    </Badge>
                  </div>
                  <Button className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
                    <Coins className="w-4 h-4 mr-2" />
                    Purchase NFT
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#00ff41] mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-[#00ff41]/30 bg-black/50 backdrop-blur-sm hover:border-[#00ff41] transition-all">
                <CardHeader>
                  <CardTitle className="text-[#00ff41]">{project.title}</CardTitle>
                  <CardDescription className="text-[#00ff41]/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#00ff41] mb-6">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-[#00ff41]/30 bg-black/50 backdrop-blur-sm hover:border-[#00ff41] transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-[#00ff41]">{review.client}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00ff41] text-[#00ff41]" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-[#00ff41]/50">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00ff41]/70">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeveloperProfile;
