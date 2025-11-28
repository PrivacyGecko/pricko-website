import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiAlertTriangle,
  FiTrendingDown,
  FiShield,
  FiCpu,
  FiUsers,
  FiFileText,
  FiGlobe,
  FiArrowLeft
} from 'react-icons/fi';
import Breadcrumb from '../../components/common/Breadcrumb';
import SEO from '../../components/common/SEO';
import { Container, Card, Badge, Button } from '../../design-system';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../../design-system/animations/framer-variants';
import { INVESTMENT_RISK_DISCLAIMER } from '../../constants/legal';

const RiskDisclosurePage: React.FC = () => {
  const risks = [
    {
      icon: FiTrendingDown,
      title: 'Market Volatility Risk',
      description: 'Cryptocurrency markets are highly volatile and unpredictable. Token value may decline significantly or lose all value.',
      details: [
        'Token price may experience extreme volatility (50%+ changes in short periods)',
        'No guaranteed minimum value or price floor',
        'Market manipulation, pump-and-dump schemes, and rug pulls are common in crypto',
        'Liquidity may dry up, making it impossible to sell tokens',
        'External market factors (Bitcoin price, regulatory news, etc.) may impact $PRICKO'
      ]
    },
    {
      icon: FiCpu,
      title: 'Technology Risk',
      description: 'Smart contracts, blockchain infrastructure, and technical systems may fail, contain bugs, or be exploited.',
      details: [
        'Smart contract bugs or vulnerabilities may result in total loss of funds',
        'Solana blockchain outages, congestion, or forks may disrupt token functionality',
        'Wallet software bugs may cause loss of access to tokens',
        'Private key loss or theft results in permanent, irreversible loss of tokens',
        'Security audits reduce but do not eliminate technical risks'
      ]
    },
    {
      icon: FiShield,
      title: 'Regulatory & Legal Risk',
      description: 'Cryptocurrency regulatory landscape is uncertain and evolving. Future regulations may materially impact $PRICKO.',
      details: [
        '$PRICKO has not been registered with the SEC or any regulatory authority',
        'Regulatory classification (utility vs. security) is uncertain and may change',
        'Future regulations may prohibit, restrict, or heavily regulate token ownership',
        'Tax treatment is uncertain and may result in unexpected tax liabilities',
        'Legal disputes, enforcement actions, or lawsuits may occur',
        'Geographic restrictions may be implemented, blocking access from certain jurisdictions'
      ]
    },
    {
      icon: FiFileText,
      title: 'Product Delivery Risk',
      description: 'Roadmap features, product launches, and development timelines are estimates and not guarantees.',
      details: [
        'Products marked "in development" may be delayed, cancelled, or modified',
        'GeckoCore Protocol development may take longer than projected or fail entirely',
        'Technical challenges may prevent implementation of planned features',
        'Market conditions may change strategic priorities',
        'No guarantee that all 8 products will launch as described',
        'Forward-looking statements are subject to change without notice'
      ]
    },
    {
      icon: FiUsers,
      title: 'Team & Execution Risk',
      description: 'Team capacity, funding, and execution ability may impact project success.',
      details: [
        'Team may lack resources, expertise, or capacity to deliver roadmap',
        'Key team members may leave the project',
        'Funding may run out before product completion',
        'Competing priorities or projects may divert attention',
        'No employment contracts or binding commitments from team',
        'Project may be abandoned if unforeseen circumstances arise'
      ]
    },
    {
      icon: FiGlobe,
      title: 'Liquidity & Exchange Risk',
      description: 'Ability to buy or sell tokens is not guaranteed and depends on exchange availability.',
      details: [
        'Tokens may not be listed on major exchanges',
        'Low trading volume may prevent ability to sell without significant price impact',
        'Exchanges may delist $PRICKO at any time',
        'Withdrawal or trading may be suspended during market stress',
        'Decentralized exchanges (DEXs) may have low liquidity or high slippage',
        'No guarantee of continuous market access'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Risk Disclosure - PRICKO Token"
        description="Important risk disclosures for $PRICKO token holders. Understand market volatility, technology, regulatory, product delivery, and liquidity risks before purchasing."
        keywords="risk disclosure, cryptocurrency risk, token risk, investment risk, PRICKO risks"
        canonicalUrl="/risk-disclosure"
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <Breadcrumb currentPage="Risk Disclosure" />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

          <Container size="xl" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItemVariants}>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
                >
                  <FiArrowLeft /> Back to Home
                </Link>
              </motion.div>

              <motion.div variants={staggerItemVariants} className="text-center max-w-4xl mx-auto">
                <Badge variant="live" size="lg" className="mb-6 bg-red-500/20 border-red-500/30 text-red-400">
                  <FiAlertTriangle className="mr-1" />
                  High-Risk Warning
                </Badge>
                
                <h1 className="text-display-md font-black mb-6">
                  <span className="gradient-text">Risk Disclosure</span>
                </h1>
                
                <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                  Purchasing $PRICKO tokens involves substantial financial risk. Please read and understand all risks before acquiring tokens.
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Critical Warning Box */}
        <section className="py-8">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="outlined" className="bg-red-500/10 border-2 border-red-500/30">
                <h2 className="text-2xl font-bold text-red-400 mb-4 text-center">
                  READ THIS FIRST
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p className="text-lg">{INVESTMENT_RISK_DISCLAIMER}</p>
                  <div className="border-t border-red-500/20 pt-4 mt-4">
                    <p className="text-sm text-red-200">
                      <strong>By purchasing $PRICKO tokens, you acknowledge:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-red-200 space-y-1 mt-2 ml-4">
                      <li>You have read and understood all risks disclosed on this page</li>
                      <li>You accept full responsibility for your purchase decision</li>
                      <li>You are purchasing tokens at your own risk</li>
                      <li>No guarantee of utility, value, or product delivery is provided</li>
                      <li>You may lose 100% of funds invested</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* Detailed Risk Sections */}
        <section className="py-12">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-h1 font-bold text-white mb-4">
                Detailed <span className="gradient-text">Risk Categories</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {risks.map((risk) => {
                const Icon = risk.icon;
                return (
                  <motion.div key={risk.title} variants={staggerItemVariants}>
                    <Card variant="glass" className="border-white/10 hover:border-accent/20 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-accent text-2xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{risk.title}</h3>
                          <p className="text-muted">{risk.description}</p>
                        </div>
                      </div>

                      <div className="ml-16 space-y-2">
                        {risk.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <span className="text-accent text-sm mt-1">•</span>
                            <p className="text-sm text-gray-300">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </section>

        {/* Additional Warnings Section */}
        <section className="py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />
          <Container size="lg" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-8">
                <h2 className="text-h2 font-bold text-white">
                  Additional <span className="gradient-text">Warnings</span>
                </h2>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">No Guarantee of Returns</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    $PRICKO tokens are NOT an investment and carry NO promise of returns, profits, or gains.
                    Token value is not guaranteed and may decrease to zero. Past performance of other tokens
                    does not predict $PRICKO performance.
                  </p>
                  <p className="text-sm text-yellow-300">
                    If you are purchasing tokens with the expectation of profit, you should NOT purchase $PRICKO.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Not Financial Advice</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Nothing on this website constitutes financial, investment, tax, or legal advice. We are NOT
                    financial advisors, investment advisors, or broker-dealers. You should consult with qualified
                    professionals before making any financial decisions.
                  </p>
                  <p className="text-sm text-yellow-300">
                    Do Your Own Research (DYOR). Independently verify all information before purchasing.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">No Professional Relationship</h3>
                  <p className="text-muted leading-relaxed">
                    No advisory, fiduciary, or professional relationship is created by visiting this website or
                    purchasing tokens. You are solely responsible for your own decisions and their consequences.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Irreversible Transactions</h3>
                  <p className="text-muted leading-relaxed">
                    Blockchain transactions are final and irreversible. Once tokens are purchased or transferred,
                    there is NO way to reverse the transaction. Lost private keys result in permanent loss of
                    access to tokens.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card variant="elevated" className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About Risks?</h2>
                <p className="text-muted mb-6">
                  If you have questions about any risks disclosed on this page, please consult with
                  legal or financial professionals before purchasing tokens.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary">Contact Support</Button>
                  </Link>
                  <Link to="/terms">
                    <Button variant="ghost">Read Terms of Service</Button>
                  </Link>
                </div>
              </Card>

              <p className="text-sm text-muted mt-8">Last Updated: November 2025</p>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default RiskDisclosurePage;
