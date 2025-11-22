import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';
import ProductHero from './ProductHero';
import ProductFeatures from './ProductFeatures';
import ProductHowItWorks, { type Step } from './ProductHowItWorks';
import ProductSecurity from './ProductSecurity';
import ProductFAQ, { type FAQ } from './ProductFAQ';
import ProductCTA from './ProductCTA';
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
      <div className="min-h-screen bg-primary text-white">
        {/* Hero Section */}
        <ProductHero product={product} />

        {/* Features Section */}
        <ProductFeatures features={product.features} />

        {/* How It Works Section */}
        <ProductHowItWorks steps={howItWorks} />

        {/* Security Section */}
        <ProductSecurity security={product.security} />

        {/* Phase 1 Free Access Section - Replaces Pricing */}
        <section className="section-padding bg-gradient-to-b from-black via-accent/5 to-black">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">100% Free</span> During Phase 1
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto mb-6"></div>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                All features unlocked at no cost. Experience the full power of {product.name} before our token launch.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card-glass p-8 border border-accent/30">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <FaRocket className="text-accent text-3xl" />
                  <h3 className="text-2xl font-bold">Phase 1 Access</h3>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No account required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0" />
                    <span className="text-gray-300">All premium features unlocked</span>
                  </li>
                </ul>

                <p className="text-sm text-muted text-center mb-6">
                  After Phase 1, $PRICKO token holders will gain exclusive benefits and priority access.
                </p>

                {product.url ? (
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="btn-primary w-full py-3">
                      Try {product.name} Free
                    </button>
                  </a>
                ) : (
                  <button className="btn-secondary w-full py-3" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

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
