import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import { observeScrollAnimations } from '../../hooks/useScrollAnimation';
import type { Product } from '../../types/config';

interface ProductCTAProps {
  productName: string;
  productUrl?: string | null;
  status: Product['status'];
  className?: string;
}

const ProductCTA: React.FC<ProductCTAProps> = ({ 
  productName, 
  productUrl, 
  status, 
  className = '' 
}) => {
  const isLive = status === 'live';
  const isBeta = status === 'beta';

  useEffect(() => {
    return observeScrollAnimations('.animate-on-scroll');
  }, []);

  return (
    <section className={`section-padding bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 ${className}`}>
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Try <span className="gradient-text">{productName}</span>?
          </h2>
          
          <p className="text-xl text-muted mb-8 leading-relaxed">
            {isLive || isBeta 
              ? `Join thousands of users already protecting their privacy with ${productName}.`
              : `Be among the first to know when ${productName} launches.`
            }
          </p>

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

          {!isLive && (
            <div className="mt-8 pt-8 border-t border-accent/20 animate-on-scroll fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center gap-2 text-muted mb-4">
                <FaEnvelope className="text-accent" />
                <span className="text-sm">Get notified when {productName} launches</span>
              </div>
              <Link to="/contact" className="text-accent hover:underline text-sm font-semibold">
                Join the Waitlist →
              </Link>
            </div>
          )}

          <div className="mt-8 animate-on-scroll fade-scale" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted text-sm">
              Part of the <span className="text-accent font-semibold">Privacy Gecko</span> ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
