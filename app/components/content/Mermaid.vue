<script setup lang="ts">
import { ref, onMounted, useId } from "vue";

const props = defineProps<{ code: string }>();

const el = ref<HTMLElement>();
const id = `mermaid-${useId()}`;

onMounted(async () => {
  const mermaid = (await import("mermaid")).default;
  mermaid.initialize({ startOnLoad: false, theme: "dark" });
  const { svg } = await mermaid.render(id, props.code);
  if (el.value) el.value.innerHTML = svg;
});
</script>

<template>
  <div ref="el" class="mermaid-diagram" />
</template>

<style scoped>
.mermaid-diagram {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}
</style>
