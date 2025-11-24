import React from 'react';

import { IconType } from 'react-icons';

interface ProofMetricProps {
  icon: IconType;
  value: string;
  label: string;
  description: string;
  delay?: number;
}

const ProofMetric: React.FC<ProofMetricProps> = ({
  icon: Icon,
  value,
  label,
  description,
  delay = 0
}) => {
  return (
    <div
      className="bg-secondary/30 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-8 h-8 text-accent" />
        </div>

        {/* Value */}
        <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
          {value}
        </div>

        {/* Label */}
        <div className="text-lg font-semibold text-white mb-2">
          {label}
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProofMetric;
