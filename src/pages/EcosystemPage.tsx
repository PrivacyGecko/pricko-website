import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaExternalLinkAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { HiSparkles, HiCube, HiShieldCheck, HiCode, HiLockClosed } from 'react-icons/hi';
import Breadcrumb from '../components/common/Breadcrumb';
import { UtilityTimeline } from '../components/ui/UtilityTimeline';
import { TokenFlowDiagram } from '../components/ui/TokenFlowDiagram';
import { ProtocolArchitectureDiagram } from '../components/ui/ProtocolArchitectureDiagram';
import SecurityBadge from '../components/ui/SecurityBadge';
import ToolCardSimple from '../components/ui/ToolCardSimple';
import GeckoCoreOGImage from '../components/ui/GeckoCoreOGImage';
import SEO from '../components/common/SEO';
import { TOOLS_COUNT } from '../constants/metrics';
import { SIMPLIFIED_TOOLS } from '../constants/toolsSimplified';
import { Button, Card, Badge, Container } from '../design-system';
import { ShaderBackground, LazyShader } from '../components/shaders';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../design-system/animations/framer-variants';
import { cn } from '../design-system/utils/cn';

// ===== HERO SECTION =====
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* GPU-Accelerated Shader Background */}
      <ShaderBackground
        variant="protocol"
        className="absolute inset-0"
        overlayOpacity={0.3}
        lazy={false}
      />

      <Container size="xl" className="relative z-10 py-20">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={staggerItemVariants} className="mb-6">
            <Badge variant="protocol" size="lg">
              <HiSparkles className="mr-1" />
              Q1 2026 Development Begins
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={staggerItemVariants}
            className="text-display-lg font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Privacy Ecosystem
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={staggerItemVariants}
            className="text-h2 text-gray-300 font-semibold mb-4"
          >
            How $PRICKO Powers Real Privacy Products
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItemVariants}
            className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Privacy Gecko isn't just another memecoin. We're building a comprehensive privacy 
            ecosystem with real utility—from working products you can use today to decentralized 
            infrastructure launching in 2026.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" rightIcon={<FaExternalLinkAlt />}>
                Buy $PRICKO
              </Button>
            </a>
            <a
              href="https://dexscreener.com/solana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" rightIcon={<FaExternalLinkAlt />}>
                View on DEXScreener
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== LIVE PRODUCTS SECTION =====
const LiveProductsSection: React.FC = () => {
  const liveProducts = SIMPLIFIED_TOOLS.filter(tool => tool.status === 'live');

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold text-white mb-4">
              {TOOLS_COUNT.live} Products.{' '}
              <span className="gradient-text">Live Today.</span> Real Users.
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Proof before promises. We ship first, hype second.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveProducts.map((product, index) => (
              <motion.div key={product.id} variants={staggerItemVariants}>
                <ToolCardSimple
                  icon={product.icon}
                  title={product.name}
                  description={product.oneLiner}
                  status={product.status}
                  features={product.topFeatures}
                  url={product.url}
                  delay={index * 0.1}
                  hasAI={product.hasAI}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== WHAT IS GECKOCORE SECTION =====
const GeckoCoreSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={staggerItemVariants}>
              <Badge variant="protocol" size="md" className="mb-6">
                <HiCube className="mr-1" />
                Core Infrastructure
              </Badge>
              <h2 className="text-h1 font-bold text-white mb-6">
                What is{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  GeckoCore
                </span>
                ?
              </h2>

              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  GeckoCore is the privacy protocol with development beginning Q1 2026, 
                  with testnet launch expected in that quarter. It transforms Privacy Gecko 
                  from a suite of tools into a decentralized network. Instead of centralized 
                  servers, privacy verification happens across a distributed node network—owned 
                  and operated by the community.
                </p>

                <p>
                  $PRICKO holders become node operators, earning rewards for maintaining the 
                  infrastructure that powers privacy for millions. The protocol handles everything: 
                  encrypted file storage, privacy scanning, tracker blocking, and password 
                  management—all running on community infrastructure.
                </p>

                <p>
                  This isn't vaporware. We've already shipped 4 live products serving real users. 
                  GeckoCore is the natural evolution: taking working software and making it 
                  unstoppable through decentralization.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <p className="text-accent font-semibold">
                    $PRICKO token is required for access to premium features and node operation.
                  </p>
                  <a
                    href="https://github.com/privacy-gecko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" rightIcon={<FaArrowRight />}>
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* GeckoCore OG Image */}
            <motion.div
              variants={staggerItemVariants}
              className="h-64 lg:h-[400px] flex items-center justify-center"
            >
              <GeckoCoreOGImage />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== TRUST & SECURITY SECTION =====
const TrustSecuritySection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold text-white mb-4">
              Built on <span className="gradient-text">Trust</span> & Transparency
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Real security, real code, real team. No smoke and mirrors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={staggerItemVariants}>
              <SecurityBadge
                variant="audit"
                title="Security Audited"
                description="All live products undergo professional security audits before launch"
                delay={0.1}
              />
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <SecurityBadge
                variant="encryption"
                title="End-to-End Encryption"
                description="Military-grade encryption protects all user data and communications"
                delay={0.2}
              />
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <SecurityBadge
                variant="open-source"
                title="Open Source"
                description="100% transparent codebase available on GitHub for community review"
                delay={0.3}
              />
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <SecurityBadge
                variant="verified"
                title="Verified Team"
                description="Real team members with verified identities and track records"
                delay={0.4}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== TIMELINE SECTION =====
const TimelineSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold text-white mb-4">
              From 4 to 8:{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Roadmap
              </span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Our journey from live products to decentralized protocol
            </p>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <UtilityTimeline orientation="vertical" compact={false} />
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItemVariants} className="text-center mt-12">
            <Link to="/roadmap">
              <Button variant="secondary" size="lg" rightIcon={<FaArrowRight />}>
                View Full Roadmap
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== TOKEN FLOW SECTION =====
const TokenFlowSection: React.FC = () => {
  const flowSteps = [
    { emoji: '1', icon: FaUsers, title: 'Users', desc: 'Pay $PRICKO for premium privacy features', color: 'accent' },
    { emoji: '2', icon: HiLockClosed, title: 'Treasury', desc: 'Receives fees, funds protocol operations', color: 'cyan' },
    { emoji: '3', icon: HiCode, title: 'Operators', desc: 'Stake tokens, run nodes, earn rewards', color: 'purple' },
    { emoji: '4', icon: HiShieldCheck, title: 'Tools', desc: 'Decentralized infrastructure serves users', color: 'accent' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* GPU-Accelerated Shader Background */}
      <LazyShader
        variant="section"
        className="absolute inset-0"
        overlayOpacity={0.5}
        rootMargin="200px"
      />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold text-white mb-4">
              How $PRICKO Powers the{' '}
              <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              The circular economy that makes it all work
            </p>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <TokenFlowDiagram size="large" animated={true} showLabels={true} />
          </motion.div>

          {/* Flow Steps Explanation */}
          <motion.div
            variants={staggerContainerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {flowSteps.map((step) => {
              const colorClasses = {
                accent: 'bg-accent/10 text-accent border-accent/20',
                cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
              }[step.color];

              return (
                <motion.div key={step.title} variants={staggerItemVariants}>
                  <Card variant="outlined" hoverable className="text-center h-full">
                    <div className={cn('w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center', colorClasses)}>
                      <span className="text-lg font-bold">{step.emoji}</span>
                    </div>
                    <h3 className={cn('font-bold mb-2', 
                      step.color === 'accent' ? 'text-accent' : 
                      step.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== PROTOCOL ARCHITECTURE SECTION =====
const ProtocolArchitectureSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5" />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold text-white mb-4">
              The Foundation: How{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                GeckoCore
              </span>{' '}
              Works
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Three layers working together to protect your privacy. 
              Simplified for traders, not developers.
            </p>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <ProtocolArchitectureDiagram
              orientation="vertical"
              interactive={true}
              showConnections={true}
            />
          </motion.div>

          {/* Developer Resources Links */}
          <motion.div variants={staggerItemVariants} className="text-center mt-8 space-y-3">
            <p className="text-muted">
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
            <a
              href="https://www.privacygecko.com/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="protocol" rightIcon={<FaArrowRight />}>
                Read Full GeckoCore Whitepaper
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== VALUE PROPS & CTA SECTION =====
const ValuePropsCTASection: React.FC = () => {
  const benefits = [
    {
      icon: FaRocket,
      title: 'Real Utility',
      description: 'Token unlocks privacy products today. No waiting, no promises—just working software serving real users.',
      color: 'accent',
    },
    {
      icon: FaChartLine,
      title: 'Future Value',
      description: 'Protocol infrastructure adds more utility in 2026. Staking rewards, node operation, governance—all powered by $PRICKO.',
      color: 'cyan',
    },
    {
      icon: FaUsers,
      title: 'Community-Owned',
      description: 'Governance through GeckoDAO. Your tokens, your voice in Privacy Gecko\'s future. No VCs, no centralized control.',
      color: 'purple',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* GPU-Accelerated CTA Shader Background */}
      <LazyShader
        variant="cta"
        className="absolute inset-0"
        overlayOpacity={0.45}
        rootMargin="200px"
      />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold text-white mb-4">
              Why This <span className="gradient-text">Matters</span>
            </h2>
          </motion.div>

          {/* 3 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const colorClasses = {
                accent: 'from-accent/10 to-transparent border-accent/20 hover:border-accent/40',
                cyan: 'from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40',
                purple: 'from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-500/40',
              }[benefit.color];
              const iconColor = {
                accent: 'text-accent',
                cyan: 'text-cyan-400',
                purple: 'text-purple-400',
              }[benefit.color];

              return (
                <motion.div key={benefit.title} variants={staggerItemVariants}>
                  <Card
                    variant="glass"
                    hoverable
                    className={cn('h-full text-center bg-gradient-to-br', colorClasses)}
                  >
                    <div className="flex justify-center mb-6">
                      <div className={cn('w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center')}>
                        <Icon className={cn('text-3xl', iconColor)} />
                      </div>
                    </div>
                    <h3 className={cn('text-2xl font-bold mb-4', iconColor)}>{benefit.title}</h3>
                    <p className="text-muted leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Final CTA Section */}
          <motion.div variants={staggerItemVariants} className="text-center">
            <h3 className="text-h2 font-bold text-white mb-8">
              Join the Privacy Revolution
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.privacygecko.com/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="xl" rightIcon={<FaExternalLinkAlt />}>
                  Read Technical Whitepaper
                </Button>
              </a>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="xl" rightIcon={<FaExternalLinkAlt />}>
                  Buy $PRICKO
                </Button>
              </a>
              <Link to="/roadmap">
                <Button variant="secondary" size="xl" rightIcon={<FaArrowRight />}>
                  View Roadmap
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== MAIN PAGE COMPONENT =====
const EcosystemPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Ecosystem | GeckoCore Protocol | $PRICKO"
        description="Discover how $PRICKO token powers 8 privacy products through the GeckoCore protocol. 4 products live today, full ecosystem launching 2026."
        keywords="GeckoCore, privacy protocol, $PRICKO, privacy products, decentralized privacy, blockchain privacy"
        type="website"
      />

      <main id="main-content" className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <Breadcrumb currentPage="Ecosystem" />
        <HeroSection />
        <LiveProductsSection />
        <GeckoCoreSection />
        <TrustSecuritySection />
        <TimelineSection />
        <TokenFlowSection />
        <ProtocolArchitectureSection />
        <ValuePropsCTASection />
      </main>
    </>
  );
};

export default EcosystemPage;
