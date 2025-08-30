import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaLock } from 'react-icons/fa';

interface PremiumFeatureProps {
  feature: string;
  tier?: 'free' | 'pro';
  className?: string;
}

const PremiumFeature: React.FC<PremiumFeatureProps> = ({ 
  feature, 
  tier = 'free', 
  className = '' 
}) => {
  const isPremium = tier === 'pro';

  return (
    <motion.div
      className={`flex items-start gap-2 text-xs ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-1 mt-0.5">
        {isPremium ? (
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <FaCrown className="text-yellow-400 text-xs" />
            <span className="text-yellow-400 text-xs font-bold">PRO</span>
          </motion.div>
        ) : (
          <span className="text-accent text-xs">✓</span>
        )}
      </div>
      
      <span className={`${
        isPremium 
          ? 'text-white group-hover:text-yellow-100' 
          : 'text-muted group-hover:text-white'
      } transition-colors leading-relaxed`}>
        {feature}
        {isPremium && (
          <motion.span
            className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full text-xs"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FaLock className="text-xs" />
            <span>Token Required</span>
          </motion.span>
        )}
      </span>
    </motion.div>
  );
};

export default PremiumFeature;