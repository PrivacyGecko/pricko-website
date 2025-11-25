import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import ContractAddress from '../components/ui/ContractAddress';
import { Button, Card, Badge, Container } from '../design-system';
import { cn } from '../design-system/utils/cn';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../design-system/animations/framer-variants';
import { METRICS } from '../constants/metrics';
import {
  FaCalendarAlt,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaUserShield,
  FaGlobe,
  FaSeedling,
  FaHeart,
  FaRocket,
  FaBook,
  FaTwitter,
  FaGithub,
  FaCheckCircle,
  FaCode,
  FaUserFriends,
  FaDollarSign,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLock,
} from 'react-icons/fa';
import { HiSparkles, HiShieldCheck, HiCode, HiUserGroup } from 'react-icons/hi';

// ===== HERO SECTION =====
const HeroSection: React.FC<{ config: any }> = ({ config }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Container size="xl" className="relative z-10 py-20">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={staggerItemVariants} className="mb-8">
            <MascotImage size="lg" className="mx-auto" />
          </motion.div>

          <motion.h1
            variants={staggerItemVariants}
            className="text-display-lg font-black mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              PRICKO
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItemVariants}
            className="text-xl text-muted max-w-3xl mx-auto leading-relaxed"
          >
            Building <span className="text-cyan-400 font-medium">AI-enhanced</span> privacy products that don't suck.
            Community-owned, meme-powered, actually useful.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== STATS SECTION =====
const StatsSection: React.FC<{ config: any; productCounts: any }> = ({ config, productCounts }) => {
  const stats = [
    { icon: FaCalendarAlt, value: config.project.foundedYear, label: 'Founded', desc: 'Established with a vision' },
    { icon: FaUsers, value: `${config.community.total.toLocaleString()}+`, label: 'Early Supporters', desc: 'Growing community' },
    { icon: FaTools, value: `${productCounts.total}+`, label: 'Privacy Products', desc: 'In development pipeline' },
  ];

  return (
    <section className="relative py-16 -mt-20">
      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <Card variant="glass" className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={staggerItemVariants}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl font-black text-accent mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-muted">{stat.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== STORY SECTION =====
const StorySection: React.FC = () => {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerItemVariants}>
              <Badge variant="info" size="md" className="mb-6">
                <HiSparkles className="mr-1" /> Our Story
              </Badge>
              <h2 className="text-h1 font-bold text-white mb-8">
                Our <span className="gradient-text">Origin Story</span>
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  Your data is being sold. Every search, every message, every click. We got tired of watching
                  people hand over their privacy to corporations who profit from it. So we built something better:
                  privacy products that work, backed by a community that owns them.
                </p>
                <p>
                  We started PRICKO because we were sick of the hypocrisy. Companies claiming to care about your
                  privacy while mining your data for billions. VPNs that log everything. "Secure" apps with
                  backdoors. Enough is enough.
                </p>
                <p>
                  Built on <span className="text-accent font-medium">Solana</span> for speed, powered by{' '}
                  <span className="text-accent font-medium">$PRICKO</span> for access, governed by the community.
                  No VC overlords, no corporate puppeteers. Just real tools for real people who give a damn about privacy.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-accent/20 rounded-full blur-[100px]"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                  src="/logo.png"
                  alt="Pricko Gecko Mascot"
                  className="relative w-80 h-80 object-contain"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== MISSION SECTION =====
const MissionSection: React.FC = () => {
  const missions = [
    {
      icon: FaShieldAlt,
      title: 'Privacy First',
      description: 'Building cutting-edge privacy products that protect user data without compromising on performance or usability.',
      color: 'accent',
    },
    {
      icon: FaNetworkWired,
      title: 'Decentralized',
      description: 'Creating a truly decentralized ecosystem where users maintain complete control over their data and digital sovereignty.',
      color: 'cyan',
    },
    {
      icon: FaHandsHelping,
      title: 'Community Driven',
      description: 'Empowering our community to shape the future of privacy through governance and collaborative innovation.',
      color: 'purple',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold text-white mb-4">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Building the future of digital privacy, one product at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              const colorClasses = {
                accent: 'from-accent/10 to-transparent border-accent/20 hover:border-accent/40',
                cyan: 'from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40',
                purple: 'from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-500/40',
              }[mission.color];
              const iconColor = {
                accent: 'text-accent',
                cyan: 'text-cyan-400',
                purple: 'text-purple-400',
              }[mission.color];

              return (
                <motion.div key={mission.title} variants={staggerItemVariants}>
                  <Card
                    variant="glass"
                    hoverable
                    className={cn('h-full text-center bg-gradient-to-br', colorClasses)}
                  >
                    <div className={cn('w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center')}>
                      <Icon className={cn('w-10 h-10', iconColor)} />
                    </div>
                    <h3 className={cn('text-2xl font-bold mb-4', iconColor)}>{mission.title}</h3>
                    <p className="text-muted leading-relaxed">{mission.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* GeckoCore Protocol Card */}
          <motion.div variants={staggerItemVariants}>
            <Card variant="protocol" className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <FaNetworkWired className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-cyan-300">Beyond the Meme: GeckoCore Protocol</h3>
                    <Badge variant="protocol" size="sm">Q2 2026</Badge>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Privacy Gecko is building for the long term. <strong>GeckoCore</strong>, our decentralized privacy protocol,
                    transforms our suite of tools into community-owned infrastructure. Token holders will stake $PRICKO to run nodes,
                    earn rewards, and govern the ecosystem through GeckoDAO.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/ecosystem">
                      <Button variant="protocol" size="sm" rightIcon={<FaArrowRight />}>
                        Explore Ecosystem
                      </Button>
                    </Link>
                    <a href="https://www.privacygecko.com/whitepaper" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" rightIcon={<FaExternalLinkAlt />}>
                        Technical Whitepaper
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== PROOF OF COMMITMENT SECTION =====
const ProofSection: React.FC<{ productCounts: any; config: any }> = ({ productCounts, config }) => {
  const proofMetrics = [
    { icon: HiShieldCheck, value: productCounts.live, label: 'Live Products', desc: 'Fully operational now' },
    { icon: HiUserGroup, value: `${METRICS.prickoshare.users.toLocaleString()}+`, label: 'Active Users', desc: 'Real users today' },
    { icon: HiCode, value: '8+', label: 'Developers', desc: 'Full-time team' },
    { icon: FaGithub, value: '100%', label: 'Open Source', desc: 'Full transparency' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-4">
              <span className="gradient-text">Proof of Commitment</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We don't just talk. We build. Here's the evidence.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {proofMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div key={metric.label} variants={staggerItemVariants}>
                  <Card variant="glass" hoverable className="text-center h-full">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="text-3xl font-black text-accent mb-1">{metric.value}</div>
                    <div className="text-sm font-semibold text-white mb-1">{metric.label}</div>
                    <div className="text-xs text-muted">{metric.desc}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Proof Card */}
          <motion.div variants={staggerItemVariants}>
            <Card
              variant="elevated"
              className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                    <FaDollarSign className="text-2xl" /> Real Investment
                  </h3>
                  <ul className="space-y-3 text-muted">
                    {[
                      `Founded in ${config.project.foundedYear} with dedicated funding`,
                      'Multi-year development roadmap fully funded',
                      'Professional team working full-time',
                      'Security audits completed on live products',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-2xl" /> Proven Delivery
                  </h3>
                  <ul className="space-y-3 text-muted">
                    {[
                      `Gecko Share: ${METRICS.prickoshare.formatted} active users`,
                      'Gecko Advisor: Live security audit tool',
                      'Gecko Shell: In development, 1,800+ waitlist',
                      'Gecko Guard: Extension store review',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== SECURITY BADGES =====
const SecuritySection: React.FC = () => {
  const badges = [
    { icon: HiShieldCheck, title: 'Security Audited', desc: 'Professional security audits on all products' },
    { icon: FaLock, title: 'End-to-End Encryption', desc: 'Military-grade encryption protocols' },
    { icon: FaCode, title: 'Open Source', desc: '100% transparent codebase on GitHub' },
    { icon: FaUserShield, title: 'Verified Identity', desc: 'Team members verified and transparent' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                Trust & Security
              </span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Built on proven security practices and transparent development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div key={badge.title} variants={staggerItemVariants}>
                  <Card variant="glass" hoverable className="text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
                    <p className="text-sm text-muted">{badge.desc}</p>
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

// ===== VALUES SECTION =====
const ValuesSection: React.FC = () => {
  const values = [
    { icon: FaEye, title: 'Transparency & Trust', desc: 'Open-source development and honest roadmaps' },
    { icon: FaLightbulb, title: 'Innovation & Excellence', desc: 'Pushing boundaries while maintaining security' },
    { icon: FaUserShield, title: 'User Empowerment', desc: 'Putting users in control of their digital lives' },
    { icon: FaGlobe, title: 'Global Accessibility', desc: 'Privacy for everyone, everywhere' },
    { icon: FaSeedling, title: 'Sustainable Growth', desc: 'Building for the long term' },
    { icon: FaHeart, title: 'Community First', desc: 'Every decision prioritizes community benefit' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-4">
              Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={staggerItemVariants}>
                  <Card variant="glass" hoverable className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-accent mb-2">{value.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
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
  );
};

// ===== TEAM SECTION =====
const TeamSection: React.FC = () => {
  const team = [
    { name: 'GeckoMaster', role: 'Co-Founder', emoji: '🦎', desc: 'Privacy advocate with 8+ years in blockchain', twitter: 'PrivacyGecko', github: 'geckomaster' },
    { name: '@0xAnonA', role: 'Co-Founder', emoji: '⚡', desc: 'Full-stack engineer, former security researcher', twitter: 'PrivacyGecko', github: 'cryptosafe' },
    { name: 'DesignGecko', role: 'Creative Director', emoji: '🎨', desc: 'UX/UI designer specializing in privacy products', twitter: 'PrivacyGecko', github: 'designgecko' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-4">
              Meet the <span className="gradient-text">Core Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <motion.div key={member.name} variants={staggerItemVariants}>
                <Card variant="glass" hoverable className="text-center h-full">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-4xl">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-1">{member.name}</h3>
                  <p className="text-sm text-accent/70 mb-4">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex justify-center gap-3">
                    <a href={`https://twitter.com/${member.twitter}`} className="text-white/60 hover:text-accent transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href={`https://github.com/${member.github}`} className="text-white/60 hover:text-accent transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div variants={staggerItemVariants}>
            <Card variant="glass" className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-4">Join Our Team</h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                We're always looking for passionate privacy advocates and talented developers to join the revolution.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" leftIcon={<FaUsers />}>Join Team</Button>
                </Link>
                <a href="https://github.com/PrivacyGecko" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" leftIcon={<FaGithub />}>Contribute on GitHub</Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== CTA SECTION =====
const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
              <h2 className="text-h1 font-bold mb-6">
                Join the <span className="gradient-text">Privacy Revolution</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                Be part of a movement that's reshaping the digital landscape. Together, we're building
                a future where privacy is a fundamental right.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link to="/contact">
                  <Button variant="primary" size="lg" leftIcon={<FaRocket />}>
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/ecosystem">
                  <Button variant="secondary" size="lg" leftIcon={<FaBook />}>
                    Explore Ecosystem
                  </Button>
                </Link>
              </div>
              <ContractAddress variant="minimal" />
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// ===== MAIN PAGE =====
const AboutPageModern: React.FC = () => {
  const { config, getProductCounts } = useProjectConfig();
  const productCounts = getProductCounts();

  return (
    <>
      <SEO
        title="About PRICKO - Privacy-First Mission | PRICKO"
        description="Learn about PRICKO's mission to build privacy products that protect user data. Founded in 2025, community-driven, and committed to making digital privacy accessible."
        keywords="PRICKO about, privacy products, memecoin mission, blockchain privacy, Solana privacy"
        canonicalUrl="/about"
      />
      <div className="min-h-screen bg-black">
        <HeroSection config={config} />
        <StatsSection config={config} productCounts={productCounts} />
        <StorySection />
        <MissionSection />
        <ProofSection productCounts={productCounts} config={config} />
        <SecuritySection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </div>
    </>
  );
};

export default AboutPageModern;
