<script setup lang="ts">
useSeoMeta({
  title: "Blog",
  description: "Blog posts by Arnaud Gissinger.",
});
</script>

<template>
  <div class="pb-10">
    <AppHeader />
    <main class="container mx-auto px-3 py-10 xl:py-20">
      <ContentList
        v-slot="{ list }"
        path="/blog"
      >
        <article
          v-for="post in list"
          :key="post._path"
          class="mx-auto flex max-w-2xl items-center justify-between gap-2"
        >
          <NuxtImg
            :src="`/__og-image__/image${post.loc}/og.png`"
            height="160"
            width="160"
            :alt="post.title"
            class="hidden size-40 rounded-lg bg-white/10 object-cover sm:block"
          />
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time
                :datetime="post.datetime"
              >{{ post.date }}</time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 ">
                <NuxtLink :to="post.loc">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 ">
                {{ post.description }}
              </p>
            </div>
          </div>
        </article>
      </ContentList>
    </main>
    <AppFooter />
  </div>
</template>
