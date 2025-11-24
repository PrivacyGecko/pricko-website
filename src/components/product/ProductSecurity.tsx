import React, { useEffect } from 'react';
import { FaLock, FaShieldAlt, FaCheckCircle, FaGithub } from 'react-icons/fa';
import { observeScrollAnimations } from '../../hooks/useScrollAnimation';
import type { ProductSecurity as SecurityType } from '../../types/config';

interface ProductSecurityProps {
  security: SecurityType;
  className?: string;
}

const ProductSecurity: React.FC<ProductSecurityProps> = ({ security, className = '' }) => {
  useEffect(() => {
    return observeScrollAnimations('.animate-on-scroll');
  }, []);

  return (
    <section className={`section-padding bg-secondary/30 ${className}`}>
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security <span className="gradient-text">First</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Your privacy and security are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="card p-6 text-center animate-on-scroll fade-up" style={{ animationDelay: '0.1s' }}>
            <FaLock className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Encryption</h3>
            <p className="text-gray-300 text-sm">{security.encryption}</p>
          </div>

          <div className="card p-6 text-center animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
            <FaShieldAlt className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Architecture</h3>
            <p className="text-gray-300 text-sm">{security.architecture}</p>
          </div>

          <div className="card p-6 text-center animate-on-scroll fade-up" style={{ animationDelay: '0.3s' }}>
            <FaCheckCircle className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Audit Status</h3>
            <p className="text-gray-300 text-sm">{security.auditStatus}</p>
          </div>

          <div className="card p-6 text-center animate-on-scroll fade-up" style={{ animationDelay: '0.4s' }}>
            <FaGithub className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-accent mb-2">Open Source</h3>
            <p className="text-gray-300 text-sm">
              {security.openSource === 'Yes' ? 'Fully Open Source' : security.openSource}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center animate-on-scroll fade-scale" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/30">
            <FaShieldAlt className="text-accent" />
            <span className="text-accent font-semibold">Privacy Gecko Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSecurity;
