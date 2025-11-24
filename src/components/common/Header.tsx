import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MascotImage from '../ui/MascotImage';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-custom border-b border-border shadow-lg'
          : 'bg-primary/80 backdrop-blur-custom border-b border-border/50'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Logo Section with MascotImage */}
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-lg">
            <MascotImage
              size="xs"
              className="transition-transform duration-300 group-hover:scale-110"
              alt="Privacy Gecko Logo"
            />
            
            {/* Enhanced Brand Text */}
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight transition-transform duration-200 hover:scale-105">
                <span className="gradient-text tracking-wide">PRICKO</span>
              </h1>
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
          <button
            onClick={toggleMenu}
            className="md:hidden p-4 rounded-xl hover:bg-secondary/80 transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary active:scale-95"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`bg-white block h-0.5 w-6 rounded-full my-1 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0 translate-x-5' : 'opacity-100 translate-x-0'
                }`}
              />
              <span
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-4 pb-6 border-t border-border/50 bg-secondary/30 backdrop-blur-sm transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-5'
            }`}
          >
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
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
    </header>
  );
};

export default Header;
