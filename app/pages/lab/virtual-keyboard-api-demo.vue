<script setup lang="ts">
definePageMeta({ layout: "lab" });

const { isIos } = useDevice();
const dock = ref<HTMLElement | null>(null);

onMounted(() => {
  // For chromium
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
  // For iOS
  if (isIos && window.visualViewport) {
    const vv = window.visualViewport;

    function fixPosition() {
      const ih = window.innerHeight;

      if (dock.value) {
        dock.value.style.bottom = `${Math.max(0, ih - vv.height - vv.offsetTop)}px`;
      }
    }

    vv.addEventListener("resize", fixPosition);
    vv.addEventListener("scroll", fixPosition);
    document.addEventListener("gesturechange", fixPosition);
    document.addEventListener("focusout", fixPosition);

    fixPosition();

    onBeforeUnmount(() => {
      vv.removeEventListener("resize", fixPosition);
      vv.removeEventListener("scroll", fixPosition);
      document.removeEventListener("gesturechange", fixPosition);
      document.removeEventListener("focusout", fixPosition);
    });
  }
});
</script>

<template>
  <div class="min-h-svh p-5 sm:p-10">
    <h1 class="mb-3 text-2xl font-black sm:text-3xl">
      Virtual Keyboard API Demo (+ iOS workaround)
    </h1>

    <input
      placeholder="Focus this to open the keyboard"
      class="w-full rounded-md border-none text-black"
      type="text"
    >
    <NuxtLink
      to="/blog/fix-html-elements-on-top-of-the-ios-keyboard-using-html-css-js"
      class="mt-2 flex items-center gap-1 underline"
    >
      <Icon name="lucide:arrow-right" />
      Check the Blog Article
    </NuxtLink>

    <pre class="my-10 overflow-y-auto">
const { isIos } = useDevice();
const dock = ref&lt;HTMLElement | null&gt;(null);

onMounted(() => {
  // For chromium
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
  // For iOS
  if (isIos && window.visualViewport) {
    const vv = window.visualViewport;

    function fixPosition() {
      const ih = window.innerHeight;

      if (dock.value) {
        dock.value.style.bottom = `${Math.max(0, ih - vv.height - vv.offsetTop)}px`;
      }
    }

    vv.addEventListener("resize", fixPosition);
    vv.addEventListener("scroll", fixPosition);
    document.addEventListener("gesturechange", fixPosition);
    document.addEventListener("focusout", fixPosition);

    fixPosition();

    onBeforeUnmount(() => {
      vv.removeEventListener("resize", fixPosition);
      vv.removeEventListener("scroll", fixPosition);
      document.removeEventListener("gesturechange", fixPosition);
      document.removeEventListener("focusout", fixPosition);
    });
  }
});

&lt;div ref&equals;&quot;dock&quot; style&equals;&quot;bottom&colon; env&lpar;keyboard-inset-height&comma; 0&rpar;&semi;&quot; class&equals;&quot;fixed inset-x-0&quot;&gt;
  Stick to the damn bottom
&lt;&sol;div&gt;</pre>

    <div
      ref="dock"
      class="fixed inset-x-0 bottom-kb-height bg-white p-4 text-center text-black"
    >
      Stick to the damn bottom
    </div>
  </div>
</template>
