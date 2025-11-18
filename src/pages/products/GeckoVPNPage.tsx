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
      title: "Complete Anonymity",
      description: "No email, no personal info required. True privacy from signup to browsing. All features are FREE during Phase 1."
    }
  ];
  
  const faqs = [
    {
      question: "How is Gecko VPN different from NordVPN or ExpressVPN?",
      answer: "Gecko VPN is 100% open source with an independently verified no-logs policy. No email or personal info required - true anonymous privacy. Plus, all features are FREE during Phase 1."
    },
    {
      question: "What VPN protocol does Gecko VPN use?",
      answer: "WireGuard - the fastest and most secure modern VPN protocol. Up to 4x faster than OpenVPN with better battery life on mobile. OpenVPN and IKEv2 available as fallbacks for compatibility."
    },
    {
      question: "Will Gecko VPN slow down my internet?",
      answer: "Minimal impact. Most users see <10% speed reduction on nearby servers. WireGuard's efficiency means you can stream 4K, game, and torrent without noticeable lag."
    },
    {
      question: "Can I use Gecko VPN for torrenting?",
      answer: "Yes. All servers support P2P traffic with no bandwidth limits. Dedicated torrenting servers in Netherlands, Switzerland, and Romania for optimal performance and legal protection."
    },
    {
      question: "How much does Gecko VPN cost?",
      answer: "All features are FREE during Phase 1! Unlimited bandwidth, all servers, and full functionality at no cost. After launch, $PRICKO token holders will receive exclusive benefits."
    }
  ];
  
  return (
    <ProductPageTemplate 
      product={product}
      howItWorks={howItWorks}
      faqs={faqs}
      pageTitle="Gecko VPN - Anonymous VPN Service | Privacy Gecko"
      pageDescription="WireGuard VPN with no-logs policy and anonymous payment via $PRICKO tokens. 50+ servers in 25+ countries."
      canonicalUrl="/gecko-vpn"
    />
  );
};

export default GeckoVPNPage;
