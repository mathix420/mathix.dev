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
    class="h-full w-full px-20 py-16 flex items-start justify-start bg-charcoal text-white"
  >
    <div class="flex flex-row justify-between w-full h-full">
      <div class="flex flex-col justify-between h-full">
        <img
          src="/android-chrome-192x192.png"
          class="size-[192px] rounded-full"
        >

        <h1 class="text-[80px] max-w-1/2 font-black text-left">
          {{ title }}
        </h1>
      </div>
      <div class="flex flex-col items-end justify-end h-full">
        <p class="text-3xl text-right -mb-2">
          mathix.dev
        </p>
        <p class="text-3xl text-right">
          @mathix:beeper.com
        </p>
      </div>
    </div>
  </div>
</template>
