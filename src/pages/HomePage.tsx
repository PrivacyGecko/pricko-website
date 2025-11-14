import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ui/ToolCard';
import ContractAddress from '../components/ui/ContractAddress';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import NewsletterForm from '../components/ui/NewsletterForm';
import SEO from '../components/common/SEO';
import ProofOfDevelopment from '../components/ProofOfDevelopment';
import SocialProof from '../components/SocialProof';
import TrustBadge from '../components/ui/TrustBadge';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaBullseye,
  FaUsers,
  FaRocket,
  FaInfinity,
  FaEye,
  FaLock,
  FaCheckCircle,
  FaClock,
  FaGithub,
  FaCode,
  FaBrain,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

const HomePage: React.FC = () => {
  const {
    getHomepageProducts,
    getProductCounts,
    getFormattedMetrics,
    tokenSymbol
  } = useProjectConfig();

  const productCounts = getProductCounts();
  const metrics = getFormattedMetrics();
  const homepageProducts = getHomepageProducts(4);

  // Tools ordered by status: Live → Beta → In Development (by completion %)
  const tools = [
    // LIVE PRODUCTS (4)
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "Gecko Advisor",
      description: "Scan any website to uncover trackers, cookies, and hidden data collection. Open-source privacy analysis tool that grades websites A-F based on their privacy practices. 100% free with no account required.",
      status: "live" as const,
      features: ["Website tracker & cookie detection", "Privacy grade (A-F) with evidence", "Security headers & TLS scanning", "Third-party analysis", "5-10 second scan results", "100% free & no account required"],
      url: "https://geckoadvisor.com"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTEgMTVoMnYtNmgtMnY2em0wLThoMlY3aC0ydjJ6Ii8+CiAgPHBhdGggZD0iTTkgMTBoLTJsMy0zIDMgM2gtMlY5SDl2MXoiLz4KICA8cGF0aCBkPSJNMTUgMTJ2Mmgyek0xNSAxNGgtM3YyaDNWMTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "Gecko Share",
      description: "Zero-knowledge, token-gated file-sharing SaaS with instant uploads and persistent vault storage.",
      status: "live" as const,
      features: ["Instant link → upload", "Persistent vault (Pro)", "Zero-knowledge encryption", "Wallet-connect premium", "Daily quotas system", "Background processing"],
      url: "https://geckoshare.com"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJtMTIgOCA0IDRIMTBsNC00eiIvPgogIDxyZWN0IHg9IjkiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIvPgo8L3N2Zz4KPC9zdmc+",
      title: "Gecko Guard",
      description: "Block trackers and ads automatically. Privacy protection that works in any browser.",
      status: "live" as const,
      features: ["Real-time tracker blocking", "Anti-fingerprinting shield", "Custom filter lists", "Pro vs free tiers"],
      url: "https://geckoguard.app"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzIgMy4yNCAyIDZoMmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJoLTFjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS01IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPgo8L3N2Zz4KPC9zdmc+",
      title: "Gecko Lock",
      description: "Password manager with zero-knowledge encryption. Your master password never leaves your device.",
      status: "live" as const,
      features: ["AES-256 encryption", "Cross-platform sync", "Password generator", "Secure sharing", "Breach monitoring", "Zero-knowledge architecture"],
      url: "https://geckolock.com"
    },
    // IN DEVELOPMENT PRODUCTS (2 shown, 4 total)
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTcgMkg3Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDJIM3YxNGg4VjR6Ii8+CiAgPHBhdGggZD0iTTkgMTloMnYtMkg5djJ6bTAtM2gydi0ySDl2MnptMC0zaDJ2LTJIOVI3eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTkiIHI9IjEiLz4KPC9zdmc+Cjwvc3ZnPg==",
      title: "GeckoShell",
      description: "Cross-platform mobile privacy browser with Solana wallet integration and privacy toolkit SDK. 30% complete, launching Q3-Q4 2026.",
      status: "in-development" as const,
      features: ["Cross-platform (iOS, Android)", "Plugin system architecture", "Solana wallet integration", "Privacy toolkit SDK"]
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0xIDJoMXYxMEg0VjZoMTV6Ii8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMyIvPgogIDxwYXRoIGQ9Im0xNSA4IDIgMk05IDggNyAxMCIvPgo8L3N2Zz4KPC9zdmc+",
      title: "Gecko View",
      description: "AI-powered content summarization with end-to-end encrypted bookmarks. 45% complete, launching Q2 2026.",
      status: "in-development" as const,
      features: ["AI summaries with GPT-3.5 & GPT-4", "End-to-end encrypted bookmarks", "Browser extension integration", "Smart tagging & organization"]
    }
  ];

  // Structured data for homepage
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Privacy Gecko",
        "alternateName": "PRICKO",
        "url": "https://pricko.com",
        "logo": "https://pricko.com/logo.png",
        "description": `Privacy-first tools powered by PRICKO utility token. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users. Real code, real traction, real results.`,
        "sameAs": [
          "https://twitter.com/PrivacyGecko",
          "https://github.com/privacygecko",
          "https://t.me/privacygecko",
          "https://discord.gg/privacygecko"
        ],
        "numberOfEmployees": "8+",
        "foundingDate": "2024"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Gecko Share",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "100"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="PRICKO | Privacy Tools Powered by Utility Token - Real Products, Real Utility"
        description={`PRICKO is a utility token powering 8 privacy tools. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users. Not vaporware - real tools, real results. Join the privacy revolution.`}
        keywords="privacy token, utility token, privacy tools, blockchain privacy, solana token, Gecko Share, Gecko Advisor, zero-knowledge encryption, privacy browser"
        canonicalUrl="/"
        structuredData={homepageStructuredData}
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
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-accent font-medium text-sm">Privacy Gecko Ecosystem</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                    <FaRocket className="text-purple-400 text-sm" />
                    <span className="text-purple-400 font-medium text-sm">GeckoCore Protocol</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="gradient-text text-shadow">
                    Privacy Tools Powered by {tokenSymbol} Token.
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl font-bold text-accent mb-3">
                  <span className="gradient-text">Zero Vaporware. All Utility.</span>
                </p>

                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
                  <span className="text-white font-semibold">While others talk, we ship.</span> {productCounts.live} live products serving {metrics.betaTesters.formatted} users.
                  <span className="text-purple-400"> GeckoCore Protocol launching Q1 2026 with staking rewards & governance.</span> Real code. Real traction. Real results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/tools">
                  <motion.button
                    className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Live Products <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
                <motion.a
                  href="#proof-of-development"
                  className="btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Proof of Development
                </motion.a>
              </motion.div>

              {/* Stats Section - Proof-Focused with Animated Counters */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <AnimatedCounter
                  value={productCounts.live}
                  label="LIVE Products Now"
                  icon={<FaCheckCircle className="mx-auto text-xl" />}
                  duration={1500}
                  delay={500}
                />
                <AnimatedCounter
                  value={metrics.betaTesters.formatted}
                  label="Active Users"
                  icon={<FaUsers className="mx-auto text-xl" />}
                  duration={2000}
                  delay={700}
                />
                <AnimatedCounter
                  value="90%+"
                  label="Near Launch"
                  icon={<FaClock className="mx-auto text-xl" />}
                  duration={1800}
                  delay={900}
                />
              </motion.div>

              {/* Trust Badges Section */}
              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <TrustBadge
                  icon={FaShieldAlt}
                  title="Fully Open Source"
                  description="All code publicly available on GitHub. Community auditable."
                  delay={0.1}
                />
                <TrustBadge
                  icon={FaGithub}
                  title="Active Development"
                  description="Consistent commits and updates. Real progress, not vaporware."
                  delay={0.2}
                />
                <TrustBadge
                  icon={FaCheckCircle}
                  title="Security Audited"
                  description="Independent security audits completed. AES-256 encryption."
                  delay={0.3}
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Enhanced Logo Display */}
            <motion.div
              className="lg:w-1/2 flex flex-col items-center gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Fixed-size container to hold rings and mascot */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Animated Background Rings - Centered */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-80 h-80 border-2 border-accent/20 rounded-full"></div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-72 h-72 border border-accent/10 rounded-full"></div>
                </motion.div>

                {/* Soft Pulsing Glow Behind Mascot */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                </motion.div>

                {/* Orbiting Accent Dots */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="relative w-72 h-72">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <div className="relative w-64 h-64">
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 bg-accent/70 rounded-full shadow-lg shadow-accent/30"></div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/30"></div>
                  </div>
                </motion.div>

                {/* Floating Sparkles */}
                <motion.div
                  className="absolute top-16 right-20 w-2 h-2 bg-accent rounded-full pointer-events-none"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-blue-400 rounded-full pointer-events-none"
                  animate={{
                    y: [5, -5, 5],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute top-1/3 right-12 w-1 h-1 bg-accent/80 rounded-full pointer-events-none"
                  animate={{
                    y: [-3, 3, -3],
                    x: [-2, 2, -2],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* MascotImage Component (centered with animations) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <MascotImage size="xl" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-8 h-8 bg-accent rounded-full opacity-60"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-12 left-8 w-6 h-6 bg-accent/60 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* NEW: Contract Address below mascot */}
              <motion.div
                className="w-full max-w-md p-0.5 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="rounded-2xl bg-secondary">
                  <ContractAddress variant="hero" />
                </div>
              </motion.div>

              {/* NEW: GeckoCore Protocol Teaser */}
              <motion.div
                className="w-full max-w-md p-4 card-interactive border-l-2 border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-xl">🚀</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-gray-300">Q1 2026 Protocol</span>
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded-full font-medium">Coming</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 leading-relaxed">
                      <span className="font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">GeckoCore</span> (our decentralized privacy protocol) launches with staking rewards & community governance
                    </p>
                    <button
                      onClick={() => document.getElementById('geckocore-section')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-xs text-accent hover:text-accent-hover font-medium flex items-center gap-1 group"
                    >
                      Learn More Below
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof of Development Section */}
      <ProofOfDevelopment />

      {/* Privacy Gecko Brand Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo and Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 flex flex-col items-center"
            >
              <img
                src="/icons/logo.png"
                alt="Privacy Gecko Logo"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 drop-shadow-2xl"
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent text-sm font-semibold">Memes With a Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Meet <span className="gradient-text">Privacy Gecko</span>
              </h2>
              <p className="text-lg md:text-xl text-accent font-semibold">Your Privacy Guardian</p>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mt-6"></div>
            </motion.div>

            {/* Brand Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 mb-12"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Privacy Gecko is the brand behind <span className="text-accent font-semibold">4 live privacy tools</span> serving
                <span className="text-accent font-semibold"> 3,750+ users today</span>. We're on a mission to make privacy accessible,
                fun, and effective for everyone.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="text-accent font-semibold">$PRICKO token powers Privacy Gecko ecosystem</span> — giving holders
                premium access to tools, staking rewards, and governance rights. No vaporware. No promises. Just working products you
                can use right now at <a href="https://privacygecko.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">privacygecko.com</a>.
              </p>
            </motion.div>

            {/* Key Points Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <motion.div
                className="card-interactive text-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4 flex justify-center">
                  <FaShieldAlt className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">4 Live Products</h3>
                <p className="text-muted text-sm">Gecko Advisor, Gecko Share, Gecko Guard, Gecko Lock — all available today</p>
              </motion.div>

              <motion.div
                className="card-interactive text-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4 flex justify-center">
                  <FaBolt className="text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Powered by $PRICKO</h3>
                <p className="text-muted text-sm">Token holders get premium features, staking rewards, and governance rights</p>
              </motion.div>

              <motion.div
                className="card-interactive text-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4 flex justify-center">
                  <FaGithub className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Open Source & Audited</h3>
                <p className="text-muted text-sm">All code public on GitHub, independently security audited</p>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://privacygecko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Visit Privacy Gecko Platform
                <FaExternalLinkAlt className="text-sm" />
              </a>
              <a
                href="/ecosystem"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Learn About the Ecosystem
                <FaArrowRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

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

              {/* Feature Highlights with Enhanced Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="card-interactive text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-3xl mb-3 text-accent">
                    <FaShieldAlt className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Privacy First</h3>
                  <p className="text-muted text-sm">Built with privacy at its core</p>
                </motion.div>
                <motion.div
                  className="card-interactive text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-3xl mb-3 bg-gradient-cyan bg-clip-text text-transparent">
                    <FaBolt className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-cyan bg-clip-text text-transparent mb-2">Solana Powered</h3>
                  <p className="text-muted text-sm">Fast, efficient blockchain technology</p>
                </motion.div>
                <motion.div
                  className="card-interactive text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-3xl mb-3 bg-gradient-purple bg-clip-text text-transparent">
                    <FaBullseye className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-purple bg-clip-text text-transparent mb-2">Purpose Driven</h3>
                  <p className="text-muted text-sm">More than just a meme coin</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Powers the Ecosystem Section - LAYER 2 ENHANCED */}
      <section id="geckocore-section" className="relative section-padding bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Q1 2026 Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FiCalendar className="text-lg" />
              Q1 2026 Protocol Launch
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powers the <span className="gradient-text-protocol">Ecosystem</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              <span className="font-semibold text-white">$PRICKO holders</span> get premium access to 4 live privacy tools today. No
              waiting, no vaporware. Meanwhile, we're building <span className="text-cyan-400 font-bold">GeckoCore</span> — a
              decentralized privacy protocol launching Q1 2026 that will power our full ecosystem of 8 tools with
              staking rewards and community governance.
            </p>
          </motion.div>

          {/* UtilityTimeline Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Responsive: Vertical on mobile, Horizontal on desktop */}
            <div className="hidden lg:block">
              <UtilityTimeline orientation="horizontal" compact={true} />
            </div>
            <div className="block lg:hidden">
              <UtilityTimeline orientation="vertical" compact={true} />
            </div>
          </motion.div>

          {/* Dual CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/ecosystem" className="btn-primary inline-flex items-center gap-2">
              Explore the Ecosystem
              <FaArrowRight />
            </Link>
            <Link to="/tokenomics#protocol" className="btn-tertiary inline-flex items-center gap-2">
              View Protocol Tokenomics
              <FaArrowRight />
            </Link>
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

            {/* Community Stats with Enhanced Cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card-interactive text-center"
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaUsers className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Gecko Army</div>
              </motion.div>
              <motion.div
                className="card-interactive text-center"
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-2xl font-bold bg-gradient-cyan bg-clip-text text-transparent mb-1">
                  <FaShieldAlt className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Privacy First</div>
              </motion.div>
              <motion.div
                className="card-interactive text-center"
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent mb-1">
                  <FaBolt className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Lightning Fast</div>
              </motion.div>
              <motion.div
                className="card-interactive text-center"
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-2xl font-bold text-accent mb-1">
                  <FaRocket className="mx-auto" />
                </div>
                <div className="text-sm text-muted">Long-term Vision</div>
              </motion.div>
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
                  Discover Our Mission <FaArrowRight className="inline ml-2" />
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

            {/* Call to Action Banner with Newsletter Signup */}
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
                Join the whitelist for early access to token launch, exclusive updates, and beta features.
              </p>
              <div className="max-w-xl mx-auto">
                <NewsletterForm
                  variant="hero"
                  placeholder="Your email address"
                  buttonText="Join Whitelist"
                  showDescription={false}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;