import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoAdvisorPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoAdvisor');
  
  useEffect(() => {
    trackPageView('/gecko-advisor');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Enter Website URL",
      description: "Paste any website URL into GeckoAdvisor's scanner. Works with any publicly accessible site."
    },
    {
      step: 2,
      title: "AI-Powered Scan",
      description: "Our AI analyzes trackers, cookies, and hidden data collection using EasyPrivacy & WhoTracks.me databases in real-time."
    },
    {
      step: 3,
      title: "Get Privacy Grade",
      description: "Receive an A-F privacy grade with detailed evidence in 5-10 seconds. Clear visual dashboard shows what was found."
    },
    {
      step: 4,
      title: "View Detailed Report",
      description: "See exactly which trackers were found, security headers, TLS configuration, and third-party analysis with recommendations."
    }
  ];
  
  const faqs = [
    {
      question: "How accurate is GeckoAdvisor?",
      answer: "GeckoAdvisor uses industry-standard databases (EasyPrivacy, WhoTracks.me) combined with real-time scanning. Our accuracy rate is 95%+ for tracker detection, verified against manual audits."
    },
    {
      question: "Is my scan data stored?",
      answer: "No. All scans are performed in real-time and results are not stored on our servers. We are privacy-first. Your scan history stays in your browser locally."
    },
    {
      question: "Can I scan any website?",
      answer: "Yes! GeckoAdvisor can scan any publicly accessible website. For password-protected sites or intranets, you'll need to provide access credentials (never stored)."
    },
    {
      question: "Is GeckoAdvisor really free?",
      answer: "100% free with unlimited scans. No account required. No premium tiers. No hidden fees. This is our commitment to privacy advocacy and transparency."
    },
    {
      question: "How often should I scan websites?",
      answer: "We recommend scanning websites quarterly or after major updates. Many sites add new trackers during redesigns or when integrating new services. Set calendar reminders!"
    },
    {
      question: "What trackers does GeckoAdvisor detect?",
      answer: "We detect advertising trackers (Google Analytics, Facebook Pixel), third-party cookies, fingerprinting scripts, social media widgets, and analytics platforms. Our database covers 10,000+ known trackers."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="GeckoAdvisor - Website Privacy Scanner | Privacy Gecko"
      pageDescription="Scan any website to uncover trackers, cookies, and hidden data collection. Get A-F privacy grades in 5-10 seconds. 100% free, unlimited scans."
      canonicalUrl="/gecko-advisor"
    />
  );
};

export default GeckoAdvisorPage;
