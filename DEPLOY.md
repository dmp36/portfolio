# Deployment Guide

This portfolio is built with [Vite](https://vitejs.dev/), which produces a static site in the `dist` directory. You can deploy it to any static hosting service.

## 1. Vercel (Recommended)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts. Vercel will automatically detect Vite and configure the build settings.
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`

Alternatively, connect your GitHub repository to Vercel dashboard for automatic deployments on push.

## 2. Netlify

1.  Create a `netlify.toml` file in the root (optional, but recommended):
    ```toml
    [build]
      command = "npm run build"
      publish = "dist"
    ```
2.  Drag and drop the `dist` folder to Netlify Drop, or connect your Git repository.

## 3. GitHub Pages

1.  Update `vite.config.js` to set the base URL if you are deploying to a subdirectory (e.g., `https://username.github.io/repo/`):
    ```js
    export default defineConfig({
      base: '/repo-name/',
    })
    ```
2.  Build the project: `npm run build`
3.  Push the contents of the `dist` folder to a `gh-pages` branch.

## 4. Manual Deployment

1.  Run `npm run build`.
2.  Upload the contents of the `dist` folder to your web server (Apache, Nginx, etc.).
3.  Ensure your server is configured to serve `index.html` for the root route.
