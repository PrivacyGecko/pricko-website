import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck, FaEye, FaExternalLinkAlt } from 'react-icons/fa';

interface ContractAddressProps {
  className?: string;
  variant?: 'hero' | 'card' | 'minimal';
}

const ContractAddress: React.FC<ContractAddressProps> = ({ 
  className = '', 
  variant = 'card' 
}) => {
  const [copied, setCopied] = useState(false);
  
  // Pre-launch placeholder - will be updated when token launches
  const contractAddress = "TBA - Coming Soon";
  const isLaunched = false; // Set to true when token launches
  const actualCA = ""; // Will contain actual contract address
  
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

  if (variant === 'hero') {
    return (
      <motion.div
        className={`bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ borderColor: "rgba(74, 222, 128, 0.4)" }}
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
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">
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
      </motion.div>
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