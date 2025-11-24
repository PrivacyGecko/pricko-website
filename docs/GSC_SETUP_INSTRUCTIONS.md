# Google Search Console Setup Instructions

This document provides step-by-step instructions for verifying the pricko.com domain with Google Search Console and submitting the sitemap.

## Prerequisites

- Access to Google Search Console (search.google.com/search-console)
- Admin access to the website's codebase (already completed)
- Domain ownership verification capability

---

## Step 1: Verify Domain Ownership

### Option A: HTML Meta Tag Verification (Recommended - Already Implemented)

1. **Navigate to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Log in with your Google account

2. **Add Property**
   - Click "Add Property" in the top-left dropdown
   - Select "URL prefix" property type
   - Enter: `https://pricko.com`

3. **Choose Verification Method**
   - Select "HTML tag" verification method
   - Google will provide a verification meta tag like:
     ```html
     <meta name="google-site-verification" content="abc123xyz..." />
     ```

4. **Update index.html with Verification Code**
   - Replace `YOUR_VERIFICATION_CODE_HERE` in `/index.html` (line 14) with your actual verification code
   - The line should look like:
     ```html
     <meta name="google-site-verification" content="abc123xyz..." />
     ```
   - Deploy the updated `index.html` to production

5. **Verify in GSC**
   - Return to Google Search Console
   - Click "Verify" button
   - Google will check for the meta tag on your live site
   - If successful, you'll see "Ownership verified" confirmation

### Option B: DNS Verification (Alternative)

If you prefer DNS verification:
1. Choose "DNS record" verification method in GSC
2. Add the provided TXT record to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Return to GSC and click "Verify"

---

## Step 2: Submit Sitemap

Once verification is complete:

1. **Access Sitemaps Section**
   - In Google Search Console, navigate to "Sitemaps" in the left sidebar
   - URL: https://search.google.com/search-console/sitemaps

2. **Submit Sitemap URL**
   - In the "Add a new sitemap" field, enter:
     ```
     https://pricko.com/sitemap.xml
     ```
   - Click "Submit"

3. **Verify Submission**
   - The sitemap should appear in the list with status "Success"
   - Google will begin crawling the URLs in your sitemap
   - Initial indexing may take 1-7 days

4. **Current Sitemap Contents**
   - Homepage: `/`
   - About: `/about`
   - Tools: `/tools`
   - Tokenomics: `/tokenomics`
   - How to Buy: `/how-to-buy`
   - Roadmap: `/roadmap`
   - Contact: `/contact`
   - Privacy Policy: `/privacy`
   - Terms of Service: `/terms`
   - Disclaimer: `/disclaimer`
   - Product Pages: Will be added in Phase 2 (8 additional routes)

---

## Step 3: Initial Configuration

After verification and sitemap submission, configure these essential settings:

### 3.1 Set Preferred Domain
- Go to Settings > Crawling
- Ensure `https://pricko.com` (with HTTPS) is the preferred version

### 3.2 Configure International Targeting (Optional)
- Go to Settings > International Targeting
- Set target country if applicable (e.g., United States)

### 3.3 Monitor Coverage
- Check "Coverage" report regularly
- Fix any errors or warnings that appear
- Monitor indexed pages vs. submitted pages

### 3.4 Submit URL for Immediate Indexing (Optional)
- Use URL Inspection tool for critical pages:
  - `https://pricko.com/` (homepage)
  - `https://pricko.com/tokenomics`
  - `https://pricko.com/how-to-buy`
- Click "Request Indexing" to prioritize these URLs

---

## Step 4: Ongoing Monitoring Checklist

### Weekly Tasks
- [ ] Check Coverage report for new errors
- [ ] Review Performance report for search queries and impressions
- [ ] Monitor Core Web Vitals (Page Experience report)

### Monthly Tasks
- [ ] Analyze top-performing pages and queries
- [ ] Identify pages with declining performance
- [ ] Check for manual actions or security issues
- [ ] Review mobile usability report

### After Major Updates
- [ ] Resubmit sitemap if new pages are added
- [ ] Use URL Inspection tool for critical new pages
- [ ] Monitor Coverage report for indexing status

---

## Expected Outcomes & Timeline

| Milestone | Expected Timeframe |
|-----------|-------------------|
| Verification complete | Immediate (once meta tag deployed) |
| Sitemap submitted | 5 minutes post-verification |
| First crawl begins | 1-24 hours |
| Initial pages indexed | 1-7 days |
| Full indexing | 7-30 days |
| Performance data available | 2-3 days after indexing |

---

## Troubleshooting

### Verification Failed
- **Issue**: "Could not verify ownership"
- **Solution**: 
  - Ensure meta tag is in `<head>` section
  - Check that updated `index.html` is deployed to production
  - Clear CDN cache if using one
  - Wait 5 minutes and retry

### Sitemap Not Found
- **Issue**: "Couldn't fetch sitemap" error
- **Solution**:
  - Verify sitemap is accessible at: https://pricko.com/sitemap.xml
  - Check that sitemap.xml is properly formatted XML
  - Ensure no robots.txt blocking Google

### Pages Not Indexing
- **Issue**: Submitted URLs not appearing in search
- **Solution**:
  - Check Coverage report for specific errors
  - Verify pages return 200 status code
  - Ensure no `noindex` meta tags on pages
  - Use URL Inspection tool to request indexing

---

## Additional Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **Sitemap Protocol**: https://www.sitemaps.org/protocol.html
- **Structured Data Testing**: https://search.google.com/test/rich-results

---

## Plausible Analytics Integration

In addition to Google Search Console, this website uses Plausible Analytics for privacy-friendly, GDPR-compliant tracking.

**Benefits:**
- No cookies or personal data collection
- GDPR, CCPA, PECR compliant by default
- Lightweight (<1KB script)
- Real-time dashboard

**Access Dashboard:**
- URL: https://plausible.io/pricko.com
- Login required (credentials with site owner)

**Tracked Events:**
- Page views (automatic)
- Newsletter signups (custom event)
- Waitlist clicks (custom event)
- External tool links (custom event)
- "How to Buy" CTA clicks (custom event)

See `/src/utils/analytics.ts` for implementation details.

---

**Last Updated:** October 31, 2025  
**Maintainer:** Privacy Gecko Team  
**Contact:** contact@privacygecko.com
