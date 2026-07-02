# Portfolio

A personal developer portfolio built with React + Vite. Design concept:
a "Certificate of Registration" — leaning into the civil-registry world
of the featured project instead of a generic dev-portfolio template.

## Before you deploy — fill in the TODOs

Search the codebase for `TODO` and replace placeholders with your real info:

- `src/components/Hero.jsx` — your last name
- `src/components/Contact.jsx` — email, GitHub, LinkedIn links
- `src/components/CaseFile.jsx` — screenshot image, repo link visibility
- `src/components/Header.jsx` — full name in the nav brand
- `src/components/Projects.jsx` — link for the auth demo project once it's live

Quick way to find them all:

```bash
grep -rn "TODO" src/
```

Optional: drop a real screenshot of the MCRO site into `public/images/`
and swap it into `CaseFile.jsx` (instructions are in a comment there).

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo you just pushed.
2. Vercel auto-detects Vite — framework preset should show **Vite**, build command `npm run build`, output directory `dist`. No changes needed.
3. Click **Deploy**.
4. Optional: add your custom domain under Project Settings → Domains (same flow you already used for `mcrogenluna.online`).

Every push to `main` will auto-redeploy.

## Stack

- React 18
- Vite
- Plain CSS (design tokens as CSS variables in `src/index.css`)
- No external UI libraries — everything is hand-built so it stays fast and easy to edit
