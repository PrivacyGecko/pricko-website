import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export interface FAQ {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  faqs: FAQ[];
  className?: string;
}

/**
 * ProductFAQ Component
 * 
 * Displays frequently asked questions with accordion behavior
 * Features:
 * - Accordion-style collapsible Q&A
 * - Animated expand/collapse
 * - SEO-optimized (FAQPage schema ready)
 * - Mobile-friendly
 */
const ProductFAQ: React.FC<ProductFAQProps> = ({ faqs, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding bg-secondary/20 ${className}`}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              {/* Question Button */}
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <div
                >
                  <FaChevronDown className="text-accent text-xl flex-shrink-0" />
                </div>
              </button>

              {/* Answer Collapse */}
              {openIndex === index && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-accent/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
