<script setup>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <div class="app">
    <TheHeader />

    <main>
      <HeroSection />
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--page-padding);
}
</style>
