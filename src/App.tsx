
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import Splash from "./pages/Splash";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import SkillEvaluation from "./pages/SkillEvaluation";
import { SolanaProvider } from "./components/SolanaProvider";

const App = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SolanaProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/main" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/skill-evaluation" element={<SkillEvaluation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </SolanaProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
