
import { LucideIcon } from "lucide-react";
import { TalentCard } from "./TalentCard";
import {
  Code,
  Megaphone,
  Briefcase,
  Headphones,
  Brain,
  DollarSign,
  Heart,
  Home,
  Cog,
  Globe,
  Coins,
} from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  talents: Array<{
    name: string;
    title: string;
    rate: string;
    description: string;
    availability: "Available" | "Busy" | "Part-time";
  }>;
}

export const categories: Category[] = [
  {
    name: "Developers",
    icon: Code,
    talents: [
      {
        name: "Alex Morgan",
        title: "Senior Full Stack Developer",
        rate: "$150/hr",
        description: "10+ years experience in React, Node.js, and cloud architecture",
        availability: "Available",
      },
      {
        name: "Sarah Chen",
        title: "Blockchain Developer",
        rate: "$175/hr",
        description: "Specialized in Solidity and Web3 development",
        availability: "Busy",
      },
    ],
  },
  {
    name: "Marketing",
    icon: Megaphone,
    talents: [
      {
        name: "James Wilson",
        title: "Growth Marketing Expert",
        rate: "$125/hr",
        description: "Specializing in Web3 and crypto marketing strategies",
        availability: "Available",
      },
    ],
  },
  {
    name: "Investor Relations",
    icon: Briefcase,
    talents: [
      {
        name: "Emily Roberts",
        title: "IR Specialist",
        rate: "$200/hr",
        description: "15+ years experience in investor relations and communications",
        availability: "Part-time",
      },
    ],
  },
  {
    name: "Customer Service",
    icon: Headphones,
    talents: [
      {
        name: "Michael Brown",
        title: "Customer Success Manager",
        rate: "$85/hr",
        description: "Experienced in managing high-value client relationships",
        availability: "Available",
      },
    ],
  },
  {
    name: "AI",
    icon: Brain,
    talents: [
      {
        name: "Dr. Lisa Zhang",
        title: "AI Research Scientist",
        rate: "$250/hr",
        description: "PhD in Machine Learning, specialized in LLMs",
        availability: "Part-time",
      },
    ],
  },
  {
    name: "Finance",
    icon: DollarSign,
    talents: [
      {
        name: "Robert Chen",
        title: "Financial Analyst",
        rate: "$175/hr",
        description: "CFA with expertise in crypto markets",
        availability: "Available",
      },
    ],
  },
  {
    name: "Philanthropy",
    icon: Heart,
    talents: [
      {
        name: "Maria Garcia",
        title: "Nonprofit Consultant",
        rate: "$95/hr",
        description: "Specialized in social impact measurement",
        availability: "Available",
      },
    ],
  },
  {
    name: "Real Estate",
    icon: Home,
    talents: [
      {
        name: "David Kim",
        title: "Real Estate Tokenization Expert",
        rate: "$200/hr",
        description: "Expertise in real estate tokenization and compliance",
        availability: "Busy",
      },
    ],
  },
  {
    name: "Business Operations",
    icon: Cog,
    talents: [
      {
        name: "Rachel Thompson",
        title: "Operations Director",
        rate: "$150/hr",
        description: "Streamlining operations for Web3 companies",
        availability: "Available",
      },
    ],
  },
  {
    name: "Web3",
    icon: Globe,
    talents: [
      {
        name: "Thomas Anderson",
        title: "Web3 Architect",
        rate: "$225/hr",
        description: "Building decentralized applications and protocols",
        availability: "Part-time",
      },
    ],
  },
  {
    name: "Tokenomics",
    icon: Coins,
    talents: [
      {
        name: "Dr. John Park",
        title: "Tokenomics Designer",
        rate: "$275/hr",
        description: "Designing sustainable token economies",
        availability: "Available",
      },
    ],
  },
];

export const CategorySection = ({
  category,
}: {
  category: Category;
}) => {
  const Icon = category.icon;
  
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-[#00ff41]" />
        <h2 className="text-2xl font-bold">{category.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.talents.map((talent) => (
          <TalentCard
            key={talent.name}
            name={talent.name}
            title={talent.title}
            category={category.name}
            rate={talent.rate}
            description={talent.description}
            availability={talent.availability}
          />
        ))}
      </div>
    </div>
  );
};
