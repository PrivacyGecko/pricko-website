import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductHero from './ProductHero';
import ProductFeatures from './ProductFeatures';
import ProductHowItWorks, { type Step } from './ProductHowItWorks';
import ProductSecurity from './ProductSecurity';
import ProductPricing from './ProductPricing';
import ProductFAQ, { type FAQ } from './ProductFAQ';
import ProductCTA from './ProductCTA';
import Breadcrumbs from '../ui/Breadcrumbs';
import type { Product } from '../../types/config';

interface ProductPageTemplateProps {
  product: Product;
  howItWorks: Step[];
  faqs: FAQ[];
  pageTitle?: string;
  pageDescription?: string;
  canonicalUrl?: string;
}

/**
 * ProductPageTemplate Component
 * 
 * Orchestrates all product page components
 * Provides a consistent structure for all product detail pages
 */
const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  product,
  howItWorks,
  faqs,
  pageTitle,
  pageDescription,
  canonicalUrl
}) => {
  // Generate structured data for SEO (Product schema)
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": product.pricing.free.available ? "0" : product.pricing.pro.priceUSD || "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": product.metrics.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.metrics.rating,
      "ratingCount": product.metrics.users || "100"
    } : undefined
  };

  // FAQ structured data for Google
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const keywords = `${product.name}, privacy tools, ${product.category}, ${product.features.slice(0, 3).join(', ')}`;

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle || `${product.name} - ${product.subtitle} | Privacy Gecko`}</title>
        <meta 
          name="description" 
          content={pageDescription || product.description} 
        />
        <meta 
          name="keywords" 
          content={keywords} 
        />
        <meta property="og:title" content={pageTitle || product.name} />
        <meta property="og:description" content={pageDescription || product.description} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <link rel="canonical" href={`https://pricko.com${canonicalUrl}`} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      {/* Page Layout */}
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
        {/* Breadcrumbs Navigation */}
        <div className="container-max px-4 pt-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.name }
            ]}
          />
        </div>

        {/* Hero Section */}
        <ProductHero product={product} />

        {/* Features Section */}
        <ProductFeatures features={product.features} />

        {/* How It Works Section */}
        <ProductHowItWorks steps={howItWorks} />

        {/* Security Section */}
        <ProductSecurity security={product.security} />

        {/* Pricing Section */}
        <ProductPricing pricing={product.pricing} />

        {/* FAQ Section */}
        <ProductFAQ faqs={faqs} />

        {/* CTA Section */}
        <ProductCTA 
          productName={product.name}
          productUrl={product.url}
          status={product.status}
        />
      </div>
    </>
  );
};

export default ProductPageTemplate;
