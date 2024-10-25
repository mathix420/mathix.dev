// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@mathix420/nuxt-layer"],
  modules: [
    "@nuxtjs/mdc",
  ],

  devtools: { enabled: true },

  site: {
    url: "https://mathix.dev/",
    name: "Arnaud Gissinger",
    description: "Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19.",
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  nitro: {
    preset: "vercel-static",
  },

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo" },
    ],
  },

  image: {
    screens: {
      avatar: 40,
      avatar2x: 80,
      normalImage: 301,
      normalImage2x: 602,
      biggestImage: 432,
      biggestImage2x: 864,
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
    enabled: false,
  },
});
