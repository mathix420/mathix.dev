<script lang="ts" setup>
type LightboxImage = {
  src: string;
  alt?: string;
};

const props = withDefaults(defineProps<{
  images: LightboxImage[];
  open: boolean;
  index?: number;
}>(), {
  index: 0,
});

const emit = defineEmits<{
  close: [];
}>();

const current = ref(props.index);

watch(
  () => [props.open, props.index] as const,
  ([open, index]) => {
    if (open) current.value = index;
  },
  { immediate: true },
);

const hasMultiple = computed(() => props.images.length > 1);
const activeImage = computed(() => props.images[current.value] ?? props.images[0]);

function next() {
  if (!hasMultiple.value) return;
  current.value = (current.value + 1) % props.images.length;
}

function prev() {
  if (!hasMultiple.value) return;
  current.value = (current.value - 1 + props.images.length) % props.images.length;
}

function close() {
  emit("close");
}

function onKey(e: KeyboardEvent) {
  if (!props.open) return;
  if (e.key === "Escape") close();
  else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
}

let touchStartX = 0;
function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0]?.clientX ?? 0;
}
function onTouchEnd(e: TouchEvent) {
  if (!hasMultiple.value) return;
  const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX;
  if (Math.abs(dx) < 50) return;
  if (dx < 0) next();
  else prev();
}

let savedOverflow = "";
watch(
  () => props.open,
  (open) => {
    if (typeof document === "undefined") return;
    if (open) {
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = savedOverflow;
    }
  },
);

onMounted(() => {
  document.addEventListener("keydown", onKey);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKey);
  if (typeof document !== "undefined") {
    document.body.style.overflow = savedOverflow;
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center select-none"
        role="dialog"
        aria-modal="true"
        @click="close"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div class="absolute inset-0 bg-charcoal/40 backdrop-blur-md" />

        <button
          type="button"
          aria-label="Close"
          class="absolute right-3 top-3 z-20 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-5 sm:top-5"
          style="top: max(0.75rem, env(safe-area-inset-top)); right: max(0.75rem, env(safe-area-inset-right));"
          @click.stop="close"
        >
          <Icon
            name="material-symbols:close-rounded"
            class="size-6"
          />
        </button>

        <div
          :key="current"
          v-motion
          :initial="{ scale: 0.85, opacity: 0, y: 20 }"
          :enter="{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 280,
              damping: 22,
              mass: 0.7,
            },
          }"
          class="relative z-10 flex size-full items-center justify-center p-4 sm:p-10 md:p-16"
        >
          <NuxtImg
            v-if="activeImage"
            format="webp"
            :src="activeImage.src"
            :alt="activeImage.alt ?? ''"
            loading="eager"
            class="max-h-full max-w-full rounded-2xl object-contain shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_15px_30px_-10px_rgba(0,0,0,0.5)]"
            @click.stop
          />
        </div>

        <template v-if="hasMultiple">
          <button
            type="button"
            aria-label="Previous image"
            class="absolute left-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-5"
            @click.stop="prev"
          >
            <Icon
              name="material-symbols:chevron-left-rounded"
              class="size-7"
            />
          </button>
          <button
            type="button"
            aria-label="Next image"
            class="absolute right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-5"
            @click.stop="next"
          >
            <Icon
              name="material-symbols:chevron-right-rounded"
              class="size-7"
            />
          </button>

          <div
            class="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md"
            style="bottom: max(1rem, env(safe-area-inset-bottom));"
          >
            {{ current + 1 }} / {{ images.length }}
          </div>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>
