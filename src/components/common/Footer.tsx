import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Telegram', href: '#', icon: '📱' },
    { name: 'Discord', href: '#', icon: '💬' },
    { name: 'GitHub', href: '#', icon: '🔗' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Privacy Tools', href: '/tools' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '/roadmap' },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Pricko Logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold gradient-text">PRICKO</h3>
            </div>
            <p className="text-muted mb-4 max-w-md">
              Privacy-focused memecoin with real utility. Born in memes, forged in data abuse. 
              Your crypto-native gecko guardian fighting surveillance one transaction at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-border rounded-lg flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Privacy Tools</h4>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-muted">🔒 Pricko VPN</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-muted">💬 Pricko File Sharing - Free</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-muted">🛡️ Pricko Guard</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted mb-4 sm:mb-0">
            &copy; {currentYear} Pricko. Privacy Gecko Approved. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted hover:text-accent transition-colors">
              Disclaimer
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;