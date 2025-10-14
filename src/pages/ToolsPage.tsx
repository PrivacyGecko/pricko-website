import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { METRICS, RATING } from '../constants/metrics';

const ToolsPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [showSecurity, setShowSecurity] = useState<number | null>(null);

  const tools = [
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoAdvisor",
      subtitle: "Privacy & Security Audit Tool",
      description: "Comprehensive privacy and security audit tool for your devices. Scan for vulnerabilities, detect tracking, and get actionable recommendations to improve your digital privacy posture.",
      features: [
        { name: "Device scanning & vulnerability detection", description: "Comprehensive scan of your device for privacy and security issues" },
        { name: "Privacy score & recommendations", description: "Get a privacy score with actionable steps to improve your security" },
        { name: "Tracking detection", description: "Identify trackers and data collection on your device and browser" },
        { name: "Security audit reports", description: "Detailed reports on your privacy and security status" },
        { name: "Real-time monitoring", description: "Continuous monitoring of privacy threats and vulnerabilities" },
        { name: "Automated recommendations", description: "AI-powered suggestions for improving your privacy setup" }
      ],
      status: "live" as const,
      users: "Live & Available",
      rating: "4.8",
      category: "Security Audit",
      url: "https://geckoadvisor.com",
      securitySpecs: {
        encryption: "Client-side processing only",
        architecture: "No data sent to servers - local analysis only",
        auditStatus: "Open-source security audit completed Q4 2024",
        openSource: "https://github.com/privacygecko/gecko-advisor"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTEgMTVoMnYtNmgtMnY2em0wLThoMlY3aC0ydjJ6Ii8+CiAgPHBhdGggZD0iTTkgMTBoLTJsMy0zIDMgM2gtMlY5SDl2MXoiLz4KICA8cGF0aCBkPSJNMTUgMTJ2Mmgyek0xNSAxNGgtM3YyaDNWMTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoShare",
      subtitle: "Zero-Knowledge File Sharing",
      description: "End-to-end encrypted file sharing with expiring links. Share files securely with 256-bit AES encryption, password protection, and no registration required. Perfect for sensitive document sharing.",
      features: [
        { name: "256-bit AES encryption", description: "Military-grade encryption for all your shared files" },
        { name: "Expiring links", description: "Set automatic expiration times for shared files" },
        { name: "Password protection", description: "Add password protection to shared files for extra security" },
        { name: "No registration required", description: "Share files instantly without creating an account" },
        { name: "Zero-knowledge architecture", description: "End-to-end encryption with no server-side access to content" },
        { name: "Persistent vault (Pro tier)", description: "Long-term storage with premium wallet authentication" }
      ],
      status: "live" as const,
      users: `${METRICS.prickoshare.formatted} ${METRICS.prickoshare.label}`,
      rating: RATING.prickoshare,
      category: "File Sharing",
      url: "https://geckoshare.com",
      securitySpecs: {
        encryption: "AES-256-GCM end-to-end encryption",
        architecture: "Zero-knowledge (server-side blind)",
        auditStatus: "Security audit completed Q4 2024",
        openSource: "https://github.com/privacygecko/gecko-share"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMWw5IDNjMCAxIDAgNS0xIDlzLTQgNy05IDlsLTEtMWMtNS0yLTgtNS05LTlzLTEtOC0xLTlsMTAtM3oiLz4KICA8cGF0aCBkPSJtMTIgOCA0IDRIMTBsNC00eiIvPgogIDxyZWN0IHg9IjkiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoGuard",
      subtitle: "Tracker & Ad Blocker",
      description: "Browser extension for tracker and ad blocking. Features real-time tracker blocking, privacy dashboard, and custom filter lists to protect your browsing from invasive tracking and advertisements.",
      features: [
        { name: "Real-time tracker blocking", description: "Block trackers and ads as you browse in real-time" },
        { name: "Privacy dashboard", description: "View detailed statistics on blocked trackers and ads" },
        { name: "Custom filter lists", description: "Create and manage custom filter rules for advanced users" },
        { name: "Anti-fingerprinting protection", description: "Advanced techniques to prevent browser fingerprinting" },
        { name: "Cookie management", description: "Intelligent blocking of invasive cookies and tracking scripts" },
        { name: "Multiple stealth modes", description: "Choose from Balanced, Strict, or Ultimate privacy levels" }
      ],
      status: "live" as const,
      users: `${METRICS.prickoGuard.formatted} ${METRICS.prickoGuard.label}`,
      rating: RATING.prickoGuard,
      category: "Browser Extension",
      url: "https://geckoguard.com",
      securitySpecs: {
        encryption: "TLS 1.3 + Local storage encryption",
        architecture: "Client-side processing (no data sent to servers)",
        auditStatus: "Community security review completed",
        openSource: "https://github.com/privacygecko/gecko-guard"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzIgMy4yNCAyIDZoMmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJoLTFjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS01IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoLock",
      subtitle: "Zero-Knowledge Password Manager",
      description: "Zero-knowledge password manager with AES-256 encryption and cross-platform sync. Store and manage your passwords securely with military-grade encryption that even we can't access.",
      features: [
        { name: "AES-256 encryption", description: "Military-grade encryption for all stored passwords" },
        { name: "Zero-knowledge architecture", description: "Your master password never leaves your device" },
        { name: "Cross-platform sync", description: "Seamlessly sync passwords across all your devices" },
        { name: "Password generator", description: "Generate strong, unique passwords for every account" },
        { name: "Secure sharing", description: "Share passwords securely with team members or family" },
        { name: "Breach monitoring", description: "Get alerts if your passwords appear in data breaches" }
      ],
      status: "in-development" as const,
      users: "In Development (65% Complete)",
      rating: null,
      category: "Password Manager",
      url: undefined,
      securitySpecs: {
        encryption: "AES-256-GCM with PBKDF2 key derivation",
        architecture: "Zero-knowledge - master key never transmitted",
        auditStatus: "Security audit planned for Q2 2025",
        openSource: "https://github.com/privacygecko/gecko-lock"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTkgMTdIN3YtN2gydjd6bTQgMGgtMlY3aDJ2MTB6bTQgMGgtMnYtNGgydjR6Ii8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoView",
      subtitle: "AI Content Summarization",
      description: "AI-powered content summarization with encrypted bookmarks. Save and summarize web articles using GPT-3.5 and GPT-4, with end-to-end encrypted bookmark storage and browser extension integration.",
      features: [
        { name: "AI summaries with GPT-3.5 & GPT-4", description: "Generate intelligent summaries of web content using advanced AI" },
        { name: "End-to-end encrypted bookmarks", description: "Store and sync bookmarks with military-grade encryption" },
        { name: "Browser extension integration", description: "Seamlessly integrate with your browser workflow" },
        { name: "Smart tagging & organization", description: "Automatically organize content with AI-powered tags" },
        { name: "Offline reading mode", description: "Save articles for offline reading with summaries" },
        { name: "Collaborative annotations", description: "Share and collaborate on saved content with team" }
      ],
      status: "in-development" as const,
      users: "In Development (45% Complete)",
      rating: null,
      category: "Content Tools",
      url: undefined,
      securitySpecs: {
        encryption: "AES-256 for stored content and bookmarks",
        architecture: "Hybrid - AI processing on secure servers, data encrypted",
        auditStatus: "Security review planned Q2 2025",
        openSource: "https://github.com/privacygecko/gecko-view"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0xIDJINVY2aDE0djJ6bTAgMTBINVY4aDE0djh6Ii8+CiAgPHBhdGggZD0iTTcgMTBoMTB2Mkg3eiIvPgo8L3N2Zz4KPC9zdmc+",
      title: "GeckoShell",
      subtitle: "Disposable Email Addresses",
      description: "Generate unlimited disposable email addresses for privacy protection. Features auto-forwarding, spam filtering, and instant email creation without registration. Perfect for protecting your real email from spam and tracking.",
      features: [
        { name: "Unlimited disposable emails", description: "Create as many temporary email addresses as you need" },
        { name: "Auto-forwarding", description: "Automatically forward emails to your real address" },
        { name: "Spam filtering", description: "Built-in spam protection for your temporary emails" },
        { name: "No registration required", description: "Instant email creation without signing up" },
        { name: "Customizable expiration", description: "Set how long each disposable email remains active" },
        { name: "Privacy protection", description: "Keep your real email address hidden from services" }
      ],
      status: "in-development" as const,
      users: "In Development (30% Complete)",
      rating: null,
      category: "Email Privacy",
      url: undefined,
      securitySpecs: {
        encryption: "TLS 1.3 for email transmission",
        architecture: "Temporary email routing with automatic deletion",
        auditStatus: "Security design phase - audit planned Q3 2025",
        openSource: "https://github.com/privacygecko/gecko-shell"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+CiAgPHBhdGggZD0iTTEyIDZjLTMuMzEgMC02IDIuNjktNiA2czIuNjkgNiA2IDYgNi0yLjY5IDYtNi0yLjY5LTYtNi02em0wIDEwYy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHoiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+Cjwvc3ZnPgo8L3N2Zz4=",
      title: "GeckoVPN",
      subtitle: "Privacy-First VPN",
      description: "Privacy-first VPN with no-logs policy and global server network. Features kill switch protection, split tunneling, and multi-hop routing for maximum privacy and security while browsing.",
      features: [
        { name: "No-logs policy", description: "Strict no-logs policy - we don't track your activity" },
        { name: "Global server network", description: "Servers in 50+ countries for optimal performance" },
        { name: "Kill switch protection", description: "Automatically blocks internet if VPN connection drops" },
        { name: "Split tunneling", description: "Choose which apps use VPN and which use direct connection" },
        { name: "Multi-hop routing", description: "Route traffic through multiple servers for extra privacy" },
        { name: "Ad & malware blocking", description: "Built-in protection from ads and malicious sites" }
      ],
      status: "in-development" as const,
      users: "In Development (20% Complete)",
      rating: null,
      category: "VPN",
      url: undefined,
      securitySpecs: {
        encryption: "AES-256 with WireGuard and OpenVPN protocols",
        architecture: "RAM-only servers with automatic data wiping",
        auditStatus: "Independent security audit planned Q4 2025",
        openSource: "https://github.com/privacygecko/gecko-vpn"
      }
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGFkZTgwIiByeD0iMTIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgNEw0IDE4aDh2Mmg4di0yaC04bDgtMTR6Ii8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIxNCIgcj0iMSIvPgogIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTQiIHI9IjEiLz4KPC9zdmc+Cjwvc3ZnPg==",
      title: "GeckoWatch",
      subtitle: "Privacy Compliance Analyzer",
      description: "Analyze and monitor privacy compliance of websites. Features GDPR compliance checking, cookie and tracker analysis, and privacy policy scanning to ensure websites respect your privacy rights.",
      features: [
        { name: "GDPR compliance checking", description: "Verify if websites comply with GDPR regulations" },
        { name: "Cookie & tracker analysis", description: "Detailed analysis of all cookies and trackers on websites" },
        { name: "Privacy policy scanning", description: "Automated scanning and analysis of privacy policies" },
        { name: "Real-time monitoring", description: "Monitor websites for privacy compliance changes" },
        { name: "Compliance scoring", description: "Get detailed privacy compliance scores for any website" },
        { name: "Automated reporting", description: "Generate compliance reports for legal and audit purposes" }
      ],
      status: "in-development" as const,
      users: "In Development (55% Complete)",
      rating: null,
      category: "Compliance",
      url: undefined,
      securitySpecs: {
        encryption: "Client-side analysis with encrypted reporting",
        architecture: "Browser-based scanning - no data collection",
        auditStatus: "Security review planned Q3 2025",
        openSource: "https://github.com/privacygecko/gecko-watch"
      }
    }
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      live: {
        badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25",
        label: "Live & Available",
        icon: "🟢",
        glow: "shadow-green-500/20"
      },
      beta: {
        badge: "bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-lg shadow-yellow-500/25",
        label: "Beta Release",
        icon: "🧪",
        glow: "shadow-yellow-500/20"
      },
      "coming-soon": {
        badge: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25",
        label: "Coming Soon",
        icon: "🔮",
        glow: "shadow-blue-500/20"
      },
      "in-development": {
        badge: "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25",
        label: "In Development",
        icon: "⚡",
        glow: "shadow-orange-500/20"
      },
      "long-term": {
        badge: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25",
        label: "Phase 3 - Long-term",
        icon: "🚀",
        glow: "shadow-purple-500/20"
      }
    };
    return configs[status as keyof typeof configs];
  };

  return (
    <div className="min-h-screen bg-bg-main text-white pt-24">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent">🛡️</span>
            <span className="text-sm font-medium text-accent">Privacy Gecko Ecosystem</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-professional">
            Privacy <span className="gradient-text-animated">Tools</span>
          </h1>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed mb-8">
            Professional-grade privacy solutions powered by $PRICKO token.
            Each tool is meticulously crafted to protect your digital identity while
            delivering enterprise-level performance and security.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>3 Tools Live Now</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span>5 Tools In Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Powered by $PRICKO Token</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-20">
          {tools.map((tool, index) => {
            const statusConfig = getStatusConfig(tool.status);
            const isExpanded = selectedTool === index;

            return (
              <motion.div
                key={tool.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 ${statusConfig.glow}`}>

                  {/* Content Section */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{statusConfig.icon}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig.badge}`}>
                            {statusConfig.label}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-professional">{tool.title}</h2>
                        <p className="text-accent font-medium mb-4">{tool.subtitle}</p>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-muted mb-1">{tool.category}</div>
                        <div className="text-lg font-semibold text-accent">{tool.users}</div>
                        {tool.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm font-medium">{tool.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-muted mb-8 leading-relaxed text-lg">
                      {tool.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-accent">Key Features</h3>
                        <motion.button
                          onClick={() => setSelectedTool(isExpanded ? null : index)}
                          className="text-sm text-accent hover:text-accent-hover transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isExpanded ? 'Show Less' : 'Show Details'}
                        </motion.button>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {tool.features.slice(0, isExpanded ? tool.features.length : 3).map((feature, featureIndex) => {

                          return (
                            <motion.div
                              key={featureIndex}
                              className="group p-4 rounded-xl border bg-bg-main/30 border-border/30 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              onHoverStart={() => setHoveredFeature(`${index}-${featureIndex}`)}
                              onHoverEnd={() => setHoveredFeature(null)}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-accent mt-1 group-hover:scale-110 transition-transform">✓</span>
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-accent transition-colors">
                                    {feature.name}
                                  </div>
                                  <AnimatePresence>
                                    {(isExpanded || hoveredFeature === `${index}-${featureIndex}`) && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm mt-1 text-muted"
                                      >
                                        {feature.description}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Security Specifications Section */}
                    {tool.securitySpecs && (
                      <motion.div className="mb-8">
                        <button
                          className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-2 mb-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowSecurity(showSecurity === index ? null : index);
                          }}
                        >
                          <span>🔒</span>
                          <span>Security Details</span>
                          <span className="text-xs">{showSecurity === index ? '▲' : '▼'}</span>
                        </button>

                        <AnimatePresence>
                          {showSecurity === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-secondary/30 border border-accent/20 rounded-xl p-4 space-y-3">
                                <div className="text-sm">
                                  <strong className="text-accent">Encryption:</strong>{' '}
                                  <span className="text-gray-300">{tool.securitySpecs.encryption}</span>
                                </div>
                                <div className="text-sm">
                                  <strong className="text-accent">Architecture:</strong>{' '}
                                  <span className="text-gray-300">{tool.securitySpecs.architecture}</span>
                                </div>
                                <div className="text-sm">
                                  <strong className="text-accent">Audit Status:</strong>{' '}
                                  <span className="text-gray-300">{tool.securitySpecs.auditStatus}</span>
                                </div>
                                {tool.securitySpecs.openSource && (
                                  <div className="text-sm">
                                    <strong className="text-accent">Source Code:</strong>{' '}
                                    <a
                                      href={tool.securitySpecs.openSource}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-accent hover:text-accent-hover hover:underline"
                                    >
                                      View on GitHub →
                                    </a>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        className={`${tool.status === 'live' ? 'btn-primary' : tool.status === 'beta' ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black' : 'btn-secondary'} px-8 py-4 text-lg font-semibold shadow-professional`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={tool.status !== 'live' && tool.status !== 'beta'}
                        onClick={() => {
                          if ((tool.status === 'live' || tool.status === 'beta') && tool.url) {
                            window.open(tool.url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        {tool.status === 'live' ? '🚀 Use Now' :
                         tool.status === 'beta' ? '🧪 Join Beta' :
                         tool.status === 'coming-soon' ? '📋 Join Waitlist' :
                         '📅 Notify Me'}
                      </motion.button>

                      <motion.button
                        className="border border-accent/30 text-accent hover:bg-accent/10 px-6 py-4 rounded-lg transition-all duration-200 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📖 Learn More
                      </motion.button>
                    </div>
                  </div>

                  {/* Visual Section */}
                  <motion.div
                    className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative">
                      <div className={`w-80 h-80 bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-3xl flex items-center justify-center border border-border/50 shadow-professional-lg ${statusConfig.glow}`}>
                        <motion.img
                          src={tool.icon}
                          alt={tool.title}
                          className="w-32 h-32 filter brightness-0 invert opacity-90"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Floating Status Indicator */}
                      <motion.div
                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${statusConfig.badge} flex items-center justify-center`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <motion.section
          className="text-center mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm shadow-professional-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl"></div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-professional">
                Ready to <span className="gradient-text-animated">Secure</span> Your Digital Life?
              </h2>
              <p className="text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
                Join over {METRICS.prickoshare.formatted} users already using GeckoShare and {METRICS.prickoGuard.formatted} testers trying GeckoGuard.
                Experience 3 live privacy tools today and be part of the growing Privacy Gecko ecosystem powered by $PRICKO token.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="btn-primary px-10 py-4 text-lg font-semibold shadow-professional glow-pulse"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Explore Tools
                </motion.button>
                <motion.button
                  className="btn-secondary px-10 py-4 text-lg font-semibold shadow-professional"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 Join Community
                </motion.button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Powered by $PRICKO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Community Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ToolsPage;
