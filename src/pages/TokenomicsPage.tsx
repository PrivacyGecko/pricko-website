import React from 'react';
import { motion } from 'framer-motion';

const TokenomicsPage: React.FC = () => {
  const tokenomicsData = {
    totalSupply: "1,000,000,000",
    distribution: [
      {
        category: "Community & Rewards",
        percentage: 40,
        amount: "400,000,000",
        description: "Distributed to community members through airdrops, staking rewards, and privacy tool usage incentives."
      },
      {
        category: "Privacy Tool Development",
        percentage: 25,
        amount: "250,000,000",
        description: "Funding development of Pricko VPN, Pricko File Sharing - Free, Pricko Guard, and future privacy tools."
      },
      {
        category: "Liquidity Pool",
        percentage: 20,
        amount: "200,000,000",
        description: "Providing deep liquidity on DEXs and ensuring smooth trading for the community."
      },
      {
        category: "Team & Advisors",
        percentage: 10,
        amount: "100,000,000",
        description: "Team allocation with 2-year vesting to ensure long-term commitment to the project."
      },
      {
        category: "Marketing & Partnerships",
        percentage: 5,
        amount: "50,000,000",
        description: "Growing the gecko army through strategic partnerships and community building initiatives."
      }
    ]
  };

  const utilities = [
    {
      title: "Privacy Tool Access",
      description: "Use $PRICK tokens to access premium features in Pricko VPN, Pricko File Sharing - Free, and Pricko Guard.",
      icon: "🔐"
    },
    {
      title: "Governance Rights",
      description: "Vote on protocol upgrades, new tool development, and community proposals.",
      icon: "🗳️"
    },
    {
      title: "Staking Rewards",
      description: "Stake $PRICK tokens to earn rewards and support network security.",
      icon: "💰"
    },
    {
      title: "Community Benefits",
      description: "Exclusive access to beta features, community events, and gecko merchandise.",
      icon: "🎁"
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
            <span className="gradient-text">$PRICK</span> Tokenomics
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A fair and sustainable token economy designed to reward privacy advocates, 
            fund tool development, and build the strongest gecko community in crypto.
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
              <p className="text-muted mt-2">$PRICK Tokens</p>
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
                  <span className="text-xs">Community 40%</span>
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

        {/* Roadmap Integration */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Economic Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">Deflationary Mechanism</h3>
              <p className="text-muted">
                A portion of tokens used for privacy tools are burned, creating deflationary pressure and increasing scarcity over time.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">Revenue Sharing</h3>
              <p className="text-muted">
                Tool subscription revenues are partially distributed back to token holders through staking rewards and community treasury.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">Growth Incentives</h3>
              <p className="text-muted">
                Early adopters and active community members receive bonus tokens for contributing to ecosystem growth and privacy advocacy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Gecko Economy?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Get $PRICK tokens and become part of the privacy revolution. 
            The earlier you join, the more you benefit from our growing ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $PRICK Now
            </motion.button>
            <motion.button
              className="btn-secondary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on DEX
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TokenomicsPage;