<template>
  <header class="container mx-auto mb-10 px-2 py-4 xl:py-6">
    <div class="flex items-center justify-center">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-xl font-bold text-white dark:text-gray-100"
      >
        <NuxtImg
          format="webp"
          src="/android-chrome-192x192.png"
          height="40"
          width="40"
          alt="Arnaud Gissinger"
          class="mr-3 inline size-7 rounded-full object-cover"
        />
        Arnaud Gissinger
      </NuxtLink>
      <!-- <nav>
          <NuxtLink
            to="/"
            class="text-white hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-200"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="ml-4 text-white hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-200"
          >
            Blog
          </NuxtLink>
        </nav> -->
    </div>
  </header>
</template>
