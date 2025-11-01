import React from 'react';
import { motion } from 'framer-motion';

interface PhaseCardSimpleProps {
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  achievements: string[];
  completionDate?: string;
  delay?: number;
}

const PhaseCardSimple: React.FC<PhaseCardSimpleProps> = ({
  quarter,
  title,
  status,
  achievements,
  completionDate,
  delay = 0
}) => {
  const getStatusConfig = () => {
    const configs = {
      completed: {
        icon: '✅',
        badgeClass: 'badge badge-live',
        badgeText: 'Complete',
        border: 'border-success/30',
        marker: null
      },
      current: {
        icon: '🔄',
        badgeClass: 'badge badge-warning',
        badgeText: 'In Progress',
        border: 'border-warning/50',
        marker: '← YOU ARE HERE'
      },
      upcoming: {
        icon: '⏳',
        badgeClass: 'badge badge-coming-soon',
        badgeText: 'Planned',
        border: 'border-info/30',
        marker: null
      }
    };
    return configs[status];
  };

  const config = getStatusConfig();

  return (
    <motion.div
      className={`card-interactive relative bg-gradient-to-br from-secondary/60 to-secondary/20 border ${config.border} backdrop-blur-sm`}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -4 }}
    >
      {/* Phase Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{config.icon}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-accent font-medium">{quarter}</p>
        </div>
        
        <span className={config.badgeClass}>
          {config.badgeText}
        </span>
      </div>

      {/* YOU ARE HERE Marker */}
      {config.marker && (
        <motion.div
          className="absolute -right-4 top-8 bg-yellow-500 text-black px-4 py-2 rounded-l-lg font-bold text-sm shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        >
          {config.marker}
        </motion.div>
      )}

      {/* Achievements */}
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <span className="text-accent mt-1 text-lg">•</span>
            <span className="leading-relaxed">{achievement}</span>
          </motion.div>
        ))}
      </div>

      {/* Completion Date */}
      {completionDate && (
        <div className="mt-6 pt-4 border-t border-border/30">
          <p className="text-sm text-muted">
            {status === 'completed' ? 'Completed: ' : 'Target: '}
            <span className="text-accent font-medium">{completionDate}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default PhaseCardSimple;
