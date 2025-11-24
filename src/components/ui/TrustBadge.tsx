import React, { useRef } from 'react';
import { IconType } from 'react-icons';
export interface TrustBadgeProps {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon with enhanced styling */}
      <div className="relative w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <Icon className="relative text-accent text-4xl drop-shadow-lg" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TrustBadge;
