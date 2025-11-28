import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import CornerMascot from '../components/ui/CornerMascot';
import { Button, Card, Badge, Container } from '../design-system';
import { ShaderBackground } from '../components/shaders';
import { cn } from '../design-system/utils/cn';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../design-system/animations/framer-variants';
import {
  FaRocket,
  FaWallet,
  FaExchangeAlt,
  FaCheckCircle,
  FaTwitter,
  FaArrowRight,
  FaShieldAlt,
  FaLock,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';

const HowToBuyPageModern: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isPreLaunch = new Date() < new Date('2025-11-01');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      title: 'Get a Solana Wallet',
      description: 'Download Phantom, Solflare, or Backpack. These securely store your crypto.',
      icon: FaWallet,
      link: 'https://phantom.app',
      linkText: 'Get Phantom Wallet',
      color: 'accent',
    },
    {
      number: 2,
      title: 'Fund with SOL',
      description: 'Buy SOL on Coinbase, Binance, or Kraken and transfer to your wallet.',
      icon: FaExchangeAlt,
      link: 'https://www.coinbase.com/price/solana',
      linkText: 'Buy SOL',
      color: 'cyan',
    },
    {
      number: 3,
      title: 'Visit pump.fun',
      description: 'Search for $PRICKO and connect your wallet. Verify you\'re on official site.',
      icon: FaRocket,
      link: 'https://pump.fun',
      linkText: 'Go to pump.fun',
      color: 'purple',
    },
    {
      number: 4,
      title: 'Swap for $PRICKO',
      description: 'Enter SOL amount, review slippage and fees, confirm in your wallet.',
      icon: FaCheckCircle,
      link: null,
      linkText: null,
      color: 'accent',
    },
  ];

  const tips = [
    { icon: FaLock, title: 'Secure Your Wallet', desc: 'Never share your seed phrase with anyone.', color: 'blue' },
    { icon: FaExclamationTriangle, title: 'Verify Contract', desc: 'Always verify the official $PRICKO address.', color: 'yellow' },
    { icon: HiLightningBolt, title: 'Start Small', desc: 'Only invest what you can afford to lose.', color: 'green' },
    { icon: FaExchangeAlt, title: 'Watch Slippage', desc: 'Set 1-5% slippage for successful trades.', color: 'purple' },
  ];

  return (
    <>
      <SEO
        title="How to Buy $PRICKO Token - Step-by-Step Guide | PRICKO"
        description="Learn how to buy $PRICKO tokens on pump.fun. Complete step-by-step guide with wallet setup."
        keywords="buy PRICKO, pump.fun, Solana token, how to buy crypto"
        canonicalUrl="/how-to-buy"
      />
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 overflow-hidden">
          {/* GPU-Accelerated Shader Background */}
          <ShaderBackground
            variant="hero"
            className="absolute inset-0"
            overlayOpacity={0.4}
            lazy={false}
          />

          <Container size="xl" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1 variants={staggerItemVariants} className="text-display-md font-black mb-6">
                How to Buy{' '}
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  $PRICKO
                </span>
              </motion.h1>

              <motion.p variants={staggerItemVariants} className="text-xl text-muted max-w-2xl mx-auto">
                {isPreLaunch
                  ? 'Token launches November 2025. Join waitlist for early access.'
                  : 'Follow these simple steps to join the privacy revolution'}
              </motion.p>
            </motion.div>
          </Container>

          {/* Corner Mascot */}
          <CornerMascot size="md" greeting="Ready to buy? 🦎" />
        </section>

        {isPreLaunch ? (
          <>
            {/* Pre-Launch Waitlist */}
            <section className="relative py-10">
              <Container size="md">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainerVariants}
                >
                  <motion.div variants={staggerItemVariants}>
                    <Card variant="glass" className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
                      <div className="text-center mb-8">
                        <div className="text-6xl mb-4">🚀</div>
                        <h2 className="text-3xl font-bold mb-4">
                          <span className="gradient-text">Token Launch Coming Soon</span>
                        </h2>
                        <p className="text-gray-300">
                          $PRICKO will launch on pump.fun with fair distribution. Be first to know!
                        </p>
                      </div>

                      <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-4 bg-black/50 border border-white/10 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-white"
                          placeholder="your.email@example.com"
                        />
                        <Button
                          variant="primary"
                          size="xl"
                          fullWidth
                          disabled={isSubmitted}
                          type="submit"
                        >
                          {isSubmitted ? (
                            <><FaCheckCircle className="mr-2" /> Added to Waitlist!</>
                          ) : (
                            'Join Launch Waitlist'
                          )}
                        </Button>
                      </form>
                      <p className="text-sm text-muted text-center mt-4">
                        No spam, only launch updates.
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              </Container>
            </section>

            {/* What to Expect */}
            <section className="relative py-10">
              <Container size="xl">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainerVariants}
                >
                  <motion.div variants={fadeUpVariants} className="text-center mb-12">
                    <h2 className="text-h1 font-bold text-white mb-4">What to Expect</h2>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { emoji: '⚖️', title: 'Fair Launch', desc: 'No presales, no whitelists. Equal opportunity.' },
                      { emoji: '🚀', title: 'Instant Trading', desc: '80% of supply goes to liquidity pool.' },
                      { emoji: '🔐', title: 'Utility Access', desc: 'Immediate premium features access.' },
                    ].map((item, index) => (
                      <motion.div key={item.title} variants={staggerItemVariants}>
                        <Card variant="glass" hoverable className="text-center h-full">
                          <div className="text-5xl mb-4">{item.emoji}</div>
                          <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                          <p className="text-muted">{item.desc}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Container>
            </section>

            {/* Preparation Steps */}
            <section className="relative py-10">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-secondary/30 to-zinc-950/50" />
              <Container size="xl" className="relative z-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainerVariants}
                >
                  <motion.div variants={fadeUpVariants} className="text-center mb-12">
                    <h2 className="text-h1 font-bold text-white mb-4">Prepare Now</h2>
                    <p className="text-muted">Get ready before launch day</p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {buyingSteps.slice(0, 2).map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <motion.div key={step.number} variants={staggerItemVariants}>
                          <Card variant="glass" hoverable className="h-full">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-7 h-7 text-accent" />
                              </div>
                              <div>
                                <Badge variant="live" size="sm" className="mb-2">Step {step.number}</Badge>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-muted mb-4">{step.description}</p>
                                {step.link && (
                                  <a href={step.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="sm" rightIcon={<FaArrowRight />}>
                                      {step.linkText}
                                    </Button>
                                  </a>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Container>
            </section>
          </>
        ) : (
          /* Post-Launch: Full Buying Guide */
          <section className="relative py-10">
            <Container size="lg">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
              >
                <motion.div variants={fadeUpVariants} className="text-center mb-12">
                  <h2 className="text-h1 font-bold text-white mb-4">Step-by-Step Guide</h2>
                </motion.div>

                <div className="space-y-6">
                  {buyingSteps.map((step, index) => {
                    const Icon = step.icon;
                    const colorClasses = {
                      accent: 'border-accent/30 hover:border-accent/50',
                      cyan: 'border-cyan-500/30 hover:border-cyan-500/50',
                      purple: 'border-purple-500/30 hover:border-purple-500/50',
                    }[step.color];

                    return (
                      <motion.div key={step.number} variants={staggerItemVariants}>
                        <Card variant="glass" hoverable className={cn('transition-colors', colorClasses)}>
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border-2 border-accent">
                                <span className="text-2xl font-black text-accent">{step.number}</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Icon className="w-6 h-6 text-accent" />
                                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                              </div>
                              <p className="text-muted mb-4">{step.description}</p>
                              {step.link && (
                                <a href={step.link} target="_blank" rel="noopener noreferrer">
                                  <Button variant="secondary" size="sm" rightIcon={<FaArrowRight />}>
                                    {step.linkText}
                                  </Button>
                                </a>
                              )}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Important Tips */}
        <section className="relative py-10">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <h2 className="text-h1 font-bold text-white mb-4">Important Tips</h2>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip, index) => {
                  const Icon = tip.icon;
                  const bgColor = {
                    blue: 'from-blue-500/10 to-transparent border-blue-500/30',
                    yellow: 'from-yellow-500/10 to-transparent border-yellow-500/30',
                    green: 'from-green-500/10 to-transparent border-green-500/30',
                    purple: 'from-purple-500/10 to-transparent border-purple-500/30',
                  }[tip.color];

                  return (
                    <motion.div key={tip.title} variants={staggerItemVariants}>
                      <Card
                        variant="glass"
                        hoverable
                        className={cn('h-full bg-gradient-to-br', bgColor)}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-6 h-6 text-white/70 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-white mb-1">{tip.title}</h3>
                            <p className="text-sm text-muted">{tip.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
          <Container size="lg" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="text-center"
            >
              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-accent/20">
                  <h2 className="text-h2 font-bold mb-6">Want to Learn More?</h2>
                  <p className="text-muted mb-8 max-w-2xl mx-auto">
                    Explore our tokenomics, roadmap, and privacy products to understand the full value of $PRICKO.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/tokenomics">
                      <Button variant="primary" size="lg">View Tokenomics</Button>
                    </Link>
                    <Link to="/products">
                      <Button variant="secondary" size="lg">Explore Products</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default HowToBuyPageModern;
