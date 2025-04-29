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
    <div
      v-if="images?.length"
      class="no-scrollbar mt-5 flex gap-5 overflow-y-scroll"
    >
      <NuxtImg
        v-for="(image, idx) in images"
        :key="`image-${name}-${idx}`"
        format="webp"
        :height="image.height"
        :width="image.width"
        loading="lazy"
        :src="image.src"
        :alt="name"
        class="h-44 w-auto max-w-none rounded-xl object-cover"
      />
    </div>
  </article>
</template>
