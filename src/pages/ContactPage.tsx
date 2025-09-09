import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaLock,
  FaGlobe,
  FaPaperPlane,
  FaTwitter,
  FaTelegram,
  FaGithub,
  FaDiscord,
  FaQuestionCircle,
  FaNewspaper,
  FaRocket,
  FaTools
} from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/PrivacyGecko',
      icon: <FaTwitter className="w-8 h-8" />,
      description: 'Latest updates, announcements, and community discussions',
      //  followers: '15.2K'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+mDFnSI8_A54wZDE1',
      icon: <FaTelegram className="w-8 h-8" />,
      description: 'Real-time community chat, support, and exclusive updates',
      //  followers: '8.7K'
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <FaGithub className="w-8 h-8" />,
      description: 'Open-source code, contributions, and technical documentation',
      //  followers: '2.1K'
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/pricko',
      icon: <FaDiscord className="w-8 h-8" />,
      description: 'Developer discussions, community events, and voice chats',
      //  followers: '5.3K'
    }
  ];

  const teamContacts = [
    {
      role: 'Community Relations',
      email: 'community@pricko.com',
      description: 'General inquiries, partnerships, and community engagement',
      icon: '👥',
      responseTime: '24 hours'
    },
    {
      role: 'Technical Support',
      email: 'support@pricko.com',
      description: 'Privacy tools assistance, wallet issues, and technical guidance',
      icon: '🛠️',
      responseTime: '12 hours'
    },
    {
      role: 'Business Development',
      email: 'business@pricko.com',
      description: 'Strategic partnerships, enterprise solutions, and collaborations',
      icon: '🤝',
      responseTime: '48 hours'
    },
    {
      role: 'Media & Press',
      email: 'press@pricko.com',
      description: 'Media inquiries, interviews, and official statements',
      icon: '📰',
      responseTime: '24 hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I acquire $PRICKO tokens?',
      answer: 'PRICKO tokens are currently in pre-launch phase. Join our waitlist to be notified when tokens become available for purchase on Solana DEXs. We will announce the official launch date and contract address through our official channels first.'
    },
    {
      question: 'When will the privacy tools be available?',
      answer: 'Our privacy tools are currently in active development. We regularly share progress updates on our social media channels. Join our Telegram or Discord for the latest development news and beta testing opportunities.'
    },
    {
      question: 'Is PRICKO completely open source?',
      answer: 'Yes! We believe in transparency and community-driven development. All our privacy tools, smart contracts, and core infrastructure code are open source and available on our GitHub repository for review and contribution.'
    },
    {
      question: 'How can I contribute to the PRICKO ecosystem?',
      answer: 'There are many ways to contribute: join our developer community on Discord, contribute code on GitHub, participate in governance discussions, help with community moderation, create educational content, or simply spread awareness about digital privacy.'
    },
    {
      question: 'What makes PRICKO different from other privacy projects?',
      answer: 'PRICKO combines serious privacy technology with community-driven governance and accessible user experience. We focus on making privacy tools that are both powerful and easy to use, while maintaining complete transparency in our development process.'
    },
    {
      question: 'How do I stay updated with PRICKO developments?',
      answer: 'Follow us on Twitter for announcements, join our Telegram for real-time discussions, subscribe to our newsletter, and check our GitHub for technical updates. We also host regular community calls and AMAs.'
    }
  ];

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
            <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-3xl flex items-center justify-center float-animation">
              <FaEnvelope className="w-12 h-12 text-accent" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Connect with <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Join our thriving community of privacy advocates, get expert support,
            and help shape the future of digital privacy together.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.section
          className="mb-20 glass-morphism rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-professional">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
              </motion.div>
              <motion.p
                className="text-muted mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Have questions about PRICKO? Need technical support? Want to explore partnership opportunities?
                We'd love to hear from you. Our team typically responds within 24 hours.
              </motion.p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaClock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-muted text-sm">Average response time: 12-24 hours</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaLock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Privacy Focused</div>
                    <div className="text-muted text-sm">Your data is encrypted and never shared</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Global Support</div>
                    <div className="text-muted text-sm">24/7 community support worldwide</div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">Inquiry Type</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white"
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="media">Media & Press</option>
                  <option value="community">Community</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white"
                  placeholder="Brief subject of your message"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold shadow-professional inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Social Media & Community */}
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
            Join Our <span className="gradient-text">Community</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer text-center hover:shadow-professional-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {social.description}
                  </p>
                  {/* <div className="text-accent font-semibold text-sm">
                    {social.followers} followers
                  </div> */}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Team Contact Information */}
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
            Direct <span className="gradient-text">Contact</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={contact.role}
                className="card group hover:shadow-professional"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <span className="text-2xl">{contact.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-accent">{contact.role}</h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-accent transition-colors font-medium mb-2 block text-lg"
                    >
                      {contact.email}
                    </a>
                    <p className="text-muted leading-relaxed mb-3">
                      {contact.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent">⏱️</span>
                      <span className="text-muted">Response time: {contact.responseTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-professional"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaQuestionCircle className="text-accent text-sm" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-accent">{faq.question}</h3>
                    <p className="text-muted leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          className="mb-20 glass-morphism rounded-3xl p-12 text-center"
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
            Stay <span className="gradient-text">Connected</span>
          </motion.h2>
          <motion.p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter for exclusive updates on privacy tools, token developments,
            community events, and educational content. Join 1,200+ privacy advocates worldwide.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white text-lg"
            />
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-semibold whitespace-nowrap shadow-professional inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaNewspaper />
              Subscribe Now
            </motion.button>
          </motion.div>
          
          <motion.p
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            🔒 Your privacy is our priority. Unsubscribe anytime with one click.
          </motion.p>
        </motion.section>

        {/* Final CTA */}
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
            Ready to Embrace <span className="gradient-text">Privacy</span>?
          </motion.h2>
          <motion.p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join 1,200+ privacy advocates who have chosen PRICKO as their gateway to digital freedom.
            Your journey towards true privacy starts with a single step.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              <FaTools />
              Explore Privacy Tools
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;