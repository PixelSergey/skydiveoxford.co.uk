# Oxford Skydiving Club website

The source for [skydiveoxford.co.uk](https://skydiveoxford.co.uk), built with
Vite, TypeScript, React, shadcn-ui and Tailwind CSS. It's hosted on GitHub Pages.

**Committee members:** to update intro days, the committee list, documents or
the gallery, see [`content/README.md`](content/README.md). No coding needed.

## How it works

- All site content is in [`content/`](content/): YAML files plus the
  photos, videos and PDFs they refer to. These are bundled into the site at
  build time. There is no database or backend.
- The build validates the YAML against [`src/content/schema.ts`](src/content/schema.ts)
  and checks that every referenced file exists (see the `club-content`
  plugin in `vite.config.ts`). A bad edit fails the build, so the live site
  keeps its previous version.
- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
  deploys to GitHub Pages on every push to `main`. Pull requests are built
  but not deployed.
- GitHub Pages has no server-side routing, so the build writes a copy of
  `index.html` for each route (`intro.html`, `about.html`, `committee.html`)
  and a `404.html` fallback. When you add a route to `src/App.tsx`, also add
  it to `ROUTES` in `vite.config.ts` and to `public/sitemap.xml`.

## Local development

Requires Node.js 18+.

```sh
npm ci
npm run dev       # dev server on http://localhost:8080
npm run build     # production build into dist/ (also validates content/)
npm run preview   # serve the production build
```

## GitHub Pages setup (one-time)

1. In the repository go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
2. Under **Custom domain**, enter `skydiveoxford.co.uk`, save, and tick
   **Enforce HTTPS** once the certificate has been issued.
3. At the domain registrar, point the domain at GitHub Pages:
   - `A` records for `skydiveoxford.co.uk`: `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`: `<github-user-or-org>.github.io`

   See GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
