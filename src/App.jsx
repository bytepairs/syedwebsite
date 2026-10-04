import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './lib/motion';

// Layout & Common Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyBar from './components/layout/MobileStickyBar';
import SplashScreen from './components/layout/SplashScreen';
import WhatsAppFloating from './components/common/WhatsAppFloating';
import LeadModal from './components/common/LeadModal';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesIndexPage from './pages/IndustriesIndexPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import AboutPage from './pages/AboutPage';
import InsightsIndexPage from './pages/InsightsIndexPage';
import InsightDetailPage from './pages/InsightDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Animated route transitions wrapper ensuring smooth ~300ms page transitions
 */
function AnimatedAppRoutes({ onOpenLeadModal }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full flex-grow flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onOpenLeadModal={onOpenLeadModal} />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesIndexPage onOpenLeadModal={onOpenLeadModal} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenLeadModal={onOpenLeadModal} />} />
          
          {/* Industries Routes */}
          <Route path="/industries" element={<IndustriesIndexPage onOpenLeadModal={onOpenLeadModal} />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage onOpenLeadModal={onOpenLeadModal} />} />
          
          {/* Core Pages */}
          <Route path="/about" element={<AboutPage onOpenLeadModal={onOpenLeadModal} />} />
          <Route path="/insights" element={<InsightsIndexPage onOpenLeadModal={onOpenLeadModal} />} />
          <Route path="/insights/:slug" element={<InsightDetailPage onOpenLeadModal={onOpenLeadModal} />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const openLeadModal = (service = '', industry = '') => {
    setSelectedService(service || '');
    setSelectedIndustry(industry || '');
    setModalOpen(true);
  };

  const closeLeadModal = () => {
    setModalOpen(false);
    setSelectedService('');
    setSelectedIndustry('');
  };

  return (
    <Router>
      <ScrollToTop />

      {/* Architectural Splash Screen (session-based) */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600/10 selection:text-blue-900 pb-16 lg:pb-0">
        {/* Sticky Header Navbar */}
        <Header onOpenLeadModal={() => openLeadModal()} />

        {/* Main Animated Routed Content */}
        <main className="flex-grow flex flex-col">
          <AnimatedAppRoutes onOpenLeadModal={openLeadModal} />
        </main>

        {/* Enterprise Light Footer */}
        <Footer onOpenLeadModal={() => openLeadModal()} />

        {/* Desktop Floating WhatsApp Button */}
        <WhatsAppFloating />

        {/* Mobile Persistent Sticky Action Bar */}
        <MobileStickyBar onOpenLeadModal={() => openLeadModal()} />

        {/* Lead Capture Modal */}
        <LeadModal
          isOpen={modalOpen}
          onClose={closeLeadModal}
          initialService={selectedService}
          initialIndustry={selectedIndustry}
        />
      </div>
    </Router>
  );
}
