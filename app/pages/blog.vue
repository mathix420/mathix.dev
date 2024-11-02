<script setup lang="ts">
useHead({
  link: [
    { rel: "alternate", type: "application/atom+xml", title: "atom feed", href: "/feed.atom" },
    { rel: "alternate", type: "application/rss+xml", title: "xml feed", href: "/feed.xml" },
  ],
});
</script>

<template>
  <div class="pb-10">
    <AppHeader />
    <NuxtPage class="container mx-auto px-3 py-10 xl:py-20" />
    <AppFooter />
  </div>
</template>
