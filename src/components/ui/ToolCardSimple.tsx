import React from 'react';
import { FaCheck, FaBrain } from 'react-icons/fa';

interface ToolCardSimpleProps {
  icon: string;
  title: string;
  description: string;
  status: 'live' | 'beta' | 'in-development';
  features: string[];
  url?: string;
  hasAI?: boolean;
}

const ToolCardSimple: React.FC<ToolCardSimpleProps> = ({
  icon,
  title,
  description,
  status,
  features,
  url,
  hasAI = false
}) => {
  const getStatusBadge = () => {
    const badges = {
      live: {
        class: "badge badge-live",
        label: "🟢 Live",
        clickable: true
      },
      beta: {
        class: "badge badge-beta",
        label: "🧪 Beta",
        clickable: true
      },
      'in-development': {
        class: "badge badge-coming-soon",
        label: "⚡ In Development",
        clickable: false
      }
    };
    return badges[status];
  };

  const getCTAButton = () => {
    const buttons = {
      live: { text: "Try Now →", class: "btn-primary" },
      beta: { text: "Join Beta →", class: "btn-info" },
      'in-development': { text: "Join Waitlist", class: "btn-secondary" }
    };
    return buttons[status];
  };

  const badge = getStatusBadge();
  const cta = getCTAButton();

  const handleClick = () => {
    if (url && (status === 'live' || status === 'beta')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="card-interactive flex flex-col h-full hover:scale-105 transition-all duration-300">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img
          src={icon}
          alt={title}
          className="w-20 h-20 rounded-2xl shadow-lg"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      {/* Title & Status Badge */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {hasAI && (
            <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full border border-blue-500/30">
              <FaBrain className="text-xs" />
              AI
            </span>
          )}
        </div>
        <span className={badge.class}>
          {badge.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted text-sm text-center mb-4 leading-relaxed">{description}</p>

      {/* Features - Always Visible */}
      <div className="flex-1 space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <FaCheck className="text-accent mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Single CTA Button */}
      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${cta.class} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={handleClick}
        disabled={status === 'in-development'}
      >
        {cta.text}
      </button>
    </div>
  );
};

export default ToolCardSimple;
