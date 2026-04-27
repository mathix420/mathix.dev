<script lang="ts" setup>
type CarouselImage = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
};

const props = withDefaults(defineProps<{
  images: CarouselImage[];
  name?: string;
  height?: number;
}>(), {
  name: "image",
  height: 176,
});

const lightboxIndex = ref<number | null>(null);

function open(idx: number) {
  lightboxIndex.value = idx;
}

function close() {
  lightboxIndex.value = null;
}
</script>

<template>
  <div class="not-prose">
    <div class="no-scrollbar flex gap-5 overflow-y-scroll">
      <button
        v-for="(image, idx) in images"
        :key="`${name}-${idx}`"
        type="button"
        :aria-label="`Open ${image.alt ?? name} in lightbox`"
        :data-umami-event="`Carousel ${name}`"
        class="block shrink-0 cursor-zoom-in transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        @click="open(idx)"
      >
        <NuxtImg
          format="webp"
          :height="image.height ?? props.height"
          :width="image.width"
          loading="lazy"
          :src="image.src"
          :alt="image.alt ?? name"
          :style="{ height: `${props.height}px` }"
          class="w-auto max-w-none rounded-xl object-cover"
        />
      </button>
    </div>

    <ClientOnly>
      <Lightbox
        :images="images"
        :open="lightboxIndex !== null"
        :index="lightboxIndex ?? 0"
        @close="close"
      />
    </ClientOnly>
  </div>
</template>
