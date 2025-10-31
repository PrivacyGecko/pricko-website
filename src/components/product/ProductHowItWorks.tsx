import React from 'react';
import { motion } from 'framer-motion';

export interface Step {
  step: number;
  title: string;
  description: string;
}

interface ProductHowItWorksProps {
  steps: Step[];
  className?: string;
}

/**
 * ProductHowItWorks Component
 * 
 * Displays step-by-step "How It Works" guide
 * Features:
 * - Vertical timeline layout
 * - Numbered steps with icons
 * - Mobile-friendly design
 * - Scroll animations
 */
const ProductHowItWorks: React.FC<ProductHowItWorksProps> = ({ steps, className = '' }) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple, straightforward process
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((stepItem, index) => (
            <motion.div
              key={index}
              className="flex gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center text-2xl font-bold shadow-lg">
                  {stepItem.step}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8 border-l-2 border-accent/20 pl-6 -ml-8 relative">
                <div className="card p-6 bg-secondary/40 hover:bg-secondary/60 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-3">{stepItem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{stepItem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHowItWorks;
