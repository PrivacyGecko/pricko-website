import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ui/ToolCard';
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaBullseye,
  FaUsers,
  FaRocket,
  FaGem,
  FaInfinity,
  FaEye,
  FaLock
} from 'react-icons/fa';

const HomePage: React.FC = () => {
  const tools = [
    {
      icon: "/chat.png",
      title: "Pricko File Sharing - Free",
      description: "Secure and Safe large file Transfer with Encryption",
      status: "coming-soon" as const
    },
    {
      icon: "/vpn.png",
      title: "Pricko VPN",
      description: "Wallet-authenticated VPN. Fast, stealthy, Solana-native.",
      status: "coming-soon" as const
    },
    {
      icon: "/shield.png",
      title: "Pricko Guard",
      description: "Prevent personal data leaks with automated masking.",
      status: "coming-soon" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container-max relative z-10">
          {/* Flex container for the split layout */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left Column: Text Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-accent font-medium text-sm">Privacy Gecko</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3">
                  <span className="gradient-text">Memes With a Mission</span>
                </h2>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="gradient-text text-shadow">PRICKO</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  A <span className="text-accent font-semibold">Solana-powered</span> memecoin with a purpose.
                  Building privacy-focused tools to empower individuals in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#buy"
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy $PRICKO <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#tools"
                  className="btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Tools
                </motion.a>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-accent mb-2">
                    <FaEye className="mx-auto text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-muted">Privacy Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-accent mb-2">
                    <FaLock className="mx-auto text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted">Decentralized</div>
                </div>
                <div className="text-center">
                  <div className="text-accent mb-2">
                    <FaInfinity className="mx-auto text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-accent">∞</div>
                  <div className="text-sm text-muted">Possibilities</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Enhanced Logo Display */}
            <motion.div
              className="lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Animated Background Rings */}
                <motion.div
                  className="absolute inset-0 w-80 h-80 border-2 border-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 w-72 h-72 border border-accent/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main Logo Container */}
                <motion.div
                  className="relative w-80 h-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full flex justify-center items-center p-12 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    boxShadow: "0 25px 50px rgba(74, 222, 128, 0.2)"
                  }}
                >
                  <motion.img
                    src="/logo.png"
                    alt="Pricko Logo"
                    className="w-full h-auto drop-shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/60 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Pricko Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What is <span className="gradient-text">Pricko</span>?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                Pricko is not just a meme coin. It's a <span className="text-accent font-semibold">movement</span>.
                $PRICKO powers stealth-mode tools that fight surveillance and make privacy fun again.
              </p>
              
              <motion.div
                className="bg-secondary/50 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: "rgba(74, 222, 128, 0.4)" }}
              >
                <p className="text-accent text-xl md:text-2xl font-medium leading-relaxed">
                  🦎 Born in memes. Forged in data abuse.
                  <br />
                  <span className="gradient-text">Pricko is your crypto-native gecko guardian.</span>
                </p>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-6 bg-secondary/30 rounded-xl border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="text-3xl mb-3 text-accent">
                    <FaShieldAlt className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Privacy First</h3>
                  <p className="text-muted text-sm">Built with privacy at its core</p>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-xl border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="text-3xl mb-3 text-accent">
                    <FaBolt className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Solana Powered</h3>
                  <p className="text-muted text-sm">Fast, efficient blockchain technology</p>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-xl border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="text-3xl mb-3 text-accent">
                    <FaBullseye className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Purpose Driven</h3>
                  <p className="text-muted text-sm">More than just a meme coin</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary/80 via-secondary/50 to-secondary/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Tools That <span className="gradient-text">Ghost the Grid</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
              <p className="text-center text-muted mb-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Privacy-first tools powered by <span className="text-accent font-semibold">$PRICKO</span> tokens.
                Each tool is designed to protect your digital footprint while maintaining the fun,
                irreverent spirit of the gecko community.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                status={tool.status}
                delay={index * 0.2}
              />
            ))}
          </motion.div>

          {/* Tools CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/tools">
              <motion.button
                className="btn-secondary px-10 py-4 text-lg font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(74, 222, 128, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Tools <FaArrowRight className="inline ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative section-padding bg-gradient-to-t from-secondary/20 to-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join the <span className="gradient-text">Gecko Revolution</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
              <p className="text-muted mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Be part of a community that values <span className="text-accent font-semibold">privacy</span>,
                <span className="text-accent font-semibold"> fun</span>, and
                <span className="text-accent font-semibold"> financial freedom</span>.
                Together, we're building the future of private, decentralized tools.
              </p>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-secondary/30 rounded-xl border border-accent/10">
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaUsers className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Gecko Army</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-xl border border-accent/10">
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaShieldAlt className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Privacy First</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-xl border border-accent/10">
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaBolt className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Lightning Fast</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-xl border border-accent/10">
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaRocket className="mx-auto" />
                </div>
                <div className="text-sm text-muted">To The Moon</div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/about">
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <FaArrowRight className="inline ml-2" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="btn-secondary px-10 py-4 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </Link>
            </motion.div>

            {/* Call to Action Banner */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgba(74, 222, 128, 0.4)" }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">
                Ready to Go Stealth? 🦎
              </h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                Join thousands of privacy advocates who trust Pricko to keep their digital lives secure.
              </p>
              <motion.a
                href="#buy"
                className="btn-primary inline-flex items-center gap-3 px-8 py-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get $PRICKO Now <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;