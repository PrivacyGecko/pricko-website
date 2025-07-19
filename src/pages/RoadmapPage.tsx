import React from 'react';
import { motion } from 'framer-motion';

const RoadmapPage: React.FC = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      status: "completed" as const,
      quarter: "Q4 2024",
      items: [
        "Token launch on Solana",
        "Community building & social presence",
        "Initial DEX listings",
        "Gecko mascot & branding development",
        "Website & documentation launch"
      ]
    },
    {
      phase: "Phase 2",
      title: "Privacy Tools Development",
      status: "in-progress" as const,
      quarter: "Q1 2025",
      items: [
        "DoxxGuard MVP launch",
        "BurnerChat beta release",
        "PrickoVPN development start",
        "Community governance implementation",
        "Staking mechanism deployment"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      status: "upcoming" as const,
      quarter: "Q2 2025",
      items: [
        "PrickoVPN public launch",
        "Mobile app development",
        "Cross-chain bridge implementation",
        "Partnership with privacy advocates",
        "Advanced encryption features"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Adoption",
      status: "upcoming" as const,
      quarter: "Q3 2025",
      items: [
        "Enterprise privacy solutions",
        "Multi-language support",
        "Hardware wallet integration",
        "Privacy education initiatives",
        "Regulatory compliance framework"
      ]
    },
    {
      phase: "Phase 5",
      title: "Privacy Metaverse",
      status: "upcoming" as const,
      quarter: "Q4 2025",
      items: [
        "Decentralized identity platform",
        "Privacy-first social network",
        "Anonymous marketplace",
        "Zero-knowledge proof integration",
        "Global privacy advocacy network"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 border-green-400';
      case 'in-progress':
        return 'text-yellow-400 border-yellow-400';
      case 'upcoming':
        return 'text-gray-400 border-gray-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🚧';
      case 'upcoming':
        return '🔮';
      default:
        return '⏳';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="gradient-text">Roadmap</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Our journey to build the most comprehensive privacy ecosystem in crypto. 
            From meme coin to privacy revolution, here's how we're changing the game.
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Current Focus</h3>
              <p className="text-muted">Privacy Tools Development</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Next Milestone</h3>
              <p className="text-muted">PrickoVPN Public Launch</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Progress</h3>
              <p className="text-muted">40% Complete</p>
            </div>
          </div>
        </motion.section>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 bg-black hidden md:block ${getStatusColor(phase.status)}`}></div>
                
                {/* Content Card */}
                <div className="md:ml-20 bg-secondary/50 rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <span className="text-2xl">{getStatusIcon(phase.status)}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                        <p className="text-accent font-medium">{phase.phase} • {phase.quarter}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(phase.status)} bg-black/50`}>
                      {phase.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center gap-3 p-3 bg-black/30 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-accent">•</span>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Beyond 2025: The Privacy Revolution</h2>
          <p className="text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Our roadmap extends far beyond these phases. We envision a world where privacy is not a luxury 
            but a fundamental right. PRICKO will continue to evolve, adapt, and lead the charge in 
            protecting digital freedom for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Global Impact</h3>
              <p className="text-muted">
                Protecting millions of users worldwide with cutting-edge privacy technology.
              </p>
            </motion.div>
            
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Innovation</h3>
              <p className="text-muted">
                Pioneering new privacy technologies and setting industry standards.
              </p>
            </motion.div>
            
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Community</h3>
              <p className="text-muted">
                Building the largest privacy-focused community in the crypto space.
              </p>
            </motion.div>
          </div>

          <motion.button
            className="btn-primary px-8 py-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Journey
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default RoadmapPage;