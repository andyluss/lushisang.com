import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import * as compiler from "vue/compiler-sfc";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://lushisang.com",
  integrations: [
    mdx(),
    sitemap(),
    vue({ compiler, devtools: true }),
    tailwind(),
    db(),
  ],
});
