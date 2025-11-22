import { FC } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaCheckCircle, FaRocket, FaNetworkWired } from 'react-icons/fa';

// ============================================
// TYPESCRIPT INTERFACES
// ============================================

interface TimelinePhase {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  items: string[];
  icon?: IconType;
}

interface UtilityTimelineProps {
  orientation?: 'vertical' | 'horizontal';
  compact?: boolean;
}

// ============================================
// DATA STRUCTURE
// ============================================

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    year: '2024-2025',
    title: 'Live Products',
    description: '4 privacy tools serving users today',
    status: 'completed',
    items: [
      'Gecko Advisor (geckoadvisor.com)',
      'Gecko Share (geckoshare.com)',
      'Gecko Guard (geckoguard.app)',
      'Gecko Lock (geckolock.com)'
    ],
    icon: FaCheckCircle
  },
  {
    year: 'Q1 2026',
    title: 'GeckoCore Protocol',
    description: 'Privacy infrastructure layer launches',
    status: 'current',
    items: [
      'Decentralized privacy verification',
      'Token staking rewards',
      'Governance framework (GeckoDAO)',
      'API access for developers'
    ],
    icon: FaRocket
  },
  {
    year: '2026-2027',
    title: 'Full Ecosystem',
    description: '8 integrated privacy tools',
    status: 'upcoming',
    items: [
      'Gecko Shell (Mobile Browser)',
      'Gecko View (Tracker Detector)',
      'Gecko Watch (Website Monitor)',
      'Gecko VPN (Privacy Network)'
    ],
    icon: FaNetworkWired
  }
];

// ============================================
// STATUS CONFIGURATION
// ============================================

const STATUS_CONFIG = {
  completed: {
    badgeClass: 'badge-success',
    label: 'Completed',
    cardClass: 'card-interactive',
    color: 'rgba(74, 222, 128, 0.5)' // Green
  },
  current: {
    badgeClass: 'badge-protocol',
    label: 'In Progress',
    cardClass: 'card-protocol protocol-glow-pulse',
    color: 'rgba(6, 182, 212, 0.5)' // Cyan
  },
  upcoming: {
    badgeClass: 'badge-info',
    label: 'Upcoming',
    cardClass: 'card-protocol',
    color: 'rgba(139, 92, 246, 0.5)' // Purple
  }
};

// ============================================
// MAIN COMPONENT
// ============================================

export const UtilityTimeline: FC<UtilityTimelineProps> = ({
  orientation = 'vertical',
  compact = false
}) => {
  // Compact mode forces horizontal on desktop
  const isHorizontal = orientation === 'horizontal' || compact;

  return (
    <section
      className={`relative ${compact ? 'py-8' : 'py-16'}`}
      aria-label="Privacy tools timeline"
    >
      <div className={`container-max ${compact ? 'px-4' : 'section-padding'}`}>
        {/* Timeline Container */}
        <div
          className={`relative ${
            isHorizontal
              ? 'hidden lg:grid lg:grid-cols-3 gap-8'
              : 'space-y-12 md:space-y-16'
          }`}
        >
          {/* Timeline Spine (Desktop Vertical) */}
          {!isHorizontal && (
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-cyan-500 to-purple-500 transform -translate-x-1/2 opacity-30" />
          )}

          {/* Timeline Phases */}
          {TIMELINE_PHASES.map((phase, index) => {
            const config = STATUS_CONFIG[phase.status];
            const Icon = phase.icon || FaCheckCircle;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={phase.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                className={`relative ${
                  isHorizontal
                    ? ''
                    : 'md:grid md:grid-cols-2 md:gap-8 md:items-center'
                }`}
              >
                {/* Desktop: Alternating Left/Right Layout */}
                {!isHorizontal && (
                  <>
                    {/* Left Side (Even indices) */}
                    <div
                      className={`${
                        isEven ? 'md:order-1 md:text-right' : 'md:order-2'
                      } hidden md:block`}
                    >
                      {isEven && <PhaseCard phase={phase} config={config} Icon={Icon} />}
                    </div>

                    {/* Timeline Node (Center) */}
                    <div className="hidden md:flex md:order-2 justify-center items-center">
                      <TimelineNode phase={phase} config={config} Icon={Icon} />
                    </div>

                    {/* Right Side (Odd indices) */}
                    <div
                      className={`${
                        isEven ? 'md:order-3' : 'md:order-1 md:text-left'
                      } hidden md:block`}
                    >
                      {!isEven && <PhaseCard phase={phase} config={config} Icon={Icon} />}
                    </div>
                  </>
                )}

                {/* Mobile & Horizontal: Simple Card */}
                <div
                  className={`${
                    isHorizontal ? 'block' : 'md:hidden'
                  }`}
                >
                  <PhaseCard phase={phase} config={config} Icon={Icon} compact={compact} />
                </div>
              </motion.article>
            );
          })}

          {/* Animated Traveling Dot (Desktop Vertical Only) */}
          {!isHorizontal && (
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg"
              animate={{
                y: ['0%', '100%'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}
            />
          )}
        </div>

        {/* Mobile Vertical Timeline (Always Visible on Mobile) */}
        <div className="md:hidden space-y-8">
          {TIMELINE_PHASES.map((phase, index) => {
            const config = STATUS_CONFIG[phase.status];
            const Icon = phase.icon || FaCheckCircle;

            return (
              <motion.article
                key={`mobile-${phase.year}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Mobile Timeline Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-cyan-500 to-purple-500 opacity-30" />

                {/* Mobile Timeline Node */}
                <div
                  className="absolute left-0 top-4 w-4 h-4 rounded-full border-2 transform -translate-x-[7px]"
                  style={{
                    backgroundColor: config.color,
                    borderColor: config.color
                  }}
                />

                {/* Mobile Card */}
                <PhaseCard phase={phase} config={config} Icon={Icon} compact={true} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PHASE CARD SUB-COMPONENT
// ============================================

interface PhaseCardProps {
  phase: TimelinePhase;
  config: typeof STATUS_CONFIG[keyof typeof STATUS_CONFIG];
  Icon: IconType;
  compact?: boolean;
}

const PhaseCard: FC<PhaseCardProps> = ({ phase, config, Icon, compact = false }) => {
  return (
    <motion.div
      className={`${config.cardClass} ${compact ? 'p-4' : 'p-6'}`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      tabIndex={0}
      role="article"
      aria-label={`${phase.title}: ${phase.status}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Year Badge */}
        <span className="badge badge-subtle text-xs font-mono">
          {phase.year}
        </span>

        {/* Status Badge */}
        <span className={`badge ${config.badgeClass}`}>
          {config.label}
        </span>
      </div>

      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-3">
        <Icon
          className={`text-2xl ${
            phase.status === 'completed'
              ? 'text-success'
              : phase.status === 'current'
              ? 'text-cyan-400'
              : 'text-purple-400'
          }`}
          aria-hidden="true"
        />
        <h3
          className={`${
            compact ? 'text-lg' : 'text-xl'
          } font-bold text-white`}
        >
          {phase.title}
        </h3>
      </div>

      {/* Description */}
      <p className={`${compact ? 'text-sm' : 'text-base'} text-muted mb-4`}>
        {phase.description}
      </p>

      {/* Items List */}
      <ul className="space-y-2" role="list">
        {phase.items.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-2 ${
              compact ? 'text-xs' : 'text-sm'
            } text-white/80`}
          >
            <span
              className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                phase.status === 'completed'
                  ? 'bg-success'
                  : phase.status === 'current'
                  ? 'bg-cyan-400'
                  : 'bg-purple-400'
              }`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Accessibility: Screen Reader Status Text */}
      <span className="sr-only">
        Status: {config.label}. Year: {phase.year}.
      </span>
    </motion.div>
  );
};

// ============================================
// TIMELINE NODE SUB-COMPONENT (Desktop Center)
// ============================================

interface TimelineNodeProps {
  phase: TimelinePhase;
  config: typeof STATUS_CONFIG[keyof typeof STATUS_CONFIG];
  Icon: IconType;
}

const TimelineNode: FC<TimelineNodeProps> = ({ phase, config, Icon }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
      viewport={{ once: true }}
    >
      {/* Outer Glow Ring */}
      <div
        className="absolute w-16 h-16 rounded-full opacity-20 animate-ping"
        style={{ backgroundColor: config.color }}
      />

      {/* Node Circle */}
      <div
        className="relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center bg-primary shadow-lg"
        style={{ borderColor: config.color }}
      >
        <Icon
          className={`text-xl ${
            phase.status === 'completed'
              ? 'text-success'
              : phase.status === 'current'
              ? 'text-cyan-400'
              : 'text-purple-400'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default UtilityTimeline;
