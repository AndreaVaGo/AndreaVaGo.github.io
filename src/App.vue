<script setup>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MetroTrack from '@/components/MetroTrack.vue'
</script>

<template>
  <div class="container app__header">
    <TheHeader />
  </div>

  <main>
    <div class="container app__intro">
      <HeroSection />
      <MetroTrack />
    </div>
  </main>
</template>

<style scoped>
.app__header {
  padding-top: 40px;
}

.app__intro {
  padding-bottom: 96px;
}
</style>
