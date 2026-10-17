# nyturhan.dev

Personal portfolio for **Nahit Yiğit Turhan** — a custom Astro site deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

GitHub Pages serves the `gh-pages` branch. Custom domain: [`public/CNAME`](public/CNAME) (`www.nyturhan.dev`).

**Required:** [`public/.nojekyll`](public/.nojekyll) — without it, GitHub’s Jekyll build ignores Astro’s `/_astro/` assets and the site ships unstyled.

The Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) should build on push to `main` and publish `dist/`. If that workflow shows **0 runs**, open [Actions → Build and Deploy](https://github.com/Nyturhan/nyturhan.github.io/actions/workflows/deploy.yml) while signed in and enable it (or use **Run workflow**). Until then, publish manually:

```bash
npm run build
npx gh-pages -d dist -b gh-pages --dotfiles
```

(`--dotfiles` is required so `.nojekyll` is uploaded.)

### Content

Edit copy and timeline in [`src/content/site.ts`](src/content/site.ts).

### Domain / SSL note (Cloudflare)

- `https://www.nyturhan.dev` serves the site.
- Bare `https://nyturhan.dev` has returned **Cloudflare error 526** (invalid SSL certificate on the origin). Prefer DNS-only (grey cloud) for GitHub Pages records, or a valid Full (Strict) origin cert.
