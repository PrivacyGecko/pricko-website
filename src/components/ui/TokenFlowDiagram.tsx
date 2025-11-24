import { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaUsers, FaCoins, FaServer, FaShieldAlt, IconType } from 'react-icons/fa';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface FlowNode {
  id: string;
  label: string;
  description: string;
  icon: IconType;
  color: string;
  position: { x: number; y: number };
}

interface FlowConnection {
  from: string;
  to: string;
  label: string;
  animated?: boolean;
}

interface TokenFlowDiagramProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  showLabels?: boolean;
}

// ============================================================================
// DATA STRUCTURE
// ============================================================================

const FLOW_NODES: FlowNode[] = [
  {
    id: 'users',
    label: 'Users',
    description: 'Purchase & use privacy tools',
    icon: FaUsers,
    color: '#4ade80', // Green
    position: { x: 50, y: 10 }  // Top center
  },
  {
    id: 'treasury',
    label: 'Treasury',
    description: '$PRICKO token pool',
    icon: FaCoins,
    color: '#06b6d4', // Cyan (protocol color)
    position: { x: 85, y: 50 }  // Right center
  },
  {
    id: 'operators',
    label: 'Node Operators',
    description: 'Run GeckoCore infrastructure',
    icon: FaServer,
    color: '#8b5cf6', // Purple (protocol color)
    position: { x: 50, y: 90 }  // Bottom center
  },
  {
    id: 'tools',
    label: 'Privacy Tools',
    description: '8 products powered by protocol',
    icon: FaShieldAlt,
    color: '#4ade80', // Green
    position: { x: 15, y: 50 }  // Left center
  }
];

const FLOW_CONNECTIONS: FlowConnection[] = [
  {
    from: 'users',
    to: 'treasury',
    label: 'Token Payment',
    animated: true
  },
  {
    from: 'treasury',
    to: 'operators',
    label: 'Staking Rewards',
    animated: true
  },
  {
    from: 'operators',
    to: 'tools',
    label: 'Infrastructure',
    animated: true
  },
  {
    from: 'tools',
    to: 'users',
    label: 'Privacy Protection',
    animated: true
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Generate cubic Bezier curve path between two nodes
const generateCurvePath = (
  fromNode: FlowNode,
  toNode: FlowNode,
  viewBoxWidth: number,
  viewBoxHeight: number
): string => {
  const startX = (fromNode.position.x / 100) * viewBoxWidth;
  const startY = (fromNode.position.y / 100) * viewBoxHeight;
  const endX = (toNode.position.x / 100) * viewBoxWidth;
  const endY = (toNode.position.y / 100) * viewBoxHeight;

  // Calculate control points for smooth curves
  const dx = endX - startX;
  const dy = endY - startY;
  const controlOffset = 0.4;

  const control1X = startX + dx * controlOffset;
  const control1Y = startY + dy * controlOffset - Math.abs(dx) * 0.2;
  const control2X = endX - dx * controlOffset;
  const control2Y = endY - dy * controlOffset + Math.abs(dx) * 0.2;

  return `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${endX} ${endY}`;
};

// Get node by ID
const getNodeById = (id: string): FlowNode | undefined => {
  return FLOW_NODES.find(node => node.id === id);
};

// ============================================================================
// COMPONENT
// ============================================================================

export const TokenFlowDiagram: FC<TokenFlowDiagramProps> = ({
  size = 'medium',
  animated = true,
  showLabels = true
}) => {
  const shouldReduceMotion = useReducedMotion();
  const disableAnimations = shouldReduceMotion || !animated;

  // Size configuration
  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-2xl',
    large: 'max-w-4xl'
  };

  const viewBoxWidth = 800;
  const viewBoxHeight = 600;
  const nodeRadius = 60;

  return (
    <div
      className={`w-full ${sizeClasses[size]} mx-auto`}
      role="img"
      aria-label="Token flow diagram showing circular economy of $PRICKO token"
    >
      <motion.svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Define gradients and filters */}
        <defs>
          {/* Glow filters for nodes */}
          {FLOW_NODES.map((node) => (
            <filter key={`glow-${node.id}`} id={`glow-${node.id}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}

          {/* Animated gradient for flow dots */}
          <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background connections (drawn first, behind nodes) */}
        <g role="group" aria-label="Token flow connections">
          {FLOW_CONNECTIONS.map((connection, index) => {
            const fromNode = getNodeById(connection.from);
            const toNode = getNodeById(connection.to);

            if (!fromNode || !toNode) return null;

            const pathD = generateCurvePath(fromNode, toNode, viewBoxWidth, viewBoxHeight);
            const pathId = `path-${connection.from}-${connection.to}`;

            return (
              <g key={pathId}>
                {/* Connection path */}
                <motion.path
                  d={pathD}
                  stroke="#27272a"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  fill="none"
                  opacity={0.6}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: disableAnimations ? 0 : 1.5,
                    delay: disableAnimations ? 0 : index * 0.2,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated flow dot */}
                {!disableAnimations && (
                  <motion.circle
                    r="6"
                    fill={fromNode.color}
                    filter="url(#glow-users)"
                    animate={{
                      offsetDistance: ['0%', '100%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 1
                    }}
                    style={{
                      offsetPath: `path('${pathD}')`,
                      offsetRotate: '0deg'
                    }}
                  />
                )}

                {/* Connection label */}
                {showLabels && (
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      textAnchor="middle"
                      className="text-xs fill-zinc-400 font-medium"
                    >
                      {connection.label}
                    </textPath>
                  </motion.text>
                )}

                {/* Hidden path for textPath reference */}
                <path id={pathId} d={pathD} fill="none" stroke="none" />
              </g>
            );
          })}
        </g>

        {/* Central label */}
        <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
        >
          <text
            x={viewBoxWidth / 2}
            y={viewBoxHeight / 2}
            textAnchor="middle"
            className="text-xl font-bold fill-accent"
            style={{ fontSize: '24px' }}
          >
            $PRICKO
          </text>
          <text
            x={viewBoxWidth / 2}
            y={viewBoxHeight / 2 + 30}
            textAnchor="middle"
            className="text-sm fill-zinc-400"
            style={{ fontSize: '14px' }}
          >
            Powers the Ecosystem
          </text>
        </motion.g>

        {/* Node cards (rendered on top) */}
        {FLOW_NODES.map((node, index) => {
          const Icon = node.icon;
          const x = (node.position.x / 100) * viewBoxWidth;
          const y = (node.position.y / 100) * viewBoxHeight;

          return (
            <motion.g
              key={node.id}
              role="group"
              aria-label={`${node.label}: ${node.description}`}
              tabIndex={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="focus:outline-none"
            >
              {/* Pulsing glow effect */}
              {!disableAnimations && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={nodeRadius + 10}
                  fill={node.color}
                  opacity={0.2}
                  filter={`url(#glow-${node.id})`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              )}

              {/* Node background circle */}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill={node.color}
                fillOpacity={0.15}
                stroke={node.color}
                strokeWidth="2"
                className="backdrop-blur-md"
              />

              {/* Focus indicator (shown on keyboard focus) */}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius + 5}
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
                opacity={0}
                className="focus-ring"
              />

              {/* Icon container */}
              <foreignObject
                x={x - 24}
                y={y - 40}
                width={48}
                height={48}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Icon
                    className="w-8 h-8"
                    style={{ color: node.color }}
                    aria-hidden="true"
                  />
                </div>
              </foreignObject>

              {/* Node label */}
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                className="text-sm font-bold fill-white"
                style={{ fontSize: '14px' }}
              >
                {node.label}
              </text>

              {/* Node description */}
              {showLabels && (
                <text
                  x={x}
                  y={y + 32}
                  textAnchor="middle"
                  className="text-xs fill-zinc-400"
                  style={{ fontSize: '11px' }}
                >
                  {node.description}
                </text>
              )}
            </motion.g>
          );
        })}
      </motion.svg>

      {/* Screen reader description */}
      <div className="sr-only">
        The $PRICKO token flows through a circular ecosystem: Users purchase privacy tools with tokens,
        payments go to the Treasury, the Treasury rewards Node Operators through staking, Node Operators
        provide infrastructure for Privacy Tools, and Privacy Tools deliver protection back to Users.
        This creates a self-sustaining circular economy.
      </div>
    </div>
  );
};
