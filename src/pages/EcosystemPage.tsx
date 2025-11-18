import { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import ToolCardSimple from '../components/ui/ToolCardSimple';
import GeckoCoreOGImage from '../components/ui/GeckoCoreOGImage';
import SEO from '../components/common/SEO';
import { TOOLS_COUNT } from '../constants/metrics';
import { SIMPLIFIED_TOOLS } from '../constants/toolsSimplified';

const EcosystemPage: FC = () => {
  // Filter live products (4 products)
  const liveProducts = SIMPLIFIED_TOOLS.filter(tool => tool.status === 'live');

  return (
    <>
      <SEO
        title="Privacy Ecosystem | GeckoCore Protocol | $PRICKO"
        description="Discover how $PRICKO token powers 8 privacy tools through the GeckoCore protocol. 4 products live today, full ecosystem launching 2026."
        keywords="GeckoCore, privacy protocol, $PRICKO, privacy tools, decentralized privacy, blockchain privacy"
        type="website"
      />

      <main id="main-content" className="min-h-screen bg-primary">
        {/* Section 1: Hero */}
        <section className="relative section-padding overflow-hidden pt-32 md:pt-40">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/10 to-purple-500/10 pointer-events-none" />

          <div className="container-max relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 text-sm font-semibold mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Q1 2026 Development Begins
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Privacy Ecosystem
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                How $PRICKO Powers Real Privacy Tools
              </p>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                From working products today to decentralized infrastructure in 2026.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Buy $PRICKO
                  <FaExternalLinkAlt size={16} />
                </a>
                <a
                  href="https://dexscreener.com/solana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  View on DEXScreener
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Live Products Proof */}
        <section className="section-padding bg-black/30">
          <div className="container-max">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {TOOLS_COUNT.live} Products. <span className="text-accent">Live Today.</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Proof before promises. We ship first, hype second.
              </p>
            </motion.div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveProducts.map((product, index) => (
                <ToolCardSimple
                  key={product.id}
                  icon={product.icon}
                  title={product.name}
                  description={product.oneLiner}
                  status={product.status}
                  features={product.topFeatures}
                  url={product.url}
                  delay={index * 0.1}
                  hasAI={product.hasAI}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: What is GeckoCore? - Condensed */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-protocol-primary">GeckoCore</span>?
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              GeckoCore is the decentralized privacy protocol launching Q1 2026.
              It transforms Privacy Gecko tools into community-owned infrastructure.
              More tools = more $PRICKO demand.
            </p>

            {/* GeckoCore OG Image */}
            <motion.div
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GeckoCoreOGImage />
            </motion.div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.privacygecko.com/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Technical Whitepaper <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: The Ecosystem Timeline */}
        <section className="section-padding bg-black/30">
          <div className="container-max max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From 4 to 8: <span className="text-protocol-secondary">The Roadmap</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our journey from live products to decentralized protocol
              </p>
            </motion.div>

            {/* UtilityTimeline Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <UtilityTimeline orientation="vertical" compact={false} />
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/roadmap" className="btn-secondary inline-flex items-center gap-2">
                View Full Roadmap
                <FaExternalLinkAlt size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Value Propositions + CTA */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why This <span className="gradient-text">Matters</span>
              </h2>
            </motion.div>

            {/* 3 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="card-interactive text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <FaRocket className="text-accent text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">Real Utility</h3>
                <p className="text-gray-300">
                  Token unlocks privacy tools today. No waiting, no promises—just working software.
                </p>
              </motion.div>

              <motion.div
                className="card-interactive text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <FaChartLine className="text-cyan-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Future Value</h3>
                <p className="text-gray-300">
                  Protocol infrastructure adds more utility in 2026. Staking, nodes, governance.
                </p>
              </motion.div>

              <motion.div
                className="card-interactive text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-purple-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Community-Owned</h3>
                <p className="text-gray-300">
                  Governance through GeckoDAO. Your tokens, your voice. No VCs, no centralized control.
                </p>
              </motion.div>
            </div>

            {/* Final CTA Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Privacy Revolution
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://www.privacygecko.com/whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Read Technical Whitepaper
                  <FaExternalLinkAlt size={18} />
                </a>
                <Link
                  to="/roadmap"
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  View Roadmap
                  <FaArrowRight size={18} />
                </Link>
              </div>

              {/* Strategic Link */}
              <p className="text-muted">
                <a
                  href="https://www.privacygecko.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
                >
                  Full Ecosystem Details at PrivacyGecko.com <FaExternalLinkAlt size={12} />
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EcosystemPage;
