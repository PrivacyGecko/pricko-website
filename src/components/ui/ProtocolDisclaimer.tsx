import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ProtocolDisclaimerProps {
  variant?: 'warning' | 'info';
  compact?: boolean;
  customText?: string;
}

const ProtocolDisclaimer: React.FC<ProtocolDisclaimerProps> = ({
  variant = 'warning',
  compact = false,
  delay = 0,
  customText,
}) => {
  const defaultText = 'Forward-Looking Statements: References to GeckoCore protocol, future staking rewards, governance features, and 2026+ timelines constitute forward-looking statements subject to risks and uncertainties. Actual development timelines may differ materially from projections. $PRICKO tokens are utility tokens, not securities or investment contracts. No guarantee of future value, functionality, or returns is provided. Past performance of delivered products does not guarantee future development success.';

  const displayText = customText || defaultText;

  const containerClasses = variant === 'warning' 
    ? 'bg-yellow-500/10 border-2 border-yellow-500/30' 
    : 'bg-blue-500/10 border-2 border-blue-500/30';

  const iconColor = variant === 'warning' ? 'text-yellow-400' : 'text-blue-400';
  
  const textSize = compact ? 'text-xs' : 'text-sm';
  const padding = compact ? 'p-4' : 'p-6';

  return (
    <div
      className={'rounded-xl ' + containerClasses + ' ' + padding
    >
      <div className="flex items-start gap-3">
        <FaExclamationTriangle className={iconColor + ' flex-shrink-0 mt-0.5'} size={compact ? 16 : 20} />
        <div>
          <h3 className={'font-bold ' + iconColor + ' mb-2 ' + (compact ? 'text-sm' : 'text-base')}>
            Important Legal Disclaimer
          </h3>
          <p className={'text-gray-300 ' + textSize + ' leading-relaxed'}>
            {displayText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProtocolDisclaimer;
