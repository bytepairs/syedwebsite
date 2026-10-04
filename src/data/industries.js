export const industries = [
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    badge: 'Omnichannel Commerce',
    tagline: 'Frictionless digital storefronts and unified retail systems.',
    description:
      'We help retailers and direct-to-consumer brands modernize their selling channels, unify inventory management, and deliver fast, mobile-first shopping experiences that encourage repeat business.',
    challenges: [
      'High shopping cart abandonment driven by slow page speeds or confusing checkout steps',
      'Inventory count discrepancies between physical store Point-of-Sale (POS) and online orders',
      'Payment gateway drop-offs and failed order webhooks during peak sales periods',
      'Fragmented customer data across marketing tools, offline stores, and web analytics'
    ],
    solutions: [
      'Responsive, high-speed online storefronts on Shopify, WooCommerce, or headless React',
      'Real-time inventory and warehouse synchronization scripts connecting POS and web',
      'Robust domestic and international payment gateway integrations with automated fallback handling',
      'Conversion Rate Optimization (CRO) and technical SEO to attract high-intent shoppers'
    ],
    typicalRequirements: [
      'Fast product catalog search and faceted filtering',
      'Secure payment processing supporting UPI, cards, net banking, and wallets',
      'Automated order confirmation and shipping dispatch tracking via email and WhatsApp',
      'Scalable hosting architecture capable of handling sudden flash-sale traffic surges'
    ],
    relevantServices: ['ecommerce-development', 'website-development', 'digital-marketing', 'support-services'],
    seoTitle: 'Retail & E-commerce Technology Solutions | Meeqat Technologies',
    seoDescription:
      'Digital storefronts, POS integration, payment gateways, and inventory systems engineered for growing retail brands by Meeqat Technologies.'
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    badge: 'Privacy-Conscious Health Tech',
    tagline: 'Secure, accessible digital systems designed for patient care.',
    description:
      'We develop healthcare-focused digital solutions designed with privacy, data security, and patient convenience in mind. From appointment booking portals to internal clinical administrative tools, we build reliable software that medical teams can count on.',
    challenges: [
      'Protecting confidential patient records and diagnostic reports against unauthorized exposure',
      'Manual, phone-based appointment scheduling causing front-desk bottlenecks and patient friction',
      'Legacy desktop software that cannot be securely accessed by practitioners on mobile devices',
      'Complex regulatory privacy expectations requiring careful access controls and audit trails'
    ],
    solutions: [
      'Encrypted patient consultation booking and doctor schedule management web portals',
      'Compliance-ready cloud infrastructure architecture on AWS or Azure with least-privilege IAM',
      'Secure document storage pipelines for medical diagnostic PDFs and lab results',
      'Mobile-responsive interfaces for doctors, clinic staff, and patients'
    ],
    typicalRequirements: [
      'Role-based access control (RBAC) ensuring staff only view authorized patient data',
      'Encrypted communication (TLS 1.3) and encrypted database storage for health records',
      'Automated appointment reminder alerts sent through SMS and WhatsApp',
      'Reliable daily automated backups with verified recovery procedures'
    ],
    relevantServices: ['website-development', 'cloud-migrations', 'cybersecurity-consulting', 'infrastructure-maintenance'],
    seoTitle: 'Healthcare Digital Solutions & Secure Systems | Meeqat Technologies',
    seoDescription:
      'Privacy-conscious healthcare web portals, appointment scheduling, and secure cloud infrastructure designed by Meeqat Technologies.'
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    badge: 'Interactive Learning',
    tagline: 'Scalable learning platforms and student management tools.',
    description:
      'We build intuitive educational portals, learning management systems (LMS), and institutional web platforms that connect educators, students, and administrators with clear communication and structured course delivery.',
    challenges: [
      'Disjointed assignment submissions and grading spread across emails and chat groups',
      'Student portals crashing during examination registration or results publishing windows',
      'Inconsistent mobile experiences for students accessing learning materials from smartphones',
      'Difficulty tracking student course progress, attendance, and administrative fee payments'
    ],
    solutions: [
      'Custom and open-source Learning Management System (LMS) deployment and custom branding',
      'Online fee payment integration with automated receipt generation and student ledger tracking',
      'Scalable student admission and examination result distribution portals',
      'Mobile-friendly lecture video embedding, quiz modules, and assignment submission pipelines'
    ],
    typicalRequirements: [
      'High concurrency web architecture to withstand simultaneous results-day queries',
      'Clear student and teacher role dashboards with gradebook management',
      'Integrated payment gateways for tuition, registration, and certification fees',
      'Cross-browser accessibility and lightweight pages for rural or low-bandwidth students'
    ],
    relevantServices: ['website-development', 'mobile-application-development', 'cloud-migrations', 'support-services'],
    seoTitle: 'Education & EdTech Software Solutions | Meeqat Technologies',
    seoDescription:
      'Learning management portals, student admission systems, and high-concurrency educational platforms by Meeqat Technologies.'
  },
  {
    slug: 'finance-banking',
    name: 'Finance & Banking',
    badge: 'Security-First Architecture',
    tagline: 'Resilient, audit-ready software for modern financial operations.',
    description:
      'We design and support secure software solutions and cloud environments for financial service providers, micro-lending institutions, advisory firms, and fintech initiatives requiring strict security postures and tamper-proof logs.',
    challenges: [
      'Stringent security expectations requiring continuous vulnerability management and audit readiness',
      'Managing API connections to banking partners, credit bureaus, and payment aggregators securely',
      'Legacy database bottlenecks that struggle with real-time financial ledger updates',
      'High risk of automated credential stuffing and financial fraud attacks on public login endpoints'
    ],
    solutions: [
      'Security-conscious web and mobile applications with multi-factor authentication (MFA)',
      'Isolated VPC cloud network design with private database subnets and restricted egress',
      'API gateway integration for encrypted transaction communication and signature validation',
      'Comprehensive vulnerability assessments and external attack surface audits'
    ],
    typicalRequirements: [
      'End-to-end encrypted communication and tokenized payment storage practices',
      'Granular audit logging tracking every administrative modification and transaction event',
      'High-availability database setups with automatic failover to prevent transaction loss',
      'Regular security scanning and automated alerting for suspicious login patterns'
    ],
    relevantServices: ['cybersecurity-consulting', 'cloud-migrations', 'infrastructure-maintenance', 'website-development'],
    seoTitle: 'Financial Services & FinTech IT Solutions | Meeqat Technologies',
    seoDescription:
      'Security-conscious cloud architecture, multi-factor authentication, and audit-ready systems engineered by Meeqat Technologies.'
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    badge: 'Operational Visibility',
    tagline: 'Connecting factory floors, vendor networks, and ERP workflows.',
    description:
      'We engineer web-based production trackers, vendor inventory portals, and telemetry dashboards that help manufacturing and industrial businesses gain real-time visibility into supply chains and plant operations.',
    challenges: [
      'Factory floor data trapped in manual paper logs or standalone legacy spreadsheets',
      'Lack of real-time shipment and supplier order tracking leading to inventory delays',
      'ERP systems that are difficult for field staff or distribution partners to access remotely',
      'Unplanned downtime when internal on-premises servers hosting production tools fail'
    ],
    solutions: [
      'Web-based internal production tracking and machine status telemetry dashboards',
      'Vendor management portals allowing external suppliers to confirm purchase orders and shipping dates',
      'Server modernization migrating critical production databases to reliable cloud instances',
      'Barcode and QR-code scanning web tools for warehouse inventory check-in and check-out'
    ],
    typicalRequirements: [
      'Rugged, responsive mobile and tablet interfaces suitable for factory and warehouse conditions',
      'High-uptime database configurations with scheduled offsite backup routines',
      'Custom API bridges connecting legacy ERP software to modern web interfaces',
      'Secure VPN or private network endpoints for plant-to-cloud connectivity'
    ],
    relevantServices: ['infrastructure-maintenance', 'cloud-migrations', 'website-development', 'support-services'],
    seoTitle: 'Manufacturing & Supply Chain Software Solutions | Meeqat Technologies',
    seoDescription:
      'Vendor portals, production tracking dashboards, and reliable cloud infrastructure engineered for manufacturing by Meeqat Technologies.'
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    badge: 'Direct Guest Booking',
    tagline: 'Direct reservation engines and guest management tools.',
    description:
      'We help hotels, resorts, travel operators, and dining brands reduce high Online Travel Agency (OTA) commissions by establishing high-converting direct booking portals, customer loyalty engines, and responsive digital menus.',
    challenges: [
      'Heavy dependence on third-party booking channels consuming 15% to 25% in commissions',
      'Outdated property websites that load slowly and fail to showcase rooms effectively on mobile',
      'Double-booking risks when reservation systems fail to sync with external calendars',
      'Inefficient manual guest check-in processes leading to front-desk queues'
    ],
    solutions: [
      'Fast, visually compelling direct booking websites with real-time room availability engines',
      'Integrated payment gateways supporting domestic and international cards for advance deposits',
      'Calendar synchronization feeds (iCal / channel manager APIs) to eliminate overbooking',
      'Local SEO campaigns to capture high-intent travelers searching for regional accommodations'
    ],
    typicalRequirements: [
      'Mobile-first UX with high-resolution image galleries and clear room amenity details',
      'Automated reservation confirmations sent via email and instant WhatsApp messaging',
      'Multi-currency pricing display and transparent cancellation policy workflows',
      'Fast Core Web Vitals to maximize organic travel search visibility'
    ],
    relevantServices: ['website-development', 'ecommerce-development', 'digital-marketing', 'support-services'],
    seoTitle: 'Hospitality & Hotel Technology Solutions | Meeqat Technologies',
    seoDescription:
      'Direct booking engines, room reservation portals, and local search visibility engineered for hospitality by Meeqat Technologies.'
  },
  {
    slug: 'startups-smes',
    name: 'Startups & SMEs',
    badge: 'Agile Technology Foundation',
    tagline: 'Practical software and cloud setups built for sustainable growth.',
    description:
      'We partner with founders and small-to-medium enterprise leaders to turn product concepts into production-ready software, establish cost-conscious cloud foundations, and maintain digital assets without bloated corporate overhead.',
    challenges: [
      'Limited internal engineering headcount requiring a versatile, dependable technical partner',
      'Risk of spending scarce early budget on over-engineered, complex cloud architectures',
      'Need for rapid, clean Minimum Viable Product (MVP) launches to validate business models',
      'Lack of dedicated IT personnel to resolve day-to-day server, domain, or bug emergencies'
    ],
    solutions: [
      'Fast-track MVP web and mobile application engineering built on maintainable codebases',
      'Lean cloud infrastructure setup with right-sized instances and budget threshold alerts',
      'Structured technical support retainers that scale as your business expands',
      'Technical SEO and digital marketing roadmaps to generate initial organic customer inquiries'
    ],
    typicalRequirements: [
      'Pragmatic technology choices prioritizing speed to market and long-term maintainability',
      'Predictable milestone-based pricing without hidden technical debt',
      'Direct communication with lead engineers rather than layers of account managers',
      'Complete ownership of source code, cloud credentials, and domain assets'
    ],
    relevantServices: ['website-development', 'mobile-application-development', 'cloud-migrations', 'digital-marketing'],
    seoTitle: 'Technology Consulting for Startups & SMEs | Meeqat Technologies',
    seoDescription:
      'Agile MVP software engineering, right-sized cloud infrastructure, and technical support retainers by Meeqat Technologies.'
  }
];

export const getIndustryBySlug = (slug) => {
  return industries.find((industry) => industry.slug === slug);
};
