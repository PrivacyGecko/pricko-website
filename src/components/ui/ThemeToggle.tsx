import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

/**
 * ThemeToggle Component
 *
 * Toggle button for switching between dark and light themes
 * Shows sun icon for light mode, moon icon for dark mode
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border transition-colors duration-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isLight ? 0 : 180,
          scale: 1
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isLight ? (
          <FaSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <FaMoon className="w-5 h-5 text-accent" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
