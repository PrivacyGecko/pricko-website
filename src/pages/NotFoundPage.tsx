import React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { FaHome, FaTools, FaQuestionCircle, FaArrowRight, FaShieldAlt, FaRocket } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  // Popular page links
  const popularPages = [
    { icon: FaHome, label: 'Home', path: '/', description: 'Return to homepage' },
    { icon: FaTools, label: 'Privacy Products', path: '/products', description: 'Explore our products' },
    { icon: FaShieldAlt, label: 'Tokenomics', path: '/tokenomics', description: 'Learn about $PRICKO' },
    { icon: FaRocket, label: 'Roadmap', path: '/roadmap', description: 'See our vision' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10 section-padding">
        <div className="max-w-4xl mx-auto">
          {/* 404 Number with Gecko Icon */}
          <div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <div
              className="relative inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1
                className="text-[12rem] md:text-[16rem] font-black leading-none gradient-text"
                aria-label="Error 404"
              >
                404
              </h1>
              {/* Alert Icon positioned at the "0" */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaExclamationTriangle className="text-accent text-6xl md:text-8xl" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Even Geckos Get Lost Sometimes...</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
              Looks like you've wandered off the privacy trail. Don't worry, we'll help you get back on track!
            </p>
          </div>

          {/* Privacy-themed Message */}
          <div
            className="bg-secondary/50 border border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ borderColor: "rgba(74, 222, 128, 0.4)" }}
          >
            <p className="text-accent text-lg md:text-xl text-center leading-relaxed">
              <span className="font-semibold">Good news:</span> This 404 page respects your privacy more than most websites respect their existing pages.
              <span className="block mt-2">🔒 No trackers. No surveillance. Just a lost gecko.</span>
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => navigate('/')}
              className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to homepage"
            >
              <FaHome /> Go Home
            </button>
            <Link to="/products">
              <button
                className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View privacy products"
              >
                <FaTools /> View Privacy Products
              </button>
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Popular Pages</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => {
                const IconComponent = page.icon;
                return (
                  <div
                    key={page.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  >
                    <Link to={page.path}>
                      <div
                        className="card text-center h-full hover:bg-secondary/80 cursor-pointer group"
                        whileHover={{ y: -5, borderColor: "rgba(74, 222, 128, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        role="button"
                        aria-label={`Navigate to ${page.label}`}
                      >
                        <div
                          className="text-4xl text-accent mb-4 inline-block"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent aria-hidden="true" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                          {page.label}
                        </h4>
                        <p className="text-sm text-muted">{page.description}</p>
                        <div
                          className="mt-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <FaArrowRight className="inline" aria-hidden="true" />
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Section */}
          <div
            className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ borderColor: "rgba(74, 222, 128, 0.4)" }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="text-5xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaQuestionCircle className="text-accent" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Our gecko squad is here to help! Reach out to the community and we'll point you in the right direction.
            </p>
            <Link to="/contact">
              <button
                className="btn-primary inline-flex items-center gap-3 px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact support"
              >
                Contact Us <FaArrowRight aria-hidden="true" />
              </button>
            </Link>
          </div>

          {/* Fun Easter Egg Message */}
          <div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-sm text-muted italic">
              Error Code: GECKO_LOST_404 | Don't worry, your privacy is still intact 🔒
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
