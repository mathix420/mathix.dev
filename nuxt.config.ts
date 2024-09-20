// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

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
  ],

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
