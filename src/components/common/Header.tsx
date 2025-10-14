import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
// import ContractAddress from '../ui/ContractAddress';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-custom border-b border-border shadow-lg'
          : 'bg-primary/80 backdrop-blur-custom border-b border-border/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-lg">
            <motion.div
              className="relative w-12 h-12 sm:w-14 sm:h-14"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              
              {/* Logo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full flex justify-center items-center p-2 shadow-lg ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="Pricko Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
            </motion.div>
            
            {/* Enhanced Brand Text */}
            <div className="flex flex-col">
              <motion.h1
                className="text-xl sm:text-2xl font-bold leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="gradient-text tracking-wide">PRICKO</span>
              </motion.h1>
              <span className="text-xs text-muted font-medium tracking-wider hidden sm:block">
                Privacy Gecko
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-4 rounded-xl hover:bg-secondary/80 transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : -4
                }}
              />
              <motion.span
                className="bg-white block h-0.5 w-6 rounded-full my-1 transition-all duration-300 ease-out"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  x: isMenuOpen ? 20 : 0
                }}
              />
              <motion.span
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 4
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="px-4 pb-6 border-t border-border/50 bg-secondary/30 backdrop-blur-sm"
            initial={{ y: -20 }}
            animate={{ y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 : 0 }}
          >
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Contract Address Banner - Only show when token launches */}
      {/* Uncomment this section when token launches:
      <motion.div
        className="bg-gradient-to-r from-accent/10 to-accent/5 border-b border-accent/20 py-2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <ContractAddress variant="minimal" />
          </div>
        </div>
      </motion.div>
      */}
    </motion.header>
  );
};

export default Header;