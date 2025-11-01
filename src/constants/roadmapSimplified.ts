/**
 * Simplified Roadmap Data
 * Maximum 2-3 achievements per phase
 * Clear completion/target dates
 * Linear timeline top to bottom
 */

export interface SimplifiedPhase {
  id: string;
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  achievements: string[];
  completionDate: string;
}

export const SIMPLIFIED_ROADMAP: SimplifiedPhase[] = [
  {
    id: 'phase-1',
    quarter: 'Q2-Q3 2025',
    title: 'Foundation & Product Launch',
    status: 'completed',
    achievements: [
      'Gecko Advisor launched - website privacy scanner with A-F grades',
      'Gecko Share launched - 2,100+ users, zero-knowledge file sharing',
      'Privacy Gecko community established with active channels'
    ],
    completionDate: 'October 2025'
  },
  {
    id: 'phase-2',
    quarter: 'Q4 2025',
    title: 'Token Launch & Smart Contracts',
    status: 'current',
    achievements: [
      '$PRICKO token launches on Solana (November 18, 2025)',
      'Smart contract audit completed and deployed',
      'Staking & governance activation for community'
    ],
    completionDate: 'November 2025'
  },
  {
    id: 'phase-3',
    quarter: 'Q1 2026',
    title: 'Product Expansion',
    status: 'upcoming',
    achievements: [
      'Gecko Guard (browser extension) - tracker blocker goes live',
      'Gecko Shell (mobile browser) - beta launch with Solana wallet',
      '1,000 beta testers onboarded for AI features'
    ],
    completionDate: 'March 2026'
  },
  {
    id: 'phase-4',
    quarter: 'Q2-Q3 2026',
    title: 'Ecosystem Growth',
    status: 'upcoming',
    achievements: [
      'Gecko Lock (password manager) - zero-knowledge launch',
      'Gecko Watch & Gecko View - AI-powered privacy tools',
      'Cross-platform sync and mobile app releases'
    ],
    completionDate: 'September 2026'
  },
  {
    id: 'phase-5',
    quarter: 'Q4 2026+',
    title: 'Complete Privacy Suite',
    status: 'upcoming',
    achievements: [
      'Gecko VPN - privacy-first VPN with 50+ countries',
      'DAO governance activation for token holders',
      'Multi-chain expansion and Privacy Summits'
    ],
    completionDate: '2027'
  }
];

export const ROADMAP_META = {
  currentPhase: 2,
  totalPhases: SIMPLIFIED_ROADMAP.length,
  overallProgress: 30 // percentage
};
