import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { FiCalendar, FiAlertCircle, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { FORWARD_LOOKING_STATEMENT, ROADMAP_DISCLAIMER, PROTOCOL_TIMELINE_DISCLAIMER } from '../../constants/legal';

const ForwardLookingStatementsPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollAnimation(scrollRef);

  const forwardLookingExamples = [
    {
      statement: '"GeckoCore Protocol development begins Q1 2026"',
      type: 'Timeline Projection',
      risks: ['Development delays', 'Technical challenges', 'Resource constraints', 'Market conditions']
    },
    {
      statement: '"4 products launching through 2026"',
      type: 'Product Delivery',
      risks: ['Development complexity', 'Bug fixes required', 'Team capacity', 'Strategic pivots']
    },
    {
      statement: '"Staking rewards and governance launching 2027+"',
      type: 'Feature Roadmap',
      risks: ['Legal/regulatory obstacles', 'Technical feasibility', 'Timeline changes', 'Feature cancellation']
    },
    {
      statement: '"$PRICKO becomes currency for privacy verification"',
      type: 'Vision Statement',
      risks: ['Market adoption', 'Competitive landscape', 'Technology limitations', 'Ecosystem development']
    }
  ];

  const riskFactors = [
    {
      title: 'Technical Challenges',
      description: 'Software development is unpredictable. Bugs, architecture changes, or unforeseen technical obstacles may delay or prevent feature implementation.'
    },
    {
      title: 'Resource Constraints',
      description: 'Team capacity, funding availability, and developer expertise may limit ability to deliver on projected timelines.'
    },
    {
      title: 'Market Conditions',
      description: 'Cryptocurrency market downturns, regulatory changes, or competitive pressures may impact priorities and timelines.'
    },
    {
      title: 'Regulatory Uncertainty',
      description: 'Evolving legal and regulatory landscape may require changes to planned features, timelines, or business model.'
    },
    {
      title: 'Strategic Pivots',
      description: 'User feedback, market research, or business insights may necessitate changes to product roadmap or feature prioritization.'
    },
    {
      title: 'Third-Party Dependencies',
      description: 'Reliance on Solana blockchain, external APIs, or partner services may introduce delays or failures outside our control.'
    }
  ];

  return (
    <>
      <SEO
        title="Forward-Looking Statements - PRICKO"
        description="Forward-looking statements policy for PRICKO token. Understand how roadmap projections, timeline estimates, and future plans should be interpreted."
        keywords="forward-looking statements, roadmap disclaimer, timeline projections, PRICKO roadmap"
        canonicalUrl="/forward-looking-statements"
      />

      <div className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-12">
          <div className="container-max">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-8 transition-colors"
            >
              <FiArrowLeft /> Back to Home
            </Link>

            <div className="page-enter text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <FiCalendar className="text-blue-400 text-2xl" />
                <span className="text-blue-400 font-semibold">Roadmap Disclosure</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Forward-Looking <span className="gradient-text">Statements</span>
              </h1>

              <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                Understanding how to interpret roadmap projections, timeline estimates, and future plans disclosed on Pricko.com.
              </p>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="section-padding py-8">
          <div className="container-max max-w-4xl">
            <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated" ref={scrollRef}>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Forward-Looking Statements?</h2>
              <p className="text-muted leading-relaxed mb-6">
                Forward-looking statements are any statements about future events, plans, expectations, or projections.
                These include roadmap timelines, product launch dates, feature descriptions, and vision statements about
                the future of $PRICKO or Privacy Gecko ecosystem.
              </p>

              <div className="bg-secondary/50 border border-accent/20 rounded-lg p-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-accent">Official Policy:</strong> {FORWARD_LOOKING_STATEMENT}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="section-padding py-12">
          <div className="container-max max-w-6xl">
            <h2 className="animate-on-scroll opacity-0 translate-y-12 text-3xl md:text-4xl font-bold text-center mb-12" ref={scrollRef}>
              Examples of <span className="gradient-text">Forward-Looking Statements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forwardLookingExamples.map((example, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-12 card-elevated"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <FiAlertCircle className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                        {example.type}
                      </span>
                      <p className="text-white text-lg mt-2 italic">{example.statement}</p>
                    </div>
                  </div>

                  <div className="ml-8 space-y-1">
                    <p className="text-sm text-muted font-semibold mb-2">Subject to these risks:</p>
                    {example.risks.map((risk, riskIndex) => (
                      <p key={riskIndex} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-yellow-400">•</span> {risk}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Factors Section */}
        <section className="section-padding py-12 bg-secondary/30">
          <div className="container-max max-w-6xl">
            <h2 className="animate-on-scroll opacity-0 translate-y-12 text-3xl md:text-4xl font-bold text-center mb-12">
              Risk Factors Affecting <span className="gradient-text">Projections</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {riskFactors.map((factor, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-12 card-interactive"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specific Disclaimers Section */}
        <section className="section-padding py-12">
          <div className="container-max max-w-4xl">
            <h2 className="animate-on-scroll opacity-0 translate-y-12 text-3xl font-bold text-center mb-8">
              Specific <span className="gradient-text">Disclaimers</span>
            </h2>

            <div className="space-y-6">
              <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiCalendar className="text-accent" />
                  Roadmap Timelines
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed bg-secondary/50 border border-accent/20 rounded p-4">
                  {ROADMAP_DISCLAIMER}
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-cyan-400" />
                  GeckoCore Protocol
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed bg-secondary/50 border border-cyan-400/20 rounded p-4">
                  {PROTOCOL_TIMELINE_DISCLAIMER}
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-white mb-3">No Obligation to Update</h3>
                <p className="text-muted leading-relaxed">
                  We have <strong className="text-white">no obligation</strong> to update forward-looking statements
                  if circumstances change. Projected timelines, features, or plans may be modified, delayed, or
                  cancelled without notice. Current roadmap reflects plans as of November 2025 and is subject to
                  change at any time.
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-white mb-3">No Guarantees</h3>
                <p className="text-muted leading-relaxed">
                  Forward-looking statements are <strong className="text-white">not guarantees</strong> of future
                  performance. Actual results may differ materially from projections due to risks, uncertainties,
                  and factors outside our control. Do not rely on forward-looking statements as promises or commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Interpret Section */}
        <section className="section-padding py-12 bg-secondary/30">
          <div className="container-max max-w-4xl">
            <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                How to Interpret <span className="gradient-text">Our Roadmap</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Current Products Are Real</p>
                    <p className="text-sm text-muted">
                      Products marked "live" are operational today. You can verify them at{' '}
                      <a href="https://privacygecko.com" className="text-accent hover:underline">privacygecko.com</a>.
                      These are facts, not projections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-400 font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Future Features Are Estimates</p>
                    <p className="text-sm text-muted">
                      Anything marked "Q2 2026," "2027+," or "in development" is a forward-looking statement.
                      Timelines may change. Features may be delayed, modified, or cancelled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Vision Statements Are Aspirational</p>
                    <p className="text-sm text-muted">
                      Statements about "becoming infrastructure" or "powering Solana ecosystem" reflect our
                      long-term vision. These are goals, not certainties. Success is not guaranteed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 font-bold">4</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Do Your Own Research (DYOR)</p>
                    <p className="text-sm text-muted">
                      Never rely solely on our projections. Conduct independent research. Consult with
                      legal/financial advisors. Make your own informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="section-padding py-12">
          <div className="container-max max-w-4xl text-center">
            <div className="animate-on-scroll opacity-0 translate-y-12 card-elevated">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Roadmap?</h3>
              <p className="text-muted mb-6">
                If you have questions about forward-looking statements or roadmap timelines, please review
                our official documentation or contact our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/roadmap" className="btn-primary">
                  View Roadmap
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Support
                </Link>
              </div>
            </div>

            <p className="animate-on-scroll opacity-0 text-sm text-muted mt-8" style={{ animationDelay: '0.3s' }}>
              Last Updated: November 2025
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForwardLookingStatementsPage;
