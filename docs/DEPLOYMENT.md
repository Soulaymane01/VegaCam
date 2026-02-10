# Deployment Guide

This guide provides instructions for building and deploying the Viga Cam landing page.

## 📦 Build Instructions

To create a production build of the application:

```bash
npm run build
```

This will generate a `.next` folder optimized for production.

## 🚀 Deployment Options

### 1. Vercel (Recommended)
The project is optimized for Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy on every push.

### 2. Static Hosting (GitHub Pages)
The project includes a `next export` script for static deployment.

1.  Add `output: 'export'` to `next.config.ts`.
2.  Run:
    ```bash
    npm run deploy
    ```
    *Note: This uses the `gh-pages` package defined in `package.json`.*

## ⚙️ Environment Variables

Ensure the following environment variables are set in your deployment environment:

- `NEXT_PUBLIC_ASSET_PREFIX`: Prefix for static assets if deploying to a subpath.

## 🔍 SEO & Meta Tags

The project follows SEO best practices:
- Unique titles and meta descriptions per page.
- Semantic HTML tags (`header`, `main`, `section`, `footer`).
- Image `alt` tags for accessibility.

## 🛠 Troubleshooting

- **Images not loading**: Check `NEXT_PUBLIC_ASSET_PREFIX` if your site is not hosted at the root domain.
- **Hydration Errors**: Ensure consistent rendering between server and client components, especially when using browser-only APIs.
