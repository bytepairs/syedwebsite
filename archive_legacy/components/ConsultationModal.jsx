import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Loader2, 
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
  Navigation
} from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialService, initialIndustry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || '',
    industry: initialIndustry || '',
    cloudPlatform: 'AWS',
    timeline: 'Within 2-4 Weeks',
    requirements: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [bookingRef, setBookingRef] = useState('');

  // Sync initial props when modal opens
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialIndustry) {
      setFormData((prev) => ({ ...prev, industry: initialIndustry }));
    }
  }, [initialService, initialIndustry]);

  // Handle ESC key to dismiss modal and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate enterprise backend transmission
    setTimeout(() => {
      const generatedRef = 'MQ-' + Math.floor(1000 + Math.random() * 9000) + '-ENT';
      setBookingRef(generatedRef);
      setStatus('success');
    }, 1200);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hello Meeqat Technologies, I would like to schedule an IT Consulting session.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Service:* ${formData.service || 'General IT Consulting'}\n` +
      `*Industry:* ${formData.industry || 'N/A'}\n` +
      `*Cloud/Platform:* ${formData.cloudPlatform}\n` +
      `*Scope:* ${formData.requirements || 'Discuss project requirements'}`
    );
    return `https://wa.me/919629047680?text=${text}`;
  };

  const handleResetAndClose = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      industry: '',
      cloudPlatform: 'AWS',
      timeline: 'Within 2-4 Weeks',
      requirements: '',
    });
    onClose();
  };

  const servicesList = [
    'Website Development',
    'Mobile Application Development',
    'Cloud Migrations',
    'Infrastructure Maintenance',
    'Cybersecurity Consulting',
    'Support Services',
    'Digital Marketing',
    'E-commerce Development',
    'Enterprise Architecture & SRE'
  ];

  const industriesList = [
    'Retail & E-commerce',
    'Healthcare',
    'Education',
    'Finance & Banking',
    'Manufacturing',
    'Hospitality',
    'Startups & SMEs'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop with strong blur */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel-glow border border-slate-700 bg-slate-900/95 p-6 sm:p-8 shadow-2xl text-left z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          /* Confirmation State */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10 animate-pulse" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Request Transmitted Successfully
              </span>
              <h3 id="modal-title" className="text-2xl font-bold text-white mt-1">
                Consultation Confirmed
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. A Principal Cloud Architect will review your technical requirements and contact you within 2 business hours.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="text-cyan-400 font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Service:</span>
                <span className="text-slate-200">{formData.service || 'Enterprise Consultation'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Industry:</span>
                <span className="text-slate-200">{formData.industry || 'Not Specified'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Response SLA:</span>
                <span className="text-emerald-400">&lt;2 Hours Guaranteed</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Immediate WhatsApp Connect</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Fast-Track Enterprise Advisory</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                Schedule a Technical Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Share your infrastructure or development scope to receive a zero-cost architecture review and budget estimate.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. David Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Service & Industry Selection Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Core Service */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Required Service <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="">Select a core service</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Industry Sector */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Industry Sector
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="">Select industry domain</option>
                    {industriesList.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cloud Platform & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Cloud / Platform
                  </label>
                  <select
                    name="cloudPlatform"
                    value={formData.cloudPlatform}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="AWS">Amazon Web Services (AWS)</option>
                    <option value="Azure">Microsoft Azure</option>
                    <option value="Google Cloud">Google Cloud (GCP)</option>
                    <option value="Multi-Cloud">Multi-Cloud / Hybrid</option>
                    <option value="Web/Mobile Platform">Web / Mobile Custom Stack</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="Immediate (Critical SLA)">Immediate (Critical SLA)</option>
                    <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="Exploratory Architecture">Exploratory / Discovery</option>
                  </select>
                </div>
              </div>

              {/* Technical Scope / Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Scope & Technical Details
                </label>
                <textarea
                  name="requirements"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Outline your current infrastructure, traffic volume, challenges, or goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>NDA & Strict Enterprise Confidentiality automatically applies to all discussions.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Consultation Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request For Architecture Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Office Locations Strip */}
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=No+48+Sentamizh+Nagar+4th+street+Tindivanam+Tamil+Nadu+604001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors group/loc"
                  title="Get Directions to Tindivanam Office on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span><strong>Tindivanam:</strong> No 48 Sentamizh Nagar 4th St (604001)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/loc:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rajaji+Nagar+4th+Cross+Krishnagiri+Tamil+Nadu+635001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors group/loc"
                  title="Get Directions to Krishnagiri Office on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <span><strong>Krishnagiri:</strong> Rajaji Nagar 4th Cross (635001)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/loc:opacity-100 transition-opacity" />
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
