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
      title: "Track & Manage",
      description: "Access persistent vault storage, download tracking, and file management dashboard. All features are FREE during Phase 1."
    }
  ];
  
  const faqs = [
    {
      question: "How secure is Gecko Share?",
      answer: "Gecko Share uses client-side AES-256 encryption. Files are encrypted in your browser before upload, meaning we never see your unencrypted data. Zero-knowledge architecture ensures maximum privacy."
    },
    {
      question: "What are the file size limits?",
      answer: "During Phase 1, all users get: 5GB per file, persistent vault storage, and priority upload speeds. All features are FREE."
    },
    {
      question: "How long are files stored?",
      answer: "During Phase 1, all files are stored in your persistent encrypted vault with no automatic deletion. You control your data retention."
    },
    {
      question: "Can I use Gecko Share without an account?",
      answer: "Absolutely! No signup required. Just visit, upload, and share. All features including persistent storage and management dashboard are FREE during Phase 1."
    },
    {
      question: "How is Gecko Share different from Dropbox or Google Drive?",
      answer: "Gecko Share is zero-knowledge encrypted (we can't see your files), requires no signup for basic use, and is designed for secure one-time sharing, not long-term storage. Privacy-first, not profit-first."
    },
    {
      question: "What happens if I lose my upload link?",
      answer: "All uploads are saved to your vault dashboard for easy retrieval. You can access your files anytime through the management interface."
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
