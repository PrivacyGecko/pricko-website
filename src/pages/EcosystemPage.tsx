import { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaCheckCircle, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import { TokenFlowDiagram } from '../components/ui/TokenFlowDiagram';
import { ProtocolArchitectureDiagram } from '../components/ui/ProtocolArchitectureDiagram';
import ProtocolDisclaimer from '../components/ui/ProtocolDisclaimer';
import SecurityBadge from '../components/ui/SecurityBadge';
import ToolCardSimple from '../components/ui/ToolCardSimple';
import SEO from '../components/common/SEO';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
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
        <section className="relative section-padding overflow-hidden">
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
                Privacy Gecko isn't just another memecoin. We're building a comprehensive privacy ecosystem with real utility—from working products you can use today to decentralized infrastructure launching in 2026.
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
                {TOOLS_COUNT.live} Products. <span className="text-accent">Live Today.</span> Real Users.
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Proof before promises. We ship first, hype second.
              </p>
            </motion.div>

            {/* Product Grid - 2x2 on mobile, 4 columns on desktop */}
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

        {/* Section 3: What is GeckoCore? */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                className="max-w-prose"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  What is <span className="text-protocol-primary">GeckoCore</span>?
                </h2>

                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    GeckoCore is the privacy protocol with development beginning Q1 2026, with testnet launch expected in that quarter. It transforms Privacy Gecko from a suite of tools into a decentralized network. Instead of centralized servers, privacy verification happens across a distributed node network—owned and operated by the community.
                  </p>

                  <p>
                    $PRICKO holders become node operators, earning rewards for maintaining the infrastructure that powers privacy for millions. The protocol handles everything: encrypted file storage, privacy scanning, tracker blocking, and password management—all running on community infrastructure.
                  </p>

                  <p>
                    This isn't vaporware. We've already shipped 4 live products serving real users. GeckoCore is the natural evolution: taking working software and making it unstoppable through decentralization.
                  </p>

                  <p className="text-accent font-semibold">
                    $PRICKO token is required for access to premium features and node operation.{' '}
                    <a
                      href="https://github.com/privacy-gecko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1 ml-2"
                    >
                      View on GitHub →
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Visual Placeholder */}
              <motion.div
                className="card-glass flex items-center justify-center h-64 lg:h-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🦎</div>
                  <p className="text-gray-400">Decentralized Privacy Network</p>
                </div>
              </motion.div>
            </div>

            {/* Forward-Looking Disclaimer - Moved from Section 8 */}
            <motion.div
              className="max-w-4xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProtocolDisclaimer variant="warning" compact={true} />
            </motion.div>
          </div>
        </section>

        {/* Section 3.5: Trust & Security Indicators */}
        <section className="section-padding bg-black/30">
          <div className="container-max">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on <span className="text-accent">Trust</span> & Transparency
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real security, real code, real team. No smoke and mirrors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SecurityBadge
                variant="audit"
                title="Security Audited"
                description="All live products undergo professional security audits before launch"
                delay={0.1}
              />
              <SecurityBadge
                variant="encryption"
                title="End-to-End Encryption"
                description="Military-grade encryption protects all user data and communications"
                delay={0.2}
              />
              <SecurityBadge
                variant="open-source"
                title="Open Source"
                description="100% transparent codebase available on GitHub for community review"
                delay={0.3}
              />
              <SecurityBadge
                variant="verified"
                title="Verified Team"
                description="Real team members with verified identities and track records"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Section 4: The Ecosystem Timeline */}
        <section className="section-padding">
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

            {/* Integrate UtilityTimeline Component */}
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

        {/* Section 5: How It Works (Token Flow) */}
        <section className="section-padding">
          <div className="container-max max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How $PRICKO Powers the <span className="text-accent">Ecosystem</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                The circular economy that makes it all work
              </p>
            </motion.div>

            {/* Integrate TokenFlowDiagram Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TokenFlowDiagram size="large" animated={true} showLabels={true} />
            </motion.div>

            {/* Flow Steps Explanation */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card-outlined text-center">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-bold text-accent mb-2">1. Users</h3>
                <p className="text-sm text-gray-400">Pay $PRICKO for premium privacy features</p>
              </div>

              <div className="card-outlined text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-bold text-cyan-400 mb-2">2. Treasury</h3>
                <p className="text-sm text-gray-400">Receives fees, funds protocol operations</p>
              </div>

              <div className="card-outlined text-center">
                <div className="text-3xl mb-2">🖥️</div>
                <h3 className="font-bold text-purple-400 mb-2">3. Operators</h3>
                <p className="text-sm text-gray-400">Stake tokens, run nodes, earn rewards</p>
              </div>

              <div className="card-outlined text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <h3 className="font-bold text-green-400 mb-2">4. Tools</h3>
                <p className="text-sm text-gray-400">Decentralized infrastructure serves users</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Protocol Architecture */}
        <section className="section-padding bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5">
          <div className="container-max max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Foundation: How <span className="text-protocol-primary">GeckoCore</span> Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three layers working together to protect your privacy. Simplified for traders, not developers.
              </p>
            </motion.div>

            {/* Integrate ProtocolArchitectureDiagram Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProtocolArchitectureDiagram
                orientation="vertical"
                interactive={true}
                showConnections={true}
              />
            </motion.div>

            {/* Developer Resources Link */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400">
                <strong className="text-white">For Developers:</strong>{' '}
                <a
                  href="https://github.com/privacy-gecko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Explore Technical Documentation & API Reference
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Value Propositions + CTA */}
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
                  Token unlocks privacy tools today. No waiting, no promises—just working software serving real users.
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
                  Protocol infrastructure adds more utility in 2026. Staking rewards, node operation, governance—all powered by $PRICKO.
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
                  Governance through GeckoDAO. Your tokens, your voice in Privacy Gecko's future. No VCs, no centralized control.
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Buy $PRICKO
                  <FaExternalLinkAlt size={18} />
                </a>
                <Link
                  to="/roadmap"
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  View Full Roadmap
                  <FaArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EcosystemPage;
