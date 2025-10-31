import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="text-accent text-3xl" />
      </div>
      <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default TrustBadge;
