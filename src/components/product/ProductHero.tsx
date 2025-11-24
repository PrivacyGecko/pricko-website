import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import MascotImage from '../ui/MascotImage';
import type { Product } from '../../types/config';

interface ProductHeroProps {
  product: Product;
  className?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product, className = '' }) => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-accent">{product.name}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-3/5 text-center lg:text-left fade-left">
            <div className="inline-flex items-center gap-2 mb-6 fade-scale" style={{ animationDelay: '0.1s' }}>
              <span className={`px-4 py-2 rounded-full text-xs font-bold ${status.bg} ${status.border} ${status.text} border-2 flex items-center gap-2`}>
                <span>{status.icon}</span>
                {status.label}
                {product.progress > 0 && product.progress < 100 && (
                  <span className="ml-2">({product.progress}% Complete)</span>
                )}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text text-shadow">{product.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted mb-6 leading-relaxed" style={{ animationDelay: '0.3s' }}>
              {product.subtitle}
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.4s' }}>
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.5s' }}>
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
                to="/products"
                className="btn-secondary inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <FaArrowLeft />
                All Tools
              </Link>
            </div>

            {product.status !== 'live' && product.launchDate && (
              <p className="mt-6 text-sm text-muted" style={{ animationDelay: '0.6s' }}>
                Estimated Launch: <span className="text-accent font-semibold">{product.launchDate}</span>
              </p>
            )}
          </div>

          <div className="lg:w-2/5 flex justify-center items-center fade-scale" style={{ animationDelay: '0.3s' }}>
            <MascotImage size="xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
