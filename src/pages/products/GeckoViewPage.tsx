import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoViewPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoView');
  
  useEffect(() => {
    trackPageView('/gecko-view');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Save Content Instantly",
      description: "One-click browser extension to save articles, PDFs, and web pages. Works on Chrome, Firefox, Edge, and Brave."
    },
    {
      step: 2,
      title: "AI Summarization",
      description: "Get instant AI-powered summaries using GPT-3.5 or GPT-4. Highlights key points, main arguments, and actionable takeaways in seconds."
    },
    {
      step: 3,
      title: "Encrypted Bookmarks",
      description: "All saved content encrypted end-to-end with AES-256. Your reading list, notes, and annotations are private and synced across devices."
    },
    {
      step: 4,
      title: "Smart Organization",
      description: "AI-powered tagging, collections, and full-text search. Find what you need instantly with intelligent categorization and recommendations."
    }
  ];
  
  const faqs = [
    {
      question: "How is GeckoView different from Pocket or Instapaper?",
      answer: "GeckoView adds AI-powered summarization with GPT-3.5 and GPT-4, plus end-to-end encryption for all saved content. Unlike Pocket (owned by Mozilla), we don't analyze your reading habits or serve recommendations based on tracking."
    },
    {
      question: "Does AI summarization work offline?",
      answer: "No. AI summarization requires internet connection to access OpenAI models. However, saved articles are available offline in full text once cached. Pro users can download summaries for offline reading."
    },
    {
      question: "Can I share bookmarks with my team?",
      answer: "Yes! Pro tier includes collaborative collections where team members can share bookmarks, annotations, and notes. All collaboration is end-to-end encrypted."
    },
    {
      question: "What AI models does GeckoView use?",
      answer: "Free tier: GPT-3.5 (10 summaries/month). Pro tier: GPT-3.5 unlimited + GPT-4 for complex articles. We're exploring local AI models for Q3 2026 to reduce dependency on OpenAI."
    },
    {
      question: "How much does GeckoView cost?",
      answer: "Free: 10 AI summaries/month + basic bookmarks. Pro: $12.99/month or 250 $PRICKO tokens for unlimited summaries, GPT-4 access, team collaboration, and advanced search."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="GeckoView - AI Content Summarization | Privacy Gecko"
      pageDescription="AI-powered content summarization with end-to-end encrypted bookmarks. Save and summarize web articles using GPT-3.5 and GPT-4."
      canonicalUrl="/gecko-view"
    />
  );
};

export default GeckoViewPage;
