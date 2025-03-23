// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site:"https://man-on-box.github.io",
  base:"/boring-project-astro",
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
