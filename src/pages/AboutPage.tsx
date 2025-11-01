import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContractAddress from '../components/ui/ContractAddress';
import ProofMetric from '../components/ui/ProofMetric';
import FAQSection from '../components/FAQSection';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
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
  FaDollarSign
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
            Building privacy tools that don't suck. Community-owned, meme-powered, actually useful.
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

        {/* Story Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                className="text-4xl font-bold mb-8 text-professional"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our <span className="gradient-text">Origin Story</span>
              </motion.h2>
              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Your data is being sold. Every search, every message, every click. We got tired of watching
                  people hand over their privacy to corporations who profit from it. So we built something better:
                  privacy tools that work, backed by a community that owns them.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We started PRICKO because we were sick of the hypocrisy. Companies claiming to care about your
                  privacy while mining your data for billions. VPNs that log everything. "Secure" apps with
                  backdoors. Enough is enough.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Built on Solana for speed, powered by $PRICKO for access, governed by the community.
                  This isn't just another crypto project—it's your digital privacy toolkit with actual utility.
                  No VC overlords, no corporate puppeteers. Just real tools for real people who give a damn about privacy.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <img
                  src="/logo.png"
                  alt="Pricko Gecko Mascot"
                  className="relative w-80 h-80 object-contain glow-pulse"
                />
              </div>
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
        </motion.section>

        {/* Proof of Commitment Section - NEW */}
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
              value={`${config.development.metrics.betaTesters.toLocaleString()}+`}
              label="Beta Testers"
              description="Active users testing and providing feedback on our tools"
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
                    <span>Gecko Share: 2,100+ active users, fully operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Advisor: Live security audit tool with 4.8★ rating</span>
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
              <p className="text-center text-sm text-gray-300 leading-relaxed">
                <strong className="text-accent">Our Commitment:</strong> We're not a pump-and-dump project.
                We're building a real ecosystem with measurable progress, transparent development, and genuine utility.
                Every metric above is verifiable through our live products and public GitHub repositories.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section
          className="mb-20"
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
            Core <span className="gradient-text">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaEye className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Transparency & Trust</h3>
                    <p className="text-muted leading-relaxed">
                      Open-source development, clear communication, and honest roadmaps that build
                      lasting trust with our community and stakeholders.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaLightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Innovation & Excellence</h3>
                    <p className="text-muted leading-relaxed">
                      Continuously pushing the boundaries of privacy technology while maintaining
                      the highest standards of security and performance.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaUserShield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">User Empowerment</h3>
                    <p className="text-muted leading-relaxed">
                      Putting users in control of their digital lives through intuitive tools
                      and educational resources that promote digital literacy.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="space-y-8">
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaGlobe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Global Accessibility</h3>
                    <p className="text-muted leading-relaxed">
                      Making privacy tools accessible to everyone, regardless of technical expertise,
                      geographic location, or economic status.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaSeedling className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Sustainable Growth</h3>
                    <p className="text-muted leading-relaxed">
                      Building for the long term with sustainable tokenomics, responsible development,
                      and environmental consciousness in all our operations.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card group cursor-default"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaHeart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Community First</h3>
                    <p className="text-muted leading-relaxed">
                      Every decision prioritizes community benefit over short-term gains, fostering
                      a collaborative ecosystem built on mutual respect and shared values.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="mb-20"
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
            Meet the <span className="gradient-text">Core Team</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card text-center group hover:shadow-professional"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                🦎
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">GeckoMaster</h3>
              <p className="text-sm text-accent/80 mb-4">Co-Founder</p>
              <p className="text-muted leading-relaxed mb-4">
                Privacy advocate with 8+ years in blockchain. Previously built privacy tools used by 100K+ users. 
                Passionate about making digital privacy accessible to everyone.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://github.com/geckomaster" className="text-accent hover:text-accent-hover transition-colors">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="card text-center group hover:shadow-professional"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">@0xAnonA</h3>
              <p className="text-sm text-accent/80 mb-4">Co-Founder</p>
              <p className="text-muted leading-relaxed mb-4">
                Full-stack engineer specializing in Solana and privacy-preserving technologies. 
                Former security researcher with expertise in cryptographic protocols.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://github.com/cryptosafe" className="text-accent hover:text-accent-hover transition-colors">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="card text-center group hover:shadow-professional"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">DesignGecko</h3>
              <p className="text-sm text-accent/80 mb-4">Creative Director</p>
              <p className="text-muted leading-relaxed mb-4">
                UX/UI designer with a passion for making complex privacy tools intuitive and enjoyable. 
                Background in human-computer interaction and behavioral psychology.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://dribbble.com/designgecko" className="text-accent hover:text-accent-hover transition-colors">
                  <FaGlobe />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="text-center mt-12 glass-morphism rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Join Our Team</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              We're always looking for passionate privacy advocates, talented developers, and creative minds 
              to join the privacy revolution. Check out our open positions or reach out with your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="btn-primary px-6 py-3 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUsers />
                  Join Team
                </motion.button>
              </Link>
              <a href="https://github.com/pricko-project" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="btn-secondary px-6 py-3 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  Contribute
                </motion.button>
              </a>
            </div>
          </motion.div>
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

        {/* FAQ Section */}
        <FAQSection className="bg-transparent" />

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
              Learn More
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default AboutPage;