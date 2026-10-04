import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Loader2 
} from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../data/company';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { submitLeadInquiry, buildLeadWhatsAppUrl, buildLeadMailtoUrl } from '../lib/api';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactHeroVisual from '../components/visuals/ContactHeroVisual';

export default function ContactPage() {
  const [formData, setFormData] = useState({
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

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [resultData, setResultData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    applySEO({
      title: 'Contact Meeqat Technologies | Project Consultation & Locations',
      description:
        'Get in touch with Meeqat Technologies. Consult on web development, mobile applications, cloud migrations, and cybersecurity with our engineering team in Tamil Nadu.',
      canonicalUrl: 'https://www.meeqattechnologies.in/contact',
      structuredData: getBreadcrumbSchema([
        { name: 'Contact', path: '/contact' }
      ])
    });
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="bg-white pb-20">
      {/* 100% Full-Width Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-white border-b border-slate-200 w-full mb-12">
        {/* Bespoke Contact Hero Background Banner (100% Size) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/contact-hero-bg-banner.webp"
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center lg:object-right-top opacity-60 sm:opacity-75 transition-opacity duration-700"
          />
          {/* Left Vignette for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
          <div className="absolute inset-0 bg-grid-light opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <span>Direct Technical Inquiry</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
                Let’s discuss what you’re building.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Reach out to our engineering team to review your technical requirements, request a milestone estimate, or discuss an ongoing support agreement.
              </p>
            </motion.div>

            {/* Right Hero Visual (Directive #25) */}
            <div className="lg:col-span-5">
              <ContactHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Layout: Info Column & Form Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & Offices */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3">
                Direct Channels
              </h2>

              <div className="space-y-4 text-xs font-mono">
                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block">WhatsApp Desk</span>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {companyInfo.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                      Fast-track messaging for project inquiries
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block">Official Email</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors font-mono"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                      Detailed RFPs and architecture documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Physical Locations */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 font-display">
                Registered Engineering Facilities
              </h3>

              {companyInfo.locations.map((loc, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-sm font-bold text-slate-900">{loc.name}</strong>
                    <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      PIN: {loc.postalCode}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {loc.fullAddress}
                  </p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-elevated"
          >
            {status === 'success' && resultData ? (
              <div className="py-6 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-600">
                    Transmission Confirmed
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">
                    Thank You, {resultData.data.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your inquiry has been received. Our Principal Engineers will review your requirements and reach out within 1 business day.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs font-mono max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
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

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildLeadWhatsAppUrl(resultData.data, resultData.refId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <a
                    href={buildLeadMailtoUrl(resultData.data, resultData.refId)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Backup Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    Project Inquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the fields below. We will analyze your scope and get back to you with next steps.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please resolve the highlighted validation errors below.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
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
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh V"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          validationErrors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {validationErrors.name && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.name}</span>
                      )}
                    </div>

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
                        placeholder="ramesh@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          validationErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {validationErrors.email && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.email}</span>
                      )}
                    </div>

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
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          validationErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {validationErrors.phone && (
                        <span className="text-[11px] text-rose-600 mt-0.5 block">{validationErrors.phone}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Systems"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Required Service <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select primary service</option>
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
                        Industry Domain
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select industry domain</option>
                        {industries.map((ind) => (
                          <option key={ind.slug} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other Industry">Other Industry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Expected Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="Immediate / Urgent">Immediate / Urgent Requirement</option>
                      <option value="Within 2-4 Weeks">Within 2–4 Weeks</option>
                      <option value="1-3 Months">1–3 Months</option>
                      <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Requirements & Context
                    </label>
                    <textarea
                      name="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Outline what you need built, existing hosting/servers, current technical issues, or business goals..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500">
                    We maintain strict confidentiality. All technical information shared is used solely to prepare your technical proposal.
                  </p>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
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

      </div>
    </div>
  );
}
