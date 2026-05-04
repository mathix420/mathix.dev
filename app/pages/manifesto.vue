<script setup lang="ts">
const { data: doc } = await useAsyncData("manifesto", () =>
  queryCollection("manifesto").path("/manifesto").first(),
);
</script>

<template>
  <div class="pb-10">
    <AppHeader />
    <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-pre:scrollbar-hide prose-headings:text-white prose-a:prose-headings:text-white container mx-auto px-3 py-10 xl:py-20">
      <ContentRenderer
        v-if="doc"
        class="break-words"
        :value="doc"
      />
    </main>
    <AppFooter />
  </div>
</template>
