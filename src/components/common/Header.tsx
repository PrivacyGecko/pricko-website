import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import MascotImage from '../ui/MascotImage';
import ContractAddress from '../ui/ContractAddress';

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
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contract Address Banner */}
      <motion.div
        className="bg-black/60 backdrop-blur-md border-b border-accent/30 py-2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <ContractAddress variant="banner" />
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-black/70 backdrop-blur-lg border-b border-accent/20 shadow-lg'
            : 'bg-black/50 backdrop-blur-md border-b border-accent/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="container-max">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Logo Section with MascotImage */}
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none rounded-lg">
            <MascotImage
              size="xs"
              className="transition-transform duration-300 group-hover:scale-110"
              alt="Privacy Gecko Logo"
            />
            
            {/* Enhanced Brand Text - Shows PRICKO = PRIvacy geCKO */}
            <div className="flex flex-col">
              <motion.h1
                className="text-xl sm:text-2xl font-bold leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* PRICKO - All green with pulsing glow like hero section */}
                <motion.span
                  className="text-accent tracking-wide inline-block"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(45, 212, 191, 0.3)",
                      "0 0 20px rgba(45, 212, 191, 0.5)",
                      "0 0 10px rgba(45, 212, 191, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  PRICKO
                </motion.span>
              </motion.h1>
              {/* Subtitle - The Privacy Gecko Protocol */}
              <span className="text-[10px] sm:text-xs font-bold tracking-wider hidden sm:block text-white">
                The Privacy Gecko Protocol
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
            className="md:hidden p-4 rounded-xl hover:bg-secondary/80 transition-all duration-200 relative focus:outline-none"
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
    </motion.header>
    </div>
  );
};

export default Header;
