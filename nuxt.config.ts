import settings from "./settings";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@mathix420/nuxt-layer"],
  modules: ["@nuxthub/core", "@nuxthq/studio", "@nuxtjs/device", "@vueuse/motion/nuxt"],

  $production: {
    image: {
      provider: "cloudflare",
      domains: [settings.domain],
    },
  },

  devtools: { enabled: true },

  site: {
    url: settings.siteUrl,
    name: settings.name,
    description: settings.description,
  },

  content: {
    highlight: {
      theme: "aurora-x",
    },
  },

  mdc: {
    highlight: {
      langs: ["sql", "js", "json", "ts", "vue", "css", "html", "bash", "md", "mdc", "yaml"],
    },
  },

  routeRules: {
    "/cv/**": { robots: { indexable: false } },
    "/blog/**": { prerender: true },
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/blog", "/feed.xml", "/feed.atom"],
    },
  },

  hub: {
    kv: true,
  },

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo" },
    ],
  },

  icon: {
    mode: "svg",
    provider: "server",
    // list of icons to include in the client bundle
    clientBundle: {
      icons: [
        "simple-icons:github",
        "simple-icons:bento",
        "simple-icons:bluesky",
        "simple-icons:stackoverflow",
        "simple-icons:matrix",
        "simple-icons:linkedin",
        "simple-icons:gmail",
      ],
    },
  },

  image: {
    quality: 100,
    formats: ["avif", "webp"],
    cloudflare: {
      baseURL: settings.siteUrl,
    },
  },

  ogImage: {
    zeroRuntime: true,
    fonts: [
      "Archivo:400",
      "Archivo:900",
    ],
  },

  sitemap: {
    autoLastmod: true,
  },
});
