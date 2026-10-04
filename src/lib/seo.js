import { companyInfo } from '../data/company';

/**
 * Updates document title, meta tags, canonical link, and JSON-LD structured data.
 */
export function applySEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.meeqattechnologies.in/assets/meeqat-brand-logo.png',
  structuredData = null
}) {
  const fullTitle = title
    ? `${title} | ${companyInfo.name}`
    : `${companyInfo.name} | Digital, Cloud & IT Solutions`;

  const metaDesc =
    description ||
    'Meeqat Technologies provides enterprise-grade Website Development, Mobile Apps, Cloud Migrations, Infrastructure Maintenance, Cybersecurity, and Managed IT Services.';

  const url = canonicalUrl || window.location.href;

  // Title
  document.title = fullTitle;

  // Meta Description
  setMetaTag('name', 'description', metaDesc);

  // Canonical link
  let canonicalEl = document.querySelector("link[rel='canonical']");
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', url);

  // Open Graph
  setMetaTag('property', 'og:title', fullTitle);
  setMetaTag('property', 'og:description', metaDesc);
  setMetaTag('property', 'og:url', url);
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:site_name', companyInfo.name);

  // Twitter
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', fullTitle);
  setMetaTag('name', 'twitter:description', metaDesc);
  setMetaTag('name', 'twitter:image', ogImage);

  // JSON-LD Structured Data
  let scriptEl = document.getElementById('page-json-ld');
  if (structuredData) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'page-json-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(structuredData);
  } else if (scriptEl) {
    scriptEl.remove();
  }
}

function setMetaTag(attrName, attrVal, content) {
  let el = document.querySelector(`meta[${attrName}='${attrVal}']`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Builds base organization and multi-location schema.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ITConsultant',
    'name': companyInfo.name,
    'url': companyInfo.website,
    'logo': `${companyInfo.website}/assets/meeqat-brand-logo.png`,
    'description': companyInfo.summary,
    'telephone': companyInfo.phone,
    'email': companyInfo.email,
    'areaServed': companyInfo.serviceAreas,
    'address': companyInfo.locations.map((loc) => ({
      '@type': 'PostalAddress',
      'name': loc.name,
      'streetAddress': loc.address,
      'addressLocality': loc.city,
      'addressRegion': loc.state,
      'postalCode': loc.postalCode,
      'addressCountry': 'IN',
      'hasMap': loc.mapUrl
    }))
  };
}

/**
 * Builds breadcrumb list schema.
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${companyInfo.website}${item.path}`
    }))
  };
}

/**
 * Builds FAQPage schema.
 */
export function getFAQPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': `${faq.directAnswer} ${faq.details || ''}`
      }
    }))
  };
}

/**
 * Builds Service schema.
 */
export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.name,
    'provider': {
      '@type': 'ITConsultant',
      'name': companyInfo.name,
      'url': companyInfo.website
    },
    'description': service.shortDescription,
    'areaServed': companyInfo.serviceAreas
  };
}

/**
 * Builds Article schema for insights.
 */
export function getArticleSchema(insight) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': insight.title,
    'description': insight.summary,
    'author': {
      '@type': 'Organization',
      'name': companyInfo.name,
      'url': companyInfo.website
    },
    'publisher': {
      '@type': 'Organization',
      'name': companyInfo.name,
      'logo': {
        '@type': 'ImageObject',
        'url': `${companyInfo.website}/assets/meeqat-brand-logo.png`
      }
    },
    'datePublished': insight.publishedDate,
    'dateModified': insight.updatedDate || insight.publishedDate,
    'mainEntityOfPage': `${companyInfo.website}/insights/${insight.slug}`
  };
}
