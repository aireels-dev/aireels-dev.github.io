// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://aireelstech.com',
  integrations: [
    tailwind(),
    sitemap({ filter: (page) => /^\/(en|zh)\//.test(new URL(page).pathname) && !page.endsWith('/404/') }),
    mdx()
  ],
  build: {
    assets: 'assets'
  }
});
