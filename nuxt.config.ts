import settings from "./settings";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/mdc",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxthub/core",
    "@nuxtjs/device",
    "@vueuse/motion/nuxt",
  ],

  $production: {
    image: {
      provider: "cloudflare",
      domains: [settings.domain],
    },
  },

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
      },
    },
  },

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
      langs: ["sql", "js", "json", "ts", "vue", "css", "html", "bash", "md", "mdc", "yaml", "python"],
    },
  },

  routeRules: {
    "/cv/**": { robots: { indexable: false } },
    "/blog/**": { prerender: true },
    "/umami/**": { proxy: "https://cloud.umami.is/**" },
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2026-01-27",

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
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
