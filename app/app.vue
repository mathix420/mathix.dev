<script setup lang="ts">
const title = "Arnaud Gissinger";
const description = "Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19.";
const smallDescription = "Arnaud Gissinger is a French Passionate Software Architect, previously 42 Student and founder.";
const url = useSiteConfig().url;

// Disabled because of bundle size in Vercel edge
defineOgImageComponent("Mathix");

useSchemaOrg([
  definePerson({
    name: title,
    image: "/android-chrome-512x512.png",
    sameAs: [
      "https://github.com/mathix420",
      "https://www.linkedin.com/in/agissing/",
      "https://bento.me/agissing",
      "https://www.polywork.com/agissing/",
      "https://posts.cv/mathix",
      "https://read.cv/mathix",
      "https://stackoverflow.com/users/9799292/mathix420",
    ],
  }),
]);

useScript({
  "src": "https://cloud.umami.dev/script.js",
  "defer": true,
  "async": true,
  "data-website-id": "0e6f097f-7dbc-44d2-9843-5e0e09a290a8",
}, {
  trigger: onMounted,
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: smallDescription,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Html
    class="bg-charcoal text-white"
    lang="en-US"
  >
    <Head>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <Body>
      <NuxtPage />
    </Body>
  </Html>
</template>
