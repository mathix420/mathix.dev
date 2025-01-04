<script lang="ts" setup>
const props = defineProps<{
  objectId: string;
}>();

const hasVoted = ref(false);
const { data, execute } = useLazyFetch("/api/likes", {
  query: { objectId: props.objectId },
  method: "GET",
  immediate: false,
});

onMounted(() => {
  execute();
});

async function vote() {
  if (hasVoted.value) return;
  hasVoted.value = true;

  await $fetch("/api/like", {
    method: "POST",
    query: { objectId: props.objectId },
  }).then((res) => {
    if (data.value === undefined) data.value = 0;
    data.value += res;
  });
}
</script>

<template>
  <div class="flex items-center justify-center gap-2 border-y border-white/10 py-5">
    Enjoyed this article?
    <button
      class="group flex items-center space-x-2 rounded-md bg-white/5 px-3 py-2 text-white/50 transition-colors hover:bg-white/10 focus-visible:bg-white/10"
      @click="vote"
    >
      <Icon
        :name="hasVoted ? 'material-symbols:favorite' : 'material-symbols:favorite-outline'"
        class="size-6 transition-all group-hover:text-white group-focus-visible:text-white group-active:scale-110"
      />
      <span>{{ data || 0 }}</span>
    </button>
    <button
      data-umami-event="say-hi"
      class="group flex items-center space-x-2 rounded-md bg-white/5 px-3 py-2 text-white/50 transition-colors hover:bg-white/10 focus-visible:bg-white/10"
    >
      <Icon
        name="material-symbols:waving-hand"
        class="size-6 transition-all group-hover:text-white group-focus-visible:text-white group-active:scale-110"
      />
      <span>Say hi</span>
    </button>
  </div>
</template>
