<script setup>
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const languages = ['es', 'en']
</script>

<template>
  <div class="language-switch" role="group" aria-label="Language">
    <button
      v-for="language in languages"
      :key="language"
      type="button"
      class="language-switch__button"
      :class="{ 'language-switch__button--active': languageStore.lang === language }"
      :aria-pressed="languageStore.lang === language"
      @click="languageStore.setLanguage(language)"
    >
      {{ language.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.language-switch {
  display: inline-flex;
  padding: 4px;
  background-color: var(--color-ink);
  border-radius: var(--radius-pill);
}

.language-switch__button {
  padding: 6px 14px;
  border: none;
  border-radius: var(--radius-pill);
  background-color: transparent;
  color: var(--color-on-dark);
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-switch__button--active {
  background-color: var(--color-bg);
  color: var(--color-ink);
}
</style>
