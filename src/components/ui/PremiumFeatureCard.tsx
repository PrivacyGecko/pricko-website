import React from 'react';
import { motion } from 'framer-motion';

interface PremiumFeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  status?: 'live' | 'beta' | 'coming-soon';
  url?: string;
  delay?: number;
}

const PremiumFeatureCard: React.FC<PremiumFeatureCardProps> = ({
  emoji,
  title,
  description,
  status = 'coming-soon',
  url,
  delay = 0
}) => {
  const CardWrapper = url ? motion.a : motion.div;
  const cardProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

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
      className="card-interactive p-8 flex flex-col items-center text-center group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      {...cardProps}
    >
      <motion.div
        className={`px-4 py-1.5 rounded-full text-xs font-bold mb-6 text-white ${statusColors[status]}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        viewport={{ once: true }}
      >
        {statusLabels[status]}
      </motion.div>

      <motion.div
        className="text-7xl md:text-8xl mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {emoji}
      </motion.div>

      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${titleColors[status]}`}>
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-base md:text-lg flex-grow">
        {description}
      </p>

      <motion.div
        className={`mt-6 text-accent transition-opacity ${url ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}
      >
        →
      </motion.div>
    </CardWrapper>
  );
};

export default PremiumFeatureCard;
