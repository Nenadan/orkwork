# orkwork-react

Single-page marketing site for Orkwork, built with React 19, Vite, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check-free production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run format` — format the codebase with Prettier

## Structure

- `src/components/` — shared components used across pages (`Navbar`, `Footer`, `SectionHeading`)
- `src/pages/home/` — the home page and its page-specific sections (`Hero`, `Services`, `Testimonials`, `ServiceAreas`, `Gallery`, `Process`, `Contact`, `WhyUs`)
- `src/data/business.js` — shared business info (phone, email, address)
- `src/assets/` — images and icons

## Deployment

Handled by GitHub Actions in `.github/workflows/` — pushes to `development` deploy to the dev environment, pushes to `main` deploy to production (S3 + CloudFront).
