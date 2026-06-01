import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://blogrdeveloper.com',
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    domains: ["latiendadelcafe.co", "markdownguide.org", "fundacionaquae.org", "www.fundacionaquae.org"],
    cache: true,
    cacheDir: "./.cache/images",
  },
  compressHTML: true,
  minifyCSS: true,
  minifyJS: true,
});