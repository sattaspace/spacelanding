/**
 * SattaSpace — Central Data Store
 *
 * ALL site content, configuration, and structured data live here.
 * Change anything in this file (or .env) and the entire site updates.
 */

import { env, baseUrl, domain } from '../utils/env';

// ─── Site ───────────────────────────────────────────────────
export const site = {
  name: env.siteName,
  tagline: env.siteTagline,
  url: baseUrl,
  description: env.siteDescription,
  keywords: env.siteKeywords,
  locale: env.siteLocale,
  contactEmail: env.contactEmail,
  location: env.contactLocation,
  foundingYear: env.foundingYear,
  twitter: env.twitter,
  linkedin: env.linkedin,
  github: env.github,
  gaId: env.gaId,
  gtmId: env.gtmId,
  metaPixelId: env.metaPixelId,
  adsenseClientId: env.adsenseClientId,
  themeColor: env.themeColor,
} as const;

// ─── Nav ────────────────────────────────────────────────────
export const nav = {
  links: [
    { href: '/#philosophy', label: 'Philosophy' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

// ─── Legal & Trust Links ────────────────────────────────────
export const legal = {
  links: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
} as const;

// ─── Hero ───────────────────────────────────────────────────
export const hero = {
  kicker: 'Ecosystem Hub',
  titleLine1: env.siteName.replace(/Space$/i, ''),
  titleLine2: 'Space',
  bengaliSubtitle: 'সত্ত্বা + Space',
  tagline: env.siteDescription,
  ctaPrimary: { label: 'Explore Ecosystem', href: '/ecosystem' },
  ctaSecondary: { label: 'Our Philosophy', href: '/#philosophy' },
  scrollLabel: 'Scroll',
} as const;

// ─── Philosophy ─────────────────────────────────────────────
export const philosophy = {
  sectionLabel: 'Philosophy',
  heading: 'The Essence of <span class="font-brand">{brand}</span>',
  subheading:
    'Born from the fusion of সত্ত্বা (entity) and Space — the infinite dimension of possibility.',
  bengaliQuote: 'সত্ত্বা + Space',
  bengaliQuoteSub: 'Entity + Space = Ecosystem',
  items: [
    {
      title: 'Satta / <span class="text-quantum-cyan">সত্ত্বা</span>',
      desc: 'In Bengali, সত্ত্বা means entity, essence, being. It represents the fundamental nature of something that exists. SattaSpace is the space where entities take form, find purpose, and realize their potential.',
      icon: '◆',
      iconBg: 'bg-quantum-cyan/10 text-quantum-cyan',
    },
    {
      title:
        'Space — The <span class="text-gradient-cyan">Infinite Canvas</span>',
      desc: 'Space is not just physical territory; it is the boundless dimension of possibility. In SattaSpace, it represents the infinite room we create for ideas, businesses, and human potential to expand without limits.',
      icon: '◇',
      iconBg: 'bg-electric-blue/10 text-electric-blue',
    },
    {
      title: 'Entity + Space = <span class="text-warm-entity">Ecosystem</span>',
      desc: 'When সত্ত্বা meets space, an ecosystem emerges. SattaSpace is not a single business; it is a living framework where diverse entities coexist, interact, and amplify each other.',
      icon: '⬡',
      iconBg: 'bg-warm-entity/10 text-warm-entity',
    },
    {
      title: 'Human-Centric <span class="text-gradient-warm">Futurism</span>',
      desc: "Our logo's human figure within a hexagonal frame, orbited by dynamic lines, captures our core belief: technology and business must orbit around human needs.",
      icon: '○',
      iconBg: 'bg-amber-glow/10 text-amber-glow',
    },
  ],
} as const;

// ─── Stats ──────────────────────────────────────────────────
export const stats = {
  items: [
    { value: 19, suffix: '+', label: 'Entities & Ventures' },
    { value: 50, suffix: '+', label: 'Team Members' },
    { value: 12, suffix: '+', label: 'Active Projects' },
    { value: 1, suffix: '', label: 'Unified Vision' },
  ],
} as const;

export interface BrandEntity {
  name: string;
  shortName: string;
  slug: string;
  status: 'live' | 'incubation';
  icon: string;
  color: string;
  hex: string;
  desc: string;
  longDesc?: string;
  tags: string[];
  url: string;
}

// ─── Ecosystem (Sub-brands) ────────────────────────────────
export const ecosystem = {
  sectionLabel: 'Ecosystem',
  heading: 'The Entity <span class="font-brand">{brand}</span>',
  subheading:
    "Each entity under SattaSpace carries its own identity, yet remains intrinsically connected to the whole. The mother brand's navy-cyan DNA is constant.",
  growingNote: 'More entities emerging — the ecosystem is always growing',
  brands: [
    {
      name: 'SattaAdhar',
      shortName: 'Adhar',
      slug: 'satta-adhar',
      status: 'incubation',
      icon: 'SA',
      color: '#0A1F44',
      hex: '#0A1F44',
      desc: 'Rural development consultancy focused on sustainable growth. Empowering grassroots communities through strategic planning and expert guidance.',
      longDesc: 'SattaAdhar (সত্ত্বাধার) serves as a developmental foundation aimed at rural empowerment across Bangladesh. It connects grassroots agricultural initiatives, micro-enterprises, and civic projects with modern strategy, sustainable advisory, and technology-driven operations.',
      tags: ['Consultancy', 'Rural', 'Development', 'Sustainability'],
      url: '/entities/satta-adhar',
    },
    {
      name: 'SattaLedger',
      shortName: 'Ledger',
      slug: 'satta-ledger',
      status: 'incubation',
      icon: 'SL',
      color: '#6C7A89',
      hex: '#6C7A89',
      desc: 'Personal accounting services designed for clarity and control. Simplifying financial management to help individuals secure their monetary future.',
      longDesc: 'SattaLedger delivers modern, accessible personal bookkeeping and financial literacy tools for independent creators, freelancers, and small business operators navigating emerging digital economies.',
      tags: ['Finance', 'Accounting', 'Personal Wealth', 'Management'],
      url: '/entities/satta-ledger',
    },
    {
      name: 'SattaMeridian',
      shortName: 'Meridian',
      slug: 'satta-meridian',
      status: 'incubation',
      icon: 'SM',
      color: '#FF6B35',
      hex: '#FF6B35',
      desc: 'News synthesis specifically curated for teenagers. Breaking down complex global events into digestible, engaging, and relevant insights.',
      longDesc: 'SattaMeridian is an educational media publication providing concise, objective news briefings for young learners and Gen-Z thinkers, fostering critical thinking without sensationalism.',
      tags: ['Media', 'Gen-Z', 'Education', 'Synthesis'],
      url: '/entities/satta-meridian',
    },
    {
      name: 'SattaDealer',
      shortName: 'Dealer',
      slug: 'satta-dealer',
      status: 'incubation',
      icon: 'SD',
      color: '#0D2B5E',
      hex: '#0D2B5E',
      desc: 'Robust ERP solutions for dealer and distributor management. Optimizing supply chains and inventory with precision and ease.',
      longDesc: 'SattaDealer modernizes wholesale, dealership, and distribution logistics through simplified cloud inventory tracking, order reconciliation, and multi-warehouse dispatching.',
      tags: ['ERP', 'Supply Chain', 'Business', 'Distribution'],
      url: '/entities/satta-dealer',
    },
    {
      name: 'SattaSchool',
      shortName: 'School',
      slug: 'satta-school',
      status: 'incubation',
      icon: 'SS',
      color: '#00B4E6',
      hex: '#00B4E6',
      desc: 'Alternative education for the next generation. Redefining learning through unconventional methods and future-ready skillsets.',
      longDesc: 'SattaSchool empowers future generations through project-based coding, design, ethical entrepreneurship, and creative problem-solving outside traditional rote-learning curricula.',
      tags: ['Education', 'EdTech', 'Innovation', 'Skills'],
      url: '/entities/satta-school',
    },
    {
      name: 'SattaHousing',
      shortName: 'Housing',
      slug: 'satta-housing',
      status: 'incubation',
      icon: 'SH',
      color: '#F0F4F8',
      hex: '#F0F4F8',
      desc: 'Developing rural satellite towns for underserved populations. Creating modern, accessible living spaces where they are needed most.',
      longDesc: 'SattaHousing addresses decentralized urban planning by conceptualizing sustainable, eco-friendly community habitats and affordable housing infrastructure outside congested metropolitan hubs.',
      tags: ['Real Estate', 'Infrastructure', 'Social Impact', 'Rural'],
      url: '/entities/satta-housing',
    },
    {
      name: 'SattaAgro',
      shortName: 'Agro',
      slug: 'satta-agro',
      status: 'incubation',
      icon: 'SAG',
      color: '#0D2B5E',
      hex: '#0D2B5E',
      desc: 'Agribusiness solutions dedicated to farmer development. Bridging the gap between traditional farming and modern commercial success.',
      longDesc: 'SattaAgro champions smart agricultural practices, supply chain transparency, and fair market access for rural cultivators across regional farming belts.',
      tags: ['Agriculture', 'Farmers', 'AgTech', 'Economic Growth'],
      url: '/entities/satta-agro',
    },
    {
      name: 'SattaNews',
      shortName: 'News',
      slug: 'satta-news',
      status: 'incubation',
      icon: 'SN',
      color: '#FF6B35',
      hex: '#FF6B35',
      desc: 'Civic journalism platform for students and rural voices. Providing a megaphone for community stories and local advocacy.',
      longDesc: 'SattaNews offers a community-driven civic journalism network that amplifies local narratives, rural concerns, and investigative reporting led by grassroots student journalists.',
      tags: ['Journalism', 'Community', 'Student Voice', 'Advocacy'],
      url: '/entities/satta-news',
    },
    {
      name: 'SIncehence',
      shortName: 'Since',
      slug: 'sincehence',
      status: 'incubation',
      icon: 'SHC',
      color: '#6C7A89',
      hex: '#6C7A89',
      desc: 'A fashion and necessity brand for everyone. Merging aesthetic appeal with daily utility to define a new standard of living.',
      longDesc: 'SIncehence delivers ergonomic, sustainable everyday essentials, functional apparel, and utility accessories designed for comfort, durability, and timeless aesthetic minimalism.',
      tags: ['Fashion', 'Lifestyle', 'Retail', 'Necessity'],
      url: '/entities/sincehence',
    },
    {
      name: 'SattaService',
      shortName: 'Service',
      slug: 'satta-service',
      status: 'incubation',
      icon: 'SV',
      color: '#00B4E6',
      hex: '#00B4E6',
      desc: 'A versatile marketplace for local and remote services. Connecting talented individuals with those seeking specialized skills and personal tasks.',
      longDesc: 'SattaService bridges local talent with verified service requests, offering freelance, artisanal, and operational gig opportunities across South Asian communities.',
      tags: ['Marketplace', 'Gig Economy', 'Freelance', 'Local Services'],
      url: '/entities/satta-service',
    },
    {
      name: 'SattaIT',
      shortName: 'IT',
      slug: 'satta-it',
      status: 'incubation',
      icon: 'SIT',
      color: '#0A1F44',
      hex: '#0A1F44',
      desc: 'Comprehensive information technology services. Providing enterprise-grade IT support, systems integration, and technical troubleshooting.',
      longDesc: 'SattaIT delivers managed cloud architecture, cybersecurity hardening, infrastructure monitoring, and tailored software engineering solutions for evolving commercial entities.',
      tags: ['IT Services', 'Infrastructure', 'Support', 'Cybersecurity'],
      url: '/entities/satta-it',
    },
    {
      name: 'SattaHasekuse',
      shortName: 'Hasekuse',
      slug: 'satta-hasekuse',
      status: 'incubation',
      icon: 'SHK',
      color: '#FF6B35',
      hex: '#FF6B35',
      desc: 'Harmony Association for Spiritual Empowerment and Knowledge of Universal Serenity. Cultivating inner peace and collective consciousness through wisdom.',
      longDesc: 'SattaHasekuse is a non-profit wellbeing initiative committed to mental health awareness, meditative reflection, and ethical community living.',
      tags: ['Spiritual', 'Wellbeing', 'Empowerment', 'Harmony'],
      url: '/entities/satta-hasekuse',
    },
    {
      name: 'Mech Time',
      shortName: 'MechTime',
      slug: 'mechtime',
      status: 'live',
      icon: 'MT',
      color: '#1f1caf',
      hex: '#1f1caf',
      desc: 'Mechanical watch brand specializing in full automatic chronograph timepieces. Precision engineering meets timeless craftsmanship for horology enthusiasts.',
      longDesc: 'Mech Time crafts precision automatic mechanical watches, skeleton dials, and collector chronographs engineered for durability and distinct horological character.',
      tags: ['Horology', 'Mechanical Watches', 'Automatic', 'Lifestyle'],
      url: 'https://mechtime.sattaspace.com/',
    },
    {
      name: 'Fountain Pen',
      shortName: 'FountainPen',
      slug: 'fountain-pen',
      status: 'live',
      icon: 'FP',
      color: '#096e72',
      hex: '#096e72',
      desc: 'Premium fountain pen brand offering elegant writing instruments for the discerning writer, professional, and calligrapher.',
      longDesc: 'Fountain Pen celebrates the art of handwriting with handcrafted nibs, balanced ergonomics, and archival ink delivery systems.',
      tags: ['Stationery', 'Fountain Pens', 'Calligraphy', 'Writing'],
      url: 'https://pen.sattaspace.com/',
    },
    {
      name: 'Briefcase',
      shortName: 'Briefcase',
      slug: 'briefcase',
      status: 'live',
      icon: 'BC',
      color: '#1389ce',
      hex: '#1389ce',
      desc: 'Durable, stylish carrying solutions for the modern executive and creator, combining weather-resistant materials with modular compartments.',
      longDesc: 'Briefcase designs ergonomic executive bags, laptop folios, and structured leather carryalls engineered for mobile professionals.',
      tags: ['Luggage', 'Briefcases', 'Leather', 'Professional'],
      url: 'https://briefcase.sattaspace.com/',
    },
    {
      name: 'Blogs',
      shortName: 'Blogs',
      slug: 'blogs',
      status: 'live',
      icon: 'BL',
      color: '#a213ce',
      hex: '#a213ce',
      desc: 'Editorial publication exploring technology, venture building, horology, rural development, and philosophical insights from the SattaSpace ecosystem.',
      longDesc: 'SattaSpace Blogs curates in-depth perspectives on emerging technology, economic decentralization, craftsmanship, and modern entrepreneurship.',
      tags: ['Insights', 'Articles', 'Blogs', 'Knowledge'],
      url: 'https://blogs.sattaspace.com/',
    },
    {
      name: 'Tools',
      shortName: 'Tools',
      slug: 'tools',
      status: 'live',
      icon: 'TL',
      color: '#13ce90',
      hex: '#13ce90',
      desc: 'A suite of high-performance developer utilities and productivity converters built for speed, security, and developer efficiency.',
      longDesc: 'SattaSpace Tools offers client-side text formatters, JSON validators, security encoders, and lightweight utilities for developers worldwide.',
      tags: ['Tools', 'Resources', 'Efficiency', 'Developers'],
      url: 'https://tools.sattaspace.com/',
    },
    {
      name: 'TokenOps',
      shortName: 'TokenOps',
      slug: 'tokenops',
      status: 'live',
      icon: 'TO',
      color: '#08e6e6',
      hex: '#08e6e6',
      desc: 'Developer utility for AI token counting, prompt estimation, live API rate synchronization, and LLM cost forecasting.',
      longDesc: 'TokenOps provides engineering teams with accurate token telemetry across Claude, GPT, Gemini, and open-source foundation models.',
      tags: ['AI', 'TokenOps', 'Developers', 'Calculators'],
      url: 'https://tokenops.sattaspace.com/',
    },
    {
      name: 'WED2C Assistant',
      shortName: 'WED2C',
      slug: 'wed2c-assistant',
      status: 'live',
      icon: 'WA',
      color: '#0fe608',
      hex: '#0fe608',
      desc: 'Catalog coordination utility that assists e-commerce operators in optimizing product metadata, visual assets, and multichannel listings.',
      longDesc: 'The WED2C Assistant assists digital merchants by refining product titles, generating clean feature highlights, and synchronizing catalog listings with clarity.',
      tags: ['E-Commerce', 'Tools', 'Productivity', 'Catalog'],
      url: 'https://wed2c.sattaspace.com/',
    },
  ] as BrandEntity[],
} as const;

// ─── Brand Identity ─────────────────────────────────────────
export const brand = {
  sectionLabel: 'Brand Identity',
  heading: 'Visual <span class="font-brand">{brand}</span>',
  subheading:
    'The DNA of every SattaSpace communication — colors, type, and form.',
  colors: [
    { name: 'Cosmic Navy', hex: '#0A1F44', light: false },
    { name: 'Deep Space', hex: '#050E1F', light: false },
    { name: 'Midnight Blue', hex: '#0D2B5E', light: false },
    { name: 'Quantum Cyan', hex: '#00B4E6', light: false },
    { name: 'Nebula Gray', hex: '#6C7A89', light: false },
    { name: 'Warm Entity', hex: '#FF6B35', light: false },
    { name: 'Stellar White', hex: '#F0F4F8', light: true },
  ],
  colorRatio: [
    {
      name: 'Cosmic Navy',
      hex: '#0A1F44',
      percent: 60,
      textColor: 'text-white/60',
    },
    {
      name: 'Quantum Cyan',
      hex: '#00B4E6',
      percent: 25,
      textColor: 'text-deep-space',
    },
    {
      name: 'Warm Entity',
      hex: '#FF6B35',
      percent: 10,
      textColor: 'text-white',
    },
    {
      name: 'Nebula Gray',
      hex: '#6C7A89',
      percent: 5,
      textColor: 'text-white/60',
    },
  ],
  typography: {
    display: {
      name: 'Montserrat',
      category: 'Neo-Grotesque Sans-Serif',
      weights: '300–900',
      sample: 'The Space of Being সত্ত্বা',
    },
    body: {
      name: 'Open Sans',
      category: 'Humanist Sans-Serif',
      weights: '300–800',
      sample:
        'Where entities find their space to grow, evolve, and create lasting impact.',
    },
    brand: {
      name: 'Deadman',
      category: 'Display / Logo',
      weights: 'Regular',
      sample: 'SattaSpace',
      usage: 'Brand name only — logo, navbar, hero title, footer',
    },
  },
} as const;

// ─── Vision ─────────────────────────────────────────────────
export const vision = {
  kicker: 'Our Vision',
  headingLine1: 'One Space.',
  headingLine2Prefix: 'Infinite',
  headingLine2Suffix: 'Entities.',
  description:
    "SattaSpace isn't building a company — it's cultivating an ecosystem. Where every entity has room to grow, connect, and create something greater than itself. The space is infinite. The potential is boundless.",
  ctaPrimary: { label: 'Join the Ecosystem', href: '/contact' },
  ctaSecondary: { label: 'Explore Entities', href: '/ecosystem' },
} as const;

// ─── Footer ─────────────────────────────────────────────────
export const footer = {
  heading: 'Ready to Build <span class="font-brand">{brand}</span>?',
  subheading:
    "The ecosystem grows with every new entity. Let's create space for what's next.",
  ctaLabel: 'Get In Touch',
  ctaEmail: site.contactEmail,
  tagline: 'Where entities find their space. The mother hub — সত্ত্বা + Space — the foundational ecosystem from which innovation emerges.',
  bengaliCredit: 'সত্ত্বা',
  locationLabel: site.location,
  establishedLabel: `Established ${site.foundingYear}`,
  copyright: `© ${new Date().getFullYear()} ${site.name} Corporation. All rights reserved.`,
  builtWithPrefix: 'Built with',
  builtWithSuffix: 'in Dhaka',
  disclaimerNote: 'Legal Notice: SattaSpace (Bengali: সত্ত্বা) is a technology, creative, and venture ecosystem. SattaSpace is NOT affiliated with, does NOT operate, and does NOT endorse any gambling, betting, or lottery activities (including Satta Matka).',
} as const;

// ─── SEO (JSON-LD) ─────────────────────────────────────────
export const seo = {
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    foundingDate: site.foundingYear,
    foundingLocation: {
      '@type': 'Place',
      name: site.location,
    },
    sameAs: [site.twitter, site.linkedin, site.github].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.contactEmail,
      contactType: 'general',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: `${site.name} Corporation`,
    },
    subOrganization: ecosystem.brands.map((b) => ({
      '@type': 'Organization',
      name: b.name,
      url: b.url.startsWith('http') ? b.url : `${site.url}${b.url}`,
    })),
  },
} as const;

// ─── Helpers ────────────────────────────────────────────────
/** Replace `{brand}` placeholder with the site name */
export function t(template: string): string {
  return template.replace(/\{brand\}/g, site.name);
}