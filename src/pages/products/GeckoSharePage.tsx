import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoSharePage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoShare');
  
  useEffect(() => {
    trackPageView('/gecko-share');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Get Instant Upload Link",
      description: "No signup required. Visit Gecko Share and get an instant, unique upload link. Works in any browser."
    },
    {
      step: 2,
      title: "Upload Files Securely",
      description: "Drag and drop files or browse to select. All files are encrypted with AES-256 before leaving your device. Zero-knowledge architecture."
    },
    {
      step: 3,
      title: "Share the Link",
      description: "Copy the secure download link and share it with recipients. Links are time-limited and can be password-protected."
    },
    {
      step: 4,
      title: "Track & Manage (Pro)",
      description: "Pro users get persistent vault storage, download tracking, and file management dashboard. Upgrade with $PRICKO tokens."
    }
  ];
  
  const faqs = [
    {
      question: "How secure is Gecko Share?",
      answer: "Gecko Share uses client-side AES-256 encryption. Files are encrypted in your browser before upload, meaning we never see your unencrypted data. Zero-knowledge architecture ensures maximum privacy."
    },
    {
      question: "What are the file size limits?",
      answer: "Free users: 5GB per file, 24-hour retention. Pro users (with $PRICKO tokens): Unlimited file sizes, persistent vault storage, and priority upload speeds."
    },
    {
      question: "Are my files really deleted after 24 hours?",
      answer: "Yes. Free tier files are automatically deleted after 24 hours with no backup copies. Pro users can choose retention periods or keep files indefinitely in their encrypted vault."
    },
    {
      question: "Can I use Gecko Share without an account?",
      answer: "Absolutely! Free tier requires zero signup. Just visit, upload, and share. For Pro features (persistent storage, management dashboard), connect your Solana wallet with $PRICKO tokens."
    },
    {
      question: "How is Gecko Share different from Dropbox or Google Drive?",
      answer: "Gecko Share is zero-knowledge encrypted (we can't see your files), requires no signup for basic use, and is designed for secure one-time sharing, not long-term storage. Privacy-first, not profit-first."
    },
    {
      question: "What happens if I lose my upload link?",
      answer: "Free tier: Links are one-time generated. If lost, the file is inaccessible (by design for security). Pro tier: All uploads are saved to your vault dashboard for easy retrieval."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="Gecko Share - Encrypted File Sharing | Privacy Gecko"
      pageDescription="Zero-knowledge encrypted file sharing with instant uploads and persistent vault storage. Token-gated premium features. Share files securely without compromising privacy."
      canonicalUrl="/gecko-share"
    />
  );
};

export default GeckoSharePage;
