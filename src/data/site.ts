/**
 * SattaSpace — Central Data Store
 *
 * ALL site content, configuration, and structured data live here.
 * Change anything in this file (or .env) and the entire site updates.
 *
 * Architecture:
 *   .env  →  src/utils/env.ts  →  src/data/site.ts  →  all components
 *
 * Structure:
 *   site      → core identity (pulled from env utility)
 *   nav       → navigation links
 *   hero      → hero section content
 *   philosophy → philosophy cards
 *   stats     → animated counter stats
 *   ecosystem → sub-brand definitions
 *   brand     → color palette, typography, color ratio
 *   vision    → vision CTA section
 *   footer    → footer content
 *   seo       → JSON-LD structured data
 */

import { env, baseUrl, domain } from "../utils/env";

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
  themeColor: env.themeColor,
} as const;

// ─── Nav ────────────────────────────────────────────────────
export const nav = {
  links: [
    { href: "#philosophy", label: "Philosophy" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#brand", label: "Brand" },
    { href: "#connect", label: "Connect" },
  ],
} as const;

// ─── Hero ───────────────────────────────────────────────────
export const hero = {
  kicker: "Ecosystem Hub",
  titleLine1: env.siteName.replace(/Space$/i, ""),
  titleLine2: "Space",
  bengaliSubtitle: "সত্ত্বা + Space",
  tagline: env.siteDescription,
  ctaPrimary: { label: "Explore Ecosystem", href: "#ecosystem" },
  ctaSecondary: { label: "Our Philosophy", href: "#philosophy" },
  scrollLabel: "Scroll",
} as const;

// ─── Philosophy ─────────────────────────────────────────────
export const philosophy = {
  sectionLabel: "Philosophy",
  heading: 'The Essence of <span class="font-brand">{brand}</span>',
  subheading:
    "Born from the fusion of সত্ত্বা (entity) and Space — the infinite dimension of possibility.",
  bengaliQuote: "সত্ত্বা + Space",
  bengaliQuoteSub: "Entity + Space = Ecosystem",
  items: [
    {
      title: 'Satta / <span class="text-quantum-cyan">সত্ত্বা</span>',
      desc: "In Bengali, সত্ত্বা means entity, essence, being. It represents the fundamental nature of something that exists. SattaSpace is the space where entities take form, find purpose, and realize their potential.",
      icon: "◆",
      iconBg: "bg-quantum-cyan/10 text-quantum-cyan",
    },
    {
      title:
        'Space — The <span class="text-gradient-cyan">Infinite Canvas</span>',
      desc: "Space is not just physical territory; it is the boundless dimension of possibility. In SattaSpace, it represents the infinite room we create for ideas, businesses, and human potential to expand without limits.",
      icon: "◇",
      iconBg: "bg-electric-blue/10 text-electric-blue",
    },
    {
      title: 'Entity + Space = <span class="text-warm-entity">Ecosystem</span>',
      desc: "When সত্ত্বা meets space, an ecosystem emerges. SattaSpace is not a single business; it is a living framework where diverse entities coexist, interact, and amplify each other.",
      icon: "⬡",
      iconBg: "bg-warm-entity/10 text-warm-entity",
    },
    {
      title: 'Human-Centric <span class="text-gradient-warm">Futurism</span>',
      desc: "Our logo's human figure within a hexagonal frame, orbited by dynamic lines, captures our core belief: technology and business must orbit around human needs.",
      icon: "○",
      iconBg: "bg-amber-glow/10 text-amber-glow",
    },
  ],
} as const;

// ─── Stats ──────────────────────────────────────────────────
export const stats = {
  items: [
    { value: 6, suffix: "+", label: "Entities" },
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 12, suffix: "+", label: "Projects" },
    { value: 1, suffix: "", label: "Vision" },
  ],
} as const;

// ─── Ecosystem (Sub-brands) ────────────────────────────────
export const ecosystem = {
  sectionLabel: "Ecosystem",
  heading: 'The Entity <span class="font-brand">{brand}</span>',
  subheading:
    "Each entity under SattaSpace carries its own identity, yet remains intrinsically connected to the whole. The mother brand's navy-cyan DNA is constant.",
  growingNote: "More entities emerging — the ecosystem is always growing",
  brands: [
    {
      name: "SattaAdhar",
      shortName: "Adhar",
      icon: "SA",
      color: "#0A1F44",
      hex: "#0A1F44",
      desc: "Rural development consultancy focused on sustainable growth. Empowering grassroots communities through strategic planning and expert guidance.",
      tags: ["Consultancy", "Rural", "Development", "Sustainability"],
      url: "#",
    },
    {
      name: "SattaLedger",
      shortName: "Ledger",
      icon: "SL",
      color: "#6C7A89",
      hex: "#6C7A89",
      desc: "Personal accounting services designed for clarity and control. Simplifying financial management to help individuals secure their monetary future.",
      tags: ["Finance", "Accounting", "Personal Wealth", "Management"],
      url: "#",
    },
    {
      name: "SattaMeridian",
      shortName: "Meridian",
      icon: "SM",
      color: "#FF6B35",
      hex: "#FF6B35",
      desc: "News synthesis specifically curated for teenagers. Breaking down complex global events into digestible, engaging, and relevant insights.",
      tags: ["Media", "Gen-Z", "Education", "Synthesis"],
      url: "#",
    },
    {
      name: "SattaDealer",
      shortName: "Dealer",
      icon: "SD",
      color: "#0D2B5E",
      hex: "#0D2B5E",
      desc: "Robust ERP solutions for dealer and distributor management. Optimizing supply chains and inventory with precision and ease.",
      tags: ["ERP", "Supply Chain", "Business", "Distribution"],
      url: "#",
    },
    {
      name: "SattaSchool",
      shortName: "School",
      icon: "SS",
      color: "#00B4E6",
      hex: "#00B4E6",
      desc: "Alternative education for the next generation. Redefining learning through unconventional methods and future-ready skillsets.",
      tags: ["Education", "EdTech", "Innovation", "Skills"],
      url: "#",
    },
    {
      name: "SattaHousing",
      shortName: "Housing",
      icon: "SH",
      color: "#F0F4F8",
      hex: "#F0F4F8",
      desc: "Developing rural satellite towns for underserved populations. Creating modern, accessible living spaces where they are needed most.",
      tags: ["Real Estate", "Infrastructure", "Social Impact", "Rural"],
      url: "#",
    },
    {
      name: "SattaAgro",
      shortName: "Agro",
      icon: "SAG",
      color: "#0D2B5E",
      hex: "#0D2B5E",
      desc: "Agribusiness solutions dedicated to farmer development. Bridging the gap between traditional farming and modern commercial success.",
      tags: ["Agriculture", "Farmers", "AgTech", "Economic Growth"],
      url: "#",
    },
    {
      name: "SattaNews",
      shortName: "News",
      icon: "SN",
      color: "#FF6B35",
      hex: "#FF6B35",
      desc: "Civic journalism platform for students and rural voices. Providing a megaphone for community stories and local advocacy.",
      tags: ["Journalism", "Community", "Student Voice", "Advocacy"],
      url: "#",
    },
    {
      name: "SIncehence",
      shortName: "Since",
      icon: "SHC",
      color: "#6C7A89",
      hex: "#6C7A89",
      desc: "A fashion and necessity brand for everyone. Merging aesthetic appeal with daily utility to define a new standard of living.",
      tags: ["Fashion", "Lifestyle", "Retail", "Necessity"],
      url: "#",
    },
    {
      name: "SattaService",
      shortName: "Service",
      icon: "SV",
      color: "#00B4E6",
      hex: "#00B4E6",
      desc: "A versatile marketplace for local and remote services. Connecting talented individuals with those seeking specialized skills and personal tasks.",
      tags: ["Marketplace", "Gig Economy", "Freelance", "Local Services"],
      url: "#",
    },
    {
      name: "SattaIT",
      shortName: "IT",
      icon: "SIT",
      color: "#0A1F44",
      hex: "#0A1F44",
      desc: "Comprehensive information technology services. Providing enterprise-grade IT support, systems integration, and technical troubleshooting.",
      tags: ["IT Services", "Infrastructure", "Support", "Cybersecurity"],
      url: "#",
    },
    {
      name: "SattaHasekuse",
      shortName: "Hasekuse",
      icon: "SHK",
      color: "#FF6B35",
      hex: "#FF6B35",
      desc: "Harmony Association for Spiritual Empowerment and Knowledge of Universal Serenity. Cultivating inner peace and collective consciousness through wisdom.",
      tags: ["Spiritual", "Wellbeing", "Empowerment", "Harmony"],
      url: "#",
    },
    {
      name: "Mech Time",
      shortName: "MechTime",
      icon: "MT",
      color: "#1f1caf",
      hex: "#1f1caf",
      desc: "Mechanical watch brand specializing in full automatic chronograph watches. Precision engineering meets timeless design for the discerning collector. All watches are crafted with meticulous attention to detail, ensuring both functionality and aesthetic appeal. All Are Mechanical Watches, Full Automatic, Chronograph Watch.",
      tags: [
        "Wrist Watches",
        "Mechanical Watches",
        "Full Automatic",
        "chronograph watch",
      ],
      url: "https://mechtime.sattaspace.com/",
    },
    {
      name: "Fountain Pen",
      shortName: "FountainPen",
      icon: "FP",
      color: "#096e72",
      hex: "#096e72",
      desc: "Premium fountain pen brand offering elegant writing instruments for the discerning writer. Each pen is meticulously crafted to provide a superior writing experience. All are Fountain Pens, Elegant Writing Instruments, Premium Quality, and Designed for Professionals and Enthusiasts.",
      tags: [
        "Stationery",
        "Writing Instruments",
        "Elegant",
        "Premium",
        "Fountain Pens",
      ],
      url: "https://pen.sattaspace.com/",
    },
    {
      name: "Briefcase",
      shortName: "Briefcase",
      icon: "BC",
      color: "#1389ce",
      hex: "#1389ce",
      desc: "Premium briefcase store offering durable and stylish carrying solutions for the modern professional. Each briefcase is meticulously crafted to provide a superior organization experience. All are Briefcases, Durable Carrying Solutions, Stylish Design, and Designed for Professionals and Enthusiasts.",
      tags: [
        "Stationery",
        "Briefcases",
        "Elegant",
        "Premium",
        "Carrying Solutions",
      ],
      url: "https://briefcase.sattaspace.com/",
    },
    {
      name: "Blogs",
      shortName: "Blogs",
      icon: "BL",
      color: "#a213ce",
      hex: "#a213ce",
      desc: "Blogs and articles on various topics including technology, lifestyle, and personal development. Providing insightful content for readers seeking knowledge and inspiration of SattaSpace Ecosystem. All are Blogs, Articles, Insights, and Designed for Knowledge Seekers and Enthusiasts.",
      tags: ["Insights", "Articles", "Blogs", "Knowledge", "Enthusiasts"],
      url: "https://blogs.sattaspace.com/",
    },
    {
      name: "Tools",
      shortName: "Tools",
      icon: "TL",
      color: "#a213ce",
      hex: "#a213ce",
      desc: "A collection of useful tools and resources for developers and professionals. Providing efficient solutions for common tasks and challenges within the SattaSpace Ecosystem. All are Tools, Resources, Efficiency, and Designed for Developers and Professionals.",
      tags: ["Tools", "Resources", "Efficiency", "Developers", "Professionals"],
      url: "https://tools.sattaspace.com/",
    },
  ],
} as const;

// ─── Brand Identity ─────────────────────────────────────────
export const brand = {
  sectionLabel: "Brand Identity",
  heading: 'Visual <span class="font-brand">{brand}</span>',
  subheading:
    "The DNA of every SattaSpace communication — colors, type, and form.",
  colors: [
    { name: "Cosmic Navy", hex: "#0A1F44", light: false },
    { name: "Deep Space", hex: "#050E1F", light: false },
    { name: "Midnight Blue", hex: "#0D2B5E", light: false },
    { name: "Quantum Cyan", hex: "#00B4E6", light: false },
    { name: "Nebula Gray", hex: "#6C7A89", light: false },
    { name: "Warm Entity", hex: "#FF6B35", light: false },
    { name: "Stellar White", hex: "#F0F4F8", light: true },
  ],
  colorRatio: [
    {
      name: "Cosmic Navy",
      hex: "#0A1F44",
      percent: 60,
      textColor: "text-white/60",
    },
    {
      name: "Quantum Cyan",
      hex: "#00B4E6",
      percent: 25,
      textColor: "text-deep-space",
    },
    {
      name: "Warm Entity",
      hex: "#FF6B35",
      percent: 10,
      textColor: "text-white",
    },
    {
      name: "Nebula Gray",
      hex: "#6C7A89",
      percent: 5,
      textColor: "text-white/60",
    },
  ],
  typography: {
    display: {
      name: "Montserrat",
      category: "Neo-Grotesque Sans-Serif",
      weights: "300–900",
      sample: `The Space of Being সত্ত্বা`,
    },
    body: {
      name: "Open Sans",
      category: "Humanist Sans-Serif",
      weights: "300–800",
      sample:
        "Where entities find their space to grow, evolve, and create lasting impact.",
    },
    brand: {
      name: "Deadman",
      category: "Display / Logo",
      weights: "Regular",
      sample: "SattaSpace",
      usage: "Brand name only — logo, navbar, hero title, footer",
    },
  },
} as const;

// ─── Vision ─────────────────────────────────────────────────
export const vision = {
  kicker: "Our Vision",
  headingLine1: "One Space.",
  headingLine2Prefix: "Infinite",
  headingLine2Suffix: "Entities.",
  description:
    "SattaSpace isn't building a company — it's cultivating an ecosystem. Where every entity has room to grow, connect, and create something greater than itself. The space is infinite. The potential is boundless.",
  ctaPrimary: { label: "Join the Ecosystem", href: "#connect" },
  ctaSecondary: { label: "Explore Entities", href: "#ecosystem" },
} as const;

// ─── Footer ─────────────────────────────────────────────────
export const footer = {
  heading: 'Ready to Build <span class="font-brand">{brand}</span>?',
  subheading:
    "The ecosystem grows with every new entity. Let's create space for what's next.",
  ctaLabel: "Get In Touch",
  ctaEmail: site.contactEmail,
  tagline: `Where entities find their space. The mother hub — সত্ত্বা + Space — the foundational ecosystem from which innovation emerges.`,
  bengaliCredit: "সত্ত্বা",
  locationLabel: site.location,
  establishedLabel: `Established ${site.foundingYear}`,
  copyright: `© ${new Date().getFullYear()} ${site.name} Corporation. All rights reserved.`,
  builtWithPrefix: "Built with",
  builtWithSuffix: "in Dhaka",
} as const;

// ─── SEO (JSON-LD) ─────────────────────────────────────────
export const seo = {
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    foundingDate: site.foundingYear,
    foundingLocation: {
      "@type": "Place",
      name: site.location,
    },
    sameAs: [site.twitter, site.linkedin, site.github].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "general",
    },
    parentOrganization: {
      "@type": "Organization",
      name: `${site.name} Corporation`,
    },
    subOrganization: ecosystem.brands.map((b) => ({
      "@type": "Organization",
      name: b.name,
    })),
  },
} as const;

// ─── Helpers ────────────────────────────────────────────────
/** Replace `{brand}` placeholder with the site name */
export function t(template: string): string {
  return template.replace(/\{brand\}/g, site.name);
}
