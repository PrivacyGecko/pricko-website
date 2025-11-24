import React, { useState, useRef } from 'react';
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
    <div
      className={'card group cursor-pointer hover:scale-102 hover-lift transition-all duration-500 ' + className}
      style={{
        opacity: 0,
        animation: 'fadeInUp 0.5s ease-out forwards',
        animationDelay: delay + 's',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(234, 88, 12, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:rotate-2">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-full h-full rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-all duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="space-y-3 w-full">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <span className={'px-3 py-1 rounded-full text-xs font-bold ' + badge.class}>
              {badge.label}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors duration-300 px-2">
            {description}
          </p>
          
          {features.length > 0 && (
            <div className="w-full">
              <button
                className="flex items-center justify-center gap-2 text-accent hover:text-accent-hover hover:scale-102 transition-all text-sm font-medium w-full py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFeatures(!showFeatures);
                }}
                aria-label={showFeatures ? "Hide key features" : "Show key features"}
                aria-expanded={showFeatures}
              >
                {showFeatures ? 'Hide Key Features' : 'Show Key Features'}
                {showFeatures ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: showFeatures ? '1000px' : '0',
                  opacity: showFeatures ? 1 : 0
                }}
              >
                <div className="mt-4 space-y-2 px-4">
                  {features.map((feature, index) => (
                    typeof feature === 'string' ? (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <FaCheck className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ) : (
                      <PremiumFeature
                        key={index}
                        feature={feature.name}
                        tier={feature.tier}
                      />
                    )
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
