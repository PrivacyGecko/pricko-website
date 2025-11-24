import React from 'react';
import { motion } from 'framer-motion';

interface AllocationItem {
  category: string;
  percentage: number;
  amount: string;
  description: string;
  vestingSchedule?: string;
  color: string;
}

interface DistributionBreakdownProps {
  allocations: AllocationItem[];
  delay?: number;
}

const DistributionBreakdown: React.FC<DistributionBreakdownProps> = ({ allocations, delay = 0 }) => {
  return (
    <motion.section
      className="mb-16"
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Detailed Distribution</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {allocations.map((allocation, index) => (
          <motion.div
            key={allocation.category}
            className="card hover:border-accent/40 transition-all duration-300"
              transition={{ duration: 0.5 }}
          >
            {/* Header with Category and Percentage */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: allocation.color }}
                ></div>
                <h4 className="text-lg font-bold text-white">{allocation.category}</h4>
              </div>
              <span className="text-2xl font-bold" style={{ color: allocation.color }}>{allocation.percentage}%</span>
            </div>
            
            {/* Amount */}
            <div className="mb-3">
              <span className="text-sm text-muted">Amount: </span>
              <span className="text-sm font-semibold text-white">{allocation.amount}</span>
            </div>
            
            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed mb-3">{allocation.description}</p>
            
            {/* Vesting Badge (if applicable) */}
            {allocation.vestingSchedule && (
              <div className="mt-3 pt-3 border-t border-border">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
                  <svg 
                    className="w-4 h-4 text-accent" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <span className="text-xs font-semibold text-accent">{allocation.vestingSchedule}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DistributionBreakdown;
