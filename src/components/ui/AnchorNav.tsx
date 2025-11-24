import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaQuestionCircle, FaRoad, FaHandshake } from 'react-icons/fa';

interface AnchorItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const anchors: AnchorItem[] = [
  { id: 'hero', label: 'Top', icon: FaRocket },
  { id: 'proof', label: 'Proof', icon: FaChartLine },
  { id: 'social-proof', label: 'Trust', icon: FaUsers },
  { id: 'faq', label: 'FAQ', icon: FaQuestionCircle },
  { id: 'roadmap', label: 'Roadmap', icon: FaRoad },
  { id: 'community', label: 'Community', icon: FaHandshake },
];

/**
 * AnchorNav Component
 *
 * Floating navigation for jumping to different sections of the homepage
 * Shows/hides based on scroll position
 */
const AnchorNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = anchors.map(a => document.getElementById(a.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(anchors[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
          aria-label="Page sections"
        >
          {anchors.map((anchor) => {
            const IconComponent = anchor.icon;
            const isActive = activeSection === anchor.id;

            return (
              <motion.button
                key={anchor.id}
                onClick={() => scrollToSection(anchor.id)}
                className={`group flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'bg-secondary/80 text-muted hover:bg-secondary hover:text-accent'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to ${anchor.label} section`}
                aria-current={isActive ? 'true' : undefined}
              >
                <IconComponent className="w-4 h-4" />
                <span
                  className={`text-xs font-medium overflow-hidden transition-all duration-200 ${
                    isActive ? 'w-auto max-w-20 opacity-100' : 'w-0 max-w-0 opacity-0 group-hover:w-auto group-hover:max-w-20 group-hover:opacity-100'
                  }`}
                >
                  {anchor.label}
                </span>
              </motion.button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default AnchorNav;
