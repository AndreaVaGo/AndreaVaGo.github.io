<script setup>
import LanguageSwitch from '@/components/LanguageSwitch.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const links = [
  { href: '#about', key: 'about' },
  { href: '#journey', key: 'journey' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
]
</script>

<template>
  <header class="header">
    <a href="#" class="header__logo">
      <span class="header__badge">AV</span>
      Andrea Vallina González
    </a>

    <nav class="header__nav" :aria-label="languageStore.texts.nav.label">
      <a v-for="link in links" :key="link.key" :href="link.href" class="header__link">
        {{ languageStore.texts.nav[link.key] }}
      </a>
    </nav>

    <LanguageSwitch />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 28px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  text-decoration: none;
}

.header__badge {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-ink);
  color: var(--color-on-dark);
  font-size: 13px;
}

.header__nav {
  flex: 1;
  display: flex;
  gap: 28px;
  margin-left: 24px;
}

.header__link {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.header__link:hover {
  color: var(--line-front);
}

@media (max-width: 768px) {
  .header {
    justify-content: space-between;
  }

  .header__nav {
    order: 3;
    flex-basis: 100%;
    gap: 18px;
    margin-left: 0;
    overflow-x: auto;
  }
}
</style>
