import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import MascotImage from '../components/ui/MascotImage';
import { Button, Card, Badge, Container } from '../design-system';
import { cn } from '../design-system/utils/cn';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../design-system/animations/framer-variants';
import {
  FaRocket,
  FaEye,
  FaShieldAlt,
  FaUsers,
  FaServer,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiCurrencyDollar } from 'react-icons/hi';
import ContractAddress from '../components/ui/ContractAddress';
import UtilityTierCard from '../components/ui/UtilityTierCard';
import TokenDistributionDonut from '../components/ui/TokenDistributionDonut';
import DistributionBreakdown from '../components/ui/DistributionBreakdown';
import VestingTimeline from '../components/ui/VestingTimeline';
import ProgressBar from '../components/ui/ProgressBar';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { TokenDistribution } from '../types/config';

const TokenomicsPageModern: React.FC = () => {
  const { config, getTokenDisclaimer } = useProjectConfig();

  useEffect(() => {
    if (window.location.hash === '#protocol') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(() => {
        const element = document.getElementById('protocol');
        element?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const tokenomicsData = {
    totalSupply: config.token.totalSupply,
    distribution: Object.values(config.token.distribution).map((item: TokenDistribution) => ({
      category: item.description.split(' ')[0] === 'Fair' ? 'Community & Market' :
                 item.description.includes('Locked liquidity') ? 'Liquidity Pool' :
                 item.description.includes('ecosystem growth') ? 'Development' :
                 item.description.includes('Community growth') ? 'Marketing' : 'Team',
      percentage: item.percentage,
      amount: item.amount,
      description: item.description
    }))
  };

  const utilityTiers = [
    {
      tier: 1,
      name: "Free Access",
      tokenRequirement: "No tokens required",
      description: "Experience basic privacy products at no cost",
      features: ["Basic privacy scanning", "Limited file sharing (1GB, 24hr)", "Standard ad blocking", "Community access"],
      badge: "Free",
      color: "zinc" as const
    },
    {
      tier: 2,
      name: "Token Holder",
      tokenRequirement: "Hold 10,000+ $PRICKO",
      description: "Unlock premium features across all tools",
      features: ["Unlimited file sizes & persistent vault", "Advanced threat detection", "Premium stealth modes", "Priority support"],
      badge: "Premium",
      color: "accent" as const
    },
    {
      tier: 3,
      name: "Staker",
      tokenRequirement: "Stake 50,000+ $PRICKO",
      description: "Enhanced benefits for long-term commitment",
      features: ["All Token Holder benefits", "Staking rewards", "Early access to beta features", "Exclusive community channels"],
      badge: "Staker",
      color: "accent-hover" as const
    },
    {
      tier: 4,
      name: "Governance",
      tokenRequirement: "100,000+ $PRICKO staked",
      description: "Shape the future of Privacy Gecko",
      features: ["All Staker benefits", "Vote on roadmap priorities", "Propose new features", "Direct team communication"],
      badge: "Elite",
      color: "yellow" as const
    }
  ];

  const distributionAllocations = [
    { category: 'Public Sale', percentage: config.token.distribution.publicSale.percentage, amount: config.token.distribution.publicSale.amount, description: config.token.distribution.publicSale.description, color: '#06b6d4' },
    { category: 'Liquidity Pool', percentage: config.token.distribution.liquidityPool.percentage, amount: config.token.distribution.liquidityPool.amount, description: config.token.distribution.liquidityPool.description, color: '#10b981' },
    { category: 'Development', percentage: config.token.distribution.development.percentage, amount: config.token.distribution.development.amount, description: config.token.distribution.development.description, vestingSchedule: config.token.distribution.development.vestingSchedule, color: '#8b5cf6' },
    { category: 'Marketing', percentage: config.token.distribution.marketing.percentage, amount: config.token.distribution.marketing.amount, description: config.token.distribution.marketing.description, color: '#f59e0b' },
    { category: 'Team', percentage: config.token.distribution.team.percentage, amount: config.token.distribution.team.amount, description: config.token.distribution.team.description, vestingSchedule: config.token.distribution.team.vestingSchedule, color: '#ec4899' },
  ];

  const vestingPeriods = [
    { category: 'Development', vestingPeriod: '2-year linear vesting', color: '#8b5cf6', description: 'Tokens released gradually over 24 months to fund continuous product development.' },
    { category: 'Team', lockPeriod: '12-month lock', vestingPeriod: '18-month vesting', color: '#ec4899', description: 'Initial 1-year lock followed by 18-month gradual release for team commitment.' },
  ];

  return (
    <>
      <SEO
        title="$PRICKO Tokenomics - Fair Launch & Token Distribution | PRICKO"
        description="$PRICKO tokenomics: 1B total supply, 80% community via pump.fun fair launch, 20% development. Utility token for privacy products on Solana."
        keywords="PRICKO tokenomics, pump.fun launch, Solana token, utility token, fair launch"
        canonicalUrl="/tokenomics"
      />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <Container size="xl" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div variants={staggerItemVariants} className="mb-8">
                <MascotImage size="lg" className="mx-auto" />
              </motion.div>

              <motion.h1 variants={staggerItemVariants} className="text-display-md font-black mb-6">
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  $PRICKO
                </span>{' '}
                Tokenomics
              </motion.h1>

              <motion.p variants={staggerItemVariants} className="text-xl text-muted max-w-3xl mx-auto">
                A utility-first token economy designed to power Privacy Gecko's ecosystem of privacy products.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Token Overview Stats */}
        <section className="relative py-16">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Supply', value: tokenomicsData.totalSupply, sub: '$PRICKO Tokens', icon: HiCurrencyDollar },
                  { label: 'Blockchain', value: config.token.blockchain, sub: 'Fast & Low Cost', icon: HiLightningBolt },
                  { label: 'Token Type', value: 'Utility', sub: 'Privacy Products Access', icon: HiSparkles },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} variants={staggerItemVariants}>
                      <Card variant="glass" hoverable className="text-center">
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-accent mb-2">{stat.label}</h3>
                        <p className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</p>
                        <p className="text-muted text-sm">{stat.sub}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Distribution Breakdown */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-secondary/30 to-zinc-950/50" />
          <Container size="lg" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <Badge variant="live" size="lg" className="mb-4">Transparent Allocation</Badge>
                <h2 className="text-h1 font-bold text-white mb-4">Distribution Breakdown</h2>
              </motion.div>

              <motion.div variants={staggerItemVariants} className="space-y-4">
                {[
                  { key: 'publicSale', label: 'Public Sale', color: 'cyan' as const },
                  { key: 'liquidityPool', label: 'Liquidity Pool', color: 'success' as const },
                  { key: 'development', label: 'Development', color: 'purple' as const },
                  { key: 'marketing', label: 'Marketing', color: 'warning' as const },
                  { key: 'team', label: 'Team', color: 'accent' as const },
                ].map((item, index) => {
                  const dist = config.token.distribution[item.key as keyof typeof config.token.distribution];
                  return (
                    <Card key={item.key} variant="glass" className="bg-black/30">
                      <ProgressBar
                        value={dist.percentage}
                        label={`${item.label}: ${dist.percentage}%`}
                        showPercentage={true}
                        color={item.color}
                        animated={true}
                        delay={index * 0.1}
                      />
                      <p className="text-muted text-sm mt-3">{dist.description}</p>
                    </Card>
                  );
                })}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Visual Donut Chart */}
        <section className="relative py-16">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <h2 className="text-h1 font-bold mb-12 text-center text-white">Visual Overview</h2>
              <TokenDistributionDonut
                totalSupply={tokenomicsData.totalSupply}
                allocations={[
                  { category: 'Public Sale', percentage: config.token.distribution.publicSale.percentage, amount: config.token.distribution.publicSale.amount, description: config.token.distribution.publicSale.description, color: '#06b6d4', hoverColor: '#22d3ee' },
                  { category: 'Liquidity Pool', percentage: config.token.distribution.liquidityPool.percentage, amount: config.token.distribution.liquidityPool.amount, description: config.token.distribution.liquidityPool.description, color: '#10b981', hoverColor: '#34d399' },
                  { category: 'Development', percentage: config.token.distribution.development.percentage, amount: config.token.distribution.development.amount, description: config.token.distribution.development.description, vestingSchedule: config.token.distribution.development.vestingSchedule, color: '#8b5cf6', hoverColor: '#a78bfa' },
                  { category: 'Marketing', percentage: config.token.distribution.marketing.percentage, amount: config.token.distribution.marketing.amount, description: config.token.distribution.marketing.description, color: '#f59e0b', hoverColor: '#fbbf24' },
                  { category: 'Team', percentage: config.token.distribution.team.percentage, amount: config.token.distribution.team.amount, description: config.token.distribution.team.description, vestingSchedule: config.token.distribution.team.vestingSchedule, color: '#ec4899', hoverColor: '#f472b6' },
                ]}
              />
            </motion.div>
          </Container>
        </section>

        {/* Distribution & Vesting Details */}
        <section className="relative py-16">
          <Container size="xl">
            <DistributionBreakdown allocations={distributionAllocations} delay={0.2} />
            <VestingTimeline periods={vestingPeriods} delay={0.3} />
          </Container>
        </section>

        {/* 4-Tier Utility Model */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
          <Container size="xl" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <Badge variant="coming-soon" size="lg" className="mb-4">Utility Model</Badge>
                <h2 className="text-h1 font-bold text-white mb-4">
                  How $PRICKO Works: <span className="text-accent">4-Tier System</span>
                </h2>
                <p className="text-muted max-w-3xl mx-auto">
                  $PRICKO unlocks features across our privacy products. The more you hold, the more you access.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {utilityTiers.map((tier, index) => (
                  <motion.div key={tier.tier} variants={staggerItemVariants}>
                    <UtilityTierCard {...tier} delay={index * 0.1} />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="bg-blue-500/10 border-blue-500/30 max-w-3xl mx-auto">
                  <div className="flex items-start gap-4">
                    <FaShieldAlt className="text-blue-400 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-300 mb-2">Utility-First Design</h4>
                      <p className="text-sm text-gray-300">
                        Each tier grants specific capabilities within Privacy Gecko tools. You're not buying an investment - you're unlocking features.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Fair Launch Section */}
        <section className="relative py-16">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
                  <div className="text-center mb-8">
                    <Badge variant="live" size="lg" className="mb-4">pump.fun</Badge>
                    <h2 className="text-h2 font-bold text-white mb-4">Fair Launch</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                      $PRICKO launched on pump.fun with completely fair distribution - no presales, no whitelists.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: '⚖️', title: 'Fair Launch', desc: 'No presales or private rounds' },
                      { icon: '🚀', title: 'Instant Liquidity', desc: 'Trade immediately on Raydium' },
                      { icon: '🔒', title: 'Community Owned', desc: '80% to market, 20% to devs' },
                    ].map((item) => (
                      <div key={item.title} className="text-center p-4 bg-black/30 rounded-xl">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-muted text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* GeckoCore Protocol Section */}
        <section id="protocol" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-cyan-500/5 to-zinc-950/50" />
          <Container size="lg" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <Badge variant="coming-soon" size="lg" className="mb-4">Q2 2026</Badge>
                <h2 className="text-h1 font-bold text-white mb-4">
                  Future Utility: <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">GeckoCore Protocol</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Beyond today's live products, $PRICKO will power a decentralized privacy protocol.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FaRocket, title: 'Token Staking', desc: 'Stake $PRICKO to earn rewards and participate in governance.', color: 'cyan' },
                  { icon: FaUsers, title: 'Governance (GeckoDAO)', desc: 'Vote on protocol upgrades and treasury allocation.', color: 'purple' },
                  { icon: FaServer, title: 'Node Operation', desc: 'Run privacy verification nodes and earn $PRICKO rewards.', color: 'green' },
                ].map((item) => {
                  const Icon = item.icon;
                  const colorClasses = {
                    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
                    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
                    green: 'bg-green-500/10 border-green-500/30 text-green-400',
                  }[item.color];
                  return (
                    <motion.div key={item.title} variants={staggerItemVariants}>
                      <Card variant="glass" hoverable className={cn('h-full', colorClasses.split(' ')[0], colorClasses.split(' ')[1])}>
                        <Icon className={cn('w-8 h-8 mb-4', colorClasses.split(' ')[2])} />
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-muted text-sm">{item.desc}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={staggerItemVariants} className="text-center mt-8">
                <Link to="/ecosystem">
                  <Button variant="secondary" size="lg" rightIcon={<FaArrowRight />}>
                    Learn More About GeckoCore
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Contract Address */}
        <section className="relative py-16">
          <Container size="md">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <ContractAddress />
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="text-center"
            >
              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-accent/20">
                  <h2 className="text-h2 font-bold mb-6">Ready to Join the Privacy Revolution?</h2>
                  <p className="text-muted mb-8 max-w-2xl mx-auto">
                    $PRICKO is live with a fair distribution model. Join our community to participate in the ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/how-to-buy">
                      <Button variant="primary" size="lg" leftIcon={<FaRocket />}>
                        Buy $PRICKO
                      </Button>
                    </Link>
                    <Link to="/roadmap">
                      <Button variant="secondary" size="lg" leftIcon={<FaEye />}>
                        View Roadmap
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Risk Disclosure */}
        <section className="relative py-16">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <Card variant="glass" className="bg-red-500/5 border-red-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <FaShieldAlt className="text-red-400 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-300 mb-2">Risk Disclosures</h2>
                    <p className="text-gray-300 text-sm">
                      Before acquiring $PRICKO tokens, carefully review these important risks:
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <FaExclamationTriangle className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                    <p className="text-gray-200 text-sm">
                      <strong>$PRICKO is a utility token for accessing Privacy Gecko services.</strong> It is NOT an investment vehicle.
                      Token value may fluctuate or decline to zero. Purchase only if you intend to use Privacy Gecko tools.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {[
                    { title: 'Market Risks', items: ['Highly volatile markets', 'Value can decline to zero', 'No liquidity guarantees'] },
                    { title: 'Development Risks', items: ['Timelines may change', 'Features may be modified', 'No guarantees on growth'] },
                    { title: 'Regulatory Risks', items: ['Regulations vary by jurisdiction', 'Future actions may impact utility', 'Compliance is your responsibility'] },
                    { title: 'Utility Risks', items: ['Not an investment vehicle', 'Technical risks exist', 'No profit expectations'] },
                  ].map((section) => (
                    <div key={section.title}>
                      <h4 className="font-bold text-red-300 mb-2">{section.title}</h4>
                      <ul className="space-y-1 text-gray-300">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-red-500/20">
                  {getTokenDisclaimer('tokenomics')}
                </p>
              </Card>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default TokenomicsPageModern;
