# 🚨 CRITICAL: Handoff to Privacy Gecko Website Agents

**Date:** October 14, 2025
**Priority:** CRITICAL - Implement within 48 hours
**From:** Pricko-Website Claude Agent
**To:** Privacy-Gecko-Website Agent Team

---

## 📋 Executive Summary

A comprehensive data consistency audit revealed **23 critical discrepancies** between Pricko.com and PrivacyGecko.com. This document provides exact specifications for fixes needed on the **privacy-gecko-website** project.

**Critical Issues Found:**
1. ❌ Staking mentioned (must be removed - no staking exists)
2. ❌ No Solana or pump.fun branding
3. ❌ No tokenomics information
4. ❌ Wrong founder info (should be GeckoMaster + @0xAnonA, 2024)
5. ❌ GeckoShell described as email service (should be mobile browser)
6. ❌ GeckoGuard status wrong (should be "In Review")
7. ❌ No roadmap page or incomplete roadmap

---

## 🎯 Your Task

Implement the following changes in the **privacy-gecko-website** project on a **new `stage` branch**:

```bash
# Create stage branch in privacy-gecko-website project
git checkout -b stage
```

---

## 🚨 ISSUE #1: Remove ALL Staking References

**Problem:** PrivacyGecko.com mentions staking, but **NO STAKING EXISTS** in $PRICKO tokenomics.

### Files to Search and Fix

**Search command:**
```bash
grep -ri "stak" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.md"
```

**Find and REMOVE:**
- "Stake tokens for discounts"
- "Staking rewards"
- "Stake $PRICKO to earn"
- Any mention of "staking" or "stake"

**Replace with:**
```tsx
// CORRECT - Token utility WITHOUT staking
<div className="utility-item">
  <h3>Governance Rights</h3>
  <p>Hold $PRICKO tokens to vote on ecosystem proposals and future development</p>
</div>

<div className="utility-item">
  <h3>Premium Features</h3>
  <p>Hold $PRICKO tokens to unlock premium features across all Privacy Gecko tools</p>
</div>
```

**Critical:** This is a legal/compliance issue. Must be fixed immediately.

---

## 🚨 ISSUE #2: Add Solana Blockchain Info

**Problem:** No mention of Solana anywhere on PrivacyGecko.com

### Required Changes

**1. Add to Homepage (Hero or About Section):**
```tsx
<div className="blockchain-badge">
  <img src="/images/solana-logo.svg" alt="Solana" className="h-8" />
  <span>Built on Solana</span>
</div>
```

**2. Add to Footer:**
```tsx
<div className="footer-blockchain">
  <p>Powered by <strong>Solana</strong> blockchain</p>
  <img src="/images/solana-logo.svg" alt="Solana" className="h-6" />
</div>
```

**3. Create /token page (if doesn't exist):**

Add section explaining blockchain:
```tsx
<section className="blockchain-info">
  <h2>Built on Solana</h2>
  <p>
    $PRICKO is a Solana-based SPL token, leveraging Solana's high speed
    and low transaction costs for seamless utility integration.
  </p>
  <div className="benefits">
    <div>Fast transactions (400ms)</div>
    <div>Low fees ($0.00025 avg)</div>
    <div>Eco-friendly proof of stake</div>
  </div>
</section>
```

**4. Download Solana Logo:**
- Get official Solana logo from: https://solana.com/branding
- Place at: `/public/images/solana-logo.svg`

---

## 🚨 ISSUE #3: Add pump.fun Launch Platform Info

**Problem:** No mention of pump.fun launch platform

### Required Changes

**1. Add to /token page:**
```tsx
<section className="launch-platform">
  <h2>Fair Launch on pump.fun</h2>
  <div className="launch-card">
    <img src="/images/pumpfun-logo.png" alt="pump.fun" />
    <div className="details">
      <h3>What is pump.fun?</h3>
      <p>
        pump.fun is the leading Solana token launchpad. $PRICKO will launch
        as a fair launch with 80% of supply going directly to the liquidity
        pool - no presale, no private investors, just pure community-driven launch.
      </p>
      <div className="features">
        <div>✅ Fair Launch - No Presale</div>
        <div>✅ 80% to Liquidity Pool</div>
        <div>✅ Immediate Trading</div>
      </div>
      <a href="https://pump.fun" target="_blank" className="btn-primary">
        Learn About pump.fun →
      </a>
    </div>
  </div>
</section>
```

**2. Add announcement banner to homepage:**
```tsx
<div className="announcement-banner">
  <p>
    🚀 $PRICKO Token launching soon on <strong>pump.fun</strong> | Fair launch | No presale
  </p>
  <Link href="/token" className="btn-outline">
    Learn More →
  </Link>
</div>
```

---

## 🚨 ISSUE #4: Create Comprehensive Tokenomics Page

**Problem:** PrivacyGecko.com has ZERO tokenomics information

### Create: `/app/tokenomics/page.tsx` (or similar path)

**Complete tokenomics page structure:**

```tsx
export default function TokenomicsPage() {
  return (
    <div className="tokenomics-page">
      {/* Hero */}
      <section className="hero">
        <h1>$PRICKO Tokenomics</h1>
        <p>Fair launch with transparent distribution</p>
      </section>

      {/* Key Stats */}
      <section className="stats">
        <div className="stat">
          <h3>Total Supply</h3>
          <p className="value">1,000,000,000</p>
          <p className="label">1 Billion $PRICKO</p>
        </div>
        <div className="stat">
          <h3>Blockchain</h3>
          <p className="value">Solana</p>
          <p className="label">SPL Token</p>
        </div>
        <div className="stat">
          <h3>Launch Platform</h3>
          <p className="value">pump.fun</p>
          <p className="label">Fair Launch</p>
        </div>
      </section>

      {/* Distribution */}
      <section className="distribution">
        <h2>Token Distribution</h2>

        <div className="breakdown">
          {/* 80% Liquidity Pool */}
          <div className="item">
            <h3>Liquidity Pool (80%)</h3>
            <p className="amount">800,000,000 $PRICKO</p>
            <p>
              Fair launch on pump.fun. 80% of supply goes directly to
              the liquidity pool for immediate trading. No presale,
              no private investors.
            </p>
            <div className="badges">
              <span>No Vesting</span>
              <span>Immediate Liquidity</span>
            </div>
          </div>

          {/* 20% Team */}
          <div className="item">
            <h3>Team & Development (20%)</h3>
            <p className="amount">200,000,000 $PRICKO</p>
            <p>
              Reserved for development, marketing, partnerships, and
              long-term ecosystem growth.
            </p>
            <div className="badges">
              <span>12-month Vesting</span>
              <span>3-month Cliff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utilities */}
      <section className="utilities">
        <h2>Token Utilities</h2>
        <div className="grid">
          <div className="utility">
            <h3>Privacy Tool Access</h3>
            <p>Hold tokens to unlock premium features across all Gecko tools</p>
          </div>
          <div className="utility">
            <h3>Governance Rights</h3>
            <p>Vote on protocol upgrades, new tools, and ecosystem decisions</p>
          </div>
          <div className="utility">
            <h3>Community Benefits</h3>
            <p>Beta access, events, merchandise, and exclusive perks</p>
          </div>
          <div className="utility">
            <h3>Deflationary Burns</h3>
            <p>Token burns from tool usage reduce supply over time</p>
          </div>
        </div>
      </section>

      {/* Fair Launch Principles */}
      <section className="principles">
        <h2>Fair Launch Principles</h2>
        <div className="grid">
          <div>✅ No Presale</div>
          <div>✅ No Private Investors</div>
          <div>✅ Immediate Liquidity</div>
          <div>✅ Team Vesting</div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="disclaimer">
        <div className="box">
          <h3>⚠️ Important Notice</h3>
          <p>
            $PRICKO is a utility token, not an investment vehicle. Purchasing
            tokens does not constitute an investment contract. Token value may
            fluctuate. Never invest more than you can afford to lose. This is
            not financial advice.
          </p>
        </div>
      </section>
    </div>
  );
}
```

**Add to navigation:**
```tsx
<Link href="/tokenomics">Tokenomics</Link>
```

---

## 🚨 ISSUE #5: Fix Founder Information

**Problem:** Different founders on different sites

**Current (WRONG):**
- PrivacyGecko.com: "@0xAnonA" solo founder, January 2025

**Required (CORRECT):**
- **Co-Founders:** GeckoMaster + @0xAnonA
- **Founded:** 2024 (not 2025)

### Files to Update

**Search and replace:**
```bash
# Find wrong founding date
grep -r "January 2025" --include="*.tsx" --include="*.ts"
grep -r "2025" --include="*.tsx" --include="*.ts" | grep -i "found"

# Replace with 2024
```

**Update About page:**
```tsx
<section className="founders">
  <h2>Meet the Founders</h2>
  <p>
    Founded in 2024 by <strong>GeckoMaster</strong> and <strong>@0xAnonA</strong>,
    Privacy Gecko emerged from the crypto privacy community with a mission to
    make privacy tools accessible to everyone.
  </p>

  <div className="founder-grid">
    {/* GeckoMaster */}
    <div className="founder-card">
      <div className="avatar">GM</div>
      <h3>GeckoMaster</h3>
      <p className="role">Co-Founder & Chief Privacy Officer</p>
      <p className="bio">
        Privacy advocate with deep expertise in cryptography and digital rights.
        Leading the vision for Privacy Gecko's product ecosystem.
      </p>
      <a href="https://twitter.com/GeckoMaster" target="_blank">
        @GeckoMaster
      </a>
    </div>

    {/* @0xAnonA */}
    <div className="founder-card">
      <div className="avatar">0x</div>
      <h3>@0xAnonA</h3>
      <p className="role">Co-Founder & Chief Technology Officer</p>
      <p className="bio">
        Web3 developer and blockchain architect. Building the technical
        infrastructure for Privacy Gecko and the $PRICKO token ecosystem.
      </p>
      <a href="https://twitter.com/0xAnonA" target="_blank">
        @0xAnonA
      </a>
    </div>
  </div>
</section>
```

---

## 🚨 ISSUE #6: Fix GeckoShell Description

**Problem:** GeckoShell is described as "disposable email service" on PrivacyGecko.com

**CORRECT Description:**
- GeckoShell = Mobile app for private browsing with Web3 capabilities

### Update Product Page: `/products/gecko-shell/` (or similar)

**Complete correct description:**

```tsx
export default function GeckoShellPage() {
  return (
    <div className="product-page">
      <section className="hero">
        <h1>GeckoShell</h1>
        <p className="tagline">Private, secure, Web3-enabled mobile browsing</p>
        <div className="status-badge">Beta</div>
      </section>

      <section className="overview">
        <h2>What is GeckoShell?</h2>
        <p>
          GeckoShell is a mobile app that wraps the internet in a private,
          secure, and extensible shell with built-in Web3 capabilities.
          Browse the web without tracking, connect your Solana wallet, and
          interact with decentralized applications (dApps) - all in one place.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="grid">
          <div>Privacy-first mobile browser</div>
          <div>Built-in Solana wallet</div>
          <div>Web3 dApp browser</div>
          <div>Ad & tracker blocking</div>
          <div>Encrypted bookmarks</div>
          <div>Private mode default</div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="token-utility">
        <h2>$PRICKO Token Benefits</h2>
        <p>Hold 15,000+ $PRICKO tokens to unlock:</p>
        <ul>
          <li>Premium themes and customization</li>
          <li>Advanced wallet features</li>
          <li>Priority Web3 integrations</li>
          <li>Cloud sync for bookmarks</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Free</h3>
            <p className="price">$0</p>
            <ul>
              <li>Privacy browsing</li>
              <li>Basic wallet</li>
              <li>Standard ad blocking</li>
            </ul>
          </div>
          <div className="tier premium">
            <h3>Premium</h3>
            <p className="price">$7.99/month</p>
            <ul>
              <li>All Free features</li>
              <li>Advanced wallet</li>
              <li>Premium themes</li>
              <li>Cloud sync</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
```

**If there IS a disposable email service, it should be a DIFFERENT product** (not GeckoShell).

---

## 🚨 ISSUE #7: Update GeckoGuard Status

**Problem:** Shows "Live" but actual status is "In Review"

**Current:** Live
**Correct:** In Review 🔄

### Update Product Page

**Add status badge and note:**
```tsx
<section className="hero">
  <h1>GeckoGuard</h1>
  <p className="tagline">Block trackers, protect your privacy</p>

  {/* UPDATE THIS */}
  <div className="status-badge review">
    In Review
  </div>
  <p className="status-note">
    Browser extension currently in review with Chrome Web Store and Firefox Add-ons.
    Join 850+ beta testers who are already protecting their privacy.
  </p>

  {/* Add beta signup */}
  <a href="/beta-signup" className="btn-primary">
    Join Beta Testing →
  </a>
</section>
```

---

## 🚨 ISSUE #8: Add/Update Roadmap Page

**Problem:** No roadmap page or incomplete roadmap on PrivacyGecko.com

### Create: `/app/roadmap/page.tsx` (or verify it exists)

**Complete roadmap structure (Product-focused, not token-focused):**

```tsx
export default function RoadmapPage() {
  return (
    <div className="roadmap-page">
      <section className="hero">
        <h1>Product Roadmap</h1>
        <p>Our journey to building a complete privacy ecosystem</p>
      </section>

      {/* Q4 2024 - COMPLETED */}
      <section className="quarter completed">
        <div className="quarter-header">
          <h2>Q4 2024</h2>
          <span className="status">✅ Completed</span>
        </div>

        <div className="milestones">
          <div className="milestone">
            <h3>GeckoShare Launch</h3>
            <p className="status-text">Live ✅</p>
            <p>
              End-to-end encrypted file sharing with self-destructing links.
              Zero-knowledge architecture ensures complete privacy.
            </p>
            <div className="features">
              <span>AES-256 encryption</span>
              <span>No account required</span>
              <span>2,100+ users</span>
            </div>
            <a href="/products/gecko-share">Learn More →</a>
          </div>

          <div className="milestone">
            <h3>GeckoGuard Beta</h3>
            <p className="status-text">In Review 🔄</p>
            <p>
              Privacy-focused browser extension with advanced tracker blocking.
              Currently in review with browser stores.
            </p>
            <div className="features">
              <span>10,000+ tracking domains blocked</span>
              <span>Fingerprint protection</span>
              <span>850+ beta testers</span>
            </div>
            <a href="/products/gecko-guard">Join Beta →</a>
          </div>
        </div>
      </section>

      {/* Q1 2025 - IN PROGRESS */}
      <section className="quarter in-progress">
        <div className="quarter-header">
          <h2>Q1 2025</h2>
          <span className="status">⚡ In Progress</span>
        </div>

        <div className="milestones">
          <div className="milestone">
            <h3>GeckoGuard Public Launch</h3>
            <p className="status-text">Coming Soon</p>
            <p>
              Browser extension launching on Chrome Web Store and Firefox Add-ons
              with advanced tracker blocking and privacy features.
            </p>
            <div className="features">
              <span>Advanced anti-fingerprinting</span>
              <span>Custom filter lists</span>
              <span>Real-time dashboard</span>
            </div>
          </div>

          <div className="milestone">
            <h3>GeckoShell Beta</h3>
            <p className="status-text">Coming Soon</p>
            <p>
              Mobile privacy browser with built-in Solana wallet and Web3 dApp support.
            </p>
            <div className="features">
              <span>iOS & Android</span>
              <span>Solana wallet integration</span>
              <span>dApp browser</span>
            </div>
          </div>

          <div className="milestone">
            <h3>$PRICKO Token Launch</h3>
            <p className="status-text">Coming Soon</p>
            <p>
              Fair launch on pump.fun. Token utility activates across all Privacy Gecko tools.
            </p>
            <a href="/tokenomics">View Tokenomics →</a>
          </div>
        </div>
      </section>

      {/* Q2 2025 - PLANNED */}
      <section className="quarter planned">
        <div className="quarter-header">
          <h2>Q2 2025</h2>
          <span className="status">🚀 Planned</span>
        </div>

        <div className="milestones">
          <div className="milestone">
            <h3>GeckoVPN Launch</h3>
            <p>
              Military-grade VPN with strict no-logs policy. 45+ countries,
              WireGuard protocol, unlimited bandwidth.
            </p>
            <div className="features">
              <span>45+ server locations</span>
              <span>No-logs audit verified</span>
              <span>Kill switch included</span>
            </div>
          </div>

          <div className="milestone">
            <h3>BurnerChat Beta</h3>
            <p>
              Disposable chat rooms with end-to-end encryption. Self-destructing
              messages, screenshot detection.
            </p>
            <div className="features">
              <span>Signal Protocol E2EE</span>
              <span>No registration</span>
              <span>Temporary rooms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Q3 2025 - PLANNED */}
      <section className="quarter planned">
        <div className="quarter-header">
          <h2>Q3 2025</h2>
          <span className="status">🚀 Planned</span>
        </div>

        <div className="milestones">
          <div className="milestone">
            <h3>DoxxGuard Launch</h3>
            <p>
              Monitor and protect your digital footprint. Dark web monitoring,
              data breach alerts, assisted removal services.
            </p>
          </div>

          <div className="milestone">
            <h3>GeckoAdvisor Beta</h3>
            <p>
              AI-powered privacy assistant. Personalized security recommendations
              and privacy score analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Q4 2025 - PLANNED */}
      <section className="quarter planned">
        <div className="quarter-header">
          <h2>Q4 2025</h2>
          <span className="status">🚀 Planned</span>
        </div>

        <div className="milestones">
          <div className="milestone">
            <h3>GeckoLock Launch</h3>
            <p>
              Zero-knowledge password manager with cross-device sync.
            </p>
          </div>

          <div className="milestone">
            <h3>GeckoView Beta</h3>
            <p>
              Private video streaming platform. No tracking, no ads.
            </p>
          </div>

          <div className="milestone">
            <h3>GeckoWatch Launch</h3>
            <p>
              Real-time privacy threat monitoring and alerts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Want to learn about $PRICKO token utility?</h2>
        <p>
          See how holding $PRICKO tokens unlocks premium features across
          all Privacy Gecko tools.
        </p>
        <a href="https://pricko.com/tokenomics" className="btn-primary">
          View Token Benefits →
        </a>
      </section>
    </div>
  );
}
```

**Add to navigation:**
```tsx
<Link href="/roadmap">Roadmap</Link>
```

---

## 📊 Shared Data Schema

Create this file for data consistency: `/shared/data.json`

```json
{
  "token": {
    "name": "PRICKO",
    "symbol": "$PRICKO",
    "blockchain": "Solana",
    "tokenType": "SPL Token",
    "totalSupply": 1000000000,
    "launchPlatform": "pump.fun",
    "contractAddress": "TBA",
    "launched": false,
    "distribution": {
      "market": { "percentage": 80, "amount": 800000000 },
      "development": { "percentage": 20, "amount": 200000000 }
    },
    "utilities": [
      "Privacy Tool Access",
      "Governance Rights",
      "Community Benefits",
      "Deflationary Burns"
    ],
    "noStaking": true,
    "noRevenueSharing": true
  },
  "project": {
    "founded": "2024",
    "founders": [
      {
        "name": "GeckoMaster",
        "role": "Co-Founder & Chief Privacy Officer",
        "twitter": "@GeckoMaster"
      },
      {
        "name": "@0xAnonA",
        "role": "Co-Founder & Chief Technology Officer",
        "twitter": "@0xAnonA"
      }
    ]
  },
  "products": [
    {
      "id": "geckoShare",
      "name": "GeckoShare",
      "status": "live",
      "tagline": "Encrypted file sharing, no traces"
    },
    {
      "id": "geckoguard",
      "name": "GeckoGuard",
      "status": "in-review",
      "tagline": "Block trackers, protect your privacy"
    },
    {
      "id": "geckoshell",
      "name": "GeckoShell",
      "status": "beta",
      "tagline": "Private, secure, Web3-enabled mobile browsing"
    }
  ]
}
```

---

## ✅ Implementation Checklist

Use this to track your progress:

### Critical Fixes (Today - 4 hours)
- [ ] Remove ALL staking references (search entire codebase)
- [ ] Add Solana branding (homepage, footer, /token page)
- [ ] Add pump.fun launch info (/token page, homepage banner)
- [ ] Fix founder information (2024, both co-founders)
- [ ] Fix GeckoShell description (mobile browser, not email)
- [ ] Update GeckoGuard status (In Review, not Live)

### High Priority (Tomorrow - 8 hours)
- [ ] Create complete /tokenomics page
- [ ] Create/update /roadmap page (product-focused)
- [ ] Add "Tokenomics" to navigation
- [ ] Add "Roadmap" to navigation
- [ ] Create shared/data.json

### Testing (Day 3 - 4 hours)
- [ ] Run audit agent to verify fixes
- [ ] Check all links work
- [ ] Verify no "staking" mentions remain
- [ ] Cross-check with Pricko.com for consistency
- [ ] Mobile responsiveness check
- [ ] SEO meta tags updated

---

## 🔄 Cross-Site Links

**Add these links on PrivacyGecko.com:**

1. **On /tokenomics page:**
```tsx
<a href="https://pricko.com" target="_blank">
  Visit Pricko.com for more token details →
</a>
```

2. **On product pages with token utility:**
```tsx
<a href="https://pricko.com/tokenomics" target="_blank">
  Learn how $PRICKO unlocks premium features →
</a>
```

3. **On /roadmap page:**
```tsx
<a href="https://pricko.com/roadmap" target="_blank">
  View token utility roadmap →
</a>
```

---

## 🚨 Critical Rules

1. **Product names:** ALWAYS "Gecko[Tool]" format (never "Pricko[Tool]")
2. **Staking:** NEVER mention staking anywhere
3. **Founders:** ALWAYS GeckoMaster + @0xAnonA (both co-founders)
4. **Founded:** ALWAYS 2024 (not 2025)
5. **GeckoShell:** ALWAYS mobile browser (not email service)
6. **Tokenomics:** 80% liquidity, 20% team (must match Pricko.com)
7. **Launch:** ALWAYS mention pump.fun (fair launch)
8. **Blockchain:** ALWAYS mention Solana

---

## 📞 Verification

After implementing all changes, run:

```bash
# Verify no staking mentions
grep -ri "stak" --include="*.tsx" --include="*.ts"
# Should return ZERO results

# Verify founding date
grep -r "2025" --include="*.tsx" | grep -i "found"
# Should return ZERO results (except roadmap Q1/Q2/etc references)

# Verify Solana mentioned
grep -r "Solana" --include="*.tsx" --include="*.ts"
# Should return MULTIPLE results

# Verify pump.fun mentioned
grep -r "pump.fun" --include="*.tsx" --include="*.ts"
# Should return MULTIPLE results
```

---

## 📤 Final Steps

1. **Commit changes to `stage` branch:**
```bash
git add .
git commit -m "fix: Align PrivacyGecko with Pricko data consistency

- Remove all staking references (no staking model)
- Add Solana and pump.fun branding
- Create comprehensive tokenomics page
- Fix founder info (GeckoMaster + @0xAnonA, 2024)
- Fix GeckoShell description (mobile browser)
- Update GeckoGuard status (In Review)
- Add/update roadmap page (product-focused)

Addresses critical data consistency issues from audit.
"
```

2. **Push to remote:**
```bash
git push -u origin stage
```

3. **Notify Pricko-Website team** that PrivacyGecko fixes are complete

4. **Run data-consistency-guardian agent** to verify alignment

---

## 📋 Reference Documents

The following documents were provided for context:
- `assets/docs/1.md` - Critical code fixes
- `assets/docs/2.md` - Brand guidelines
- `assets/docs/3.md` - Product descriptions

These documents contain the exact copy, specifications, and requirements.

---

## 🆘 Need Help?

If you encounter issues:
1. Check the shared/data.json for reference data
2. Compare with Pricko.com implementation
3. Run the audit agent to identify remaining discrepancies
4. Escalate to the orchestrator agent if needed

**Remember:** Every discrepancy is a trust issue. Fix them all.

---

**Generated by:** Pricko-Website Claude Agent
**Date:** October 14, 2025
**Priority:** CRITICAL
**Estimated Time:** 16-20 hours total implementation

🦎 Privacy with a bite
