import React from 'react';
import SEO from '../components/common/SEO';
import MascotImage from '../components/ui/MascotImage';
import ToolCardSimple from '../components/ui/ToolCardSimple';
import SecurityBadge from '../components/ui/SecurityBadge';
import { SIMPLIFIED_TOOLS, TOOLS_COUNT } from '../constants/toolsSimplified';
import { METRICS } from '../constants/metrics';

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
          <div className="text-center mb-16">
            <MascotImage size="lg" className="mb-6 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-professional">
              Privacy <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              8 products. {TOOLS_COUNT.live} live serving {METRICS.prickoshare.formatted} users. <span className="text-blue-400 font-semibold">AI-enhanced</span> where it matters. All open source. Token launches November 2025.
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
          </div>

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
                hasAI={tool.hasAI}
              />
            ))}
          </div>

          {/* Product Safety & Security Section - NEW */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-professional bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Product Safety & Security
              </h2>
              <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
                Every tool in our ecosystem is built with security-first principles and transparent development practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SecurityBadge
                variant="verified"
                title="Transparent Team"
                description="All team members and developers fully identified and verified."
                delay={0.1}
              />
              <SecurityBadge
                variant="encryption"
                title="Encrypted Storage"
                description="All user data encrypted end-to-end using military-grade algorithms."
                delay={0.2}
              />
              <SecurityBadge
                variant="audit"
                title="Security Audited"
                description="All live products undergo third-party security audits regularly."
                delay={0.3}
              />
              <SecurityBadge
                variant="open-source"
                title="100% Open Source"
                description="Complete transparency with all code available on GitHub for review."
                delay={0.4}
              />
            </div>
          </section>

          {/* Footer CTA */}
          <section className="text-center mt-24 relative overflow-hidden">
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm shadow-professional-lg">
              <h2 className="text-4xl font-bold mb-6 text-professional">
                Ready to <span className="gradient-text-animated">Secure</span> Your Digital Life?
              </h2>
              <p className="text-xl text-muted mb-10 max-w-3xl mx-auto">
                Join {METRICS.prickoshare.formatted} users protecting their privacy with Gecko Share and Gecko Advisor.
              </p>

              <button
                className="btn-primary px-10 py-4 text-lg font-semibold hover:scale-105 transition-transform"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore Live Tools
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ToolsPageSimplified;
