// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

import alpinejs from "@astrojs/alpinejs";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://studioek.github.io',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), svelte(), alpinejs(), vue(), sitemap()]
});
