<template>
  <main>
    <slot />
    <OgImage
      component="OgImageLab"
    />
  </main>
</template>

<style lang="css" scoped>
  main {
    background-color:#1173ff;
    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-1px -1px, -1px -1px, -1px -1px, -1px -1px;
  }
</style>
