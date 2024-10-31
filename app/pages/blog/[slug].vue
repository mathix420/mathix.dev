<template>
  <div class="pb-10">
    <AppHeader />
    <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-headings:text-white prose-a:prose-headings:text-white container mx-auto px-3 py-10 xl:py-20">
      <ContentDoc
        v-slot="{ doc }"
      >
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
    <AppFooter />
  </div>
</template>
