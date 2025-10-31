import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import PricingComparisonTable from '../components/ui/PricingComparisonTable';

const ToolsPage: React.FC = () => {
  const { getLiveProducts, getBetaProducts, getInDevelopmentProducts, getProductCounts, config } = useProjectConfig();
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [showSecurity, setShowSecurity] = useState<number | null>(null);

  // Helper function to transform products for display
  const transformProduct = (product: any) => ({
    icon: product.icon,
    title: product.name,
    subtitle: product.subtitle,
    description: product.description,
    features: product.features.map((feature: string) => ({
      name: feature,
      description: `${feature} feature for ${product.name}`
    })),
    status: product.status,
    users: product.metrics.users,
    rating: product.metrics.rating,
    category: product.category,
    url: product.url || undefined,
    progress: product.progress || 0,
    betaTesters: product.metrics.betaTesters || 0,
    estimatedLaunch: product.metrics.estimatedLaunch || '',
    securitySpecs: {
      encryption: product.security.encryption,
      architecture: product.security.architecture,
      auditStatus: product.security.auditStatus,
      openSource: product.security.openSource
    }
  });

  // Get products organized by status
  const liveTools = getLiveProducts().map(transformProduct);
  const betaTools = getBetaProducts().map(transformProduct);
  const inDevelopmentTools = getInDevelopmentProducts().map(transformProduct);

  const productCounts = getProductCounts();

  // Render a section of tools
  const renderToolSection = (tools: any[], sectionTitle: string, sectionDescription: string, sectionIndex: number) => {
    if (tools.length === 0) return null;

    return (
      <motion.div
        key={sectionTitle}
        className="mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-professional">
            {sectionTitle} <span className="text-accent">({tools.length})</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">{sectionDescription}</p>
        </div>

        <div className="space-y-20">
          {tools.map((tool, index) => {
            const toolIndex = sectionIndex * 100 + index; // Unique index for each tool across sections
            return renderToolCard(tool, toolIndex);
          })}
        </div>
      </motion.div>
    );
  };

  // Render individual tool card
  const renderToolCard = (tool: any, toolIndex: number) => {
    const statusConfig = getStatusConfig(tool.status);
    const isExpanded = selectedTool === toolIndex;

    return (
      <motion.div
        key={`${tool.title}-${toolIndex}`}
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: (toolIndex % 10) * 0.15 }}
        viewport={{ once: true }}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 ${statusConfig.glow}`}>

          {/* Content Section */}
          <div className={toolIndex % 2 === 1 ? "lg:order-2" : ""}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{statusConfig.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig.badge}`}>
                    {statusConfig.label}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-professional">{tool.title}</h3>
                <p className="text-accent font-medium mb-4">{tool.subtitle}</p>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted mb-1">{tool.category}</div>
                <div className="text-lg font-semibold text-accent">{tool.users}</div>
                {tool.rating && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                )}
                {tool.progress > 0 && tool.progress < 100 && (
                  <div className="mt-2">
                    <div className="text-xs text-muted mb-1">Progress</div>
                    <div className="w-24 bg-secondary/50 rounded-full h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="text-xs font-medium text-accent mt-1">{tool.progress}%</div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-muted mb-8 leading-relaxed text-lg">
              {tool.description}
            </p>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-accent">Key Features</h4>
                <motion.button
                  onClick={() => setSelectedTool(isExpanded ? null : toolIndex)}
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? 'Show Less' : 'Show Details'}
                </motion.button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {tool.features.slice(0, isExpanded ? tool.features.length : 3).map((feature: any, featureIndex: number) => {

                  return (
                    <motion.div
                      key={featureIndex}
                      className="group p-4 rounded-xl border bg-bg-main/30 border-border/30 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredFeature(`${toolIndex}-${featureIndex}`)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-accent mt-1 group-hover:scale-110 transition-transform">✓</span>
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-accent transition-colors">
                            {feature.name}
                          </div>
                          <AnimatePresence>
                            {(isExpanded || hoveredFeature === `${toolIndex}-${featureIndex}`) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm mt-1 text-muted"
                              >
                                {feature.description}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Security Specifications Section */}
            {tool.securitySpecs && (
              <motion.div className="mb-8">
                <button
                  className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-2 mb-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSecurity(showSecurity === toolIndex ? null : toolIndex);
                  }}
                >
                  <span>🔒</span>
                  <span>Security Details</span>
                  <span className="text-xs">{showSecurity === toolIndex ? '▲' : '▼'}</span>
                </button>

                <AnimatePresence>
                  {showSecurity === toolIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-secondary/30 border border-accent/20 rounded-xl p-4 space-y-3">
                        <div className="text-sm">
                          <strong className="text-accent">Encryption:</strong>{' '}
                          <span className="text-gray-300">{tool.securitySpecs.encryption}</span>
                        </div>
                        <div className="text-sm">
                          <strong className="text-accent">Architecture:</strong>{' '}
                          <span className="text-gray-300">{tool.securitySpecs.architecture}</span>
                        </div>
                        <div className="text-sm">
                          <strong className="text-accent">Audit Status:</strong>{' '}
                          <span className="text-gray-300">{tool.securitySpecs.auditStatus}</span>
                        </div>
                        {tool.securitySpecs.openSource && (
                          <div className="text-sm">
                            <strong className="text-accent">Source Code:</strong>{' '}
                            <a
                              href={tool.securitySpecs.openSource}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent-hover hover:underline"
                            >
                              View on GitHub →
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className={`${tool.status === 'live' ? 'btn-primary' : tool.status === 'beta' ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black' : 'btn-secondary'} px-8 py-4 text-lg font-semibold shadow-professional`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={tool.status !== 'live' && tool.status !== 'beta'}
                onClick={() => {
                  if ((tool.status === 'live' || tool.status === 'beta') && tool.url) {
                    window.open(tool.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {tool.status === 'live' ? '🚀 Use Now' :
                 tool.status === 'beta' ? '🧪 Join Beta' :
                 tool.status === 'in-development' ? '📋 Join Waitlist' :
                 '📅 Notify Me'}
              </motion.button>

              <motion.button
                className="border border-accent/30 text-accent hover:bg-accent/10 px-6 py-4 rounded-lg transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📖 Learn More
              </motion.button>
            </div>
          </div>

          {/* Visual Section */}
          <motion.div
            className={`flex justify-center ${toolIndex % 2 === 1 ? "lg:order-1" : ""}`}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div className={`w-80 h-80 bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl flex items-center justify-center border border-border/50 shadow-professional-lg ${statusConfig.glow}`}>
                <motion.img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-48 h-48 rounded-2xl shadow-2xl shadow-accent/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Floating Status Indicator */}
              <motion.div
                className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${statusConfig.badge} flex items-center justify-center`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const getStatusConfig = (status: string) => {
    const configs = {
      live: {
        badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25",
        label: "Live & Available",
        icon: "🟢",
        glow: "shadow-green-500/20"
      },
      beta: {
        badge: "bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-lg shadow-yellow-500/25",
        label: "Beta Release",
        icon: "🧪",
        glow: "shadow-yellow-500/20"
      },
      "coming-soon": {
        badge: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25",
        label: "Coming Soon",
        icon: "🔮",
        glow: "shadow-blue-500/20"
      },
      "in-development": {
        badge: "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25",
        label: "In Development",
        icon: "⚡",
        glow: "shadow-orange-500/20"
      },
      "long-term": {
        badge: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25",
        label: "Phase 3 - Long-term",
        icon: "🚀",
        glow: "shadow-purple-500/20"
      }
    };
    return configs[status as keyof typeof configs];
  };

  return (
    <>
      <SEO
        title="Privacy Tools - GeckoShare, GeckoGuard, GeckoLock & More | PRICKO"
        description="Explore PRICKO's ecosystem of privacy tools including GeckoShare (file sharing), GeckoGuard (tracker blocker), GeckoLock (password manager), and more. Powered by $PRICKO token."
        keywords="privacy tools, GeckoShare, GeckoGuard, GeckoLock, encrypted file sharing, password manager, tracker blocker, privacy browser, PRICKO tools"
        canonicalUrl="/tools"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent">🛡️</span>
            <span className="text-sm font-medium text-accent">Privacy Gecko Ecosystem</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Privacy <span className="gradient-text-animated">Tools</span>
          </h1>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed mb-8">
            Professional-grade privacy solutions powered by $PRICKO token.
            Each tool is meticulously crafted to protect your digital identity while
            delivering enterprise-level performance and security.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>{productCounts.live} Tools Live Now</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span>{productCounts.beta + productCounts.inDevelopment} Tools In Development ({productCounts.beta} Beta + {productCounts.inDevelopment} In-Dev)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Powered by ${config.token.symbol.replace('$', '')} Token</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Sections: Organized by Status */}
        {renderToolSection(
          liveTools,
          'LIVE NOW',
          'Available today. Start protecting your privacy with these production-ready tools.',
          0
        )}

        {renderToolSection(
          betaTools,
          'LAUNCHING SOON',
          'In beta testing. Join thousands of early users and help shape these products.',
          1
        )}

        {renderToolSection(
          inDevelopmentTools,
          'IN DEVELOPMENT',
          'Coming soon. Track progress and join waitlists for upcoming privacy tools.',
          2
        )}

        {/* Pricing Comparison Section */}
        <PricingComparisonTable />

        {/* Enhanced Call to Action */}
        <motion.section
          className="text-center mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm shadow-professional-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl"></div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-professional">
                Ready to <span className="gradient-text-animated">Secure</span> Your Digital Life?
              </h2>
              <p className="text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
                Join {config.community.total.toLocaleString()}+ users in the Privacy Gecko community.
                Experience {productCounts.live} live privacy tools today and be part of the growing ecosystem powered by ${config.token.symbol.replace('$', '')} token.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional glow-pulse"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Explore Tools
                </motion.button>
                <motion.button
                  className="btn-secondary px-10 py-4 text-lg font-semibold shadow-professional"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 Join Community
                </motion.button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Powered by $PRICKO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Community Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default ToolsPage;
