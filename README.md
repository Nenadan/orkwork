# orkwork

Marketing site for Orkwork (painting/renovation services, Stara Pazova, Serbia).

The app lives in [`orkwork-react/`](./orkwork-react) — see its README for setup, development, and build instructions.

## Deployment

Pushes to `main` and `development` are built and deployed automatically via GitHub Actions (see `.github/workflows/`), which sync the production build to S3 and invalidate the CloudFront cache.
