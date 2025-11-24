import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoGuardPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoGuard');
  
  useEffect(() => {
    trackPageView('/gecko-guard');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Install Extension",
      description: "Add Gecko Guard to Chrome, Firefox, Brave, or Edge in one click. Works on all Chromium and Manifest V3 browsers."
    },
    {
      step: 2,
      title: "Auto-Block Trackers",
      description: "Real-time blocking of ads, trackers, cookies, and fingerprinting scripts. Uses Privacy Gecko's proprietary tracker database plus community filter lists."
    },
    {
      step: 3,
      title: "Privacy Dashboard",
      description: "See exactly what's being blocked on each website with detailed reports. Visual breakdown of trackers, cookies, and third-party requests."
    },
    {
      step: 4,
      title: "Customize Protection",
      description: "Adjust blocking levels from minimal to aggressive based on your needs. Whitelist trusted sites or apply ultimate stealth mode for maximum privacy."
    }
  ];
  
  const faqs = [
    {
      question: "Which browsers support Gecko Guard?",
      answer: "Gecko Guard works on Chrome, Firefox, Brave, Edge, and Opera. Built with Manifest V3 for future-proof compatibility. Safari version coming in 2026 using Safari Web Extensions API."
    },
    {
      question: "Will Gecko Guard break websites?",
      answer: "Rarely. We use smart blocking that preserves site functionality. If a site breaks, you can whitelist it with one click. Our AI-powered detection learns from user feedback to minimize false positives."
    },
    {
      question: "How is this different from uBlock Origin or Privacy Badger?",
      answer: "Gecko Guard combines the best of both with AI-powered detection and Privacy Gecko's proprietary tracker database. We also integrate with Gecko Advisor to provide privacy grades for every website you visit."
    },
    {
      question: "Does Gecko Guard slow down browsing?",
      answer: "No. Blocking trackers actually speeds up page loads by 30-50% on average. Gecko Guard is lightweight and uses minimal CPU and memory compared to competitors."
    },
    {
      question: "Is Gecko Guard open source?",
      answer: "Yes! Code is available on GitHub at github.com/privacygecko/gecko-guard. We believe transparency is essential for privacy products. Security audit completed in Q4 2024."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="Gecko Guard - Privacy Browser Extension | Privacy Gecko"
      pageDescription="Block ads, trackers, and fingerprinting across all major browsers. Open source and 100% free. Available for Chrome, Firefox, Brave, Edge."
      canonicalUrl="/gecko-guard"
    />
  );
};

export default GeckoGuardPage;
