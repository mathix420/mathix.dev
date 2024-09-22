<script lang="ts" setup>
defineProps<{ src: string; alt: string }>();
const showBig = ref(false);
watchEffect(() => {
  if (showBig.value)
    document.body.style.overflow = "hidden";
  else
    document.body.style.overflow = "";
});
</script>

<template>
  <NuxtImg format="webp" height="176" loading="lazy" :src="src" :alt="alt" class="h-44 rounded-xl" @click="showBig = true" />
  <Teleport v-if="showBig" to="body">
    <div class="fixed inset-0 bg-black" @click="showBig = false">
      <NuxtImg class="h-full w-full object-contain" format="webp" :src="src" />
    </div>
  </Teleport>
</template>
