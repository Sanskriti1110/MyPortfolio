# Portfolio deployment

Live URL: https://sanskriti1110.github.io/MyPortfolio/

This repository is a standalone static React/Vite build of the portfolio. It does not need a server or Cloudflare account.

## Development

Use Node.js 22.13 or later. Run `npm ci`, then `npm run dev` and open the displayed `/MyPortfolio/` URL.

## Publishing changes

Edit the React components and CSS in `app/`, or replace the assets in `public/`. Commit and push to `main`. The GitHub Actions workflow builds and deploys the website automatically.

Repository Settings → Pages must use **GitHub Actions** as its source.

Run `npm run build` to check a release locally, followed by `npm run preview`. The output is `dist-pages/`.

The `base` in `vite.pages.config.ts` and the asset-path transform support the `/MyPortfolio/` project URL. If the repository name or domain changes, update the base accordingly.
