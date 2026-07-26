// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import { loadEnv } from 'vite';

// ── Load env vars from .env (PUBLIC_ prefix required for Vite) ──
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');

const siteUrl    = env.PUBLIC_SITE_URL        || 'https://sattaspace.com';
const siteName   = env.PUBLIC_SITE_NAME       || 'SattaSpace';
const gaId       = env.PUBLIC_GA_MEASUREMENT_ID || '';
const gtmId      = env.PUBLIC_GTM_ID          || '';
const themeColor = env.PUBLIC_THEME_COLOR     || '#0A1F44';

export default defineConfig({
  site: siteUrl,
  output: 'server',

  adapter: cloudflare({
    // This tells Astro to use Sharp at build-time to create optimized assets
    imageService: { build: 'compile', runtime: 'cloudflare-binding' },
    sessionKVBindingName: 'SATTADOCS_SESSION_BINDING',
    prerenderEnvironment: 'node',
  }),

  image: {
    // We use the default service but pass our production quality overrides
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
        // Cloudflare Workers have a 128MB limit; Sharp's default effort is usually fine
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:buffer', 'sharp'],
    },
    // Expose selected env vars to client code via import.meta.env
    define: {
      'import.meta.env.PUBLIC_SITE_NAME':   JSON.stringify(siteName),
      'import.meta.env.PUBLIC_SITE_URL':    JSON.stringify(siteUrl),
      'import.meta.env.PUBLIC_THEME_COLOR': JSON.stringify(themeColor),
    },
  },

  integrations: [
    vue(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
    partytown({
      // Offload third-party scripts (analytics, GTM etc.) to web workers
      config: {
        forward: [
          ...(gaId  ? ['gtag']           : []),
          ...(gtmId ? ['dataLayer.push'] : []),
        ],
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/_astro/'],
        },
      ],

    }),
  ],
});
