import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCardProps } from '../../types';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PremiumFeature from './PremiumFeature';

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  status = 'coming-soon',
  features = [],
  delay = 0,
  className = '',
  url
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  
  const getStatusBadge = (status: string) => {
    const badges = {
      live: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25",
      beta: "bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-lg shadow-yellow-500/25",
      "coming-soon": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25",
      "in-development": "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25",
      "long-term": "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25"
    };
    const labels = {
      live: "Live & Available",
      beta: "Beta Release",
      "coming-soon": "Coming Soon",
      "in-development": "In Development",
      "long-term": "Phase 3"
    };
    return { class: badges[status as keyof typeof badges], label: labels[status as keyof typeof labels] };
  };

  const badge = getStatusBadge(status);
  
  const handleClick = () => {
    if (url && (status === 'live' || status === 'beta')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={`card group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(234, 88, 12, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
          whileHover={{ rotate: 5 }}
        >
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-8 h-8 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${badge.class}`}>
              {badge.label}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors duration-300 px-2">
            {description}
          </p>
          
          {/* Features Section */}
          {features.length > 0 && (
            <div className="w-full">
              <motion.button
                className="flex items-center justify-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium w-full py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFeatures(!showFeatures);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={showFeatures ? "Hide key features" : "Show key features"}
                aria-expanded={showFeatures}
              >
                Key Features
                {showFeatures ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </motion.button>
              
              <AnimatePresence>
                {showFeatures && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 space-y-2">
                      {features.map((feature, index) => {
                        // Check if this is GeckoShare and if the feature is premium
                        const isGeckoShare = title === "GeckoShare";
                        const isPremiumFeature = isGeckoShare && (
                          feature.includes("Pro") ||
                          feature.includes("premium") ||
                          feature.includes("Wallet-connect")
                        );

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                          >
                            {isGeckoShare ? (
                              <PremiumFeature 
                                feature={feature} 
                                tier={isPremiumFeature ? 'pro' : 'free'}
                                className="group-hover:text-white transition-colors"
                              />
                            ) : (
                              <div className="flex items-start gap-2 text-xs text-muted group-hover:text-white transition-colors">
                                <FaCheck className="text-accent mt-0.5 text-xs flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Hover Effect */}
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-accent to-accent-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ToolCard;