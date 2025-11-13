import React from 'react';
import { motion } from 'framer-motion';

/**
 * PHASE 1 TEST COMPONENT - Protocol Theme Verification
 * This component demonstrates all new protocol design system elements
 * DELETE after Phase 1 testing complete
 */
const ProtocolThemeTest: React.FC = () => {
  return (
    <div className="min-h-screen section-padding pt-32 bg-primary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text-protocol">GeckoCore Protocol Theme Test</span>
          </h1>
          <p className="text-muted mb-8">Testing Phase 1 design system extensions</p>

          {/* Protocol Colors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-interactive">
                <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#06b6d4' }}></div>
                <h3 className="text-white font-semibold">Protocol Primary</h3>
                <p className="text-muted text-sm">#06b6d4 - Cyan-500 (Infrastructure)</p>
              </div>
              <div className="card-interactive">
                <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#8b5cf6' }}></div>
                <h3 className="text-white font-semibold">Protocol Secondary</h3>
                <p className="text-muted text-sm">#8b5cf6 - Purple-500 (Governance)</p>
              </div>
              <div className="card-interactive">
                <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#14b8a6' }}></div>
                <h3 className="text-white font-semibold">Protocol Accent</h3>
                <p className="text-muted text-sm">#14b8a6 - Teal-500 (Highlights)</p>
              </div>
            </div>
          </section>

          {/* Protocol Card Variant */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Card Variant</h2>
            <div className="card-protocol">
              <h3 className="text-2xl font-bold text-white mb-3">GeckoCore Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                This card uses the .card-protocol class with cyan-to-purple gradient background
                and cyan border that glows on hover.
              </p>
              <span className="badge-protocol">Q1 2026</span>
            </div>
          </section>

          {/* Protocol Badge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Badge</h2>
            <div className="card-interactive flex flex-wrap gap-3">
              <span className="badge-protocol">GeckoCore Protocol</span>
              <span className="badge-protocol">Node Staking</span>
              <span className="badge-protocol">Q1 2026 Launch</span>
              <span className="badge-protocol">Decentralized Infrastructure</span>
            </div>
          </section>

          {/* Protocol Gradient Text */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Gradient Text</h2>
            <div className="card-interactive">
              <h3 className="text-3xl gradient-text-protocol mb-2">One Token. Endless Utility.</h3>
              <p className="text-gray-300">
                The .gradient-text-protocol class creates cyan-to-purple gradient text effect
              </p>
            </div>
          </section>

          {/* Protocol Button */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Button</h2>
            <div className="card-interactive flex flex-wrap gap-4">
              <button className="btn-protocol">Explore GeckoCore</button>
              <button className="btn-protocol">Read Whitepaper</button>
              <button className="btn-protocol">Join Node Network</button>
            </div>
          </section>

          {/* Protocol Glow Effect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Protocol Glow Animation</h2>
            <div className="card-protocol protocol-glow-pulse">
              <h3 className="text-2xl font-bold text-white mb-3">Animated Glow Effect</h3>
              <p className="text-gray-300">
                This card has the .protocol-glow-pulse class for subtle pulsing cyan/purple glow
              </p>
            </div>
          </section>

          {/* Comparison with Existing Brand */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">Brand Harmony Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-interactive">
                <h3 className="text-xl gradient-text mb-3">Privacy Gecko Brand</h3>
                <p className="text-gray-300 mb-4">
                  Green accent (#4ade80) for live products and main brand identity
                </p>
                <button className="btn-primary">Use Products Today</button>
              </div>
              <div className="card-protocol">
                <h3 className="text-xl gradient-text-protocol mb-3">GeckoCore Protocol</h3>
                <p className="text-gray-300 mb-4">
                  Cyan/Purple theme for future infrastructure and decentralized features
                </p>
                <button className="btn-protocol">Explore Protocol</button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProtocolThemeTest;
