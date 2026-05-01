# Sattaspace Frontend

An Astro-based frontend application deployed on Cloudflare Workers.

## 🚀 Project Structure

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

## 🛠️ Tech Stack

- **Framework**: Astro
- **UI**: Vue.js + Tailwind CSS
- **Deployment**: Cloudflare Workers
- **Language**: TypeScript

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run check`           | Run Astro type checking                          |
| `npm run generate-types`  | Generate Cloudflare Workers types                |

## 🚀 Deployment

Deploy to Cloudflare Workers:

```sh
npm run build
wrangler deploy
```

## 📝 Configuration

- Update `astro.config.mjs` with your actual domain
- Configure Cloudflare Workers settings in `wrangler.jsonc`
