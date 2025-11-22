import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHome, FaTools, FaQuestionCircle, FaArrowRight, FaShieldAlt, FaRocket } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  // Popular page links
  const popularPages = [
    { icon: FaHome, label: 'Home', path: '/', description: 'Return to homepage' },
    { icon: FaTools, label: 'Privacy Tools', path: '/tools', description: 'Explore our tools' },
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
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <h1
                className="text-[12rem] md:text-[16rem] font-black leading-none gradient-text"
                aria-label="Error 404"
              >
                404
              </h1>
              {/* Gecko Emoji positioned at the "0" */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl">
                🦎
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Even Geckos Get Lost Sometimes...</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
              Looks like you've wandered off the privacy trail. Don't worry, we'll help you get back on track!
            </p>
          </div>

          {/* Privacy-themed Message */}
          <div className="bg-secondary/50 border border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm mb-12 max-w-2xl mx-auto">
            <p className="text-accent text-lg md:text-xl text-center leading-relaxed">
              <span className="font-semibold">Good news:</span> This 404 page respects your privacy more than most websites respect their existing pages.
              <span className="block mt-2">🔒 No trackers. No surveillance. Just a lost gecko.</span>
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/')}
              className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg transition-colors"
              aria-label="Go to homepage"
            >
              <FaHome /> Go Home
            </button>
            <Link to="/tools">
              <button
                className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 transition-colors"
                aria-label="View privacy tools"
              >
                <FaTools /> View Privacy Tools
              </button>
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Popular Pages</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => {
                const IconComponent = page.icon;
                return (
                  <div key={page.path}>
                    <Link to={page.path}>
                      <div
                        className="card text-center h-full hover:bg-secondary/80 cursor-pointer group transition-colors"
                        role="button"
                        aria-label={`Navigate to ${page.label}`}
                      >
                        <div className="text-4xl text-accent mb-4 inline-block">
                          <IconComponent aria-hidden="true" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                          {page.label}
                        </h4>
                        <p className="text-sm text-muted">{page.description}</p>
                        <div className="mt-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
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
          <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <div className="text-5xl">
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
                className="btn-primary inline-flex items-center gap-3 px-6 py-3 transition-colors"
                aria-label="Contact support"
              >
                Contact Us <FaArrowRight aria-hidden="true" />
              </button>
            </Link>
          </div>

          {/* Fun Easter Egg Message */}
          <div className="text-center mt-12">
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
