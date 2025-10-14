import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import PremiumFeature from '../components/ui/PremiumFeature';
import { METRICS, RATING } from '../constants/metrics';

const ToolsPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [showSecurity, setShowSecurity] = useState<number | null>(null);

  const tools = [
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik05IDE0bDIgMiA0LTQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoAdvisor",
      subtitle: "Privacy & Security Audit Tool",
      description: "Comprehensive privacy and security audit tool that scans your devices for vulnerabilities, tracks privacy leaks, and provides actionable recommendations to enhance your digital security posture.",
      features: [
        { name: "Device scanning", description: "Comprehensive scan of device settings and configurations for privacy risks" },
        { name: "Vulnerability detection", description: "Identify security weaknesses and potential exploit vectors" },
        { name: "Privacy score", description: "Real-time privacy rating based on your device configuration and behavior" },
        { name: "Actionable recommendations", description: "Step-by-step guidance to fix identified privacy and security issues" },
        { name: "Tracking detection", description: "Detect hidden trackers, spyware, and unwanted monitoring tools" },
        { name: "Secure configuration", description: "Automatically apply security best practices and hardening measures" }
      ],
      status: "live" as const,
      users: "Live & Available",
      rating: 4.7,
      category: "Security Audit",
      url: "https://geckoadvisor.com",
      securitySpecs: {
        encryption: "TLS 1.3 + Local processing",
        architecture: "Client-side analysis (no data leaves device)",
        auditStatus: "Independent security review completed Q4 2024",
        openSource: "https://github.com/pricko-project/gecko-advisor"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTEgMTVoMnYtNmgtMnY2em0wLThoMlY3aC0ydjJ6Ii8+CiAgPHBhdGggZD0iTTkgMTBoLTJsMy0zIDMgM2gtMlY5SDl2MXoiLz4KICA8cGF0aCBkPSJNMTUgMTJ2Mmgyek0xNSAxNGgtM3YyaDNWMTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoShare",
      subtitle: "zero-knowledge File Sharing SaaS",
      description: "Revolutionary zero-knowledge, token-gated file-sharing platform with instant uploads, persistent vault storage, and wallet-connect premium access. Features daily quotas system for fair usage.",
      features: [
        { name: "Instant link → upload", description: "Generate sharing links before files finish uploading in background" },
        { name: "Persistent vault (Pro tier)", description: "Long-term storage with premium wallet authentication" },
        { name: "Daily quotas system", description: "Fair usage limits with Pro tier benefits" },
        { name: "Wallet-connect premium", description: "token-gated access to advanced features" },
        { name: "Zero-knowledge encryption", description: "End-to-end encryption with no server-side access to content" },
        { name: "Background processing", description: "Upload files while sharing links are already active" }
      ],
      status: "live" as const,
      users: `${METRICS.prickoshare.formatted} ${METRICS.prickoshare.label}`,
      rating: RATING.prickoshare,
      category: "File Sharing",
      url: "https://prickoshare.com",
      securitySpecs: {
        encryption: "AES-256-GCM end-to-end encryption",
        architecture: "Zero-knowledge (server-side blind)",
        auditStatus: "Security audit scheduled Q1 2026",
        openSource: "https://github.com/pricko-project/prickoshare"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJtMTIgOCA0IDRIMTBsNC00eiIvPgogIDxyZWN0IHg9IjkiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoGuard",
      subtitle: "Manifest V3 Privacy Extension",
      description: "Advanced Manifest V3 browser extension providing comprehensive privacy protection with anti-fingerprinting technology, tracker blocking, and multiple stealth modes for different privacy levels.",
      features: [
        { name: "Anti-fingerprinting protection", description: "Advanced techniques to prevent browser fingerprinting and tracking" },
        { name: "Tracker/cookie blocking", description: "Intelligent blocking of tracking scripts and invasive cookies" },
        { name: "Multiple stealth modes", description: "Choose from different privacy levels: Balanced, Strict, Ultimate" },
        { name: "Pro vs free protection", description: "Tiered access with enhanced features for token holders" },
        { name: "Manifest V3 compatibility", description: "Built for Chrome's latest extension framework" },
        { name: "Real-time threat detection", description: "Active monitoring and blocking of privacy threats" }
      ],
      status: "beta" as const,
      users: `Beta: ${METRICS.prickoGuard.formatted} ${METRICS.prickoGuard.label}`,
      rating: RATING.prickoGuard,
      category: "Browser Extension",
      url: "https://prickoguard.com",
      securitySpecs: {
        encryption: "TLS 1.3 + Local storage encryption",
        architecture: "Client-side processing (no data sent to servers)",
        auditStatus: "Beta testing with community security review",
        openSource: "https://github.com/pricko-project/pricko-guard"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHJ4PSIyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogIDxyZWN0IHg9IjgiIHk9IjUiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHJ4PSIxIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjIiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cjwvc3ZnPg==",
      title: "GeckoLock",
      subtitle: "Password Manager",
      description: "Zero-knowledge password manager with military-grade AES-256 encryption and cross-platform synchronization. Store, generate, and autofill passwords securely with biometric unlock and multi-device sync.",
      features: [
        { name: "AES-256 encryption", description: "Military-grade encryption ensuring your passwords are never accessible to anyone but you" },
        { name: "Zero-knowledge architecture", description: "Your master password never leaves your device - complete privacy guaranteed" },
        { name: "Cross-platform sync", description: "Seamlessly access your passwords across all devices with end-to-end encryption" },
        { name: "Biometric unlock", description: "Fingerprint and Face ID support for quick and secure access" },
        { name: "Secure password generation", description: "Create strong, unique passwords with customizable complexity requirements" },
        { name: "65% complete", description: "Currently in active development with core features implemented and tested" }
      ],
      status: "in-development" as const,
      users: "In Development (65% Complete)",
      rating: null,
      category: "Password Manager",
      url: undefined,
      securitySpecs: {
        encryption: "AES-256-GCM with PBKDF2 key derivation",
        architecture: "Zero-knowledge (no server-side password access)",
        auditStatus: "Security audit planned for Q2 2026 pre-launch",
        openSource: "https://github.com/pricko-project/gecko-lock"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTcgMkg3Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDJIM3YxNGg4VjR6Ii8+CiAgPHBhdGggZD0iTTkgMTloMnYtMkg5djJ6bTAtM2gydi0ySDl2MnptMC0zaDJ2LTJIOWY3eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTkiIHI9IjEiLz4KPC9zdmc+Cjwvc3ZnPg==",
      title: "GeckoShell",
      subtitle: "Mobile Privacy Browser",
      description: "Cross-platform mobile privacy browser built with Capacitor framework. Features native iOS and Android support, plugin system architecture, Solana wallet integration, and comprehensive privacy toolkit SDK.",
      features: [
        { name: "Cross-platform (iOS, Android)", description: "Native mobile experience on both major platforms" },
        { name: "Plugin system architecture", description: "Extensible framework for privacy tools and features" },
        { name: "Solana wallet integration", description: "Built-in wallet functionality with DeFi access" },
        { name: "Privacy toolkit SDK", description: "Comprehensive privacy tools and utilities" },
        { name: "Capacitor-based framework", description: "Hybrid app technology for optimal performance" },
        { name: "Mobile-first design", description: "Optimized UI/UX for mobile privacy workflows" }
      ],
      status: "coming-soon" as const,
      users: `${METRICS.prickoShell.label}: ${METRICS.prickoShell.formatted}`,
      rating: null,
      category: "Mobile Browser",
      url: undefined,
      securitySpecs: {
        encryption: "Military-grade AES-256 encryption",
        architecture: "Sandboxed execution environment",
        auditStatus: "Design phase - audit planned pre-launch",
        openSource: "https://github.com/pricko-project/pricko-shell"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0xIDJoMXYxMEg0VjZoMTV6Ii8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMyIvPgogIDxwYXRoIGQ9Im0xNSA4IDIgMk05IDggNyAxMCIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoBrowser",
      subtitle: "Desktop Privacy Browser",
      description: "Full-featured desktop browser forked from Ungoogled Chromium. Features built-in crypto wallet, plugin marketplace, privacy-first architecture, and integrated DeFi tools for the ultimate privacy-focused browsing experience.",
      features: [
        { name: "Built-in crypto wallet", description: "Native wallet integration with multi-chain support" },
        { name: "Plugin marketplace", description: "Curated ecosystem of privacy and productivity plugins" },
        { name: "Privacy-first architecture", description: "Ungoogled Chromium base with enhanced privacy features" },
        { name: "Integrated DeFi tools", description: "Built-in access to decentralized finance protocols" },
        { name: "Custom privacy engine", description: "Advanced tracking protection and fingerprint resistance" },
        { name: "Enterprise-grade security", description: "Professional-level security features and controls" }
      ],
      status: "in-development" as const,
      users: "In Development",
      rating: null,
      category: "Desktop Browser",
      url: undefined,
      securitySpecs: {
        encryption: "Hardware-backed encryption + Secure Enclaves",
        architecture: "Ungoogled Chromium fork with privacy hardening",
        auditStatus: "Independent security audit planned for Phase 3",
        openSource: "https://github.com/pricko-project/pricko-browser"
      }
    }
  ];

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
          
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>GeckoAdvisor Live</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>GeckoShare Live</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span>GeckoGuard Beta</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>GeckoLock In Dev</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>GeckoShell Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>GeckoBrowser Phase 3</span>
            </div>
          </motion.div>
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
                        <div className="text-lg font-semibold text-accent">{tool.users}</div>
                        {tool.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm font-medium">{tool.rating}</span>
                          </div>
                        )}
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
                        {tool.features.slice(0, isExpanded ? tool.features.length : 3).map((feature, featureIndex) => {
                          const isGeckoShare = tool.title === "GeckoShare";
                          const isPremiumFeature = isGeckoShare && (
                            feature.name.includes("Pro") || 
                            feature.name.includes("premium") || 
                            feature.name.includes("Wallet-connect")
                          );
                          
                          return (
                            <motion.div
                              key={featureIndex}
                              className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                                isPremiumFeature
                                  ? 'bg-gradient-to-r from-yellow-500/5 to-amber-500/5 border-yellow-500/20 hover:border-yellow-500/40'
                                  : 'bg-bg-main/30 border-border/30 hover:border-accent/30'
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              onHoverStart={() => setHoveredFeature(`${index}-${featureIndex}`)}
                              onHoverEnd={() => setHoveredFeature(null)}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-start gap-3">
                                {isPremiumFeature ? (
                                  <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-400 text-sm">👑</span>
                                    <span className="text-yellow-400 text-xs font-bold">PRO</span>
                                  </div>
                                ) : (
                                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform">✓</span>
                                )}
                                <div className="flex-1">
                                  <div className={`font-medium transition-colors ${
                                    isPremiumFeature
                                      ? 'text-yellow-100 group-hover:text-yellow-50'
                                      : 'text-white group-hover:text-accent'
                                  }`}>
                                    {feature.name}
                                    {isPremiumFeature && (
                                      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs">
                                        🔒 Token Required
                                      </span>
                                    )}
                                  </div>
                                  <AnimatePresence>
                                    {(isExpanded || hoveredFeature === `${index}-${featureIndex}`) && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`text-sm mt-1 ${
                                          isPremiumFeature ? 'text-yellow-200' : 'text-muted'
                                        }`}
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
                            setShowSecurity(showSecurity === index ? null : index);
                          }}
                        >
                          <span>🔒</span>
                          <span>Security Details</span>
                          <span className="text-xs">{showSecurity === index ? '▲' : '▼'}</span>
                        </button>

                        <AnimatePresence>
                          {showSecurity === index && (
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
                        disabled={tool.status === 'coming-soon' || tool.status === 'in-development' || tool.status === 'long-term'}
                        onClick={() => {
                          if ((tool.status === 'live' || tool.status === 'beta') && tool.url) {
                            window.open(tool.url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        {tool.status === 'live' ? '🚀 Use Now' : 
                         tool.status === 'beta' ? '🧪 Join Beta' :
                         tool.status === 'coming-soon' ? '📋 Join Waitlist' :
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
                Join over {METRICS.prickoshare.formatted} users already using GeckoShare and {METRICS.prickoGuard.formatted} beta testers trying GeckoGuard.
                Experience live privacy tools today and be part of the growing PRICKO ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional glow-pulse"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Join Waitlist
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