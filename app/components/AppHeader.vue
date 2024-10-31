<template>
  <header class="container mx-auto my-8 px-2 py-4 xl:py-6">
    <div class="flex flex-col items-center justify-center gap-2">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-xl font-black uppercase text-white dark:text-gray-100"
      >
        Arnaud Gissinger
      </NuxtLink>
      <nav>
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
        <NuxtLink
          to="/"
          class="ml-4 text-white hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-200"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
