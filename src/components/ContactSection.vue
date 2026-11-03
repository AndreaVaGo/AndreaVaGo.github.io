<script setup>
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const year = new Date().getFullYear()

const links = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andrea-vallina-gonzalez/' },
  { label: 'GitHub', url: 'https://github.com/AndreaVaGo' },
]
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="container">
      <p class="contact__badge">
        <span aria-hidden="true">→</span>
        {{ languageStore.texts.contact.badge }}
      </p>

      <h2 id="contact-title" class="contact__title">
        {{ languageStore.texts.contact.title }}<span class="contact__dot">.</span>
      </h2>

      <p class="contact__intro">{{ languageStore.texts.contact.intro }}</p>

      <div class="contact__links">
        <a
          v-for="(link, index) in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button"
          :class="{ 'contact__button--primary': index === 0 }"
        >
          {{ link.label }}
        </a>

        <a href="/cv-andrea-vallina-gonzalez.pdf" download class="contact__button">
          {{ languageStore.texts.contact.cv }}
        </a>
      </div>

      <footer class="contact__footer">
        <span class="contact__check" aria-hidden="true">✓</span>
        <span>
          <span class="contact__tests">{{ languageStore.texts.footer.tests }}</span>
          · {{ languageStore.texts.footer.madeWith }} · © {{ year }} Andrea Vallina González
        </span>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 96px 0 40px;
  background-color: var(--color-ink);
  color: var(--color-on-dark);
}

.contact__badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 14px 22px;
  border-radius: var(--radius-sm);
  background-color: var(--line-front);
  font-size: 18px;
  font-weight: 900;
}

.contact__title {
  margin: 28px 0 0;
  font-size: 84px;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.contact__dot {
  color: var(--color-pink-light);
}

.contact__intro {
  max-width: 560px;
  margin: 24px 0 0;
  color: var(--color-on-dark-soft);
  font-size: 19px;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.contact__button {
  display: inline-flex;
  align-items: center;
  min-height: 52px;
  padding: 0 26px;
  border: 2px solid var(--color-on-dark);
  border-radius: var(--radius-pill);
  color: var(--color-on-dark);
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.contact__button:hover {
  transform: translateY(-3px);
}

.contact__button--primary {
  background-color: var(--color-on-dark);
  color: var(--color-ink);
}

/* Footer */
.contact__footer {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid #3a2c47;
  color: #b9aec6;
  font-family: var(--font-mono);
  font-size: 14px;
}

.contact__check,
.contact__tests {
  color: var(--color-success);
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact {
    padding-top: 64px;
  }

  .contact__title {
    font-size: 52px;
  }
}
</style>
