import React from 'react';
import { motion } from 'framer-motion';

interface VestingPeriod {
  category: string;
  lockPeriod?: string;
  vestingPeriod: string;
  color: string;
  description: string;
}

interface VestingTimelineProps {
  periods: VestingPeriod[];
  delay?: number;
}

const VestingTimeline: React.FC<VestingTimelineProps> = ({ periods, delay = 0 }) => {
  return (
    <motion.div
      className="bg-secondary/30 rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Vesting Schedule</h3>
      
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Timeline Bar */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-accent/20"></div>
          
          <div className="grid grid-cols-2 gap-8">
            {periods.map((period, index) => (
              <motion.div
                key={period.category}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-main z-10"></div>
                
                {/* Content Card */}
                <div className={`pt-16 bg-${period.color}/10 border border-${period.color}/30 rounded-xl p-4`}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: period.color }}>
                    {period.category}
                  </h4>
                  
                  {period.lockPeriod && (
                    <div className="mb-2">
                      <span className="text-sm text-muted">Lock Period: </span>
                      <span className="text-sm font-semibold text-white">{period.lockPeriod}</span>
                    </div>
                  )}
                  
                  <div className="mb-2">
                    <span className="text-sm text-muted">Vesting: </span>
                    <span className="text-sm font-semibold text-white">{period.vestingPeriod}</span>
                  </div>
                  
                  <p className="text-xs text-muted mt-2 leading-relaxed">{period.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden space-y-4">
        {periods.map((period, index) => (
          <motion.div
            key={period.category}
            className="relative pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
          >
            {/* Vertical Line */}
            {index !== periods.length - 1 && (
              <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-accent/20"></div>
            )}
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-accent border-4 border-bg-main"></div>
            
            {/* Content Card */}
            <div className="bg-secondary/50 border border-accent/20 rounded-xl p-4">
              <h4 className="text-lg font-bold mb-2 text-accent">{period.category}</h4>
              
              {period.lockPeriod && (
                <div className="mb-1">
                  <span className="text-sm text-muted">Lock: </span>
                  <span className="text-sm font-semibold text-white">{period.lockPeriod}</span>
                </div>
              )}
              
              <div className="mb-1">
                <span className="text-sm text-muted">Vesting: </span>
                <span className="text-sm font-semibold text-white">{period.vestingPeriod}</span>
              </div>
              
              <p className="text-xs text-muted mt-2 leading-relaxed">{period.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VestingTimeline;
