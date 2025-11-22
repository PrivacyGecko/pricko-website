import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaUsers, FaExternalLinkAlt, FaArrowRight, FaCheckCircle, FaClock, FaNetworkWired } from 'react-icons/fa';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import SEO from '../components/common/SEO';

const EcosystemPage: FC = () => {
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
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 text-sm font-semibold mb-6">
                Q1 2026 Development Begins
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Product Evolution
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                From Live Tools to GeckoCore Protocol
              </p>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                See how Privacy Gecko's ecosystem grows from 4 live products today to decentralized infrastructure in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Current Products (Live) */}
        <section className="section-padding bg-black/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaCheckCircle className="text-accent text-xl" />
                <span className="text-accent font-semibold">LIVE TODAY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Current Products
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                4 privacy tools already serving real users
              </p>
            </div>

            {/* Current Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card-interactive text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-bold mb-2">Gecko Advisor</h3>
                <p className="text-sm text-muted">AI-powered privacy scanner</p>
              </div>

              <div className="card-interactive text-center">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-lg font-bold mb-2">Gecko Share</h3>
                <p className="text-sm text-muted">Encrypted file sharing</p>
              </div>

              <div className="card-interactive text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-bold mb-2">Gecko Guard</h3>
                <p className="text-sm text-muted">Browser tracker blocker</p>
              </div>

              <div className="card-interactive text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-lg font-bold mb-2">Gecko Lock</h3>
                <p className="text-sm text-muted">Password manager</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://privacygecko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
              >
                Try Live Products <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Future Products (In Development) */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaClock className="text-yellow-400 text-xl" />
                <span className="text-yellow-400 font-semibold">IN DEVELOPMENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Future Products
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                4 more tools launching throughout 2026
              </p>
            </div>

            {/* Future Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card-interactive text-center border-yellow-500/30">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold mb-2">Gecko Shell</h3>
                <p className="text-sm text-muted mb-2">Mobile privacy browser</p>
                <span className="text-xs text-yellow-400">Q1 2026</span>
              </div>

              <div className="card-interactive text-center border-yellow-500/30">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-lg font-bold mb-2">Gecko View</h3>
                <p className="text-sm text-muted mb-2">AI privacy monitor</p>
                <span className="text-xs text-yellow-400">Q2 2026</span>
              </div>

              <div className="card-interactive text-center border-yellow-500/30">
                <div className="text-4xl mb-4">⌚</div>
                <h3 className="text-lg font-bold mb-2">Gecko Watch</h3>
                <p className="text-sm text-muted mb-2">Data breach alerts</p>
                <span className="text-xs text-yellow-400">Q2 2026</span>
              </div>

              <div className="card-interactive text-center border-yellow-500/30">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-bold mb-2">Gecko VPN</h3>
                <p className="text-sm text-muted mb-2">Privacy-first VPN</p>
                <span className="text-xs text-yellow-400">Q4 2026</span>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/roadmap"
                className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
              >
                View Development Timeline <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: GeckoCore Protocol - The Expansion */}
        <section className="section-padding bg-gradient-to-b from-black via-cyan-500/5 to-black">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaNetworkWired className="text-cyan-400 text-xl" />
                <span className="text-cyan-400 font-semibold">Q1 2026 LAUNCH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                GeckoCore <span className="text-cyan-400">Protocol</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The decentralized infrastructure connecting all Privacy Gecko tools
              </p>
            </div>

            {/* Protocol Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card-interactive text-center border-cyan-500/30">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔗</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Node Staking</h3>
                <p className="text-gray-300">
                  Stake $PRICKO to run protocol nodes and earn rewards
                </p>
              </div>

              <div className="card-interactive text-center border-purple-500/30">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🗳️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">GeckoDAO</h3>
                <p className="text-gray-300">
                  Community governance over protocol development
                </p>
              </div>

              <div className="card-interactive text-center border-green-500/30">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔒</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent">Privacy Layer</h3>
                <p className="text-gray-300">
                  Decentralized privacy infrastructure for all tools
                </p>
              </div>
            </div>

            <div className="text-center">
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

        {/* Section 5: Timeline Visualization */}
        <section className="section-padding bg-black/30">
          <div className="container-max max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From 4 products to full ecosystem
              </p>
            </div>

            {/* UtilityTimeline Component */}
            <div>
              <UtilityTimeline orientation="vertical" compact={false} />
            </div>
          </div>
        </section>

        {/* Section 6: Why This Matters + CTA */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why This <span className="gradient-text">Matters</span>
              </h2>
            </div>

            {/* 3 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="card-interactive text-center">
                <div className="flex justify-center mb-4">
                  <FaRocket className="text-accent text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">Real Utility</h3>
                <p className="text-gray-300">
                  Token unlocks privacy tools today. No waiting, no promises—just working software.
                </p>
              </div>

              <div className="card-interactive text-center">
                <div className="flex justify-center mb-4">
                  <FaChartLine className="text-cyan-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Growing Demand</h3>
                <p className="text-gray-300">
                  More tools = more $PRICKO utility. Protocol adds staking, nodes, and governance.
                </p>
              </div>

              <div className="card-interactive text-center">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-purple-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Community-Owned</h3>
                <p className="text-gray-300">
                  GeckoDAO puts governance in your hands. No VCs, no centralized control.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                  to="/tokenomics"
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  View Tokenomics
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
                  Full Details at PrivacyGecko.com <FaExternalLinkAlt size={12} />
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EcosystemPage;
