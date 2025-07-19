import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/pricko_official',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      description: 'Follow us for the latest updates, memes, and privacy tips'
    },
    {
     name: 'Telegram',
      href: 'https://t.me/+q2Q7TwuwNC5jNGNl',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      description: 'Join our main community chat for discussions and support'
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: 'Contribute to our open-source privacy tools'
    },
   
    // {
    //   name: 'Twitter',
    //   href: 'https://twitter.com/pricko_official',
    //   icon: '🐦 ',
    //   description: 'Follow us for the latest updates, memes, and privacy tips'
    // },
    // {
    //   name: 'Telegram',
    //   href: 'https://t.me/+q2Q7TwuwNC5jNGNl',
    //   icon: '📱',
    //   description: 'Join our main community chat for discussions and support'
    // },
    // {
    //   name: 'Discord',
    //   href: 'https://discord.gg/pricko',
    //   icon: '💬',
    //   description: 'Connect with fellow privacy advocates and developers'
    // },
    // {
    //   name: 'GitHub',
    //   href: 'https://github.com',
    //   icon: '',
    //   description: 'Contribute to our open-source privacy tools'
    // },
    // {
    //   name: 'Reddit',
    //   href: 'https://reddit.com/r/pricko',
    //   icon: '🤖',
    //   description: 'Discuss privacy topics and share gecko memes'
    // },
    // {
    //   name: 'Medium',
    //   href: 'https://medium.com/@pricko',
    //   icon: '📝',
    //   description: 'Read our latest articles and technical deep-dives'
    // }
  ];

  const teamContacts = [
    {
      role: 'Community Manager',
      email: 'community@pricko.com',
      description: 'General inquiries, partnerships, and community questions'
    },
    {
      role: 'Technical Support',
      email: 'support@pricko.com',
      description: 'Help with privacy tools, wallet issues, and technical problems'
    },
    {
      role: 'Business Development',
      email: 'business@pricko.com',
      description: 'Partnership opportunities and enterprise solutions'
    },
    {
      role: 'Media & Press',
      email: 'press@pricko.com',
      description: 'Media inquiries, interviews, and press releases'
    }
  ];

  const faqs = [
    {
      question: 'How do I get $PRICKO tokens?',
      answer: 'You can purchase $PRICKO tokens on major DEXs. Make sure to use the official contract address.'
    },
    {
      question: 'When will the privacy tools be available?',
      answer: 'Privacy Tools are in Development. Please follows on Social Media to get updates'
    },
    {
      question: 'Is PRICKO open source?',
      answer: 'Yes! Our privacy tools and smart contracts are open source. You will find everything on our GitHub repository.'
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
            Join the <span className="gradient-text">Pricko Army</span>
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
              Buy $PRICKO
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