import React from 'react';
import { motion } from 'framer-motion';
import { ToolCardProps } from '../../types';

const ToolCard: React.FC<ToolCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  className = '' 
}) => {
  return (
    <motion.div
      className={`card group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 30px rgba(74, 222, 128, 0.2)" 
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
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-accent to-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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