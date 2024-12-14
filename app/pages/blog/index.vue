<script setup lang="ts">
useSeoMeta({
  title: "Blog Posts",
  description: "Blog posts by Arnaud Gissinger.",
});
</script>

<template>
  <main class="max-w-2xl">
    <h1 class="mb-5 text-3xl font-semibold sm:mb-10">
      Blog Posts:
    </h1>

    <div class="flex flex-col gap-2">
      <ContentList
        v-slot="{ list }"
        path="/blog"
        :query="{
          sort: [{ date: -1 }],
          only: ['title', 'date', 'loc', 'emojis'],
        }"
      >
        <NuxtLink
          v-for="post in list"
          :key="post.loc"
          :to="post.loc"
          class="group rounded-md p-3 hover:bg-white/5 focus-visible:bg-white/5 sm:p-5"
        >
          <article class="flex items-center gap-4 sm:gap-10">
            <time
              class="w-[4ch] text-sm text-gray-300 group-hover:hidden group-focus-visible:hidden"
              :datetime="post.datetime"
            >
              {{ new Date(post.date).getFullYear() }}
            </time>
            <p
              v-motion-roll-visible-bottom
              class="hidden w-[4ch] whitespace-nowrap text-sm text-gray-300 group-hover:inline-block group-focus-visible:inline-block"
            >
              {{ post.emojis.join(' ') }}
            </p>
            <h3 class="text-lg font-semibold leading-6">
              {{ post.title }}
            </h3>
          </article>
        </NuxtLink>
      </ContentList>
    </div>
  </main>
</template>
