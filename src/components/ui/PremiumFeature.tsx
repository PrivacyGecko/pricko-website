import React from 'react';
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
    <div className={'flex items-start gap-2 text-xs hover:scale-102 transition-transform duration-200 ' + className}>
      <div className="flex items-center gap-1 mt-0.5">
        {isPremium ? (
          <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-200">
            <FaCrown className="text-yellow-400 text-xs" />
            <span className="text-yellow-400 text-xs font-bold">PRO</span>
          </div>
        ) : (
          <span className="text-accent text-xs">✓</span>
        )}
      </div>
      
      <span className={isPremium ? 'text-white group-hover:text-yellow-100 transition-colors leading-relaxed' : 'text-muted group-hover:text-white transition-colors leading-relaxed'}>
        {feature}
        {isPremium && (
          <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full text-xs hover:scale-105 transition-transform duration-200">
            <FaLock className="text-xs" />
            <span>Token Required</span>
          </span>
        )}
      </span>
    </div>
  );
};

export default PremiumFeature;
