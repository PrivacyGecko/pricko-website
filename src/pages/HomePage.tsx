import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PremiumFeatureCard from '../components/ui/PremiumFeatureCard';
import MascotImage from '../components/ui/MascotImage';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';
import { FaArrowRight, FaExternalLinkAlt, FaWallet, FaExchangeAlt, FaRocket } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const {
    tokenSymbol
  } = useProjectConfig();

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
        keywords="privacy token, utility token, privacy tools, blockchain privacy, solana token, Gecko Share, Gecko Advisor, zero-knowledge encryption, privacy browser, GeckoCore Protocol"
        canonicalUrl="/"
        structuredData={homepageStructuredData}
      />
      <div className="min-h-screen">
      {/* Hero Section - GeckoCore Protocol Focused */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/video-poster.jpg"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Fallback AnimatedBackground (shows through overlay if needed) */}
        <div className="absolute inset-0 z-[1] opacity-20">
          <AnimatedBackground />
        </div>

        <div className="container-max section-padding relative z-10 text-center pt-20">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="transform scale-125 md:scale-150">
              <MascotImage size="xl" alt="Pricko Mascot - Privacy Gecko" />
            </div>
          </motion.div>

          {/* Primary Brand Anchor */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-accent inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(74, 222, 128, 0.3)",
                  "0 0 40px rgba(74, 222, 128, 0.5)",
                  "0 0 20px rgba(74, 222, 128, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {tokenSymbol}
            </motion.span>
          </motion.h1>

          {/* GeckoCore Protocol - THE KEY MESSAGE */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-purple-400">Gecko</span><span className="text-cyan-400">Core</span> <span className="text-accent">Protocol</span>
          </motion.h2>

          {/* Subtitle - Privacy Infrastructure positioning */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-cyan-400">Privacy</span> <span className="text-purple-400">Infrastructure</span> <span className="text-gray-300">on</span> <span className="text-accent">Solana</span>
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{TOOLS_COUNT.live}</div>
              <div className="text-sm md:text-base text-muted">Live Products</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{METRICS.prickoshare.formatted}</div>
              <div className="text-sm md:text-base text-muted">Active Users</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{METRICS.prickoGuard.formatted}</div>
              <div className="text-sm md:text-base text-muted">Beta Testers</div>
            </motion.div>
          </motion.div>

          {/* Proof Link - More prominent */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://privacygecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-lg md:text-xl font-medium"
            >
              Live Products on PrivacyGecko.com
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/how-to-buy"
              className="btn-primary text-xl px-12 py-5 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(74, 222, 128, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(74, 222, 128, 0.2)",
                  "0 0 30px rgba(74, 222, 128, 0.3)",
                  "0 0 20px rgba(74, 222, 128, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Buy {tokenSymbol} <FaArrowRight />
            </motion.a>
            <motion.a
              href="https://privacygecko.com/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xl px-12 py-5 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Whitepaper <FaArrowRight />
            </motion.a>
          </motion.div>

          {/* Track on Exchange Links */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-base text-gray-300 font-medium">
                <span className="text-accent">Track on:</span>
              </span>
              <div className="flex items-center justify-center gap-6">
                <motion.a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-accent/10 hover:bg-accent/20 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View on Pump.fun"
                >
                  <img
                    src="https://pump.fun/favicon.ico"
                    alt="Pump.fun"
                    width="48"
                    height="48"
                    className="inline-block"
                  />
                  <span className="text-sm font-medium text-accent">Pump.fun</span>
                </motion.a>
                <motion.a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View on DEXScreener"
                >
                  <img
                    src="https://dexscreener.com/favicon.ico"
                    alt="DEXScreener"
                    width="48"
                    height="48"
                    className="inline-block"
                  />
                  <span className="text-sm font-medium text-blue-400">DEXScreener</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Feature Showcase - Erebus Style */}
      <section className="relative section-padding py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Privacy Tools <span className="gradient-text">That Actually Work</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Not vaporware. Real products. Real users. Real utility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PremiumFeatureCard
              emoji="🔍"
              title="Gecko Advisor"
              description="AI-powered privacy assistant providing instant security advice and threat detection"
              status="live"
              url="https://privacygecko.com/advisor"
              delay={0.1}
            />
            <PremiumFeatureCard
              emoji="📁"
              title="Gecko Share"
              description="End-to-end encrypted file sharing platform with zero-knowledge architecture"
              status="live"
              url="https://geckoshare.com"
              delay={0.2}
            />
            <PremiumFeatureCard
              emoji="🛡️"
              title="Gecko Guard"
              description="Browser extension blocking trackers and protecting your digital footprint"
              status="beta"
              delay={0.3}
            />
            <PremiumFeatureCard
              emoji="🔐"
              title="Gecko Lock"
              description="Military-grade password manager with biometric security and auto-fill"
              status="coming-soon"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section - Simple Timeline */}
      <section className="relative section-padding py-20 bg-gradient-to-b from-black via-secondary/30 to-black overflow-hidden">
        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted">
              Real progress, realistic timelines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phase 1: Completed */}
            <motion.div
              className="card-interactive text-center border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">✅</div>
              <div className="text-sm text-accent font-semibold mb-2">Q2-Q3 2025</div>
              <h3 className="text-lg font-bold mb-2">Live Products</h3>
              <p className="text-sm text-muted">Gecko Advisor & Share launched with 2,100+ users</p>
            </motion.div>

            {/* Phase 2: Current */}
            <motion.div
              className="card-interactive text-center border-yellow-500/50 bg-yellow-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-sm text-yellow-400 font-semibold mb-2">Q4 2025</div>
              <h3 className="text-lg font-bold mb-2">Token Launch</h3>
              <p className="text-sm text-muted">$PRICKO on Solana, smart contracts deployed</p>
            </motion.div>

            {/* Phase 3: Upcoming */}
            <motion.div
              className="card-interactive text-center border-cyan-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">🔮</div>
              <div className="text-sm text-cyan-400 font-semibold mb-2">Q1 2026</div>
              <h3 className="text-lg font-bold mb-2">GeckoCore Protocol</h3>
              <p className="text-sm text-muted">Decentralized privacy infrastructure begins</p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/roadmap"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
            >
              View Full Roadmap <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How to Buy Section - Simple Steps */}
      <section className="relative section-padding py-20 bg-black overflow-hidden">
        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How to Buy <span className="gradient-text">{tokenSymbol}</span>
            </h2>
            <p className="text-lg text-muted">
              3 simple steps to join the privacy revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
            {/* Step 1 */}
            <motion.div
              className="card-interactive text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaWallet className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 1</div>
              <h3 className="text-lg font-bold mb-2">Get a Wallet</h3>
              <p className="text-sm text-muted mb-4">Download Phantom, Solflare, or Backpack</p>
              <a
                href="https://phantom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Get Phantom <FaExternalLinkAlt size={10} />
              </a>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="card-interactive text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaExchangeAlt className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 2</div>
              <h3 className="text-lg font-bold mb-2">Get SOL</h3>
              <p className="text-sm text-muted mb-4">Buy SOL on Coinbase or Binance</p>
              <a
                href="https://www.coinbase.com/price/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Buy SOL <FaExternalLinkAlt size={10} />
              </a>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="card-interactive text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaRocket className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 3</div>
              <h3 className="text-lg font-bold mb-2">Swap for {tokenSymbol}</h3>
              <p className="text-sm text-muted mb-4">Visit pump.fun and swap SOL for $PRICKO</p>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Go to pump.fun <FaExternalLinkAlt size={10} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/how-to-buy"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Detailed Guide <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* GeckoCore Protocol Section - Simple & Focused */}
      <section className="relative section-padding py-20 bg-gradient-to-b from-black via-secondary/30 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="gradient-text">GeckoCore Protocol</span>?
            </h2>
            <p className="text-sm uppercase tracking-wider mb-4">
              <span className="text-cyan-400 font-semibold">Privacy</span>
              {" • "}
              <span className="text-purple-400 font-semibold">Security</span>
              {" • "}
              <span className="text-accent font-semibold">Trust</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              GeckoCore is the unified <span className="text-cyan-400">privacy</span> infrastructure
              with built-in <span className="text-purple-400">security</span>,
              connecting all Privacy Gecko tools through a foundation of <span className="text-accent">trust</span>.
              Protocol launches Q2 2026. More tools in the ecosystem means more {tokenSymbol} demand.
            </p>
            <a
              href="https://privacygecko.com/protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-lg font-medium"
            >
              Technical Details on PrivacyGecko.com
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Minimal & Direct */}
      <section className="relative section-padding py-16 bg-black overflow-hidden">
        <div className="container-max relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join?
            </h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/how-to-buy"
                className="btn-primary px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Buy {tokenSymbol} <FaArrowRight />
              </motion.a>
              <motion.a
                href="https://privacygecko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Tools <FaExternalLinkAlt className="text-sm" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
