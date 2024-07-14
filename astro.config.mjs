import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://theraa.net",
  integrations: [sitemap()],
  output: "static",
  adapter: vercelStatic()
});
