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
import { FaCheckCircle, FaSpinner, FaClock, FaArrowRight, FaRocket } from 'react-icons/fa';
import { SIMPLIFIED_ROADMAP, ROADMAP_META, SimplifiedPhase } from '../constants/roadmapSimplified';

const PhaseCard: React.FC<{ phase: SimplifiedPhase; index: number }> = ({ phase, index }) => {
  const statusConfig = {
    completed: {
      badge: 'Completed',
      variant: 'live' as const,
      icon: FaCheckCircle,
      borderColor: 'border-green-500/30',
      bgColor: 'from-green-500/10 to-transparent',
      lineColor: 'bg-green-500',
    },
    current: {
      badge: 'In Progress',
      variant: 'beta' as const,
      icon: FaSpinner,
      borderColor: 'border-accent/30',
      bgColor: 'from-accent/10 to-transparent',
      lineColor: 'bg-accent',
    },
    upcoming: {
      badge: 'Upcoming',
      variant: 'coming-soon' as const,
      icon: FaClock,
      borderColor: 'border-white/10',
      bgColor: 'from-white/5 to-transparent',
      lineColor: 'bg-white/20',
    },
  }[phase.status];

  const Icon = statusConfig.icon;

  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative"
    >
      {/* Timeline connector */}
      {index < SIMPLIFIED_ROADMAP.length - 1 && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent h-full -mb-8" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className={cn(
          'flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border-2 z-10',
          statusConfig.borderColor,
          phase.status === 'current' ? 'bg-accent/20' : 'bg-secondary/50'
        )}>
          <Icon className={cn(
            'w-6 h-6',
            phase.status === 'completed' ? 'text-green-400' :
            phase.status === 'current' ? 'text-accent animate-spin' :
            'text-white/40'
          )} />
        </div>

        {/* Content */}
        <Card
          variant="glass"
          hoverable
          className={cn(
            'flex-1 bg-gradient-to-br',
            statusConfig.bgColor,
            statusConfig.borderColor
          )}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant={statusConfig.variant} size="sm">{statusConfig.badge}</Badge>
            <span className="text-accent font-mono text-sm">{phase.quarter}</span>
            <span className="text-muted text-sm ml-auto">{phase.completionDate}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{phase.title}</h3>

          <ul className="space-y-3">
            {phase.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={cn(
                  'w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0',
                  phase.status === 'completed' ? 'bg-green-400' :
                  phase.status === 'current' ? 'bg-accent' :
                  'bg-white/30'
                )} />
                <span className="text-muted">{achievement}</span>
              </li>
            ))}
          </ul>

          {phase.learnMoreLink && (
            <div className="mt-6 pt-4 border-t border-white/5">
              <Link to={phase.learnMoreLink}>
                <Button variant="secondary" size="sm" rightIcon={<FaArrowRight className="text-xs" />}>
                  {phase.learnMoreText || 'Learn More'}
                </Button>
              </Link>
            </div>
          )}
        </Card>
      </div>
    </motion.div>
  );
};

const RoadmapPageModern: React.FC = () => {
  return (
    <>
      <SEO
        title="PRICKO Roadmap - From Launch to Full Privacy Ecosystem | PRICKO"
        description="Track PRICKO's journey: 4 products live, token launched, and more privacy products coming. Transparent development timeline."
        keywords="PRICKO roadmap, development timeline, crypto roadmap, privacy products roadmap"
        canonicalUrl="/roadmap"
      />
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
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
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
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
                Our{' '}
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  Journey
                </span>
              </motion.h1>

              <motion.p variants={staggerItemVariants} className="text-xl text-muted max-w-3xl mx-auto mb-2">
                From launch to full privacy ecosystem. Real progress, realistic timelines.
              </motion.p>

              <motion.p variants={staggerItemVariants} className="text-sm text-muted/60 mb-8">
                Last Updated: November 2025
              </motion.p>

              {/* Overall Progress */}
              <motion.div variants={staggerItemVariants} className="max-w-lg mx-auto">
                <Card variant="glass" className="bg-black/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-accent">Overall Progress</span>
                    <span className="text-lg font-bold text-white">{ROADMAP_META.overallProgress}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${ROADMAP_META.overallProgress}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted mt-2 text-center">
                    Phase {ROADMAP_META.currentPhase} of {ROADMAP_META.totalPhases}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="relative py-16">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="space-y-8"
            >
              {SIMPLIFIED_ROADMAP.map((phase, index) => (
                <PhaseCard key={phase.id} phase={phase} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Future Vision CTA */}
        <section className="relative py-24">
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
                <Card variant="glass" className="border-accent/20 bg-gradient-to-br from-accent/10 to-transparent">
                  <div className="mb-8">
                    <Badge variant="coming-soon" size="lg" className="mb-4">2027 & Beyond</Badge>
                    <h2 className="text-h2 font-bold mb-6">
                      The{' '}
                      <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                        Privacy Revolution
                      </span>
                    </h2>
                    <p className="text-muted max-w-3xl mx-auto">
                      Building a comprehensive privacy ecosystem with DAO governance, multi-chain expansion,
                      and community-driven development.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { icon: '🏛️', title: 'DAO Governance', desc: 'Community-driven decisions and treasury management' },
                      { icon: '🌐', title: 'Multi-Chain', desc: 'Expanding beyond Solana to other networks' },
                      { icon: '🤝', title: 'Partnerships', desc: 'Strategic collaborations with privacy projects' },
                    ].map((item) => (
                      <div key={item.title} className="text-center p-4 bg-black/30 rounded-xl">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-muted text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/contact">
                      <Button variant="primary" size="lg" leftIcon={<FaRocket />}>
                        Join the Revolution
                      </Button>
                    </Link>
                    <Link to="/ecosystem">
                      <Button variant="secondary" size="lg" rightIcon={<FaArrowRight />}>
                        Explore Ecosystem
                      </Button>
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

export default RoadmapPageModern;
