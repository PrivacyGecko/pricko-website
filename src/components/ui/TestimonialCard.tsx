import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  product?: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  product,
  rating = 5,
  delay = 0
}) => {
  return (
    <motion.div
      className="card group hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <FaQuoteLeft className="text-accent text-xl" />
      </div>

      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? 'text-accent' : 'text-muted/30'}
              size={16}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-white text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-border/50 pt-4">
        <div className="font-semibold text-white mb-1">{author}</div>
        <div className="text-muted text-sm">{role}</div>
        {product && (
          <div className="text-accent text-xs mt-2 font-medium">
            {product} User
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
