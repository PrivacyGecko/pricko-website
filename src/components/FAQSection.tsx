import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';
import { useProjectConfig } from '../hooks/useProjectConfig';
import FAQAccordion from './ui/FAQAccordion';

interface FAQSectionProps {
  /**
   * Show specific categories only (default: all)
   */
  categories?: Array<'general' | 'token' | 'utility' | 'products' | 'technical' | 'community'>;

  /**
   * Enable search functionality
   * @default true
   */
  enableSearch?: boolean;

  /**
   * Custom className
   */
  className?: string;
}

/**
 * FAQSection Component
 *
 * Comprehensive FAQ section with search functionality and category tabs.
 * Displays questions from the centralized configuration system.
 *
 * Example:
 * ```tsx
 * <FAQSection categories={['general', 'token', 'products']} />
 * ```
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  categories,
  enableSearch = true,
  className = ''
}) => {
  const { getAllFAQCategories, searchFAQ } = useProjectConfig();
  const allCategories = getAllFAQCategories();

  // Filter categories if specific ones are requested
  const displayCategories = categories
    ? Object.entries(allCategories).filter(([key]) =>
        categories.includes(key as any)
      )
    : Object.entries(allCategories);

  const [activeCategory, setActiveCategory] = useState<string>(displayCategories[0]?.[0] || 'general');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchFAQ>>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = searchFAQ(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const isSearching = searchQuery.trim().length > 0;
  const currentCategory = allCategories[activeCategory as keyof typeof allCategories];

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <FaQuestionCircle className="text-accent" />
            <span className="text-accent font-medium text-sm">Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="gradient-text">Questions</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Find answers to common questions about PRICKO, our privacy tools, and the Privacy Gecko ecosystem.
          </p>
        </motion.div>

        {/* Search Bar */}
        {enableSearch && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Search Results Counter */}
            {isSearching && (
              <motion.p
                className="text-center text-muted mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Category Tabs */}
        {!isSearching && (
          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {displayCategories.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === key
                    ? 'bg-accent text-black'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>
        )}

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {isSearching ? (
            // Search Results
            <div>
              {searchResults.length > 0 ? (
                <FAQAccordion
                  questions={searchResults.map(({ categoryTitle, ...question }) => question)}
                  allowMultiple={true}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-xl text-muted mb-2">No results found for "{searchQuery}"</p>
                  <p className="text-zinc-400">Try different keywords or browse categories below</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-6 btn-secondary px-6 py-3"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Category Questions
            <FAQAccordion
              questions={currentCategory.questions}
              allowMultiple={false}
            />
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center bg-zinc-800 border border-zinc-700 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-muted mb-6">
            Can't find what you're looking for? Our community and support team are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary px-8 py-3">
              Contact Support
            </a>
            <a
              href="https://discord.gg/privacygecko"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
