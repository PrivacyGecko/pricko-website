import React from 'react';
import { useProjectConfig } from '../hooks/useProjectConfig';
import {
  FaCheckCircle,
  FaClock,
  FaGithub,
  FaShieldAlt,
  FaUsers,
  FaCode,
  FaLock,
  FaExternalLinkAlt,
  FaArrowRight,
  FaSearch,
  FaShareAlt,
  FaKey
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProofOfDevelopment: React.FC = () => {
  const {
    getLiveProducts,
    getBetaProducts,
    getInDevelopmentProducts,
    config
  } = useProjectConfig();

  const liveProducts = getLiveProducts();
  const betaProducts = getBetaProducts();
  const inDevProducts = getInDevelopmentProducts().slice(0, 2);

  const {
    betaTesters,
    openSourceRepos,
    securityAudits
  } = config.development.metrics;

  const getProductIcon = (productName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Gecko Advisor': <FaSearch className="text-blue-400" />,
      'Gecko Share': <FaShareAlt className="text-purple-400" />,
      'Gecko Guard': <FaShieldAlt className="text-cyan-400" />,
      'Gecko Lock': <FaKey className="text-yellow-400" />
    };
    return iconMap[productName] || <FaCheckCircle className="text-accent" />;
  };

  return (
    <section
      id="proof-of-development"
      className="relative section-padding bg-gradient-to-b from-transparent via-secondary/40 to-transparent overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">This Isn't Vapor. It's a Working Ecosystem.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We put our money where our mouth is. Real products. Real users. Real progress.
            Every claim backed by verifiable data.
          </p>
        </div>

        <div className="mb-20" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              <FaCheckCircle className="text-accent" />
              Already Live & Serving Users
            </h3>
            <p className="text-muted">Real products you can use today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveProducts.map((product, index) => (
              <div
                key={product.id}
                className="card-interactive hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-1 flex items-center gap-2">
                      {getProductIcon(product.name)}
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted mb-3">{product.subtitle}</p>
                  </div>
                  <div className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full whitespace-nowrap">
                    LIVE
                  </div>
                </div>

                <p className="text-muted mb-4 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-muted">
                      Available Now at <span className="text-accent">{product.url?.replace('https://', '')}</span>
                    </span>
                  </div>
                  {product.metrics.rating && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        {product.metrics.rating}★ User Rating
                      </span>
                    </div>
                  )}
                  {product.metrics.activeUsers && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        {product.metrics.activeUsers.toLocaleString()}+ Active Users
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-muted">{product.security.encryption}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-muted">
                      <a
                        href={product.security.openSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        Open Source <FaExternalLinkAlt className="inline text-xs" />
                      </a>
                    </span>
                  </div>
                </div>

                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm py-2"
                  >
                    Try {product.name} <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <FaClock className="text-cyan-400" />
              Near Completion - Launching Q4 2025
            </h3>
            <p className="text-muted">Advanced development stage with active testing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {betaProducts.map((product, index) => (
              <div
                key={product.id}
                className="card-interactive hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-1">{product.name}</h4>
                    <p className="text-sm text-muted mb-3">{product.subtitle}</p>
                  </div>
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full whitespace-nowrap">
                    BETA
                  </div>
                </div>

                <p className="text-muted mb-4 leading-relaxed">{product.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Development Progress</span>
                    <span className="text-sm font-bold text-accent">{product.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent to-accent-hover h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {product.metrics.betaTesters && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaUsers className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        {product.metrics.betaTesters.toLocaleString()}+ Beta Testers Waitlist
                      </span>
                    </div>
                  )}
                  {product.metrics.platforms && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        {product.metrics.platforms.join(' & ')} Builds Ready
                      </span>
                    </div>
                  )}
                  {product.metrics.estimatedLaunch && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaClock className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        Estimated Launch: {product.metrics.estimatedLaunch}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {inDevProducts.map((product, index) => (
              <div
                key={product.id}
                className="card-interactive hover-lift"
                style={{ animationDelay: `${(betaProducts.length + index) * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-1">{product.name}</h4>
                    <p className="text-sm text-muted mb-3">{product.subtitle}</p>
                  </div>
                  <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full whitespace-nowrap">
                    IN DEV
                  </div>
                </div>

                <p className="text-muted mb-4 leading-relaxed">{product.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Development Progress</span>
                    <span className="text-sm font-bold text-accent">{product.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {product.metrics.users && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaClock className="text-accent flex-shrink-0" />
                      <span className="text-muted">{product.metrics.users}</span>
                    </div>
                  )}
                  {product.metrics.estimatedLaunch && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaClock className="text-accent flex-shrink-0" />
                      <span className="text-muted">
                        Estimated Launch: {product.metrics.estimatedLaunch}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              We Don't Just Talk. Here's the Proof.
            </h3>
            <p className="text-muted">Real commitment, measurable progress</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center hover:border-accent/40 transition-all duration-300 hover-scale">
              <div className="text-4xl mb-3 text-accent">
                <FaUsers className="mx-auto" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">
                {betaTesters.toLocaleString()}+
              </div>
              <div className="text-sm text-muted">Total Beta Testers</div>
            </div>

            <div className="card p-6 text-center hover:border-accent/40 transition-all duration-300 hover-scale">
              <div className="text-4xl mb-3 text-accent">
                <FaGithub className="mx-auto" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">
                {openSourceRepos}
              </div>
              <div className="text-sm text-muted">Open Source Repos</div>
            </div>

            <div className="card p-6 text-center hover:border-accent/40 transition-all duration-300 hover-scale">
              <div className="text-4xl mb-3 text-accent">
                <FaShieldAlt className="mx-auto" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">
                {securityAudits}
              </div>
              <div className="text-sm text-muted">Security Audits Completed</div>
            </div>
          </div>
        </div>

        <div className="mb-20" style={{ animationDelay: '0.2s' }}>
          <div className="bg-secondary/50 border border-accent/20 rounded-2xl p-8 text-center">
            <FaGithub className="text-5xl text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-accent mb-3">
              Open Source & Transparent
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              All {openSourceRepos} tools are fully open source. View our code, contribute to development,
              and verify our claims yourself. Consistent development activity visible on GitHub.
            </p>
            <a
              href={config.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              View on GitHub <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <div className="mb-16" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-3">
              Verified & Audited
            </h3>
            <p className="text-muted">Security and privacy you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-2xl text-accent" />
                <h4 className="text-lg font-bold text-accent">Security Audits</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Gecko Share: Audit Completed Q4 2024</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Gecko Advisor: Open-Source Audit Complete</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaClock className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Gecko Shell: Beta Audit In Progress</span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaLock className="text-2xl text-accent" />
                <h4 className="text-lg font-bold text-accent">Encryption</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">AES-256-GCM Encryption</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">TLS 1.3 Protocol</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Zero-Knowledge Architecture</span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-2xl text-accent" />
                <h4 className="text-lg font-bold text-accent">Open Source</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">All tools fully open source</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Community contributions welcome</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted">Transparent development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Ready to Experience Real Privacy Tools?
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Stop trusting vaporware. Start using privacy tools that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tools">
                <button className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg hover-lift">
                  Explore All 8 Tools <FaArrowRight />
                </button>
              </Link>
              <Link to="/roadmap">
                <button className="btn-secondary px-8 py-3 text-lg hover-lift">
                  Read the Roadmap
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfDevelopment;
