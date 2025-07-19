import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToolsPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const tools = [
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMmM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMGMtMS43IDAtMy4zLS40LTQuNy0xLjJsLTQuMyAxLjJjLS41LjEtLjktLjMtLjgtLjhsMS4yLTQuM2MtLjgtMS40LTEuMi0zLTEuMi00LjcgMC01LjUgNC41LTEwIDEwLTEweiIvPgo8L3N2Zz4KPC9zdmc+",
      title: "Pricko File Sharing",
      subtitle: "AI-Powered Secure File Sharing - FREE",
      description: "Revolutionary AI-powered file sharing platform with military-grade encryption. Share files securely with automatic AI content analysis and threat detection. Completely FREE for all users.",
      features: [
        { name: "AI-powered threat detection", description: "Advanced AI scans all files for malware and threats" },
        { name: "End-to-end encryption", description: "AES-256 military-grade encryption for all transfers" },
        { name: "Self-destructing files", description: "Automatic file deletion after specified time" },
        { name: "Wallet-based identity", description: "Seamless Solana wallet authentication" },
        { name: "Zero storage policy", description: "Files never stored on our servers" },
        { name: "Free for everyone", description: "No limits, no fees, completely free service" }
      ],
      status: "coming-soon" as const,
      // users: "15K+",
      // rating: 4.9,
      category: "File Sharing"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJNOSAxMmwzIDNsNi02Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "Pricko VPN",
      subtitle: "Next-Gen Privacy Network",
      description: "Revolutionary blockchain-powered VPN with global infrastructure. Currently in development with planned launch after successful coin deployment.",
      features: [
        { name: "Wallet-based authentication", description: "One-click Solana wallet login" },
        { name: "Zero-logs policy", description: "Certified no-logging infrastructure" },
        { name: "Global server network", description: "50+ countries, 200+ servers planned" },
        { name: "Crypto-native payments", description: "Pay with $PRICKO tokens" },
        { name: "Advanced kill switch", description: "Automatic protection on disconnect" }
      ],
      status: "coming-soon" as const,
      // users: "Waitlist: 35K+",
      // rating: null,
      category: "Network Security"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJNOSAxMmwzIDNsNi02Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "Pricko Guard",
      subtitle: "AI-Powered Privacy Shield",
      description: "Intelligent personal data protection powered by advanced AI algorithms. Currently in final development phase with launch planned after VPN deployment.",
      features: [
        { name: "Real-time monitoring", description: "24/7 AI-powered surveillance" },
        { name: "Smart data masking", description: "Intelligent PII protection" },
        { name: "Instant breach alerts", description: "Real-time security notifications" },
        { name: "Social media shield", description: "Cross-platform privacy protection" },
        { name: "Identity theft prevention", description: "Proactive threat mitigation" }
      ],
      status: "coming-soon" as const,
      // users: "Waitlist: 12K+",
      // rating: null,
      category: "Data Protection"
    }
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      live: {
        badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25",
        label: "Live & Free",
        icon: "🟢",
        glow: "shadow-green-500/20"
      },
      "coming-soon": {
        badge: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25",
        label: "Coming Soon",
        icon: "🔮",
        glow: "shadow-purple-500/20"
      }
    };
    return configs[status as keyof typeof configs];
  };

  return (
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
            <span className="text-sm font-medium text-accent">Privacy-First Ecosystem</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Privacy <span className="gradient-text-animated">Tools</span>
          </h1>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed mb-8">
            Professional-grade privacy solutions powered by blockchain technology.
            Each tool is meticulously crafted to protect your digital identity while
            delivering enterprise-level performance and security.
          </p>
          
          {/* <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>1 Live Tool (FREE)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>15K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>2 Tools in Development</span>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-20">
          {tools.map((tool, index) => {
            const statusConfig = getStatusConfig(tool.status);
            const isExpanded = selectedTool === index;
            
            return (
              <motion.div
                key={tool.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 ${statusConfig.glow}`}>
                  
                  {/* Content Section */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{statusConfig.icon}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig.badge}`}>
                            {statusConfig.label}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-professional">{tool.title}</h2>
                        <p className="text-accent font-medium mb-4">{tool.subtitle}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-muted mb-1">{tool.category}</div>
                        {/* <div className="text-lg font-semibold text-accent">{tool.users}</div> */}
                        {/* {tool.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm font-medium">{tool.rating}</span>
                          </div>
                        )} */}
                      </div>
                    </div>
                    
                    <p className="text-muted mb-8 leading-relaxed text-lg">
                      {tool.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-accent">Key Features</h3>
                        <motion.button
                          onClick={() => setSelectedTool(isExpanded ? null : index)}
                          className="text-sm text-accent hover:text-accent-hover transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isExpanded ? 'Show Less' : 'Show Details'}
                        </motion.button>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {tool.features.slice(0, isExpanded ? tool.features.length : 3).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="group p-4 bg-bg-main/30 rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredFeature(`${index}-${featureIndex}`)}
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
                                  {(isExpanded || hoveredFeature === `${index}-${featureIndex}`) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="text-sm text-muted mt-1"
                                    >
                                      {feature.description}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        className={`${tool.status ? 'btn-primary' : 'btn-secondary'} px-8 py-4 text-lg font-semibold shadow-professional`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={tool.status === 'coming-soon'}
                      >
                        {tool.status  ? '🚀 Launch Tool' : '📋 Join Waitlist'}
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
                    className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative">
                      <div className={`w-80 h-80 bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl flex items-center justify-center border border-border/50 shadow-professional-lg ${statusConfig.glow}`}>
                        <motion.img
                          src={tool.icon}
                          alt={tool.title}
                          className="w-32 h-32 filter brightness-0 invert opacity-90"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            console.error(`Failed to load image: ${tool.icon}`);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log(`Successfully loaded image: ${tool.icon}`)}
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
          })}
        </div>

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
                Join over 15,000 users who trust PRICKO to protect their digital privacy.
                Start with our FREE File Sharing tool and be part of the privacy revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional glow-pulse"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Get Started Now
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
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 Support</span>
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
  );
};

export default ToolsPage;