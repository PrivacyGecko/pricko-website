import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { FiGlobe, FiAlertTriangle, FiArrowLeft, FiShield } from 'react-icons/fi';
import { GEOGRAPHIC_RESTRICTION_NOTICE, US_PERSONS_DISCLAIMER } from '../../constants/legal';

const GeographicRestrictionsPage: React.FC = () => {
  const restrictedJurisdictions = [
    {
      region: 'United States',
      status: 'Restricted',
      reason: 'Securities law uncertainty, regulatory complexity',
      details: 'U.S. persons should consult with legal counsel regarding regulatory status of cryptocurrency purchases in their jurisdiction.'
    },
    {
      region: 'China',
      status: 'Prohibited',
      reason: 'Cryptocurrency trading banned by government',
      details: 'All cryptocurrency transactions are prohibited for Chinese residents and citizens.'
    },
    {
      region: 'North Korea',
      status: 'Prohibited',
      reason: 'International sanctions, OFAC restrictions',
      details: 'Token sales to North Korean residents are prohibited under international law.'
    },
    {
      region: 'Iran',
      status: 'Prohibited',
      reason: 'U.S. sanctions, OFAC restrictions',
      details: 'U.S. sanctions prohibit transactions with Iranian residents and entities.'
    },
    {
      region: 'Syria',
      status: 'Prohibited',
      reason: 'U.S. sanctions, OFAC restrictions',
      details: 'U.S. sanctions prohibit transactions with Syrian residents and entities.'
    }
  ];

  return (
    <>
      <SEO
        title="Geographic Restrictions - PRICKO Token"
        description="Geographic restrictions and availability information for $PRICKO token. Understand which jurisdictions may not be eligible to purchase or hold tokens."
        keywords="geographic restrictions, token availability, jurisdiction restrictions, PRICKO availability"
        canonicalUrl="/geographic-restrictions"
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

            <div
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
                <FiGlobe className="text-orange-400 text-2xl" />
                <span className="text-orange-400 font-semibold">Availability Notice</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Geographic <span className="gradient-text">Restrictions</span>
              </h1>

              <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                Important information about jurisdictions where $PRICKO tokens may not be available for purchase or ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Main Disclaimer Section */}
        <section className="section-padding py-8">
          <div className="container-max max-w-4xl">
            <div
              className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border-2 border-orange-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-orange-400 mb-4 text-center flex items-center justify-center gap-2">
                <FiAlertTriangle />
                Important Notice
              </h2>
              <div className="space-y-4 text-white">
                <p className="text-lg leading-relaxed">
                  {GEOGRAPHIC_RESTRICTION_NOTICE}
                </p>
                <div className="border-t border-orange-500/20 pt-4">
                  <p className="text-lg leading-relaxed">
                    {US_PERSONS_DISCLAIMER}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restricted Jurisdictions Table */}
        <section className="section-padding py-12">
          <div className="container-max max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Known <span className="gradient-text">Restricted Jurisdictions</span>
            </h2>

            <div className="space-y-6">
              {restrictedJurisdictions.map((jurisdiction, index) => (
                <div
                  key={index}
                  className="card-elevated"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{jurisdiction.region}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            jurisdiction.status === 'Prohibited'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          }`}
                        >
                          {jurisdiction.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted mb-3">
                        <strong className="text-white">Reason:</strong> {jurisdiction.reason}
                      </p>
                      <p className="text-sm text-gray-300">{jurisdiction.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
            >
              <p className="text-sm text-yellow-200 text-center">
                ⚠️ <strong>Note:</strong> This list is not exhaustive. Additional jurisdictions may have
                restrictions that are not listed here. It is your responsibility to ensure compliance with
                local laws in your jurisdiction.
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities Section */}
        <section className="section-padding py-12 bg-secondary/30">
          <div className="container-max max-w-4xl">
            <h2
              className="text-3xl font-bold text-center mb-8"
            >
              Your <span className="gradient-text">Responsibilities</span>
            </h2>

            <div className="space-y-6">
              <div
                className="card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiShield className="text-accent text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Verify Local Laws</h3>
                    <p className="text-muted leading-relaxed">
                      You are solely responsible for determining whether cryptocurrency purchases are legal
                      in your jurisdiction. Consult with local legal counsel if uncertain about the legality
                      of purchasing or holding $PRICKO tokens.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiAlertTriangle className="text-yellow-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Accurate Representations</h3>
                    <p className="text-muted leading-relaxed">
                      By accessing this website and purchasing tokens, you represent and warrant that you
                      are not located in, resident of, or citizen of any restricted jurisdiction. False
                      representations may result in violations of applicable laws.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Changing Regulations</h3>
                    <p className="text-muted leading-relaxed">
                      Cryptocurrency regulations are rapidly evolving. Laws that permit token purchases
                      today may change tomorrow. You are responsible for staying informed about legal
                      developments in your jurisdiction.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiAlertTriangle className="text-red-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Consequences of Violation</h3>
                    <p className="text-muted leading-relaxed">
                      Purchasing tokens from a restricted jurisdiction may result in legal consequences
                      including fines, penalties, or criminal prosecution. We are not responsible for any
                      legal consequences resulting from your violation of applicable laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VPN & IP Blocking Notice */}
        <section className="section-padding py-12">
          <div className="container-max max-w-4xl">
            <div
              className="card-elevated"
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                VPNs & Circumvention
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We currently rely on <strong className="text-white">disclaimer-based restrictions</strong> rather
                than IP-based blocking. However, use of VPNs or other tools to circumvent geographic restrictions
                violates our Terms of Service and may constitute fraud.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm text-red-300">
                  <strong>⚠️ Warning:</strong> If you are located in a restricted jurisdiction, you should NOT
                  use VPNs, proxies, or other tools to access this website or purchase tokens. Doing so may
                  expose you to legal consequences in your home jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right to Modify Section */}
        <section className="section-padding py-12 bg-secondary/30">
          <div className="container-max max-w-4xl">
            <div
              className="card-elevated"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Right to Modify Restrictions</h2>
              <p className="text-muted leading-relaxed mb-4">
                We reserve the right to add, remove, or modify geographic restrictions at any time without
                prior notice. Changes may be based on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-muted">
                  <span className="text-accent mt-1">•</span>
                  <span>New regulatory developments or legal guidance</span>
                </li>
                <li className="flex items-start gap-2 text-muted">
                  <span className="text-accent mt-1">•</span>
                  <span>Changes to sanctions lists (OFAC, UN, EU, etc.)</span>
                </li>
                <li className="flex items-start gap-2 text-muted">
                  <span className="text-accent mt-1">•</span>
                  <span>Business or strategic decisions</span>
                </li>
                <li className="flex items-start gap-2 text-muted">
                  <span className="text-accent mt-1">•</span>
                  <span>Technical or operational considerations</span>
                </li>
              </ul>
              <p className="text-sm text-yellow-300 mt-4">
                If your jurisdiction becomes restricted after you purchase tokens, you may be required to
                divest your holdings or face account suspension.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding py-12">
          <div className="container-max max-w-4xl text-center">
            <div
              className="card-elevated"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Availability?</h3>
              <p className="text-muted mb-6">
                If you have questions about whether $PRICKO is available in your jurisdiction, please
                consult with local legal counsel. We cannot provide legal advice regarding the legality
                of cryptocurrency purchases in your region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/terms" className="btn-secondary">
                  Read Terms of Service
                </Link>
                <Link to="/contact" className="btn-tertiary">
                  Contact Support
                </Link>
              </div>
            </div>

            <p
              className="text-sm text-muted mt-8"
            >
              Last Updated: November 2025
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GeographicRestrictionsPage;
