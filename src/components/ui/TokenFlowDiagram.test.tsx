/**
 * TokenFlowDiagram Component - Usage Examples
 *
 * This file demonstrates different usage scenarios for the TokenFlowDiagram component.
 * Copy these examples into your pages as needed.
 */

import { TokenFlowDiagram } from './TokenFlowDiagram';

// ============================================================================
// USAGE EXAMPLE 1: Full-featured diagram (for Ecosystem page)
// ============================================================================

export const EcosystemPageExample = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Circular Token Economy
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            $PRICKO creates a self-sustaining ecosystem where every transaction
            strengthens the network and enhances user privacy.
          </p>
        </div>

        {/* Full-featured diagram */}
        <TokenFlowDiagram
          size="large"
          animated
          showLabels
        />

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            Hover over nodes to explore each component of the ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// USAGE EXAMPLE 2: Compact version (for Homepage)
// ============================================================================

export const HomePageExample = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Diagram */}
          <div>
            <TokenFlowDiagram
              size="medium"
              animated
              showLabels={false}
            />
          </div>

          {/* Right: Description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Token Utility That <span className="gradient-text">Actually Works</span>
            </h2>
            <p className="text-lg text-muted mb-6">
              Unlike most memecoins, $PRICKO powers a real ecosystem of privacy tools.
              Every token has genuine utility in protecting user privacy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-muted">
                  <strong className="text-white">Users</strong> pay with $PRICKO to access privacy tools
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-muted">
                  <strong className="text-white">Treasury</strong> manages token pool for ecosystem growth
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-muted">
                  <strong className="text-white">Node Operators</strong> earn staking rewards for infrastructure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-muted">
                  <strong className="text-white">Privacy Tools</strong> deliver protection back to users
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// USAGE EXAMPLE 3: Small version for mobile/sidebar
// ============================================================================

export const MobileExample = () => {
  return (
    <div className="card-interactive p-6">
      <h3 className="text-xl font-bold mb-4 text-center">
        How $PRICKO Works
      </h3>

      <TokenFlowDiagram
        size="small"
        animated={false}  // Disable animations on small screens
        showLabels={false}
      />

      <p className="text-sm text-muted text-center mt-4">
        A circular economy that rewards everyone
      </p>
    </div>
  );
};

// ============================================================================
// USAGE EXAMPLE 4: Tokenomics page integration
// ============================================================================

export const TokenomicsPageExample = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-primary to-secondary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Token Flow & Utility
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Understanding how $PRICKO moves through the ecosystem and creates value at every step.
          </p>
        </div>

        {/* Diagram */}
        <div className="mb-16">
          <TokenFlowDiagram
            size="large"
            animated
            showLabels
          />
        </div>

        {/* Detailed breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-interactive p-6">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Users</h3>
            <p className="text-sm text-muted">
              Purchase privacy tools using $PRICKO tokens, creating demand and driving value.
            </p>
          </div>

          <div className="card-interactive p-6">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Treasury</h3>
            <p className="text-sm text-muted">
              Manages the token pool, funds development, and ensures ecosystem sustainability.
            </p>
          </div>

          <div className="card-interactive p-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Node Operators</h3>
            <p className="text-sm text-muted">
              Run GeckoCore infrastructure and earn staking rewards for providing reliability.
            </p>
          </div>

          <div className="card-interactive p-6">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Privacy Tools</h3>
            <p className="text-sm text-muted">
              Deliver world-class privacy protection powered by decentralized infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// USAGE EXAMPLE 5: Accessible version with reduced motion
// ============================================================================

export const AccessibleExample = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Token Flow Visualization
          </h2>

          {/* The component automatically respects prefers-reduced-motion */}
          <TokenFlowDiagram
            size="large"
            animated
            showLabels
          />

          {/* Alternative text description for screen readers and those who prefer reading */}
          <div className="mt-8 card-interactive p-6">
            <h3 className="text-xl font-bold mb-4">How the Ecosystem Works</h3>
            <ol className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>
                  <strong className="text-white">Users</strong> purchase privacy tools and services
                  using $PRICKO tokens, creating real demand.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>
                  <strong className="text-white">Treasury</strong> receives token payments and manages
                  the ecosystem fund for sustainable growth.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>
                  <strong className="text-white">Node Operators</strong> stake tokens to run GeckoCore
                  infrastructure and earn rewards for reliability.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>
                  <strong className="text-white">Privacy Tools</strong> leverage the infrastructure to
                  deliver protection, completing the circular economy.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
