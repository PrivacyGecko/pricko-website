import React from 'react';
import { motion } from 'framer-motion';

interface UtilityTierCardProps {
  tier: number;
  name: string;
  tokenRequirement: string;
  description: string;
  features: string[];
  badge: string;
  color: 'zinc' | 'accent' | 'accent-hover' | 'yellow';
  delay?: number;
}

const UtilityTierCard: React.FC<UtilityTierCardProps> = ({
  tier,
  name,
  tokenRequirement,
  description,
  features,
  badge,
  color,
  delay = 0
}) => {
  const colorClasses = {
    zinc: 'border-zinc-600 bg-zinc-800/30',
    accent: 'border-accent bg-accent/10',
    'accent-hover': 'border-accent-hover bg-accent-hover/10',
    yellow: 'border-yellow-400 bg-yellow-400/10'
  };

  const badgeColorClasses = {
    zinc: 'bg-zinc-700 text-zinc-200',
    accent: 'bg-accent text-black',
    'accent-hover': 'bg-accent-hover text-black',
    yellow: 'bg-yellow-400 text-black'
  };

  return (
    <motion.div
      className={`relative border-2 ${colorClasses[color]} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Tier Badge */}
      <div className="absolute -top-4 left-6">
        <span className={`${badgeColorClasses[color]} px-4 py-1 rounded-full text-sm font-bold`}>
          Tier {tier}
        </span>
      </div>

      {/* Icon */}
      <div className="text-5xl mb-4 mt-2">{badge}</div>

      {/* Tier Name */}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>

      {/* Token Requirement */}
      <p className="text-sm text-accent font-semibold mb-3">{tokenRequirement}</p>

      {/* Description */}
      <p className="text-muted mb-4 leading-relaxed">{description}</p>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-accent mt-1 flex-shrink-0">✓</span>
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UtilityTierCard;
