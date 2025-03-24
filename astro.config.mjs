import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import markdoc from "@astrojs/markdoc";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import * as compiler from "vue/compiler-sfc";

// https://astro.build/config
export default defineConfig({
  site: "https://lushisang.com",
  integrations: [
    starlight({ title: "我的令人愉悦的文档网站" }),
    tailwind(),
    db(),
    mdx(),
    sitemap(),
    markdoc(),
    vue({ compiler, devtools: true }),
  ],
});
