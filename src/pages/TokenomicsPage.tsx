import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaEye, FaShieldAlt } from 'react-icons/fa';
import ContractAddress from '../components/ui/ContractAddress';
import UtilityTierCard from '../components/ui/UtilityTierCard';
import TokenDistributionDonut from '../components/ui/TokenDistributionDonut';
import DistributionBreakdown from '../components/ui/DistributionBreakdown';
import VestingTimeline from '../components/ui/VestingTimeline';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import { TokenDistribution } from '../types/config';

const TokenomicsPage: React.FC = () => {
  const { config, getTokenDisclaimer } = useProjectConfig();

  // Get token distribution data from config and transform to expected format
  const tokenomicsData = {
    totalSupply: config.token.totalSupply,
    distribution: Object.values(config.token.distribution).map((item: TokenDistribution) => ({
      category: item.description.split(' ')[0] === 'Fair' ? 'Community & Market' :
                 item.description.includes('Locked liquidity') ? 'Liquidity Pool' :
                 item.description.includes('ecosystem growth') ? 'Development' :
                 item.description.includes('Community growth') ? 'Marketing' :
                 'Team',
      percentage: item.percentage,
      amount: item.amount,
      description: item.description
    }))
  };

  const utilities = config.token.utility.benefits.slice(0, 5).map((benefit, index) => {
    const icons = ["🔐", "🗳️", "🎁", "🔥", "⚡"];
    const titles = [
      "Privacy Tool Access",
      "Governance Rights",
      "Community Benefits",
      "Deflationary Model",
      "Staking Rewards"
    ];
    return {
      title: titles[index] || benefit.substring(0, 30),
      description: benefit,
      icon: icons[index]
    };
  });

  // 4-Tier Utility Model
  const utilityTiers = [
    {
      tier: 1,
      name: "Free Access",
      tokenRequirement: "No tokens required",
      description: "Experience basic privacy tools at no cost",
      features: [
        "Basic privacy scanning",
        "Limited file sharing (1GB, 24hr)",
        "Standard ad blocking",
        "Community access"
      ],
      badge: "🆓",
      color: "zinc" as const
    },
    {
      tier: 2,
      name: "Token Holder",
      tokenRequirement: "Hold 10,000+ $PRICKO",
      description: "Unlock premium features across all tools",
      features: [
        "Unlimited file sizes & persistent vault",
        "Advanced threat detection",
        "Premium stealth modes",
        "Priority support"
      ],
      badge: "💎",
      color: "accent" as const
    },
    {
      tier: 3,
      name: "Staker",
      tokenRequirement: "Stake 50,000+ $PRICKO",
      description: "Enhanced benefits for long-term commitment",
      features: [
        "All Token Holder benefits",
        "Staking rewards",
        "Early access to beta features",
        "Exclusive community channels"
      ],
      badge: "⭐",
      color: "accent-hover" as const
    },
    {
      tier: 4,
      name: "Governance",
      tokenRequirement: "100,000+ $PRICKO staked",
      description: "Shape the future of Privacy Gecko",
      features: [
        "All Staker benefits",
        "Vote on roadmap priorities",
        "Propose new features",
        "Direct team communication"
      ],
      badge: "👑",
      color: "yellow" as const
    }
  ];

  // Distribution allocations for detailed breakdown
  const distributionAllocations = [
    {
      category: 'Public Sale',
      percentage: config.token.distribution.publicSale.percentage,
      amount: config.token.distribution.publicSale.amount,
      description: config.token.distribution.publicSale.description,
      color: '#4ade80',
    },
    {
      category: 'Liquidity Pool',
      percentage: config.token.distribution.liquidityPool.percentage,
      amount: config.token.distribution.liquidityPool.amount,
      description: config.token.distribution.liquidityPool.description,
      color: '#34d399',
    },
    {
      category: 'Development',
      percentage: config.token.distribution.development.percentage,
      amount: config.token.distribution.development.amount,
      description: config.token.distribution.development.description,
      vestingSchedule: config.token.distribution.development.vestingSchedule,
      color: '#6ee7b7',
    },
    {
      category: 'Marketing',
      percentage: config.token.distribution.marketing.percentage,
      amount: config.token.distribution.marketing.amount,
      description: config.token.distribution.marketing.description,
      color: '#a7f3d0',
    },
    {
      category: 'Team',
      percentage: config.token.distribution.team.percentage,
      amount: config.token.distribution.team.amount,
      description: config.token.distribution.team.description,
      vestingSchedule: config.token.distribution.team.vestingSchedule,
      color: '#d1fae5',
    },
  ];

  // Vesting periods for timeline
  const vestingPeriods = [
    {
      category: 'Development',
      vestingPeriod: '2-year linear vesting',
      color: '#6ee7b7',
      description: 'Tokens released gradually over 24 months to fund continuous product development and infrastructure.'
    },
    {
      category: 'Team',
      lockPeriod: '12-month lock',
      vestingPeriod: '18-month vesting',
      color: '#d1fae5',
      description: 'Initial 1-year lock period followed by 18-month gradual release to ensure long-term team commitment.'
    },
  ];

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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MascotImage size="lg" className="mb-6 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">$PRICKO</span> Tokenomics
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A utility-first token economy designed to power Privacy Gecko's ecosystem of privacy tools.
          </p>
        </motion.div>

        {/* Token Overview */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Total Supply</h3>
              <p className="text-3xl font-bold">{tokenomicsData.totalSupply}</p>
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
        </motion.section>

        {/* Distribution Chart - MOVED UP */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Token Distribution</h2>
          
          <TokenDistributionDonut
            totalSupply={tokenomicsData.totalSupply}
            allocations={[
              {
                category: 'Public Sale',
                percentage: config.token.distribution.publicSale.percentage,
                amount: config.token.distribution.publicSale.amount,
                description: config.token.distribution.publicSale.description,
                color: '#4ade80',
                hoverColor: '#22c55e',
              },
              {
                category: 'Liquidity Pool',
                percentage: config.token.distribution.liquidityPool.percentage,
                amount: config.token.distribution.liquidityPool.amount,
                description: config.token.distribution.liquidityPool.description,
                color: '#34d399',
                hoverColor: '#10b981',
              },
              {
                category: 'Development',
                percentage: config.token.distribution.development.percentage,
                amount: config.token.distribution.development.amount,
                description: config.token.distribution.development.description,
                vestingSchedule: config.token.distribution.development.vestingSchedule,
                color: '#6ee7b7',
                hoverColor: '#34d399',
              },
              {
                category: 'Marketing',
                percentage: config.token.distribution.marketing.percentage,
                amount: config.token.distribution.marketing.amount,
                description: config.token.distribution.marketing.description,
                color: '#a7f3d0',
                hoverColor: '#6ee7b7',
              },
              {
                category: 'Team',
                percentage: config.token.distribution.team.percentage,
                amount: config.token.distribution.team.amount,
                description: config.token.distribution.team.description,
                vestingSchedule: config.token.distribution.team.vestingSchedule,
                color: '#d1fae5',
                hoverColor: '#a7f3d0',
              },
            ]}
          />
        </motion.section>

        {/* Distribution Breakdown - NEW SECTION */}
        <DistributionBreakdown allocations={distributionAllocations} delay={0.2} />

        {/* Vesting Schedule - NEW SECTION */}
        <VestingTimeline periods={vestingPeriods} delay={0.3} />

        {/* 4-Tier Utility Model */}
        <motion.section
          className="mb-20 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">How $PRICKO Works:</span> 4-Tier Utility Model
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              $PRICKO unlocks features across our privacy tools. The more you hold, the more capabilities you access.
              This is about <strong>functionality</strong>, not investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {utilityTiers.map((tier, index) => (
              <UtilityTierCard
                key={tier.tier}
                {...tier}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-blue-400 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Utility-First Design</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Each tier grants specific capabilities within Privacy Gecko tools. You're not buying an investment -
                  you're unlocking features to enhance your privacy. Token requirements are subject to change based on
                  pricing adjustments for service sustainability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Token Utility */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Token Utility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{utility.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-accent">{utility.title}</h3>
                <p className="text-muted leading-relaxed">{utility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Token Launch Information */}
        <motion.section
          className="mb-16 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* Ecosystem Sustainability */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Ecosystem Sustainability</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The Privacy Gecko ecosystem operates on a <strong>utility-consumption model</strong> designed for long-term sustainability.
            </p>

            <div className="bg-bg-main rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-accent mb-3">How It Works:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">•</span>
                  <p className="text-gray-300">Users spend tokens to access premium features across Privacy Gecko tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">•</span>
                  <p className="text-gray-300">Smart contracts automatically burn consumed tokens (remove from circulation)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">•</span>
                  <p className="text-gray-300">This mechanism maintains operational balance over time</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">•</span>
                  <p className="text-gray-300">The system ensures sustainable funding without inflation</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-yellow-300">Important:</strong> This is NOT designed to increase token value.
                It's an operational model where tokens are consumed like traditional currency to pay for services.
                Think of it like paying for Netflix - your payment funds operations. When you use $PRICKO for services,
                tokens are consumed (burned) to ensure sustainable funding for continued development and operations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contract Address Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <ContractAddress />
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Privacy Revolution?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            $PRICKO will launch with a fair distribution model. Join our community to stay
            updated on the launch date and be among the first to participate when the token goes live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Join Community
              </motion.button>
            </Link>
            <Link to="/roadmap">
              <motion.button
                className="btn-secondary px-8 py-3 text-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                View Roadmap
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* CONSOLIDATED Risk Disclosures & Legal Notices - SINGLE COMPREHENSIVE SECTION */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <FaShieldAlt className="text-red-400 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-red-300 mb-2">Risk Disclosures & Legal Notices</h2>
                <p className="text-gray-300 text-sm">
                  Before acquiring $PRICKO tokens, carefully review and understand these important risks and legal disclosures:
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mb-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">⚠️</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-3">Important Notice</h3>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    <strong>$PRICKO is a utility token for accessing Privacy Gecko services.</strong> It is NOT an investment vehicle or security.
                    Token value may fluctuate significantly or decline to zero. Purchase only if you intend to use Privacy Gecko tools.
                    Cryptocurrency investments carry risk, including total loss of capital. This is not financial advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">Market Risks</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Cryptocurrency markets are highly volatile and unpredictable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Token value can fluctuate significantly or decline to zero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>No guarantees of liquidity or favorable market conditions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">Development Risks</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Product timelines may change due to technical challenges or resource constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Features may be modified, delayed, or not delivered as described</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>No guarantees regarding future development or ecosystem growth</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">Regulatory Risks</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Cryptocurrency regulations vary by jurisdiction and may change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Future regulatory actions may impact token utility or accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>You are responsible for compliance with laws in your jurisdiction</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">Utility & Technology Risks</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>This is a utility token for accessing services, not an investment vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Smart contracts and blockchain technology carry inherent technical risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>Token holders have no expectation of profit from the efforts of the Privacy Gecko team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span>You should only purchase tokens if you intend to use Privacy Gecko services</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-red-500/20">
                <p className="text-sm text-gray-300 font-semibold mb-3">
                  <span className="text-red-300">No Financial Advice:</span> This information is educational only
                  and does not constitute financial, investment, or legal advice. Conduct thorough research and
                  consult with qualified professionals before making any decisions. Never invest more than you can
                  afford to lose completely.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {getTokenDisclaimer('tokenomics')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default TokenomicsPage;
