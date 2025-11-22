import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaEye, FaShieldAlt, FaUsers, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import ContractAddress from '../components/ui/ContractAddress';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';

const TokenomicsPage: React.FC = () => {
  const { config, getTokenDisclaimer } = useProjectConfig();

  return (
    <>
      <SEO
        title="$PRICKO Tokenomics - Fair Launch & Token Distribution | PRICKO"
        description="$PRICKO tokenomics: 1B total supply, 80% community via pump.fun fair launch, 20% development. Deflationary utility token for privacy tools on Solana."
        keywords="PRICKO tokenomics, pump.fun launch, Solana token, utility token, token distribution, fair launch, deflationary token, crypto tokenomics"
        canonicalUrl="/tokenomics"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <MascotImage size="lg" className="mb-6 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">$PRICKO</span> Tokenomics
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A utility-first token economy designed to power Privacy Gecko's ecosystem of privacy tools.
          </p>
        </div>

        {/* Token Overview */}
        <section className="mb-16 bg-secondary/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Total Supply</h3>
              <p className="text-3xl font-bold">{config.token.totalSupply}</p>
              <p className="text-muted mt-2">$PRICKO Tokens</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Blockchain</h3>
              <p className="text-3xl font-bold">{config.token.blockchain}</p>
              <p className="text-muted mt-2">Fast & Low Cost</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Token Type</h3>
              <p className="text-3xl font-bold">Utility</p>
              <p className="text-muted mt-2">Privacy Tools Access</p>
            </div>
          </div>
        </section>

        {/* Simple Distribution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
          <div className="grid grid-cols-2 gap-4 text-center mb-8 max-w-2xl mx-auto">
            <div className="card-interactive p-6">
              <div className="text-4xl font-bold text-accent">80%</div>
              <div className="text-muted">Community & Market</div>
            </div>
            <div className="card-interactive p-6">
              <div className="text-4xl font-bold text-accent">20%</div>
              <div className="text-muted">Team (Vested)</div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://www.privacygecko.com/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
            >
              Full Distribution Details in Whitepaper <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </section>

        {/* What Your $PRICKO Gets You */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Your $PRICKO Gets You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FREE Tier */}
            <div className="card-interactive p-6 text-center">
              <div className="text-2xl mb-2">🆓</div>
              <h3 className="text-xl font-bold mb-2">FREE</h3>
              <p className="text-sm text-muted">Basic tool access, limited features</p>
            </div>

            {/* HOLDER Tier */}
            <div className="card-interactive p-6 text-center border-accent/50">
              <div className="text-2xl mb-2">💎</div>
              <h3 className="text-xl font-bold text-accent mb-2">HOLDER</h3>
              <p className="text-sm text-muted">Premium features, unlimited access</p>
            </div>

            {/* STAKER Tier */}
            <div className="card-interactive p-6 text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="text-xl font-bold mb-2">STAKER</h3>
              <p className="text-sm text-muted">Rewards + early access (Q2 2026)</p>
            </div>

            {/* VOTER Tier */}
            <div className="card-interactive p-6 text-center">
              <div className="text-2xl mb-2">🗳️</div>
              <h3 className="text-xl font-bold mb-2">VOTER</h3>
              <p className="text-sm text-muted">Governance rights (Q2 2026)</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.privacygecko.com/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
            >
              Full Tokenomics in Whitepaper <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </section>

        {/* Token Launch Information */}
        <section className="mb-16 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Fair Launch via pump.fun</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              $PRICKO will launch on pump.fun, the leading Solana token launchpad. This ensures a completely
              fair distribution with no presales, no whitelists, and equal opportunity for all community members
              to participate from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-semibold text-white mb-1">Fair Launch</h3>
                <p className="text-sm text-muted">No presales or private rounds</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-white mb-1">Instant Liquidity</h3>
                <p className="text-sm text-muted">Trade immediately on Raydium</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-white mb-1">Community Owned</h3>
                <p className="text-sm text-muted">80% to market, 20% to devs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Utility: GeckoCore Protocol Section */}
        <section id="protocol" className="section-padding bg-black/30 rounded-2xl mb-16">
          <div className="container-max max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Future Utility: <span className="text-protocol-primary">GeckoCore Protocol</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Beyond today's live products, $PRICKO will power a decentralized privacy protocol launching Q1 2026.
              </p>
            </div>

            <div className="card-protocol space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <FaRocket className="text-cyan-400 text-2xl mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Token Staking</h3>
                  <p className="text-gray-300">
                    Stake $PRICKO to earn rewards and participate in protocol governance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <FaUsers className="text-purple-400 text-2xl mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">Governance (GeckoDAO)</h3>
                  <p className="text-gray-300">
                    Token holders vote on protocol upgrades, treasury allocation, and ecosystem development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <FaServer className="text-green-400 text-2xl mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Node Operation</h3>
                  <p className="text-gray-300">
                    Run privacy verification nodes and earn $PRICKO rewards.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/ecosystem" className="btn-secondary inline-flex items-center gap-2">
                Learn More About GeckoCore
                <FaExternalLinkAlt size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contract Address Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <ContractAddress />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Privacy Revolution?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            $PRICKO will launch with a fair distribution model. Join our community to stay
            updated on the launch date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-2 transition-colors">
                <FaRocket />
                Join Community
              </button>
            </Link>
            <Link to="/roadmap">
              <button className="btn-secondary px-8 py-3 text-lg inline-flex items-center gap-2 transition-colors">
                <FaEye />
                View Roadmap
              </button>
            </Link>
          </div>
        </section>

        {/* Consolidated Risk Warning - Disabled */}
        {/* <section className="mb-16">
          <div className="max-w-3xl mx-auto bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">⚠️</div>
              <div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">Important Risk Notice</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong>$PRICKO is a utility token for accessing Privacy Gecko services.</strong> It is NOT an investment vehicle or security.
                  Token value may fluctuate significantly or decline to zero. Cryptocurrency investments carry risk, including total loss of capital.
                </p>
                <p className="text-gray-400 text-xs">
                  {getTokenDisclaimer('tokenomics')}
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
    </>
  );
};

export default TokenomicsPage;
