# Sudhir Kumar Kalivarapu: Portfolio

Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Lucide. Fully static, so it deploys on Vercel with no backend.

## Run
    npm install
    npm run dev       # http://localhost:3000
    npm run lint
    npm run build

## Fill these in before deploying
1. `config/site.ts`: `email`, `linkedin`, `github`, `resume`, and `url` (your production domain, or set `NEXT_PUBLIC_SITE_URL` in Vercel). `url` drives canonical URLs, Open Graph and the sitemap, so it must be your real domain.
2. `public/resume.pdf`: add the file, then set `resume: "/resume.pdf"` in `config/site.ts`. Until then the Resume button is a clearly marked placeholder.
3. `content/projects.ts`: set verified `stack` arrays for Tera Connects and LMVIT, and add one real engineering challenge to each (`decisions`).
4. `content/experience.ts`: verify all dates against your resume (Communitify end date especially).
5. Optional: `openToWork` in `config/site.ts` toggles the availability pill.
6. Optional: real screenshots can go in `public/images/projects/`. The current project art is illustrative SVG, not real screenshots.

## Deploy
Push to GitHub, import the repo in Vercel, set `NEXT_PUBLIC_SITE_URL`, deploy.
