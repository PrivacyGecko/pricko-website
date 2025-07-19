import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/pricko_official',
      icon: '🐦',
      description: 'Follow us for the latest updates, memes, and privacy tips'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/pricko_community',
      icon: '📱',
      description: 'Join our main community chat for discussions and support'
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/pricko',
      icon: '💬',
      description: 'Connect with fellow privacy advocates and developers'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/pricko-project',
      icon: '🔗',
      description: 'Contribute to our open-source privacy tools'
    },
    {
      name: 'Reddit',
      href: 'https://reddit.com/r/pricko',
      icon: '🤖',
      description: 'Discuss privacy topics and share gecko memes'
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@pricko',
      icon: '📝',
      description: 'Read our latest articles and technical deep-dives'
    }
  ];

  const teamContacts = [
    {
      role: 'Community Manager',
      email: 'community@pricko.io',
      description: 'General inquiries, partnerships, and community questions'
    },
    {
      role: 'Technical Support',
      email: 'support@pricko.io',
      description: 'Help with privacy tools, wallet issues, and technical problems'
    },
    {
      role: 'Business Development',
      email: 'business@pricko.io',
      description: 'Partnership opportunities and enterprise solutions'
    },
    {
      role: 'Media & Press',
      email: 'press@pricko.io',
      description: 'Media inquiries, interviews, and press releases'
    }
  ];

  const faqs = [
    {
      question: 'How do I get $PRICK tokens?',
      answer: 'You can purchase $PRICK tokens on major DEXs like Raydium and Jupiter. Make sure to use the official contract address.'
    },
    {
      question: 'When will the privacy tools be available?',
      answer: 'DoxxGuard is already live, BurnerChat is in beta, and PrickoVPN is launching in Q2 2025. Check our roadmap for detailed timelines.'
    },
    {
      question: 'Is PRICKO open source?',
      answer: 'Yes! Our privacy tools and smart contracts are open source. You can find everything on our GitHub repository.'
    },
    {
      question: 'How can I contribute to the project?',
      answer: 'Join our Discord or Telegram, contribute to our GitHub repos, participate in governance, or help spread privacy awareness.'
    }
  ];

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
            Join the <span className="gradient-text">Gecko Army</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Connect with our privacy-focused community, get support, and help us build 
            the future of digital privacy. The gecko revolution starts with you!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Community Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          className="mb-16 bg-secondary/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={contact.role}
                className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-accent">{contact.role}</h3>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-white hover:text-accent transition-colors font-medium mb-3 block"
                >
                  {contact.email}
                </a>
                <p className="text-muted text-sm leading-relaxed">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-accent">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          className="text-center bg-secondary/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Get the latest updates on privacy tools, token developments, and gecko memes 
            delivered straight to your inbox. No spam, just pure privacy goodness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-bg-main border border-border rounded-lg focus:border-accent focus:outline-none text-white"
            />
            <motion.button
              className="btn-primary px-6 py-3 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          
          <p className="text-xs text-muted">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Go Private?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of privacy advocates who have already chosen PRICKO. 
            Your digital freedom journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $PRICK
            </motion.button>
            <motion.button
              className="btn-secondary px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Tools
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;