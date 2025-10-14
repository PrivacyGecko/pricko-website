import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ui/ToolCard';
import ContractAddress from '../components/ui/ContractAddress';
import SEO from '../components/common/SEO';
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaBullseye,
  FaUsers,
  FaRocket,
  FaInfinity,
  FaEye,
  FaLock
} from 'react-icons/fa';

const HomePage: React.FC = () => {
  // Tools ordered by status: Live → Beta → In Development (by completion %)
  const tools = [
    // LIVE PRODUCTS (3)
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoAdvisor",
      description: "Comprehensive privacy and security audit tool for your devices with vulnerability detection and privacy scoring.",
      status: "live" as const,
      features: ["Device scanning & vulnerability detection", "Privacy score & recommendations", "Tracking detection", "Security audit reports", "Real-time monitoring", "AI recommendations"],
      url: "https://geckoadvisor.com"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTEgMTVoMnYtNmgtMnY2em0wLThoMlY3aC0ydjJ6Ii8+CiAgPHBhdGggZD0iTTkgMTBoLTJsMy0zIDMgM2gtMlY5SDl2MXoiLz4KICA8cGF0aCBkPSJNMTUgMTJ2Mmgyek0xNSAxNGgtM3YyaDNWMTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoShare",
      description: "Zero-knowledge, token-gated file-sharing SaaS with instant uploads and persistent vault storage.",
      status: "live" as const,
      features: ["Instant link → upload", "Persistent vault (Pro)", "Zero-knowledge encryption", "Wallet-connect premium", "Daily quotas system", "Background processing"],
      url: "https://geckoshare.com"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJtMTIgOCA0IDRIMTBsNC00eiIvPgogIDxyZWN0IHg9IjkiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoGuard",
      description: "Manifest V3 privacy browser extension with anti-fingerprinting and multiple stealth modes.",
      status: "live" as const,
      features: ["Anti-fingerprinting protection", "Tracker/cookie blocking", "Multiple stealth modes", "Pro vs free tiers"],
      url: "https://privacygecko.com/products/guard"
    },
    // BETA PRODUCTS (1)
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTcgMkg3Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDJIM3YxNGg4VjR6Ii8+CiAgPHBhdGggZD0iTTkgMTloMnYtMkg5djJ6bTAtM2gydi0ySDl2MnptMC0zaDJ2LTJIOVI3eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTkiIHI9IjEiLz4KPC9zdmc+Cjwvc3ZnPg==",
      title: "GeckoShell",
      description: "Cross-platform mobile privacy browser with Solana wallet integration and privacy toolkit SDK.",
      status: "beta" as const,
      features: ["Cross-platform (iOS, Android)", "Plugin system architecture", "Solana wallet integration", "Privacy toolkit SDK"]
    },
    // IN DEVELOPMENT (2) - Ordered by completion %: 65% → lower
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzIgMy4yNCAyIDZoMmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJoLTFjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS01IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoLock",
      description: "Zero-knowledge password manager with AES-256 encryption and cross-platform sync. (65% Complete)",
      status: "in-development" as const,
      features: ["AES-256 encryption", "Zero-knowledge architecture", "Cross-platform sync", "Password generator", "Secure sharing", "Breach monitoring"]
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0xIDJoMXYxMEg0VjZoMTV6Ii8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMyIvPgogIDxwYXRoIGQ9Im0xNSA4IDIgMk05IDggNyAxMCIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoBrowser",
      description: "Forked desktop browser based on Ungoogled Chromium with built-in crypto wallet and DeFi integration.",
      status: "in-development" as const,
      features: ["Built-in crypto wallet", "Plugin marketplace", "Privacy-first architecture", "Integrated DeFi tools"]
    }
  ];

  return (
    <>
      <SEO
        title="PRICKO - Privacy Gecko Approved Memecoin | Solana Privacy Tools"
        description="PRICKO is a Solana-powered memecoin with real utility. Privacy-focused tools including GeckoShare, GeckoGuard, GeckoShell, and GeckoBrowser. Join the privacy revolution."
        keywords="PRICKO, memecoin, Solana, privacy tools, cryptocurrency, GeckoShare, GeckoGuard, privacy browser, encrypted file sharing, blockchain privacy"
        canonicalUrl="/"
      />
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

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="gradient-text text-shadow">PRICKO</span>
                </h1>

                <p className="text-2xl md:text-3xl font-bold text-accent mb-3">
                  <span className="gradient-text">Memes With a Mission</span>
                </p>
                
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
                <Link to="/contact">
                  <motion.button
                    className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Waitlist <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
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
                  <div className="text-2xl font-bold text-accent">8</div>
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
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
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
                  <span className="gradient-text">Pricko is your crypto-native privacy guardian.</span>
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

      {/* Contract Address Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContractAddress variant="hero" />
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
                irreverent spirit of the community.
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
                features={tool.features}
                delay={index * 0.2}
                url={tool.url}
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

      {/* Expanding Privacy Ecosystem Section */}
      <section className="section-padding bg-secondary/40">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Expanding Privacy Ecosystem</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              The community grows stronger every day. Many more privacy tools are in discussion and development, 
              with the community helping shape the future of digital privacy.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Placeholder Tool Cards */}
            <motion.div
              className="card text-center opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">Privacy Tool #5</h3>
              <p className="text-muted text-sm mb-4">In discussion with the community</p>
              <div className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full inline-block">
                Coming Soon
              </div>
            </motion.div>

            <motion.div
              className="card text-center opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">Privacy Tool #6</h3>
              <p className="text-muted text-sm mb-4">Community proposal phase</p>
              <div className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full inline-block">
                In Discussion
              </div>
            </motion.div>

            <motion.div
              className="card text-center opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">More Tools</h3>
              <p className="text-muted text-sm mb-4">The privacy ecosystem expands</p>
              <div className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full inline-block">
                Future Vision
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4">
              🦎 Have ideas for new privacy tools? Join the conversation!
            </p>
            <Link to="/contact">
              <motion.button
                className="btn-secondary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suggest a Tool
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
                Join the <span className="gradient-text">Privacy Revolution</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
              <p className="text-muted mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Be part of a community that values <span className="text-accent font-semibold">privacy</span>,
                <span className="text-accent font-semibold"> fun</span>, and
                <span className="text-accent font-semibold"> digital sovereignty</span>.
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
                <div className="text-sm text-muted">Long-term Vision</div>
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
                Join 1,200+ privacy advocates who trust Pricko to keep their digital lives secure.
              </p>
              <Link to="/contact">
                <motion.button
                  className="btn-primary inline-flex items-center gap-3 px-8 py-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Waitlist <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;