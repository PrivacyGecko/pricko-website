/**
 * Custom React hook for accessing centralized project configuration
 *
 * This hook provides type-safe access to all project data from project-data.json
 * Use this hook throughout the application instead of hardcoding values
 *
 * @example
 * ```typescript
 * const { config, getProduct, getLiveProducts } = useProjectConfig();
 *
 * // Access token info
 * const tokenSymbol = config.token.symbol;
 *
 * // Get specific product
 * const geckoShare = getProduct('geckoShare');
 *
 * // Get filtered products
 * const liveProducts = getLiveProducts();
 * ```
 */

import { useMemo } from 'react';
import projectDataRaw from '../config/project-data.json';
import type {
  ProjectConfig,
  Product,
  ProductStatus,
  RoadmapPhase,
  PhaseStatus
} from '../types/config';

// Type assertion for the imported JSON
const projectData = projectDataRaw as ProjectConfig;

export function useProjectConfig() {
  /**
   * Get the full configuration object
   */
  const config: ProjectConfig = useMemo(() => projectData, []);

  /**
   * Get a specific product by ID
   */
  const getProduct = useMemo(
    () => (productId: string): Product | undefined => {
      return config.ecosystem.products[productId];
    },
    [config]
  );

  /**
   * Get all products as an array
   */
  const getAllProducts = useMemo(
    () => (): Product[] => {
      return Object.values(config.ecosystem.products);
    },
    [config]
  );

  /**
   * Get products filtered by status
   */
  const getProductsByStatus = useMemo(
    () => (status: ProductStatus): Product[] => {
      return getAllProducts().filter(product => product.status === status);
    },
    [config]
  );

  /**
   * Get live products
   */
  const getLiveProducts = useMemo(
    () => (): Product[] => {
      return getProductsByStatus('live');
    },
    [config]
  );

  /**
   * Get beta products
   */
  const getBetaProducts = useMemo(
    () => (): Product[] => {
      return getProductsByStatus('beta');
    },
    [config]
  );

  /**
   * Get in-development products, sorted by completion percentage
   */
  const getInDevelopmentProducts = useMemo(
    () => (): Product[] => {
      return getProductsByStatus('in-development').sort(
        (a, b) => (b.progress || 0) - (a.progress || 0)
      );
    },
    [config]
  );

  /**
   * Get products for homepage display (live + beta + top in-development)
   */
  const getHomepageProducts = useMemo(
    () => (maxInDevelopment: number = 2): Product[] => {
      const live = getLiveProducts();
      const beta = getBetaProducts();
      const inDev = getInDevelopmentProducts().slice(0, maxInDevelopment);
      return [...live, ...beta, ...inDev];
    },
    [config]
  );

  /**
   * Get roadmap phases filtered by status
   */
  const getRoadmapByStatus = useMemo(
    () => (status: PhaseStatus): RoadmapPhase[] => {
      return config.roadmap.phases.filter(phase => phase.status === status);
    },
    [config]
  );

  /**
   * Get completed roadmap phases
   */
  const getCompletedPhases = useMemo(
    () => (): RoadmapPhase[] => {
      return getRoadmapByStatus('completed');
    },
    [config]
  );

  /**
   * Get current (in-progress) roadmap phases
   */
  const getCurrentPhases = useMemo(
    () => (): RoadmapPhase[] => {
      return getRoadmapByStatus('in-progress');
    },
    [config]
  );

  /**
   * Get upcoming roadmap phases
   */
  const getUpcomingPhases = useMemo(
    () => (): RoadmapPhase[] => {
      return getRoadmapByStatus('upcoming');
    },
    [config]
  );

  /**
   * Get token disclaimer for a specific page context
   */
  const getTokenDisclaimer = useMemo(
    () => (context: 'homepage' | 'tokenomics' | 'roadmap'): string => {
      return config.token.disclaimers[context];
    },
    [config]
  );

  /**
   * Check if a product has a specific feature
   */
  const productHasFeature = useMemo(
    () => (productId: string, featureName: string): boolean => {
      const product = getProduct(productId);
      if (!product) return false;
      return product.features.some(f =>
        f.toLowerCase().includes(featureName.toLowerCase())
      );
    },
    [config]
  );

  /**
   * Get total count of products by status
   */
  const getProductCounts = useMemo(
    () => () => ({
      total: config.ecosystem.totalProducts,
      live: config.ecosystem.liveProducts,
      beta: config.ecosystem.betaProducts,
      inDevelopment: config.ecosystem.inDevelopmentProducts
    }),
    [config]
  );

  /**
   * Get formatted metrics for display
   */
  const getFormattedMetrics = useMemo(
    () => () => ({
      community: {
        total: config.community.total.toLocaleString(),
        formatted: `${config.community.total.toLocaleString()}+`
      },
      betaTesters: {
        total: config.development.metrics.betaTesters,
        formatted: `${config.development.metrics.betaTesters.toLocaleString()}+`
      }
    }),
    [config]
  );

  /**
   * Get all testimonials
   */
  const getAllTestimonials = useMemo(
    () => (): typeof config.testimonials => {
      return config.testimonials;
    },
    [config]
  );

  /**
   * Get testimonials by product
   */
  const getTestimonialsByProduct = useMemo(
    () => (productName: string): typeof config.testimonials => {
      return config.testimonials.filter(t => t.product === productName);
    },
    [config]
  );

  /**
   * Get team members
   */
  const getTeamMembers = useMemo(
    () => (): typeof config.team.members => {
      return config.team.members;
    },
    [config]
  );

  /**
   * Get trust badges
   */
  const getTrustBadges = useMemo(
    () => (): typeof config.trustBadges => {
      return config.trustBadges;
    },
    [config]
  );

  /**
   * Get all FAQ categories
   */
  const getAllFAQCategories = useMemo(
    () => (): typeof config.faq.categories => {
      return config.faq.categories;
    },
    [config]
  );

  /**
   * Get FAQ category by key
   */
  const getFAQCategory = useMemo(
    () => (category: keyof typeof config.faq.categories): typeof config.faq.categories[typeof category] => {
      return config.faq.categories[category];
    },
    [config]
  );

  /**
   * Get all FAQ questions (flattened from all categories)
   */
  const getAllFAQQuestions = useMemo(
    () => () => {
      return Object.values(config.faq.categories).flatMap(category =>
        category.questions.map(q => ({
          ...q,
          categoryTitle: category.title
        }))
      );
    },
    [config]
  );

  /**
   * Search FAQ questions by keyword
   */
  const searchFAQ = useMemo(
    () => (keyword: string) => {
      const lowerKeyword = keyword.toLowerCase();
      const allQuestions = getAllFAQQuestions();

      return allQuestions.filter(q =>
        q.question.toLowerCase().includes(lowerKeyword) ||
        q.answer.toLowerCase().includes(lowerKeyword)
      );
    },
    [config]
  );

  return {
    // Core configuration
    config,

    // Product queries
    getProduct,
    getAllProducts,
    getProductsByStatus,
    getLiveProducts,
    getBetaProducts,
    getInDevelopmentProducts,
    getHomepageProducts,
    getProductCounts,
    productHasFeature,

    // Roadmap queries
    getRoadmapByStatus,
    getCompletedPhases,
    getCurrentPhases,
    getUpcomingPhases,

    // Social proof queries
    getAllTestimonials,
    getTestimonialsByProduct,
    getTeamMembers,
    getTrustBadges,

    // FAQ queries
    getAllFAQCategories,
    getFAQCategory,
    getAllFAQQuestions,
    searchFAQ,

    // Utility functions
    getTokenDisclaimer,
    getFormattedMetrics,

    // Direct access helpers (for common use cases)
    tokenSymbol: config.token.symbol,
    tokenName: config.token.name,
    projectName: config.project.name,
    projectTagline: config.project.tagline,
    foundedYear: config.project.foundedYear,
    contactEmail: config.contact.general,
    socialLinks: config.contact.social
  };
}

/**
 * Hook variant that returns only the raw config without helper functions
 * Useful for components that just need to read static data
 */
export function useProjectConfigRaw(): ProjectConfig {
  return projectData;
}

/**
 * Direct export of config data for non-React contexts
 * (e.g., utility functions, constants, etc.)
 */
export const projectConfig = projectData;
