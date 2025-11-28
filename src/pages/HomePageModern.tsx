import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import ContractAddress from '../components/ui/ContractAddress';
import NewsletterForm from '../components/ui/NewsletterForm';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import { Button, Card, Badge, Container } from '../design-system';
import { ShaderBackground, LazyShader } from '../components/shaders';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../design-system/animations/framer-variants';
import { cn } from '../design-system/utils/cn';
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaCode,
  FaLock,
  FaGlobe,
  FaChartLine,
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiCube } from 'react-icons/hi';

// ===== HERO SECTION =====
const HeroSection: React.FC = () => {
  const { tokenSymbol } = useProjectConfig();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* GPU-Accelerated Shader Background */}
      <ShaderBackground
        variant="hero"
        className="absolute inset-0"
        overlayOpacity={0}
        lazy={false}
      />

      {/* Content - Centered, no mascot */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <Container size="xl" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Text Content - Centered for professional look */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Badges */}
              <motion.div
                variants={staggerItemVariants}
                className="flex flex-wrap items-center justify-center gap-3 mb-8"
              >
                <Badge variant="live" size="lg">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
                  Privacy Gecko Ecosystem
                </Badge>
                <Badge variant="protocol" size="lg">
                  <HiSparkles className="mr-1" />
                  GeckoCore Protocol
                </Badge>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={staggerItemVariants}
                className="text-display-xl font-black mb-6 leading-[0.9] tracking-tight"
              >
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {tokenSymbol}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                variants={staggerItemVariants}
                className="text-h2 text-gray-300 font-semibold mb-6"
              >
                Solana's Privacy Infrastructure Protocol
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={staggerItemVariants}
                className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                Live products today. Unlimited ecosystem tomorrow.
                <br />
                <span className="text-cyan-400 font-medium">
                  Protocol launch Q2 2026
                </span>{' '}
                — get in before network effects.
              </motion.p>

              {/* Why $PRICKO - 3 Value Prop Cards with integrated stats */}
              <motion.div
                variants={staggerItemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto"
              >
                {/* Card 1: Proven Execution */}
                <div className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-xl p-5 hover:border-accent/40 transition-all hover:bg-white/[0.07] min-h-[180px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FaChartLine className="text-accent text-sm" />
                      </div>
                      <span className="text-xs font-bold text-accent uppercase tracking-wide">Shipped</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-accent leading-none">4</div>
                      <div className="text-[10px] text-muted uppercase">Products</div>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Proven Execution</h3>
                  <p className="text-sm text-gray-400 flex-1">Built in 6 months. No vaporware.</p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <FaUsers className="text-accent text-xs" />
                      <span className="text-xs text-muted">2,100+ users</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaShieldAlt className="text-accent text-xs" />
                      <span className="text-xs text-muted">850+ testers</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: GeckoCore Protocol */}
                <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:bg-white/[0.07] min-h-[180px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <HiCube className="text-cyan-400 text-sm" />
                      </div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Protocol</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-cyan-400 leading-none">Q2</div>
                      <div className="text-[10px] text-muted uppercase">2026</div>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">GeckoCore Launch</h3>
                  <p className="text-sm text-gray-400 flex-1">Privacy infrastructure for all Solana dApps.</p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                    <FaCode className="text-cyan-400 text-xs" />
                    <span className="text-xs text-muted">Open SDK for developers</span>
                  </div>
                </div>

                {/* Card 3: Early Access */}
                <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all hover:bg-white/[0.07] min-h-[180px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <HiLightningBolt className="text-purple-400 text-sm" />
                      </div>
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">Early</span>
                    </div>
                    <div className="px-2 py-1 bg-purple-500/10 rounded-md">
                      <span className="text-xs font-bold text-purple-400">PRE-LAUNCH</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Get In Early</h3>
                  <p className="text-sm text-gray-400 flex-1">Live utility today. Network effects tomorrow.</p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                    <FaRocket className="text-purple-400 text-xs" />
                    <span className="text-xs text-muted">Before protocol value accrues</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link to="/how-to-buy">
                  <Button variant="primary" size="xl" rightIcon={<FaArrowRight />}>
                    Buy $PRICKO
                  </Button>
                </Link>
                <a
                  href="https://privacygecko.com/whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="xl" rightIcon={<FaArrowRight />}>
                    Read Whitepaper
                  </Button>
                </a>
              </motion.div>

              {/* Contract Address */}
              <motion.div variants={staggerItemVariants}>
                <ContractAddress variant="minimal" className="text-base" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Corner Mascot Greeter - WOW Visual with SVG */}
      <div className="absolute bottom-16 right-4 lg:right-12 z-20 hidden md:block">
        <motion.div
          className="relative group cursor-pointer"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Outer glow - largest, most diffuse */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] scale-[2.5] group-hover:bg-accent/30 transition-all duration-500" />

          {/* Middle glow - medium intensity */}
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-[50px] scale-[1.8] group-hover:bg-accent/50 transition-all duration-500" />

          {/* Inner glow - brightest core */}
          <div className="absolute inset-0 bg-accent/50 rounded-full blur-[30px] scale-125 group-hover:bg-accent/70 transition-all duration-300" />

          {/* Mascot - SVG with transparent background */}
          <motion.div
            className="relative w-48 h-48 lg:w-56 lg:h-56"
            whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img
              src="/logo.svg"
              alt="Privacy Gecko Mascot"
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(74,222,128,0.8)] group-hover:drop-shadow-[0_0_60px_rgba(74,222,128,1)] transition-all duration-300"
            />
          </motion.div>

          {/* Speech bubble on hover - enhanced */}
          <motion.div
            className="absolute right-full mr-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <div className="bg-black/90 backdrop-blur-xl border border-accent/40 rounded-2xl px-5 py-3 whitespace-nowrap shadow-2xl shadow-accent/20">
              <span className="text-base font-semibold text-white">gm, privacy fren! 🦎</span>
            </div>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-4 h-4 bg-black/90 border-r border-t border-accent/40 rotate-45" />
          </motion.div>

          {/* Sparkle effects around mascot */}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute top-1/4 -left-4 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-1 left-1/4 w-2.5 h-2.5 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator - decorative */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// ===== BENTO GRID VALUE PROPS =====
const BentoValueProps: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
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
            <Badge variant="info" size="md" className="mb-4">
              Why $PRICKO
            </Badge>
            <h2 className="text-h1 font-bold text-white mb-4">
              Three Reasons to{' '}
              <span className="gradient-text">Get In Early</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Real products today, protocol infrastructure tomorrow
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Proven Execution */}
            <motion.div variants={staggerItemVariants}>
              <Card
                variant="glass"
                hoverable
                className="h-full bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:border-accent/40"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-2xl text-accent" />
                  </div>
                  <div>
                    <Badge variant="live" size="sm" className="mb-2">
                      Track Record
                    </Badge>
                    <h3 className="text-xl font-bold text-white">
                      Proven Execution
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-accent">4</span>
                    <span className="text-muted">products shipped</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-accent">6</span>
                    <span className="text-muted">months timeline</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <strong className="text-accent">No vaporware.</strong>{' '}
                    Realistic timelines, actual delivery.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Card 2: GeckoCore Protocol */}
            <motion.div variants={staggerItemVariants}>
              <Card
                variant="protocol"
                hoverable
                className="h-full hover:border-cyan-500/40"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <HiCube className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <Badge variant="protocol" size="sm" className="mb-2">
                      Q2 2026 Launch
                    </Badge>
                    <h3 className="text-xl font-bold text-white">
                      GeckoCore Protocol
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-cyan-400">∞</span>
                    <span className="text-muted">dApp integrations</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-cyan-400">Q2</span>
                    <span className="text-muted">2026 launch</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    Any developer can{' '}
                    <strong className="text-cyan-400">build on GeckoCore</strong>
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Card 3: Early Position */}
            <motion.div variants={staggerItemVariants}>
              <Card
                variant="premium"
                hoverable
                className="h-full hover:border-purple-500/40"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <HiLightningBolt className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <Badge variant="coming-soon" size="sm" className="mb-2">
                      Pre-Launch
                    </Badge>
                    <h3 className="text-xl font-bold text-white">
                      Early Position
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-purple-400">✓</span>
                    <span className="text-muted">live tools today</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-purple-400">∞</span>
                    <span className="text-muted">ecosystem tomorrow</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    Get in <strong className="text-purple-400">before</strong>{' '}
                    network effects kick in
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== PROTOCOL EVOLUTION SECTION =====
const ProtocolEvolution: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      status: 'NOW',
      title: 'Product Utility',
      icon: FaRocket,
      color: 'accent',
      description:
        'Token value = Access to 8 Privacy Gecko products with premium features and AI capabilities.',
      detail: '4 products live, 4 launching 2026',
      active: true,
    },
    {
      phase: 'Phase 2',
      status: '2026',
      title: 'Developer Ecosystem',
      icon: FaCode,
      color: 'cyan',
      description:
        'Token value = Product utility + Protocol access for external developers building on GeckoCore.',
      detail: 'SDK Q2 2026, Testnet Q3-Q4 2026',
      active: false,
    },
    {
      phase: 'Phase 3',
      status: '2027+',
      title: 'Network Effects',
      icon: FaGlobe,
      color: 'purple',
      description:
        'Token value = Product + Protocol + Network effects from every external dApp using GeckoCore.',
      detail: 'Privacy infrastructure for all of Solana',
      active: false,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* GPU-Accelerated Protocol Shader Background */}
      <LazyShader
        variant="protocol"
        className="absolute inset-0"
        overlayOpacity={0.5}
        rootMargin="200px"
      />

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
              From Product Token to{' '}
              <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Protocol Token
              </span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The value evolution as we complete Phase 1 and launch GeckoCore
              infrastructure
            </p>
          </motion.div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const colorClasses = {
                accent: {
                  bg: 'bg-accent/10',
                  text: 'text-accent',
                  border: 'border-accent/50',
                  glow: 'shadow-accent/20',
                },
                cyan: {
                  bg: 'bg-cyan-500/10',
                  text: 'text-cyan-400',
                  border: 'border-cyan-500/30',
                  glow: 'shadow-cyan-500/20',
                },
                purple: {
                  bg: 'bg-purple-500/10',
                  text: 'text-purple-400',
                  border: 'border-purple-500/30',
                  glow: 'shadow-purple-500/20',
                },
              }[phase.color];

              return (
                <motion.div
                  key={phase.phase}
                  variants={staggerItemVariants}
                  className="relative"
                >
                  {/* Connection line */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent translate-x-full" />
                  )}

                  <Card
                    variant={phase.active ? 'elevated' : 'outlined'}
                    hoverable
                    className={cn(
                      'h-full transition-all duration-300',
                      phase.active && `border-2 ${colorClasses?.border} shadow-lg ${colorClasses?.glow}`
                    )}
                  >
                    {/* Status Badge */}
                    <div
                      className={cn(
                        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4',
                        colorClasses?.bg,
                        colorClasses?.text
                      )}
                    >
                      {phase.active && (
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
                      )}
                      {phase.status}
                    </div>

                    {/* Icon */}
                    <div
                      className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                        colorClasses?.bg
                      )}
                    >
                      <Icon className={cn('text-3xl', colorClasses?.text)} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.phase}
                    </h3>
                    <h4 className={cn('text-lg font-semibold mb-4', colorClasses?.text)}>
                      {phase.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{phase.description}</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-muted">
                        <strong className="text-white">
                          {phase.active ? 'Current:' : 'Timeline:'}
                        </strong>{' '}
                        {phase.detail}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== FAQ SECTION =====
const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What utility does $PRICKO have RIGHT NOW?',
      answer:
        'Day one: Premium access to Privacy Gecko products (4 live now, 4 launching 2026), AI query credits (launching Q1-Q2 2026), and early access to new features.',
    },
    {
      question: 'When does GeckoCore protocol launch?',
      answer:
        'Developer Preview: Q2 2026 (hosted API). Testnet: Q3-Q4 2026. Mainnet: 2027+',
    },
    {
      question: 'Why invest if protocol is 2+ years away?',
      answer:
        'Three reasons: Immediate utility from 8 products (4 live today), early entry before protocol value accrues, and Privacy Gecko team is actually shipping—not just promises.',
    },
    {
      question: 'How is this different from other privacy tokens?',
      answer:
        '$PRICKO is unique: Product utility TODAY (8 tools) + Protocol infrastructure TOMORROW (GeckoCore opens to all Solana dApps). We\'re following Pyth and Jito\'s playbook.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/30 to-black" />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold text-white mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan-400 mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card
                  variant="glass"
                  hoverable
                  className="hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== COMMUNITY CTA SECTION =====
const CommunityCTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* GPU-Accelerated CTA Shader Background */}
      <LazyShader
        variant="cta"
        className="absolute inset-0"
        overlayOpacity={0.45}
        rootMargin="200px"
      />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
          className="text-center"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-h1 font-bold mb-6"
          >
            Join the{' '}
            <span className="gradient-text">Privacy Revolution</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted max-w-2xl mx-auto mb-12"
          >
            Be part of a community that values{' '}
            <span className="text-accent font-semibold">privacy</span>,{' '}
            <span className="text-accent font-semibold">fun</span>, and{' '}
            <span className="text-accent font-semibold">digital sovereignty</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: FaUsers, label: 'Gecko Army', color: 'accent' },
              { icon: FaShieldAlt, label: 'Privacy First', color: 'cyan' },
              { icon: FaBolt, label: 'Lightning Fast', color: 'purple' },
              { icon: FaRocket, label: 'Long-term Vision', color: 'accent' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={staggerItemVariants}>
                  <Card variant="glass" hoverable className="text-center py-6">
                    <Icon
                      className={cn(
                        'text-3xl mx-auto mb-2',
                        item.color === 'accent' && 'text-accent',
                        item.color === 'cyan' && 'text-cyan-400',
                        item.color === 'purple' && 'text-purple-400'
                      )}
                    />
                    <div className="text-sm text-muted">{item.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/about">
              <Button variant="primary" size="lg" rightIcon={<FaArrowRight />}>
                Discover Our Mission
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Join Community
              </Button>
            </Link>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUpVariants}>
            <Card
              variant="glass"
              className="max-w-2xl mx-auto border-accent/20"
            >
              <h3 className="text-xl font-bold text-accent mb-4">
                Ready to Go Stealth?
              </h3>
              <p className="text-muted mb-6">
                Join the whitelist for early access to token launch, exclusive
                updates, and beta features.
              </p>
              <NewsletterForm
                variant="hero"
                placeholder="Your email address"
                buttonText="Join Whitelist"
                showDescription={false}
              />
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== MAIN PAGE COMPONENT =====
const HomePageModern: React.FC = () => {
  const homepageStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Privacy Gecko',
        alternateName: 'PRICKO',
        url: 'https://pricko.com',
        logo: 'https://pricko.com/logo.png',
        description: `Privacy-first tools powered by PRICKO utility token. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users.`,
        sameAs: [
          'https://twitter.com/PrivacyGecko',
          'https://github.com/privacygecko',
          'https://t.me/privacygecko',
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="PRICKO | Solana Privacy Token Powering Real Products"
        description={`PRICKO is a Solana utility token powering 8 privacy products. ${TOOLS_COUNT.live} live products. Not vaporware - real tools, real results.`}
        keywords="solana privacy token, privacy utility token, privacy products, blockchain privacy, solana token, privacy gecko"
        canonicalUrl="/"
        structuredData={homepageStructuredData}
      />
      <div className="min-h-screen bg-black">
        <HeroSection />
        <BentoValueProps />
        <ProtocolEvolution />
        <FAQSection />
        <CommunityCTA />
      </div>
    </>
  );
};

export default HomePageModern;
