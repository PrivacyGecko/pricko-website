import { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaShieldAlt, FaPlug, FaServer, FaArrowDown } from 'react-icons/fa';

// ============================================
// TYPESCRIPT INTERFACES
// ============================================

interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  components: string[];
  icon: IconType;
  color: string;
  gradient: [string, string];
}

interface ConnectionFlow {
  from: string;
  to: string;
  label: string;
}

interface ProtocolArchitectureDiagramProps {
  orientation?: 'vertical' | 'horizontal';
  interactive?: boolean;
  showConnections?: boolean;
}

// ============================================
// DATA STRUCTURE
// ============================================

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'privacy-layer',
    title: 'Privacy Layer',
    description: '8 user-facing privacy tools',
    components: [
      'Gecko Advisor',
      'Gecko Share',
      'Gecko Guard',
      'Gecko Lock',
      'Gecko Shell',
      'Gecko View',
      'Gecko Watch',
      'Gecko VPN'
    ],
    icon: FaShieldAlt,
    color: '#4ade80', // Green
    gradient: ['#4ade80', '#22c55e']
  },
  {
    id: 'integration-layer',
    title: 'Integration Layer',
    description: 'GeckoCore API & SDK',
    components: [
      'REST API',
      'WebSocket Events',
      'JavaScript SDK',
      'Token Authentication'
    ],
    icon: FaPlug,
    color: '#06b6d4', // Cyan (protocol color)
    gradient: ['#06b6d4', '#0891b2']
  },
  {
    id: 'infrastructure-layer',
    title: 'Infrastructure Layer',
    description: 'Decentralized node network',
    components: [
      'Privacy Verification Nodes',
      'Data Encryption Nodes',
      'Governance Nodes (GeckoDAO)',
      'Staking Rewards Pool'
    ],
    icon: FaServer,
    color: '#8b5cf6', // Purple (protocol color)
    gradient: ['#8b5cf6', '#7c3aed']
  }
];

const CONNECTION_FLOWS: ConnectionFlow[] = [
  {
    from: 'privacy-layer',
    to: 'integration-layer',
    label: 'Requests'
  },
  {
    from: 'integration-layer',
    to: 'infrastructure-layer',
    label: 'Processes'
  },
  {
    from: 'infrastructure-layer',
    to: 'privacy-layer',
    label: 'Validates'
  }
];

// ============================================
// MAIN COMPONENT
// ============================================

export const ProtocolArchitectureDiagram: FC<ProtocolArchitectureDiagramProps> = ({
  orientation = 'vertical',
  interactive = true,
  showConnections = true
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Desktop horizontal layout
  const isHorizontal = orientation === 'horizontal';

  return (
    <section
      className="relative py-16"
      aria-label="GeckoCore protocol architecture diagram"
    >
      <div className="container-max section-padding">
        {/* Vertical Layout (Default - Mobile & Tablet) */}
        <div
          className={`${
            isHorizontal ? 'hidden lg:grid lg:grid-cols-3 lg:gap-8' : 'space-y-8 lg:space-y-12'
          }`}
        >
          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const Icon = layer.icon;
            const nextLayer = ARCHITECTURE_LAYERS[index + 1];
            const connection = CONNECTION_FLOWS.find((c) => c.from === layer.id);

            return (
              <div key={layer.id} className="relative">
                {/* Layer Card */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : index * 0.3
                  }}
                  viewport={{ once: true }}
                  whileHover={interactive ? { scale: 1.02, y: -4 } : undefined}
                  className={`card-protocol ${interactive ? 'cursor-pointer' : ''}`}
                  style={{
                    background: `linear-gradient(135deg, ${layer.gradient[0]}15 0%, ${layer.gradient[1]}10 100%)`,
                    borderColor: `${layer.color}50`,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 20px ${layer.color}20`
                  }}
                  tabIndex={interactive ? 0 : undefined}
                  role="region"
                  aria-labelledby={`layer-${layer.id}`}
                >
                  {/* Header: Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Icon with Glow */}
                    <div
                      className="relative flex items-center justify-center w-14 h-14 rounded-lg"
                      style={{
                        backgroundColor: `${layer.color}20`,
                        boxShadow: `0 0 20px ${layer.color}30`
                      }}
                    >
                      <Icon
                        className="text-2xl"
                        style={{ color: layer.color }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3
                        id={`layer-${layer.id}`}
                        className="text-xl md:text-2xl font-bold text-white"
                      >
                        {layer.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">{layer.description}</p>
                    </div>
                  </div>

                  {/* Components Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
                    {layer.components.map((component, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: shouldReduceMotion ? 0 : index * 0.3 + idx * 0.05
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-3 py-2 rounded-md"
                        style={{
                          backgroundColor: `${layer.color}10`,
                          borderLeft: `2px solid ${layer.color}`
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: layer.color }}
                          aria-hidden="true"
                        />
                        <span className="text-xs md:text-sm text-white/80">{component}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pulsing Glow Effect (if interactive) */}
                  {interactive && !shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: `radial-gradient(circle at center, ${layer.color}40 0%, transparent 70%)`,
                        filter: 'blur(20px)'
                      }}
                    />
                  )}
                </motion.article>

                {/* Connection Arrow (Vertical Layout Only) */}
                {showConnections && nextLayer && !isHorizontal && (
                  <motion.div
                    className="flex flex-col items-center my-6 lg:my-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.3 + 0.4
                    }}
                    viewport={{ once: true }}
                    role="img"
                    aria-label={`${connection?.label || 'flows'} to ${nextLayer.title}`}
                  >
                    {/* Arrow Icon */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: [0, 8, 0],
                              opacity: [0.5, 1, 0.5]
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="flex flex-col items-center gap-2"
                    >
                      <FaArrowDown
                        className="text-3xl"
                        style={{ color: layer.color }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    {/* Connection Label */}
                    {connection && (
                      <span
                        className="mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${layer.color}20, ${nextLayer.color}20)`,
                          border: `1px solid ${layer.color}30`,
                          color: layer.color
                        }}
                      >
                        {connection.label}
                      </span>
                    )}

                    {/* Animated Traveling Dot */}
                    {!shouldReduceMotion && (
                      <motion.div
                        className="w-2 h-2 rounded-full mt-2"
                        style={{
                          backgroundColor: layer.color,
                          boxShadow: `0 0 10px ${layer.color}`
                        }}
                        animate={{
                          y: [0, 40, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.5
                        }}
                      />
                    )}
                  </motion.div>
                )}

                {/* Horizontal Connection Arrow (Desktop Only) */}
                {showConnections && nextLayer && isHorizontal && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-10 flex-col items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.3 + 0.4
                    }}
                    viewport={{ once: true }}
                    role="img"
                    aria-label={`${connection?.label || 'flows'} to ${nextLayer.title}`}
                  >
                    {/* Horizontal Arrow (Rotated 90 degrees) */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              x: [0, 8, 0],
                              opacity: [0.5, 1, 0.5]
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="transform rotate-[-90deg]"
                    >
                      <FaArrowDown
                        className="text-2xl"
                        style={{ color: layer.color }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    {/* Connection Label (Horizontal) */}
                    {connection && (
                      <span
                        className="mt-2 px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                        style={{
                          background: `linear-gradient(135deg, ${layer.color}20, ${nextLayer.color}20)`,
                          border: `1px solid ${layer.color}30`,
                          color: layer.color
                        }}
                      >
                        {connection.label}
                      </span>
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Screen Reader Description */}
        <div className="sr-only">
          The GeckoCore protocol architecture has three layers: The Privacy Layer contains 8
          user-facing privacy tools including Gecko Advisor, Gecko Share, and 6 others. These tools
          send requests to the Integration Layer, which consists of GeckoCore API and SDK components
          including REST API, WebSocket Events, JavaScript SDK, and Token Authentication. The
          Integration Layer processes requests and sends them to the Infrastructure Layer, which is a
          decentralized node network containing Privacy Verification Nodes, Data Encryption Nodes,
          Governance Nodes, and a Staking Rewards Pool. The Infrastructure Layer validates data and
          sends it back to the Privacy Layer, creating a continuous flow of secure, verified privacy
          operations.
        </div>
      </div>
    </section>
  );
};

export default ProtocolArchitectureDiagram;
