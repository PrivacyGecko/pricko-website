import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AllocationSegment {
  category: string;
  percentage: number;
  amount: string;
  description: string;
  vestingSchedule?: string;
  color: string;
  hoverColor: string;
}

interface TokenDistributionDonutProps {
  totalSupply: string;
  allocations: AllocationSegment[];
}

const TokenDistributionDonut: React.FC<TokenDistributionDonutProps> = ({ totalSupply, allocations }) => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  // SVG donut chart configuration
  const size = 400;
  const center = size / 2;
  const radius = 140;
  const strokeWidth = 60;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  // Calculate segment paths
  const createSegmentPath = (startAngle: number, endAngle: number) => {
    const startX = center + innerRadius * Math.cos(startAngle);
    const startY = center + innerRadius * Math.sin(startAngle);
    const endX = center + innerRadius * Math.cos(endAngle);
    const endY = center + innerRadius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    return `M ${startX} ${startY} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  // Calculate label positions (outside the donut)
  const createLabelPosition = (angle: number) => {
    const labelRadius = radius + 40;
    return {
      x: center + labelRadius * Math.cos(angle),
      y: center + labelRadius * Math.sin(angle),
    };
  };

  // Build segments with cumulative angles
  let cumulativeAngle = -Math.PI / 2; // Start at top (12 o'clock)
  const segments = allocations.map((allocation, index) => {
    const angleSize = (allocation.percentage / 100) * 2 * Math.PI;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angleSize;
    const midAngle = (startAngle + endAngle) / 2;

    const segment = {
      ...allocation,
      path: createSegmentPath(startAngle, endAngle),
      labelPos: createLabelPosition(midAngle),
      startAngle,
      endAngle,
      midAngle,
      index,
    };

    cumulativeAngle = endAngle;
    return segment;
  });

  return (
    <div className="relative flex flex-col items-center">
      {/* SVG Donut Chart */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-full h-auto"
        role="img"
        aria-label="Token Distribution Donut Chart"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="none"
          stroke="#27272a"
          strokeWidth={strokeWidth}
          opacity={0.2}
        />

        {/* Donut segments */}
        {segments.map((segment) => (
          <g key={segment.category}>
            <motion.path
              d={segment.path}
              fill="none"
              stroke={hoveredSegment === segment.index ? segment.hoverColor : segment.color}
              strokeWidth={hoveredSegment === segment.index ? strokeWidth + 8 : strokeWidth}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setHoveredSegment(segment.index)}
              onMouseLeave={() => setHoveredSegment(null)}
              className="cursor-pointer transition-all duration-300"
              style={{ filter: hoveredSegment === segment.index ? 'drop-shadow(0 0 12px rgba(74, 222, 128, 0.6))' : 'none' }}
            />

            {/* Percentage labels outside segments */}
            <motion.text
              x={segment.labelPos.x}
              y={segment.labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fontWeight="bold"
              fill={segment.color}
              className="pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              {segment.percentage}%
            </motion.text>
          </g>
        ))}

        {/* Center content - Total Supply */}
        <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Total Supply Number - Reduced font size to fit within inner circle */}
          <text
            x={center}
            y={center - 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#4ade80"
          >
            {totalSupply}
          </text>
          {/* "TOTAL SUPPLY" label */}
          <text
            x={center}
            y={center + 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill="#a1a1aa"
            style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Total Supply
          </text>
          {/* "$PRICKO Tokens" subtitle */}
          <text
            x={center}
            y={center + 26}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fill="#a1a1aa"
          >
            $PRICKO Tokens
          </text>
        </motion.g>
      </svg>

      {/* Interactive Legend with Tooltips */}
      <div className="mt-8 w-full max-w-2xl space-y-3">
        {segments.map((segment) => (
          <motion.div
            key={segment.category}
            className={`
              flex items-center justify-between p-4 rounded-lg border transition-all duration-300 cursor-pointer
              ${hoveredSegment === segment.index
                ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20'
                : 'border-border bg-secondary/30 hover:border-accent/50'
              }
            `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + segment.index * 0.1 }}
            onMouseEnter={() => setHoveredSegment(segment.index)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-4 flex-1">
              {/* Color indicator */}
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: hoveredSegment === segment.index ? segment.hoverColor : segment.color,
                  boxShadow: hoveredSegment === segment.index ? `0 0 12px ${segment.color}` : 'none',
                }}
              />

              {/* Category name */}
              <div className="flex-1">
                <h4 className="font-semibold text-white">{segment.category}</h4>
                <p className="text-sm text-muted mt-1">{segment.description}</p>
                {segment.vestingSchedule && (
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                    <span className="text-xs text-yellow-300 font-medium">
                      🔒 {segment.vestingSchedule}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Percentage and amount */}
            <div className="text-right flex-shrink-0 ml-4">
              <div className="text-2xl font-bold" style={{ color: segment.color }}>{segment.percentage}%</div>
              <div className="text-sm text-muted mt-1">{segment.amount}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Accessibility description */}
      <div className="sr-only">
        Token distribution breakdown: {allocations.map(a => `${a.category} ${a.percentage}%`).join(', ')}
      </div>
    </div>
  );
};

export default TokenDistributionDonut;
