import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import type { Product } from '../../types/config';

interface ProductCTAProps {
  productName: string;
  productUrl?: string | null;
  status: Product['status'];
  className?: string;
}

/**
 * ProductCTA Component
 * 
 * Footer call-to-action for product pages
 * Features:
 * - "Back to All Tools" link
 * - Primary action button (Try Now / Join Waitlist based on status)
 * - Gradient background
 * - Newsletter signup option
 */
const ProductCTA: React.FC<ProductCTAProps> = ({ 
  productName, 
  productUrl, 
  status, 
  className = '' 
}) => {
  const isLive = status === 'live';
  const isBeta = status === 'beta';

  return (
    <section className={`section-padding bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 ${className}`}>
      <div className="container-max">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Try <span className="gradient-text">{productName}</span>?
          </h2>
          
          <p className="text-xl text-muted mb-8 leading-relaxed">
            {isLive || isBeta 
              ? `Join thousands of users already protecting their privacy with ${productName}.`
              : `Be among the first to know when ${productName} launches.`
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {productUrl ? (
              <a
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-10 py-4 shadow-lg"
              >
                {isLive ? 'Try Now' : isBeta ? 'Join Beta' : 'Get Early Access'}
                <FaExternalLinkAlt />
              </a>
            ) : (
              <button
                disabled
                className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-10 py-4 opacity-50 cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}

            <Link
              to="/tools"
              className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-10 py-4"
            >
              <FaArrowLeft />
              All Tools
            </Link>
          </div>

          {/* Newsletter Signup (for non-live products) */}
          {!isLive && (
            <motion.div
              className="mt-8 pt-8 border-t border-accent/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-muted mb-4">
                <FaEnvelope className="text-accent" />
                <span className="text-sm">Get notified when {productName} launches</span>
              </div>
              <Link to="/contact" className="text-accent hover:underline text-sm font-semibold">
                Join the Waitlist →
              </Link>
            </motion.div>
          )}

          {/* Gecko Badge */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted text-sm">
              Part of the <span className="text-accent font-semibold">Privacy Gecko</span> ecosystem
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
