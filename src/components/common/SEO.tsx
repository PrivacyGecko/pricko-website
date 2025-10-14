import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "PRICKO - Privacy Gecko Approved",
  description = "PRICKO - Privacy-focused memecoin with real utility. Solana-powered meme coin with stealth-mode tools that fight surveillance.",
  keywords = "PRICKO, memecoin, privacy, cryptocurrency, Solana, VPN, encrypted chat, data protection, blockchain, privacy tools",
  ogImage = "/logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
}) => {
  const siteUrl = "https://pricko.com";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="PRICKO" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@PRICKOtoken" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Privacy Gecko" />
    </Helmet>
  );
};

export default SEO;
