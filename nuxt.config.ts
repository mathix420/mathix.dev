import settings from "./settings";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/device",
    "@vueuse/motion/nuxt",
  ],

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
      },
    },
  },

  components: [
    { path: "~/components/content", pathPrefix: false, global: true },
    { path: "~/components" },
  ],

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
    database: {
      type: "d1",
      bindingName: "DB",
    },
    build: {
      markdown: {
        highlight: {
          theme: "aurora-x",
          langs: ["sql", "js", "json", "ts", "vue", "css", "html", "bash", "md", "mdc", "yaml"],
        },
      },
    },
  },

  routeRules: {
    "/cv/**": { robots: { indexable: false } },
    "/blog/**": { prerender: true },
    "/umami/**": { proxy: "https://cloud.umami.is/**" },
  },

  compatibilityDate: "2025-04-01",

  nitro: {
    preset: "cloudflare-module",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/blog", "/feed.xml", "/feed.atom"],
    },
  },

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo", weights: [400, 600, 900] },
    ],
  },

  icon: {
    mode: "svg",
    provider: "server",
    // list of icons to include in the client bundle
    clientBundle: {
      icons: [
        "simple-icons:github",
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
  },

  sitemap: {
    autoLastmod: true,
  },
});
