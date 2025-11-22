import React, { useState, useRef, useEffect } from 'react';
import SEO from '../components/common/SEO';
import {
  FaEnvelope,
  FaClock,
  FaLock,
  FaGlobe,
  FaPaperPlane,
  FaTwitter,
  FaTelegram,
  FaGithub,
  FaDiscord,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaExternalLinkAlt
} from 'react-icons/fa';

// Form submission status type
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
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

  // Formspree endpoint
  const CONTACT_FORM_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID}`;

  // Scroll to status message when it changes
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
      setSubmitStatus('error');
    }
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/PrivacyGecko',
      icon: <FaTwitter className="w-8 h-8" />,
      description: 'Latest updates and announcements',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+mDFnSI8_A54wZDE1',
      icon: <FaTelegram className="w-8 h-8" />,
      description: 'Real-time community chat',
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <FaGithub className="w-8 h-8" />,
      description: 'Open-source code and docs',
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/pricko',
      icon: <FaDiscord className="w-8 h-8" />,
      description: 'Developer discussions',
    }
  ];

  const teamContacts = [
    {
      role: 'Community Relations',
      email: 'community@pricko.com',
      description: 'General inquiries and partnerships',
      icon: '👥',
      responseTime: '24 hours'
    },
    {
      role: 'Technical Support',
      email: 'support@pricko.com',
      description: 'Privacy tools and wallet issues',
      icon: '🛠️',
      responseTime: '12 hours'
    },
    {
      role: 'Business Development',
      email: 'business@pricko.com',
      description: 'Strategic partnerships',
      icon: '🤝',
      responseTime: '48 hours'
    },
    {
      role: 'Media & Press',
      email: 'press@pricko.com',
      description: 'Media inquiries and interviews',
      icon: '📰',
      responseTime: '24 hours'
    }
  ];

  return (
    <>
      <SEO
        title="Contact PRICKO - Get in Touch with Our Team | PRICKO"
        description="Contact PRICKO team for partnerships, support, or questions. Join our community on Twitter, Telegram, Discord. Email us directly or use our contact form."
        keywords="contact PRICKO, PRICKO support, crypto community, blockchain partnerships, privacy tools support"
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-3xl flex items-center justify-center float-animation">
              <FaEnvelope className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Connect with <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Email us directly or join our community channels. We respond within 24 hours.
          </p>
        </div>

        {/* Direct Email Contact */}
        <section className="mb-20 glass-morphism rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Email Us <span className="gradient-text">Directly</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Click any email below to contact us directly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamContacts.map((contact) => (
              <a
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
                      <span className="text-muted">Response: {contact.responseTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Social Media & Community */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Connect with us on your favorite platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer text-center hover:shadow-professional-lg hover:scale-105 transition-all duration-300"
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
                  <p className="text-muted text-sm leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Links to PrivacyGecko.com */}
          <div className="text-center mt-8">
            <a
              href="https://www.privacygecko.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2 mr-4"
            >
              Meet the Team <FaExternalLinkAlt size={12} />
            </a>
            <a
              href="https://www.privacygecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
            >
              FAQs <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20 glass-morphism rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-professional">
              Or Use Our <span className="gradient-text">Contact Form</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              We'll get back to you within 24 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaClock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-muted text-sm">12-24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaLock className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Privacy Focused</div>
                    <div className="text-muted text-sm">Encrypted & never shared</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-accent text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">Global Support</div>
                    <div className="text-muted text-sm">24/7 worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-busy={submitStatus === 'loading'}
            >
              {/* Status Message */}
              <div ref={statusMessageRef} aria-live="polite" aria-atomic="true">
                {submitStatus === 'loading' && (
                  <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-center gap-3 text-accent">
                    <FaSpinner className="animate-spin text-xl" />
                    <span className="font-medium">Sending your message...</span>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4" role="alert">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 text-xl mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-green-400 mb-1">Message Sent!</div>
                        <p className="text-green-400/80 text-sm">
                          We'll respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4" role="alert">
                    <div className="flex items-start gap-3">
                      <FaTimesCircle className="text-red-400 text-xl mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-red-400 mb-1">Failed to Send</div>
                        <p className="text-red-400/80 text-sm mb-3">
                          Try again or email{' '}
                          <a href="mailto:community@pricko.com" className="underline">
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
                    placeholder="Your name"
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
                    Email <span className="text-red-400">*</span>
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
                  placeholder="Brief subject"
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
                  rows={5}
                  className={`w-full px-4 py-3 bg-secondary border rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white resize-none ${
                    formErrors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Your message... (min 10 characters)"
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
                style={{ display: 'none'}}
}}                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full btn-primary py-4 text-lg font-semibold shadow-professional inline-flex items-center justify-center gap-3 transition-colors ${
                  submitStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
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
            </form>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
