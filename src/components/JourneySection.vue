<script setup>
import MetroLine from '@/components/MetroLine.vue'
import { useInView } from '@/composables/useInView'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const { target, isVisible } = useInView({ threshold: 0.2 })
</script>

<template>
  <section id="journey" class="journey" aria-labelledby="journey-title">
    <div class="container">
      <header class="journey__header">
        <p class="journey__eyebrow">{{ languageStore.texts.journey.eyebrow }}</p>
        <h2 id="journey-title" class="journey__title">{{ languageStore.texts.journey.title }}</h2>
        <p class="journey__intro">{{ languageStore.texts.journey.intro }}</p>
      </header>

      <div ref="target" class="journey__map">
        <template v-for="(line, index) in languageStore.texts.journey.lines" :key="line.id">
          <p v-if="index > 0" class="journey__transfer">
            ⇅ {{ languageStore.texts.journey.transfer }}
          </p>

          <MetroLine :line="line" :line-index="index" :active="isVisible" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey {
  padding: 96px 0;
}

.journey__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.journey__eyebrow {
  margin: 0;
  color: var(--line-front);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.journey__title {
  margin: 0;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

.journey__intro {
  margin: 0;
  color: var(--color-ink-soft);
  font-size: 18px;
}

.journey__map {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 56px;
}

.journey__transfer {
  align-self: center;
  margin: 0;
  padding: 6px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  color: var(--color-ink-soft);
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .journey {
    padding: 64px 0;
  }

  .journey__title {
    font-size: 40px;
  }

  .journey__transfer {
    align-self: flex-start;
  }
}
</style>
