
import { Navigation } from "@/components/Navigation";
import { CategorySection, categories } from "@/components/CategorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Discover Top Talent</h1>
        
        {categories.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </main>
    </div>
  );
};

export default Index;
