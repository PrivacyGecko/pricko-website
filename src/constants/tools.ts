/**
 * SINGLE SOURCE OF TRUTH for all Privacy Gecko Tools
 *
 * This file consolidates all tool information to ensure consistency
 * across HomePage, ToolsPage, and any other pages that display tools.
 *
 * Last Updated: 2025-10-14
 * Total Tools: 8
 * Live: 3 | Beta: 0 | In Development: 5
 */

export type ToolStatus = 'live' | 'beta' | 'coming-soon' | 'in-development' | 'long-term';

export interface ToolFeature {
  name: string;
  description: string;
}

export interface SecuritySpecs {
  encryption: string;
  architecture: string;
  auditStatus: string;
  openSource?: string;
}

export interface Tool {
  id: string;
  icon: string; // Base64 SVG
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string; // For HomePage cards
  features: ToolFeature[];
  status: ToolStatus;
  users: string;
  rating: string | null;
  category: string;
  url?: string;
  securitySpecs: SecuritySpecs;
  completionPercentage?: number; // For in-development tools
}

// SVG Icons (base64 encoded)
const ICONS = {
  advisor: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+Cjwvc3ZnPgo8L3N2Zz4=",
  share: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTEgMTVoMnYtNmgtMnY2em0wLThoMlY3aC0ydjJ6Ii8+CiAgPHBhdGggZD0iTTkgMTBoLTJsMy0zIDMgM2gtMlY5SDl2MXoiLz4KICA8cGF0aCBkPSJNMTUgMTJ2Mmgyek0xNSAxNGgtM3YyaDNWMTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
  guard: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJtMTIgOCA0IDRIMTBsNC00eiIvPgogIDxyZWN0IHg9IjkiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIvPgo8L3N2Zz4KPC9zdmc+",
  lock: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzIgMy4yNCAyIDZoMmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJoLTFjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS01IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPgo8L3N2Zz4KPC9zdmc+",
  view: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTkgMTdIN3YtN2gydjd6bTQgMGgtMlY3aDJ2MTB6bTQgMGgtMnYtNGgydjR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
  shell: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0xIDJINVY2aDE0djJ6bTAgMTBINVY4aDE0djh6Ii8+CiAgPHBhdGggZD0iTTcgMTBoMTB2Mkg3eiIvPgo8L3N2Zz4KPC9zdmc+",
  vpn: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+CiAgPHBhdGggZD0iTTEyIDZjLTMuMzEgMC02IDIuNjktNiA2czIuNjkgNiA2IDYgNi0yLjY5IDYtNi0yLjY5LTYtNi02em0wIDEwYy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+Cjwvc3ZnPgo8L3N2Zz4=",
  watch: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgNEw0IDE4aDh2Mmg4di0yaC04bDgtMTR6Ii8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIxNCIgcj0iMSIvPgogIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTQiIHI9IjEiLz4KPC9zdmc+Cjwvc3ZnPg=="
};

// All Privacy Gecko Tools - SINGLE SOURCE OF TRUTH
export const TOOLS: Record<string, Tool> = {
  geckoAdvisor: {
    id: 'gecko-advisor',
    icon: ICONS.advisor,
    title: 'GeckoAdvisor',
    subtitle: 'Privacy & Security Audit Tool',
    description: 'Comprehensive privacy and security audit tool for your devices. Scan for vulnerabilities, detect tracking, and get actionable recommendations to improve your digital privacy posture.',
    shortDescription: 'Comprehensive privacy and security audit tool for your devices with vulnerability detection and privacy scoring.',
    features: [
      { name: 'Device scanning & vulnerability detection', description: 'Comprehensive scan of your device for privacy and security issues' },
      { name: 'Privacy score & recommendations', description: 'Get a privacy score with actionable steps to improve your security' },
      { name: 'Tracking detection', description: 'Identify trackers and data collection on your device and browser' },
      { name: 'Security audit reports', description: 'Detailed reports on your privacy and security status' },
      { name: 'Real-time monitoring', description: 'Continuous monitoring of privacy threats and vulnerabilities' },
      { name: 'Automated recommendations', description: 'AI-powered suggestions for improving your privacy setup' }
    ],
    status: 'live',
    users: 'Live & Available',
    rating: '4.8',
    category: 'Security Audit',
    url: 'https://geckoadvisor.com',
    securitySpecs: {
      encryption: 'Client-side processing only',
      architecture: 'No data sent to servers - local analysis only',
      auditStatus: 'Open-source security audit completed Q4 2024',
      openSource: 'https://github.com/privacygecko/gecko-advisor'
    }
  },

  geckoShare: {
    id: 'gecko-share',
    icon: ICONS.share,
    title: 'GeckoShare',
    subtitle: 'Zero-Knowledge File Sharing',
    description: 'End-to-end encrypted file sharing with expiring links. Share files securely with 256-bit AES encryption, password protection, and no registration required. Perfect for sensitive document sharing.',
    shortDescription: 'Zero-knowledge, token-gated file-sharing SaaS with instant uploads and persistent vault storage.',
    features: [
      { name: '256-bit AES encryption', description: 'Military-grade encryption for all your shared files' },
      { name: 'Expiring links', description: 'Set automatic expiration times for shared files' },
      { name: 'Password protection', description: 'Add password protection to shared files for extra security' },
      { name: 'No registration required', description: 'Share files instantly without creating an account' },
      { name: 'Zero-knowledge architecture', description: 'End-to-end encryption with no server-side access to content' },
      { name: 'Persistent vault (Pro tier)', description: 'Long-term storage with premium wallet authentication' }
    ],
    status: 'live',
    users: '2,100+ Active Users',
    rating: '4.8',
    category: 'File Sharing',
    url: 'https://geckoshare.com',
    securitySpecs: {
      encryption: 'AES-256-GCM end-to-end encryption',
      architecture: 'Zero-knowledge (server-side blind)',
      auditStatus: 'Security audit completed Q4 2024',
      openSource: 'https://github.com/privacygecko/gecko-share'
    }
  },

  geckoGuard: {
    id: 'gecko-guard',
    icon: ICONS.guard,
    title: 'GeckoGuard',
    subtitle: 'Tracker & Ad Blocker',
    description: 'Browser extension for tracker and ad blocking. Features real-time tracker blocking, privacy dashboard, and custom filter lists to protect your browsing from invasive tracking and advertisements.',
    shortDescription: 'Manifest V3 privacy browser extension with anti-fingerprinting and multiple stealth modes.',
    features: [
      { name: 'Real-time tracker blocking', description: 'Block trackers and ads as you browse in real-time' },
      { name: 'Privacy dashboard', description: 'View detailed statistics on blocked trackers and ads' },
      { name: 'Custom filter lists', description: 'Create and manage custom filter rules for advanced users' },
      { name: 'Anti-fingerprinting protection', description: 'Advanced techniques to prevent browser fingerprinting' },
      { name: 'Cookie management', description: 'Intelligent blocking of invasive cookies and tracking scripts' },
      { name: 'Multiple stealth modes', description: 'Choose from Balanced, Strict, or Ultimate privacy levels' }
    ],
    status: 'live',
    users: '850+ Beta Testers',
    rating: '4.6',
    category: 'Browser Extension',
    url: 'https://geckoguard.com',
    securitySpecs: {
      encryption: 'TLS 1.3 + Local storage encryption',
      architecture: 'Client-side processing (no data sent to servers)',
      auditStatus: 'Community security review completed',
      openSource: 'https://github.com/privacygecko/gecko-guard'
    }
  },

  geckoLock: {
    id: 'gecko-lock',
    icon: ICONS.lock,
    title: 'GeckoLock',
    subtitle: 'Zero-Knowledge Password Manager',
    description: 'Zero-knowledge password manager with AES-256 encryption and cross-platform sync. Store and manage your passwords securely with military-grade encryption that even we can\'t access.',
    shortDescription: 'Zero-knowledge password manager with AES-256 encryption and cross-platform sync.',
    features: [
      { name: 'AES-256 encryption', description: 'Military-grade encryption for all stored passwords' },
      { name: 'Zero-knowledge architecture', description: 'Your master password never leaves your device' },
      { name: 'Cross-platform sync', description: 'Seamlessly sync passwords across all your devices' },
      { name: 'Password generator', description: 'Generate strong, unique passwords for every account' },
      { name: 'Secure sharing', description: 'Share passwords securely with team members or family' },
      { name: 'Breach monitoring', description: 'Get alerts if your passwords appear in data breaches' }
    ],
    status: 'in-development',
    users: 'In Development',
    rating: null,
    category: 'Password Manager',
    completionPercentage: 65,
    securitySpecs: {
      encryption: 'AES-256-GCM with PBKDF2 key derivation',
      architecture: 'Zero-knowledge - master key never transmitted',
      auditStatus: 'Security audit planned for Q2 2025',
      openSource: 'https://github.com/privacygecko/gecko-lock'
    }
  },

  geckoView: {
    id: 'gecko-view',
    icon: ICONS.view,
    title: 'GeckoView',
    subtitle: 'AI Content Summarization',
    description: 'AI-powered content summarization with encrypted bookmarks. Save and summarize web articles using GPT-3.5 and GPT-4, with end-to-end encrypted bookmark storage and browser extension integration.',
    shortDescription: 'AI-powered content summarization with end-to-end encrypted bookmarks across all devices.',
    features: [
      { name: 'AI summaries with GPT-3.5 & GPT-4', description: 'Generate intelligent summaries of web content using advanced AI' },
      { name: 'End-to-end encrypted bookmarks', description: 'Store and sync bookmarks with military-grade encryption' },
      { name: 'Browser extension integration', description: 'Seamlessly integrate with your browser workflow' },
      { name: 'Smart tagging & organization', description: 'Automatically organize content with AI-powered tags' },
      { name: 'Offline reading mode', description: 'Save articles for offline reading with summaries' },
      { name: 'Collaborative annotations', description: 'Share and collaborate on saved content with team' }
    ],
    status: 'in-development',
    users: 'In Development',
    rating: null,
    category: 'Content Tools',
    completionPercentage: 45,
    securitySpecs: {
      encryption: 'AES-256 for stored content and bookmarks',
      architecture: 'Hybrid - AI processing on secure servers, data encrypted',
      auditStatus: 'Security review planned Q2 2025',
      openSource: 'https://github.com/privacygecko/gecko-view'
    }
  },

  geckoShell: {
    id: 'gecko-shell',
    icon: ICONS.shell,
    title: 'GeckoShell',
    subtitle: 'Disposable Email Addresses',
    description: 'Generate unlimited disposable email addresses for privacy protection. Features auto-forwarding, spam filtering, and instant email creation without registration. Perfect for protecting your real email from spam and tracking.',
    shortDescription: 'Generate unlimited disposable email addresses with auto-forwarding and spam filtering.',
    features: [
      { name: 'Unlimited disposable emails', description: 'Create as many temporary email addresses as you need' },
      { name: 'Auto-forwarding', description: 'Automatically forward emails to your real address' },
      { name: 'Spam filtering', description: 'Built-in spam protection for your temporary emails' },
      { name: 'No registration required', description: 'Instant email creation without signing up' },
      { name: 'Customizable expiration', description: 'Set how long each disposable email remains active' },
      { name: 'Privacy protection', description: 'Keep your real email address hidden from services' }
    ],
    status: 'in-development',
    users: 'In Development',
    rating: null,
    category: 'Email Privacy',
    completionPercentage: 30,
    securitySpecs: {
      encryption: 'TLS 1.3 for email transmission',
      architecture: 'Temporary email routing with automatic deletion',
      auditStatus: 'Security design phase - audit planned Q3 2025',
      openSource: 'https://github.com/privacygecko/gecko-shell'
    }
  },

  geckoVPN: {
    id: 'gecko-vpn',
    icon: ICONS.vpn,
    title: 'GeckoVPN',
    subtitle: 'Privacy-First VPN',
    description: 'Privacy-first VPN with no-logs policy and global server network. Features kill switch protection, split tunneling, and multi-hop routing for maximum privacy and security while browsing.',
    shortDescription: 'Privacy-first VPN with no-logs policy, kill switch, and multi-hop routing.',
    features: [
      { name: 'No-logs policy', description: 'Strict no-logs policy - we don\'t track your activity' },
      { name: 'Global server network', description: 'Servers in 50+ countries for optimal performance' },
      { name: 'Kill switch protection', description: 'Automatically blocks internet if VPN connection drops' },
      { name: 'Split tunneling', description: 'Choose which apps use VPN and which use direct connection' },
      { name: 'Multi-hop routing', description: 'Route traffic through multiple servers for extra privacy' },
      { name: 'Ad & malware blocking', description: 'Built-in protection from ads and malicious sites' }
    ],
    status: 'in-development',
    users: 'In Development',
    rating: null,
    category: 'VPN',
    completionPercentage: 20,
    securitySpecs: {
      encryption: 'AES-256 with WireGuard and OpenVPN protocols',
      architecture: 'RAM-only servers with automatic data wiping',
      auditStatus: 'Independent security audit planned Q4 2025',
      openSource: 'https://github.com/privacygecko/gecko-vpn'
    }
  },

  geckoWatch: {
    id: 'gecko-watch',
    icon: ICONS.watch,
    title: 'GeckoWatch',
    subtitle: 'Privacy Compliance Analyzer',
    description: 'Analyze and monitor privacy compliance of websites. Features GDPR compliance checking, cookie and tracker analysis, and privacy policy scanning to ensure websites respect your privacy rights.',
    shortDescription: 'Analyze and monitor privacy compliance of websites with GDPR checking and cookie analysis.',
    features: [
      { name: 'GDPR compliance checking', description: 'Verify if websites comply with GDPR regulations' },
      { name: 'Cookie & tracker analysis', description: 'Detailed analysis of all cookies and trackers on websites' },
      { name: 'Privacy policy scanning', description: 'Automated scanning and analysis of privacy policies' },
      { name: 'Real-time monitoring', description: 'Monitor websites for privacy compliance changes' },
      { name: 'Compliance scoring', description: 'Get detailed privacy compliance scores for any website' },
      { name: 'Automated reporting', description: 'Generate compliance reports for legal and audit purposes' }
    ],
    status: 'in-development',
    users: 'In Development',
    rating: null,
    category: 'Compliance',
    completionPercentage: 55,
    securitySpecs: {
      encryption: 'Client-side analysis with encrypted reporting',
      architecture: 'Browser-based scanning - no data collection',
      auditStatus: 'Security review planned Q3 2025',
      openSource: 'https://github.com/privacygecko/gecko-watch'
    }
  }
};

// Convenience arrays for filtering
export const LIVE_TOOLS = Object.values(TOOLS).filter(t => t.status === 'live');
export const BETA_TOOLS = Object.values(TOOLS).filter(t => t.status === 'beta');
export const IN_DEVELOPMENT_TOOLS = Object.values(TOOLS).filter(t => t.status === 'in-development')
  .sort((a, b) => (b.completionPercentage || 0) - (a.completionPercentage || 0));
export const ALL_TOOLS = Object.values(TOOLS);

// Tools for HomePage (Live + Beta + Top 2 In Development)
export const HOMEPAGE_TOOLS = [
  ...LIVE_TOOLS,
  ...BETA_TOOLS,
  ...IN_DEVELOPMENT_TOOLS.slice(0, 2)
];
