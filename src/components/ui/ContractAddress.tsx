import React, { useState, useRef } from 'react';
import { FaCopy, FaCheck, FaEye, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ContractAddressProps {
  className?: string;
  variant?: 'hero' | 'card' | 'minimal';
}

const ContractAddress: React.FC<ContractAddressProps> = ({ 
  className = '', 
  variant = 'card' 
}) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref, { threshold: 0.1, triggerOnce: true });
  
  const isLaunched = new Date() >= new Date('2025-11-01');
  const actualCA = "";
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

  const PumpFunIcon = () => (
    <img
      src="https://pump.fun/favicon.ico"
      alt="Pump.fun"
      width="32"
      height="32"
      className="inline-block"
    />
  );

  const DEXScreenerIcon = () => (
    <img
      src="https://dexscreener.com/favicon.ico"
      alt="DEXScreener"
      width="32"
      height="32"
      className="inline-block"
    />
  );

  if (variant === 'hero') {
    return (
      <div
        ref={ref}
        className={`animate-on-scroll fade-up bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-6 backdrop-blur-sm ${className}`}
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
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                disabled={copied}
                aria-label={copied ? "Contract address copied to clipboard" : "Copy contract address to clipboard"}
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
              <button
                onClick={handleViewOnExplorer}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="View contract address on Solscan explorer"
              >
                <FaExternalLinkAlt />
              </button>
            </div>
          )}
        </div>
        
        {!isLaunched && (
          <p className="text-center text-muted text-sm mt-4">
            Contract address will be announced on pump.fun launch day. Join our community to be notified first!
          </p>
        )}

        <div className="mt-4 pt-4">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-gray-300 font-medium flex items-center gap-2">
              <span className="text-accent">🔗</span> Track on:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-200 flex items-center justify-center hover-scale"
                aria-label="View on Pump.fun"
                title="Pump.fun"
              >
                <PumpFunIcon />
              </a>
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-200 flex items-center justify-center hover-scale"
                aria-label="View on DEXScreener"
                title="DEXScreener"
              >
                <DEXScreenerIcon />
              </a>
            </div>
          </div>
        </div>
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
          <button
            onClick={handleCopy}
            className="text-accent hover:text-accent-hover transition-colors hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            aria-label={copied ? "Contract address copied" : "Copy contract address"}
          >
            {copied ? <FaCheck className="text-sm" /> : <FaCopy className="text-sm" />}
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`animate-on-scroll fade-up card ${className}`}
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
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label={copied ? "Contract address copied to clipboard" : "Copy contract address to clipboard"}
                title={copied ? "Copied!" : "Copy address"}
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
              <button
                onClick={handleViewOnExplorer}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="View contract address on Solscan explorer"
                title="View on Solscan"
              >
                <FaExternalLinkAlt />
              </button>
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
    </div>
  );
};

export default ContractAddress;
