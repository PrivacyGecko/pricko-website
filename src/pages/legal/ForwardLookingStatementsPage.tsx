import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiAlertCircle, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import Breadcrumb from '../../components/common/Breadcrumb';
import SEO from '../../components/common/SEO';
import { Container, Card, Badge, Button } from '../../design-system';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../../design-system/animations/framer-variants';
import { FORWARD_LOOKING_STATEMENT, ROADMAP_DISCLAIMER, PROTOCOL_TIMELINE_DISCLAIMER } from '../../constants/legal';

const ForwardLookingStatementsPage: React.FC = () => {
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

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <Breadcrumb currentPage="Forward-Looking Statements" />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

          <Container size="xl" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItemVariants}>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
                >
                  <FiArrowLeft /> Back to Home
                </Link>
              </motion.div>

              <motion.div variants={staggerItemVariants} className="text-center max-w-4xl mx-auto">
                <Badge variant="info" size="lg" className="mb-6">
                  <FiCalendar className="mr-1" />
                  Roadmap Disclosure
                </Badge>

                <h1 className="text-display-md font-black mb-6">
                  <span className="gradient-text">Forward-Looking Statements</span>
                </h1>

                <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                  Understanding how to interpret roadmap projections, timeline estimates, and future plans disclosed on Pricko.com.
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Definition Section */}
        <section className="py-12">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="border-white/10">
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
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* Examples Section */}
        <section className="py-12">
          <Container size="lg">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-h1 font-bold text-white">
                Examples of <span className="gradient-text">Forward-Looking Statements</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {forwardLookingExamples.map((example, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <Card variant="glass" className="border-white/10 h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <FiAlertCircle className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <Badge variant="coming-soon" size="sm" className="mb-2">
                          {example.type}
                        </Badge>
                        <p className="text-white text-lg italic">{example.statement}</p>
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
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Risk Factors Section */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />
          <Container size="lg" className="relative z-10">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-h1 font-bold text-white">
                Risk Factors Affecting <span className="gradient-text">Projections</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {riskFactors.map((factor, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <Card variant="glass" hoverable className="h-full border-white/10">
                    <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{factor.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Specific Disclaimers Section */}
        <section className="py-12">
          <Container size="lg">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
              <h2 className="text-h2 font-bold text-white">
                Specific <span className="gradient-text">Disclaimers</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiCalendar className="text-accent" />
                    Roadmap Timelines
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed bg-secondary/50 border border-accent/20 rounded p-4">
                    {ROADMAP_DISCLAIMER}
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiCheckCircle className="text-cyan-400" />
                    GeckoCore Protocol
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed bg-secondary/50 border border-cyan-400/20 rounded p-4">
                    {PROTOCOL_TIMELINE_DISCLAIMER}
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">No Obligation to Update</h3>
                  <p className="text-muted leading-relaxed">
                    We have <strong className="text-white">no obligation</strong> to update forward-looking statements
                    if circumstances change. Projected timelines, features, or plans may be modified, delayed, or
                    cancelled without notice. Current roadmap reflects plans as of November 2025 and is subject to
                    change at any time.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card variant="glass" className="border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">No Guarantees</h3>
                  <p className="text-muted leading-relaxed">
                    Forward-looking statements are <strong className="text-white">not guarantees</strong> of future
                    performance. Actual results may differ materially from projections due to risks, uncertainties,
                    and factors outside our control. Do not rely on forward-looking statements as promises or commitments.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* How to Interpret Section */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-secondary/30 to-zinc-950" />
          <Container size="lg" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
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
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* Footer Section */}
        <section className="py-12">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card variant="glass" className="border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Roadmap?</h3>
                <p className="text-muted mb-6">
                  If you have questions about forward-looking statements or roadmap timelines, please review
                  our official documentation or contact our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/roadmap">
                    <Button variant="primary">View Roadmap</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="secondary">Contact Support</Button>
                  </Link>
                </div>
              </Card>

              <p className="text-sm text-muted mt-8">Last Updated: November 2025</p>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default ForwardLookingStatementsPage;
