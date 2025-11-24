import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/common/SEO';
import TeamMember from '../components/ui/TeamMember';
import NewsletterForm from '../components/ui/NewsletterForm';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { METRICS } from '../constants/metrics';
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

  FaTools,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner
} from 'react-icons/fa';

// Form submission status type
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// Newsletter status type
type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const scrollRef = useScrollAnimation();
  const { getTeamMembers } = useProjectConfig();
  const teamMembers = getTeamMembers();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const statusMessageRef = useRef<HTMLDivElement>(null);

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>('idle');
  const newsletterStatusRef = useRef<HTMLDivElement>(null);

  // Formspree endpoint - Configured via environment variables
  // To get your endpoint: Sign up at https://formspree.io and create a new form
  const CONTACT_FORM_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID}`;
  const NEWSLETTER_FORM_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_NEWSLETTER_ID}`;

  // Scroll to status message when it changes
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      statusMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [submitStatus]);

  useEffect(() => {
    if (newsletterStatus === 'success' || newsletterStatus === 'error') {
      newsletterStatusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [newsletterStatus]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('loading');

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject,
          message: formData.message,
          _subject: `[${formData.category.toUpperCase()}] ${formData.subject}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          category: 'general'
        });
        setFormErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Form submission error - silently handle
      setSubmitStatus('error');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      return;
    }

    if (!validateEmail(newsletterEmail)) {
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('loading');

    try {
      const response = await fetch(NEWSLETTER_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: 'New Newsletter Subscription'
        })
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      // Newsletter submission error - silently handle
      setNewsletterStatus('error');
    }
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
    <>
      <SEO
        title="Contact PRICKO - Get in Touch with Our Team | PRICKO"
        description="Contact PRICKO team for partnerships, support, or questions. Join our community on Twitter, Telegram, Discord. Email us directly or use our contact form. 24-hour response time."
        keywords="contact PRICKO, PRICKO support, crypto community, blockchain partnerships, privacy tools support, PRICKO email, PRICKO telegram"
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <div
          className="text-center mb-20"
        >
          <div
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-3xl flex items-center justify-center float-animation">
              <FaEnvelope className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Connect with <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            We believe in transparency and direct communication. Email us directly, join our community channels,
            or use our contact form below. We respond within 24 hours.
          </p>
        </div>

        {/* Meet the Team Section */}
        <section
          className="mb-20"
        >
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Privacy advocates, blockchain engineers, and open-source contributors building the future of digital privacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                avatar={member.avatar || undefined}
                linkedin={member.linkedin || undefined}
                twitter={member.twitter || undefined}
                github={member.github || undefined}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Direct Email Contact - PRIMARY METHOD */}
        <section
          className="mb-20 glass-morphism rounded-3xl p-12"
        >
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Email Us <span className="gradient-text">Directly</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              No forms, no friction. Click any email below to contact us directly.
              Choose the department that best fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamContacts.map((contact, index) => (
              <motion.a
                key={contact.role}
                href={`mailto:${contact.email}`}
                className="card group hover:shadow-professional cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <span className="text-2xl">{contact.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{contact.role}</h3>
                    <div className="text-white font-mono text-lg mb-2 group-hover:text-accent transition-colors">
                      {contact.email}
                    </div>
                    <p className="text-muted leading-relaxed mb-3 text-sm">
                      {contact.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent">⏱️</span>
                      <span className="text-muted">Response time: {contact.responseTime}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 text-center">
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-2">
                    <FaEnvelope /> Click to send email →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
          <div
            className="mt-8 text-center bg-accent/5 border border-accent/20 rounded-xl p-6"
          >
            <p className="text-white mb-2">
              <strong className="text-accent">Why Direct Email?</strong>
            </p>
            <p className="text-muted text-sm">
              We're a privacy-focused project. Direct email means transparency, no middleman,
              and you have a copy in your Sent folder. One click and we'll get your message instantly.
            </p>
          </div>
        </section>


        {/* Social Media & Community - SECONDARY METHOD */}
        <section
          className="mb-20"
        >
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Prefer real-time chat? Connect with our community on your favorite platform.
              Get instant support, participate in discussions, and stay updated with the latest news.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer text-center hover:shadow-professional-lg"
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
        </section>

        {/* Contact Form - OPTIONAL METHOD (moved to bottom) */}
        <section
          className="mb-20 glass-morphism rounded-3xl p-12"
        >
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Or Use Our <span className="gradient-text">Contact Form</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Prefer a structured form? Fill it out below and we'll get back to you within 24 hours.
              All submissions are encrypted and secure.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-professional">
                  Form <span className="gradient-text">Submission</span>
                </h3>
              </div>
              <p
                className="text-muted mb-8 text-lg leading-relaxed"
              >
                Have questions about PRICKO? Need technical support? Want to explore partnership opportunities?
                Fill out the form and our team will respond within 24 hours.
              </p>
              <div className="space-y-4">
                <div
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaClock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-muted text-sm">Average response time: 12-24 hours</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaLock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Privacy Focused</div>
                    <div className="text-muted text-sm">Your data is encrypted and never shared</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Global Support</div>
                    <div className="text-muted text-sm">24/7 community support worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-busy={submitStatus === 'loading'}
            >
              {/* Status Message */}
              <div ref={statusMessageRef} aria-live="polite" aria-atomic="true">
                {submitStatus === 'loading' && (
                  <div
                    className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-center gap-3 text-accent"
                  >
                    <FaSpinner className="animate-spin text-xl" />
                    <span className="font-medium">Sending your message...</span>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4"
                    role="alert"
                  >
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 text-xl mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-green-400 mb-1">Message Sent Successfully!</div>
                        <p className="text-green-400/80 text-sm">
                          Thank you for contacting us. We typically respond within 24 hours. You should receive a confirmation email shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div
                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
                    role="alert"
                  >
                    <div className="flex items-start gap-3">
                      <FaTimesCircle className="text-red-400 text-xl mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-red-400 mb-1">Failed to Send Message</div>
                        <p className="text-red-400/80 text-sm mb-3">
                          We encountered an error while sending your message. Please try again or contact us directly at{' '}
                          <a href="mailto:community@pricko.com" className="underline hover:text-red-300">
                            community@pricko.com
                          </a>
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitStatus('idle')}
                          className="text-sm bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-colors"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-secondary border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white ${
                      formErrors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your full name"
                    disabled={submitStatus === 'loading'}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-secondary border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white ${
                      formErrors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                    disabled={submitStatus === 'loading'}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                      {formErrors.email}
                    </p>
                  )}
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
                  disabled={submitStatus === 'loading'}
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="media">Media & Press</option>
                  <option value="community">Community</option>
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
                  className={`w-full px-4 py-3 bg-secondary border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white ${
                    formErrors.subject ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Brief subject of your message"
                  disabled={submitStatus === 'loading'}
                  aria-invalid={!!formErrors.subject}
                  aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                />
                {formErrors.subject && (
                  <p id="subject-error" className="text-red-400 text-sm mt-1" role="alert">
                    {formErrors.subject}
                  </p>
                )}
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
                  rows={6}
                  className={`w-full px-4 py-3 bg-secondary border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white resize-none ${
                    formErrors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Tell us more about your inquiry... (minimum 10 characters)"
                  disabled={submitStatus === 'loading'}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                ></textarea>
                {formErrors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Honeypot field for spam prevention */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full btn-primary py-4 text-lg font-semibold shadow-professional inline-flex items-center justify-center gap-3 ${
                  submitStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={submitStatus !== 'loading' ? { scale: 1.02, y: -2 } : {}}
                whileTap={submitStatus !== 'loading' ? { scale: 0.98 } : {}}
              >
                {submitStatus === 'loading' ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'idle' && (
                <p className="text-muted text-sm mt-4 text-center">
                  Your message will be sent securely. We typically respond within 24 hours.
                  Need immediate help? Email us at{' '}
                  <a href="mailto:community@pricko.com" className="text-accent hover:text-accent-hover">
                    community@pricko.com
                  </a>
                </p>
              )}
            </motion.form>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="mb-20"
        >
          <h2
            className="text-4xl font-bold mb-12 text-center text-professional"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card group hover:shadow-professional"
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
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section
          className="mb-20 glass-morphism rounded-3xl p-12 text-center"
        >
          <h2
            className="text-4xl font-bold mb-6 text-professional"
          >
            Stay <span className="gradient-text">Connected</span>
          </h2>
          <p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Subscribe to our newsletter for exclusive updates on privacy tools, token developments,
            community events, and educational content. Join {METRICS.community.formatted} {METRICS.community.label} worldwide.
          </p>
          
          {/* Newsletter Status Message */}
          <div ref={newsletterStatusRef} aria-live="polite" aria-atomic="true" className="mb-6">
            {newsletterStatus === 'loading' && (
              <div
                className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-center justify-center gap-3 text-accent max-w-lg mx-auto"
              >
                <FaSpinner className="animate-spin text-xl" />
                <span className="font-medium">Subscribing...</span>
              </div>
            )}

            {newsletterStatus === 'success' && (
              <div
                className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 max-w-lg mx-auto"
                role="alert"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-400 mb-1">Successfully Subscribed!</div>
                    <p className="text-green-400/80 text-sm">
                      Welcome to the PRICKO community! Check your email for confirmation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {newsletterStatus === 'error' && (
              <div
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 max-w-lg mx-auto"
                role="alert"
              >
                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-400 text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-red-400 mb-1">Subscription Failed</div>
                    <p className="text-red-400/80 text-sm mb-3">
                      Please check your email address and try again.
                    </p>
                    <button
                      type="button"
                      onClick={() => setNewsletterStatus('idle')}
                      className="text-sm bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <motion.form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-secondary border border-border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white text-lg"
              disabled={newsletterStatus === 'loading'}
              required
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              disabled={newsletterStatus === 'loading'}
              className={`btn-primary px-8 py-4 text-lg font-semibold whitespace-nowrap shadow-professional inline-flex items-center gap-3 ${
                newsletterStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              whileHover={newsletterStatus !== 'loading' ? { scale: 1.05, y: -2 } : {}}
              whileTap={newsletterStatus !== 'loading' ? { scale: 0.95 } : {}}
            >
              {newsletterStatus === 'loading' ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <FaNewspaper />
                  Subscribe Now
                </>
              )}
            </button>
          </motion.form>

          <p
            className="text-sm text-muted"
          >
            Your privacy is our priority. Unsubscribe anytime with one click.
          </p>
        </section>

        {/* Final CTA */}
        <section
          className="text-center glass-morphism rounded-3xl p-12"
        >
          <h2
            className="text-4xl font-bold mb-6 text-professional"
          >
            Ready to Embrace <span className="gradient-text">Privacy</span>?
          </h2>
          <p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Join {METRICS.community.formatted} {METRICS.community.label} who have chosen PRICKO as their gateway to digital freedom.
            Your journey towards true privacy starts with a single step.
          </p>

          {/* Newsletter Signup */}
          <div
            className="max-w-2xl mx-auto mb-8"
          >
            <NewsletterForm
              variant="hero"
              placeholder="Enter your email to join the whitelist"
              buttonText="Join Whitelist"
              showDescription={true}
            />
          </div>

          <div className="flex justify-center">
            <motion.a
              href="/tools"
              className="btn-secondary px-10 py-4 text-lg font-semibold shadow-professional inline-flex items-center gap-3"
            >
              <FaTools />
              Explore Privacy Tools
            </motion.a>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default ContactPage;