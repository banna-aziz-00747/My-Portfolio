# Mohammad Abdul Aziz — Portfolio

A React + Vite portfolio with a Three.js hero (a rotating circuit/constellation
node graph), built from a datasheet/schematic-inspired design system.

## Stack
- Vite + React (JavaScript)
- three.js via @react-three/fiber
- Plain CSS with design tokens (no framework)

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

This repo is pre-configured for a **project site** at:
`https://<your-username>.github.io/portfolio/`

`vite.config.js` sets `base: '/portfolio/'` to match. If your repo has a
different name, update that value to `'/<your-repo-name>/'` (or `'/'` if
this is your `<username>.github.io` root repo).

### Option A — GitHub Actions (recommended, already set up)

1. Push this project to a GitHub repo named `portfolio` (or update `base`
   in `vite.config.js` to match whatever name you choose).
2. In the repo, go to **Settings -> Pages** and set **Source** to
   **GitHub Actions**.
3. Push to the `main` branch. The included workflow at
   `.github/workflows/deploy.yml` builds the site and deploys it
   automatically. Check the **Actions** tab for progress; the live URL
   appears there once the deploy job finishes.

### Option B — `gh-pages` package

```bash
npm install
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in
**Settings -> Pages**, set **Source** to the `gh-pages` branch (`/root`).

## Customizing

- Copy, roles and companies live in `src/components/*.jsx` — content is
  plain JS objects/arrays at the top of `Experience.jsx`, `Projects.jsx`
  and `Stack.jsx`, so updates don't require touching markup.
- Colors, fonts and spacing tokens live in `src/index.css` under `:root`.
- The hero animation is `src/three/CircuitField.jsx` — tweak `count`,
  `radius` and `linkDistance` in the `buildGraph(150, 2.6, 0.85)` call to
  change density.
