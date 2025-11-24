import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen section-padding pt-32">
      <div className="container-max max-w-4xl">
        <div className="page-enter">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-muted mb-8">Last Updated: November 13, 2025</p>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1: Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using PRICKO's website, privacy products, or services ("Services"),
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree
                to these Terms, do not use our Services.
              </p>
            </section>

            {/* Section 2: User Accounts and Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">2. User Accounts and Responsibilities</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  When using our Services, you are responsible for:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Maintaining the security of your wallet and private keys</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with all applicable laws</li>
                  <li>The accuracy of information you provide</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You must not share your wallet credentials or private keys with anyone.
                  PRICKO will never ask for your private keys or seed phrases.
                </p>
              </div>
            </section>

            {/* Section 3: Intellectual Property Rights */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">3. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Unless otherwise stated, PRICKO and its licensors own all intellectual property
                rights in the Services, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>Website design, layout, and graphics</li>
                <li>PRICKO branding, logos, and trademarks</li>
                <li>Software code (except open-source components)</li>
                <li>Content and documentation</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our open-source privacy products are licensed under their respective open-source
                licenses as specified in their GitHub repositories.
              </p>
            </section>

            {/* Section 4: Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">4. Prohibited Activities</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>Use our Services for illegal activities or to violate any laws</li>
                <li>Attempt to hack, exploit, or compromise our Services</li>
                <li>Upload malicious content, viruses, or harmful code</li>
                <li>Abuse, harass, or threaten other users</li>
                <li>Impersonate PRICKO or its representatives</li>
                <li>Scrape, mine, or extract data without permission</li>
                <li>Circumvent security features or usage limits</li>
                <li>Use automated systems (bots) without authorization</li>
              </ul>

              <div className="mt-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">4.1 Prohibited Jurisdictions</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Due to legal and regulatory restrictions, persons located in or residents of the following
                  jurisdictions are <strong className="text-white">PROHIBITED</strong> from accessing or using
                  PRICKO Services, including purchasing, holding, or trading $PRICKO tokens:
                </p>
                <div className="bg-secondary/50 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-white mb-3">OFAC Sanctioned Countries:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                    <li>Cuba</li>
                    <li>Iran</li>
                    <li>North Korea (Democratic People's Republic of Korea)</li>
                    <li>Syria</li>
                    <li>Crimea, Donetsk, and Luhansk regions of Ukraine</li>
                  </ul>
                </div>
                <div className="bg-secondary/50 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-white mb-3">High-Risk Jurisdictions (FATF List):</h4>
                  <p className="text-gray-300 mb-2">
                    Jurisdictions identified by the Financial Action Task Force (FATF) as high-risk or under
                    increased monitoring for anti-money laundering (AML) and counter-terrorism financing (CTF)
                    deficiencies. This list is updated regularly; users are responsible for checking current status.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-5">
                  <h4 className="font-semibold text-white mb-3">Additional Restricted Jurisdictions:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                    <li>Afghanistan (under Taliban control)</li>
                    <li>Belarus (specific sanctions apply)</li>
                    <li>Myanmar (Burma) (specific sanctions apply)</li>
                    <li>Venezuela (specific sanctions apply)</li>
                    <li>Zimbabwe (specific sanctions apply)</li>
                  </ul>
                </div>
                <p className="text-gray-300 leading-relaxed mt-4">
                  <strong className="text-white">Important:</strong> Sanctions lists change frequently. Users are
                  responsible for ensuring their use of PRICKO Services complies with all applicable sanctions and
                  export control laws. By using our Services, you represent and warrant that you are not located in,
                  resident of, or subject to sanctions in any prohibited jurisdiction.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Violation of these restrictions may result in immediate termination of access and potential legal
                  consequences. We reserve the right to block access from any jurisdiction at our discretion.
                </p>
              </div>
            </section>

            {/* Section 5: Token Purchase and Use */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">5. $PRICKO Token Purchase and Use</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong>5.1 Token Utility:</strong> $PRICKO tokens provide access to premium
                  features within our privacy products ecosystem. Token holders may receive:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Enhanced storage quotas in Gecko Share</li>
                  <li>Advanced protection features in Gecko Guard</li>
                  <li>Early access to new privacy products</li>
                  <li>Governance voting rights (when implemented)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  <strong>5.2 No Investment Advice:</strong> $PRICKO tokens are utility tokens,
                  not securities or investments. Purchase decisions should be based on utility needs,
                  not investment expectations.
                </p>
                <p className="leading-relaxed">
                  <strong>5.3 Wallet Requirements:</strong> You must use a compatible Solana
                  wallet to hold and use $PRICKO tokens. We are not responsible for wallet-related
                  issues or lost tokens due to user error.
                </p>
                <p className="leading-relaxed">
                  <strong>5.4 GeckoCore Protocol Development Roadmap:</strong> References to future
                  GeckoCore protocol infrastructure, staking rewards, node operations, governance features,
                  and development timelines beyond Q4 2025 constitute forward-looking statements that are
                  subject to substantial risks, uncertainties, and assumptions. These statements include,
                  but are not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>Q1 2026 testnet launch and subsequent mainnet deployment</li>
                  <li>Node staking mechanisms and potential rewards</li>
                  <li>Decentralized governance via GeckoDAO</li>
                  <li>Protocol-level access control and verification systems</li>
                  <li>Integration of $PRICKO tokens into future infrastructure</li>
                </ul>
                <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-yellow-400">Important:</strong> Actual development timelines,
                    features, and functionality may differ materially from current projections due to technical
                    challenges, regulatory changes, market conditions, resource constraints, or strategic
                    pivots. Past performance in delivering Privacy Gecko products (Gecko Advisor, Gecko Share,
                    Gecko Guard, Gecko Lock) does not guarantee future success in building decentralized
                    infrastructure. $PRICKO tokens provide utility for current products only. Future protocol
                    utility is aspirational and not guaranteed. No investment returns, staking yields, or
                    appreciation in value should be expected.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>PRICKO shall not be liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability shall not exceed the amount you paid for Services in the past 12 months</li>
                <li>We are not responsible for blockchain network issues, wallet problems, or third-party services</li>
                <li>We do not guarantee uninterrupted or error-free service operation</li>
              </ul>
            </section>

            {/* Section 7: Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind,
                either express or implied, including but not limited to warranties of merchantability,
                fitness for a particular purpose, or non-infringement. We do not guarantee that our
                Services will meet your requirements or be available at all times.
              </p>
            </section>

            {/* Section 8: Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">8. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless PRICKO, its developers, contributors,
                and affiliates from any claims, damages, liabilities, and expenses (including legal fees)
                arising from your use of our Services, violation of these Terms, or infringement of
                any third-party rights.
              </p>
            </section>

            {/* Section 9: Governing Law and Disputes */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">9. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong>9.1 Governing Law:</strong> These Terms shall be governed by and construed
                  in accordance with the laws of the Cayman Islands, without regard to conflict of law principles.
                </p>
                <p className="leading-relaxed">
                  <strong>9.2 Dispute Resolution:</strong> Any disputes arising from these Terms or
                  your use of our Services shall first be attempted to be resolved through good-faith
                  negotiation. If unsuccessful, disputes may be resolved through binding arbitration.
                </p>
                <p className="leading-relaxed">
                  <strong>9.3 Class Action Waiver:</strong> You agree to resolve disputes with PRICKO
                  on an individual basis and waive your right to participate in class action lawsuits.
                </p>
              </div>
            </section>

            {/* Section 10: Service Modifications and Termination */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">10. Service Modifications and Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong>10.1 Modifications:</strong> We reserve the right to modify, suspend, or
                  discontinue any part of our Services at any time with or without notice.
                </p>
                <p className="leading-relaxed">
                  <strong>10.2 Termination:</strong> We may terminate or suspend your access to our
                  Services immediately, without prior notice, if you breach these Terms or engage in
                  prohibited activities.
                </p>
                <p className="leading-relaxed">
                  <strong>10.3 Effect of Termination:</strong> Upon termination, your right to use
                  our Services will immediately cease. Provisions that should survive termination
                  (including liability limitations and indemnification) shall remain in effect.
                </p>
              </div>
            </section>

            {/* Section 11: Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">11. Changes to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. We will notify you of material changes
                by posting the updated Terms on this page with a new "Last Updated" date. Your
                continued use of our Services after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 12: Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">12. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary/50 border border-accent/20 rounded-lg p-6">
                <p className="text-white"><strong>Email (General Inquiries):</strong> community@pricko.com</p>
                <p className="text-white mt-2"><strong>Email (Legal Matters):</strong> legal@pricko.com</p>
                <p className="text-white mt-2"><strong>Physical Address:</strong><br/>
                  PRICKO Project<br/>
                  c/o Offshore Incorporations Centre<br/>
                  PO Box 957, Offshore Incorporations Centre<br/>
                  Road Town, Tortola VG1110<br/>
                  British Virgin Islands
                </p>
                <p className="text-muted text-sm mt-4">
                  We aim to respond to all inquiries within 48 hours.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
