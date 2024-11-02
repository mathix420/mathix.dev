<template>
  <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-pre:scrollbar-hide prose-headings:text-white prose-a:prose-headings:text-white">
    <ContentDoc
      v-slot="{ doc }"
    >
      <SchemaOrgArticle
        type="TechArticle"
        :headline="doc.title"
        :date-published="new Date(doc.date)"
        :description="doc.description"
        :image="`https://mathix.dev/__og-image__/static${doc.loc}/og.png`"
      />
      <OgImage
        emojis="fluent-emoji"
        :props="{ emojis: doc.emojis }"
        component="OgImageBlog"
      />
      <ContentRenderer
        class="break-words"
        :value="doc"
      />
    </ContentDoc>
  </main>
</template>
