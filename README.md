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

Pushes to `main` (and the redesign branch during rollout) run GitHub Actions, which builds the site and publishes the `dist/` folder to the `gh-pages` branch. Custom domain is set via [`public/CNAME`](public/CNAME) (`www.nyturhan.dev`).

### Content

Edit copy and timeline in [`src/content/site.ts`](src/content/site.ts).

### Domain / SSL note (Cloudflare)

- `https://www.nyturhan.dev` serves the site.
- Bare `https://nyturhan.dev` has returned **Cloudflare error 526** (invalid SSL certificate on the origin).

To fix the apex in Cloudflare:

1. Confirm DNS for `@` and `www` both point at GitHub Pages (A records `185.199.108–111.153` and/or the Pages CNAME), **or**
2. Set SSL/TLS mode to **Full (Strict)** only if the origin presents a valid cert covering the hostname; for GitHub Pages, prefer **DNS only** (grey cloud) on the records that target GitHub, **or** use Cloudflare’s recommended GitHub Pages SSL setup so both apex and `www` terminate correctly.

Until that is fixed, share `https://www.nyturhan.dev`.
