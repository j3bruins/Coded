
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import SkillEvaluation from "./pages/SkillEvaluation";
import Marketplace from "./pages/Marketplace";
import DeveloperProfile from "./pages/DeveloperProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/skill-evaluation" element={<SkillEvaluation />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/developer-profile" element={<DeveloperProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
