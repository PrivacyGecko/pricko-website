import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PhaseCardSimple from '../components/roadmap/PhaseCardSimple';
import { SIMPLIFIED_ROADMAP, ROADMAP_META } from '../constants/roadmapSimplified';

const RoadmapPageSimplified: React.FC = () => {
  return (
    <>
      <SEO
        title="PRICKO Roadmap - From Launch to Full Privacy Ecosystem | PRICKO"
        description="Track PRICKO's journey: 2 products live, token launch November 2025, and 6 more privacy tools coming. Transparent development timeline."
        keywords="PRICKO roadmap, development timeline, crypto roadmap, privacy tools roadmap, GeckoShare, token launch"
        canonicalUrl="/roadmap"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
        <div className="container-max section-padding">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-professional">
              Our <span className="gradient-text-animated">Journey</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              From launch to full privacy ecosystem. Real progress, realistic timelines.
            </p>

            {/* Overall Progress */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-accent">Overall Progress</span>
                <span className="text-sm font-bold text-white">{ROADMAP_META.overallProgress}%</span>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${ROADMAP_META.overallProgress}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Single Consolidated Disclaimer */}
          <motion.div
            className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold mb-2 text-yellow-400">Important: Timelines Are Estimates</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Dates may shift due to technical challenges, security audits, or market conditions. 
                  We prioritize quality over speed and will communicate any changes transparently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Linear Timeline - Vertical Flow */}
          <div className="space-y-8">
            {SIMPLIFIED_ROADMAP.map((phase, index) => (
              <PhaseCardSimple
                key={phase.id}
                quarter={phase.quarter}
                title={phase.title}
                status={phase.status}
                achievements={phase.achievements}
                completionDate={phase.completionDate}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* Future Vision CTA */}
          <motion.section
            className="mt-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-professional">
                  2027 & Beyond: The <span className="gradient-text-animated">Privacy Revolution</span>
                </h2>
                <p className="text-xl text-muted mb-10 max-w-4xl mx-auto">
                  Building a comprehensive privacy ecosystem with DAO governance, multi-chain expansion, 
                  and community-driven development.
                </p>
                
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Revolution
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default RoadmapPageSimplified;
