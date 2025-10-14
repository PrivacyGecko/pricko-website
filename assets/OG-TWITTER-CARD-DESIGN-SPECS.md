# Open Graph & Twitter Card Image Design Specifications
**Project:** PRICKO - Privacy Gecko Approved
**Date:** 2025-10-14
**Agent:** UI/UX Consistency Agent

---

## EXECUTIVE SUMMARY

This document provides complete design specifications for creating Open Graph (OG) and Twitter Card images for Pricko.com. These images appear when the website is shared on social media platforms (Facebook, Twitter, LinkedIn, Discord, Slack, WhatsApp, etc.) and are critical for:
- Brand recognition and consistency
- Social media engagement (proper OG images increase click-through rates by 3-5x)
- Professional appearance across all platforms
- Reinforcing the "privacy + memecoin" positioning

---

## BRAND ASSET ANALYSIS

### Current Logo
- **File:** `/public/logo.png`
- **Dimensions:** 1536 x 1024px (3:2 ratio)
- **Size:** 2.2MB (too large - needs optimization)
- **Design:** Playful gecko mascot character with:
  - Dark teal/navy outline (#0F4C5C approximate)
  - White body
  - Orange accent (fingerprint on chest, tail tip) (#FF9F1C approximate)
  - Friendly, waving pose
  - Spiky hair/crown

### Brand Colors (from Tailwind config)
```css
Primary: #000000 (Pure Black - backgrounds)
Secondary: #18181b (Dark Zinc - cards/sections)
Accent: #4ade80 (Green 400 - primary brand color)
Accent Hover: #22c55e (Green 500 - hover states)
Muted: #d4d4d8 (Zinc 300 - body text)
Border: #27272a (Zinc 800 - borders)
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights Available:** 300, 400, 500, 600, 700, 800, 900
- **Character:** Professional, modern, highly legible

### Brand Voice
- **Primary:** "Memes With a Mission"
- **Secondary:** "Privacy-Focused Memecoin"
- **Positioning:** Crypto-native privacy guardian (playful yet purposeful)

---

## IMAGE SPECIFICATIONS

### 1. OPEN GRAPH IMAGE (`/public/og-image.png`)

#### Technical Requirements
```
Dimensions: 1200 x 630 pixels (1.91:1 ratio)
Format: PNG (transparency not utilized, but format preferred for quality)
Color Mode: RGB
Resolution: 72 DPI (web standard)
File Size Target: <300KB (ideally <150KB)
Compression: Use PNG-8 or PNG-24 with optimization
```

#### Platform Usage
- Facebook feed posts & shares
- LinkedIn post previews
- Discord embeds
- Slack link previews
- WhatsApp link previews
- Default fallback for all social platforms

#### Design Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                           │
│                    [BACKGROUND: #000000]                  │
│                                                           │
│              ┌─────────────────────┐                      │
│              │   GECKO MASCOT      │   150px              │
│              │   (centered)        │   from top           │
│              └─────────────────────┘                      │
│                    280x280px                              │
│                                                           │
│                     PRICKO                    40px        │
│              Privacy Gecko Approved           gap         │
│          [Font: Inter 900, 72pt, #FFFFFF]                 │
│     [Font: Inter 600, 28pt, #4ade80]                      │
│                                                           │
│                                                           │
│           Memes With a Mission                 30px       │
│        Privacy-Focused Memecoin                gap        │
│     [Font: Inter 700, 36pt, #4ade80]                      │
│   [Font: Inter 500, 24pt, #d4d4d8]                        │
│                                                           │
└──────────────────────────────────────────────────────────┘
      1200px wide x 630px tall
```

#### Detailed Element Specifications

**1. Background**
- Color: `#000000` (solid black)
- No gradients (maintains consistency, reduces file size)
- Optional: Subtle radial gradient from center `rgba(74, 222, 128, 0.03)` to transparent for depth

**2. Gecko Mascot**
- Position: Horizontal center, 150px from top
- Size: 280x280px (maintains recognition at thumbnail sizes)
- Source: Extract from `/public/logo.png` (1536x1024px)
- Treatment:
  - Keep original colors (dark teal outline, white body, orange accents)
  - Add subtle drop shadow: `0 8px 16px rgba(0, 0, 0, 0.4)`
  - Optional glow effect: `0 0 40px rgba(74, 222, 128, 0.2)` for brand cohesion

**3. Main Title: "PRICKO"**
- Font: Inter Black (900 weight)
- Size: 72pt (96px)
- Color: `#FFFFFF` (pure white for maximum contrast)
- Position: Centered horizontally, 40px below gecko
- Letter spacing: -1% (tight, impactful)
- Text transform: Uppercase
- Optional: Text shadow `0 4px 12px rgba(74, 222, 128, 0.3)` for depth

**4. Subtitle: "Privacy Gecko Approved"**
- Font: Inter SemiBold (600 weight)
- Size: 28pt (37px)
- Color: `#4ade80` (brand accent green)
- Position: Centered, 12px below "PRICKO"
- Letter spacing: 0% (normal)
- Text transform: Normal case

**5. Tagline: "Memes With a Mission"**
- Font: Inter Bold (700 weight)
- Size: 36pt (48px)
- Color: `#4ade80` (brand accent green)
- Position: Centered, 30px below subtitle
- Letter spacing: -0.5% (slightly tight)

**6. Description: "Privacy-Focused Memecoin"**
- Font: Inter Medium (500 weight)
- Size: 24pt (32px)
- Color: `#d4d4d8` (muted zinc)
- Position: Centered, 12px below tagline
- Letter spacing: 0%

---

### 2. TWITTER CARD IMAGE (`/public/twitter-card.png`)

#### Technical Requirements
```
Dimensions: 1200 x 600 pixels (2:1 ratio)
Format: PNG
Color Mode: RGB
Resolution: 72 DPI
File Size Target: <300KB (ideally <150KB)
Compression: PNG-8 or PNG-24 with optimization
```

#### Platform Usage
- Twitter (X) posts & shares
- Uses Twitter's "summary_large_image" card type
- Displayed in timeline and preview cards

#### Design Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                           │
│                    [BACKGROUND: #000000]                  │
│                                                           │
│         ┌─────────────┐                                   │
│         │   GECKO     │           PRICKO        120px     │
│         │  MASCOT     │    Privacy Gecko Approved  from   │
│         │  260x260px  │  [Inter 900, 64pt, #FFFFFF] top   │
│         └─────────────┘  [Inter 600, 26pt, #4ade80]       │
│           200px                                           │
│         from left         Memes With a Mission            │
│                        Privacy-Focused Memecoin           │
│                      [Inter 700, 32pt, #4ade80]           │
│                      [Inter 500, 22pt, #d4d4d8]           │
│                                                           │
└──────────────────────────────────────────────────────────┘
      1200px wide x 600px tall
```

#### Key Differences from OG Image
- 30px shorter height (600px vs 630px)
- Horizontal layout with gecko on left, text on right (better use of 2:1 ratio)
- Slightly smaller font sizes to accommodate layout
- More balanced composition for Twitter's UI

#### Detailed Element Specifications

**1. Background**
- Color: `#000000` (solid black)
- Same as OG image for consistency

**2. Gecko Mascot**
- Position: 200px from left edge, vertically centered
- Size: 260x260px (slightly smaller due to horizontal layout)
- Same treatment as OG image

**3. Text Block (Right Side)**
- Container: Starts 520px from left (gecko + 60px gap)
- Vertical alignment: Centered
- Width: 620px (with 60px right margin)

**4. Main Title: "PRICKO"**
- Font: Inter Black (900 weight)
- Size: 64pt (85px)
- Color: `#FFFFFF`
- Alignment: Left-aligned within text block
- Letter spacing: -1%

**5. Subtitle: "Privacy Gecko Approved"**
- Font: Inter SemiBold (600 weight)
- Size: 26pt (35px)
- Color: `#4ade80`
- Position: 10px below "PRICKO"
- Alignment: Left-aligned

**6. Tagline: "Memes With a Mission"**
- Font: Inter Bold (700 weight)
- Size: 32pt (43px)
- Color: `#4ade80`
- Position: 24px below subtitle
- Alignment: Left-aligned

**7. Description: "Privacy-Focused Memecoin"**
- Font: Inter Medium (500 weight)
- Size: 22pt (29px)
- Color: `#d4d4d8`
- Position: 10px below tagline
- Alignment: Left-aligned

---

## IMPLEMENTATION GUIDES

### Option 1: Canva (Recommended for Quick Creation)

**BEST FOR:** Non-designers, quick turnaround, professional results

**Step-by-Step Instructions:**

1. **Go to Canva:** https://www.canva.com/
2. **Create Custom Dimensions:**
   - Click "Create a design"
   - Select "Custom size"
   - OG Image: Enter 1200 x 630 px
   - Twitter Card: Enter 1200 x 600 px

3. **Set Background:**
   - Click background
   - Select color
   - Enter hex: `#000000`

4. **Add Gecko Logo:**
   - Click "Uploads" in left sidebar
   - Upload `/public/logo.png`
   - Drag onto canvas
   - Resize to specifications above
   - Position according to layout

5. **Add Text Elements:**
   - Click "Text" in left sidebar
   - Add heading for each text element
   - Font: Search and select "Inter" (free on Canva)
   - Set weights and sizes per specifications
   - Colors:
     - White: `#FFFFFF`
     - Green: `#4ade80`
     - Gray: `#d4d4d8`

6. **Apply Effects (Optional):**
   - Select gecko → Effects → Shadows → Glow
   - Adjust opacity to 20%, color to `#4ade80`
   - Select title text → Effects → Shadow → Drop shadow

7. **Export:**
   - Click "Share" → "Download"
   - File type: PNG
   - Compress: Yes (smart compression)
   - Download

**Canva Template URLs (after creation):**
- Save as template and share link with team
- Name: "PRICKO OG Image - Official"
- Name: "PRICKO Twitter Card - Official"

**Pro Tips:**
- Use Canva's ruler tool (View → Show rulers) for precise positioning
- Enable snap-to-grid for alignment
- Duplicate elements instead of creating new ones for consistency
- Use Canva Pro trial for background remover if needed (7-day free)

---

### Option 2: Figma (Best for Design Systems)

**BEST FOR:** Designers, version control, team collaboration

**Step-by-Step Instructions:**

1. **Create New File:**
   - Go to https://www.figma.com/
   - Click "New design file"
   - Name: "PRICKO Social Media Assets"

2. **Set Frames:**
   - Press `F` for Frame tool
   - Create frame: 1200 x 630 (name: "OG Image")
   - Create frame: 1200 x 600 (name: "Twitter Card")

3. **Add Background:**
   - Select frame
   - Fill: `#000000`

4. **Import Logo:**
   - Drag `/public/logo.png` into Figma
   - Place in frame
   - Resize with constraints (maintain aspect ratio)

5. **Add Text:**
   - Press `T` for Text tool
   - Font: Inter (install from Google Fonts if not available)
   - Set properties panel:
     - Font weight: 900 (Black), 700 (Bold), etc.
     - Font size: As specified
     - Fill: Color codes from specs
   - Use Auto Layout for text stacks (Shift + A)

6. **Add Effects:**
   - Select layer
   - Effects panel (right sidebar)
   - Add Drop Shadow or Layer Blur
   - Settings: X:0, Y:8, Blur:16, Color: `#000000` @ 40%

7. **Export:**
   - Select frame
   - Export settings (right sidebar bottom)
   - Format: PNG
   - Scale: 1x
   - Click "Export OG Image"
   - Repeat for Twitter Card

**Figma Community Resources:**
- Search "social media template" in Figma Community
- Look for "Open Graph" templates
- Customize with PRICKO brand assets

**Download Figma File Template:**
After creating, share file link: File → Share → Copy link

---

### Option 3: Adobe Express (Free Tier Available)

**BEST FOR:** Adobe users, advanced effects, mobile creation

**Instructions:**

1. **Go to:** https://www.adobe.com/express/
2. **Create Custom Size:**
   - Click "Create new"
   - Custom size: 1200 x 630 or 1200 x 600
3. **Follow similar steps to Canva** (interface is very similar)
4. **Export:**
   - Download as PNG
   - Quality: High
   - Format: PNG

---

### Option 4: Photoshop/GIMP (For Advanced Users)

**BEST FOR:** Pixel-perfect control, advanced effects, existing workflow

**Photoshop Instructions:**

1. **New Document:**
   - File → New
   - Width: 1200 px, Height: 630 px (or 600 px)
   - Resolution: 72 ppi
   - Color Mode: RGB
   - Background: Black

2. **Add Gecko:**
   - File → Place Embedded → Select logo.png
   - Resize with Shift held (maintain ratio)
   - Position using guides (View → New Guide)

3. **Add Text:**
   - Type tool (T)
   - Font: Inter (download from Google Fonts if needed)
   - Character panel: Set weight, size, color
   - Use Character Styles for consistency

4. **Effects:**
   - Layer → Layer Style → Drop Shadow
   - Layer → Layer Style → Outer Glow
   - Settings per specifications

5. **Export:**
   - File → Export → Export As
   - Format: PNG-24
   - Check "Convert to sRGB"
   - Click Export

**GIMP Instructions (Free Alternative):**

1. **New Image:**
   - File → New
   - Width: 1200, Height: 630 (or 600)
   - Fill with: Black
   - Advanced Options → Color space: RGB

2. **Import Logo:**
   - File → Open as Layers → logo.png
   - Scale tool (Shift + S)
   - Chain link icon = maintain ratio
   - Move tool (M) to position

3. **Add Text:**
   - Text tool (T)
   - Font: Inter (install from Google Fonts)
   - Tool Options: Set size, color
   - Create separate layer for each text element

4. **Effects:**
   - Filters → Light and Shadow → Drop Shadow
   - Filters → Light and Shadow → Glow

5. **Export:**
   - File → Export As
   - File type: PNG
   - Compression level: 6-7
   - Save interlacing: None
   - Export

---

## OPTIMIZATION & FILE SIZE

### PNG Optimization Tools

After creating images, optimize file size:

**Online Tools (Free):**
1. **TinyPNG:** https://tinypng.com/
   - Drag both images
   - Download compressed versions
   - Typically reduces by 60-80% with no visible quality loss

2. **Squoosh:** https://squoosh.app/ (Google)
   - Advanced compression options
   - Side-by-side comparison
   - Fine-tune quality vs file size

3. **ImageOptim:** https://imageoptim.com/ (Mac only)
   - Drag and drop
   - Automatic optimization
   - Removes metadata

**Command Line (Advanced):**
```bash
# Install optipng
brew install optipng

# Optimize
optipng -o7 og-image.png
optipng -o7 twitter-card.png
```

**Target File Sizes:**
- OG Image: <150KB (max 300KB)
- Twitter Card: <150KB (max 300KB)

**Quality Checklist:**
- No visible artifacts or banding
- Text is crisp and readable at thumbnail size (200x105px)
- Gecko mascot is recognizable
- Colors match brand specifications (use eyedropper tool to verify)

---

## FILE NAMING & PLACEMENT

### File Names
```
/public/og-image.png          (Open Graph)
/public/twitter-card.png      (Twitter Card)
```

**Naming Convention Rules:**
- Lowercase only
- Hyphens for spaces (not underscores)
- Descriptive and consistent
- No version numbers in filename (use git for versioning)

### Directory Structure
```
/public/
├── og-image.png              ← 1200x630px, <300KB
├── twitter-card.png          ← 1200x600px, <300KB
├── logo.png                  ← Existing (needs optimization)
├── chat.png
├── file-sharing-icon.png
├── file-sharing.png
├── shield.png
└── vpn.png
```

### HTML Meta Tag Updates

**Current State (in `/index.html`):**
```html
<meta property="og:image" content="/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
```

**Required Updates (after creating images):**
```html
<!-- Open Graph -->
<meta property="og:title" content="PRICKO - Memes With a Mission" />
<meta property="og:description" content="Privacy-focused memecoin with real utility. Solana-powered privacy tools. Decentralized. Irreverent. Gecko-approved." />
<meta property="og:image" content="https://pricko.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="PRICKO - Privacy Gecko Approved. Memes With a Mission." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://pricko.com/" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PRICKO - Memes With a Mission" />
<meta name="twitter:description" content="Privacy-focused memecoin with real utility tools. Solana-powered. Gecko-approved." />
<meta name="twitter:image" content="https://pricko.com/twitter-card.png" />
<meta name="twitter:image:alt" content="PRICKO - Privacy Gecko Approved" />
<meta name="twitter:site" content="@YourTwitterHandle" />
<meta name="twitter:creator" content="@YourTwitterHandle" />
```

**IMPORTANT:** Use absolute URLs (https://pricko.com/) not relative URLs (/og-image.png) for social media crawlers.

---

## TEMPORARY WORKAROUND

**Until custom images are created, use optimized logo:**

### Immediate Actions:

1. **Optimize existing logo:**
```bash
# Navigate to project
cd /Users/pothamsettyk/Projects/Pricko-Website/public

# Create backup
cp logo.png logo-original.png

# Option A: Use TinyPNG online (upload logo.png)
# Option B: Use command line
# brew install imagemagick
# convert logo.png -resize 1200x630^ -gravity center -extent 1200x630 -quality 85 og-image-temp.png
```

2. **Update meta tags to use absolute URL:**
```html
<meta property="og:image" content="https://pricko.com/logo.png" />
<meta property="og:image:width" content="1536" />
<meta property="og:image:height" content="1024" />
```

3. **Verify with testing tools:**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

**Limitations of Temporary Solution:**
- Logo alone lacks context (no text, no tagline)
- Aspect ratio (3:2) is not optimal for OG (1.91:1) or Twitter (2:1)
- 2.2MB file size is too large (increases page load time)
- Less professional appearance compared to custom social cards

---

## OUTSOURCING OPTIONS

### Fiverr (Budget-Friendly)

**Search Terms:**
- "social media banner design"
- "open graph image"
- "twitter card design"
- "facebook cover photo"

**Price Range:** $10-30 USD

**Recommended Sellers:**
- Look for Level 2+ sellers
- Check portfolio for social media work
- Read reviews for responsiveness
- Verify they deliver source files

**What to Provide:**
1. This specification document
2. Logo file (`logo.png`)
3. Brand colors (hex codes)
4. Example screenshots from website
5. Timeline (typically 24-48 hours)

**Deliverables to Request:**
- PNG files at exact dimensions
- Source files (PSD, AI, or Figma)
- Optimized versions <300KB
- 2-3 revision rounds included

### Upwork (Professional Designers)

**Price Range:** $50-150 USD

**Better for:**
- Ongoing design needs
- Multiple social media assets
- Design system creation
- Brand guideline development

### 99designs Contest

**Price Range:** $200-500 USD

**Best for:**
- Multiple design options
- Competitive selection
- Higher-end branding needs

---

## TESTING & VALIDATION

### Pre-Launch Checklist

Before finalizing images:

**Visual Quality:**
- [ ] Gecko mascot is recognizable at thumbnail size (200px wide)
- [ ] Text is readable at small sizes (test at 300px wide)
- [ ] Colors match brand specifications exactly
- [ ] No pixelation or artifacts
- [ ] Consistent with website design language

**Technical Requirements:**
- [ ] OG Image: Exactly 1200 x 630 px
- [ ] Twitter Card: Exactly 1200 x 600 px
- [ ] Both files: PNG format
- [ ] Both files: <300KB file size
- [ ] Both files: RGB color mode
- [ ] Both files: 72 DPI resolution

**Content Accuracy:**
- [ ] "PRICKO" spelling is correct (uppercase)
- [ ] "Privacy Gecko Approved" is present
- [ ] "Memes With a Mission" tagline included
- [ ] "Privacy-Focused Memecoin" description included
- [ ] No typos or grammatical errors

**Brand Consistency:**
- [ ] Matches website color palette
- [ ] Uses Inter font family
- [ ] Gecko matches website logo
- [ ] Professional yet playful tone
- [ ] Consistent with crypto/privacy positioning

### Social Media Preview Testing

**Facebook Debugger:**
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: https://pricko.com/
3. Click "Scrape Again" to refresh cache
4. Verify image displays correctly
5. Check dimensions and title/description

**Twitter Card Validator:**
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: https://pricko.com/
3. Click "Preview card"
4. Verify layout and image quality
5. Test on mobile preview

**LinkedIn Post Inspector:**
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: https://pricko.com/
3. Inspect preview
4. Verify professional appearance

**Discord/Slack:**
- Post URL in test channel
- Verify embed appears correctly
- Check thumbnail quality

**WhatsApp:**
- Send link to yourself
- Check preview appearance

### Mobile Testing

Test on actual devices:
- iPhone (Safari): Check image crop and quality
- Android (Chrome): Verify rendering
- Tablet: Test intermediate sizes

### Cache Busting

If images don't update after changes:
```html
<!-- Add version query parameter -->
<meta property="og:image" content="https://pricko.com/og-image.png?v=2" />
<meta name="twitter:image" content="https://pricko.com/twitter-card.png?v=2" />
```

Or force refresh:
- Facebook: Use Debug Tool → "Scrape Again"
- Twitter: Wait 7 days or change URL slightly
- LinkedIn: Use Post Inspector

---

## ACCESSIBILITY CONSIDERATIONS

### Alt Text

Always include descriptive alt text:

```html
<meta property="og:image:alt" content="PRICKO mascot - a friendly gecko wearing a shirt with a fingerprint. Text reads: PRICKO Privacy Gecko Approved, Memes With a Mission, Privacy-Focused Memecoin" />

<meta name="twitter:image:alt" content="PRICKO - Privacy Gecko Approved. A playful gecko mascot next to the text: Memes With a Mission, Privacy-Focused Memecoin" />
```

**Alt Text Best Practices:**
- Describe the image content
- Include key text visible in image
- Keep under 420 characters (Twitter limit)
- No need to say "image of" or "picture of"
- Focus on informational content

### Color Contrast

Verify text is readable:
- White (#FFFFFF) on Black (#000000): 21:1 (WCAG AAA) ✓
- Green (#4ade80) on Black (#000000): 11.87:1 (WCAG AAA) ✓
- Gray (#d4d4d8) on Black (#000000): 11.95:1 (WCAG AAA) ✓

All combinations exceed WCAG AAA standards (7:1 minimum).

---

## MAINTENANCE & VERSIONING

### Version Control

Store source files in repository:
```
/design-assets/
├── social-media/
│   ├── og-image.psd          (Photoshop source)
│   ├── og-image.fig          (Figma link/export)
│   ├── twitter-card.psd
│   ├── twitter-card.fig
│   └── DESIGN-SPECS.md       (this document)
└── logos/
    └── logo-original.png
```

### Update Triggers

Recreate social images when:
- Logo changes
- Brand colors change
- Tagline or positioning changes
- Major rebrand or redesign
- A/B testing different messaging

### A/B Testing Recommendations

Test variations:
1. **Gecko position:** Left vs center
2. **Color scheme:** Black bg vs green gradient bg
3. **Text emphasis:** "Memes" vs "Privacy" as primary
4. **CTA addition:** "Buy Now" vs no CTA

Track metrics:
- Click-through rate from social media
- Time on site from social referrals
- Bounce rate from social traffic
- Conversion rate by source

---

## ADVANCED ENHANCEMENTS (OPTIONAL)

### Animated Social Cards

For platforms supporting video/GIF:
- **Format:** MP4 or GIF
- **Duration:** 3-6 seconds (looping)
- **Size:** <5MB
- **Animation ideas:**
  - Gecko waving
  - Text fade-in sequence
  - Glow pulse effect around gecko
  - Color shift on brand name

**Platforms supporting video OG:**
- Twitter (Twitter Cards with Player)
- Facebook (video previews)
- LinkedIn (native video posts)

### Dynamic OG Images

For future development:
- Generate images per page (e.g., /tools, /tokenomics, /about)
- Include page-specific content
- Use serverless functions (Vercel OG Image)
- Update based on real-time data (price, holder count)

**Example:**
```
/og-image.png         (homepage)
/tools/og-image.png   (tools page)
/tokenomics/og-image.png (tokenomics page)
```

### Localization

For international audiences:
- Create versions in multiple languages
- Maintain consistent visual design
- Use appropriate character sets (UTF-8)
- File naming: `og-image-es.png`, `og-image-fr.png`

---

## SUCCESS METRICS

### KPIs to Track Post-Implementation

**Engagement Metrics:**
- Click-through rate from social media (target: >3%)
- Share rate on social platforms
- Social media referral traffic increase

**Technical Metrics:**
- Image load time (<1 second)
- Cache hit rate (>90%)
- Proper rendering across platforms (100%)

**Brand Metrics:**
- Brand recall from social preview
- Professional perception score
- Consistency rating with website

**Comparison Baseline:**
- Current CTR with logo.png only
- Current social referral traffic
- Current bounce rate from social

**Target Improvements:**
- 200-300% increase in CTR from social media
- 50% reduction in bounce rate from social referrals
- 100% proper rendering across platforms

---

## FREQUENTLY ASKED QUESTIONS

**Q: Why two different images (OG and Twitter)?**
A: Different platforms have different optimal aspect ratios. OG (1.91:1) works best for Facebook/LinkedIn, while Twitter prefers 2:1. Using optimized images for each ensures the best presentation.

**Q: Can I use the same image for both?**
A: Yes, but it's not ideal. The 30px height difference means Twitter will crop the bottom of your OG image, potentially cutting off text. Better to create both.

**Q: Do I need to update these often?**
A: No. Social cards are typically "set and forget" unless you rebrand, change taglines, or want to A/B test messaging.

**Q: What if my image doesn't show up on Facebook?**
A: Use the Facebook Debugger tool to scrape your URL. Facebook caches aggressively, so you need to force a refresh after updating images.

**Q: Should I include pricing or holder count?**
A: No. Static images can't update dynamically, so time-sensitive info becomes outdated. Keep to evergreen brand messaging.

**Q: Can I use a screenshot of the website?**
A: Not recommended. Screenshots lack focus, are hard to read at small sizes, and don't convey brand message clearly. Purpose-built social cards perform 3-5x better.

**Q: What about Instagram?**
A: Instagram doesn't use OG images for link previews. If sharing to Instagram, create square posts (1080x1080) or stories (1080x1920) separately.

**Q: How do I know if it's working?**
A: Share your URL on Facebook/Twitter and check the preview. Use validator tools (links in Testing section) to verify proper rendering.

---

## QUICK START CHECKLIST

### For Non-Designers (30 minutes)

- [ ] Open Canva.com (free account)
- [ ] Create 1200 x 630 px canvas (OG Image)
- [ ] Set background to black (#000000)
- [ ] Upload logo.png from `/public/`
- [ ] Add text layers with specifications above
- [ ] Set Inter font, correct weights and colors
- [ ] Export as PNG
- [ ] Upload to TinyPNG.com for compression
- [ ] Repeat for 1200 x 600 px (Twitter Card)
- [ ] Download both files
- [ ] Save as `/public/og-image.png` and `/public/twitter-card.png`
- [ ] Update HTML meta tags with absolute URLs
- [ ] Test with Facebook Debugger and Twitter Validator
- [ ] Deploy to production
- [ ] Share on social media to verify

### For Designers (15 minutes)

- [ ] Open Figma/Photoshop
- [ ] Create artboards per specifications
- [ ] Import logo, add text, apply effects
- [ ] Export optimized PNGs
- [ ] Place in `/public/` directory
- [ ] Update meta tags
- [ ] Test and deploy

### For Outsourcing (24-48 hours)

- [ ] Send this document to designer on Fiverr
- [ ] Provide logo file and brand colors
- [ ] Request 1-2 revisions if needed
- [ ] Verify files meet specifications
- [ ] Optimize with TinyPNG
- [ ] Deploy and test

---

## CONTACT & SUPPORT

**Design Questions:**
- Review this specification document
- Check Pricko website for brand reference
- Use color picker tool to verify hex codes

**Technical Implementation:**
- Refer to HTML meta tag section above
- Use validator tools for testing
- Check browser console for errors

**Tools & Resources:**
- Canva: https://www.canva.com/
- Figma: https://www.figma.com/
- TinyPNG: https://tinypng.com/
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Validator: https://cards-dev.twitter.com/validator

---

## REVISION HISTORY

**Version 1.0 - 2025-10-14**
- Initial specification document
- Created by UI/UX Consistency Agent
- Based on Pricko website brand analysis
- Includes all required technical specifications
- Provides multiple implementation paths

---

## APPENDIX A: COLOR REFERENCE CARD

```
BRAND COLORS - EXACT HEX VALUES

Primary Background:
#000000 (RGB: 0, 0, 0) - Pure Black

Secondary Background:
#18181b (RGB: 24, 24, 27) - Dark Zinc

Accent Primary:
#4ade80 (RGB: 74, 222, 128) - Green 400

Accent Hover:
#22c55e (RGB: 34, 197, 94) - Green 500

Body Text:
#d4d4d8 (RGB: 212, 212, 216) - Zinc 300

Borders:
#27272a (RGB: 39, 39, 42) - Zinc 800

Logo Colors (from mascot):
Gecko Outline: #0F4C5C (approximate)
Gecko Body: #FFFFFF (white)
Orange Accent: #FF9F1C (approximate)
```

---

## APPENDIX B: FONT REFERENCE

```
INTER FONT FAMILY - GOOGLE FONTS

Weights Used:
- 300: Light (not used in social cards)
- 400: Regular (not used in social cards)
- 500: Medium (body text - "Privacy-Focused Memecoin")
- 600: SemiBold (subtitle - "Privacy Gecko Approved")
- 700: Bold (tagline - "Memes With a Mission")
- 800: ExtraBold (not used in social cards)
- 900: Black (main title - "PRICKO")

Download:
https://fonts.google.com/specimen/Inter

Import in HTML:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;900&display=swap" rel="stylesheet">

For Design Tools:
- Download from Google Fonts
- Install on system (Mac: Font Book, Windows: Control Panel)
- Or use web font embedding in Figma
```

---

## APPENDIX C: LAYOUT TEMPLATES (ASCII)

**Open Graph Image - Detailed Grid**
```
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│    │    │    │    │    │    │    │    │    │    │    │    │  150px padding
├────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┤
│                                                             │
│                         ┌─────┐                             │
│                         │     │                             │
│                         │  🦎 │  280x280px                  │  280px gecko
│                         │     │  Gecko Mascot               │
│                         └─────┘                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤  40px gap
│                                                             │
│                        PRICKO                               │  96px height
│                  (Inter 900, 72pt, #FFF)                    │  (text)
│                                                             │
├─────────────────────────────────────────────────────────────┤  12px gap
│                 Privacy Gecko Approved                      │  37px height
│                 (Inter 600, 28pt, #4ade80)                  │
├─────────────────────────────────────────────────────────────┤  30px gap
│                                                             │
│                  Memes With a Mission                       │  48px height
│                 (Inter 700, 36pt, #4ade80)                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤  12px gap
│                Privacy-Focused Memecoin                     │  32px height
│                 (Inter 500, 24pt, #d4d4d8)                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
Total: 1200 x 630 pixels
```

**Twitter Card - Horizontal Layout Grid**
```
┌──────┬──────────────────────────────────────────────────────┐
│      │                                                      │  120px padding top
│      │  PRICKO                                              │
│  🦎  │  (Inter 900, 64pt, #FFF)                             │  85px text
│      │                                                      │
│ 260  │  Privacy Gecko Approved                              │  10px gap
│  x   │  (Inter 600, 26pt, #4ade80)                          │  35px text
│ 260  │                                                      │
│  px  │  ────────────────                                    │  24px gap
│      │                                                      │
│Gecko │  Memes With a Mission                                │  43px text
│      │  (Inter 700, 32pt, #4ade80)                          │
│      │                                                      │
│      │  Privacy-Focused Memecoin                            │  10px gap
│      │  (Inter 500, 22pt, #d4d4d8)                          │  29px text
│      │                                                      │
└──────┴──────────────────────────────────────────────────────┘
 200px    Text starts 520px from left (60px gap)
from left  Ends 60px from right edge
Total: 1200 x 600 pixels
```

---

**END OF SPECIFICATION DOCUMENT**

---

**IMPLEMENTATION STATUS:**
- [ ] OG Image created
- [ ] Twitter Card created
- [ ] Files optimized (<300KB)
- [ ] Files placed in `/public/`
- [ ] HTML meta tags updated
- [ ] Tested on Facebook
- [ ] Tested on Twitter
- [ ] Tested on LinkedIn
- [ ] Deployed to production
- [ ] Verified on live site

**NEXT STEPS:**
1. Choose creation method (Canva recommended)
2. Create both images following specifications
3. Optimize files with TinyPNG
4. Update HTML meta tags (see section above)
5. Test with validation tools
6. Deploy and verify

**ESTIMATED TIME TO COMPLETE:**
- Design: 30-60 minutes (Canva) or 15-30 minutes (Figma)
- Optimization: 5 minutes
- Implementation: 10 minutes
- Testing: 10 minutes
**Total: 55-85 minutes**

Or hire on Fiverr: 24-48 hours, $10-30 USD
