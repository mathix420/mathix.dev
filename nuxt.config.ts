const feedConfig = {
  defaults: {
    author: {
      name: "Arnaud Gissinger",
      link: "https://mathix.dev/",
    },
    id: "https://mathix.dev/blog",
    title: "Arnaud Gissinger's Blog",
    description: "Just another tech blog from another dev, or maybe not? userId:68304114010265600",
    language: "en-US",
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@mathix420/nuxt-layer"],
  modules: [
    "@nuxthub/core",
    "@nuxthq/studio",
    "nuxt-feedme",
  ],

  $production: {
    image: {
      provider: "cloudflare",
      domains: ["mathix.dev"],
    },
  },

  devtools: { enabled: true },

  site: {
    url: "https://mathix.dev/",
    name: "Arnaud Gissinger",
    description: "Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19.",
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
      routes: ["/", "/blog", "/feed.atom", "/feed.xml"],
    },
  },

  feedme: {
    feeds: {
      "/feed.atom": { revisit: "6h", feed: feedConfig, type: "atom1", content: true },
      "/feed.xml": { revisit: "6h", feed: feedConfig, type: "atom1", content: true },
    },
    content: {
      item: {
        templateRoots: [true, "feedme"],
        mapping: [
          // Third item is optional mapping function
          ["date", "modified", value => value ? new Date(value) : value],
          // When mapping function result is undefined - next variant applied
          ["date", "created", value => value ? new Date(value) : value],
          // Until the real one value will be set
          ["date", "", () => new Date()],
          // By default mapping is x => x
          ["link", "loc", v => `https://mathix.dev${v}`],
        ],
      },
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
    provider: "server",
    // list of icons to include in the client bundle
    clientBundle: {
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
    quality: 100,
    formats: ["avif", "webp"],
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
