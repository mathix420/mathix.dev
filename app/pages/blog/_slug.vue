<script setup lang="ts">
const { params: { slug } } = useRoute();
</script>

<template>
  <div>
    <h1>{{ slug }}</h1>
  </div>
</template>
