<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
}>(), {
  title: "title",
});
</script>

<template>
  <div
    style="background-color:#1173ff;
    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-1px -1px, -1px -1px, -1px -1px, -1px -1px;"
    class="flex size-full items-start justify-start px-20 py-16 text-white"
  >
    <div class="relative flex size-full flex-row justify-between">
      <div class="flex h-full flex-col justify-between">
        <h1 class="w-[90%] text-left text-[90px] font-black">
          {{ title }}
        </h1>

        <p class="text-left text-[40px] font-black">
          Arnaud Gissinger's Lab
        </p>
      </div>
      <div class="absolute bottom-0 right-0 flex h-full flex-col items-end justify-end">
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
