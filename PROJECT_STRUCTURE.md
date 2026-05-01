# Project Structure

This document describes the folder and file layout for the `frontend` Astro project.

## Root files and folders

- `astro.config.mjs`
  - Astro configuration file with site settings, integrations, adapter, and image settings.
- `package.json`
  - Project dependencies and npm scripts.
- `package-lock.json`
  - Lockfile that records exact installed package versions.
- `tsconfig.json`
  - TypeScript configuration, extending Astro's strict config.
- `wrangler.jsonc`
  - Cloudflare Workers deployment settings.
- `.gitignore`
  - Files and folders excluded from Git.
- `.env.example`
  - Template for environment variables.
- `.env`
  - Local development environment variables.
- `.wrangler/`
  - Wrangler internal state data.
- `.vscode/`
  - Optional VS Code workspace settings and recommended extensions.
- `.astro/`
  - Auto-generated Astro build artifacts.

## `public/`

Static assets served directly by Astro.

- `favicon.svg`
- `favicon.ico`
- `_headers`
  - Cloudflare Pages headers configuration.

## `src/`

Main source code for the site.

- `assets/`
  - Static image and SVG assets imported by components.
- `components/`
  - Reusable UI components and Astro components.
- `layouts/`
  - Site layout components, including page wrappers and metadata.
- `pages/`
  - Route pages for the site, including `index.astro` and `404.astro`.
- `styles/`
  - Global CSS entrypoint, including Tailwind import.
- `content.config.ts`
  - Astro content collections configuration.
- `data/`
  - Static data definitions used by pages or components.
- `utils/`
  - Utility modules and helper functions.

## Key concepts

- `Astro` renders the site using server-side build output.
- `@astrojs/cloudflare` deploys the frontend as a Cloudflare Workers site.
- `@astrojs/vue` enables Vue integration inside Astro.
- `@astrojs/sitemap` and `astro-robots-txt` generate SEO files automatically.
- `@tailwindcss/vite` provides Tailwind CSS integration with Vite.

## Important commands

- `npm run dev`
  - Start the local development server.
- `npm run build`
  - Build the production site to `./dist`.
- `npm run preview`
  - Preview the built production output locally.
- `npm run check`
  - Run Astro diagnostics and type checking.
- `npm run generate-types`
  - Generate Cloudflare Workers type definitions.

## Notes

- Keep `.env` out of version control; use `.env.example` as a template.
- The `dist/` folder is generated during build and should remain ignored.
- Add new pages under `src/pages` and reusable layout logic under `src/layouts`.
