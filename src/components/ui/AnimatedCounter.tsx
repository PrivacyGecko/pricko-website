import React, { useEffect, useState, useRef } from 'react';
interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  label,
  icon,
  className = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);  const parseValue = (val: string | number): { number: number; prefix: string; suffix: string } => {
    if (typeof val === 'number') {
      return { number: val, prefix: '', suffix: '' };
    }

    if (val.includes('%')) {
      const num = parseFloat(val.replace('%', ''));
      return { number: num, prefix: '', suffix: '%' };
    }

    const matches = val.match(/^([^\d]*)?([\d,.]+)([^\d]*)?$/);
    if (matches) {
      const [, prefix = '', numStr, suffix = ''] = matches;
      const num = parseFloat(numStr.replace(/,/g, ''));
      return { number: num, prefix, suffix };
    }

    const numMatch = val.match(/[\d.]+/);
    if (numMatch) {
      return { number: parseFloat(numMatch[0]), prefix: '', suffix: val.replace(numMatch[0], '') };
    }

    return { number: 0, prefix: '', suffix: val };
  };

  const { number: targetNumber, prefix, suffix } = parseValue(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(targetNumber);
        setHasAnimated(true);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(targetNumber * easeOut));

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber, duration, delay, hasAnimated]);

  const formatDisplayValue = (num: number): string => {
    if (typeof value === 'string' && value.includes(',')) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  const displayValue = prefix + formatDisplayValue(count) + suffix;

  return (
    <div className={'text-center ' + className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: delay / 1000 + 's'
      }}
    >
      {icon && (
        <div
          className="text-accent mb-2"
          style={{
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: (delay + 200) / 1000 + 's'
          }}
        >
          {icon}
        </div>
      )}

      <div
        className="text-2xl font-bold text-accent mb-2"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'transform 0.4s ease-out',
          transitionDelay: (delay + 100) / 1000 + 's'
        }}
      >
        {displayValue}
      </div>

      {label && (
        <div
          className="text-sm text-muted"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
            transitionDelay: (delay + 400) / 1000 + 's'
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default AnimatedCounter;
