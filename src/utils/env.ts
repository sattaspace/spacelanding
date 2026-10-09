/**
 * SattaSpace — Centralized Environment Variable Utility
 *
 * ALL env reads go through this file. Single source of truth.
 * Fallback values ensure the site works even without a .env file.
 */

const e = import.meta.env;

export const env = {
  // --- Core ---
  siteName:        e.PUBLIC_SITE_NAME        || 'SattaSpace',
  siteTagline:     e.PUBLIC_SITE_TAGLINE     || 'The Space of Being (সত্ত্বা)',
  siteUrl:         e.PUBLIC_SITE_URL         || 'https://sattaspace.com',
  siteDescription: e.PUBLIC_SITE_DESCRIPTION || 'Where entities find their space. SattaSpace is the mother hub — the foundational ecosystem from which innovation, creativity, and ventures emerge.',
  siteKeywords:    e.PUBLIC_SITE_KEYWORDS    || 'sattaspace,ecosystem,hub,innovation,ventures,bangladesh,সত্ত্বা',
  siteLocale:      e.PUBLIC_SITE_LOCALE      || 'en',

  // --- Contact & Location (E-E-A-T) ---
  contactEmail:    e.PUBLIC_CONTACT_EMAIL       || 'hello@sattaspace.com',
  contactLocation: e.PUBLIC_CONTACT_LOCATION    || 'Dhaka, Bangladesh',
  foundingYear:    e.PUBLIC_FOUNDING_YEAR       || '2024',

  // --- Social ---
  twitter:  e.PUBLIC_TWITTER_HANDLE  || '',
  linkedin: e.PUBLIC_LINKEDIN_URL    || '',
  github:   e.PUBLIC_GITHUB_URL      || '',

  // --- Analytics & Tracking ---
  gaId:            e.PUBLIC_GA_MEASUREMENT_ID  || 'G-08X91B4ZMG',
  gtmId:           e.PUBLIC_GTM_ID             || '',
  metaPixelId:     e.PUBLIC_META_PIXEL_ID      || '3467746230054706',

  // --- Google AdSense ---
  adsenseClientId: e.PUBLIC_ADSENSE_CLIENT_ID  || 'ca-pub-6547428806314947',

  // --- Brand ---
  themeColor: e.PUBLIC_THEME_COLOR || '#0A1F44',
} as const;

/** Just the bare domain: "sattaspace.com" (strips protocol) */
export const domain = env.siteUrl.replace(/^https?:\/\//, '');

/** Site URL guaranteed to end without trailing slash */
export const baseUrl = env.siteUrl.replace(/\/+$/, '');