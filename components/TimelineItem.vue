<script lang="ts" setup>
defineProps<{
  date: string;
  link?: string;
}>();
const slots = useSlots();
</script>

<template>
  <article>
    <!-- Date -->
    <p class="text-2xl text-white/25">
      {{ date }}
    </p>

    <!-- Title -->
    <NuxtLink v-if="link" :to="link" target="_blank" class="text-xl sm:text-2xl">
      <slot name="title" />
    </NuxtLink>
    <p v-else target="_blank" class="text-xl sm:text-2xl">
      <slot name="title" />
    </p>

    <!-- Description -->
    <p v-if="slots.description" class="text-white/70 sm:text-lg">
      <slot name="description" />
    </p>

    <!-- Images -->
    <div v-if="slots.images" class="mt-5 flex gap-5 overflow-y-scroll no-scrollbar">
      <slot name="images" />
    </div>
  </article>
</template>
