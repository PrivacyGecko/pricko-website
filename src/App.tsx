import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';
import TokenomicsPage from './pages/TokenomicsPage';
import RoadmapPage from './pages/RoadmapPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/tools" element={<ToolsPage />} /> */}
        {/* <Route path="/tokenomics" element={<TokenomicsPage />} /> */}
        {/* <Route path="/roadmap" element={<RoadmapPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
} 

export default App;