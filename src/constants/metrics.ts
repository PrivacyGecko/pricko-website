/**
 * Centralized metrics constants for Pricko-Website
 *
 * IMPORTANT: Update these values to reflect actual metrics
 * All numbers must be consistent across the entire site
 */

export const METRICS = {
  community: {
    total: 1200,
    formatted: "1,200+",
    label: "privacy advocates"
  },
  geckoShare: {
    users: 2100,
    formatted: "2,100+",
    label: "Active Users"
  },
  geckoGuard: {
    testers: 850,
    formatted: "850+",
    label: "Beta Testers"
  },
  geckoShell: {
    waitlist: 1800,
    formatted: "1,800+",
    label: "Waitlist"
  }
} as const;

export const TOOLS_COUNT = {
  live: 1,  // GeckoShare
  beta: 1,  // GeckoGuard
  coming: 2, // Shell + Browser (coming soon)
  inDevelopment: 0, // Currently none marked as "in development"
  total: 4
} as const;

export const FOUNDED_YEAR = 2024;

export const RATING = {
  geckoShare: 4.8,
  geckoGuard: 4.6
} as const;
