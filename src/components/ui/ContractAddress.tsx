import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck, FaEye, FaExternalLinkAlt } from 'react-icons/fa';

interface ContractAddressProps {
  className?: string;
  variant?: 'hero' | 'card' | 'minimal' | 'banner';
}

const ContractAddress: React.FC<ContractAddressProps> = ({ 
  className = '', 
  variant = 'card' 
}) => {
  const [copied, setCopied] = useState(false);
  
  // Pre-launch placeholder - will be updated when token launches
  // Automatically switches on November 1, 2025
  const isLaunched = new Date() >= new Date('2025-11-01');
  const actualCA = ""; // TODO: Add actual Solana contract address after pump.fun launch
  const contractAddress = isLaunched ? actualCA : "TBA - Coming Soon";
  
  const handleCopy = async () => {
    if (!isLaunched) return;
    
    try {
      await navigator.clipboard.writeText(actualCA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Failed to copy address - silently handle
    }
  };

  const handleViewOnExplorer = () => {
    if (!isLaunched) return;
    window.open(`https://solscan.io/token/${actualCA}`, '_blank');
  };

  // Pump.fun Official Logo (Using actual favicon)
  const PumpFunIcon = () => (
    <img
      src="https://pump.fun/favicon.ico"
      alt="Pump.fun"
      width="20"
      height="20"
      className="inline-block"
    />
  );

  // DEXScreener Official Logo (Using actual favicon)
  const DEXScreenerIcon = () => (
    <img
      src="https://dexscreener.com/favicon.ico"
      alt="DEXScreener"
      width="20"
      height="20"
      className="inline-block"
    />
  );

  if (variant === 'hero') {
    return (
      <motion.div
        className={`bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-6 backdrop-blur-sm ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <FaEye className="text-accent text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">Contract Address</h3>
              <p className="text-sm text-muted">Solana Network</p>
            </div>
          </div>
          {!isLaunched && (
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
              Pre-Launch
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <code className="flex-1 text-white font-mono text-sm break-all">
            {contractAddress}
          </code>
          {isLaunched && (
            <div className="flex gap-2">
              <motion.button
                onClick={handleCopy}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={copied}
                aria-label={copied ? "Contract address copied to clipboard" : "Copy contract address to clipboard"}
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </motion.button>
              <motion.button
                onClick={handleViewOnExplorer}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View contract address on Solscan explorer"
              >
                <FaExternalLinkAlt />
              </motion.button>
            </div>
          )}
        </div>
        
        {!isLaunched && (
          <p className="text-center text-muted text-sm mt-4">
            Contract address will be announced on pump.fun launch day. Join our community to be notified first!
          </p>
        )}

        {/* Exchange Badges - Integrated */}
        <div className="mt-4 pt-4">
          <div className="flex items-center justify-center gap-3">
            <motion.a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View on Pump.fun"
              title="Pump.fun"
            >
              <PumpFunIcon />
            </motion.a>
            <motion.a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View on DEXScreener"
              title="DEXScreener"
            >
              <DEXScreenerIcon />
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'banner') {
    // Check if we have an actual CA to display
    const hasCA = actualCA && actualCA.length > 0;

    // Truncate address for mobile display
    const truncatedAddress = hasCA
      ? `${actualCA.slice(0, 6)}...${actualCA.slice(-4)}`
      : "";

    return (
      <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
        {hasCA ? (
          <>
            <span className="text-muted text-xs sm:text-sm font-medium">CA:</span>
            <code className="text-accent font-mono text-xs sm:text-sm">
              <span className="sm:hidden">{truncatedAddress}</span>
              <span className="hidden sm:inline">{actualCA}</span>
            </code>
            <motion.button
              onClick={handleCopy}
              className="p-1 text-accent hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-primary rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={copied ? "Contract address copied" : "Copy contract address"}
            >
              {copied ? <FaCheck className="text-xs" /> : <FaCopy className="text-xs" />}
            </motion.button>
          </>
        ) : (
          <>
            <span className="text-orange-400 text-xs sm:text-sm">🔒</span>
            <span className="text-gray-300 text-xs sm:text-sm font-medium">
              CA will be revealed at launch
            </span>
            <span className="px-2 py-0.5 bg-accent/20 text-accent text-[10px] rounded-full hidden sm:inline-block">
              Coming Soon
            </span>
          </>
        )}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="text-muted text-sm">CA:</span>
        <code className="text-accent font-mono text-sm">
          {isLaunched ? actualCA : "TBA"}
        </code>
        {isLaunched && (
          <motion.button
            onClick={handleCopy}
            className="text-accent hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={copied ? "Contract address copied" : "Copy contract address"}
          >
            {copied ? <FaCheck className="text-sm" /> : <FaCopy className="text-sm" />}
          </motion.button>
        )}
      </div>
    );
  }

  // Default 'card' variant
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <FaEye className="text-accent text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-accent mb-1">Contract Address</h3>
          <p className="text-muted text-sm">Solana Network • SPL Token</p>
        </div>
        {!isLaunched && (
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">
            Coming Soon
          </span>
        )}
      </div>
      
      <div className="bg-secondary/30 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <code className="flex-1 text-white font-mono text-sm break-all">
            {contractAddress}
          </code>
          {isLaunched && (
            <div className="flex gap-2">
              <motion.button
                onClick={handleCopy}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={copied ? "Contract address copied to clipboard" : "Copy contract address to clipboard"}
                title={copied ? "Copied!" : "Copy address"}
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </motion.button>
              <motion.button
                onClick={handleViewOnExplorer}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View contract address on Solscan explorer"
                title="View on Solscan"
              >
                <FaExternalLinkAlt />
              </motion.button>
            </div>
          )}
        </div>
      </div>
      
      {!isLaunched ? (
        <div className="text-center">
          <p className="text-muted text-sm mb-3">
            Contract address will be announced on pump.fun launch day
          </p>
          <p className="text-accent text-sm font-medium">
            ⚠️ Beware of fake contracts before official launch
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted text-sm">
            Always verify the contract address on our official channels before trading
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ContractAddress;