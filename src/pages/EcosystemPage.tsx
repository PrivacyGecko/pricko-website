import { FC } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import { TokenFlowDiagram } from '../components/ui/TokenFlowDiagram';
import { ProtocolArchitectureDiagram } from '../components/ui/ProtocolArchitectureDiagram';
import SecurityBadge from '../components/ui/SecurityBadge';
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
            <div
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 text-sm font-semibold mb-6"
              >
                Q1 2026 Development Begins
              </div>

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
            </div>
          </div>
        </section>

        {/* Section 2: Live Products Proof */}
        <section className="section-padding bg-black/30">
          <div className="container-max">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {TOOLS_COUNT.live} Products. <span className="text-accent">Live Today.</span> Real Users.
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Proof before promises. We ship first, hype second.
              </p>
            </div>

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
              <div
                className="max-w-prose"
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
              </div>

              {/* GeckoCore OG Image */}
              <div
                className="h-64 lg:h-full"
              >
                <GeckoCoreOGImage />
              </div>
            </div>

          </div>
        </section>

        {/* Section 3.5: Trust & Security Indicators */}
        <section className="section-padding bg-black/30">
          <div className="container-max">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on <span className="text-accent">Trust</span> & Transparency
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real security, real code, real team. No smoke and mirrors.
              </p>
            </div>

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
            <div
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From 4 to 8: <span className="text-protocol-secondary">The Roadmap</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our journey from live products to decentralized protocol
              </p>
            </div>

            {/* Integrate UtilityTimeline Component */}
            <div
            >
              <UtilityTimeline orientation="vertical" compact={false} />
            </div>

            {/* CTA */}
            <div
              className="text-center mt-12"
            >
              <Link to="/roadmap" className="btn-secondary inline-flex items-center gap-2">
                View Full Roadmap
                <FaExternalLinkAlt size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: How It Works (Token Flow) */}
        <section className="section-padding">
          <div className="container-max max-w-6xl">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How $PRICKO Powers the <span className="text-accent">Ecosystem</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                The circular economy that makes it all work
              </p>
            </div>

            {/* Integrate TokenFlowDiagram Component */}
            <div
            >
              <TokenFlowDiagram size="large" animated={true} showLabels={true} />
            </div>

            {/* Flow Steps Explanation */}
            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
            </div>
          </div>
        </section>

        {/* Section 6: Protocol Architecture */}
        <section className="section-padding bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5">
          <div className="container-max max-w-6xl">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Foundation: How <span className="text-protocol-primary">GeckoCore</span> Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three layers working together to protect your privacy. Simplified for traders, not developers.
              </p>
            </div>

            {/* Integrate ProtocolArchitectureDiagram Component */}
            <div
            >
              <ProtocolArchitectureDiagram
                orientation="vertical"
                interactive={true}
                showConnections={true}
              />
            </div>

            {/* Developer Resources Links */}
            <div
              className="text-center mt-8 space-y-3"
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
              <p className="text-gray-400">
                <a
                  href="https://www.privacygecko.com/whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline inline-flex items-center gap-2 font-semibold"
                >
                  Read Full GeckoCore Whitepaper (Technical Specifications) →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Value Propositions + CTA */}
        <section className="section-padding">
          <div className="container-max">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why This <span className="gradient-text">Matters</span>
              </h2>
            </div>

            {/* 3 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                className="card-interactive text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaRocket className="text-accent text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">Real Utility</h3>
                <p className="text-gray-300">
                  Token unlocks privacy tools today. No waiting, no promises—just working software serving real users.
                </p>
              </div>

              <div
                className="card-interactive text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaChartLine className="text-cyan-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Future Value</h3>
                <p className="text-gray-300">
                  Protocol infrastructure adds more utility in 2026. Staking rewards, node operation, governance—all powered by $PRICKO.
                </p>
              </div>

              <div
                className="card-interactive text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-purple-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Community-Owned</h3>
                <p className="text-gray-300">
                  Governance through GeckoDAO. Your tokens, your voice in Privacy Gecko's future. No VCs, no centralized control.
                </p>
              </div>
            </div>

            {/* Final CTA Section */}
            <div
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Privacy Revolution
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.privacygecko.com/whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Read Technical Whitepaper
                  <FaExternalLinkAlt size={18} />
                </a>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Buy $PRICKO
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EcosystemPage;
