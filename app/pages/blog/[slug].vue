<script setup lang="ts">
const route = useRoute();

const { data: doc } = await useAsyncData(`blog:${route.path}`, () =>
  queryCollection("blog").path(route.path).first(),
);

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true });
}

defineOgImage("Blog", { emojis: doc.value.emojis }, { emojis: "fluent-emoji" });
</script>

<template>
  <div v-if="doc">
    <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-pre:scrollbar-hide prose-headings:text-white prose-a:prose-headings:text-white mx-auto mb-10 sm:mb-20">
      <SchemaOrgArticle
        type="TechArticle"
        :headline="doc.title"
        :date-published="new Date(doc.date)"
        :description="doc.description"
        :image="`https://mathix.dev/__og-image__/static${doc.loc}/og.png`"
      />
      <ContentRenderer
        class="break-words"
        :value="doc"
      />
    </main>
    <Feedback :object-id="doc.uuid" />
  </div>
</template>
