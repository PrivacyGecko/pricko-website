import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface ProductFeaturesProps {
  features: string[];
  className?: string;
}

/**
 * ProductFeatures Component
 * 
 * Displays product features in a grid layout
 * Features:
 * - 2-column grid (responsive to 1 column on mobile)
 * - Checkmark icons
 * - Fade-in animations
 * - Card-based design
 */
const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features, className = '' }) => {
  return (
    <section className={`section-padding bg-secondary/20 ${className}`}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Key Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 flex items-start gap-4 hover:border-accent/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl mt-1" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
