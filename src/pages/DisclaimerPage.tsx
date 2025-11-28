import React from 'react';
import LegalPageTemplate from '../components/common/LegalPageTemplate';

const DisclaimerPage: React.FC = () => {
  const tableOfContents = [
    { id: 'not-financial-advice', title: 'Not Financial or Investment Advice' },
    { id: 'crypto-risks', title: 'Cryptocurrency and Blockchain Risks' },
    { id: 'no-guarantees', title: 'No Guarantees or Warranties' },
    { id: 'regulatory', title: 'Regulatory and Legal Uncertainty' },
    { id: 'dyor', title: 'Do Your Own Research (DYOR)' },
    { id: 'professional-advice', title: 'Seek Professional Advice' },
    { id: 'forward-looking', title: 'Forward-Looking Statements' },
    { id: 'third-party', title: 'Third-Party Content and Links' },
    { id: 'changes', title: 'Changes to This Disclaimer' },
    { id: 'contact', title: 'Questions or Concerns' },
  ];

  const sections = [
    {
      id: 'not-financial-advice',
      title: '1. Not Financial or Investment Advice',
      content: (
        <div className="space-y-4">
          <p><strong>Nothing on this website constitutes financial, investment, legal, or tax advice.</strong></p>
          <p>
            The information provided by PRICKO is for general informational purposes only.
            All content, including blog posts, documentation, and communications, should not be
            construed as professional advice of any kind.
          </p>
          <p>
            Before making any financial decisions, including purchasing cryptocurrency tokens,
            you should conduct your own research and consult with qualified professionals
            (financial advisors, tax consultants, legal counsel) who understand your specific situation.
          </p>
          <div className="bg-secondary/30 border border-accent/20 rounded-lg p-4 mt-4">
            <p className="text-white font-semibold mb-2">Key Point:</p>
            <p>
              $PRICKO is a utility token designed to access privacy products and features.
              It is NOT marketed as an investment vehicle, security, or financial product.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'crypto-risks',
      title: '2. Cryptocurrency and Blockchain Risks',
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-white">
            Cryptocurrency investments carry substantial risks. You may lose all invested capital.
          </p>
          <div className="space-y-3">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Extreme Volatility</h3>
              <p>
                Cryptocurrency prices can fluctuate dramatically in short periods. $PRICKO token
                value may experience significant gains or losses, potentially losing all value.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Liquidity Risk</h3>
              <p>
                There is no guarantee that $PRICKO tokens will have liquid markets. You may not
                be able to sell tokens when desired or at expected prices.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Irreversible Transactions</h3>
              <p>
                Blockchain transactions are irreversible. Sending tokens to wrong addresses or
                losing private keys results in permanent, unrecoverable loss. Always verify
                recipient addresses carefully before confirming transactions.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Gas Fees Are Non-Refundable</h3>
              <p>
                All blockchain transactions on Solana require network fees (gas fees). These fees
                are paid to validators and are non-refundable, even if a transaction fails or is
                rejected. During network congestion, gas fees may increase significantly.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Wallet Security Is Your Responsibility</h3>
              <p>
                You are solely responsible for securing your wallet, private keys, and seed phrases.
                PRICKO cannot recover lost keys or reverse transactions. Never share your private keys
                with anyone. Use hardware wallets for significant holdings. Enable all available
                security features.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Network Congestion Risks</h3>
              <p>
                During periods of high blockchain activity, transactions may be delayed or fail.
                Network congestion can prevent time-sensitive operations. PRICKO is not responsible
                for delays or failures caused by network congestion.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Smart Contract Risks</h3>
              <p>
                Smart contracts may contain bugs or vulnerabilities despite audits. Exploits
                could result in loss of funds. Audit status: Token contract has undergone internal
                review; third-party audit planned. Smart contract code is immutable once deployed
                and cannot be updated to fix issues.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">Regulatory Uncertainty</h3>
              <p>
                Cryptocurrency regulations are rapidly evolving and vary by jurisdiction. Future
                regulatory actions could prohibit, restrict, or impose compliance burdens on
                $PRICKO token usage, trading, or ownership. You are responsible for understanding
                and complying with regulations in your jurisdiction.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-bold text-red-400 mb-2">No FDIC Insurance</h3>
              <p>
                Cryptocurrency holdings are not insured by FDIC, SIPC, or any government agency.
                There is no safety net if things go wrong.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'no-guarantees',
      title: '3. No Guarantees or Warranties',
      content: (
        <div className="space-y-4">
          <p>PRICKO makes no guarantees, representations, or warranties regarding:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>The performance, functionality, or availability of our privacy products</li>
            <li>The future value, utility, or adoption of $PRICKO tokens</li>
            <li>Compatibility with all devices, wallets, or platforms</li>
            <li>Uninterrupted or error-free service operation</li>
            <li>Protection against all security threats or data breaches</li>
            <li>Compliance with all jurisdictional regulations</li>
            <li>Successful completion of our roadmap or development plans</li>
          </ul>
          <p className="mt-4">
            While we strive for excellence, software development involves inherent uncertainties.
            Features may change, be delayed, or not be implemented as originally described.
          </p>
        </div>
      ),
    },
    {
      id: 'regulatory',
      title: '4. Regulatory and Legal Uncertainty',
      content: (
        <div className="space-y-4">
          <p>Cryptocurrency regulation is evolving rapidly and varies significantly by jurisdiction.</p>
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
            <p className="text-white font-semibold mb-2">Restricted Jurisdictions:</p>
            <p>
              Residents of certain countries may be prohibited from purchasing or using $PRICKO tokens.
              Check your local laws before proceeding.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'dyor',
      title: '5. Do Your Own Research (DYOR)',
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-white text-lg">
            You are solely responsible for conducting due diligence before engaging with PRICKO.
          </p>
          <p>Before purchasing $PRICKO tokens or using our services, you should:</p>
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
            <p className="text-white font-semibold mb-2">Informed Decision-Making:</p>
            <p>
              Never invest money you cannot afford to lose. Never purchase cryptocurrency based
              solely on hype, influencer recommendations, or fear of missing out (FOMO).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'professional-advice',
      title: '6. Seek Professional Advice',
      content: (
        <div className="space-y-4">
          <p>
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
          <p className="mt-4">
            Professional advisors familiar with cryptocurrency can provide personalized guidance
            based on your specific circumstances.
          </p>
        </div>
      ),
    },
    {
      id: 'forward-looking',
      title: '7. Forward-Looking Statements',
      content: (
        <p>
          Our website, whitepaper, and communications may contain forward-looking statements
          about future plans, developments, and features. These statements are subject to risks,
          uncertainties, and assumptions. Actual results may differ materially from expectations.
          We are under no obligation to update forward-looking statements as circumstances change.
        </p>
      ),
    },
    {
      id: 'third-party',
      title: '8. Third-Party Content and Links',
      content: (
        <p>
          Our website may contain links to third-party websites, content, or services.
          PRICKO does not endorse, verify, or assume responsibility for third-party content.
          Your interactions with third parties are solely between you and them.
        </p>
      ),
    },
    {
      id: 'changes',
      title: '9. Changes to This Disclaimer',
      content: (
        <p>
          We may update this Disclaimer from time to time. Changes will be posted on this page
          with an updated "Last Updated" date. Your continued use of our services constitutes
          acceptance of the updated Disclaimer.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '10. Questions or Concerns',
      content: (
        <p>
          If you have questions about this Disclaimer or need clarification, please use
          the contact information provided below.
        </p>
      ),
    },
  ];

  const warningBanner = {
    icon: '⚠️',
    title: 'Important Notice',
    content: (
      <p>
        Please read this disclaimer carefully before using PRICKO's services or purchasing $PRICKO tokens.
        This disclaimer contains important information about risks and limitations.
      </p>
    ),
    variant: 'warning' as const,
  };

  const finalBanner = {
    icon: '🚨',
    title: 'Final Reminder',
    content: (
      <p>
        By using PRICKO's services or purchasing $PRICKO tokens, you acknowledge that you have
        read, understood, and accepted this Disclaimer, our Terms of Service, and Privacy Policy.
        You accept all risks associated with cryptocurrency and confirm that you are acting of
        your own free will with full understanding of potential consequences.
      </p>
    ),
    variant: 'danger' as const,
  };

  const contactInfo = {
    legalEmail: 'legal@pricko.com',
    email: 'community@pricko.com',
    address: (
      <>
        PRICKO Project<br />
        c/o Offshore Incorporations Centre<br />
        PO Box 957, Offshore Incorporations Centre<br />
        Road Town, Tortola VG1110<br />
        British Virgin Islands
      </>
    ),
    note: 'We aim to respond to all inquiries within 48 hours.',
  };

  return (
    <LegalPageTemplate
      title="Disclaimer"
      lastUpdated="October 13, 2025"
      description="Disclaimer for PRICKO. Important information about risks and limitations of using our services."
      keywords="disclaimer, risk warning, PRICKO disclaimer, cryptocurrency risks"
      canonicalUrl="/disclaimer"
      tableOfContents={tableOfContents}
      sections={sections}
      warningBanner={warningBanner}
      finalBanner={finalBanner}
      contactInfo={contactInfo}
    />
  );
};

export default DisclaimerPage;
