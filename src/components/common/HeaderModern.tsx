import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTelegram, FaChartPie, FaRoad, FaCubes, FaShieldAlt, FaWifi } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMenuAlt3, HiX, HiSparkles } from 'react-icons/hi';
import { IconType } from 'react-icons';
import MascotImage from '../ui/MascotImage';
import { Button } from '../../design-system';
import { cn } from '../../design-system/utils/cn';
import { useProjectConfig } from '../../hooks/useProjectConfig';

// Navigation dropdown for $PRICKO Token
interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: IconType;
  external?: boolean;
  status?: 'live' | 'beta' | 'coming-soon';
  separator?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  mobile?: boolean;
  onItemClick?: () => void;
  width?: 'default' | 'wide';
}

const STATUS_CONFIG = {
  live: { label: 'Live', color: 'text-green-400', bg: 'bg-green-400/10' },
  beta: { label: 'Beta', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  'coming-soon': { label: 'Coming Soon', color: 'text-muted', bg: 'bg-muted/10' },
};

const WIDTH_CLASSES = {
  default: 'min-w-[240px]',
  wide: 'min-w-[320px]',
};

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items, mobile, onItemClick, width = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderStatusBadge = (status?: DropdownItem['status']) => {
    if (!status) return null;
    const config = STATUS_CONFIG[status];
    return (
      <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${config.color} ${config.bg}`}>
        {config.label}
      </span>
    );
  };

  const renderIcon = (Icon?: IconType, isDisabled: boolean = false) => {
    if (!Icon) return null;
    const colorClass = isDisabled ? 'text-muted/50' : 'text-muted group-hover:text-accent';
    return <Icon className={`w-4 h-4 flex-shrink-0 ${colorClass} transition-colors`} aria-hidden="true" />;
  };

  if (mobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium text-white hover:text-accent transition-colors"
        >
          {label}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-4 space-y-1">
                {items.map((item, index) => {
                  if (item.separator) {
                    return <div key={`sep-${index}`} className="my-2 mx-4 border-t border-white/10" />;
                  }

                  const isComingSoon = item.status === 'coming-soon';
                  const labelColorClass = isComingSoon ? 'text-muted/60' : '';
                  const descColorClass = isComingSoon ? 'text-muted/40' : 'text-muted';

                  return (
                    <Link
                      key={item.href}
                      to={isComingSoon ? '#' : item.href}
                      onClick={isComingSoon ? (e) => e.preventDefault() : onItemClick}
                      className={`group flex items-center gap-3 py-2.5 px-4 rounded transition-colors ${
                        isComingSoon ? 'cursor-default' : 'hover:bg-white/5'
                      }`}
                    >
                      {item.icon && renderIcon(item.icon, isComingSoon)}
                      <div className="flex-1 min-w-0">
                        <div className={`flex items-center gap-2 ${labelColorClass}`}>
                          <span>{item.label}</span>
                        </div>
                        {item.description && (
                          <p className={`text-xs ${descColorClass} mt-0.5 truncate`}>{item.description}</p>
                        )}
                      </div>
                      {renderStatusBadge(item.status)}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
        {label}
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className={`bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl ${WIDTH_CLASSES[width]} overflow-hidden`}>
              <div className="py-2">
                {items.map((item, index) => {
                  if (item.separator) {
                    return <div key={`sep-${index}`} className="my-2 mx-3 border-t border-white/10" />;
                  }

                  const isComingSoon = item.status === 'coming-soon';
                  const labelColorClass = isComingSoon ? 'text-muted/60' : '';
                  const descColorClass = isComingSoon ? 'text-muted/40' : 'text-muted';
                  const hoverClass = isComingSoon ? '' : 'hover:bg-white/5 hover:border-l-accent';
                  const cursorClass = isComingSoon ? 'cursor-default' : '';

                  return (
                    <Link
                      key={item.href}
                      to={isComingSoon ? '#' : item.href}
                      onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
                      className={`group flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 border-l-2 border-transparent ${hoverClass} ${cursorClass}`}
                    >
                      {item.icon && renderIcon(item.icon, isComingSoon)}
                      <div className="flex-1 min-w-0">
                        <div className={`flex items-center gap-2 font-medium text-white/80 group-hover:text-white ${labelColorClass}`}>
                          <span>{item.label}</span>
                        </div>
                        {item.description && (
                          <p className={`text-xs ${descColorClass} mt-0.5`}>{item.description}</p>
                        )}
                      </div>
                      {renderStatusBadge(item.status)}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeaderModern: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getLiveProducts } = useProjectConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Navigation items with icons and descriptions
  const prickoItems: DropdownItem[] = [
    { 
      label: 'What is $PRICKO?', 
      href: '/about',
      icon: HiSparkles,
      description: 'Learn about our mission & token'
    },
    { 
      label: 'Tokenomics', 
      href: '/tokenomics',
      icon: FaChartPie,
      description: 'Distribution, utility & supply'
    },
    { 
      label: 'Roadmap', 
      href: '/roadmap',
      icon: FaRoad,
      description: 'Development timeline & milestones'
    },
    { 
      label: 'Ecosystem', 
      href: '/ecosystem',
      icon: FaCubes,
      description: 'GeckoCore protocol & products'
    },
  ];

  // Build product items with descriptions
  const liveProducts = getLiveProducts();
  const productItems: DropdownItem[] = [
    ...liveProducts.map(product => ({
      label: product.name,
      href: product.url || `/${product.id}`,
      status: product.status as 'live' | 'beta' | 'coming-soon',
      description: product.tagline || undefined,
    })),
    // Separator before coming soon
    { label: '', href: '#sep-1', separator: true },
    // Coming Soon products
    {
      label: 'Gecko Shell',
      href: '#gecko-shell',
      icon: FaShieldAlt,
      status: 'coming-soon',
      description: 'Encrypted cloud storage'
    },
    {
      label: 'Gecko VPN',
      href: '#gecko-vpn',
      icon: FaWifi,
      status: 'coming-soon',
      description: 'Privacy-first VPN service'
    },
    // Separator before View All
    { label: '', href: '#sep-2', separator: true },
    { 
      label: 'View All Products', 
      href: '/products',
      icon: FaCubes,
      description: 'Explore the full Privacy Gecko ecosystem'
    },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/PrivacyGecko', icon: FaGithub },
    { name: 'Twitter', href: 'https://twitter.com/PrivacyGecko', icon: FaXTwitter },
    { name: 'Telegram', href: 'https://t.me/prickoai', icon: FaTelegram },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <MascotImage size="xs" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-black bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                  PRICKO
                </span>
                <span className="text-[10px] text-muted tracking-widest uppercase hidden sm:block">
                  Privacy Gecko
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavDropdown label="$PRICKO Token" items={prickoItems} width="wide" />
              <NavDropdown label="Products" items={productItems} width="wide" />
              <Link
                to="/how-to-buy"
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  isActive('/how-to-buy') ? 'text-accent' : 'text-white/90 hover:text-white'
                )}
              >
                How to Buy
              </Link>
              <Link
                to="/contact"
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  isActive('/contact') ? 'text-accent' : 'text-white/90 hover:text-white'
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-white/60 hover:text-accent transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <Link to="/how-to-buy">
                  <Button variant="primary" size="sm">
                    Buy $PRICKO
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-secondary/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-lg font-bold text-white">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white"
                >
                  <HiX className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="p-4 space-y-2">
                <NavDropdown
                  label="$PRICKO Token"
                  items={prickoItems}
                  mobile
                  onItemClick={() => setIsMenuOpen(false)}
                />
                <NavDropdown
                  label="Products"
                  items={productItems}
                  mobile
                  onItemClick={() => setIsMenuOpen(false)}
                />
                <Link
                  to="/how-to-buy"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-lg font-medium text-white hover:text-accent transition-colors"
                >
                  How to Buy
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-lg font-medium text-white hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Social Links */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white/60 hover:text-accent transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="p-4">
                <Link to="/how-to-buy" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="lg" fullWidth>
                    Buy $PRICKO
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderModern;
