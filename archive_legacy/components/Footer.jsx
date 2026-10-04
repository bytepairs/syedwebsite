import React from 'react';
import { 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  Navigation,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const currentYear = new Date().getFullYear();

  const services = [
    'Website Development',
    'Mobile Application Development',
    'Cloud Migrations (AWS/Azure/GCP)',
    'Infrastructure Maintenance & SRE',
    'Cybersecurity & Penetration Testing',
    '24/7 Managed IT Support Services',
    'Performance Digital Marketing',
    'High-Scale E-commerce Development'
  ];

  const industries = [
    'Retail & E-commerce',
    'Healthcare & HIPAA Tech',
    'Education & LMS Platforms',
    'Finance & Secure Banking',
    'Manufacturing & Industrial IoT',
    'Hospitality & Booking Portals',
    'Startups & SME Scaling'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="bg-mesh-glow w-[500px] h-[300px] bg-cyan-900/10 -top-20 left-1/2 -translate-x-1/2" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400/70 p-1.5 flex items-center justify-center shadow-lg shadow-cyan-500/10 transition-all duration-300">
                <img
                  src="/assets/meeqat-emblem.png"
                  alt="Meeqat Technologies Brand Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
                  MEEQAT
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 font-extrabold tracking-wider">
                    TECHNOLOGIES
                  </span>
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                  Enterprise Cloud & IT Consulting
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Meeqat Technologies provides full-spectrum IT consulting, Cloud Architecture, DevOps automation, and round-the-clock enterprise infrastructure engineering.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-2 font-mono">
              <a
                href="mailto:syedshabudeen@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>syedshabudeen@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919629047680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+91 9629047680 (WhatsApp & Call)</span>
              </a>
            </div>

            {/* Registered Company Locations */}
            <div className="pt-3 space-y-2.5 border-t border-slate-800/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Company Locations
              </span>

              {/* Location 1: Tindivanam */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors text-xs text-slate-300">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-white font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Location 1 (Tindivanam)
                  </strong>
                  <span className="text-[9.5px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                    604001
                  </span>
                </div>
                <p className="text-slate-400 text-[11.5px] font-sans leading-relaxed">
                  No 48 Sentamizh Nagar, 4th Street,<br />Tindivanam - 604001, Tamil Nadu, India
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=No+48+Sentamizh+Nagar+4th+street+Tindivanam+Tamil+Nadu+604001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/50 hover:border-cyan-500/60 text-cyan-300 hover:text-white text-[11px] font-mono transition-all group/btn"
                >
                  <Navigation className="w-3 h-3 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  <span>Get Directions (Google Maps)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-cyan-400/70" />
                </a>
              </div>

              {/* Location 2: Krishnagiri */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-colors text-xs text-slate-300">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-white font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Location 2 (Krishnagiri)
                  </strong>
                  <span className="text-[9.5px] font-mono text-indigo-300 bg-indigo-950/70 border border-indigo-800/40 px-2 py-0.5 rounded-full">
                    635001
                  </span>
                </div>
                <p className="text-slate-400 text-[11.5px] font-sans leading-relaxed">
                  Rajaji Nagar 4th Cross,<br />Krishnagiri - 635001, Tamil Nadu, India
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rajaji+Nagar+4th+Cross+Krishnagiri+Tamil+Nadu+635001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1.5 rounded-lg bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-800/50 hover:border-indigo-500/60 text-indigo-300 hover:text-white text-[11px] font-mono transition-all group/btn"
                >
                  <Navigation className="w-3 h-3 text-indigo-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  <span>Get Directions (Google Maps)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400/70" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all"
              >
                <span>Book Technical Advisory</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-4">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#industries"
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Compliance Badge */}
            <div className="mt-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-[11px] text-slate-300">
                <strong className="text-white block font-medium">Enterprise Grade Security</strong>
                ISO 27001 Aligned • SOC2 Type II Frameworks
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Meeqat Technologies. Headquartered in Tamil Nadu (Tindivanam & Krishnagiri) • Serving Clients Across Pan-India & Worldwide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300">Architecture Services</a>
            <a href="#case-studies" className="hover:text-slate-300">Case Studies</a>
            <a href="#why-us" className="hover:text-slate-300">SLA Guarantees</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
            <a
              href="https://wa.me/919629047680"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Direct WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
