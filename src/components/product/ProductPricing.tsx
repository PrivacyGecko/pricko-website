import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaDollarSign, FaCoins } from 'react-icons/fa';
import type { ProductPricing as PricingType } from '../../types/config';

interface ProductPricingProps {
  pricing: PricingType;
  className?: string;
}

/**
 * ProductPricing Component
 * 
 * Displays Free vs Pro pricing tiers
 * Features:
 * - Two-column layout (Free vs Pro)
 * - Feature comparison
 * - Token requirement display
 * - Clear CTAs for each tier
 */
const ProductPricing: React.FC<ProductPricingProps> = ({ pricing, className = '' }) => {
  return (
    <section className={`section-padding ${className}`}>
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
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Start free, upgrade with $PRICKO tokens for premium features
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div
            className="card p-8 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <FaDollarSign className="text-accent text-3xl" />
                <h3 className="text-2xl font-bold">Free</h3>
              </div>
              <p className="text-4xl font-black text-accent mb-2">$0</p>
              <p className="text-muted text-sm">No tokens required</p>
            </div>

            <ul className="space-y-3 mb-8">
              {pricing.free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn-secondary w-full py-3">Get Started Free</button>
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            className="card p-8 relative border-2 border-accent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <FaCoins className="text-accent text-3xl" />
                <h3 className="text-2xl font-bold">Pro</h3>
              </div>
              <p className="text-4xl font-black text-accent mb-2">
                {pricing.pro.priceUSD ? `$${pricing.pro.priceUSD}` : 'Token-Gated'}
              </p>
              <p className="text-muted text-sm">
                {pricing.pro.tokenRequirement || 'Hold $PRICKO tokens'}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pricing.pro.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary w-full py-3">Upgrade to Pro</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;
