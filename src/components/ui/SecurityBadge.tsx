import React from 'react';
import { IconType } from 'react-icons';
import {
  FaShieldAlt,
  FaLock,
  FaCode,
  FaCheckCircle
} from 'react-icons/fa';

export interface SecurityBadgeProps {
  variant: 'audit' | 'encryption' | 'open-source' | 'verified';
  title: string;
  description: string;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({
  variant,
  title,
  description
}) => {
  const variantConfig: Record<string, {
    icon: IconType;
    color: string;
    bgGradient: string;
  }> = {
    audit: {
      icon: FaShieldAlt,
      color: '#4ade80', // accent green
      bgGradient: 'from-accent to-accent-hover'
    },
    encryption: {
      icon: FaLock,
      color: '#22d3ee', // cyan bright
      bgGradient: 'from-cyan-500 to-cyan-400'
    },
    'open-source': {
      icon: FaCode,
      color: '#c084fc', // purple royal
      bgGradient: 'from-purple-500 to-purple-400'
    },
    verified: {
      icon: FaCheckCircle,
      color: '#22c55e', // green-500
      bgGradient: 'from-green-500 to-green-400'
    }
  };

  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
      <div className={`w-16 h-16 bg-gradient-to-br ${config.bgGradient} rounded-2xl flex items-center justify-center mb-4`}>
        <Icon className="text-white text-3xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: config.color }}>
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default SecurityBadge;
