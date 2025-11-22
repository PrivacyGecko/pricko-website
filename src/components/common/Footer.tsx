import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import MascotImage from '../ui/MascotImage';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const { getTokenDisclaimer } = useProjectConfig();
  const footerDisclaimer = getTokenDisclaimer('homepage');

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/PrivacyGecko',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+mDFnSI8_A54wZDE1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/pricko',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0 a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/pricko-project',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Privacy Tools', href: '/tools' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Whitepaper', href: 'https://www.privacygecko.com/whitepaper', external: true },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Risk Disclosure', href: '/risk-disclosure' },
    { name: 'Forward-Looking Statements', href: '/forward-looking-statements' },
    { name: 'Geographic Restrictions', href: '/geographic-restrictions' },
    { name: 'Cookie Policy', href: '/privacy#cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link for newsletter subscription
    const subject = encodeURIComponent('Newsletter Subscription Request');
    const body = encodeURIComponent(`Email: ${email}\n\nPlease add me to the PRICKO newsletter.`);
    window.location.href = `mailto:newsletter@pricko.com?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-secondary to-primary border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container-max section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Enhanced Brand Section with MascotImage */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <MascotImage
                size="sm"
                alt="Privacy Gecko Logo"
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold gradient-text">PRICKO</h3>
                <p className="text-sm text-muted font-medium">Privacy Gecko</p>
              </div>
            </div>

            <p className="text-muted mb-6 max-w-md leading-relaxed">
              Privacy-focused memecoin with real utility. Born in memes, forged in data abuse.
              Your crypto-native privacy guardian fighting surveillance one transaction at a time.
            </p>

            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-border/50 border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap transition-transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-border/50 rounded-xl flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 overflow-hidden hover:scale-110 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Privacy Tools</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🔍</span>
                  <span className="text-muted">Gecko Advisor</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">Live</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📁</span>
                  <span className="text-muted">Gecko Share</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">Live</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🛡️</span>
                  <span className="text-muted">Gecko Guard</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">Live</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🔐</span>
                  <span className="text-muted">Gecko Lock</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">Live</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal & Support</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/about#contact"
                  className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers - Disabled */}
        {/* <motion.div
          className="border-t border-border/50 pt-8 mt-12 space-y-6"
          initial={{ opacity: 0 
          animate={{ opacity: 1 
          transition={{ delay: 0.6 
        >
          <div className="bg-secondary/40 border border-accent/20 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-muted leading-relaxed text-center">
              <span className="text-accent font-semibold">⚠️ Legal Disclaimer:</span> {footerDisclaimer}
            </p>
          </div>
        </div> */}

        {/* Enhanced Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-muted">
              &copy; {currentYear} Pricko. Privacy Gecko Approved. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted">
              <span>🦎</span>
              <span>Built with privacy in mind</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted transition-transform hover:scale-105">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Gecko Status: Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
