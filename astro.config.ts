import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === "production" ? "https://aliyasirnac.com/" : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : "https://localhost:3000/",
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), sanity(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});