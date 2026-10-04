import { companyInfo } from '../data/company';

/**
 * Validates lead form data prior to submission.
 */
export function validateLeadForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business or personal email address.';
  }

  const phoneClean = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!phoneClean || phoneClean.length < 8) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.';
  }

  if (!data.service || data.service.trim() === '') {
    errors.service = 'Please select a primary service of interest.';
  }

  if (data.requirements && data.requirements.trim().length > 2000) {
    errors.requirements = 'Project scope description is too long (maximum 2,000 characters).';
  }

  // Honeypot spam protection
  if (data.websiteUrlTrap && data.websiteUrlTrap.trim() !== '') {
    errors.spam = 'Bot submission detected.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Sanitizes input to avoid XSS injections.
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Submits lead data to backend endpoint or structured fallback.
 * Checks for VITE_LEADS_ENDPOINT (e.g. Vercel serverless / Supabase / Formspree / Webhook).
 */
export async function submitLeadInquiry(rawFormData) {
  const validation = validateLeadForm(rawFormData);
  if (!validation.isValid) {
    return {
      success: false,
      validationErrors: validation.errors,
      message: 'Please resolve the highlighted form fields before submitting.'
    };
  }

  const sanitizedData = {
    name: sanitizeInput(rawFormData.name),
    email: sanitizeInput(rawFormData.email).toLowerCase(),
    phone: sanitizeInput(rawFormData.phone),
    company: sanitizeInput(rawFormData.company || 'Not Specified'),
    service: sanitizeInput(rawFormData.service),
    industry: sanitizeInput(rawFormData.industry || 'Not Specified'),
    timeline: sanitizeInput(rawFormData.timeline || 'Flexible'),
    requirements: sanitizeInput(rawFormData.requirements || 'General Project Discussion'),
    submittedAt: new Date().toISOString(),
    sourceUrl: window.location.href,
    userAgent: navigator.userAgent
  };

  const endpoint = import.meta.env.VITE_LEADS_ENDPOINT || '/api/leads';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(sanitizedData)
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      return {
        success: true,
        referenceId: result.referenceId || generateReferenceId(),
        message: 'Your inquiry has been successfully transmitted to our engineering team.',
        data: sanitizedData
      };
    } else {
      // Backend returned non-200 (e.g., endpoint not configured on static host)
      console.warn(`Lead submission endpoint returned status ${response.status}. Initiating direct messaging fallback.`);
      return {
        success: true,
        fallbackMode: true,
        referenceId: generateReferenceId(),
        message: 'Your inquiry is ready for direct confirmation with our team.',
        data: sanitizedData
      };
    }
  } catch (err) {
    // Network error or offline / static host without active backend API
    console.warn('Network transmission to /api/leads failed or serverless route unmounted. Enabling direct client dispatch.', err);
    return {
      success: true,
      fallbackMode: true,
      referenceId: generateReferenceId(),
      message: 'Inquiry prepared. Click below to confirm directly with our team on WhatsApp or Email.',
      data: sanitizedData
    };
  }
}

/**
 * Creates prefilled WhatsApp message link for a lead.
 */
export function buildLeadWhatsAppUrl(leadData, refId) {
  const text =
    `Hello Meeqat Technologies,\n\n` +
    `I would like to start a project inquiry.\n\n` +
    `*Reference ID:* ${refId}\n` +
    `*Name:* ${leadData.name}\n` +
    `*Company:* ${leadData.company || 'N/A'}\n` +
    `*Email:* ${leadData.email}\n` +
    `*Phone:* ${leadData.phone}\n` +
    `*Service:* ${leadData.service}\n` +
    `*Industry:* ${leadData.industry || 'General'}\n` +
    `*Timeline:* ${leadData.timeline || 'Flexible'}\n` +
    `*Scope:* ${leadData.requirements || 'Discuss project details'}`;

  return `https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates prefilled mailto link as a zero-risk backup.
 */
export function buildLeadMailtoUrl(leadData, refId) {
  const subject = encodeURIComponent(`[Project Inquiry ${refId}] - ${leadData.service} - ${leadData.name}`);
  const body = encodeURIComponent(
    `Hello Meeqat Technologies Team,\n\n` +
    `Please find my project details below:\n\n` +
    `Reference ID: ${refId}\n` +
    `Name: ${leadData.name}\n` +
    `Company: ${leadData.company || 'N/A'}\n` +
    `Email: ${leadData.email}\n` +
    `Phone: ${leadData.phone}\n` +
    `Service: ${leadData.service}\n` +
    `Industry: ${leadData.industry || 'N/A'}\n` +
    `Timeline: ${leadData.timeline || 'Flexible'}\n\n` +
    `Project Requirements:\n${leadData.requirements || 'N/A'}\n\n` +
    `Best regards,\n${leadData.name}`
  );
  return `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
}

function generateReferenceId() {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `MQ-${dateStr}-${rand}`;
}
