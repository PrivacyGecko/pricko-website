import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ui/ToolCard';
import { FaArrowRight } from 'react-icons/fa';

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
          {/* Flex container for the split layout */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column: Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold gradient-text1">Privacy Gecko</h2>
                <h2 className="text-xl md:text-2xl font-semibold text-accent mb-2">
                  <span className="gradient-text">Memes With a Mission</span>
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="gradient-text">PRICKO</span>                   
                </h1>
                <p className="mt-4 text-lg text-muted max-w-xl mx-auto md:mx-0">
                  A Solana-powered memecoin with a purpose. We're building a suite of privacy-focused tools to empower individuals in the digital age.
                </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <a href="#buy" className="btn-primary inline-flex items-center justify-center gap-2">
                  Buy $PRICKO <FaArrowRight />
                </a>
                <a href="#tools" className="btn-secondary">
                  Explore Tools
                </a>
              </motion.div>
            </div>

            {/* Right Column: Logo in a Circle */}
            <div className="md:w-1/2 flex justify-center items-center">
              {/* White Circular Background */}
              <motion.div
                className="w-full max-w-[300px] h-auto aspect-square bg-white rounded-full flex justify-center items-center p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale: 1, rotate: 8 }}
              >
                <img
                  src="/logo.png"
                  alt="Pricko Logo"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
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
              Pricko is not just a meme coin. It's a movement. $PRICKO powers stealth-mode tools that fight surveillance and make privacy fun again.
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