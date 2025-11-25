import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/common/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import PageTransition from './components/common/PageTransition';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePageModern'));
const AboutPage = lazy(() => import('./pages/AboutPageModern'));
const ContactPage = lazy(() => import('./pages/ContactPageModern'));
const ToolsPage = lazy(() => import('./pages/ToolsPageModern'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPageModern'));
const TokenomicsPage = lazy(() => import('./pages/TokenomicsPageModern'));
const HowToBuyPage = lazy(() => import('./pages/HowToBuyPageModern'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const RiskDisclosurePage = lazy(() => import('./pages/legal/RiskDisclosurePage'));
const ForwardLookingStatementsPage = lazy(() => import('./pages/legal/ForwardLookingStatementsPage'));
const GeographicRestrictionsPage = lazy(() => import('./pages/legal/GeographicRestrictionsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPageModern'));

// Product pages
const GeckoAdvisorPage = lazy(() => import('./pages/products/GeckoAdvisorPage'));
const GeckoSharePage = lazy(() => import('./pages/products/GeckoSharePage'));
const GeckoShellPage = lazy(() => import('./pages/products/GeckoShellPage'));
const GeckoGuardPage = lazy(() => import('./pages/products/GeckoGuardPage'));
const GeckoLockPage = lazy(() => import('./pages/products/GeckoLockPage'));
const GeckoWatchPage = lazy(() => import('./pages/products/GeckoWatchPage'));
const GeckoViewPage = lazy(() => import('./pages/products/GeckoViewPage'));
const GeckoVPNPage = lazy(() => import('./pages/products/GeckoVPNPage'));

// Ecosystem page
const EcosystemPage = lazy(() => import('./pages/EcosystemPage'));

// Skeleton loading component for better UX
const SkeletonBlock = ({ className = '' }: { className?: string }) => (
  <div className={`bg-secondary/50 rounded animate-pulse ${className}`} />
);

const LoadingFallback = () => (
  <div className="min-h-screen bg-primary">
    {/* Hero Section Skeleton */}
    <div className="container-max px-4 pt-8 pb-16">
      {/* Hero content skeleton */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12">
        {/* Left side - text content */}
        <div className="flex-1 space-y-6 w-full">
          {/* Badge skeleton */}
          <SkeletonBlock className="h-6 w-32" />
          {/* Title skeleton */}
          <SkeletonBlock className="h-12 w-full max-w-md" />
          <SkeletonBlock className="h-12 w-3/4 max-w-sm" />
          {/* Subtitle skeleton */}
          <SkeletonBlock className="h-6 w-full max-w-lg" />
          <SkeletonBlock className="h-6 w-2/3 max-w-md" />
          {/* CTA buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <SkeletonBlock className="h-12 w-40" />
            <SkeletonBlock className="h-12 w-36" />
          </div>
        </div>
        {/* Right side - mascot skeleton */}
        <div className="flex-shrink-0">
          <SkeletonBlock className="h-64 w-64 lg:h-80 lg:w-80 rounded-full" />
        </div>
      </div>
    </div>

    {/* Content Section Skeleton */}
    <div className="container-max px-4 py-12">
      {/* Section title */}
      <div className="text-center mb-12">
        <SkeletonBlock className="h-8 w-64 mx-auto mb-4" />
        <SkeletonBlock className="h-4 w-96 mx-auto max-w-full" />
      </div>
      {/* Cards grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-secondary/30 rounded-xl p-6 space-y-4">
            <SkeletonBlock className="h-12 w-12 rounded-lg" />
            <SkeletonBlock className="h-6 w-3/4" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/products" element={<PageTransition><ToolsPage /></PageTransition>} />
                <Route path="/tokenomics" element={<PageTransition><TokenomicsPage /></PageTransition>} />
                <Route path="/how-to-buy" element={<PageTransition><HowToBuyPage /></PageTransition>} />
                <Route path="/roadmap" element={<PageTransition><RoadmapPage /></PageTransition>} />
                <Route path="/ecosystem" element={<PageTransition><EcosystemPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><TermsOfServicePage /></PageTransition>} />
                <Route path="/disclaimer" element={<PageTransition><DisclaimerPage /></PageTransition>} />
                <Route path="/risk-disclosure" element={<PageTransition><RiskDisclosurePage /></PageTransition>} />
                <Route path="/forward-looking-statements" element={<PageTransition><ForwardLookingStatementsPage /></PageTransition>} />
                <Route path="/geographic-restrictions" element={<PageTransition><GeographicRestrictionsPage /></PageTransition>} />
                {/* Product Pages */}
                <Route path="/gecko-advisor" element={<PageTransition><GeckoAdvisorPage /></PageTransition>} />
                <Route path="/gecko-share" element={<PageTransition><GeckoSharePage /></PageTransition>} />
                <Route path="/gecko-shell" element={<PageTransition><GeckoShellPage /></PageTransition>} />
                <Route path="/gecko-guard" element={<PageTransition><GeckoGuardPage /></PageTransition>} />
                <Route path="/gecko-lock" element={<PageTransition><GeckoLockPage /></PageTransition>} />
                <Route path="/gecko-watch" element={<PageTransition><GeckoWatchPage /></PageTransition>} />
                <Route path="/gecko-view" element={<PageTransition><GeckoViewPage /></PageTransition>} />
                <Route path="/gecko-vpn" element={<PageTransition><GeckoVPNPage /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
} 

export default App;
