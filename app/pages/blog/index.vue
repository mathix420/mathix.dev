<template>
  <div>
    <AppHeader />
    <main class="container mx-auto px-2 py-10 xl:py-20">
      <ContentList
        v-slot="{ list }"
        path="/blog"
      >
        <article
          v-for="post in list"
          :key="post._path"
          class="flex max-w-xl flex-col items-start justify-between"
        >
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
        </article>
      </ContentList>
    </main>
  </div>
</template>
