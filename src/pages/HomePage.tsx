import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PremiumFeatureCard from '../components/ui/PremiumFeatureCard';
import MascotImage from '../components/ui/MascotImage';
import { useProjectConfig } from '../hooks/useProjectConfig';
import { METRICS, TOOLS_COUNT } from '../constants/metrics';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';
import { FaArrowRight, FaExternalLinkAlt, FaWallet, FaExchangeAlt, FaRocket } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const {
    tokenSymbol
  } = useProjectConfig();

  // Video ref for slow motion playback
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion
    }
  }, []);

  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Privacy Gecko",
        "alternateName": "PRICKO",
        "url": "https://pricko.com",
        "logo": "https://pricko.com/logo.png",
        "description": `Privacy-first tools powered by PRICKO utility token. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users. Real code, real traction, real results.`,
        "sameAs": [
          "https://twitter.com/PrivacyGecko",
          "https://github.com/privacygecko",
          "https://t.me/privacygecko",
          "https://discord.gg/privacygecko"
        ],
        "numberOfEmployees": "8+",
        "foundingDate": "2024"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Gecko Share",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "100"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="PRICKO | Privacy Tools Powered by Utility Token - Real Products, Real Utility"
        description={`PRICKO is a utility token powering 8 privacy tools. ${TOOLS_COUNT.live} live products serving ${METRICS.prickoshare.formatted} users. Not vaporware - real tools, real results. Join the privacy revolution.`}
        keywords="privacy token, utility token, privacy tools, blockchain privacy, solana token, Gecko Share, Gecko Advisor, zero-knowledge encryption, privacy browser, GeckoCore Protocol"
        canonicalUrl="/"
        structuredData={homepageStructuredData}
      />
      <div className="min-h-screen">
      {/* Hero Section - GeckoCore Protocol Focused */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ filter: 'hue-rotate(10deg)' }}
            poster="/video-poster.jpg"
          >
            <source src="/green_bg.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/35" />
        </div>
        
        {/* Fallback AnimatedBackground (shows through overlay if needed) */}
        <div className="absolute inset-0 z-[1] opacity-20">
          <AnimatedBackground />
        </div>

        <div className="container-max section-padding relative z-10 text-center pt-40 sm:pt-36 md:pt-32 lg:pt-28">
          <div>
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="transform scale-[130%] sm:scale-[162.5%] md:scale-[195%] lg:scale-[227.5%] xl:scale-[260%]">
                <MascotImage size="xl" alt="Pricko Mascot - Privacy Gecko" />
              </div>
            </div>

            {/* Primary Brand Anchor */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
              <span className="text-accent">{tokenSymbol}</span>
            </h1>

            {/* GeckoCore Protocol - THE KEY MESSAGE */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-accent">Gecko</span><span className="text-white">Core Protocol</span>
            </h2>

            {/* Subtitle - Privacy Infrastructure positioning */}
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300">
              Privacy Infrastructure on <span className="text-accent">Solana</span>
            </p>

            {/* Proof Link - More prominent */}
            <div className="mb-8 md:mb-12">
              <a
                href="https://privacygecko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl font-medium"
              >
                <span>Live Products on</span>
                <span className="text-accent flex items-center gap-2">
                  PrivacyGecko.com
                  <FaExternalLinkAlt className="text-xs sm:text-sm" />
                </span>
              </a>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="/how-to-buy"
                className="btn-primary text-xl px-12 py-5 inline-flex items-center justify-center gap-3 transition-colors"
              >
                Buy {tokenSymbol} <FaArrowRight />
              </a>

              <a
                href="https://privacygecko.com/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xl px-12 py-5 inline-flex items-center justify-center gap-3 transition-colors"
              >
                Whitepaper <FaArrowRight />
              </a>
            </div>

            {/* Track on Exchange Links */}
            <div className="max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 hover:bg-accent/20 rounded-xl transition-colors"
                  aria-label="View on Pump.fun"
                  title="Pump.fun"
                >
                  <img
                    src="https://pump.fun/favicon.ico"
                    alt="Pump.fun"
                    width="36"
                    height="36"
                    className="inline-block"
                  />
                </a>
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"
                  aria-label="View on DEXScreener"
                  title="DEXScreener"
                >
                  <img
                    src="https://dexscreener.com/favicon.ico"
                    alt="DEXScreener"
                    width="36"
                    height="36"
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GeckoCore Protocol Section - Static Content (No Animations) */}
      <section className="relative section-padding py-20 bg-gradient-to-b from-black via-secondary/30 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="gradient-text">GeckoCore Protocol</span>?
            </h2>
            <p className="text-lg md:text-xl text-accent font-semibold mb-4">
              4 live products, 2,100+ active users
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              GeckoCore is the unified privacy infrastructure connecting all Privacy Gecko tools.
              More tools in the ecosystem means more {tokenSymbol} demand.
            </p>
            <a
              href="https://privacygecko.com/protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-lg font-medium"
            >
              Technical Details on PrivacyGecko.com
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Premium Feature Showcase - Static Cards (PremiumFeatureCard handles own animations) */}
      <section className="relative section-padding py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Privacy Tools <span className="gradient-text">That Actually Work</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Not vaporware. Real products. Real users. Real utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PremiumFeatureCard
              emoji="🔍"
              title="Gecko Advisor"
              description="AI-powered privacy assistant providing instant security advice and threat detection"
              status="live"
              url="https://geckoadvisor.com"
            />
            <PremiumFeatureCard
              emoji="📁"
              title="Gecko Share"
              description="End-to-end encrypted file sharing platform with zero-knowledge architecture"
              status="live"
              url="https://geckoshare.com"
            />
            <PremiumFeatureCard
              emoji="🛡️"
              title="Gecko Guard"
              description="Browser extension blocking trackers and protecting your digital footprint"
              status="live"
              url="https://geckoguard.app"
            />
            <PremiumFeatureCard
              emoji="🔐"
              title="Gecko Lock"
              description="Military-grade password manager with biometric security and auto-fill"
              status="live"
              url="https://geckolock.com"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section - All phases appear together */}
      <section className="relative section-padding py-20 bg-gradient-to-b from-black via-secondary/30 to-black overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted">
              Real progress, realistic timelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phase 1: Completed */}
            <div className="card-interactive text-center border-accent/30">
              <div className="text-3xl mb-3">✅</div>
              <div className="text-sm text-accent font-semibold mb-2">Q2-Q3 2025</div>
              <h3 className="text-lg font-bold mb-2">Live Products</h3>
              <p className="text-sm text-muted">Gecko Advisor & Share launched with 2,100+ users</p>
            </div>

            {/* Phase 2: Current */}
            <div className="card-interactive text-center border-yellow-500/50 bg-yellow-500/5">
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-sm text-yellow-400 font-semibold mb-2">Q4 2025</div>
              <h3 className="text-lg font-bold mb-2">Token Launch</h3>
              <p className="text-sm text-muted">$PRICKO on Solana, smart contracts deployed</p>
            </div>

            {/* Phase 3: Upcoming */}
            <div className="card-interactive text-center border-cyan-500/30">
              <div className="text-3xl mb-3">🔮</div>
              <div className="text-sm text-cyan-400 font-semibold mb-2">Q1 2026</div>
              <h3 className="text-lg font-bold mb-2">GeckoCore Protocol</h3>
              <p className="text-sm text-muted">Decentralized privacy infrastructure begins</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/roadmap"
              className="text-accent hover:text-accent-hover inline-flex items-center gap-2"
            >
              View Full Roadmap <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Buy Section - All steps appear together */}
      <section className="relative section-padding py-20 bg-black overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How to Buy <span className="gradient-text">{tokenSymbol}</span>
            </h2>
            <p className="text-lg text-muted">
              3 simple steps to join the privacy revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
            {/* Step 1 */}
            <div className="card-interactive text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaWallet className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 1</div>
              <h3 className="text-lg font-bold mb-2">Get a Wallet</h3>
              <p className="text-sm text-muted mb-4">Download Phantom, Solflare, or Backpack</p>
              <a
                href="https://phantom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Get Phantom <FaExternalLinkAlt size={10} />
              </a>
            </div>

            {/* Step 2 */}
            <div className="card-interactive text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaExchangeAlt className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 2</div>
              <h3 className="text-lg font-bold mb-2">Get SOL</h3>
              <p className="text-sm text-muted mb-4">Buy SOL on Coinbase or Binance</p>
              <a
                href="https://www.coinbase.com/price/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Buy SOL <FaExternalLinkAlt size={10} />
              </a>
            </div>

            {/* Step 3 */}
            <div className="card-interactive text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <FaRocket className="text-accent text-xl" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Step 3</div>
              <h3 className="text-lg font-bold mb-2">Swap for {tokenSymbol}</h3>
              <p className="text-sm text-muted mb-4">Visit pump.fun and swap SOL for $PRICKO</p>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-accent-hover inline-flex items-center gap-1"
              >
                Go to pump.fun <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/how-to-buy"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Detailed Guide <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal & Direct */}
      <section className="relative section-padding py-16 bg-black overflow-hidden">
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/how-to-buy"
                className="btn-primary px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-3 transition-colors"
              >
                Buy {tokenSymbol} <FaArrowRight />
              </a>
              <a
                href="https://privacygecko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                Explore Tools <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
