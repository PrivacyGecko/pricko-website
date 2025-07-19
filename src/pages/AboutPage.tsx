import React from 'react';
import { motion } from 'framer-motion';
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
  FaBook
} from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/logo.png"
              alt="Pricko Logo"
              className="w-24 h-24 mx-auto mb-6 float-animation"
            />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            About <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Pioneering the future of digital privacy through innovative blockchain technology,
            community-driven development, and unwavering commitment to user empowerment.
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
              <div className="text-4xl font-bold text-accent mb-2">2024</div>
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
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-lg font-semibold mb-2">Community Members</div>
              <div className="text-muted">Growing privacy advocates</div>
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
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
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
                  In an era where digital privacy has become a luxury rather than a right, PRICKO emerged
                  from the collective vision of privacy advocates, blockchain developers, and community leaders
                  who refused to accept the status quo of surveillance capitalism.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our journey began with a simple yet powerful realization: every day, billions of people
                  unknowingly surrender their most valuable asset—their personal data—to corporations that
                  profit from their digital footprints while offering little in return.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Built on Solana's high-performance blockchain, PRICKO represents more than just a token—
                  it's a comprehensive ecosystem designed to restore digital sovereignty to individuals
                  through innovative privacy-preserving technologies and community governance.
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
              Get Started with PRICKO
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
  );
};

export default AboutPage;