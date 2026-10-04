export const companyInfo = {
  name: 'Meeqat Technologies',
  tagline: 'Technology solutions built for the way your business works.',
  summary:
    'From web and mobile applications to cloud migrations, infrastructure maintenance, cybersecurity, and digital growth, Meeqat Technologies helps businesses build, modernize, secure, and scale their digital operations.',
  website: 'https://www.meeqattechnologies.in',
  email: 'syedshabudeen@gmail.com',
  phone: '+91 8248441698',
  phoneDisplay: '+91 82484 41698',
  whatsappRaw: '918248441698',
  locations: [
    {
      name: 'Tindivanam Engineering Office',
      city: 'Tindivanam',
      state: 'Tamil Nadu',
      postalCode: '604001',
      country: 'India',
      address: 'No 48 Sentamizh Nagar, 4th Street',
      fullAddress: 'No 48 Sentamizh Nagar, 4th Street, Tindivanam, Tamil Nadu 604001, India',
      mapUrl:
        'https://www.google.com/maps/dir/?api=1&destination=No+48+Sentamizh+Nagar+4th+street+Tindivanam+Tamil+Nadu+604001'
    },
    {
      name: 'Krishnagiri Operations Hub',
      city: 'Krishnagiri',
      state: 'Tamil Nadu',
      postalCode: '635001',
      country: 'India',
      address: 'Rajaji Nagar 4th Cross',
      fullAddress: 'Rajaji Nagar 4th Cross, Krishnagiri, Tamil Nadu 635001, India',
      mapUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Rajaji+Nagar+4th+Cross+Krishnagiri+Tamil+Nadu+635001'
    }
  ],
  serviceAreas: [
    'Tindivanam',
    'Krishnagiri',
    'Pondicherry',
    'Tamil Nadu',
    'Pan-India',
    'Middle East (GCC)',
    'Worldwide'
  ],
  pillars: [
    {
      id: 'build',
      label: 'Build',
      title: 'Digital Systems That Deliver',
      description:
        'Engineered custom websites, cross-platform mobile apps, and scalable ecommerce platforms tailored to user needs and business workflows.'
    },
    {
      id: 'modernize',
      label: 'Modernize',
      title: 'Cloud & Infrastructure Evolution',
      description:
        'Structured cloud migrations, database modernizations, and automated infrastructure deployments with zero unbudgeted downtime.'
    },
    {
      id: 'secure',
      label: 'Secure',
      title: 'Resilient Defense & Compliance',
      description:
        'Pragmatic vulnerability assessments, zero-trust network configurations, and privacy-first architectural guidelines.'
    },
    {
      id: 'scale',
      label: 'Scale',
      title: 'Data-Led Growth & Commerce',
      description:
        'Search engine optimization, conversion rate improvements, and high-concurrency ecommerce architectures for expanding businesses.'
    },
    {
      id: 'support',
      label: 'Support',
      title: 'Reliable Managed IT Operations',
      description:
        'Proactive monitoring, incident troubleshooting, server patching, and responsive communication when systems need maintenance.'
    }
  ]
};

export const getWhatsAppLink = (message = '') => {
  const defaultText = message || 'Hello Meeqat Technologies, I would like to discuss a project.';
  return `https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(defaultText)}`;
};
