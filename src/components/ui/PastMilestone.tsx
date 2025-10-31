import React from 'react';
import { motion } from 'framer-motion';

/**
 * PastMilestone Component
 *
 * Displays a completed milestone with:
 * - Green checkmark indicator
 * - Milestone title and description
 * - Date achieved
 * - Visual emphasis on completion
 *
 * Purpose: Build trust by showcasing past achievements
 */

interface PastMilestoneProps {
  title: string;
  description: string;
  date: string;
  delay?: number;
}

const PastMilestone: React.FC<PastMilestoneProps> = ({ title, description, date, delay = 0 }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm shadow-professional"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -3 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="text-xs font-medium text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PastMilestone;
