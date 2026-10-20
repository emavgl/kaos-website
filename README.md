# KAOS website

Static website for the KAOS Android game, published at
<https://kaos.viglianisi.eu> with GitHub Pages.

Built with [Astro](https://astro.build). The site contains the game overview
and the legal pages used for the Google Play listing:

- `/` — game overview
- `/privacy-policy` — privacy policy
- `/data-safety` — data safety summary
- `/content-rating` — content rating / IARC questionnaire summary
- `/impressum` — provider information

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run check
npm run build    # output in dist/
```

## Deployment

Every push to `main` runs `.github/workflows/deploy-website.yml`, builds the
site, and deploys `dist/` to GitHub Pages. The custom domain is configured in
the repository's Pages settings.

DNS: `kaos.viglianisi.eu` must be a `CNAME` record pointing to
`emavgl.github.io`.
