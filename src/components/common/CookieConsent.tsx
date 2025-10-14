import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

type ConsentChoice = 'accepted' | 'rejected' | 'custom';

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice, customPrefs?: ConsentPreferences) => {
    const consentData = {
      choice,
      timestamp: new Date().toISOString(),
      preferences: customPrefs || preferences,
    };

    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowPreferences(false);

    // Trigger callbacks if provided
    if (choice === 'accepted' && onAccept) {
      onAccept();
    } else if (choice === 'rejected' && onReject) {
      onReject();
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveConsent('accepted', allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: ConsentPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveConsent('rejected', onlyEssential);
  };

  const handleSavePreferences = () => {
    saveConsent('custom', preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop for preferences modal */}
          {showPreferences && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
              onClick={() => setShowPreferences(false)}
            />
          )}

          {/* Cookie Consent Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[1000] p-4 md:p-6"
            role="dialog"
            aria-label="Cookie Consent Banner"
            aria-describedby="cookie-consent-description"
          >
            <div className="container-max max-w-5xl">
              <div className="bg-secondary/95 backdrop-blur-xl border border-accent/30 rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="flex flex-col space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 text-3xl">
                      🍪
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Cookie Preferences
                      </h2>
                      <p
                        id="cookie-consent-description"
                        className="text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        We use cookies to enhance your browsing experience, analyze site traffic,
                        and personalize content. By clicking "Accept All", you consent to our use
                        of cookies. You can manage your preferences or reject non-essential cookies.
                      </p>
                      <Link
                        to="/privacy#cookies"
                        className="text-accent hover:text-accent-hover text-sm underline mt-2 inline-block transition-colors duration-200"
                        aria-label="Read our Cookie Policy"
                      >
                        Learn more about our Cookie Policy
                      </Link>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <motion.button
                      onClick={handleAcceptAll}
                      className="btn-primary flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Accept all cookies"
                    >
                      Accept All
                    </motion.button>

                    <motion.button
                      onClick={handleRejectAll}
                      className="flex-1 sm:flex-none px-6 py-3 bg-border/50 hover:bg-border text-white rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Reject non-essential cookies"
                    >
                      Reject All
                    </motion.button>

                    <motion.button
                      onClick={() => setShowPreferences(true)}
                      className="flex-1 sm:flex-none px-6 py-3 border-2 border-accent/50 hover:border-accent text-white rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Manage cookie preferences"
                    >
                      Manage Preferences
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preferences Modal */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="preferences-title"
              >
                <div className="bg-secondary border border-accent/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-secondary border-b border-border p-6 flex items-center justify-between">
                    <h3 id="preferences-title" className="text-2xl font-bold text-white">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
                      aria-label="Close preferences modal"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      Customize your cookie preferences below. Essential cookies are required for
                      basic site functionality and cannot be disabled.
                    </p>

                    {/* Essential Cookies */}
                    <div className="bg-border/30 rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">Essential Cookies</h4>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-400 mr-2">Always Active</span>
                          <div className="w-12 h-6 bg-accent rounded-full relative cursor-not-allowed opacity-50">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        These cookies are necessary for the website to function and cannot be switched off.
                        They include session management, security features, and basic functionality.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-border/30 rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">Analytics Cookies</h4>
                        <button
                          onClick={() => togglePreference('analytics')}
                          className={`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                            preferences.analytics ? 'bg-accent' : 'bg-gray-600'
                          }`}
                          role="switch"
                          aria-checked={preferences.analytics}
                          aria-label="Toggle analytics cookies"
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${
                              preferences.analytics ? 'right-1' : 'left-1'
                            }`}
                          ></div>
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        These cookies help us understand how visitors interact with our website by
                        collecting and reporting information anonymously. This helps us improve our services.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-border/30 rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">Marketing Cookies</h4>
                        <button
                          onClick={() => togglePreference('marketing')}
                          className={`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                            preferences.marketing ? 'bg-accent' : 'bg-gray-600'
                          }`}
                          role="switch"
                          aria-checked={preferences.marketing}
                          aria-label="Toggle marketing cookies"
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${
                              preferences.marketing ? 'right-1' : 'left-1'
                            }`}
                          ></div>
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        These cookies track your activity across websites to deliver more relevant
                        advertising. They may be set by us or third-party advertising partners.
                      </p>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="sticky bottom-0 bg-secondary border-t border-border p-6 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={handleSavePreferences}
                      className="btn-primary flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Save cookie preferences"
                    >
                      Save Preferences
                    </motion.button>
                    <motion.button
                      onClick={() => setShowPreferences(false)}
                      className="flex-1 sm:flex-none px-6 py-3 bg-border/50 hover:bg-border text-white rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Cancel"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
