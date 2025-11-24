import React from 'react';
import { Link } from 'react-router-dom';
import ContractAddress from '../components/ui/ContractAddress';
import ProofMetric from '../components/ui/ProofMetric';
import FAQSection from '../components/FAQSection';
import SEO from '../components/common/SEO';
import { useProjectConfig } from '../hooks/useProjectConfig';
import MascotImage from '../components/ui/MascotImage';
import SecurityBadge from '../components/ui/SecurityBadge';
import { METRICS } from '../constants/metrics';
import {
  FaCalendarAlt,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaUserShield,
  FaGlobe,
  FaSeedling,
  FaHeart,
  FaRocket,
  FaBook,
  FaTwitter,
  FaGithub,
  FaCheckCircle,
  FaCode,
  FaUserFriends,
  FaDollarSign,
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const { config, getProductCounts } = useProjectConfig();
  const productCounts = getProductCounts();

  return (
    <>
      <SEO
        title="About PRICKO - Privacy-First Memecoin Mission | PRICKO"
        description="Learn about PRICKO's mission to build privacy products that protect user data. Founded in 2025, community-driven, and committed to making digital privacy accessible to everyone."
        keywords="PRICKO about, privacy products, memecoin mission, blockchain privacy, digital privacy, community-driven crypto, Solana privacy"
        canonicalUrl="/about"
      />
      <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <div
          className="text-center mb-20"
        >
          <MascotImage size="lg" className="mb-6 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            About <span className="gradient-text-animated">PRICKO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Building <span className="text-blue-400 font-medium">AI-enhanced</span> privacy products that don't suck. Community-owned, meme-powered, actually useful.
            Privacy protection without the corporate BS.
          </p>
        </div>

        {/* Company Overview */}
        <section
          className="mb-20 glass-morphism rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div
            >
              <div className="text-accent mb-3">
                <FaCalendarAlt className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{config.project.foundedYear}</div>
              <div className="text-lg font-semibold mb-2">Founded</div>
              <div className="text-muted">Established with a vision for privacy</div>
            </div>
            <div
            >
              <div className="text-accent mb-3">
                <FaUsers className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{config.community.total.toLocaleString()}+</div>
              <div className="text-lg font-semibold mb-2">Early Supporters</div>
              <div className="text-muted">Growing community</div>
            </div>
            <div
            >
              <div className="text-accent mb-3">
                <FaTools className="mx-auto text-3xl" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{productCounts.total}+</div>
              <div className="text-lg font-semibold mb-2">Privacy Products</div>
              <div className="text-muted">In development pipeline</div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-4xl font-bold mb-8 text-professional"
              >
                Our <span className="gradient-text">Origin Story</span>
              </h2>
              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <p
                >
                  Your data is being sold. Every search, every message, every click. We got tired of watching
                  people hand over their privacy to corporations who profit from it. So we built something better:
                  privacy products that work, backed by a community that owns them.
                </p>
                <p
                >
                  We started PRICKO because we were sick of the hypocrisy. Companies claiming to care about your
                  privacy while mining your data for billions. VPNs that log everything. "Secure" apps with
                  backdoors. Enough is enough.
                </p>
                <p
                >
                  Built on Solana for speed, powered by $PRICKO for access, governed by the community.
                  This isn't just another crypto project—it's your digital privacy toolkit with actual utility.
                  No VC overlords, no corporate puppeteers. Just real tools for real people who give a damn about privacy.
                </p>
              </div>
            </div>
            <div
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <img
                  src="/logo.png"
                  alt="Pricko Gecko Mascot"
                  className="relative w-80 h-80 object-contain glow-pulse"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          className="mb-20 glass-morphism rounded-3xl p-12"
        >
          <h2
            className="text-4xl font-bold mb-12 text-center text-professional"
          >
            Our <span className="gradient-text">Mission</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaShieldAlt className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Privacy First</h3>
              <p className="text-muted leading-relaxed">
                Building cutting-edge privacy products that protect user data without compromising
                on performance, usability, or user experience.
              </p>
            </div>
            <div
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaNetworkWired className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Decentralized</h3>
              <p className="text-muted leading-relaxed">
                Creating a truly decentralized ecosystem where users maintain complete control
                over their data, identity, and digital sovereignty.
              </p>
            </div>
            <div
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaHandsHelping className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">Community Driven</h3>
              <p className="text-muted leading-relaxed">
                Empowering our community to shape the future of privacy through governance,
                development contributions, and collaborative innovation.
              </p>
            </div>
          </div>

          {/* GeckoCore Protocol Mention */}
          <div
            className="card-outlined border-cyan-500/30 mt-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <FaNetworkWired className="text-cyan-400 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">Beyond the Meme: GeckoCore Protocol</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Privacy Gecko is building for the long term. <strong>GeckoCore</strong>, our decentralized privacy protocol with development beginning Q1 2026, transforms our suite of tools into community-owned infrastructure. Token holders will stake $PRICKO to run nodes, earn rewards, and govern the ecosystem through GeckoDAO.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/ecosystem" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore the Ecosystem
                    <FaArrowRight size={14} />
                  </Link>
                  <a
                    href="https://www.privacygecko.com/whitepaper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Technical Whitepaper
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Commitment Section - NEW */}
        <section
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4 text-professional"
            >
              <span className="gradient-text">Proof of Commitment</span>
            </h2>
            <p
              className="text-muted text-lg max-w-3xl mx-auto leading-relaxed"
            >
              We don't just talk. We build. Here's the evidence of our commitment to the Privacy Gecko ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <ProofMetric
              icon={FaCheckCircle}
              value={`${productCounts.live}`}
              label="Live Products"
              description="Fully operational privacy products serving real users right now"
              delay={0.1}
            />
            <ProofMetric
              icon={FaUserFriends}
              value={`${METRICS.prickoshare.users.toLocaleString()}+`}
              label="Active Users"
              description="Real users protecting their privacy with our live tools"
              delay={0.2}
            />
            <ProofMetric
              icon={FaCode}
              value="8+"
              label="Developers"
              description="Full-time team members building privacy products every day"
              delay={0.3}
            />
            <ProofMetric
              icon={FaGithub}
              value="100%"
              label="Open Source"
              description="All repositories public on GitHub for complete transparency"
              delay={0.4}
            />
          </div>

          <div
            className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <FaDollarSign className="text-2xl" />
                  Real Investment
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Founded in {config.project.foundedYear} with dedicated funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Multi-year development roadmap fully funded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Professional team working full-time on ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Security audits completed on live products</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-2xl" />
                  Proven Delivery
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Share: {METRICS.prickoshare.formatted} active users, fully operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Advisor: Live security audit tool with 4.8★ rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Shell: 85% complete, 1,800+ on waitlist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gecko Guard: 90% complete, in extension store review</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-accent/20">
              <p className="text-center text-sm text-gray-300 leading-relaxed mb-3">
                <strong className="text-accent">Our Commitment:</strong> We're not a pump-and-dump project.
                We're building a real ecosystem with measurable progress, transparent development, and genuine utility.
                Every metric above is verifiable through our live products and public GitHub repositories.
              </p>
              <p className="text-center text-xs text-muted/60">
                Last Updated: November 15, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Security Section - NEW */}
        <section
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4 text-professional bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent"
            >
              Trust & Security
            </h2>
            <p
              className="text-muted text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Built on proven security practices and transparent development standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SecurityBadge
              variant="audit"
              title="Security Audited"
              description="All live products undergo professional security audits to ensure user protection."
              delay={0.1}
            />
            <SecurityBadge
              variant="encryption"
              title="End-to-End Encryption"
              description="Military-grade encryption protocols protect all user data in transit and at rest."
              delay={0.2}
            />
            <SecurityBadge
              variant="open-source"
              title="Open Source"
              description="100% transparent codebase on GitHub for community review and contributions."
              delay={0.3}
            />
            <SecurityBadge
              variant="verified"
              title="Verified Identity"
              description="Team members verified and transparent. No anonymous founders or hidden operations."
              delay={0.4}
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section
          className="mb-20"
        >
          <h2
            className="text-4xl font-bold mb-12 text-center text-professional"
          >
            Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaEye className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Transparency & Trust</h3>
                    <p className="text-muted leading-relaxed">
                      Open-source development, clear communication, and honest roadmaps that build
                      lasting trust with our community and stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaLightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Innovation & Excellence</h3>
                    <p className="text-muted leading-relaxed">
                      Continuously pushing the boundaries of privacy technology while maintaining
                      the highest standards of security and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaUserShield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">User Empowerment</h3>
                    <p className="text-muted leading-relaxed">
                      Putting users in control of their digital lives through intuitive tools
                      and educational resources that promote digital literacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaGlobe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Global Accessibility</h3>
                    <p className="text-muted leading-relaxed">
                      Making privacy products accessible to everyone, regardless of technical expertise,
                      geographic location, or economic status.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaSeedling className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Sustainable Growth</h3>
                    <p className="text-muted leading-relaxed">
                      Building for the long term with sustainable tokenomics, responsible development,
                      and environmental consciousness in all our operations.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card-interactive group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FaHeart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Community First</h3>
                    <p className="text-muted leading-relaxed">
                      Every decision prioritizes community benefit over short-term gains, fostering
                      a collaborative ecosystem built on mutual respect and shared values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          className="mb-20"
        >
          <h2
            className="text-4xl font-bold mb-12 text-center text-professional"
          >
            Meet the <span className="gradient-text">Core Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="card-interactive text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaUserShield className="text-accent text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">GeckoMaster</h3>
              <p className="text-sm text-accent/80 mb-4">Co-Founder</p>
              <p className="text-muted leading-relaxed mb-4">
                Privacy advocate with 8+ years in blockchain. Previously built privacy products used by 100K+ users. 
                Passionate about making digital privacy accessible to everyone.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://github.com/geckomaster" className="text-accent hover:text-accent-hover transition-colors" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
            
            <div
              className="card-interactive text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">@0xAnonA</h3>
              <p className="text-sm text-accent/80 mb-4">Co-Founder</p>
              <p className="text-muted leading-relaxed mb-4">
                Full-stack engineer specializing in Solana and privacy-preserving technologies. 
                Former security researcher with expertise in cryptographic protocols.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://github.com/cryptosafe" className="text-accent hover:text-accent-hover transition-colors" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
            
            <div
              className="card-interactive text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">DesignGecko</h3>
              <p className="text-sm text-accent/80 mb-4">Creative Director</p>
              <p className="text-muted leading-relaxed mb-4">
                UX/UI designer with a passion for making complex privacy products intuitive and enjoyable. 
                Background in human-computer interaction and behavioral psychology.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/PrivacyGecko" className="text-accent hover:text-accent-hover transition-colors" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://dribbble.com/designgecko" className="text-accent hover:text-accent-hover transition-colors" aria-label="Portfolio">
                  <FaGlobe />
                </a>
              </div>
            </div>
          </div>
          
          <div
            className="text-center mt-12 glass-morphism rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Join Our Team</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              We're always looking for passionate privacy advocates, talented developers, and creative minds 
              to join the privacy revolution. Check out our open positions or reach out with your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button
                  className="btn-primary px-6 py-3 inline-flex items-center gap-2"
                >
                  <FaUsers />
                  Join Team
                </button>
              </Link>
              <a href="https://github.com/pricko-project" target="_blank" rel="noopener noreferrer">
                <button
                  className="btn-secondary px-6 py-3 inline-flex items-center gap-2"
                >
                  <FaGithub />
                  Contribute on GitHub
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Contract Address Section */}
        <section
          className="mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <ContractAddress />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection className="bg-transparent" />

        {/* Call to Action */}
        <section
          className="text-center glass-morphism rounded-3xl p-12"
        >
          <h2
            className="text-4xl font-bold mb-6 text-professional"
          >
            Join the <span className="gradient-text">Privacy Revolution</span>
          </h2>
          <p
            className="text-muted mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Be part of a movement that's reshaping the digital landscape. Together, we're building
            a future where privacy is a fundamental right, not a premium feature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional inline-flex items-center gap-3"
              >
                <FaRocket />
                Join Waitlist
              </button>
            </Link>
            <Link to="/ecosystem">
              <button
                className="btn-secondary px-10 py-4 text-lg font-semibold shadow-professional inline-flex items-center gap-3"
              >
                <FaBook />
                Explore Our Ecosystem
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutPage;