import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import MascotImage from '../components/ui/MascotImage';
import ToolCardSimple from '../components/ui/ToolCardSimple';
import { SIMPLIFIED_TOOLS, TOOLS_COUNT } from '../constants/toolsSimplified';

const ToolsPageSimplified: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Tools - 8 Products, 2 Live Now | PRICKO"
        description="Explore PRICKO's ecosystem: Gecko Share (file sharing), Gecko Advisor (privacy scanner), Gecko Shell (mobile browser), and 5 more privacy tools. Powered by $PRICKO token."
        keywords="privacy tools, Gecko Share, Gecko Advisor, Gecko Shell, Gecko Guard, encrypted file sharing, privacy browser, PRICKO tools"
        canonicalUrl="/tools"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
        <div className="container-max section-padding">
          {/* Hero Section - Simplified */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MascotImage size="lg" className="mb-6 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-professional">
              Privacy <span className="gradient-text-animated">Tools</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              8 products. 2 live. All open source.
            </p>

            {/* Status Legend */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">Live ({TOOLS_COUNT.live})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-300">Beta ({TOOLS_COUNT.beta})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-blue-500 rounded-full"></span>
                <span className="text-gray-300">In Development ({TOOLS_COUNT.inDevelopment})</span>
              </div>
            </div>
          </motion.div>

          {/* Unified Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {SIMPLIFIED_TOOLS.map((tool, index) => (
              <ToolCardSimple
                key={tool.id}
                icon={tool.icon}
                title={tool.name}
                description={tool.oneLiner}
                status={tool.status}
                features={tool.topFeatures}
                url={tool.url}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Footer CTA */}
          <motion.section
            className="text-center mt-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm shadow-professional-lg">
              <h2 className="text-4xl font-bold mb-6 text-professional">
                Ready to <span className="gradient-text-animated">Secure</span> Your Digital Life?
              </h2>
              <p className="text-xl text-muted mb-10 max-w-3xl mx-auto">
                Join 2,100+ users protecting their privacy with Gecko Share and Gecko Advisor.
              </p>

              <motion.button
                className="btn-primary px-10 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore Live Tools
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default ToolsPageSimplified;
