<script setup lang="ts">
useSeoMeta({
  title: "Blog",
  description: "Blog posts by Arnaud Gissinger.",
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
});
</script>

<template>
  <main class="flex flex-col gap-14">
    <ContentList
      v-slot="{ list }"
      path="/blog"
      :query="{
        sort: [{ date: -1 }],
      }"
    >
      <article
        v-for="(post, uid) in list"
        :key="post._path"
        class="group mx-auto flex max-w-2xl items-center justify-between gap-6"
      >
        <NuxtImg
          provider="cloudflare"
          :loading="uid < 5 ? 'eager' : 'lazy'"
          :src="`/__og-image__/static${post.loc}/og.png`"
          height="160"
          width="160"
          fit="cover"
          :alt="post.title"
          class="size-32 rounded-3xl bg-white/10 object-cover shadow-[0_7px_25px_-6px_#ebcef4bb] transition-all duration-500 group-hover:shadow-[0_0_25px_-6px_#ebcef4] sm:size-40 sm:shadow-[0_15px_50px_-12px_#ebcef4bb] sm:group-hover:shadow-[0_0_50px_-12px_#ebcef4]"
        />
        <div>
          <div class="hidden items-center gap-x-4 text-xs sm:flex">
            <time
              :datetime="post.datetime"
            >{{ dateFmt.format(new Date(post.date)) }}</time>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <NuxtLink :to="post.loc">
                <span class="absolute inset-0" />
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6">
              {{ post.description }}
            </p>
          </div>
        </div>
      </article>
    </ContentList>
  </main>
</template>
