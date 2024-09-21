// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  site: {
    url: "https://mathix.dev/",
    name: "Arnaud Gissinger",
  },

  nitro: {
    preset: "vercel-edge",
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxtjs/mdc",
    "nuxt-headlessui",
    "@nuxt/fonts",
    // "nuxt-og-image",
    "nuxt-schema-org",
  ],

  // ogImage: {
  //   fonts: [
  //     "Archivo:400",
  //     "Archivo:900",
  //   ],
  // },

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo" },
    ],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
