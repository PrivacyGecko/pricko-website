import React, { useEffect } from 'react';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ProductPageTemplate from '../../components/product/ProductPageTemplate';
import { trackPageView } from '../../utils/analytics';

const GeckoVPNPage: React.FC = () => {
  const { getProduct } = useProjectConfig();
  const product = getProduct('geckoVPN');
  
  useEffect(() => {
    trackPageView('/gecko-vpn');
  }, []);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const howItWorks = [
    {
      step: 1,
      title: "Connect to Network",
      description: "Choose from 50+ servers in 25+ countries. Optimized servers for streaming, torrenting, and general browsing with automatic fastest-server selection."
    },
    {
      step: 2,
      title: "Encrypted Tunnel",
      description: "WireGuard protocol with AES-256 encryption. Military-grade security that's faster than OpenVPN with lower battery usage on mobile."
    },
    {
      step: 3,
      title: "No-Logs Policy",
      description: "We don't track, log, or store your browsing activity - verified by third-party audit. RAM-only servers that automatically wipe data on restart."
    },
    {
      step: 4,
      title: "Pay with $PRICKO",
      description: "Completely anonymous VPN when you pay with $PRICKO tokens. No email, no personal info, no payment traces. True privacy from signup to browsing."
    }
  ];
  
  const faqs = [
    {
      question: "How is GeckoVPN different from NordVPN or ExpressVPN?",
      answer: "GeckoVPN accepts $PRICKO tokens for truly anonymous payment. No email, no personal info required when paying with crypto. Plus, we're 100% open source with independently verified no-logs policy."
    },
    {
      question: "What VPN protocol does GeckoVPN use?",
      answer: "WireGuard - the fastest and most secure modern VPN protocol. Up to 4x faster than OpenVPN with better battery life on mobile. OpenVPN and IKEv2 available as fallbacks for compatibility."
    },
    {
      question: "Will GeckoVPN slow down my internet?",
      answer: "Minimal impact. Most users see <10% speed reduction on nearby servers. WireGuard's efficiency means you can stream 4K, game, and torrent without noticeable lag."
    },
    {
      question: "Can I use GeckoVPN for torrenting?",
      answer: "Yes. All servers support P2P traffic with no bandwidth limits. Dedicated torrenting servers in Netherlands, Switzerland, and Romania for optimal performance and legal protection."
    },
    {
      question: "How much does GeckoVPN cost?",
      answer: "Free tier: 10GB/month with basic servers. Unlimited: $9.99/month or 200 $PRICKO tokens (one-time payment for lifetime access when paid with tokens)."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="GeckoVPN - Anonymous VPN Service | Privacy Gecko"
      pageDescription="WireGuard VPN with no-logs policy and anonymous payment via $PRICKO tokens. 50+ servers in 25+ countries."
      canonicalUrl="/gecko-vpn"
    />
  );
};

export default GeckoVPNPage;
