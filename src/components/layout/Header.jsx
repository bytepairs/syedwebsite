import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../../data/company';
import { services } from '../../data/services';
import { industries } from '../../data/industries';

export default function Header({ onOpenLeadModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F5EFE1]/92 backdrop-blur-md border-b border-[#DFD3BD]/80 shadow-xs py-3'
            : 'bg-[#F5EFE1] border-b border-[#DFD3BD]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3.5 group shrink-0 select-none">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#DFD3BD] p-2 flex items-center justify-center group-hover:border-blue-500/40 group-hover:shadow-card transition-all shadow-xs">
                <img
                  src="/assets/meeqat-emblem.png"
                  alt="Meeqat Technologies Logo"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 font-display">
                    MEEQAT
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold tracking-wider text-blue-600 font-display">
                    TECHNOLOGIES
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs tracking-wider uppercase text-slate-500 font-mono font-medium mt-0.5">
                  IT &amp; Cloud Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Link>

                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-[#FDFBF7] rounded-2xl border border-[#DFD3BD] shadow-xl p-3 grid gap-1"
                    >
                      <div className="px-3 py-1.5 border-b border-[#DFD3BD]/60 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                        Core Capabilities
                      </div>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-[#FAF6ED] hover:text-blue-600 transition-colors flex items-center justify-between group/item"
                        >
                          <span>{s.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-[#DFD3BD]/60 px-3">
                        <Link
                          to="/services"
                          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <span>View All 8 Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesDropdown(true)}
                onMouseLeave={() => setIndustriesDropdown(false)}
              >
                <Link
                  to="/industries"
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                >
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Link>

                <AnimatePresence>
                  {industriesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-[#FDFBF7] rounded-2xl border border-[#DFD3BD] shadow-xl p-3 grid gap-1"
                    >
                      <div className="px-3 py-1.5 border-b border-[#DFD3BD]/60 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                        Sectors Served
                      </div>
                      {industries.map((ind) => (
                        <Link
                          key={ind.slug}
                          to={`/industries/${ind.slug}`}
                          className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-[#FAF6ED] hover:text-blue-600 transition-colors flex items-center justify-between group/ind"
                        >
                          <span>{ind.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-ind:opacity-100 -translate-x-1 group-ind:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>

              <Link
                to="/insights"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                Insights
              </Link>

              <Link
                to="/contact"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppLink('Hello Meeqat Technologies, I would like to inquire about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 transition-all"
                title="Chat with Meeqat Technologies on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenLeadModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenLeadModal}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
              >
                Start Project
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion Slide-In from Right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F5EFE1] border-l border-[#DFD3BD] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DFD3BD] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DFD3BD] p-2 flex items-center justify-center shadow-xs">
                      <img
                        src="/assets/meeqat-emblem.png"
                        alt="Meeqat Logo"
                        className="w-full h-full object-contain"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 font-bold text-base font-display">
                        <span className="text-slate-900">MEEQAT</span>
                        <span className="text-blue-600">TECHNOLOGIES</span>
                      </div>
                      <span className="text-[10px] tracking-wider uppercase text-slate-500 font-mono">
                        IT &amp; Cloud Consulting
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-[#EDE5D4]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col gap-1">
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EDE5D4] hover:text-blue-600 transition-colors"
                  >
                    <span>Services (8 Capabilities)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EDE5D4] hover:text-blue-600 transition-colors"
                  >
                    <span>Industries (7 Sectors)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EDE5D4] hover:text-blue-600 transition-colors"
                  >
                    <span>About Meeqat</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EDE5D4] hover:text-blue-600 transition-colors"
                  >
                    <span>Technical Insights</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EDE5D4] hover:text-blue-600 transition-colors"
                  >
                    <span>Contact & Locations</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#DFD3BD] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink('Hello Meeqat Technologies, I would like to discuss a project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat: {companyInfo.phoneDisplay}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
