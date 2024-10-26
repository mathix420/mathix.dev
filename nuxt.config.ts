// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@mathix420/nuxt-layer"],
  modules: ["@nuxthub/core"],

  devtools: { enabled: true },

  site: {
    url: "https://mathix.dev/",
    name: "Arnaud Gissinger",
    description: "Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19.",
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/blog"],
    },
  },

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo" },
    ],
  },

  icon: {
    mode: "svg",
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [
        "simple-icons:github",
        "simple-icons:bento",
        "simple-icons:stackoverflow",
        "simple-icons:matrix",
        "simple-icons:linkedin",
        "ic:round-email",
      ],
    },
  },

  image: {
    provider: "cloudflare",
    quality: 100,
    formats: ["webp", "avif"],
    cloudflare: {
      baseURL: "https://mathix.dev",
    },
  },

  ogImage: {
    zeroRuntime: true,
    fonts: [
      "Archivo:400",
      "Archivo:900",
    ],
  },
});
