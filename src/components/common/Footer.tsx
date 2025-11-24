import React from 'react';
import { Link } from 'react-router-dom';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import { FaSearch, FaFolderOpen, FaShieldAlt, FaLock } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Privacy Products', href: '/products' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Contact', href: '/contact' },
  ];

  const privacyProducts = [
    {
      name: 'Gecko Advisor',
      href: 'https://advisor.privacygecko.com',
      icon: FaSearch
    },
    {
      name: 'Gecko Share',
      href: 'https://share.privacygecko.com',
      icon: FaFolderOpen
    },
    {
      name: 'Gecko Guard',
      href: 'https://guard.privacygecko.com',
      icon: FaShieldAlt
    },
    {
      name: 'Gecko Lock',
      href: 'https://lock.privacygecko.com',
      icon: FaLock
    },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Contact Support', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-primary border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container-max section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Privacy Products</h4>
            <ul className="space-y-3">
              {privacyProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted hover:text-accent transition-all duration-200 group"
                    >
                      <IconComponent className="text-accent text-lg group-hover:scale-110 transition-transform" />
                      <span>{product.name}</span>
                      <span className="badge-live">Live</span>
                    </a>
                  </li>
                );
              })}
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
                    className="text-muted hover:text-accent transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-12 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-muted">
              &copy; {currentYear} Pricko. Privacy Gecko Approved. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted">
              <span>Built with privacy in mind</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted transition-transform duration-200 hover:scale-105">
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
