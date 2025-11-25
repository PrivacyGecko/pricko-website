import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaTelegram,
  FaDiscord,
  FaSearch,
  FaFolderOpen,
  FaShieldAlt,
  FaLock,
  FaArrowRight,
  FaHeart,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiExternalLink } from 'react-icons/hi';
import MascotImage from '../ui/MascotImage';
import { Button } from '../../design-system';
import { cn } from '../../design-system/utils/cn';
import { staggerContainerVariants, staggerItemVariants } from '../../design-system/animations/framer-variants';

const FooterModern: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About $PRICKO', href: '/about' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Ecosystem', href: '/ecosystem' },
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
    <footer className="relative overflow-hidden bg-black">
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={staggerItemVariants} className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with{' '}
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  Privacy Gecko
                </span>
              </h3>
              <p className="text-muted">
                Join our community for exclusive updates, news, and early access.
              </p>
            </motion.div>
            <motion.div variants={staggerItemVariants} className="flex gap-4">
              <a
                href="https://t.me/prickoai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" rightIcon={<FaTelegram />}>
                  Join Telegram
                </Button>
              </a>
              <a
                href="https://twitter.com/PrivacyGecko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" rightIcon={<FaXTwitter />}>
                  Follow Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring' }}>
                <MascotImage size="sm" animate={false} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  PRICKO
                </h3>
                <p className="text-xs text-muted tracking-widest uppercase">Privacy Gecko</p>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Privacy-first utility token powering 8 real products on Solana. Not vaporware — 4 tools live today, 4 more launching in 2026.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Navigate
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                Products
              </h4>
              <ul className="space-y-3">
                {privacyProducts.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <li key={product.name}>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-white/40 group-hover:text-accent transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform">{product.name}</span>
                        <HiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                      </a>
                    </li>
                  );
                })}
                <li>
                  <Link
                    to="/products"
                    className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 flex items-center gap-1 font-medium"
                  >
                    View All <FaArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Get Started
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/how-to-buy">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-sm bg-accent/10 text-accent px-4 py-2.5 rounded-xl border border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-all duration-200 font-medium"
                    >
                      Buy $PRICKO
                      <FaArrowRight className="w-3 h-3" />
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://t.me/prickoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    Join Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://privacygecko.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1"
                  >
                    Privacy Gecko <HiExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/40 text-center md:text-left">
              &copy; {currentYear} Pricko. All rights reserved. Built with{' '}
              <FaHeart className="inline w-3 h-3 text-accent" /> by Privacy Gecko.
            </p>

            {/* Status & Network */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white/40">Network:</span>
                <span className="text-accent font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Solana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
