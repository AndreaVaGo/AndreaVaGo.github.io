<script setup>
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <p class="hero__sign">
      <span class="hero__sign-line">M</span>
      <span class="hero__sign-name">
        {{ languageStore.texts.hero.station }} · Andrea Vallina González
      </span>
    </p>

    <h1 id="hero-title" class="hero__title">
      Full Stack<br />
      Developer<span class="hero__dot">.</span>
    </h1>

    <p class="hero__intro">{{ languageStore.texts.hero.intro }}</p>

    <div class="hero__actions">
      <a href="#journey" class="hero__button">
        {{ languageStore.texts.hero.ctaJourney }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 96px;
}

/* Station sign */
.hero__sign {
  align-self: flex-start;
  display: flex;
  margin: 0;
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(28, 16, 39, 0.18);
}

.hero__sign-line {
  padding: 14px 18px;
  background-color: var(--line-front);
  color: #ffffff;
  font-size: 22px;
  font-weight: 900;
}

.hero__sign-name {
  padding: 14px 24px;
  background-color: var(--color-ink);
  color: var(--color-on-dark);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

/* Title and intro */
.hero__title {
  margin: 0;
  font-size: 104px;
  font-weight: 900;
  line-height: 0.94;
  letter-spacing: -0.04em;
}

.hero__dot {
  color: var(--line-front);
}

.hero__intro {
  margin: 0;
  max-width: 560px;
  font-size: 20px;
  color: var(--color-ink-soft);
}

/* Button */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  min-height: 52px;
  padding: 0 28px;
  border: 2px solid var(--color-ink);
  border-radius: var(--radius-pill);
  background-color: var(--color-ink);
  color: var(--color-on-dark);
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.hero__button:hover {
  transform: translateY(-3px);
}

/* Phones */
@media (max-width: 768px) {
  .hero {
    padding-top: 56px;
  }

  .hero__sign-line {
    padding: 12px 14px;
    font-size: 18px;
  }

  .hero__sign-name {
    padding: 12px 16px;
    font-size: 16px;
  }

  .hero__title {
    font-size: 56px;
  }

  .hero__intro {
    font-size: 18px;
  }
}
</style>
