import React, { useEffect } from 'react';
import TestimonialCard from './ui/TestimonialCard';
import TrustBadge from './ui/TrustBadge';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { observeScrollAnimations } from '../hooks/useScrollAnimation';
import {
  FaGithub,
  FaShieldAlt,
  FaCheckCircle,
  FaLock
} from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType> = {
  FaGithub,
  FaShieldAlt,
  FaCheckCircle,
  FaLock
};

const SocialProof: React.FC = () => {
  const { getAllTestimonials, getTrustBadges } = useProjectConfig();

  const testimonials = getAllTestimonials();
  const trustBadges = getTrustBadges();

  const featuredTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    return observeScrollAnimations('.animate-on-scroll');
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/40 to-transparent">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Privacy Advocates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
          <p className="text-muted mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Real feedback from users who trust PRICKO for their digital privacy.
            Join thousands who have already made the switch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              product={testimonial.product || undefined}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mb-12 animate-on-scroll fade-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Built on <span className="gradient-text">Trust & Transparency</span>
          </h3>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
            Our commitment to privacy isn't just talk. Here's the proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon] || FaCheckCircle;
            return (
              <TrustBadge
                key={badge.id}
                icon={IconComponent}
                title={badge.title}
                description={badge.description}
                delay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
