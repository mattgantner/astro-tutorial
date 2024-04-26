import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://moonlit-sfogliatella-9e5f27.netlify.app/",
  integrations: [preact()]
});