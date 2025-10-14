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
  prickoshare: {
    users: 2100,
    formatted: "2,100+",
    label: "Active Users"
  },
  prickoGuard: {
    testers: 850,
    formatted: "850+",
    label: "Beta Testers"
  },
  prickoShell: {
    waitlist: 1800,
    formatted: "1,800+",
    label: "Waitlist"
  }
} as const;

export const TOOLS_COUNT = {
  live: 2,  // GeckoAdvisor + GeckoShare
  beta: 1,  // GeckoGuard
  comingSoon: 1, // GeckoShell
  inDevelopment: 2, // GeckoLock + GeckoBrowser
  total: 6
} as const;

export const FOUNDED_YEAR = 2024;

export const RATING = {
  prickoshare: 4.8,
  prickoGuard: 4.6
} as const;
