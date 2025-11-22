import { FC } from 'react';

interface GeckoCoreOGImageProps {
  className?: string;
}

/**
 * OG-style visual for GeckoCore Protocol section
 * Displays a professional, protocol-themed graphic with:
 * - Privacy Gecko mascot
 * - GeckoCore branding
 * - Decentralized network visualization
 * - Protocol-themed colors (cyan/purple gradient)
 */
const GeckoCoreOGImage: FC<GeckoCoreOGImageProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[400px] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-2xl overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-green-500/20 animate-gradient-shift opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Network node visualization */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        {/* Connection lines */}
        <line
          x1="100" y1="100" x2="300" y2="100"
          stroke="url(#gradient1)" strokeWidth="2"
        />
        <line
          x1="100" y1="100" x2="100" y2="300"
          stroke="url(#gradient1)" strokeWidth="2"
        />
        <line
          x1="300" y1="100" x2="300" y2="300"
          stroke="url(#gradient1)" strokeWidth="2"
        />
        <line
          x1="100" y1="300" x2="300" y2="300"
          stroke="url(#gradient1)" strokeWidth="2"
        />
        <line
          x1="100" y1="100" x2="300" y2="300"
          stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5"
        />
        <line
          x1="300" y1="100" x2="100" y2="300"
          stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Network nodes */}
        <motion.circle
          cx="100" cy="100" r="8" fill="#06b6d4"
        />
        <motion.circle
          cx="300" cy="100" r="8" fill="#8b5cf6"
        />
        <motion.circle
          cx="100" cy="300" r="8" fill="#4ade80"
        />
        <motion.circle
          cx="300" cy="300" r="8" fill="#06b6d4"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        {/* Privacy Gecko mascot */}
        <div
          className="mb-6"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-cyan-400/30 flex items-center justify-center">
            <span className="text-7xl">🦎</span>
          </div>
        </div>

        {/* GeckoCore branding */}
        <div
          className="space-y-3"
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            GeckoCore
          </h3>
          <p className="text-sm md:text-base text-cyan-200 font-semibold tracking-wide">
            PRIVACY PROTOCOL
          </p>
        </div>

        {/* Decentralized network tagline */}
        <div
          className="mt-6 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm"
        >
          <p className="text-xs md:text-sm text-gray-300 font-medium">
            Decentralized Privacy Network
          </p>
        </div>

        {/* Protocol stats */}
        <div
          className="mt-8 grid grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">8</div>
            <div className="text-xs text-gray-400 mt-1">Tools</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-xs text-gray-400 mt-1">dApps</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">Q1</div>
            <div className="text-xs text-gray-400 mt-1">2026</div>
          </div>
        </div>

        {/* Powered by $PRICKO */}
        <div
          className="mt-6"
        >
          <p className="text-xs text-gray-500">
            Powered by{' '}
            <span className="text-accent font-semibold">$PRICKO</span>
          </p>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
            style={{}}
}}              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            
          />
        ))}
      </div>
    </div>
  );
};

export default GeckoCoreOGImage;
