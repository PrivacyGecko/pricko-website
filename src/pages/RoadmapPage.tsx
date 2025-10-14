import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RoadmapPage: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const roadmapPhases = [
    {
      phase: "Phase 1 ✅",
      title: "GeckoShare Launch & Foundation",
      status: "completed" as const,
      quarter: "2024 Q4",
      progress: 100,
      duration: "Completed",
      budget: "Achieved",
      team: "Core Development",
      items: [
        {
          name: "GeckoShare SaaS Live",
          description: "Zero-knowledge file sharing platform with instant uploads and token-gated premium features",
          status: "completed",
          impact: "High"
        },
        {
          name: "Community Building & Pre-Launch",
          description: "Growing community of 1,200+ supporters preparing for upcoming token launch",
          status: "completed",
          impact: "High"
        },
        {
          name: "Website & Social Presence",
          description: "Official platform launched with Twitter, Telegram, and comprehensive documentation",
          status: "completed",
          impact: "High"
        },
        {
          name: "Persistent Vault Storage",
          description: "Pro-tier users can store files long-term with wallet-connect authentication",
          status: "completed",
          impact: "Medium"
        },
        {
          name: "Daily Quotas System",
          description: "Fair usage system implemented for free and premium users",
          status: "completed",
          impact: "Medium"
        }
      ]
    },
    {
      phase: "Phase 2 🧪",
      title: "GeckoGuard Beta Release",
      status: "in-progress" as const,
      quarter: "2025 Q3-Q4",
      progress: 75,
      duration: "3 months",
      budget: "In Progress",
      team: "Extension Development",
      items: [
        {
          name: "$PRICKO Token Launch",
          description: "Official token deployment on Solana with contract address and trading capabilities",
          status: "in-progress",
          impact: "High"
        },
        {
          name: "Manifest V3 Extension Development",
          description: "Building privacy extension compatible with Chrome's latest framework",
          status: "in-progress",
          impact: "High"
        },
        {
          name: "Anti-fingerprinting Protection",
          description: "Advanced techniques to prevent browser fingerprinting and tracking",
          status: "in-progress",
          impact: "High"
        },
        {
          name: "Multiple Stealth Modes",
          description: "Balanced, Strict, and Ultimate privacy levels for different user needs",
          status: "in-progress",
          impact: "High"
        },
        {
          name: "Beta Testing Program",
          description: "Open beta with 850+ testers providing feedback and bug reports",
          status: "in-progress",
          impact: "Medium"
        },
        {
          name: "Pro Tier Features",
          description: "token-gated enhanced protection for PRICKO holders",
          status: "upcoming",
          impact: "Medium"
        },
        {
          name: "Chrome Web Store Approval",
          description: "Final review and publication to Chrome extension marketplace",
          status: "upcoming",
          impact: "High"
        }
      ]
    },
    {
      phase: "Phase 2.5 📱",
      title: "GeckoShell Mobile Browser",
      status: "upcoming" as const,
      quarter: "2026 Q1-Q2",
      progress: 0,
      duration: "6 months",
      budget: "Planned",
      team: "Mobile Development",
      items: [
        {
          name: "Capacitor Framework Setup",
          description: "Cross-platform mobile browser foundation for iOS and Android",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Solana Wallet Integration",
          description: "Built-in wallet functionality with DeFi access and token management",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Plugin System Architecture",
          description: "Extensible framework for privacy tools and third-party integrations",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Privacy Toolkit SDK",
          description: "Comprehensive privacy utilities and developer tools",
          status: "upcoming",
          impact: "Medium"
        },
        {
          name: "iOS App Store Submission",
          description: "Apple App Store approval and distribution",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Google Play Store Launch",
          description: "Android marketplace approval and public release",
          status: "upcoming",
          impact: "High"
        }
      ]
    },
    {
      phase: "Phase 3 🚀",
      title: "GeckoBrowser Desktop - In Development",
      status: "upcoming" as const,
      quarter: "2026+",
      progress: 0,
      duration: "12+ months",
      budget: "Long-term",
      team: "Full Browser Team",
      items: [
        {
          name: "Ungoogled Chromium Fork",
          description: "Full-featured desktop browser based on privacy-focused Chromium",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Built-in Crypto Wallet",
          description: "Native multi-chain wallet with advanced DeFi integration",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Plugin Marketplace",
          description: "Curated ecosystem of privacy and productivity plugins",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Enterprise-grade Security",
          description: "Professional-level security features and enterprise controls",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Custom Privacy Engine",
          description: "Advanced tracking protection and fingerprint resistance technology",
          status: "upcoming",
          impact: "High"
        },
        {
          name: "Cross-platform Distribution",
          description: "Windows, macOS, and Linux releases with auto-update system",
          status: "upcoming",
          impact: "Medium"
        }
      ]
    }
  ];

  useEffect(() => {
    const completedPhases = roadmapPhases.filter(phase => phase.status === 'completed').length;
    const inProgressPhases = roadmapPhases.filter(phase => phase.status === 'in-progress');
    const totalProgress = completedPhases * 100 + (inProgressPhases.length > 0 ? inProgressPhases[0].progress : 0);
    const overallProgress = totalProgress / roadmapPhases.length;

    setProgressPercentage(overallProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusConfig = (status: string) => {
    const configs = {
      completed: {
        color: 'text-green-400 border-green-400',
        bg: 'bg-green-500/20',
        icon: '✅',
        glow: 'shadow-green-500/20',
        badge: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
      },
      'in-progress': {
        color: 'text-yellow-400 border-yellow-400',
        bg: 'bg-yellow-500/20',
        icon: '🚧',
        glow: 'shadow-yellow-500/20',
        badge: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
      },
      upcoming: {
        color: 'text-purple-400 border-purple-400',
        bg: 'bg-purple-500/20',
        icon: '🔮',
        glow: 'shadow-purple-500/20',
        badge: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
      }
    };
    return configs[status as keyof typeof configs];
  };

  const getItemStatusConfig = (status: string) => {
    const configs = {
      completed: { icon: '✅', color: 'text-green-400' },
      'in-progress': { icon: '🔄', color: 'text-yellow-400' },
      upcoming: { icon: '⏳', color: 'text-gray-400' }
    };
    return configs[status as keyof typeof configs];
  };

  const getImpactColor = (impact: string) => {
    const colors = {
      High: 'text-red-400 bg-red-500/20',
      Medium: 'text-yellow-400 bg-yellow-500/20',
      Low: 'text-green-400 bg-green-500/20'
    };
    return colors[impact as keyof typeof colors];
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
            <span className="text-accent">🗺️</span>
            <span className="text-sm font-medium text-accent">Strategic Development Plan</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            🦎 Pricko <span className="gradient-text-animated">Roadmap: Year 1</span>
          </h1>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed mb-8">
            From completed milestones to ambitious future plans. Track our journey from foundation setup
            to becoming the leading privacy-first ecosystem in crypto. Meme power meets real utility.
          </p>
          
          {/* Overall Progress */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-accent">Overall Progress</span>
              <span className="text-sm font-bold text-white">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full shadow-lg shadow-accent/30"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Status Dashboard */}
        <motion.section
          className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-6 border border-green-500/30 shadow-professional"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Current Phase</h3>
            <p className="text-white font-medium">Q4 2025 Roadmap</p>
            <div className="mt-3 text-xs text-yellow-300">15% Complete</div>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-6 border border-blue-500/30 shadow-professional"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Next Milestone</h3>
            <p className="text-white font-medium">$PRICKO Coin Launch</p>
            <div className="mt-3 text-xs text-blue-300">Q3 2025</div>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl p-6 border border-purple-500/30 shadow-professional"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Total Investment</h3>
            <p className="text-white font-medium">$12M+ Planned</p>
            <div className="mt-3 text-xs text-purple-300">Multi-Year Vision</div>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl p-6 border border-orange-500/30 shadow-professional"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-lg font-semibold mb-2 text-orange-400">Community</h3>
            <p className="text-white font-medium">Growing Ecosystem</p>
            <div className="mt-3 text-xs text-orange-300">Privacy First</div>
          </motion.div>
        </motion.section>

        {/* Enhanced Roadmap Timeline */}
        <div className="relative">
          {/* Enhanced Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-hover to-accent/30 rounded-full hidden md:block shadow-lg shadow-accent/20"></div>
          
          <div className="space-y-16">
            {roadmapPhases.map((phase, index) => {
              const statusConfig = getStatusConfig(phase.status);
              const isExpanded = selectedPhase === index;
              
              return (
                <motion.div
                  key={phase.phase}
                  className="relative"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Enhanced Timeline Dot */}
                  <motion.div 
                    className={`absolute left-6 w-6 h-6 rounded-full border-3 bg-bg-main hidden md:flex items-center justify-center ${statusConfig.color} ${statusConfig.glow} shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </motion.div>
                  
                  {/* Enhanced Content Card */}
                  <motion.div 
                    className={`md:ml-20 bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl p-8 border border-border/50 backdrop-blur-sm shadow-professional-lg hover:border-accent/30 transition-all duration-500 ${statusConfig.glow}`}
                    whileHover={{ scale: 1.01, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-3xl">{statusConfig.icon}</span>
                          <div>
                            <h3 className="text-3xl font-bold text-professional">{phase.title}</h3>
                            <p className="text-accent font-medium text-lg">{phase.phase} • {phase.quarter}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-bg-main/30 rounded-lg p-3">
                            <div className="text-xs text-muted mb-1">Duration</div>
                            <div className="font-semibold text-white">{phase.duration}</div>
                          </div>
                          <div className="bg-bg-main/30 rounded-lg p-3">
                            <div className="text-xs text-muted mb-1">Budget</div>
                            <div className="font-semibold text-accent">{phase.budget}</div>
                          </div>
                          <div className="bg-bg-main/30 rounded-lg p-3">
                            <div className="text-xs text-muted mb-1">Team</div>
                            <div className="font-semibold text-white">{phase.team}</div>
                          </div>
                          <div className="bg-bg-main/30 rounded-lg p-3">
                            <div className="text-xs text-muted mb-1">Progress</div>
                            <div className="font-semibold text-white">{phase.progress}%</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusConfig.badge} shadow-lg`}>
                          {phase.status.replace('-', ' ').toUpperCase()}
                        </span>
                        
                        {phase.progress > 0 && (
                          <div className="w-32">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-muted">Progress</span>
                              <span className="text-white font-medium">{phase.progress}%</span>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2">
                              <motion.div
                                className={`h-full rounded-full ${statusConfig.bg}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${phase.progress}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-accent">Deliverables</h4>
                        <motion.button
                          onClick={() => setSelectedPhase(isExpanded ? null : index)}
                          className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isExpanded ? '▲ Show Less' : '▼ Show Details'}
                        </motion.button>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {phase.items.slice(0, isExpanded ? phase.items.length : 3).map((item, itemIndex) => {
                          const itemStatus = getItemStatusConfig(item.status);
                          return (
                            <motion.div
                              key={itemIndex}
                              className="group p-4 bg-bg-main/40 rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-300"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.01, x: 5 }}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-lg">{itemStatus.icon}</span>
                                    <h5 className="font-semibold text-white group-hover:text-accent transition-colors">
                                      {item.name}
                                    </h5>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(item.impact)}`}>
                                      {item.impact}
                                    </span>
                                  </div>
                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-muted leading-relaxed"
                                      >
                                        {item.description}
                                      </motion.p>
                                    )}
                                  </AnimatePresence>
                                </div>
                                <span className={`text-xs font-medium ${itemStatus.color}`}>
                                  {item.status.replace('-', ' ').toUpperCase()}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Future Vision */}
        <motion.section
          className="mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm shadow-professional-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl"></div>
            
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-professional">
                2026 & Beyond: The <span className="gradient-text-animated">Privacy Revolution</span>
              </h2>
              <p className="text-xl text-muted mb-12 max-w-4xl mx-auto leading-relaxed">
                Our long-term vision extends far beyond token launches. We're building a comprehensive privacy ecosystem
                that will revolutionize how people protect their digital lives. From full privacy suites to DAO governance,
                PRICKO will lead the charge in making privacy accessible to everyone.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-8 border border-blue-500/30 shadow-professional"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl mb-6">🛡️</div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Full Privacy Suite</h3>
                  <p className="text-muted leading-relaxed">
                    Launch complete VPN, file sharing, and tracker blocker ecosystem.
                    A comprehensive solution for all your digital privacy needs.
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl p-8 border border-purple-500/30 shadow-professional"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl mb-6">🏛️</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">DAO Governance</h3>
                  <p className="text-muted leading-relaxed">
                    Develop community-driven governance where token holders shape the future
                    of privacy technology and project direction.
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-8 border border-green-500/30 shadow-professional"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl mb-6">🌐</div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-400">Multi-Chain Expansion</h3>
                  <p className="text-muted leading-relaxed">
                    Expand across EVM and Solana ecosystems while hosting Privacy Summits
                    & Hackathons to educate and grow the community.
                  </p>
                </motion.div>
              </div>

              <motion.button
                className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional glow-pulse"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Join the Revolution
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default RoadmapPage;