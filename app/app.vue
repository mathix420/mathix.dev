<script setup lang="ts">
import settings from "~~/settings";

const url = useSiteConfig().url;

defineOgImageComponent("Mathix");

useSchemaOrg([
  definePerson({
    name: settings.name,
    image: "/android-chrome-512x512.png",
    sameAs: settings.sameAs,
  }),
]);

useScript({
  "src": "https://cloud.umami.dev/script.js",
  "defer": true,
  "async": true,
  "data-website-id": "0e6f097f-7dbc-44d2-9843-5e0e09a290a8",
}, { trigger: onMounted });

useSeoMeta({
  description: settings.description,
  ogTitle: settings.name,
  ogDescription: settings.smallDescription,
  ogUrl: url,
  twitterTitle: settings.name,
  twitterDescription: settings.description,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Html
    class="bg-charcoal text-white"
    lang="en-US"
  >
    <Head>
      <Meta
        name="monetization"
        content="$ilp.uphold.com/7nnJLnFyr8hn"
      />
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
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
