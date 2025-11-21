import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { NavigationItem } from '../../types';
import NavigationDropdown, { DropdownItem } from './NavigationDropdown';
import { useProjectConfig } from '../../hooks/useProjectConfig';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ecosystem', href: '/ecosystem' },
];

// Main nav items (Home, About, Ecosystem)
const mainNavItems = navigationItems;

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const location = useLocation();
  const { getAllProducts } = useProjectConfig();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  // Build "Project" dropdown items (Tools, Tokenomics, Roadmap combined)
  const projectDropdownItems: DropdownItem[] = [
    // Tokenomics, Roadmap, View All Tools at top
    { label: 'Tokenomics', href: '/tokenomics' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'View All Tools', href: '/tools' },
    // Individual tools
    ...getAllProducts().map(product => ({
      label: product.name,
      href: product.url || `/${product.id}`,
      status: product.status as 'live' | 'beta' | 'in-development',
      external: !!product.url
    })),
  ];

  const linkClass = mobile
    ? "block py-3 px-4 text-lg font-medium transition-colors hover:text-accent focus:outline-none rounded"
    : "px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative focus:outline-none rounded";

  const activeLinkClass = mobile
    ? "text-accent border-l-2 border-accent bg-accent/10"
    : "text-accent";

  // Helper to render nav items
  const renderNavItem = (item: NavigationItem, index: number, baseDelay: number) => {
    const active = isActive(item.href);

    return (
      <motion.div
        key={item.name}
        initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
        animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: mobile ? (baseDelay + index) * 0.1 : (baseDelay + index) * 0.05 }}
      >
        {item.external ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} ${active ? activeLinkClass : ''}`}
            onClick={onItemClick}
          >
            {item.name}
            <svg className="inline-block w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        ) : (
          <Link
            to={item.href}
            className={`${linkClass} ${active ? activeLinkClass : ''}`}
            onClick={onItemClick}
          >
            {item.name}
            {!mobile && active && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        )}
      </motion.div>
    );
  };

  return (
    <nav className={mobile ? "space-y-1 mt-4" : "flex items-center space-x-2"}>
      {/* Render Home, About, Ecosystem */}
      {mainNavItems.map((item, index) => renderNavItem(item, index, 0))}

      {/* Project Dropdown - Contains Tools, Tokenomics, Roadmap */}
      <motion.div
        initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
        animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: mobile ? mainNavItems.length * 0.1 : mainNavItems.length * 0.05 }}
      >
        <NavigationDropdown
          label="Project"
          items={projectDropdownItems}
          mobile={mobile}
          onItemClick={onItemClick}
        />
      </motion.div>

      {/* GitHub Link - Highlighted with Teal Accent */}
      <motion.div
        initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
        animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: mobile ? (mainNavItems.length + 1) * 0.1 : (mainNavItems.length + 1) * 0.05 }}
      >
        <motion.a
          href="https://github.com/PrivacyGecko"
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobile
            ? "flex items-center gap-2 py-3 px-4 text-lg font-medium transition-colors bg-accent/10 rounded-lg border border-accent/30"
            : "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-200 bg-accent/10 rounded-lg border border-accent/30 hover:bg-accent/20"
          } text-accent`}
          onClick={onItemClick}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(45, 212, 191, 0.2)",
              "0 0 20px rgba(45, 212, 191, 0.4)",
              "0 0 10px rgba(45, 212, 191, 0.2)"
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.2 },
            y: { duration: 0.2 }
          }}
        >
          <FaGithub className={mobile ? "text-xl" : "text-base"} />
          <span>GitHub</span>
        </motion.a>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
        animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: mobile ? (mainNavItems.length + 2) * 0.1 : (mainNavItems.length + 2) * 0.05 }}
        className={mobile ? "pt-4 border-t border-border mt-4" : "ml-2"}
      >
        <Link to="/how-to-buy">
          <button className="btn-primary text-xs md:text-sm px-3 md:px-4 py-2 whitespace-nowrap">
            Buy $PRICKO
          </button>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navigation;
