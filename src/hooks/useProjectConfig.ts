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
