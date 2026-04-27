<script lang="ts" setup>
type ImageProps = {
  src: string;
  height: number;
  width: number;
};

defineProps<{
  name: string;
  date: string;
  link?: string;
  note?: string;
  images?: ImageProps[];
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
    <NuxtLink
      v-if="link"
      :to="link"
      target="_blank"
      :data-umami-event="`${name} Click`"
      class="text-xl sm:text-2xl"
    >
      <slot name="title" />
    </NuxtLink>
    <p
      v-else
      target="_blank"
      :data-umami-event="`${name} Click`"
      class="text-xl sm:text-2xl"
    >
      <slot name="title" />
    </p>

    <!-- Note -->
    <p
      v-if="slots.note"
      class="text-base text-white/25"
    >
      <slot name="note" />
    </p>

    <!-- Description -->
    <p
      v-if="slots.description"
      class="text-white/70 sm:text-lg"
    >
      <slot name="description" />
    </p>

    <!-- Images -->
    <Carousel
      v-if="images?.length"
      class="mt-5"
      :images="images"
      :name="name"
    />
  </article>
</template>
