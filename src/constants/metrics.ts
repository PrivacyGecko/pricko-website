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
  geckoShell: {
    waitlist: 1800,
    formatted: "1,800+",
    label: "Waitlist"
  }
} as const;

export const TOOLS_COUNT = {
  live: 2,  // Gecko Advisor, Gecko Share
  beta: 1,  // Gecko Shell
  inDevelopment: 5, // Gecko Guard (90%), Gecko Lock (65%), Gecko View (45%), Gecko Watch (55%), Gecko VPN (20%)
  total: 8
} as const;

export const FOUNDED_YEAR = 2024;

export const RATING = {
  prickoshare: "4.8",
  prickoGuard: "4.6"
} as const;
