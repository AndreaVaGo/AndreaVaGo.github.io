import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import es from '@/locales/es.json'
import en from '@/locales/en.json'

const messages = { es, en }

export const useLanguageStore = defineStore('language', () => {
  const lang = ref('es')

  const texts = computed(() => messages[lang.value])

  function setLanguage(newLang) {
    lang.value = newLang
    document.documentElement.lang = newLang
  }

  return { lang, texts, setLanguage }
})
