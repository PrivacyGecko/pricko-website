import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import MascotImage from '../ui/MascotImage';
import type { Product } from '../../types/config';

interface ProductHeroProps {
  product: Product;
  className?: string;
}

/**
 * ProductHero Component
 * 
 * Hero section for product detail pages
 * Features:
 * - MascotImage mascot
 * - Product name + subtitle
 * - Status badge (Live, Beta, In Development)
 * - Primary CTA button
 * - Breadcrumb navigation
 * - Gradient background
 */
const ProductHero: React.FC<ProductHeroProps> = ({ product, className = '' }) => {
  // Status badge configuration
  const statusConfig = {
    live: {
      icon: '🟢',
      label: 'LIVE',
      bg: 'bg-green-500/20',
      border: 'border-green-500',
      text: 'text-green-400'
    },
    beta: {
      icon: '🧪',
      label: 'BETA',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500',
      text: 'text-blue-400'
    },
    'in-development': {
      icon: '⚡',
      label: 'IN DEVELOPMENT',
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500',
      text: 'text-yellow-400'
    },
    'coming-soon': {
      icon: '🚀',
      label: 'COMING SOON',
      bg: 'bg-purple-500/20',
      border: 'border-purple-500',
      text: 'text-purple-400'
    }
  };

  const status = statusConfig[product.status];

  return (
    <section className={`relative section-padding pt-32 pb-20 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-accent transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-accent">{product.name}</span>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <motion.div
            className="lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className={`px-4 py-2 rounded-full text-xs font-bold ${status.bg} ${status.border} ${status.text} border-2 flex items-center gap-2`}>
                <span>{status.icon}</span>
                {status.label}
                {product.progress > 0 && product.progress < 100 && (
                  <span className="ml-2">({product.progress}% Complete)</span>
                )}
              </span>
            </motion.div>

            {/* Product Name */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text text-shadow">{product.name}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-muted mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {product.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {product.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {product.url ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 shadow-lg"
                >
                  {product.status === 'live' ? 'Try Now' : 'Join Beta'}
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              ) : (
                <button
                  disabled
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4 opacity-50 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
              <Link
                to="/tools"
                className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <FaArrowLeft />
                All Tools
              </Link>
            </motion.div>

            {/* Launch Date (if applicable) */}
            {product.status !== 'live' && product.launchDate && (
              <motion.p
                className="mt-6 text-sm text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Estimated Launch: <span className="text-accent font-semibold">{product.launchDate}</span>
              </motion.p>
            )}
          </motion.div>

          {/* Right Column: Mascot */}
          <motion.div
            className="lg:w-2/5 flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MascotImage size="xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
