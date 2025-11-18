import React from 'react';
import { motion } from 'framer-motion';
import ContractAddress from '../components/ui/ContractAddress';
import SEO from '../components/common/SEO';
import PremiumFeatureCard from '../components/ui/PremiumFeatureCard';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

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
        <AnimatedBackground />

        <div className="container-max section-padding relative z-10 text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-8xl md:text-9xl mb-4">🦎</div>
          </motion.div>

          {/* Primary Brand Anchor */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tokenSymbol}
          </motion.h1>

          {/* GeckoCore Protocol - THE KEY MESSAGE */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl text-accent font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            GeckoCore Protocol
          </motion.h2>

          {/* Subtitle - Privacy Infrastructure positioning */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Privacy Infrastructure on Solana
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{TOOLS_COUNT.live}</div>
              <div className="text-sm md:text-base text-muted">Live Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{METRICS.prickoshare.formatted}</div>
              <div className="text-sm md:text-base text-muted">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{METRICS.prickoGuard.formatted}</div>
              <div className="text-sm md:text-base text-muted">Beta Testers</div>
            </div>
          </motion.div>

          {/* Proof Link - Subtle but clear */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://privacygecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-base"
            >
              Live Products on PrivacyGecko.com
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/how-to-buy"
              className="btn-primary text-xl px-12 py-5 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(74, 222, 128, 0.4)" }}
              whileTap={{ scale: 0.95 }}
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

          {/* Contract Address */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <ContractAddress variant="hero" />
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
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              GeckoCore is the unified privacy infrastructure connecting all Privacy Gecko tools. 
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
