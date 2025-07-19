import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ui/ToolCard';

const HomePage: React.FC = () => {
  const tools = [
    {
      icon: "/vpn.png",
      title: "PrickoVPN",
      description: "Wallet-authenticated VPN. Fast, stealthy, Solana-native."
    },
    {
      icon: "/chat.png",
      title: "BurnerChat",
      description: "Ephemeral, encrypted messaging with wallet login."
    },
    {
      icon: "/shield.png",
      title: "DoxxGuard",
      description: "Prevent personal data leaks with automated masking."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">  
        <div className="container-max">
          {/* Header with Logo */}
          <motion.div 
            className="flex items-center space-x-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src="/logo.png" 
              alt="Pricko Logo" 
              className="w-20 h-20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PRICKO
            </motion.h1>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Pricko.</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-accent mb-4">
              Memes With a Mission.
            </h3>
            <p className="mb-6 max-w-2xl text-lg text-muted leading-relaxed">
              Solana-powered meme coin with real privacy tools. Decentralized. Irreverent. Gecko-approved.
            </p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy $PRICK
              </motion.button>
              <motion.button 
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/tools">Explore Tools</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Pricko Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Pricko?</h2>
            <p className="mb-4 max-w-3xl text-lg text-muted leading-relaxed">
              Pricko is not just a meme coin. It's a movement. $PRICK powers stealth-mode tools that fight surveillance and make privacy fun again.
            </p>
            <motion.p 
              className="text-accent text-lg font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🦎 Born in memes. Forged in data abuse. Pricko is your crypto-native gecko guardian.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Tools That Ghost the Grid
            </h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
              Privacy-first tools powered by $PRICK tokens. Each tool is designed to protect your digital footprint while maintaining the fun, irreverent spirit of the gecko community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Tools CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/tools">
              <motion.button 
                className="btn-secondary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Tools →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join the Gecko Revolution
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto text-lg">
              Be part of a community that values privacy, fun, and financial freedom. 
              Together, we're building the future of private, decentralized tools.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/about">
                <motion.button 
                  className="btn-primary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  className="btn-secondary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;