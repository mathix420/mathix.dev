import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        loc: z.string(),
        date: z.string(),
        uuid: z.string(),
        emojis: z.array(z.string()).default([]),
      }),
    }),
    manifesto: defineCollection({
      type: "page",
      source: "manifesto.md",
    }),
  },
});
