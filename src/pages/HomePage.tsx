import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContractAddress from '../components/ui/ContractAddress';
import NewsletterForm from '../components/ui/NewsletterForm';
import SEO from '../components/common/SEO';
import ProofOfDevelopment from '../components/ProofOfDevelopment';
import SocialProof from '../components/SocialProof';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const HomePage: React.FC = () => {
  const {
    tokenSymbol
  } = useProjectConfig();

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
        title="PRICKO | Privacy Products Powered by Utility Token - Real Products, Real Utility"
        description={`PRICKO is a utility token powering 8 privacy products. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users. Not vaporware - real tools, real results. Join the privacy revolution.`}
        keywords="privacy token, utility token, privacy products, blockchain privacy, solana token, Gecko Share, Gecko Advisor, zero-knowledge encryption, privacy browser"
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
            <div className="lg:w-1/2 text-center lg:text-left">
              <div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-accent font-medium text-sm">Privacy Gecko Ecosystem</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full">
                    <FaRocket className="text-cyan-400 text-sm" />
                    <span className="text-cyan-400 font-medium text-sm">GeckoCore Protocol</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="gradient-text text-shadow">
                    {tokenSymbol}
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-4">
                  Solana's Privacy Infrastructure Protocol
                </h2>

                <p className="text-base md:text-lg text-muted max-w-4xl mx-auto lg:mx-0 mb-6 leading-relaxed">
                  Live products today. Unlimited ecosystem tomorrow.<br />
                  Protocol launch Q2 2026 — get in before network effects.
                </p>

                {/* Social Proof Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaUsers className="text-accent" />
                    <span>2,100+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-accent" />
                    <span>4 Live Products</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaShieldAlt className="text-accent" />
                    <span>850+ Beta Testers</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-6 leading-relaxed">
                  {tokenSymbol} powers privacy verification across <strong className="text-white">Solana</strong>—from{' '}
                  <strong className="text-white">8 tools today</strong> to{' '}
                  <strong className="text-cyan-400">unlimited dApp integrations</strong> via GeckoCore protocol.
                </p>

                {/* TASK 1: Three Hero Value Proposition Cards - REORDERED: Protocol → Execution → Position */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto lg:mx-0 mb-8">
                  {/* Card 1: GeckoCore Protocol (was Card 2) */}
                  <div className="card-interactive bg-secondary p-6 hover:-translate-y-1 transition-transform duration-200">
                    <div className="text-center mb-3">
                      <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wide mb-2">Q2 2026 Launch</div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-3xl flex-shrink-0">🏗️</div>
                        <h3 className="text-lg font-bold text-white">GeckoCore Protocol</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-cyan-400">∞</span>
                        <span className="text-sm text-gray-300">dApp integrations</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-cyan-400">Q2</span>
                        <span className="text-sm text-gray-300">2026 launch</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-muted leading-relaxed">
                          Any developer can <strong className="text-accent">build on GeckoCore</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Proven Execution (was Card 3) */}
                  <div className="card-interactive bg-secondary p-6 hover:-translate-y-1 transition-transform duration-200">
                    <div className="text-center mb-3">
                      <div className="text-xs text-accent font-semibold uppercase tracking-wide mb-2">Track Record</div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-3xl flex-shrink-0">📈</div>
                        <h3 className="text-lg font-bold text-white">Proven Execution</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-accent">4</span>
                        <span className="text-sm text-gray-300">products shipped</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-accent">6</span>
                        <span className="text-sm text-gray-300">months timeline</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-muted leading-relaxed">
                          <strong className="text-accent">No vaporware.</strong> Realistic timelines
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Early Position (was Card 1, redesigned) */}
                  <div className="card-interactive bg-secondary p-6 hover:-translate-y-1 transition-transform duration-200">
                    <div className="text-center mb-3">
                      <div className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-2">Pre-Launch</div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-3xl flex-shrink-0">💎</div>
                        <h3 className="text-lg font-bold text-white">Early Position</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-purple-400">✓</span>
                        <span className="text-sm text-gray-300">live tools today</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-purple-400">∞</span>
                        <span className="text-sm text-gray-300">ecosystem tomorrow</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-muted leading-relaxed">
                          Get in <strong className="text-accent">before</strong> network effects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a
                  href="/how-to-buy"
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-10 py-5 shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  Buy $PRICKO <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://privacygecko.com/whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-10 py-5 hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  Read Whitepaper <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Urgency Banner - Enhanced CTA */}
              <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-xl p-6 text-center max-w-2xl mx-auto lg:mx-0 shadow-lg shadow-accent/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-accent font-bold text-base md:text-lg">Pre-Protocol Launch Window</span>
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                  GeckoCore protocol launches Q2 2026. Early holders capture protocol fees as the ecosystem expands from current tools to <strong className="text-accent">unlimited dApp integrations</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Enhanced Logo Display */}
            <div className="lg:w-1/2 flex flex-col items-center gap-8">
              {/* Fixed-size container to hold rings and mascot */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Animated Background Rings - Centered */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-80 h-80 rounded-full"></div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-72 h-72 rounded-full"></div>
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
              <div className="w-full max-w-md">
                <div className="p-0.5 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20">
                  <div className="rounded-2xl bg-secondary">
                    <ContractAddress variant="hero" />
                  </div>
                </div>
              </div>

              {/* NEW: GeckoCore Protocol Teaser */}
              <div className="w-full max-w-md p-4 card-interactive">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-cyan-400">Q2 2026 Protocol</span>
                      <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-[10px] rounded-full font-semibold uppercase tracking-wide">Coming</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 leading-relaxed">
                      <span className="font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">GeckoCore</span> (our decentralized privacy protocol) launches with staking rewards & community governance
                    </p>
                    <button
                      onClick={() => document.getElementById('geckocore-section')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-xs text-accent hover:text-accent-hover font-semibold flex items-center gap-1 group"
                    >
                      Learn More Below
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Development Section */}
      <ProofOfDevelopment />

      {/* TASK 3: From Product Token to Protocol Token - v1.3 Spec Lines 357-483 */}
      <section className="section-padding py-20 bg-secondary/80">
        <div className="container-max">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Product Token to <span className="gradient-text">Protocol Token</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              The value evolution as we complete Phase 1 and launch GeckoCore infrastructure
            </p>
          </motion.div>

          {/* Three Phases of Value */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* Phase 1: Product Utility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-accent/50 p-8"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Phase 1 (NOW)
              </h3>
              <h4 className="text-lg font-semibold text-accent mb-4">
                Product Utility
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Token value = Access to 8 Privacy Gecko products with premium features
                and AI capabilities.
              </p>
              <div className="text-sm text-muted">
                <strong className="text-white">Current:</strong> 4 products live,
                4 launching 2026
              </div>
            </motion.div>

            {/* Phase 2: Developer Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-8"
            >
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Phase 2 (2026)
              </h3>
              <h4 className="text-lg font-semibold text-gray-400 mb-4">
                Developer Ecosystem
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Token value = Product utility + Protocol access for external developers
                building on GeckoCore.
              </p>
              <div className="text-sm text-muted">
                <strong className="text-white">Timeline:</strong> SDK Q2 2026,
                Testnet Q3-Q4 2026
              </div>
            </motion.div>

            {/* Phase 3: Network Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-8"
            >
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Phase 3 (2027+)
              </h3>
              <h4 className="text-lg font-semibold text-gray-400 mb-4">
                Network Effects
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Token value = Product + Protocol + Network effects from every external
                dApp, wallet, and service using GeckoCore.
              </p>
              <div className="text-sm text-muted">
                <strong className="text-white">Vision:</strong> Privacy infrastructure
                for all of Solana
              </div>
            </motion.div>

          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl border border-border p-8"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Why Infrastructure Tokens Scale
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-muted font-semibold">Token Type</th>
                    <th className="pb-4 text-muted font-semibold">Demand Driver</th>
                    <th className="pb-4 text-muted font-semibold">Growth Limit</th>
                    <th className="pb-4 text-muted font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-4">
                      <strong className="text-white">Product Token</strong>
                    </td>
                    <td className="py-4">Users of specific products</td>
                    <td className="py-4 text-yellow-400">Limited to product TAM</td>
                    <td className="py-4 text-sm">Most utility tokens</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4">
                      <strong className="text-accent">Protocol Token</strong>
                    </td>
                    <td className="py-4">Anyone building on infrastructure</td>
                    <td className="py-4 text-accent">Scales with ecosystem</td>
                    <td className="py-4 text-sm">LINK, PYTH, JTO</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong className="text-accent">$PRICKO</strong>
                    </td>
                    <td className="py-4">Products now, Protocol future</td>
                    <td className="py-4 text-accent">Both models combined</td>
                    <td className="py-4 text-sm">Privacy Gecko + GeckoCore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* TASK 4: FAQ Section - v1.3 Spec Lines 631-713 */}
      <section className="section-padding py-20 bg-secondary/80">
        <div className="container-max">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">

            {/* Q1: What utility does $PRICKO have RIGHT NOW? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                What utility does $PRICKO have RIGHT NOW?
              </h3>
              <p className="text-gray-300">
                <strong className="text-white">Day one:</strong> Premium access to Privacy
                Gecko products (4 live now, 4 launching 2026), AI query credits (launching Q1-Q2 2026),
                and early access to new features.
              </p>
            </motion.div>

            {/* Q2: When does GeckoCore protocol launch? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                When does GeckoCore protocol launch?
              </h3>
              <p className="text-gray-300">
                <strong className="text-white">Developer Preview:</strong> Q2 2026 (hosted API)<br />
                <strong className="text-white">Testnet:</strong> Q3-Q4 2026<br />
                <strong className="text-white">Mainnet:</strong> 2027+
              </p>
            </motion.div>

            {/* Q3: Why invest in $PRICKO if protocol is 2+ years away? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Why invest in $PRICKO if protocol is 2+ years away?
              </h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Three reasons:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Immediate utility from 8 products (4 live today)</li>
                <li>Get in early before protocol value accrues (infrastructure tokens 10-100x when they prove network effects)</li>
                <li>Privacy Gecko team is actually shipping products, not just promises (proof of execution)</li>
              </ul>
            </motion.div>

            {/* Q4: How is this different from other privacy tokens? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                How is this different from other privacy tokens?
              </h3>
              <p className="text-gray-300">
                Most privacy tokens are either: (1) Privacy coins (Monero, Zcash) for transactions,
                or (2) Single-product tokens (VPN, browser, etc.).
                <br /><br />
                <strong className="text-white">$PRICKO is unique:</strong> Product utility TODAY
                (8 tools) + Protocol infrastructure TOMORROW (GeckoCore opens to all Solana dApps).
                We're following Pyth and Jito's playbook — building Solana infrastructure, not just apps.
              </p>
            </motion.div>

            {/* Q5: Can developers build on GeckoCore now? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Can developers build on GeckoCore now?
              </h3>
              <p className="text-gray-300">
                <strong className="text-white">Not yet.</strong> The developer SDK launches Q2 2026.
                Right now we're completing Phase 1 (8 products) to prove the infrastructure works.
                GeckoCore whitepaper is available now to share our technical vision.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* TASK 8: Roadmap Timeline Section - v1.3 Spec Lines 494-627 */}
      <section className="section-padding py-20 bg-secondary">
        <div className="container-max">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            The <span className="gradient-text">$PRICKO Roadmap</span>
          </motion.h2>

          {/* Timeline */}
          <div className="space-y-8 max-w-5xl mx-auto">

            {/* NOW - Nov-Dec 2025 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 md:w-40 text-left md:text-right">
                <span className="inline-block bg-accent text-black font-bold px-4 py-2 rounded-lg">
                  NOW
                </span>
              </div>
              <div className="flex-1 bg-secondary/80 rounded-xl border border-accent/50 p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  ✓ Token Launch & Product Utility
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>$PRICKO launches on Solana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>4 products live with token-gated features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>GeckoCore whitepaper published</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Q1-Q2 2026 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 md:w-40 text-left md:text-right">
                <span className="inline-block bg-zinc-700 text-white font-bold px-4 py-2 rounded-lg">
                  Q1-Q2 2026
                </span>
              </div>
              <div className="flex-1 bg-secondary/80 rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Phase 1 Complete + Protocol Preview
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>All 8 products operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>AI features go live (Q1-Q2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>GeckoCore Developer Preview (hosted API)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Q3-Q4 2026 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 md:w-40 text-left md:text-right">
                <span className="inline-block bg-zinc-700 text-white font-bold px-4 py-2 rounded-lg">
                  Q3-Q4 2026
                </span>
              </div>
              <div className="flex-1 bg-secondary/80 rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Protocol Launch Begins
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>GeckoCore testnet launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>Node operator program begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>$PRICKO becomes protocol access token</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 2027+ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 md:w-40 text-left md:text-right">
                <span className="inline-block bg-zinc-700 text-white font-bold px-4 py-2 rounded-lg">
                  2027+
                </span>
              </div>
              <div className="flex-1 bg-secondary/80 rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Full Infrastructure Network
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>Mainnet launch & full decentralization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>External dApp integrations driving demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">○</span>
                    <span>GeckoDAO governance operational</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

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
