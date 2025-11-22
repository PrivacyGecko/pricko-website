import React from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';

/**
 * PricingComparisonTable Component
 *
 * Displays a 3-column pricing comparison for the Privacy Gecko ecosystem:
 * - Free Tier: Basic features
 * - Pro (Subscription): Monthly subscription pricing
 * - Pro (Token): Lifetime access via $PRICKO token holding
 *
 * Purpose: Demonstrate token utility and conversion opportunity
 * Mobile responsive: Stacks vertically on small screens
 */
const PricingComparisonTable: React.FC = () => {
  const { config } = useProjectConfig();

  // Pricing tiers configuration
  const pricingTiers = [
    {
      name: 'Free',
      icon: '🌱',
      price: '$0',
      subtitle: 'Basic Privacy Protection',
      badge: null,
      features: [
        { text: 'Basic device scan (Gecko Advisor)', included: true },
        { text: '1GB file sharing (Gecko Share)', included: true },
        { text: 'Basic tracker blocking (Gecko Guard)', included: true },
        { text: 'Limited ad blocking', included: true },
        { text: 'Privacy score tracking', included: true },
        { text: 'Persistent vault storage', included: false },
        { text: 'Advanced threat detection', included: false },
        { text: 'VPN integration', included: false },
        { text: 'Ultimate stealth mode', included: false },
        { text: 'Priority support', included: false }
      ],
      cta: 'Get Started',
      ctaStyle: 'btn-secondary',
      highlight: false
    },
    {
      name: 'Pro',
      icon: '💎',
      price: '$9.99',
      subtitle: 'Monthly Subscription',
      badge: 'POPULAR',
      features: [
        { text: 'Unlimited device scans', included: true },
        { text: 'Unlimited file sharing', included: true },
        { text: 'Advanced tracker blocking', included: true },
        { text: 'Complete ad blocking', included: true },
        { text: 'Privacy score + recommendations', included: true },
        { text: 'Persistent vault storage', included: true },
        { text: 'Advanced threat detection', included: true },
        { text: 'VPN integration', included: true },
        { text: 'Ultimate stealth mode', included: true },
        { text: 'Priority support', included: true }
      ],
      cta: 'Subscribe Now',
      ctaStyle: 'btn-primary',
      highlight: true
    },
    {
      name: 'Pro',
      icon: '🚀',
      price: 'Hold Tokens',
      subtitle: `${config.token.symbol} Token Holders`,
      badge: 'BEST VALUE',
      features: [
        { text: 'Unlimited device scans', included: true },
        { text: 'Unlimited file sharing', included: true },
        { text: 'Advanced tracker blocking', included: true },
        { text: 'Complete ad blocking', included: true },
        { text: 'Privacy score + recommendations', included: true },
        { text: 'Persistent vault storage', included: true },
        { text: 'Advanced threat detection', included: true },
        { text: 'VPN integration', included: true },
        { text: 'Ultimate stealth mode', included: true },
        { text: 'Priority support + governance rights', included: true },
        { text: 'Lifetime access (no monthly fees)', included: true, highlight: true },
        { text: 'Early access to new features', included: true, highlight: true }
      ],
      cta: `Get ${config.token.symbol}`,
      ctaStyle: 'bg-gradient-to-r from-accent to-accent-hover text-black hover:from-accent-hover hover:to-accent',
      highlight: true
    }
  ];

  return (
    <section
      className="mb-24"
    >
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
        >
          <span className="text-accent">💰</span>
          <span className="text-sm font-medium text-accent">How {config.token.symbol} Unlocks Premium</span>
        </div>

        <h2 className="text-4xl font-bold mb-6 text-professional">
          Choose Your <span className="gradient-text-animated">Privacy Tier</span>
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Get started for free, subscribe monthly, or hold {config.token.symbol} tokens for lifetime Pro access.
          No monthly fees, forever.
        </p>
      </div>

      {/* Desktop View: 3-column grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={`${tier.name}-${index}`}
            className={`relative bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl p-8 border ${
              tier.highlight ? 'border-accent/50 shadow-professional-lg' : 'border-border/50'
            } backdrop-blur-sm hover:border-accent/30 transition-all duration-500`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-accent to-accent-hover text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{tier.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-professional">{tier.name}</h3>
              <div className="text-3xl font-bold text-accent mb-2">{tier.price}</div>
              <p className="text-sm text-muted">{tier.subtitle}</p>
            </div>

            <div className="space-y-4 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`flex items-start gap-3 ${feature.highlight ? 'bg-accent/10 p-2 rounded-lg' : ''}`}
                >
                  <span className={`mt-1 ${feature.included ? 'text-accent' : 'text-gray-600'}`}>
                    {feature.included ? '✓' : '✗'}
                  </span>
                  <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-600'} ${feature.highlight ? 'font-semibold' : ''}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`w-full ${tier.ctaStyle} px-6 py-4 rounded-lg font-semibold shadow-professional transition-all duration-200`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet View: Stacked cards */}
      <div className="lg:hidden space-y-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={`${tier.name}-${index}-mobile`}
            className={`relative bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl p-6 border ${
              tier.highlight ? 'border-accent/50 shadow-professional-lg' : 'border-border/50'
            } backdrop-blur-sm`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-accent to-accent-hover text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="text-4xl mb-3">{tier.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-professional">{tier.name}</h3>
              <div className="text-2xl font-bold text-accent mb-1">{tier.price}</div>
              <p className="text-xs text-muted">{tier.subtitle}</p>
            </div>

            <div className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`flex items-start gap-2 ${feature.highlight ? 'bg-accent/10 p-2 rounded-lg' : ''}`}
                >
                  <span className={`mt-0.5 text-xs ${feature.included ? 'text-accent' : 'text-gray-600'}`}>
                    {feature.included ? '✓' : '✗'}
                  </span>
                  <span className={`text-xs ${feature.included ? 'text-white' : 'text-gray-600'} ${feature.highlight ? 'font-semibold' : ''}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`w-full ${tier.ctaStyle} px-6 py-3 rounded-lg font-semibold shadow-professional transition-all duration-200 text-sm`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Pricing Disclaimer */}
      <div
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted max-w-4xl mx-auto">
          <strong className="text-accent">Token Requirement Example:</strong> Hold 10,000 {config.token.symbol} tokens for lifetime Pro access
          vs. $9.99/month subscription. Token requirements and pricing subject to change based on market conditions.
          Holding tokens does not guarantee profit. {config.token.symbol} is a utility token, not an investment.
        </p>
      </div>
    </section>
  );
};

export default PricingComparisonTable;
