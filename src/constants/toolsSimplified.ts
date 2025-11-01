/**
 * Simplified Tool Descriptions for ToolCardSimple Component
 * Maximum 20 words per description
 * Top 3 features only
 * Clear CTA text
 */

export interface SimplifiedTool {
  id: string;
  name: string;
  oneLiner: string;
  topFeatures: [string, string, string];
  icon: string;
  status: 'live' | 'beta' | 'in-development';
  url?: string;
  hasAI?: boolean;
}

export const SIMPLIFIED_TOOLS: SimplifiedTool[] = [
  {
    id: 'gecko-advisor',
    name: 'Gecko Advisor',
    oneLiner: 'Scan any website for trackers and get an A-F privacy grade in 10 seconds.',
    topFeatures: [
      'Instant privacy scanning',
      'A-F privacy grades',
      '100% free forever'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxwYXRoIGQ9Ik0zMiAxNkMzMC44OTU0IDE2IDMwIDE2Ljg5NTQgMzAgMThWMzBDMzAgMzEuMTA0NiAzMC44OTU0IDMyIDMyIDMyQzMzLjEwNDYgMzIgMzQgMzEuMTA0NiAzNCAzMFYxOEMzNCAzNi44OTU0IDMzLjEwNDYgMTYgMzIgMTZaIiBmaWxsPSIjMUExQTFBIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzOCIgcj0iMyIgZmlsbD0iIzFBMUExQSIvPgogIDxwYXRoIGQ9Ik0zMiAxMEMyMC40MDIzIDEwIDExIDIwLjQwMjMgMTEgMzJDMTEgNDMuNTk3NyAyMC40MDIzIDU0IDMyIDU0QzQzLjU5NzcgNTQgNTQgNDMuNTk3NyA1NCAzMkM1NCAyMC40MDIzIDQzLjU5NzcgMTAgMzIgMTBaTTMyIDUwQzIyLjYxMTIgNTAgMTQgNDEuMzg4OCAxNCAzMkMxNCAyMi42MTEyIDIyLjYxMTIgMTQgMzIgMTRDNDEuMzg4OCAxNCA1MCAyMi42MTEyIDUwIDMyQzUwIDQxLjM4ODggNDEuMzg4OCA1MCAzMiA1MFoiIGZpbGw9IiMxQTFBMUEiLz4KPC9zdmc+',
    status: 'live',
    url: 'https://geckoadvisor.com',
    hasAI: true
  },
  {
    id: 'gecko-share',
    name: 'Gecko Share',
    oneLiner: 'Share files securely with zero-knowledge encryption. No one can read your files, not even us.',
    topFeatures: [
      '256-bit AES encryption',
      'Expiring secure links',
      '2,100+ active users'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxwYXRoIGQ9Ik0yMCAyNEgyOFYzMkgyMFYyNFoiIGZpbGw9IiMxQTFBMUEiLz4KICA8cGF0aCBkPSJNMzYgMzJINDRWNDBIMzZWMzJaIiBmaWxsPSIjMUExQTFBIi8+CiAgPHBhdGggZD0iTTI4IDI4TDM2IDM2IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTTE2IDM4TDIzIDQ1IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIyIDIiLz4KICA8cGF0aCBkPSJNNDEgMTlMNDggMjYiIHN0cm9rZT0iIzFBMUExQSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIgMiIvPgo8L3N2Zz4=',
    status: 'live',
    url: 'https://geckoshare.com'
  },
  {
    id: 'gecko-shell',
    name: 'Gecko Shell',
    oneLiner: 'Mobile privacy browser with built-in Solana wallet. Browse safely on iOS and Android.',
    topFeatures: [
      'Cross-platform (iOS, Android)',
      'Built-in Solana wallet',
      'Anti-tracking protection'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxyZWN0IHg9IjE2IiB5PSIxMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzFBMUExQSIvPgogIDxyZWN0IHg9IjIwIiB5PSIxOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiBmaWxsPSIjNGFkZTgwIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0OCIgcj0iMiIgZmlsbD0iIzRhZGU4MCIvPgo8L3N2Zz4=',
    status: 'beta',
    url: undefined
  },
  {
    id: 'gecko-guard',
    name: 'Gecko Guard',
    oneLiner: 'Block trackers and ads automatically. Privacy protection that works in any browser.',
    topFeatures: [
      'Real-time tracker blocking',
      'Anti-fingerprinting shield',
      'Custom filter lists'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxwYXRoIGQ9Ik0zMiAxMEwyMCAxNlYyOEMyMCA0MS4yNTQ2IDMyIDU0IDMyIDU0QzMyIDU0IDQ0IDQxLjI1NDYgNDQgMjhWMTZMMzIgMTBaIiBmaWxsPSIjMUExQTFBIi8+CiAgPHBhdGggZD0iTTI3IDMxTDMwIDM0TDM3IDI3IiBzdHJva2U9IiM0YWRlODAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==',
    status: 'in-development'
  },
  {
    id: 'gecko-lock',
    name: 'Gecko Lock',
    oneLiner: 'Password manager with zero-knowledge encryption. Your master password never leaves your device.',
    topFeatures: [
      'AES-256 encryption',
      'Cross-platform sync',
      'Password generator'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxyZWN0IHg9IjE4IiB5PSIzMCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iIzFBMUExQSIvPgogIDxwYXRoIGQ9Ik0yMiAzMFYyM0MyMiAxOC41ODE3IDI1LjU4MTcgMTUgMzAgMTVDMzQuNDE4MyAxNSAzOCAxOC41ODE3IDM4IDIzVjMwIiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iMyIgZmlsbD0iIzRhZGU4MCIvPgogIDxwYXRoIGQ9Ik0zMiA0M1Y0NiIgc3Ryb2tlPSIjNGFkZTgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=',
    status: 'in-development'
  },
  {
    id: 'gecko-watch',
    name: 'Gecko Watch',
    oneLiner: 'Monitor GDPR compliance and privacy violations. Real-time alerts for policy changes.',
    topFeatures: [
      'GDPR compliance checking',
      'Real-time monitoring',
      'Automated reporting'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjE4IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iMyIvPgogIDxwYXRoIGQ9Ik0zMiAyMFYzMkw0MCA0MCIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxyZWN0IHg9IjI4IiB5PSI4IiB3aWR0aD0iOCIgaGVpZ2h0PSI0IiByeD0iMSIgZmlsbD0iIzFBMUExQSIvPgogIDxyZWN0IHg9IjI4IiB5PSI1MiIgd2lkdGg9IjgiIGhlaWdodD0iNCIgcng9IjEiIGZpbGw9IiMxQTFBMUEiLz4KPC9zdmc+',
    status: 'in-development'
  },
  {
    id: 'gecko-view',
    name: 'Gecko View',
    oneLiner: 'AI-powered content summarization with encrypted bookmarks. Powered by GPT-3.5 and GPT-4.',
    topFeatures: [
      'AI summaries (GPT-3.5 & GPT-4)',
      'Encrypted bookmarks',
      'Smart tagging'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxwYXRoIGQ9Ik0zMiAyMEMyNC4yNjggMjAgMTggMjYuMjY4IDE4IDM0QzE4IDQxLjczMiAyNC4yNjggNDggMzIgNDhDMzkuNzMyIDQ4IDQ2IDQxLjczMiA0NiAzNEM0NiAyNi4yNjggMzkuNzMyIDIwIDMyIDIwWiIgZmlsbD0iIzFBMUExQSIvPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzQiIHI9IjYiIGZpbGw9IiM0YWRlODAiLz4KICA8cGF0aCBkPSJNMjAgMjRMMTQgMTgiIHN0cm9rZT0iIzFBMUExQSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNNDQgMjRMNTAgMTgiIHN0cm9rZT0iIzFBMUExQSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+',
    status: 'in-development',
    hasAI: true
  },
  {
    id: 'gecko-vpn',
    name: 'Gecko VPN',
    oneLiner: 'Privacy-first VPN with no-logs policy. Global server network in 50+ countries.',
    topFeatures: [
      'No-logs policy',
      '50+ countries',
      'Multi-hop routing'
    ],
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM0YWRlODAiIHJ4PSIxMiIvPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjIwIiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iMyIvPgogIDxsaW5lIHgxPSIxMiIgeTE9IjMyIiB4Mj0iNTIiIHkyPSIzMiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNMzIgMTJDMzIgMTIgNDIgMTggNDIgMzJDNDIgNDYgMzIgNTIgMzIgNTIiIHN0cm9rZT0iIzFBMUExQSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBhdGggZD0iTTMyIDEyQzMyIDEyIDIyIDE4IDIyIDMyQzIyIDQ2IDMyIDUyIDMyIDUyIiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwYXRoIGQ9Ik0yMCAyMEw0NCA0NCIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=',
    status: 'in-development'
  }
];

// Export count constants
export const TOOLS_COUNT = {
  total: SIMPLIFIED_TOOLS.length,
  live: SIMPLIFIED_TOOLS.filter(t => t.status === 'live').length,
  beta: SIMPLIFIED_TOOLS.filter(t => t.status === 'beta').length,
  inDevelopment: SIMPLIFIED_TOOLS.filter(t => t.status === 'in-development').length
};
