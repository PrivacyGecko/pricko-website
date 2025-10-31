import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaCheckCircle, FaGithub } from 'react-icons/fa';
import type { ProductSecurity as SecurityType } from '../../types/config';

interface ProductSecurityProps {
  security: SecurityType;
  className?: string;
}

/**
 * ProductSecurity Component
 * 
 * Displays product security features and trust indicators
 * Features:
 * - Encryption type
 * - Architecture overview
 * - Audit status badge
 * - Open source link (if available)
 */
const ProductSecurity: React.FC<ProductSecurityProps> = ({ security, className = '' }) => {
  return (
    <section className={`section-padding bg-secondary/30 ${className}`}>
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
            Security <span className="gradient-text">First</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Your privacy and security are our top priorities
          </p>
        </motion.div>

        {/* Security Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Encryption */}
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FaLock className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Encryption</h3>
            <p className="text-gray-300 text-sm">{security.encryption}</p>
          </motion.div>

          {/* Architecture */}
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaShieldAlt className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Architecture</h3>
            <p className="text-gray-300 text-sm">{security.architecture}</p>
          </motion.div>

          {/* Audit Status */}
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaCheckCircle className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Audit Status</h3>
            <p className="text-gray-300 text-sm">{security.auditStatus}</p>
          </motion.div>

          {/* Open Source */}
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaGithub className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Open Source</h3>
            <p className="text-gray-300 text-sm">
              {security.openSource === 'Yes' ? 'Fully Open Source' : security.openSource}
            </p>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/30">
            <FaShieldAlt className="text-accent" />
            <span className="text-accent font-semibold">Privacy Gecko Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSecurity;
