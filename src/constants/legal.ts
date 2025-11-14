/**
 * Legal Disclaimers and Compliance Text
 *
 * Centralized legal text for consistency across the site.
 * All disclaimers reviewed for securities law compliance.
 *
 * IMPORTANT: Any changes to this file should be reviewed by legal counsel.
 */

// ============================================================================
// CRITICAL RISK WARNINGS
// ============================================================================

export const INVESTMENT_RISK_DISCLAIMER = `⚠️ HIGH-RISK WARNING

Purchasing $PRICKO tokens involves substantial financial risk, including the complete loss of all funds invested. Tokens may lose value or become entirely worthless. Cryptocurrency markets are highly volatile and unpredictable.

This is NOT financial, investment, tax, or legal advice. You should consult with a licensed financial advisor before making any purchase decision.

Never invest more than you can afford to lose completely.`;

export const SEC_REGISTRATION_DISCLAIMER = `$PRICKO tokens have not been registered with the U.S. Securities and Exchange Commission (SEC) or any other regulatory authority. The regulatory status of this token is uncertain and subject to change. Purchase at your own risk.`;

// ============================================================================
// FORWARD-LOOKING STATEMENTS
// ============================================================================

export const FORWARD_LOOKING_STATEMENT = `This information contains forward-looking statements regarding our development plans and future features. All timelines are target dates subject to change without notice. Roadmap features are under development and not guaranteed. Actual results may differ materially from projected outcomes.`;

export const ROADMAP_DISCLAIMER = `This roadmap represents our current development plans and future vision. All timelines are target dates subject to change based on development progress, market conditions, and resource availability. Roadmap features are under development and delivery is not guaranteed. Token purchase involves risk. Past performance does not indicate future results.`;

export const PROTOCOL_TIMELINE_DISCLAIMER = `GeckoCore Protocol development is planned to begin in Q1 2026. This is a target date and may change. Protocol features described are conceptual and subject to modification or cancellation. No guarantee of delivery, functionality, or timeline accuracy.`;

// ============================================================================
// UTILITY AND VALUE DISCLAIMERS
// ============================================================================

export const UTILITY_DISCLAIMER = `Planned utility features represent forward-looking development goals. Current utility is limited to products marked as "live." Future utility implementation is not guaranteed and timelines may change. Token value may fluctuate independently of utility delivery.`;

export const NO_GUARANTEE_DISCLAIMER = `No guarantee is made regarding token value, utility implementation, product delivery, or investment returns. Cryptocurrency investments carry substantial risk of total loss.`;

export const CONSUMPTIVE_UTILITY_STATEMENT = `$PRICKO tokens are designed to provide consumptive utility within the Privacy Gecko ecosystem by enabling access to privacy-focused products and services. Tokens are not intended as an investment and carry no promise of profit or returns.`;

// ============================================================================
// COMPARATIVE DISCLAIMERS
// ============================================================================

export const COMPARISON_DISCLAIMER = `Comparisons to other tokens or projects are provided for educational context only and do not constitute claims of similarity, equivalence, or future performance. Each token has unique characteristics, risks, and regulatory status. Past performance of other tokens does not predict $PRICKO results.`;

export const INFRASTRUCTURE_CONTEXT_DISCLAIMER = `References to "infrastructure" tokens like Pyth or Jito are educational examples only. $PRICKO makes no claims of functional similarity, market performance similarity, or comparable regulatory treatment. Each project operates under different technical, legal, and market conditions.`;

// ============================================================================
// GEOGRAPHIC RESTRICTIONS
// ============================================================================

export const GEOGRAPHIC_RESTRICTION_NOTICE = `$PRICKO tokens may not be available for purchase in certain jurisdictions due to regulatory restrictions. Users are responsible for ensuring compliance with local laws. We reserve the right to restrict access based on geographic location.`;

export const US_PERSONS_DISCLAIMER = `This information may not be suitable for U.S. persons. U.S. residents should consult with legal counsel regarding the regulatory status of cryptocurrency purchases in their jurisdiction.`;

// ============================================================================
// GENERAL LIABILITY DISCLAIMERS
// ============================================================================

export const NOT_FINANCIAL_ADVICE = `This information is for educational purposes only and does not constitute financial, investment, tax, or legal advice. You should consult with qualified professionals before making any financial decisions.`;

export const NO_PROFESSIONAL_RELATIONSHIP = `Nothing on this website creates an advisory, fiduciary, or professional relationship. We are not financial advisors, investment advisors, or broker-dealers.`;

export const DYOR_DISCLAIMER = `Do Your Own Research (DYOR). All information should be independently verified. We make no representations regarding accuracy, completeness, or timeliness of information provided.`;

// ============================================================================
// PRODUCT DELIVERY DISCLAIMERS
// ============================================================================

export const PRODUCT_DELIVERY_DISCLAIMER = `Products marked as "in development," "coming soon," or "planned" represent development goals subject to change or cancellation. Delivery timelines are estimates and may be delayed or modified. No guarantee of product delivery, features, or functionality.`;

export const BETA_PRODUCT_DISCLAIMER = `Beta products are in testing phase and may contain bugs, errors, or incomplete features. Beta access does not guarantee continued availability or final product delivery. Features may change significantly before official launch.`;

export const LIVE_PRODUCT_DISCLAIMER = `Live products are operational but may undergo updates, maintenance, or changes. Continued operation is not guaranteed. Service interruptions may occur.`;

// ============================================================================
// TOKEN MECHANISM DISCLAIMERS
// ============================================================================

export const REVENUE_SHARING_DISCLAIMER = `Any references to revenue sharing, staking rewards, or value accrual mechanisms represent conceptual development plans subject to legal review, regulatory approval, and technical feasibility. Implementation is not guaranteed and may be modified or cancelled based on legal guidance.`;

export const STAKING_DISCLAIMER = `Staking mechanisms described are conceptual and under legal review. No guarantee of implementation, returns, or compliance with applicable regulations. Staking may involve additional risks including lock-up periods and smart contract vulnerabilities.`;

export const TOKEN_UTILITY_LIMITATIONS = `Token utility is limited to products and services within the Privacy Gecko ecosystem. Utility may be modified, restricted, or eliminated based on technical, legal, or business considerations. No guarantee of continued utility or value.`;

// ============================================================================
// TECHNOLOGY DISCLAIMERS
// ============================================================================

export const SMART_CONTRACT_RISK = `Smart contracts involve technical risks including bugs, vulnerabilities, and exploits. While we conduct security audits, no smart contract is entirely risk-free. Users may lose funds due to technical failures.`;

export const BLOCKCHAIN_RISK = `Blockchain technology involves risks including network congestion, hard forks, protocol changes, and validator issues. We have no control over the Solana blockchain and cannot guarantee transaction finality or network operation.`;

export const SECURITY_AUDIT_DISCLAIMER = `Security audits reduce but do not eliminate risk. Audited code may still contain vulnerabilities. Audit completion does not guarantee safety or security.`;

// ============================================================================
// MARKETING AND CONTENT DISCLAIMERS
// ============================================================================

export const MARKETING_DISCLAIMER = `Marketing materials may contain aspirational statements, projections, and forward-looking content. These do not constitute promises, guarantees, or binding commitments.`;

export const SOCIAL_MEDIA_DISCLAIMER = `Social media content, community discussions, and third-party statements do not represent official positions or guarantees. Always verify information through official channels.`;

export const WHITEPAPER_DISCLAIMER = `Whitepaper content represents plans and concepts subject to change. Technical specifications, timelines, and features described may be modified or cancelled. No binding commitment is created by whitepaper statements.`;

// ============================================================================
// LEGAL COMPLIANCE STATEMENTS
// ============================================================================

export const TERMS_ACCEPTANCE_REQUIRED = `By purchasing $PRICKO tokens, you agree to our Terms of Service, acknowledge all risks disclosed, and accept full responsibility for your decision. If you do not agree, do not purchase tokens.`;

export const REGULATORY_UNCERTAINTY = `The regulatory landscape for cryptocurrency tokens is evolving and uncertain. Future regulatory changes may materially impact $PRICKO token legality, utility, or value. We cannot predict or control regulatory developments.`;

export const LEGAL_DISPUTE_RESOLUTION = `Any disputes shall be resolved according to our Terms of Service. Users may be required to pursue disputes through binding arbitration rather than court proceedings.`;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get appropriate disclaimer for a given page or section
 */
export const getPageDisclaimer = (page: string): string => {
  switch (page) {
    case 'home':
      return INVESTMENT_RISK_DISCLAIMER;
    case 'tokenomics':
      return `${FORWARD_LOOKING_STATEMENT}\n\n${UTILITY_DISCLAIMER}`;
    case 'roadmap':
      return ROADMAP_DISCLAIMER;
    case 'ecosystem':
      return `${PROTOCOL_TIMELINE_DISCLAIMER}\n\n${PRODUCT_DELIVERY_DISCLAIMER}`;
    case 'how-to-buy':
      return `${INVESTMENT_RISK_DISCLAIMER}\n\n${SEC_REGISTRATION_DISCLAIMER}`;
    default:
      return NOT_FINANCIAL_ADVICE;
  }
};

/**
 * Check if a text contains prohibited language patterns
 */
export const containsProhibitedLanguage = (text: string): boolean => {
  const prohibitedPatterns = [
    /\b(invest|investment|investor|investing)\b/i,
    /\b(guarantee|guaranteed|ensure|assure)\b/i,
    /\b(\d+x\s*return|returns?|profit|gains?)\b/i,
    /\b(dividend|revenue sharing|passive income)\b/i,
    /\b(moon|rocket|lambo|financial freedom)\b/i,
  ];

  return prohibitedPatterns.some(pattern => pattern.test(text));
};

/**
 * Get footer legal text
 */
export const FOOTER_LEGAL_TEXT = `© ${new Date().getFullYear()} Privacy Gecko. All rights reserved. | ${SEC_REGISTRATION_DISCLAIMER}`;

/**
 * Get risk warning box content for hero sections
 */
export const HERO_RISK_WARNING = {
  title: 'High-Risk Warning',
  content: 'Purchasing $PRICKO tokens involves substantial risk of loss. This token has not been registered with the SEC. No guarantee of future utility, value, or product delivery.',
  icon: 'alert-triangle',
  severity: 'high' as const,
};

/**
 * Get forward-looking statement badge
 */
export const FORWARD_LOOKING_BADGE = {
  text: 'Forward-Looking',
  tooltip: 'This section contains forward-looking statements subject to change. See full disclaimer.',
};
