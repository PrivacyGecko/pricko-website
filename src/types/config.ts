/**
 * TypeScript interfaces for the centralized project-data.json configuration
 *
 * IMPORTANT: These types must stay in sync with /src/config/project-data.json
 * Last Updated: 2025-10-31
 */

export interface ProjectInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  description: string;
  mission: string;
}

export interface TokenDistribution {
  percentage: number;
  amount: string;
  description: string;
  vestingSchedule?: string;
}

export interface TokenUtility {
  description: string;
  benefits: string[];
}

export interface TokenDisclaimers {
  homepage: string;
  tokenomics: string;
  roadmap: string;
}

export interface TokenInfo {
  name: string;
  symbol: string;
  blockchain: string;
  contractAddress: string;
  totalSupply: string;
  distribution: {
    publicSale: TokenDistribution;
    liquidityPool: TokenDistribution;
    development: TokenDistribution;
    marketing: TokenDistribution;
    team: TokenDistribution;
  };
  utility: TokenUtility;
  disclaimers: TokenDisclaimers;
}

export interface ProductMetrics {
  users: string;
  rating: string | null;
  downloads?: string;
  activeInstallations?: string;
  filesShared?: string;
  activeUsers?: number;
  betaTesters?: number;
  platforms?: string[];
  estimatedLaunch?: string;
}

export interface ProductFeature {
  name: string;
  description: string;
}

export interface ProductSecurity {
  encryption: string;
  architecture: string;
  auditStatus: string;
  openSource: string;
}

export interface PricingTier {
  available: boolean;
  features: string[];
  priceUSD?: number;
  tokenRequirement?: string;
}

export interface ProductPricing {
  free: PricingTier;
  pro: PricingTier;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  status: 'live' | 'beta' | 'in-development' | 'coming-soon';
  launchDate: string;
  progress: number;
  metrics: ProductMetrics;
  description: string;
  features: string[];
  security: ProductSecurity;
  pricing: ProductPricing;
  url: string | null;
}

export interface EcosystemInfo {
  totalProducts: number;
  liveProducts: number;
  betaProducts: number;
  inDevelopmentProducts: number;
  products: Record<string, Product>;
}

export interface Milestone {
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  description: string;
}

export interface RoadmapPhase {
  id: string;
  quarter: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  milestones: Milestone[];
}

export interface RoadmapInfo {
  phases: RoadmapPhase[];
}

export interface DevelopmentMetrics {
  totalInvestment: string;
  linesOfCode: string;
  betaTesters: number;
  githubStars: string;
  openSourceRepos: number;
  securityAudits: number;
}

export interface TeamInfo {
  size: string;
  roles: string[];
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  mobile: string[];
  blockchain: string[];
  security: string[];
}

export interface DevelopmentInfo {
  metrics: DevelopmentMetrics;
  team: TeamInfo;
  tech: TechStack;
}

export interface MarketSize {
  total: string;
  serviceable: string;
  target: string;
}

export interface GrowthProjections {
  cagr: string;
  projectedUsers2025: string;
  projectedUsers2026: string;
}

export interface InvestmentThesis {
  marketSize: MarketSize;
  growth: GrowthProjections;
  differentiators: string[];
}

export interface CommunityChannels {
  twitter: string;
  telegram: string;
  discord: string;
  github: string;
}

export interface CommunityInfo {
  total: number;
  channels: CommunityChannels;
}

export interface SocialLinks {
  twitter: string;
  telegram: string;
  discord: string;
  github: string;
}

export interface ContactInfo {
  general: string;
  support: string;
  press: string;
  partnerships: string;
  social: SocialLinks;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string | null;
  linkedin: string | null;
  twitter: string | null;
  github: string | null;
}

export interface TeamInfo_New {
  members: TeamMember[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  product: string | null;
  rating: number;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FounderInfo {
  name: string;
  title: string;
  bio: string;
  background: string;
  linkedin: string;
  twitter: string;
}

export interface ComplianceNotes {
  securities: string;
  jurisdiction: string;
  kyc: string;
}

export interface LegalInfo {
  riskWarnings: string[];
  complianceNotes: ComplianceNotes;
}

/**
 * Root configuration interface matching project-data.json structure
 */
export interface ProjectConfig {
  $schema?: string;
  version: string;
  lastUpdated: string;
  project: ProjectInfo;
  token: TokenInfo;
  ecosystem: EcosystemInfo;
  roadmap: RoadmapInfo;
  development: DevelopmentInfo;
  investmentThesis: InvestmentThesis;
  community: CommunityInfo;
  contact: ContactInfo;
  team: TeamInfo_New;
  testimonials: Testimonial[];
  trustBadges: TrustBadge[];
  founder: FounderInfo;
  legal: LegalInfo;
  faq: FAQInfo;
}

/**
 * Helper type for product status
 */
export type ProductStatus = 'live' | 'beta' | 'in-development' | 'coming-soon';

/**
 * Helper type for milestone status
 */
export type MilestoneStatus = 'completed' | 'in-progress' | 'upcoming';

/**
 * Helper type for phase status
 */
export type PhaseStatus = 'completed' | 'in-progress' | 'upcoming';

/**
 * FAQ Question interface
 */
export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ Category interface
 */
export interface FAQCategory {
  title: string;
  questions: FAQQuestion[];
}

/**
 * FAQ Structure interface
 */
export interface FAQInfo {
  categories: {
    general: FAQCategory;
    token: FAQCategory;
    utility: FAQCategory;
    products: FAQCategory;
    technical: FAQCategory;
    community: FAQCategory;
  };
}
