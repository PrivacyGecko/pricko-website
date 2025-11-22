import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
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
      <div className="bg-black/60 backdrop-blur-md border-b border-accent/30 py-2">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <ContractAddress variant="banner" />
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-black/70 backdrop-blur-lg border-b border-accent/20 shadow-lg'
            : 'bg-black/50 backdrop-blur-md border-b border-accent/10'
        }`}
      >
      <div className="container-max">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          {/* Brand Text Only */}
          <Link to="/" className="flex items-center group focus:outline-none rounded-lg">
            {/* Enhanced Brand Text - Shows PRICKO = PRIvacy geCKO */}
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                {/* PRICKO - All green with static text */}
                <span className="text-accent tracking-wide inline-block">
                  PRICKO
                </span>
              </h1>
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
          <button
            onClick={toggleMenu}
            className="md:hidden p-4 rounded-xl hover:bg-secondary/80 transition-all duration-200 relative focus:outline-none"
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
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
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
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-6 border-t border-border/50 bg-secondary/30 backdrop-blur-sm">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Header;
