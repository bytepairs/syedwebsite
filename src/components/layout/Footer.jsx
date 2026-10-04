import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../../data/company';
import { services } from '../../data/services';
import { industries } from '../../data/industries';

export default function Footer({ onOpenLeadModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EBE1CD] text-slate-700 border-t border-[#DFD3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Verified Presence Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group select-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#DFD3BD] p-2 sm:p-2.5 flex items-center justify-center shadow-xs group-hover:border-blue-500/40 transition-colors">
                <img
                  src="/assets/meeqat-emblem.png"
                  alt="Meeqat Technologies Logo"
                  className="w-full h-full object-contain"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                    MEEQAT
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-blue-600 font-display">
                    TECHNOLOGIES
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs tracking-wider uppercase text-slate-500 font-mono font-medium mt-1">
                  IT &amp; Cloud Consulting
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Meeqat Technologies provides web engineering, cross-platform mobile apps, cloud migrations, infrastructure maintenance, cybersecurity consulting, and ongoing technical support.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 text-xs font-mono pt-1 text-slate-700">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{companyInfo.phoneDisplay} (WhatsApp & Voice)</span>
              </a>
            </div>

            {/* Verified Physical Locations */}
            <div className="pt-3 space-y-2.5 border-t border-[#DFD3BD]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-semibold block">
                Verified Office Locations
              </span>

              {companyInfo.locations.map((loc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#DFD3BD] text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-slate-900 font-medium">{loc.name}</strong>
                    <span className="text-[10px] font-mono text-slate-700 bg-[#FAF6ED] border border-[#DFD3BD] px-2 py-0.5 rounded">
                      {loc.postalCode}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11.5px] leading-relaxed">
                    {loc.address}, {loc.city}, {loc.state} - {loc.postalCode}, {loc.country}
                  </p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-blue-600" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-semibold mb-3">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-semibold mb-3">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-semibold mb-3">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  About Meeqat
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Contact & Locations
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="pt-6">
              <button
                onClick={onOpenLeadModal}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#DFD3BD] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>
            © {currentYear} {companyInfo.name}. Headquartered in Tamil Nadu (Tindivanam & Krishnagiri). Serving clients across Pan-India & Worldwide.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-800 transition-colors">Terms</Link>
            <a href="/sitemap.xml" className="hover:text-slate-800 transition-colors" target="_blank" rel="noopener noreferrer">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
