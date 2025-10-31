import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ToolsPage = lazy(() => import('./pages/ToolsPageSimplified'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPageSimplified'));
const TokenomicsPage = lazy(() => import('./pages/TokenomicsPage'));
const HowToBuyPage = lazy(() => import('./pages/HowToBuyPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Product pages
const GeckoAdvisorPage = lazy(() => import('./pages/products/GeckoAdvisorPage'));
const GeckoSharePage = lazy(() => import('./pages/products/GeckoSharePage'));
const GeckoShellPage = lazy(() => import('./pages/products/GeckoShellPage'));
const GeckoGuardPage = lazy(() => import('./pages/products/GeckoGuardPage'));
const GeckoLockPage = lazy(() => import('./pages/products/GeckoLockPage'));
const GeckoWatchPage = lazy(() => import('./pages/products/GeckoWatchPage'));
const GeckoViewPage = lazy(() => import('./pages/products/GeckoViewPage'));
const GeckoVPNPage = lazy(() => import('./pages/products/GeckoVPNPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-primary flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mb-4"></div>
      <p className="text-accent text-xl font-semibold">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-accent focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tokenomics" element={<TokenomicsPage />} />
              <Route path="/how-to-buy" element={<HowToBuyPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              {/* Product Pages */}
              <Route path="/gecko-advisor" element={<GeckoAdvisorPage />} />
              <Route path="/gecko-share" element={<GeckoSharePage />} />
              <Route path="/gecko-shell" element={<GeckoShellPage />} />
              <Route path="/gecko-guard" element={<GeckoGuardPage />} />
              <Route path="/gecko-lock" element={<GeckoLockPage />} />
              <Route path="/gecko-watch" element={<GeckoWatchPage />} />
              <Route path="/gecko-view" element={<GeckoViewPage />} />
              <Route path="/gecko-vpn" element={<GeckoVPNPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
} 

export default App;
