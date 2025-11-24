import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { observeScrollAnimations } from '../../hooks/useScrollAnimation';

interface ProductFeaturesProps {
  features: string[];
  className?: string;
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features, className = '' }) => {
  useEffect(() => {
    return observeScrollAnimations('.animate-on-scroll');
  }, []);

  return (
    <section className={`section-padding bg-secondary/20 ${className}`}>
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Key Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 flex items-start gap-4 hover:border-accent/40 transition-colors animate-on-scroll fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl mt-1" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
