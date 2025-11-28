import React, { useState, useRef, useEffect } from 'react';
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
import {
  FaEnvelope,
  FaClock,
  FaLock,
  FaGlobe,
  FaPaperPlane,
  FaGithub,
  FaTelegram,
  FaDiscord,
  FaQuestionCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaArrowRight,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiSparkles, HiMail, HiUserGroup, HiChat } from 'react-icons/hi';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPageModern: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const statusMessageRef = useRef<HTMLDivElement>(null);

  const CONTACT_FORM_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID}`;

  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      statusMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [submitStatus]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!validateEmail(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({ ...formErrors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitStatus('loading');

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject,
          message: formData.message,
          _subject: `[${formData.category.toUpperCase()}] ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
        setFormErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/PrivacyGecko', icon: FaXTwitter, desc: 'Latest updates and announcements', color: 'cyan' },
    { name: 'Telegram', href: 'https://t.me/prickoai', icon: FaTelegram, desc: 'Real-time community chat', color: 'blue' },
    { name: 'Discord', href: 'https://discord.gg/privacygecko', icon: FaDiscord, desc: 'Developer discussions and events', color: 'purple' },
    { name: 'GitHub', href: 'https://github.com/PrivacyGecko', icon: FaGithub, desc: 'Open-source code and docs', color: 'green' },
  ];

  const teamContacts = [
    { role: 'Community Relations', email: 'community@pricko.com', desc: 'General inquiries and partnerships', icon: HiUserGroup, time: '24h' },
    { role: 'Technical Support', email: 'support@pricko.com', desc: 'Privacy tools and wallet assistance', icon: HiChat, time: '12h' },
    { role: 'Business Development', email: 'business@pricko.com', desc: 'Enterprise and collaborations', icon: HiSparkles, time: '48h' },
    { role: 'Media & Press', email: 'press@pricko.com', desc: 'Interviews and official statements', icon: HiMail, time: '24h' },
  ];

  const faqs = [
    { q: 'How do I acquire $PRICKO tokens?', a: '$PRICKO is now live on pump.fun. Visit our How to Buy page for a step-by-step guide to purchase tokens.' },
    { q: 'When will privacy products be available?', a: '4 products are live today! Gecko Advisor, Gecko Share, Gecko Guard, and Gecko Lock. 4 more launching in 2026.' },
    { q: 'Is PRICKO open source?', a: 'Yes! All privacy products and smart contracts are open source and available on GitHub for review.' },
    { q: 'How can I contribute?', a: 'Join our Discord for dev discussions, contribute on GitHub, or help with community engagement.' },
    { q: 'What makes PRICKO different?', a: 'Real products, not vaporware. 4 live tools today with genuine utility, transparent development, and community-driven.' },
    { q: 'How do I stay updated?', a: 'Follow us on Twitter, join Telegram, or subscribe to our newsletter for exclusive updates.' },
  ];

  return (
    <>
      <SEO
        title="Contact PRICKO - Get in Touch | PRICKO"
        description="Contact the PRICKO team for partnerships, support, or questions. Join our community on Twitter, Telegram, Discord."
        keywords="contact PRICKO, PRICKO support, crypto community"
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
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
                <MascotImage size="md" className="mx-auto" />
              </motion.div>

              <motion.h1 variants={staggerItemVariants} className="text-display-md font-black mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-accent to-purple-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </motion.h1>

              <motion.p variants={staggerItemVariants} className="text-xl text-muted max-w-2xl mx-auto">
                Email us directly, join our community, or use the form below. We respond within 24 hours.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Direct Email Section */}
        <section className="relative py-16">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <Badge variant="live" size="lg" className="mb-4">Fastest Response</Badge>
                <h2 className="text-h1 font-bold text-white mb-4">Email Us Directly</h2>
                <p className="text-muted max-w-2xl mx-auto">No forms, no friction. Click to send an email.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {teamContacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.role}
                      href={`mailto:${contact.email}`}
                      variants={staggerItemVariants}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card variant="glass" hoverable className="h-full group">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-7 h-7 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{contact.role}</h3>
                            <p className="text-accent font-mono text-sm mb-2">{contact.email}</p>
                            <p className="text-muted text-sm mb-3">{contact.desc}</p>
                            <div className="flex items-center gap-2 text-xs text-muted">
                              <FaClock className="text-accent" />
                              <span>Response: {contact.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 text-center">
                          <span className="text-accent text-sm font-medium inline-flex items-center gap-2">
                            <FaEnvelope /> Click to send email <FaArrowRight className="text-xs" />
                          </span>
                        </div>
                      </Card>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Community Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-secondary/30 to-zinc-950/50" />
          <Container size="xl" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <h2 className="text-h1 font-bold text-white mb-4">Join Our Community</h2>
                <p className="text-muted">Real-time chat, support, and updates on your favorite platform.</p>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const colorClasses = {
                    cyan: 'from-cyan-500/10 to-transparent border-cyan-500/30 hover:border-cyan-500/50',
                    blue: 'from-blue-500/10 to-transparent border-blue-500/30 hover:border-blue-500/50',
                    purple: 'from-purple-500/10 to-transparent border-purple-500/30 hover:border-purple-500/50',
                    green: 'from-green-500/10 to-transparent border-green-500/30 hover:border-green-500/50',
                  }[social.color];

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={staggerItemVariants}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card
                        variant="glass"
                        hoverable
                        className={cn('h-full text-center bg-gradient-to-br transition-colors', colorClasses)}
                      >
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-white/70" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{social.name}</h3>
                        <p className="text-muted text-sm">{social.desc}</p>
                      </Card>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="relative py-16">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <h2 className="text-h1 font-bold text-white mb-4">Send a Message</h2>
                <p className="text-muted">Prefer a structured form? We'll respond within 24 hours.</p>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-accent/20">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Info */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
                      <div className="space-y-6">
                        {[
                          { icon: FaClock, title: 'Quick Response', desc: '12-24 hour average response time' },
                          { icon: FaLock, title: 'Privacy Focused', desc: 'Your data is encrypted and never shared' },
                          { icon: FaGlobe, title: 'Global Support', desc: '24/7 community support worldwide' },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.title} className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-accent" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-muted text-sm">{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div ref={statusMessageRef} aria-live="polite">
                        {submitStatus === 'loading' && (
                          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-center gap-3 text-accent">
                            <FaSpinner className="animate-spin" />
                            <span>Sending your message...</span>
                          </div>
                        )}
                        {submitStatus === 'success' && (
                          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-0.5" />
                            <div>
                              <p className="font-semibold text-green-400">Message Sent!</p>
                              <p className="text-green-400/80 text-sm">We'll respond within 24 hours.</p>
                            </div>
                          </div>
                        )}
                        {submitStatus === 'error' && (
                          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                            <FaTimesCircle className="text-red-400 text-xl mt-0.5" />
                            <div>
                              <p className="font-semibold text-red-400">Failed to Send</p>
                              <p className="text-red-400/80 text-sm">Please email us at community@pricko.com</p>
                              <button
                                type="button"
                                onClick={() => setSubmitStatus('idle')}
                                className="mt-2 text-sm bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-colors"
                              >
                                Try Again
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={submitStatus === 'loading'}
                            className={cn(
                              'w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all',
                              formErrors.name ? 'border-red-500' : 'border-white/10'
                            )}
                            placeholder="Your name"
                          />
                          {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={submitStatus === 'loading'}
                            className={cn(
                              'w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all',
                              formErrors.email ? 'border-red-500' : 'border-white/10'
                            )}
                            placeholder="your@email.com"
                          />
                          {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          disabled={submitStatus === 'loading'}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="business">Business Partnership</option>
                          <option value="media">Media & Press</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          disabled={submitStatus === 'loading'}
                          className={cn(
                            'w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all',
                            formErrors.subject ? 'border-red-500' : 'border-white/10'
                          )}
                          placeholder="Brief subject"
                        />
                        {formErrors.subject && <p className="text-red-400 text-sm mt-1">{formErrors.subject}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={submitStatus === 'loading'}
                          rows={5}
                          className={cn(
                            'w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none',
                            formErrors.message ? 'border-red-500' : 'border-white/10'
                          )}
                          placeholder="Tell us more... (minimum 10 characters)"
                        />
                        {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                      </div>

                      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                      <Button
                        variant="primary"
                        size="xl"
                        fullWidth
                        disabled={submitStatus === 'loading'}
                        type="submit"
                        leftIcon={submitStatus === 'loading' ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                      >
                        {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
          <Container size="lg" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants} className="text-center mb-12">
                <h2 className="text-h1 font-bold text-white mb-4">Frequently Asked Questions</h2>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={staggerItemVariants}>
                    <Card variant="glass" hoverable>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <FaQuestionCircle className="text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-accent mb-2">{faq.q}</h3>
                          <p className="text-muted">{faq.a}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <Container size="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="text-center"
            >
              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-accent/20">
                  <h2 className="text-h2 font-bold mb-6">Ready to Join the Community?</h2>
                  <p className="text-muted mb-8 max-w-2xl mx-auto">
                    Connect with privacy advocates, developers, and crypto enthusiasts building the future of digital privacy.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="https://t.me/prickoai" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="lg" rightIcon={<FaTelegram />}>
                        Join Telegram
                      </Button>
                    </a>
                    <Link to="/products">
                      <Button variant="secondary" size="lg" rightIcon={<FaArrowRight />}>
                        Explore Products
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

export default ContactPageModern;
