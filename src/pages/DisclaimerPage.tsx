import React from 'react';
import { motion } from 'framer-motion';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen section-padding pt-32">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="text-muted mb-8">Last Updated: October 13, 2025</p>

          {/* Important Notice Banner */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-gray-300 leading-relaxed">
                  Please read this disclaimer carefully before using PRICKO's services or purchasing $PRICKO tokens.
                  This disclaimer contains important information about risks and limitations.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1: Not Financial Advice */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">1. Not Financial or Investment Advice</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <strong>Nothing on this website constitutes financial, investment, legal, or tax advice.</strong>
                </p>
                <p className="leading-relaxed">
                  The information provided by PRICKO is for general informational purposes only.
                  All content, including blog posts, documentation, and communications, should not be
                  construed as professional advice of any kind.
                </p>
                <p className="leading-relaxed">
                  Before making any financial decisions, including purchasing cryptocurrency tokens,
                  you should conduct your own research and consult with qualified professionals
                  (financial advisors, tax consultants, legal counsel) who understand your specific situation.
                </p>
                <div className="bg-secondary/30 border border-accent/20 rounded-lg p-4 mt-4">
                  <p className="text-white font-semibold mb-2">⚡ Key Point:</p>
                  <p className="text-gray-300">
                    $PRICKO is a utility token designed to access privacy tools and features.
                    It is NOT marketed as an investment vehicle, security, or financial product.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Cryptocurrency Risks */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">2. Cryptocurrency and Blockchain Risks</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed font-semibold text-white">
                  Cryptocurrency investments carry substantial risks. You may lose all invested capital.
                </p>
                <div className="space-y-3">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Extreme Volatility</h3>
                    <p>
                      Cryptocurrency prices can fluctuate dramatically in short periods. $PRICKO token
                      value may experience significant gains or losses, potentially losing all value.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Liquidity Risk</h3>
                    <p>
                      There is no guarantee that $PRICKO tokens will have liquid markets. You may not
                      be able to sell tokens when desired or at expected prices.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Irreversible Transactions</h3>
                    <p>
                      Blockchain transactions are irreversible. Sending tokens to wrong addresses or
                      losing private keys results in permanent, unrecoverable loss. Always verify
                      recipient addresses carefully before confirming transactions.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Gas Fees Are Non-Refundable</h3>
                    <p>
                      All blockchain transactions on Solana require network fees (gas fees). These fees
                      are paid to validators and are non-refundable, even if a transaction fails or is
                      rejected. During network congestion, gas fees may increase significantly.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Wallet Security Is Your Responsibility</h3>
                    <p>
                      You are solely responsible for securing your wallet, private keys, and seed phrases.
                      PRICKO cannot recover lost keys or reverse transactions. Never share your private keys
                      with anyone. Use hardware wallets for significant holdings. Enable all available
                      security features.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Network Congestion Risks</h3>
                    <p>
                      During periods of high blockchain activity, transactions may be delayed or fail.
                      Network congestion can prevent time-sensitive operations. PRICKO is not responsible
                      for delays or failures caused by network congestion.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Smart Contract Risks</h3>
                    <p>
                      Smart contracts may contain bugs or vulnerabilities despite audits. Exploits
                      could result in loss of funds. Audit status: Token contract has undergone internal
                      review; third-party audit planned. Smart contract code is immutable once deployed
                      and cannot be updated to fix issues.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 Regulatory Uncertainty</h3>
                    <p>
                      Cryptocurrency regulations are rapidly evolving and vary by jurisdiction. Future
                      regulatory actions could prohibit, restrict, or impose compliance burdens on
                      $PRICKO token usage, trading, or ownership. You are responsible for understanding
                      and complying with regulations in your jurisdiction.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-red-400 mb-2">🔴 No FDIC Insurance</h3>
                    <p>
                      Cryptocurrency holdings are not insured by FDIC, SIPC, or any government agency.
                      There is no safety net if things go wrong.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: No Guarantees */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">3. No Guarantees or Warranties</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  PRICKO makes no guarantees, representations, or warranties regarding:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>The performance, functionality, or availability of our privacy tools</li>
                  <li>The future value, utility, or adoption of $PRICKO tokens</li>
                  <li>Compatibility with all devices, wallets, or platforms</li>
                  <li>Uninterrupted or error-free service operation</li>
                  <li>Protection against all security threats or data breaches</li>
                  <li>Compliance with all jurisdictional regulations</li>
                  <li>Successful completion of our roadmap or development plans</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  While we strive for excellence, software development involves inherent uncertainties.
                  Features may change, be delayed, or not be implemented as originally described.
                </p>
              </div>
            </section>

            {/* Section 4: Regulatory Uncertainty */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">4. Regulatory and Legal Uncertainty</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Cryptocurrency regulation is evolving rapidly and varies significantly by jurisdiction.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>Regulatory Changes:</strong> New laws or regulations may prohibit, restrict,
                    or impose compliance burdens on cryptocurrency activities in your jurisdiction.
                  </li>
                  <li>
                    <strong>Tax Implications:</strong> Cryptocurrency transactions may have tax consequences.
                    You are solely responsible for understanding and complying with tax obligations.
                  </li>
                  <li>
                    <strong>Legal Restrictions:</strong> It is your responsibility to ensure that
                    purchasing and using $PRICKO tokens is legal in your jurisdiction.
                  </li>
                  <li>
                    <strong>No Legal Recourse Guarantee:</strong> The decentralized nature of
                    blockchain may limit your legal recourse in disputes.
                  </li>
                </ul>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                  <p className="text-white font-semibold mb-2">⚠️ Restricted Jurisdictions:</p>
                  <p>
                    Residents of certain countries may be prohibited from purchasing or using $PRICKO tokens.
                    Check your local laws before proceeding.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Do Your Own Research (DYOR) */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">5. Do Your Own Research (DYOR)</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed font-semibold text-white text-lg">
                  You are solely responsible for conducting due diligence before engaging with PRICKO.
                </p>
                <p className="leading-relaxed">
                  Before purchasing $PRICKO tokens or using our services, you should:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Read and understand our whitepaper, tokenomics, and technical documentation</li>
                  <li>Review our open-source code on GitHub</li>
                  <li>Research the team, project history, and community feedback</li>
                  <li>Understand the technology and how it works</li>
                  <li>Assess risks in the context of your personal financial situation</li>
                  <li>Verify information from multiple independent sources</li>
                  <li>Be skeptical of unrealistic promises or guaranteed returns</li>
                </ul>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-4">
                  <p className="text-white font-semibold mb-2">✓ Informed Decision-Making:</p>
                  <p>
                    Never invest money you cannot afford to lose. Never purchase cryptocurrency based
                    solely on hype, influencer recommendations, or fear of missing out (FOMO).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Seek Professional Advice */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">6. Seek Professional Advice</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Given the complexity and risks associated with cryptocurrency, we strongly recommend
                  consulting with qualified professionals before making decisions:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>Financial Advisors:</strong> To assess whether cryptocurrency investments
                    align with your financial goals, risk tolerance, and overall portfolio strategy.
                  </li>
                  <li>
                    <strong>Tax Professionals:</strong> To understand tax implications of cryptocurrency
                    transactions in your jurisdiction and ensure compliance.
                  </li>
                  <li>
                    <strong>Legal Counsel:</strong> To understand legal and regulatory requirements,
                    especially if dealing with significant amounts.
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Professional advisors familiar with cryptocurrency can provide personalized guidance
                  based on your specific circumstances.
                </p>
              </div>
            </section>

            {/* Section 7: Forward-Looking Statements */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">7. Forward-Looking Statements</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website, whitepaper, and communications may contain forward-looking statements
                about future plans, developments, and features. These statements are subject to risks,
                uncertainties, and assumptions. Actual results may differ materially from expectations.
                We are under no obligation to update forward-looking statements as circumstances change.
              </p>
            </section>

            {/* Section 8: Third-Party Content */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">8. Third-Party Content and Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites, content, or services.
                PRICKO does not endorse, verify, or assume responsibility for third-party content.
                Your interactions with third parties are solely between you and them.
              </p>
            </section>

            {/* Section 9: Modification of Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">9. Changes to This Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Disclaimer from time to time. Changes will be posted on this page
                with an updated "Last Updated" date. Your continued use of our services constitutes
                acceptance of the updated Disclaimer.
              </p>
            </section>

            {/* Section 10: Contact */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">10. Questions or Concerns</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Disclaimer or need clarification:
              </p>
              <div className="bg-secondary/50 border border-accent/20 rounded-lg p-6">
                <p className="text-white"><strong>Email (Legal):</strong> legal@pricko.com</p>
                <p className="text-white mt-2"><strong>Email (General):</strong> community@pricko.com</p>
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

          {/* Final Warning Banner */}
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6 mt-12">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚨</span>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Final Reminder</h3>
                <p className="text-gray-300 leading-relaxed">
                  By using PRICKO's services or purchasing $PRICKO tokens, you acknowledge that you have
                  read, understood, and accepted this Disclaimer, our Terms of Service, and Privacy Policy.
                  You accept all risks associated with cryptocurrency and confirm that you are acting of
                  your own free will with full understanding of potential consequences.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
