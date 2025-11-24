import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import MascotImage from '../components/ui/MascotImage';
import PhaseCardSimple from '../components/roadmap/PhaseCardSimple';
import { SIMPLIFIED_ROADMAP, ROADMAP_META } from '../constants/roadmapSimplified';

const RoadmapPageSimplified: React.FC = () => {
  return (
    <>
      <SEO
        title="PRICKO Roadmap - From Launch to Full Privacy Ecosystem | PRICKO"
        description="Track PRICKO's journey: 2 products live, token launch November 2025, and 6 more privacy tools coming. Transparent development timeline."
        keywords="PRICKO roadmap, development timeline, crypto roadmap, privacy tools roadmap, Gecko Share, token launch"
        canonicalUrl="/roadmap"
      />
      <div className="min-h-screen bg-bg-main text-white pt-24">
        <div className="container-max section-padding">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <MascotImage size="lg" className="mb-6 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-professional">
              Our <span className="gradient-text-animated">Journey</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-2">
              From launch to full privacy ecosystem. Real progress, realistic timelines.
            </p>
            <p className="text-sm text-muted/60 mb-8">
              Last Updated: November 15, 2025
            </p>

            {/* Overall Progress */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-accent">Overall Progress</span>
                <span className="text-sm font-bold text-white">{ROADMAP_META.overallProgress}%</span>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${ROADMAP_META.overallProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Single Consolidated Disclaimer */}
          <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
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
          </div>

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
                learnMoreLink={phase.learnMoreLink}
                learnMoreText={phase.learnMoreText}
              />
            ))}
          </div>

          {/* Future Vision CTA */}
          <section className="mt-24 relative overflow-hidden">
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-professional">
                  2027 & Beyond: The <span className="gradient-text-animated">Privacy Revolution</span>
                </h2>
                <p className="text-xl text-muted mb-10 max-w-4xl mx-auto">
                  Building a comprehensive privacy ecosystem with DAO governance, multi-chain expansion,
                  and community-driven development.
                </p>

                <Link to="/contact">
                  <button className="btn-primary px-10 py-4 text-lg font-semibold hover:scale-105 transition-transform">
                    Join the Revolution
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default RoadmapPageSimplified;
