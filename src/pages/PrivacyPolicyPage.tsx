import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
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
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-muted mb-8">Last Updated: October 13, 2025</p>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                PRICKO ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website pricko.com and use our privacy tools.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.1 Information You Provide</h3>
                  <p className="leading-relaxed">
                    We may collect information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Contact us via email or forms</li>
                    <li>Sign up for our newsletter</li>
                    <li>Participate in community discussions</li>
                    <li>Connect your wallet for premium features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.3 Blockchain Information</h3>
                  <p className="leading-relaxed">
                    When you interact with our smart contracts or use token-gated features,
                    your wallet address and transaction history may be visible on the Solana blockchain.
                    We do not control or have access to your private keys.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>To provide and maintain our privacy tools and services</li>
                <li>To verify token holdings for premium feature access</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To detect and prevent fraud or security issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* Section 4: Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">4. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill
                the purposes outlined in this Privacy Policy, unless a longer retention period
                is required by law. Below are our specific retention periods:
              </p>
              <div className="bg-secondary/30 border border-accent/20 rounded-lg p-6 space-y-3 text-gray-300">
                <div>
                  <strong className="text-white">Wallet Addresses:</strong> Retained while your account is active,
                  plus 30 days after account deletion or last activity, then permanently purged.
                </div>
                <div>
                  <strong className="text-white">Contact Form Data:</strong> Stored for 2 years from submission
                  date to maintain communication history, then automatically deleted.
                </div>
                <div>
                  <strong className="text-white">Newsletter Subscriptions:</strong> Retained until you unsubscribe
                  or request deletion. You may unsubscribe at any time via the link in any email.
                </div>
                <div>
                  <strong className="text-white">Analytics Data:</strong> If analytics are ever implemented,
                  data will be retained for 26 months (standard industry practice), then automatically deleted.
                </div>
                <div>
                  <strong className="text-white">Transaction Logs:</strong> Blockchain transaction records
                  involving $PRICKO tokens are retained for 7 years to comply with standard financial
                  record-keeping regulations. These records are anonymized where possible.
                </div>
                <div>
                  <strong className="text-white">PrickoShare Files:</strong> Free tier files are automatically
                  deleted after 24 hours. Pro tier files are retained until you delete them manually, or
                  upon account closure plus 30-day grace period.
                </div>
                <div>
                  <strong className="text-white">Server Logs:</strong> Access logs and error logs are retained
                  for 90 days for security and debugging purposes, then automatically deleted.
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                You may request early deletion of your data at any time by contacting privacy@pricko.com.
                We will comply with deletion requests within 30 days, except where retention is required by law.
              </p>
            </section>

            {/* Section 5: Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
                <li>
                  <strong>Hosting Services:</strong> We use hosting infrastructure providers for website delivery.
                  Currently, our site is hosted using standard web hosting services. Data processed includes:
                  server logs, IP addresses, and connection metadata.
                </li>
                <li>
                  <strong>Analytics Services:</strong> We do not currently use third-party analytics services
                  (no Google Analytics, no tracking pixels). If this changes, we will update this policy and
                  notify users with explicit opt-in consent requests.
                </li>
                <li>
                  <strong>Email Services:</strong> For newsletter subscriptions and community communications,
                  we may use email service providers. Your email address will be shared only with services
                  you explicitly subscribe to.
                </li>
                <li>
                  <strong>Blockchain Infrastructure:</strong> When you interact with $PRICKO tokens or use
                  wallet-connected features, your interactions are processed via Solana blockchain RPC providers
                  (e.g., public Solana RPC nodes). These are decentralized and pseudonymous by design.
                </li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Your Consent:</strong> When you explicitly consent to sharing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Note:</strong> As a privacy-focused project, we intentionally minimize third-party
                dependencies. We will never share data with advertising networks, data brokers, or surveillance companies.
              </p>
            </section>

            {/* Section 6: Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@pricko.com
              </p>
            </section>

            {/* Section 6.1: CCPA Rights (California Residents) */}
            <section id="ccpa">
              <h2 className="text-2xl font-bold text-accent mb-4">6.1 California Privacy Rights (CCPA)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides
                you with specific rights regarding your personal information. This section describes
                your CCPA rights and how to exercise them.
              </p>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Categories of Personal Information We Collect</h3>
                  <p className="leading-relaxed mb-2">
                    In the past 12 months, we have collected the following categories of personal information:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Identifiers (email address, wallet address, IP address)</li>
                    <li>Internet or network activity (browsing behavior, device information)</li>
                    <li>Commercial information (transaction history for premium features)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Do Not Sell My Personal Information</h3>
                  <div className="bg-secondary/50 border border-accent/20 rounded-lg p-6">
                    <p className="leading-relaxed mb-4">
                      <strong className="text-accent">We do not sell your personal information.</strong> As a
                      privacy-focused project, we have never sold personal information to third parties and will
                      never do so in the future. This is a core principle of PRICKO.
                    </p>
                    <p className="leading-relaxed text-sm">
                      Under CCPA, "sale" means disclosing personal information to third parties for monetary or
                      other valuable consideration. We do not engage in this practice.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Your CCPA Rights</h3>
                  <p className="leading-relaxed mb-2">
                    California residents have the right to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Right to Know:</strong> Request disclosure of the categories and specific pieces
                      of personal information we have collected about you in the last 12 months
                    </li>
                    <li>
                      <strong>Right to Delete:</strong> Request deletion of your personal information, subject
                      to certain exceptions
                    </li>
                    <li>
                      <strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information
                      (though we do not sell personal information)
                    </li>
                    <li>
                      <strong>Right to Non-Discrimination:</strong> Exercise your CCPA rights without receiving
                      discriminatory treatment
                    </li>
                    <li>
                      <strong>Right to Correct:</strong> Request correction of inaccurate personal information
                    </li>
                    <li>
                      <strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">How to Exercise Your CCPA Rights</h3>
                  <div className="bg-border/30 rounded-lg p-6 border border-border">
                    <p className="leading-relaxed mb-3">
                      To submit a CCPA request, please contact us using one of the following methods:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-accent">•</span>
                        <span><strong>Email:</strong> privacy@pricko.com (Subject: "CCPA Request")</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent">•</span>
                        <span><strong>Mail:</strong> PRICKO Project, c/o Offshore Incorporations Centre,
                          PO Box 957, Road Town, Tortola VG1110, British Virgin Islands</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted mt-4 leading-relaxed">
                      We will verify your identity before processing your request. We may ask for additional
                      information to confirm your identity, such as your email address or wallet address
                      associated with your account. We will respond to verified requests within 45 days,
                      or notify you if we need additional time (up to 90 days total).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Authorized Agents</h3>
                  <p className="leading-relaxed">
                    You may designate an authorized agent to make a CCPA request on your behalf. We will
                    require written proof that the agent has your permission to act on your behalf, and we
                    may also ask you to verify your identity directly with us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Shine the Light Law</h3>
                  <p className="leading-relaxed">
                    California Civil Code Section 1798.83 permits California residents to request information
                    about disclosure of personal information to third parties for direct marketing purposes.
                    As stated above, we do not share personal information with third parties for their direct
                    marketing purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Security */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">7. Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement reasonable security measures to protect your information.
                However, no method of transmission over the internet or electronic storage
                is 100% secure. While we strive to protect your data, we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Section 8: Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">8. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible
                for the privacy practices of these external sites. We encourage you to review
                their privacy policies.
              </p>
            </section>

            {/* Section 9: Cookies & Tracking Technologies */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-accent mb-4">9. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">9.1 What Are Cookies?</h3>
                  <p className="leading-relaxed">
                    Cookies are small text files placed on your device that help us remember your preferences
                    and understand how you use our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">9.2 Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Track your activity for targeted advertising (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">9.3 Managing Cookies</h3>
                  <p className="leading-relaxed mb-2">
                    You can control cookies through your browser settings. Note that blocking certain
                    cookies may impact your experience on our website.
                  </p>
                  <p className="text-sm text-muted">
                    Learn how to manage cookies in <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">your browser</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under 18 years of age.
                We do not knowingly collect personal information from children. If you
                believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Section 11: International Users */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">11. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than
                your own. These countries may have different data protection laws. By using
                our services, you consent to such transfers.
              </p>
            </section>

            {/* Section 12: Changes */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by posting the new policy on this page and updating the
                "Last Updated" date. Your continued use of our services after changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            {/* Section 13: Contact */}
            <section>
              <h2 className="text-2xl font-bold text-accent mb-4">13. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-secondary/50 border border-accent/20 rounded-lg p-6">
                <p className="text-white"><strong>Email (Privacy):</strong> privacy@pricko.com</p>
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
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
