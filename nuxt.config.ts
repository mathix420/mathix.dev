// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  site: {
    url: "https://mathix.dev/",
    name: "Arnaud Gissinger",
  },

  nitro: {
    preset: "vercel-edge",
    vercel: {
      config: {
        images: {
          formats: ["image/webp", "image/avif"],
        },
      },
    },
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
    "@nuxt/scripts",
  ],

  // ogImage: {
  //   fonts: [
  //     "Archivo:400",
  //     "Archivo:900",
  //   ],
  // },

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

  fonts: {
    provider: "google",
    families: [
      { name: "Archivo" },
    ],
  },

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
});