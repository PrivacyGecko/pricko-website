import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface PhaseCardSimpleProps {
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  achievements: string[];
  completionDate?: string;
  delay?: number;
  learnMoreLink?: string;
  learnMoreText?: string;
}

const PhaseCardSimple: React.FC<PhaseCardSimpleProps> = ({
  quarter,
  title,
  status,
  achievements,
  completionDate,
  delay = 0,
  learnMoreLink,
  learnMoreText = 'Learn More'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref);
  useScrollAnimation(markerRef);

  const getStatusConfig = () => {
    const configs = {
      completed: {
        icon: '✅',
        badgeClass: 'badge badge-live',
        badgeText: 'Complete',
        border: 'border-success/30',
        marker: null
      },
      current: {
        icon: '🔄',
        badgeClass: 'badge badge-warning',
        badgeText: 'In Progress',
        border: 'border-warning/50',
        marker: '← YOU ARE HERE'
      },
      upcoming: {
        icon: '⏳',
        badgeClass: 'badge badge-coming-soon',
        badgeText: 'Planned',
        border: 'border-info/30',
        marker: null
      }
    };
    return configs[status];
  };

  const config = getStatusConfig();

  return (
    <div
      ref={ref}
      className={'animate-on-scroll opacity-0 -translate-x-10 card-interactive relative bg-gradient-to-br from-secondary/60 to-secondary/20 border backdrop-blur-sm ' + config.border}
      style={{ animationDelay: delay + 's' }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{config.icon}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-accent font-medium">{quarter}</p>
        </div>
        
        <span className={config.badgeClass}>
          {config.badgeText}
        </span>
      </div>

      {config.marker && (
        <div
          ref={markerRef}
          className="animate-on-scroll opacity-0 translate-x-5 absolute -right-4 top-8 bg-yellow-500 text-black px-4 py-2 rounded-l-lg font-bold text-sm shadow-lg"
          style={{ animationDelay: (delay + 0.3) + 's' }}
        >
          {config.marker}
        </div>
      )}

      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-gray-300"
          >
            <span className="text-accent mt-1 text-lg">•</span>
            <span className="leading-relaxed">{achievement}</span>
          </div>
        ))}
      </div>

      {learnMoreLink && (
        <div className="mt-6">
          <Link to={learnMoreLink} className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 text-sm font-semibold transition-colors">
            {learnMoreText}
            <FaArrowRight size={14} />
          </Link>
        </div>
      )}

      {completionDate && (
        <div className="mt-6 pt-4 border-t border-border/30">
          <p className="text-sm text-muted">
            {status === 'completed' ? 'Completed: ' : 'Target: '}
            <span className="text-accent font-medium">{completionDate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PhaseCardSimple;
