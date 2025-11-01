/**
 * Analytics utility for Plausible Analytics integration
 * Privacy-friendly, GDPR-compliant tracking with no cookies
 * 
 * Documentation: https://plausible.io/docs
 */

// Declare plausible function type
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

/**
 * Check if Plausible Analytics is loaded
 */
const isPlausibleLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.plausible === 'function';
};

/**
 * Track a page view manually
 * Note: Plausible automatically tracks page views, this is for SPA route changes
 * 
 * @param url - The URL to track (optional, defaults to current location)
 */
export const trackPageView = (url?: string): void => {
  if (!isPlausibleLoaded()) {
    console.warn('Plausible Analytics not loaded');
    return;
  }

  const pageUrl = url || window.location.pathname + window.location.search;
  
  window.plausible!('pageview', {
    props: { path: pageUrl }
  });
};

/**
 * Track a custom event
 * 
 * @param eventName - Name of the event (e.g., "Newsletter Signup")
 * @param props - Optional properties to attach to the event
 * 
 * @example
 * trackEvent('Button Click', { button: 'How to Buy', location: 'Hero' });
 */
export const trackEvent = (
  eventName: string, 
  props?: Record<string, string | number | boolean>
): void => {
  if (!isPlausibleLoaded()) {
    console.warn('Plausible Analytics not loaded');
    return;
  }

  window.plausible!(eventName, { props });
};

/**
 * Track conversion events (high-value user actions)
 */
export const trackConversion = {
  /**
   * Track newsletter signup submission
   * @param source - Where the signup originated (e.g., "Footer", "Popup", "Contact Page")
   */
  newsletterSignup: (source: string = 'Unknown'): void => {
    trackEvent('Newsletter Signup', { source });
  },

  /**
   * Track waitlist join
   * @param product - Which product waitlist (e.g., "Gecko Shell", "Gecko Lock")
   */
  waitlistJoin: (product: string): void => {
    trackEvent('Waitlist Join', { product });
  },

  /**
   * Track external tool clicks (Gecko Advisor, Gecko Share, etc.)
   * @param tool - Name of the tool (e.g., "Gecko Advisor", "Gecko Share")
   * @param location - Where the link was clicked (e.g., "Tools Page", "Hero")
   */
  externalToolClick: (tool: string, location: string = 'Unknown'): void => {
    trackEvent('External Tool Click', { tool, location });
  },

  /**
   * Track "How to Buy" CTA clicks
   * @param location - Where the CTA was clicked (e.g., "Hero", "Tokenomics Page")
   */
  howToBuyClick: (location: string = 'Unknown'): void => {
    trackEvent('How to Buy Click', { location });
  },

  /**
   * Track Discord/Telegram/Twitter link clicks
   * @param platform - Social platform name (e.g., "Discord", "Telegram", "Twitter")
   * @param location - Where the link was clicked (e.g., "Footer", "Contact Page")
   */
  socialClick: (platform: string, location: string = 'Unknown'): void => {
    trackEvent('Social Link Click', { platform, location });
  },

  /**
   * Track wallet connection attempts
   * @param walletType - Type of wallet (e.g., "Phantom", "Solflare")
   * @param success - Whether connection was successful
   */
  walletConnect: (walletType: string, success: boolean): void => {
    trackEvent('Wallet Connect', { 
      walletType, 
      status: success ? 'Success' : 'Failed' 
    });
  },

  /**
   * Track token contract address copy
   */
  contractAddressCopy: (): void => {
    trackEvent('Contract Address Copy');
  },

  /**
   * Track whitepaper/documentation downloads
   * @param documentType - Type of document (e.g., "Whitepaper", "Technical Docs")
   */
  documentDownload: (documentType: string): void => {
    trackEvent('Document Download', { documentType });
  },

  /**
   * Track product page visits (for individual product pages)
   * @param productName - Name of the product (e.g., "Gecko Advisor", "Gecko Share")
   */
  productPageView: (productName: string): void => {
    trackEvent('Product Page View', { product: productName });
  },

  /**
   * Track CTA clicks from product pages
   * @param productName - Product name
   * @param ctaType - Type of CTA (e.g., "Try Now", "Join Waitlist", "Learn More")
   */
  productPageCTA: (productName: string, ctaType: string): void => {
    trackEvent('Product Page CTA', { product: productName, ctaType });
  }
};

/**
 * Track outbound link clicks automatically
 * Attach this to anchor tags with data-analytics="outbound"
 * 
 * @param url - Destination URL
 * @param linkText - Text of the link
 */
export const trackOutboundLink = (url: string, linkText?: string): void => {
  trackEvent('Outbound Link', { 
    url, 
    linkText: linkText || 'Unknown' 
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form (e.g., "Contact Form", "Whitelist Form")
 * @param success - Whether submission was successful
 */
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent('Form Submission', { 
    form: formName, 
    status: success ? 'Success' : 'Failed' 
  });
};

/**
 * Track search queries (if implementing site search)
 * @param query - Search query string
 * @param resultsCount - Number of results returned
 */
export const trackSearch = (query: string, resultsCount: number): void => {
  trackEvent('Site Search', { 
    query, 
    resultsCount 
  });
};

/**
 * Track video plays (if embedding videos)
 * @param videoTitle - Title of the video
 * @param platform - Platform (e.g., "YouTube", "Vimeo")
 */
export const trackVideoPlay = (videoTitle: string, platform: string = 'Unknown'): void => {
  trackEvent('Video Play', { 
    video: videoTitle, 
    platform 
  });
};

/**
 * Track file downloads (e.g., whitepaper PDFs, guides)
 * @param fileName - Name of the downloaded file
 * @param fileType - File extension (e.g., "PDF", "ZIP")
 */
export const trackFileDownload = (fileName: string, fileType: string): void => {
  trackEvent('File Download', { 
    fileName, 
    fileType 
  });
};

/**
 * Track error events for debugging (404s, API failures, etc.)
 * @param errorType - Type of error (e.g., "404", "API Error")
 * @param errorMessage - Error message or page URL
 */
export const trackError = (errorType: string, errorMessage: string): void => {
  trackEvent('Error', { 
    errorType, 
    message: errorMessage 
  });
};

// Export default object for convenience
export default {
  trackPageView,
  trackEvent,
  trackConversion,
  trackOutboundLink,
  trackFormSubmission,
  trackSearch,
  trackVideoPlay,
  trackFileDownload,
  trackError
};
