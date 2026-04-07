# Migration Notes

## What Changed

- Replaced root-level HTML pages with Astro routes under `src/pages/`.
- **Visual parity:** legacy HTML bodies live in `src/legacy/*.html` and use the original Bootstrap/theme CSS (`css/`, `lib/`, `js/`) via `src/layouts/LegacyLayout.astro`.
- Per-page titles, descriptions, and canonical URLs are set in each `.astro` file; Open Graph tags follow the original patterns where applicable.

## Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Netlify config: `netlify.toml`

## Legacy Compatibility

- Legacy URLs are redirected through `_redirects`.

## Local development

Astro serves static URLs only from `public/`. **`npm run dev` and `npm run build` run `scripts/sync-assets.mjs` first**, which copies `vendor-lib/` → `public/lib/`, plus `css/`, `js/`, `fonts/`, `contactform/`, `images/`, and root-level PDFs. (`vendor-lib` keeps third-party JS out of a root `lib/` folder so Vite does not try to bundle UMD `require("jquery")` during dev.) Restart dev or run `npm run sync-assets` after changes. Generated copies under `public/` are gitignored.
