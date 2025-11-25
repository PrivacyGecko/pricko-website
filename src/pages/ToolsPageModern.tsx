import React from 'react';
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
  FaArrowRight,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaLock,
  FaCheckCircle,
  FaGithub,
} from 'react-icons/fa';
import { HiSparkles, HiShieldCheck, HiLockClosed, HiCode } from 'react-icons/hi';
import { SIMPLIFIED_TOOLS, TOOLS_COUNT, SimplifiedTool } from '../constants/toolsSimplified';
import { METRICS } from '../constants/metrics';

const ToolCard: React.FC<{ tool: SimplifiedTool; index: number }> = ({ tool, index }) => {
  const statusConfig = {
    live: {
      badge: 'Live',
      variant: 'live' as const,
      borderColor: 'border-green-500/30 hover:border-green-500/50',
      glow: 'shadow-glow-green',
    },
    beta: {
      badge: 'Beta',
      variant: 'beta' as const,
      borderColor: 'border-yellow-500/30 hover:border-yellow-500/50',
      glow: 'shadow-glow-yellow',
    },
    'in-development': {
      badge: 'Coming Soon',
      variant: 'coming-soon' as const,
      borderColor: 'border-blue-500/30 hover:border-blue-500/50',
      glow: '',
    },
  }[tool.status];

  const CardWrapper = tool.url ? 'a' : 'div';
  const cardProps = tool.url ? { href: tool.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.div variants={staggerItemVariants}>
      <CardWrapper {...cardProps} className="block h-full">
        <Card
          variant="glass"
          hoverable
          className={cn(
            'h-full transition-all duration-300 group',
            statusConfig.borderColor,
            tool.url && 'cursor-pointer'
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 p-2 flex items-center justify-center">
                <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  {tool.hasAI && (
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                      AI
                    </span>
                  )}
                </div>
                <Badge variant={statusConfig.variant} size="sm" className="mt-1">
                  {statusConfig.badge}
                </Badge>
              </div>
            </div>
            {tool.url && (
              <FaExternalLinkAlt className="text-white/30 group-hover:text-accent transition-colors" />
            )}
          </div>

          {/* Description */}
          <p className="text-muted mb-4 leading-relaxed">{tool.oneLiner}</p>

          {/* Features */}
          <ul className="space-y-2">
            {tool.topFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <FaCheckCircle className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          {tool.url && (
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-accent font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Try Now <FaArrowRight className="text-xs" />
              </span>
            </div>
          )}
        </Card>
      </CardWrapper>
    </motion.div>
  );
};

const ToolsPageModern: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Products - 8 Products, 4 Live Now | PRICKO"
        description="Explore PRICKO's ecosystem: Gecko Share, Gecko Advisor, Gecko Guard, Gecko Lock and more privacy products. Powered by $PRICKO token."
        keywords="privacy products, Gecko Share, Gecko Advisor, Gecko Shell, Gecko Guard, encrypted file sharing, privacy browser, PRICKO tools"
        canonicalUrl="/products"
      />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
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
                Privacy{' '}
                <span className="bg-gradient-to-r from-green-400 via-accent to-cyan-400 bg-clip-text text-transparent">
                  Products
                </span>
              </motion.h1>

              <motion.p variants={staggerItemVariants} className="text-xl text-muted max-w-3xl mx-auto mb-8">
                8 products. {TOOLS_COUNT.live} live serving {METRICS.prickoshare.formatted} users.{' '}
                <span className="text-blue-400 font-semibold">AI-enhanced</span> where it matters. All open source.
              </motion.p>

              {/* Status Legend */}
              <motion.div variants={staggerItemVariants} className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Live ({TOOLS_COUNT.live})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-gray-300">Beta ({TOOLS_COUNT.beta})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-blue-500 rounded-full" />
                  <span className="text-gray-300">In Development ({TOOLS_COUNT.inDevelopment})</span>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Products Grid */}
        <section className="relative py-16">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SIMPLIFIED_TOOLS.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Security Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-secondary/30 to-zinc-950/50" />
          <Container size="xl" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <Badge variant="live" size="lg" className="mb-4">Security First</Badge>
                <h2 className="text-h1 font-bold text-white mb-4">
                  Product Safety &{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Security
                  </span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Every tool is built with security-first principles and transparent development practices.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: HiShieldCheck, title: 'Transparent Team', desc: 'All team members fully identified and verified', color: 'green' },
                  { icon: HiLockClosed, title: 'Encrypted Storage', desc: 'End-to-end encryption using military-grade algorithms', color: 'blue' },
                  { icon: FaShieldAlt, title: 'Security Audited', desc: 'Regular third-party security audits on all live products', color: 'purple' },
                  { icon: HiCode, title: '100% Open Source', desc: 'Complete transparency with all code on GitHub', color: 'cyan' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const colorClasses = {
                    green: 'from-green-500/10 to-transparent border-green-500/30 text-green-400',
                    blue: 'from-blue-500/10 to-transparent border-blue-500/30 text-blue-400',
                    purple: 'from-purple-500/10 to-transparent border-purple-500/30 text-purple-400',
                    cyan: 'from-cyan-500/10 to-transparent border-cyan-500/30 text-cyan-400',
                  }[item.color];

                  return (
                    <motion.div key={item.title} variants={staggerItemVariants}>
                      <Card
                        variant="glass"
                        hoverable
                        className={cn('h-full text-center bg-gradient-to-br', colorClasses)}
                      >
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                          <Icon className={cn('w-7 h-7', colorClasses.split(' ').pop())} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-muted text-sm">{item.desc}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
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
                <Card variant="glass" className="border-accent/20 bg-gradient-to-br from-accent/10 to-transparent">
                  <h2 className="text-h2 font-bold mb-6">
                    Ready to{' '}
                    <span className="bg-gradient-to-r from-green-400 to-accent bg-clip-text text-transparent">
                      Secure
                    </span>{' '}
                    Your Digital Life?
                  </h2>
                  <p className="text-muted mb-8 max-w-2xl mx-auto">
                    Join {METRICS.prickoshare.formatted} users protecting their privacy with Privacy Gecko tools.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Explore Live Tools
                    </Button>
                    <a href="https://github.com/PrivacyGecko" target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="lg" leftIcon={<FaGithub />}>
                        View Source Code
                      </Button>
                    </a>
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

export default ToolsPageModern;
