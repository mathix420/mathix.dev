<script setup lang="ts">
withDefaults(defineProps<{
  emojis?: string[];
}>(), {
  emojis: () => ["fluent-emoji:briefcase", "fluent-emoji:globe-showing-americas"],
});
</script>

<template>
  <div
    class="relative flex size-full flex-row items-center justify-center text-white"
  >
    <!-- Mesh Gradient BG (https://www.fffuel.co/ffflux/) -->
    <svg
      class="absolute inset-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      opacity="1"
    >
      <defs>
        <linearGradient
          id="ffflux-gradient"
          gradientTransform="rotate(144, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop
            stop-color="rgba(236,180,238,1)"
            stop-opacity="1"
            offset="0%"
          />
          <stop
            stop-color="rgba(163,203,247,1)"
            stop-opacity="1"
            offset="100%"
          />
        </linearGradient>
        <filter
          id="ffflux-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.001"
            numOctaves="1"
            seed="124"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feGaussianBlur
            stdDeviation="11 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            edgeMode="duplicate"
            result="blur"
          />
          <feBlend
            mode="color-dodge"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            in2="blur"
            result="blend"
          />
        </filter>
      </defs>

      <rect
        width="700"
        height="700"
        fill="url(#ffflux-gradient)"
        filter="url(#ffflux-filter)"
      />
    </svg>

    <p
      v-for="(emoji, uid) in emojis"
      :key="uid"
      class="text-center text-[200px]"
    >
      <Icon
        :name="emoji"
        mode="svg"
      />
    </p>
    <p class="absolute bottom-0 right-5 rounded-xl bg-charcoal px-3 py-1 text-right text-3xl">
      Blog / mathix.dev
    </p>
  </div>
</template>
