<template>
  <div>
    <ContentDoc
      v-slot="{ doc }"
    >
      <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-pre:scrollbar-hide prose-headings:text-white prose-a:prose-headings:text-white mx-auto mb-10 sm:mb-20">
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
      </main>
      <Feedback :object-id="doc.uuid" />
    </ContentDoc>
  </div>
</template>
