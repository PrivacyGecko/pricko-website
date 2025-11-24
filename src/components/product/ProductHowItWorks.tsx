import React, { useEffect } from 'react';
export interface Step {
  step: number;
  title: string;
  description: string;
}

interface ProductHowItWorksProps {
  steps: Step[];
  className?: string;
}

const ProductHowItWorks: React.FC<ProductHowItWorksProps> = ({ steps, className = '' }) => {
  useEffect(() => {
    return observeScrollAnimations('. ');
  }, []);

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple, straightforward process
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              className="flex gap-6 fade-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center text-2xl font-bold shadow-lg">
                  {stepItem.step}
                </div>
              </div>

              <div className="flex-1 pb-8 border-l-2 border-accent/20 pl-6 -ml-8 relative">
                <div className="card p-6 bg-secondary/40 hover:bg-secondary/60 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-3">{stepItem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{stepItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHowItWorks;
