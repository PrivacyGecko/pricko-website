import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaWallet, FaExchangeAlt, FaCheckCircle, FaTwitter } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import MascotImage from '../components/ui/MascotImage';
import SecurityBadge from '../components/ui/SecurityBadge';
import ProgressBar from '../components/ui/ProgressBar';

const HowToBuyPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-launch: Show waitlist form
  // Post-launch: Show actual buying guide
  // Automatically switches on November 1, 2025
  const isPreLaunch = new Date() < new Date('2025-11-01');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual waitlist API/service
    console.log('Waitlist signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const buyingSteps = [
    {
      number: 1,
      title: "Get a Solana Wallet",
      description: "Download and install a Solana wallet like Phantom, Solflare, or Backpack. These are browser extensions or mobile apps that securely store your crypto.",
      icon: <FaWallet className="text-4xl text-accent" />,
      link: "https://phantom.app",
      linkText: "Get Phantom Wallet"
    },
    {
      number: 2,
      title: "Fund Your Wallet with SOL",
      description: "Purchase SOL from a centralized exchange (Coinbase, Binance, Kraken) and transfer it to your Solana wallet address. You'll need SOL for transaction fees and to swap for $PRICKO.",
      icon: <FaExchangeAlt className="text-4xl text-accent" />,
      link: "https://www.coinbase.com/price/solana",
      linkText: "Buy SOL"
    },
    {
      number: 3,
      title: "Visit pump.fun",
      description: "Navigate to pump.fun and search for $PRICKO token. Connect your Solana wallet when prompted. Make sure you're on the official pump.fun site to avoid scams.",
      icon: <FaRocket className="text-4xl text-accent" />,
      link: "https://pump.fun",
      linkText: "Go to pump.fun"
    },
    {
      number: 4,
      title: "Swap SOL for $PRICKO",
      description: "Enter the amount of SOL you want to swap for $PRICKO tokens. Review the transaction details, including slippage and fees, then confirm the swap in your wallet.",
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      link: null,
      linkText: null
    }
  ];

  return (
    <>
      <SEO
        title="How to Buy $PRICKO Token - Step-by-Step Guide | PRICKO"
        description="Learn how to buy $PRICKO tokens on pump.fun. Complete step-by-step guide with wallet setup, buying SOL, and swapping for $PRICKO. Fair launch on Solana."
        keywords="buy PRICKO, pump.fun, Solana token, how to buy crypto, PRICKO token, memecoin purchase guide"
        canonicalUrl="/how-to-buy"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
        <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <MascotImage size="md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Buy <span className="gradient-text">$PRICKO</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {isPreLaunch
              ? "Token launches November 2025. Join waitlist for early access and exclusive launch benefits."
              : "Follow these simple steps to acquire $PRICKO tokens and join the privacy revolution"
            }
          </p>
        </motion.div>

        {isPreLaunch ? (
          /* PRE-LAUNCH: Waitlist Form */
          <>
            <motion.section
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-glass bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="gradient-text">Token Launch Coming Soon</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    $PRICKO will launch on pump.fun with a fair distribution model.
                    Be among the first to know when we go live!
                  </p>
                </div>

                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <FaCheckCircle /> Added to Waitlist!
                      </span>
                    ) : (
                      'Join Launch Waitlist'
                    )}
                  </motion.button>
                </form>

                <p className="text-sm text-muted text-center mt-4">
                  We'll only email you about the token launch. No spam, ever.
                </p>
              </div>
            </motion.section>

            {/* What to Expect Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">What to Expect at Launch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="card-interactive text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Fair Launch</h3>
                  <p className="text-muted leading-relaxed">
                    No presales, no whitelists. Everyone gets the same opportunity to buy at launch.
                  </p>
                </motion.div>
                <motion.div 
                  className="card-interactive text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Instant Trading</h3>
                  <p className="text-muted leading-relaxed">
                    80% of supply goes to liquidity pool for immediate trading on pump.fun.
                  </p>
                </motion.div>
                <motion.div 
                  className="card-interactive text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl mb-4">🔐</div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Utility Access</h3>
                  <p className="text-muted leading-relaxed">
                    Start using tokens immediately for premium features in privacy tools.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Prepare Now Section with SecurityBadge */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Prepare Now</h2>
              <p className="text-center text-muted mb-8 max-w-2xl mx-auto">
                Get ready for launch day by setting up your wallet and learning the basics
              </p>

              {/* Security Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <SecurityBadge
                  variant="verified"
                  title="Verified Launch"
                  description="Official pump.fun launch with transparent distribution"
                  delay={0.1}
                />
                <SecurityBadge
                  variant="encryption"
                  title="Secure Wallets"
                  description="Use trusted Solana wallets with proven security"
                  delay={0.2}
                />
                <SecurityBadge
                  variant="audit"
                  title="Smart Contract"
                  description="Audited token contracts for safe trading"
                  delay={0.3}
                />
                <SecurityBadge
                  variant="open-source"
                  title="Transparent"
                  description="Open tokenomics and fair distribution model"
                  delay={0.4}
                />
              </div>

              {/* Step-by-Step Preparation Progress */}
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-8 text-center">Launch Readiness Checklist</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">1️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-accent">Set Up Your Wallet</h3>
                      <p className="text-muted mb-3">
                        Download Phantom, Solflare, or Backpack wallet and create your account.
                        Save your seed phrase securely.
                      </p>
                      <ProgressBar value={0} label="Wallet Setup" color="cyan" height="sm" />
                      <a
                        href="https://phantom.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2 mt-3"
                      >
                        Get Phantom Wallet <FaWallet />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">2️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-accent">Get Some SOL</h3>
                      <p className="text-muted mb-3">
                        Buy SOL on Coinbase, Binance, or Kraken and transfer it to your wallet.
                        You'll need SOL to buy $PRICKO.
                      </p>
                      <ProgressBar value={0} label="SOL Acquisition" color="purple" height="sm" />
                      <a
                        href="https://www.coinbase.com/price/solana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2 mt-3"
                      >
                        Buy SOL <FaExchangeAlt />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">3️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-accent">Join Our Community</h3>
                      <p className="text-muted mb-3">
                        Follow us on Twitter/X for launch announcements and stay connected with the community.
                      </p>
                      <ProgressBar value={0} label="Community Engagement" color="info" height="sm" />
                      <a
                        href="https://twitter.com/PRICKOtoken"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2 mt-3"
                      >
                        Follow on X <FaTwitter />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">4️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-accent">Learn About pump.fun</h3>
                      <p className="text-muted mb-3">
                        Familiarize yourself with the pump.fun platform before launch day.
                      </p>
                      <ProgressBar value={0} label="Platform Knowledge" color="success" height="sm" />
                      <a
                        href="https://pump.fun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2 mt-3"
                      >
                        Visit pump.fun <FaRocket />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </>
        ) : (
          /* POST-LAUNCH: Actual Buying Guide */
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Buying Guide</h2>
              
              {/* Overall Progress Visualization */}
              <div className="mb-12">
                <ProgressBar 
                  value={0} 
                  label="Your Progress" 
                  color="accent" 
                  height="lg" 
                  showPercentage={true}
                />
              </div>

              <div className="space-y-8">
                {buyingSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="card-interactive hover:border-accent/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent">
                          <span className="text-2xl font-bold text-accent">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3 text-accent">{step.title}</h3>
                        <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                        
                        {/* Step Progress */}
                        <div className="mb-4">
                          <ProgressBar 
                            value={(step.number / buyingSteps.length) * 100} 
                            showPercentage={false}
                            color="accent"
                            height="sm"
                          />
                        </div>

                        {step.link && step.linkText && (
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                          >
                            {step.linkText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Important Tips Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Important Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="card-interactive bg-blue-500/10 border border-blue-500/30"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Secure Your Wallet</h3>
                  <p className="text-sm text-gray-300">
                    Never share your seed phrase with anyone. Write it down and store it securely offline.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card-interactive bg-yellow-500/10 border border-yellow-500/30"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Verify Contract Address</h3>
                  <p className="text-sm text-gray-300">
                    Always verify the official $PRICKO contract address on our website to avoid scams.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card-interactive bg-green-500/10 border border-green-500/30"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Start Small</h3>
                  <p className="text-sm text-gray-300">
                    Only invest what you can afford to lose. Test with a small amount first.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card-interactive bg-purple-500/10 border border-purple-500/30"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Watch Slippage</h3>
                  <p className="text-sm text-gray-300">
                    Set appropriate slippage tolerance (usually 1-5%) to ensure your trade goes through.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Learn More CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Explore our tokenomics, roadmap, and privacy tools to understand the full value proposition of $PRICKO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tokenomics">
              <motion.button
                className="btn-primary px-8 py-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tokenomics
              </motion.button>
            </Link>
            <Link to="/tools">
              <motion.button
                className="btn-secondary px-8 py-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Privacy Tools
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Risk Disclaimer */}
        <motion.div
          className="mt-16 bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Risk Disclaimer</h3>
              <p className="text-gray-300 leading-relaxed">
                Cryptocurrency investments carry significant risk. The value of $PRICKO tokens may fluctuate dramatically.
                Never invest more than you can afford to lose. This page provides educational information only and does
                not constitute financial advice. Always conduct your own research (DYOR) before making any investment
                decisions. Be aware of scams and only use official links from our verified social media accounts and website.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default HowToBuyPage;
