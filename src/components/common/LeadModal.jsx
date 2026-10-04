import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageSquare, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { services } from '../../data/services';
import { industries } from '../../data/industries';
import { submitLeadInquiry, buildLeadWhatsAppUrl, buildLeadMailtoUrl } from '../../lib/api';

export default function LeadModal({ isOpen, onClose, initialService = '', initialIndustry = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || '',
    industry: initialIndustry || '',
    timeline: 'Within 2-4 Weeks',
    requirements: '',
    websiteUrlTrap: '' // Honeypot field
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [resultData, setResultData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialIndustry) {
      setFormData((prev) => ({ ...prev, industry: initialIndustry }));
    }
  }, [initialService, initialIndustry]);

  // Lock body scroll and handle Escape key
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
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setValidationErrors({});

    const response = await submitLeadInquiry(formData);

    if (response.success) {
      setResultData({
        refId: response.referenceId,
        data: response.data,
        isFallback: response.fallbackMode || false
      });
      setStatus('success');
    } else {
      if (response.validationErrors) {
        setValidationErrors(response.validationErrors);
      }
      setStatus('error');
    }
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
      timeline: 'Within 2-4 Weeks',
      requirements: '',
      websiteUrlTrap: ''
    });
    setResultData(null);
    setValidationErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop Overlay with Smooth Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Dialog Card with Exact Spring Physics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-2xl bg-[#FDFBF7] p-6 sm:p-8 shadow-modal text-left z-10 my-8 border border-[#DFD3BD]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-[#EDE5D4] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' && resultData ? (
              /* Confirmation State */
              <div className="py-4 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-600">
                    Inquiry Processed
                  </span>
                  <h3 id="lead-modal-title" className="text-2xl font-bold text-slate-900 font-display mt-1">
                    Thank You, {resultData.data.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your project inquiry has been recorded. Our engineering team reviews all incoming requirements and responds within 1 business day.
                  </p>
                </div>

                {/* Receipt Summary Box */}
                <div className="p-4 rounded-xl bg-[#F5EFE1] border border-[#DFD3BD] text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-[#DFD3BD] pb-2">
                    <span className="text-slate-500">Tracking Reference:</span>
                    <span className="text-blue-700 font-bold">{resultData.refId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="text-slate-800">{resultData.data.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="text-slate-800">{resultData.data.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="text-slate-800">{resultData.data.phone}</span>
                  </div>
                </div>

                {/* Direct Connect Options */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildLeadWhatsAppUrl(resultData.data, resultData.refId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <a
                    href={buildLeadMailtoUrl(resultData.data, resultData.refId)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Backup Email</span>
                  </a>
                </div>

                <div>
                  <button
                    onClick={handleResetAndClose}
                    className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <div>
                <div className="mb-6 pr-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
                    Project Consultation
                  </span>
                  <h3 id="lead-modal-title" className="text-2xl font-bold text-slate-900 font-display mt-1">
                    Start a Project with Meeqat
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Tell us about your technical goals, timeline, and requirements. We will review your scope and provide a practical plan.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please complete the required fields highlighted below.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Field */}
                  <input
                    type="text"
                    name="websiteUrlTrap"
                    value={formData.websiteUrlTrap}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          validationErrors.name ? 'border-rose-400 bg-rose-50/20' : 'border-[#DFD3BD]'
                        }`}
                      />
                      {validationErrors.name && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anand@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          validationErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#DFD3BD]'
                        }`}
                      />
                      {validationErrors.email && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.email}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
                          validationErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#DFD3BD]'
                        }`}
                      />
                      {validationErrors.phone && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.phone}</span>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD3BD] text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service & Industry Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Primary Service <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD3BD] text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="General IT Consulting">General IT Consulting / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Industry Sector
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD3BD] text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind.slug} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other Industry">Other Industry</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Expected Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD3BD] text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="Immediate / Urgent">Immediate / Urgent Requirement</option>
                      <option value="Within 2-4 Weeks">Within 2–4 Weeks</option>
                      <option value="1-3 Months">1–3 Months</option>
                      <option value="Exploratory / Planning Phase">Exploratory / Planning Phase</option>
                    </select>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Scope & Requirements
                    </label>
                    <textarea
                      name="requirements"
                      rows={3}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Outline what you are building, existing infrastructure, or technical challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD3BD] text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-[11px] text-slate-500">
                    We respect your privacy. Technical details shared are kept strictly confidential and used solely to prepare your project proposal.
                  </p>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
