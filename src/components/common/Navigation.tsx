import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavigationItem } from '../../types';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Tools', href: '/tools' },
  { name: 'Tokenomics', href: '/tokenomics' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Contact', href: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const linkClass = mobile
    ? "block py-3 px-4 text-lg font-medium transition-colors hover:text-accent"
    : "px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative";

  const activeLinkClass = mobile
    ? "text-accent border-l-2 border-accent bg-accent/10"
    : "text-accent";

  return (
    <nav className={mobile ? "space-y-1 mt-4" : "flex items-center space-x-1"}>
      {navigationItems.map((item, index) => {
        const active = isActive(item.href);
        
        return (
          <motion.div
            key={item.name}
            initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
            animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ delay: mobile ? index * 0.1 : index * 0.05 }}
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
      })}
      
      {/* CTA Button */}
      <motion.div
        initial={mobile ? { x: -20, opacity: 0 } : { y: -10, opacity: 0 }}
        animate={mobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ delay: mobile ? navigationItems.length * 0.1 : navigationItems.length * 0.05 }}
        className={mobile ? "pt-4 border-t border-border mt-4" : "ml-4"}
      >
        <button className="btn-primary text-sm px-4 py-2">
          Buy $PRICK
        </button>
      </motion.div>
    </nav>
  );
};

export default Navigation;