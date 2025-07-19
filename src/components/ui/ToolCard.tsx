import React from 'react';
import { motion } from 'framer-motion';
import { ToolCardProps } from '../../types';

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  status = 'coming-soon',
  delay = 0,
  className = ''
}) => {
  const getStatusBadge = (status: string) => {
    const badges = {
      live: "bg-green-500 text-black",
      beta: "bg-yellow-500 text-black",
      "coming-soon": "bg-orange-500 text-white"
    };
    const labels = {
      live: "Live",
      beta: "Beta",
      "coming-soon": "Coming Soon"
    };
    return { class: badges[status as keyof typeof badges], label: labels[status as keyof typeof labels] };
  };

  const badge = getStatusBadge(status);
  return (
    <motion.div
      className={`card group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(234, 88, 12, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
          whileHover={{ rotate: 5 }}
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-8 h-8 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.class}`}>
              {badge.label}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-accent to-accent-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ToolCard;