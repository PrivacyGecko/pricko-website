import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">PRICKO</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Born from the chaos of memes and forged in the fires of data abuse, 
            PRICKO is more than just another token—it's a movement for digital privacy.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Gecko's Origin Story</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  In the depths of crypto Twitter, where memes reign supreme and privacy is a luxury, 
                  a small gecko emerged with a big mission. PRICKO wasn't born in a boardroom or 
                  conceived by suits—it crawled out of the collective frustration with surveillance capitalism.
                </p>
                <p>
                  Every day, our data is harvested, our privacy invaded, and our digital lives monetized 
                  by corporations who see us as products. The gecko said "enough." Armed with Solana's 
                  speed and the power of community, PRICKO began building tools that put privacy back 
                  in the hands of the people.
                </p>
                <p>
                  What started as a meme became a mission. What began as a joke became a movement. 
                  PRICKO proves that the most powerful revolutions often start with the smallest creatures.
                </p>
              </div>
            </div>
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/logo.png" 
                alt="Pricko Gecko" 
                className="w-64 h-64 object-contain"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Privacy First</h3>
              <p className="text-muted">
                Build tools that protect user privacy without sacrificing usability or fun.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Decentralized</h3>
              <p className="text-muted">
                Create a truly decentralized ecosystem where users control their data and destiny.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Irreverent</h3>
              <p className="text-muted">
                Prove that serious privacy tools can be fun, accessible, and community-driven.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Gecko Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Community Over Profit</h3>
                <p className="text-muted">
                  Every decision is made with the community's best interests at heart, not corporate profits.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted">
                  Open-source development, clear roadmaps, and honest communication with our community.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted">
                  Constantly pushing the boundaries of what's possible in privacy-preserving technology.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-muted">
                  Privacy tools should be easy to use, not just for tech experts but for everyone.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Resilience</h3>
                <p className="text-muted">
                  Building systems that can withstand attacks, censorship, and the test of time.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Fun</h3>
                <p className="text-muted">
                  Privacy doesn't have to be boring. We believe in making security enjoyable and engaging.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Ready to take back your digital privacy? The gecko army is growing, 
            and we need privacy-conscious individuals like you to help build the future.
          </p>
          <motion.button
            className="btn-primary px-8 py-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with PRICKO
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;