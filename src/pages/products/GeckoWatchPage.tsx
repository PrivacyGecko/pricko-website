import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoWatchPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoWatch');
  
  useEffect(() => {
    trackPageView('/gecko-watch');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Connect Your Accounts",
      description: "Link email, social media, and financial accounts you want monitored. Only hashed identifiers are stored - never your passwords or personal details."
    },
    {
      step: 2,
      title: "AI-Powered Monitoring",
      description: "GeckoWatch scans dark web, data breaches, and public leaks 24/7. AI algorithms detect patterns and anomalies to catch breaches faster than traditional services."
    },
    {
      step: 3,
      title: "Instant Alerts",
      description: "Get notified immediately if your data appears in a breach or leak. Email, SMS, and push notifications available (you choose preferred channels)."
    },
    {
      step: 4,
      title: "Guided Remediation",
      description: "Step-by-step instructions to secure compromised accounts. Automated password change recommendations and breach severity scoring."
    }
  ];
  
  const faqs = [
    {
      question: "What data sources does GeckoWatch monitor?",
      answer: "We monitor 50+ data breach databases, dark web marketplaces, paste sites (Pastebin, GitHub Gists), public leaks, and credential dumps. Updated hourly with new breach data from security researchers."
    },
    {
      question: "How quickly will I be notified of a breach?",
      answer: "Usually within 1-6 hours of the breach being publicly disclosed. For major breaches, we aim for under 1 hour. Historical data scans run when you first add an account."
    },
    {
      question: "Is my connected account data stored?",
      answer: "Only hashed email addresses and usernames. We never store passwords, security questions, or personal information. All monitoring uses one-way hashes and secure comparison algorithms."
    },
    {
      question: "Can GeckoWatch prevent data breaches?",
      answer: "No tool can prevent breaches. GeckoWatch helps you respond quickly to minimize damage. Think of it as a smoke detector, not a fire extinguisher - early warning gives you time to act."
    },
    {
      question: "How much does monitoring cost?",
      answer: "Free for 1 email address with basic breach alerts. Monitor unlimited emails/accounts with real-time alerts and API access: $6.99/month or 150 $PRICKO tokens."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="GeckoWatch - Data Breach Monitoring | Privacy Gecko"
      pageDescription="Monitor dark web and data breaches for your email, passwords, and personal info. Instant alerts and guided remediation."
      canonicalUrl="/gecko-watch"
    />
  );
};

export default GeckoWatchPage;
