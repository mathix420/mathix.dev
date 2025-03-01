<script setup lang="ts">
definePageMeta({ layout: "lab" });

const mainAngles = [-90, -60, -30, 0, 30, 60, 90];
const smallerAngles = Array(30).fill(6).map((_, i) => -90 + i * 6).filter(angle => !mainAngles.includes(angle));
const secondsAngle = ref(0);
const minutesAngle = ref(0);
const hoursAngle = ref(0);

const period = 200; // ms
const gap = 360 / (1000 * 60) * period; // degrees

onMounted(() => {
  setTimeout(() => {
    setInterval(() => {
      const currentTime = performance.timeOrigin + performance.now();
      secondsAngle.value = ((currentTime / 1000) % 60 * 6);
      minutesAngle.value = (currentTime / 1000 / 60) % 60 * 6;
      hoursAngle.value = (currentTime / 1000 / 60 / 60) % 12 * 30;
    }, 50);
  }, period);
});
</script>

<template>
  <main class="flex h-svh flex-col items-center justify-center">
    <p class="font-mono">
      LAB 00002
    </p>
    <div class="relative">
      <div class="relative z-10 h-[37.5vw] w-[90vw] overflow-hidden rounded-full p-7 sm:h-40 sm:w-96">
        <div
          v-for="angle in mainAngles"
          :key="angle"
          :style="{ '--tw-rotate': `${angle}deg` }"
          class="absolute bottom-1/2 right-1/2 -z-10 h-screen w-[2px] translate-x-1/2 translate-y-1/2 bg-white"
        />
        <div
          v-for="angle in smallerAngles"
          :key="angle"
          :style="{ '--tw-rotate': `${angle}deg` }"
          class="absolute bottom-1/2 right-1/2 -z-10 h-screen w-px translate-x-1/2 translate-y-1/2 bg-white/30"
        />
        <div class="size-full rounded-full bg-[#1173ff]">
          <div
            :style="{ '--tw-rotate': `${hoursAngle}deg` }"
            :class="hoursAngle < gap ? 'duration-0' : ''"
            class="absolute bottom-1/2 right-1/2 h-1/4 w-[6px] origin-bottom translate-x-1/2 rounded-full bg-white transition-transform"
          >
            <div
              class="absolute -bottom-6 h-6 w-[6px] rounded-full bg-white"
            />
          </div>
          <div
            :style="{ '--tw-rotate': `${minutesAngle}deg` }"
            :class="minutesAngle < gap ? 'duration-0' : ''"
            class="absolute bottom-1/2 right-1/2 h-1/2 w-[4px] origin-bottom translate-x-1/2 rounded-full bg-white transition-transform"
          >
            <div
              class="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-white"
            />
            <div
              class="absolute -bottom-6 h-6 w-[4px] rounded-full bg-white"
            />
          </div>
          <div
            :style="{ '--tw-rotate': `${secondsAngle}deg` }"
            :class="secondsAngle < gap ? 'duration-0' : ''"
            class="absolute bottom-1/2 right-1/2 h-1/2 w-[2px] origin-bottom translate-x-1/2 rounded-full bg-red-500 transition-transform"
          >
            <div
              class="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-red-500"
            />
            <div
              class="absolute -bottom-6 h-6 w-[2px] rounded-full bg-red-500"
            />
          </div>
        </div>
      </div>
      <div class="absolute -inset-10 max-w-[100vw] overflow-hidden rounded-full bg-[#1173ff]/10 backdrop-blur-[1px]" />
    </div>
  </main>
</template>
