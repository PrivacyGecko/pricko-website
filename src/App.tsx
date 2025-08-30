import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ContactPage from './pages/ContactPage';
import ToolsPage from './pages/ToolsPage';
import RoadmapPage from './pages/RoadmapPage';
import TokenomicsPage from './pages/TokenomicsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
} 

export default App;