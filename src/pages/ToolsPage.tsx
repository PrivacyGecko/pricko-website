import React from 'react';
import { motion } from 'framer-motion';


const ToolsPage: React.FC = () => {
  const tools = [
    {
      icon: "/vpn.png",
      title: "Pricko VPN",
      description: "Wallet-authenticated VPN service that provides fast, secure, and truly private internet access. Built on Solana for seamless crypto integration.",
      features: [
        "Wallet-based authentication",
        "No-logs policy",
        "Global server network",
        "Solana-native payments",
        "Kill switch protection"
      ],
      status: "coming-soon" as const
    },
    {
      icon: "/chat.png",
      title: "Pricko File Sharing - Free",
      description: "Ephemeral, encrypted messaging platform where conversations disappear and privacy is paramount. Connect with your wallet for secure communication.",
      features: [
        "End-to-end encryption",
        "Self-destructing messages",
        "Wallet-based identity",
        "No data retention",
        "Anonymous group chats"
      ],
      status: "beta" as const
    },
    {
      icon: "/shield.png",
      title: "Pricko Guard",
      description: "Advanced personal data protection service that automatically detects and masks your information across the web to prevent doxxing.",
      features: [
        "Real-time data monitoring",
        "Automated masking",
        "Breach notifications",
        "Social media protection",
        "Identity theft prevention"
      ],
      status: "live" as const
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      live: "bg-green-500 text-black",
      beta: "bg-yellow-500 text-black",
      "coming-soon": "bg-gray-500 text-white"
    };
    const labels = {
      live: "Live",
      beta: "Beta",
      "coming-soon": "Coming Soon"
    };
    return { class: badges[status as keyof typeof badges], label: labels[status as keyof typeof labels] };
  };

  return (
    <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Stealth-mode tools that ghost the grid. Each tool is powered by $PRICKO tokens 
            and designed to protect your digital footprint while maintaining the fun, 
            irreverent spirit of the gecko community.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-16">
          {tools.map((tool, index) => {
            const badge = getStatusBadge(tool.status);
            return (
              <motion.div
                key={tool.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold">{tool.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${badge.class}`}>
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-muted mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-accent">Key Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-muted"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-accent mr-3">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`btn-${tool.status === 'live' ? 'primary' : 'secondary'} px-6 py-3`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={tool.status === 'coming-soon'}
                  >
                    {tool.status === 'live' ? 'Use Now' : 
                     tool.status === 'beta' ? 'Join Beta' : 'Get Notified'}
                  </motion.button>
                </div>
                
                <motion.div
                  className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-64 h-64 bg-secondary/50 rounded-2xl flex items-center justify-center border border-border">
                    <img 
                      src={tool.icon} 
                      alt={tool.title} 
                      className="w-24 h-24 filter brightness-0 invert opacity-80"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-20 bg-secondary/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Go Private?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their digital privacy. 
            Get $PRICKO tokens and start using our privacy tools today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $PRICKO
            </motion.button>
            <motion.button
              className="btn-secondary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ToolsPage;