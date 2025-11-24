import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTelegram, FaDiscord, FaSearch, FaFolderOpen, FaShieldAlt, FaLock, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import MascotImage from '../ui/MascotImage';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About $PRICKO', href: '/about' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'How to Buy', href: '/how-to-buy' },
  ];

  const privacyProducts = [
    { name: 'Gecko Advisor', href: 'https://advisor.privacygecko.com', icon: FaSearch },
    { name: 'Gecko Share', href: 'https://share.privacygecko.com', icon: FaFolderOpen },
    { name: 'Gecko Guard', href: 'https://guard.privacygecko.com', icon: FaShieldAlt },
    { name: 'Gecko Lock', href: 'https://lock.privacygecko.com', icon: FaLock },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Risk Disclosure', href: '/risk-disclosure' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/PrivacyGecko', icon: FaXTwitter },
    { name: 'Telegram', href: 'https://t.me/prickoai', icon: FaTelegram },
    { name: 'Discord', href: 'https://discord.gg/privacygecko', icon: FaDiscord },
    { name: 'GitHub', href: 'https://github.com/PrivacyGecko', icon: FaGithub },
  ];

  return (
    <footer className="bg-secondary border-t border-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <MascotImage size="sm" animate={false} />
              <div>
                <h3 className="text-2xl font-bold gradient-text">PRICKO</h3>
                <p className="text-xs text-muted">Privacy Gecko</p>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Privacy-first utility token powering 8 real products. Not vaporware — 4 tools live today, 4 more in development.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/50 border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigate</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
              <ul className="space-y-3">
                {privacyProducts.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <li key={product.name}>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-accent/70" />
                        {product.name}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <Link
                    to="/products"
                    className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 flex items-center gap-1"
                  >
                    View All <FaArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / CTA */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get Started</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/how-to-buy"
                    className="inline-flex items-center gap-2 text-sm bg-accent/10 text-accent px-3 py-2 rounded-lg hover:bg-accent/20 transition-colors duration-200"
                  >
                    Buy $PRICKO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://t.me/prickoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    Join Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-primary/30">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted text-center md:text-left">
              &copy; {currentYear} Pricko. All rights reserved. Built by Privacy Gecko.
            </p>

            {/* Status & Network */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted">Network:</span>
                <span className="text-accent font-medium">Solana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
