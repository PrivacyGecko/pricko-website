import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoShellPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoShell');
  
  useEffect(() => {
    trackPageView('/gecko-shell');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Download & Install",
      description: "Download Gecko Shell from App Store or Google Play in under 2 minutes. No account required to start browsing privately."
    },
    {
      step: 2,
      title: "Browse Privately",
      description: "Built-in VPN and tracker blocking automatically protect your mobile browsing. Privacy features are enabled by default."
    },
    {
      step: 3,
      title: "Zero Data Collection",
      description: "No browsing history, no cookies, no fingerprinting - complete privacy on mobile. Your data never leaves your device."
    },
    {
      step: 4,
      title: "Sync Across Devices",
      description: "Optional encrypted sync for bookmarks and settings (never browsing data). Uses blockchain for secure cross-device sync."
    }
  ];
  
  const faqs = [
    {
      question: "How is Gecko Shell different from other mobile browsers?",
      answer: "Gecko Shell is built privacy-first with VPN and tracker blocking integrated by default. Most mobile browsers collect extensive telemetry - we collect zero data. Plus, our plugin system lets you extend functionality while maintaining security."
    },
    {
      question: "Does Gecko Shell slow down browsing?",
      answer: "No. Despite having VPN and blocking, Gecko Shell is optimized for speed and uses less battery than Chrome or Safari. Our tests show 15-20% faster page loads due to blocking resource-heavy trackers and ads."
    },
    {
      question: "Can I use my favorite extensions?",
      answer: "Gecko Shell supports limited extensions for security. We pre-install essential privacy extensions and allow whitelisted add-ons. Full plugin marketplace coming in Q2 2026 with curated privacy-respecting extensions."
    },
    {
      question: "Is Gecko Shell available on both iOS and Android?",
      answer: "Currently in beta on Android with 1,800+ testers. iOS version coming April 2026 pending Apple approval. Join our beta program to test early features."
    },
    {
      question: "How much does Gecko Shell cost?",
      answer: "Free with basic privacy features including tracker blocking and private browsing. Pro tier ($2.99/month or 50 $PRICKO tokens) includes advanced VPN servers, encrypted sync, and plugin marketplace access."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="Gecko Shell - Privacy Mobile Browser | Privacy Gecko"
      pageDescription="Mobile browser with built-in VPN and tracker blocking. Zero data collection. Available on Android (Beta) and iOS (Coming Soon)."
      canonicalUrl="/gecko-shell"
    />
  );
};

export default GeckoShellPage;
