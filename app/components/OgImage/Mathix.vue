<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
}>(), {
  title: "title",
});
</script>

<template>
  <div
    style="background-image: linear-gradient(120deg, #0d0d0d 50%, #00c9ff55);"
    class="flex size-full items-start justify-start bg-charcoal px-20 py-16 text-white"
  >
    <div class="flex size-full flex-row justify-between">
      <div class="flex h-full flex-col justify-between">
        <img
          src="/android-chrome-192x192.png"
          class="size-[192px] rounded-full"
        >

        <h1 class="w-1/2 text-left text-[80px] font-black">
          {{ title }}
        </h1>
      </div>
      <div class="flex h-full flex-col items-end justify-end">
        <p class="-mb-2 text-right text-3xl">
          mathix.dev
        </p>
        <p class="text-right text-3xl">
          @mathix:beeper.com
        </p>
      </div>
    </div>
  </div>
</template>
