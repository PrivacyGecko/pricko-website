import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaEye } from 'react-icons/fa';
import ContractAddress from '../components/ui/ContractAddress';

const TokenomicsPage: React.FC = () => {
  const tokenomicsData = {
    totalSupply: "1,000,000,000",
    distribution: [
      {
        category: "Community & Market",
        percentage: 80,
        amount: "800,000,000",
        description: "Fair launch via pump.fun. Tokens released to the open market for community acquisition, trading, and privacy tool usage."
      },
      {
        category: "Development Team",
        percentage: 20,
        amount: "200,000,000",
        description: "Reserved for ongoing development of privacy tools, platform maintenance, and long-term project sustainability."
      }
    ]
  };

  const utilities = [
    {
      title: "Privacy Tool Access",
      description: "Hold $PRICKO tokens to unlock premium features in PrickoShare, Pricko Guard, and future privacy tools in the ecosystem.",
      icon: "🔐"
    },
    {
      title: "Governance Rights",
      description: "Token holders can participate in governance decisions on protocol upgrades, new tool development, and community proposals.",
      icon: "🗳️"
    },
    {
      title: "Community Benefits",
      description: "Exclusive access to beta features, early releases, community events, and PRICKO merchandise for token holders.",
      icon: "🎁"
    },
    {
      title: "Deflationary Model",
      description: "Token burns from privacy tool usage reduce supply over time, creating scarcity and potential value appreciation.",
      icon: "🔥"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">$PRICKO</span> Tokenomics
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A fair and sustainable token economy designed to reward privacy advocates, 
            fund tool development, and build the strongest privacy community in crypto.
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
              <p className="text-3xl font-bold">Solana</p>
              <p className="text-muted mt-2">Fast & Low Cost</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Token Type</h3>
              <p className="text-3xl font-bold">Utility</p>
              <p className="text-muted mt-2">Privacy Tools Access</p>
            </div>
          </div>
        </motion.section>

        {/* Distribution Chart */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Representation */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                {/* This would be replaced with an actual chart library in production */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent via-accent-light to-accent-hover flex items-center justify-center">
                  <div className="w-32 h-32 bg-bg-main rounded-full flex items-center justify-center">
                    <img src="/logo.png" alt="Pricko" className="w-16 h-16" />
                  </div>
                </div>
                {/* Legend dots positioned around the circle */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-1"></div>
                  <span className="text-xs">Market 80%</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="w-4 h-4 bg-accent-hover rounded-full mx-auto mb-1"></div>
                  <span className="text-xs">Dev 20%</span>
                </div>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="space-y-6">
              {tokenomicsData.distribution.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.category}</h3>
                    <span className="text-accent font-bold">{item.percentage}%</span>
                  </div>
                  <p className="text-muted text-sm mb-2">{item.amount} tokens</p>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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

        {/* Token Economics */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Token Economics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">Deflationary Model</h3>
              <p className="text-muted">
                Tokens used for premium privacy tool subscriptions are burned permanently, reducing total supply over time and creating scarcity.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">Organic Growth</h3>
              <p className="text-muted">
                As privacy tools gain users, token demand increases while supply decreases through burns, driving sustainable tokenomics.
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
            $PRICKO will launch on pump.fun with a fair distribution model. Join our community to stay
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

        {/* Risk Disclaimer */}
        <motion.div
          className="mt-16 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Important Disclaimer</h3>
              <p className="text-gray-300 leading-relaxed">
                $PRICKO is a utility token for accessing privacy tools within our ecosystem.
                It is not an investment vehicle or security. Cryptocurrency markets are highly
                volatile and unpredictable. Only acquire tokens you can afford to lose. This
                information does not constitute financial advice. Always conduct your own research
                before participating in any cryptocurrency project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenomicsPage;