import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Enterprise Impact', href: '#metrics' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0 select-none">
            <div className="relative flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400/80 p-1.5 transition-all duration-300 shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/25 shrink-0">
              <img
                src="/assets/meeqat-emblem.png"
                alt="Meeqat Technologies Brand Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-sans leading-tight">
                MEEQAT
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 font-extrabold tracking-wider">
                  TECHNOLOGIES
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Enterprise IT & Cloud Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 ml-6 xl:ml-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 ml-4">
            <a
              href="https://wa.me/919629047680"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors items-center gap-1.5 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              24/7 Desk: +91 9629047680
            </a>
            <button
              onClick={() => onOpenConsultation()}
              className="relative inline-flex items-center justify-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-6 py-6 mt-3 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20"
              >
                <span>Schedule Enterprise Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919629047680"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-emerald-400 border border-slate-800"
              >
                WhatsApp Direct: +91 9629047680
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
