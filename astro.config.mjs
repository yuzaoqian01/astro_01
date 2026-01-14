// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://yuzaoqian.com",
  integrations: [preact()],
  prefetch: true,
  adapter: netlify()
});