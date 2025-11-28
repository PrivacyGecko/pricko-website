import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';
import SEO from './SEO';
import { Container, Card } from '../../design-system';
import {
  staggerContainerVariants,
  staggerItemVariants,
} from '../../design-system/animations/framer-variants';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageTemplateProps {
  title: string;
  lastUpdated: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  tableOfContents?: TableOfContentsItem[];
  sections: LegalSection[];
  showBackButton?: boolean;
  warningBanner?: {
    icon?: string;
    title: string;
    content: React.ReactNode;
    variant?: 'warning' | 'danger' | 'info';
  };
  finalBanner?: {
    icon?: string;
    title: string;
    content: React.ReactNode;
    variant?: 'warning' | 'danger' | 'info';
  };
  contactInfo?: {
    email?: string;
    legalEmail?: string;
    privacyEmail?: string;
    address?: React.ReactNode;
    note?: string;
  };
}

const LegalPageTemplate: React.FC<LegalPageTemplateProps> = ({
  title,
  lastUpdated,
  description,
  keywords,
  canonicalUrl,
  tableOfContents,
  sections,
  showBackButton = true,
  warningBanner,
  finalBanner,
  contactInfo,
}) => {
  const getBannerStyles = (variant: 'warning' | 'danger' | 'info' = 'warning') => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500/10 border-red-500/30 text-red-400';
      case 'info':
        return 'bg-accent/10 border-accent/30 text-accent';
      default:
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400';
    }
  };

  const defaultDescription = title + ' for PRICKO and Privacy Gecko ecosystem.';
  const defaultKeywords = title.toLowerCase() + ', legal, PRICKO, privacy';

  return (
    <>
      <SEO
        title={title + ' | PRICKO'}
        description={description || defaultDescription}
        keywords={keywords || defaultKeywords}
        canonicalUrl={canonicalUrl}
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <Breadcrumb currentPage={title} />
        
        {/* Hero Section - No shader for legal pages (readability) */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

          <Container size="lg" className="relative z-10">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {showBackButton && (
                <motion.div variants={staggerItemVariants}>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
                  >
                    <FaArrowLeft /> Back to Home
                  </Link>
                </motion.div>
              )}

              <motion.div variants={staggerItemVariants} className="text-center max-w-4xl mx-auto">
                <h1 className="text-display-md font-black mb-4">
                  <span className="gradient-text">{title}</span>
                </h1>
                <p className="text-muted text-lg">Last Updated: {lastUpdated}</p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Warning Banner (if provided) */}
        {warningBanner && (
          <section className="py-8">
            <Container size="lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card
                  variant="outlined"
                  className={getBannerStyles(warningBanner.variant) + ' border-2'}
                >
                  <div className="flex items-start gap-4">
                    {warningBanner.icon && (
                      <span className="text-3xl">{warningBanner.icon}</span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{warningBanner.title}</h3>
                      <div className="text-gray-300 leading-relaxed">
                        {warningBanner.content}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Table of Contents (if provided) */}
        {tableOfContents && tableOfContents.length > 0 && (
          <section className="py-8">
            <Container size="lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card variant="glass" className="border-accent/20">
                  <h2 className="text-xl font-bold text-accent mb-4">Table of Contents</h2>
                  <nav>
                    <ul className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={'#' + item.id}
                            className="text-muted hover:text-accent transition-colors flex items-center gap-2"
                          >
                            <span className="text-accent">{index + 1}.</span>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Card>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Main Content Sections */}
        <section className="py-12">
          <Container size="lg">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  variants={staggerItemVariants}
                  className="scroll-mt-24"
                >
                  <Card variant="glass" className="border-white/10 hover:border-accent/20 transition-colors">
                    <h2 className="text-2xl font-bold text-accent mb-6">{section.title}</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {section.content}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Contact Information (if provided) */}
        {contactInfo && (
          <section className="py-12">
            <Container size="lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
                  <h2 className="text-2xl font-bold text-accent mb-6">Contact Us</h2>
                  <div className="space-y-3 text-gray-300">
                    {contactInfo.email && (
                      <p>
                        <strong className="text-white">Email (General):</strong>{' '}
                        <a href={'mailto:' + contactInfo.email} className="text-accent hover:underline">
                          {contactInfo.email}
                        </a>
                      </p>
                    )}
                    {contactInfo.legalEmail && (
                      <p>
                        <strong className="text-white">Email (Legal):</strong>{' '}
                        <a href={'mailto:' + contactInfo.legalEmail} className="text-accent hover:underline">
                          {contactInfo.legalEmail}
                        </a>
                      </p>
                    )}
                    {contactInfo.privacyEmail && (
                      <p>
                        <strong className="text-white">Email (Privacy):</strong>{' '}
                        <a href={'mailto:' + contactInfo.privacyEmail} className="text-accent hover:underline">
                          {contactInfo.privacyEmail}
                        </a>
                      </p>
                    )}
                    {contactInfo.address && (
                      <p>
                        <strong className="text-white">Physical Address:</strong>
                        <br />
                        {contactInfo.address}
                      </p>
                    )}
                    {contactInfo.note && (
                      <p className="text-sm text-muted mt-4">{contactInfo.note}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Final Banner (if provided) */}
        {finalBanner && (
          <section className="py-12">
            <Container size="lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="outlined"
                  className={getBannerStyles(finalBanner.variant) + ' border-2'}
                >
                  <div className="flex items-start gap-4">
                    {finalBanner.icon && (
                      <span className="text-3xl">{finalBanner.icon}</span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{finalBanner.title}</h3>
                      <div className="text-gray-300 leading-relaxed">
                        {finalBanner.content}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Container>
          </section>
        )}
      </div>
    </>
  );
};

export default LegalPageTemplate;
