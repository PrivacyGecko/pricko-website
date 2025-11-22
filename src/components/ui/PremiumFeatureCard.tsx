import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface PremiumFeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  status?: 'live' | 'beta' | 'coming-soon';
  url?: string;
}

const PremiumFeatureCard: React.FC<PremiumFeatureCardProps> = ({
  emoji,
  title,
  description,
  status = 'coming-soon',
  url
}) => {
  const CardWrapper = url ? 'a' : 'div';

  const statusColors = {
    live: 'bg-gradient-to-r from-green-500 to-green-400',
    beta: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    'coming-soon': 'bg-gradient-to-r from-purple-500 to-purple-400'
  };

  const statusLabels = {
    live: 'LIVE',
    beta: 'BETA',
    'coming-soon': 'COMING SOON'
  };

  const titleColors = {
    live: 'text-accent',
    beta: 'text-cyan-400',
    'coming-soon': 'text-purple-400'
  };

  return (
    <CardWrapper
      {...(url ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
      className="card-interactive p-8 flex flex-col items-center text-center group cursor-pointer transition-colors"
    >
      <div className={`px-4 py-1.5 rounded-full text-xs font-bold mb-6 text-white ${statusColors[status]}`}>
        {statusLabels[status]}
      </div>

      <div className="text-7xl md:text-8xl mb-6">
        {emoji}
      </div>

      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${titleColors[status]}`}>
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-base md:text-lg flex-grow">
        {description}
      </p>

      <div className={`mt-6 text-accent transition-opacity ${url ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
        <FaArrowRight />
      </div>
    </CardWrapper>
  );
};

export default PremiumFeatureCard;
