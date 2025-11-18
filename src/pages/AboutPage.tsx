import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContractAddress from '../components/ui/ContractAddress';
import ProofMetric from '../components/ui/ProofMetric';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import SecurityBadge from '../components/ui/SecurityBadge';
import { METRICS } from '../constants/metrics';
import {
  FaCalendarAlt,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaHandsHelping,
  FaRocket,
  FaBook,
  FaCheckCircle,
  FaCode,
  FaUserFriends,
  FaDollarSign,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const { config, getProductCounts } = useProjectConfig();
  const productCounts = getProductCounts();

  return (
    <>
      <SEO
        title="About PRICKO - Privacy-First Memecoin Mission | PRICKO"
        description="Learn about PRICKO's mission to build privacy tools that protect user data. Founded in 2024, community-driven, and committed to making digital privacy accessible to everyone."
        keywords="PRICKO about, privacy tools, memecoin mission, blockchain privacy, digital privacy, community-driven crypto, Solana privacy"
        canonicalUrl="/about"
      />
      <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MascotImage size="lg" className="mb-6 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            About <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Building <span className="text-blue-400 font-medium">AI-enhanced</span> privacy tools that don't suck. Community-owned, meme-powered, actually useful.
            Privacy protection without the corporate BS.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.section
          className="mb-20 glass-morphism rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-accent mb-3">
                <FaCalendarAlt className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{config.project.foundedYear}</div>
              <div className="text-lg font-semibold mb-2">Founded</div>
              <div className="text-muted">Established with a vision for privacy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-accent mb-3">
                <FaUsers className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{config.community.total.toLocaleString()}+</div>
              <div className="text-lg font-semibold mb-2">Early Supporters</div>
              <div className="text-muted">Growing community</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-accent mb-3">
                <FaTools className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{productCounts.total}+</div>
              <div className="text-lg font-semibold mb-2">Privacy Tools</div>
              <div className="text-muted">In development pipeline</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="mb-20 glass-morphism rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-professional"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Mission</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaShieldAlt className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Privacy First</h3>
              <p className="text-muted leading-relaxed">
                Building cutting-edge privacy tools that protect user data without compromising
                on performance, usability, or user experience.
              </p>
            </motion.div>
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaNetworkWired className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Decentralized</h3>
              <p className="text-muted leading-relaxed">
                Creating a truly decentralized ecosystem where users maintain complete control
                over their data, identity, and digital sovereignty.
              </p>
            </motion.div>
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaHandsHelping className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Community Driven</h3>
              <p className="text-muted leading-relaxed">
                Empowering our community to shape the future of privacy through governance,
                development contributions, and collaborative innovation.
              </p>
            </motion.div>
          </div>

          {/* GeckoCore Protocol Mention */}
          <motion.div
            className="card-outlined border-cyan-500/30 mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <FaNetworkWired className="text-cyan-400 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">Beyond the Meme: GeckoCore Protocol</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Privacy Gecko is building for the long term. <strong>GeckoCore</strong>, our decentralized privacy protocol with development beginning Q1 2026, transforms our suite of tools into community-owned infrastructure. Token holders will stake $PRICKO to run nodes, earn rewards, and govern the ecosystem through GeckoDAO.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/ecosystem" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore the Ecosystem
                    <FaArrowRight size={14} />
                  </Link>
                  <a
                    href="https://www.privacygecko.com/whitepaper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Technical Whitepaper
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Proof of Commitment Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4 text-professional"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Proof of Commitment</span>
            </motion.h2>
            <motion.p
              className="text-muted text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We don't just talk. We build. Here's the evidence of our commitment to the Privacy Gecko ecosystem.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <ProofMetric
              icon={FaCheckCircle}
              value={`${productCounts.live}`}
              label="Live Products"
              description="Fully operational privacy tools serving real users right now"
              delay={0.1}
            />
            <ProofMetric
              icon={FaUserFriends}
              value={`${METRICS.prickoshare.users.toLocaleString()}+`}
              label="Active Users"
              description="Real users protecting their privacy with our live tools"
              delay={0.2}
            />
            <ProofMetric
              icon={FaCode}
              value="8+"
              label="Developers"
              description="Full-time team members building privacy tools every day"
              delay={0.3}
            />
            <ProofMetric
              icon={FaGithub}
              value="100%"
              label="Open Source"
              description="All repositories public on GitHub for complete transparency"
              delay={0.4}
            />
          </div>

          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <FaDollarSign className="text-2xl" />
                  Real Investment
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Founded in {config.project.foundedYear} with dedicated funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Multi-year development roadmap fully funded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Professional team working full-time on ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Security audits completed on live products</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-2xl" />
                  Proven Delivery
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Share: {METRICS.prickoshare.formatted} active users, fully operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Advisor: Live security audit tool with 4.8 rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Shell: 85% complete, 1,800+ on waitlist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Guard: 90% complete, in extension store review</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-accent/20">
              <p className="text-center text-sm text-gray-300 leading-relaxed mb-3">
                <strong className="text-accent">Our Commitment:</strong> We're not a pump-and-dump project.
                We're building a real ecosystem with measurable progress, transparent development, and genuine utility.
                Every metric above is verifiable through our live products and public GitHub repositories.
              </p>
              <p className="text-center text-xs text-muted/60">
                Last Updated: November 15, 2025
              </p>
            </div>
          </motion.div>

          {/* Strategic Links to PrivacyGecko.com */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted mb-4">Want the full story?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.privacygecko.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
              >
                Meet the Team <FaExternalLinkAlt size={12} />
              </a>
              <a
                href="https://www.privacygecko.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
              >
                Read Full Story <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Trust & Security Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4 text-professional bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trust & Security
            </motion.h2>
            <motion.p
              className="text-muted text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Built on proven security practices and transparent development standards.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SecurityBadge
              variant="audit"
              title="Security Audited"
              description="All live products undergo professional security audits to ensure user protection."
              delay={0.1}
            />
            <SecurityBadge
              variant="encryption"
              title="End-to-End Encryption"
              description="Military-grade encryption protocols protect all user data in transit and at rest."
              delay={0.2}
            />
            <SecurityBadge
              variant="open-source"
              title="Open Source"
              description="100% transparent codebase on GitHub for community review and contributions."
              delay={0.3}
            />
            <SecurityBadge
              variant="verified"
              title="Verified Identity"
              description="Team members verified and transparent. No anonymous founders or hidden operations."
              delay={0.4}
            />
          </div>
        </motion.section>

        {/* Contract Address Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <ContractAddress />
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center glass-morphism rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-professional"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join the <span className="gradient-text">Privacy Revolution</span>
          </motion.h2>
          <motion.p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Be part of a movement that's reshaping the digital landscape. Together, we're building
            a future where privacy is a fundamental right, not a premium feature.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaRocket />
                Join Waitlist
              </motion.button>
            </Link>
            <Link to="/ecosystem">
              <motion.button
                className="btn-secondary px-10 py-4 text-lg font-semibold shadow-professional inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaBook />
                Explore Our Ecosystem
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
