import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoLockPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoLock');
  
  useEffect(() => {
    trackPageView('/gecko-lock');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Create Master Password",
      description: "Set a single master password encrypted with AES-256. This is the only password you'll ever need to remember."
    },
    {
      step: 2,
      title: "Store Passwords Securely",
      description: "All passwords encrypted locally on your device, never on our servers. Zero-knowledge architecture means we can't access your vault even if we wanted to."
    },
    {
      step: 3,
      title: "Auto-Fill Login Forms",
      description: "One-click login for all your favorite websites and apps. Browser extension integrates seamlessly with Chrome, Firefox, Edge, and Brave."
    },
    {
      step: 4,
      title: "Sync Across Devices",
      description: "End-to-end encrypted sync via blockchain (optional). Your encrypted vault syncs across desktop, mobile, and browser extensions without our servers seeing your data."
    }
  ];
  
  const faqs = [
    {
      question: "How is GeckoLock different from LastPass or 1Password?",
      answer: "GeckoLock uses zero-knowledge encryption and blockchain sync. We literally cannot access your passwords - no backdoors, no master keys, no recovery by support. Your master password never leaves your device."
    },
    {
      question: "What happens if I forget my master password?",
      answer: "We cannot recover it. You'll need your recovery key (generated during setup). This is the tradeoff for true privacy - no one, not even Privacy Gecko, can access your vault without your master password."
    },
    {
      question: "Can I import passwords from other password managers?",
      answer: "Yes. GeckoLock supports imports from LastPass, 1Password, Bitwarden, Dashlane, Chrome, Firefox, and Safari. CSV and encrypted exports supported for secure migration."
    },
    {
      question: "Is GeckoLock available on mobile?",
      answer: "Android and iOS apps coming Q3 2026. Browser extension (Chrome, Firefox, Edge, Brave) launching January 2026. Early beta testers can join our waitlist."
    },
    {
      question: "How much does GeckoLock cost?",
      answer: "Free for up to 50 passwords with single device access. Unlimited passwords with cross-platform sync: $4.99/month or 100 $PRICKO tokens (one-time, lifetime access)."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="GeckoLock - Encrypted Password Manager | Privacy Gecko"
      pageDescription="Zero-knowledge password manager with blockchain sync. AES-256 encryption. Import from LastPass, 1Password, Bitwarden."
      canonicalUrl="/gecko-lock"
    />
  );
};

export default GeckoLockPage;
