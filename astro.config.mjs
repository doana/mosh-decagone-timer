// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site:  process.env.NODE_ENV === "production" ? "https://doana.github.io/mosh-decagone-timer/" : "http://localhost:4321",
  // Only use base path in production (GitHub Pages)
  base: process.env.NODE_ENV === "production" ? "/mosh-decagone-timer" : "/",
  integrations: [icon(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      langs: [],
      wrap: true,
    },
  },
});
