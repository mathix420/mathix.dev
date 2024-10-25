<template>
  <div>
    <AppHeader />
    <main class="prose xl:prose-xl prose-invert prose-a:no-underline prose-a:text-accent prose-headings:text-white prose-a:prose-headings:text-white container mx-auto px-2 py-10 xl:py-20">
      <p class="text-center text-lg font-bold text-gray-500 dark:text-gray-400 ">
        🚨 WIP, come back later if you want polished blog posts and nicer UI!
      </p>

      <ContentDoc
        v-slot="{ doc }"
      >
        <OgImage
          :props="{ emojis: doc.emojis }"
          component="OgImageBlog"
        />
        <ContentRenderer
          class="break-words"
          :value="doc"
        />
      </ContentDoc>
    </main>
  </div>
</template>
