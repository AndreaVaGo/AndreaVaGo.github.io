<script setup>
import MetroTicket from '@/components/MetroTicket.vue'
import { useInView } from '@/composables/useInView'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const { target, isVisible } = useInView()
</script>

<template>
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="container about__inner">
      <div class="about__text">
        <p class="about__eyebrow">{{ languageStore.texts.about.eyebrow }}</p>

        <h2 id="about-title" class="about__title">
          {{ languageStore.texts.about.titleLine1 }}<br />
          {{ languageStore.texts.about.titleLine2 }}
        </h2>

        <p class="about__paragraph">{{ languageStore.texts.about.paragraph1 }}</p>
        <p class="about__paragraph">{{ languageStore.texts.about.paragraph2 }}</p>
      </div>

      <div ref="target" class="about__visual">
        <div class="about__machine" aria-hidden="true">
          <span class="about__slot"></span>
        </div>

        <MetroTicket :inserted="isVisible" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 96px 0;
  background-color: var(--color-ink);
  color: var(--color-on-dark);
}

/* Two columns: text | ticket */
.about__inner {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 64px;
  align-items: center;
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about__eyebrow {
  margin: 0;
  color: var(--color-pink-light);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about__title {
  margin: 0;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

.about__paragraph {
  margin: 0;
  color: var(--color-on-dark-soft);
  font-size: 18px;
  line-height: 1.7;
}

/* Ticket machine behind the ticket */
.about__visual {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 380px;
}

.about__machine {
  position: absolute;
  top: 50%;
  right: 0;
  width: 120px;
  height: 240px;
  border: 2px solid #4b3a5a;
  border-radius: 16px;
  background-color: #2c1d38;
  transform: translateY(-50%);
}

.about__slot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 140px;
  border-radius: 6px;
  background-color: #0c0612;
  transform: translate(-50%, -50%);
}

/* Phones: one column, no machine */
@media (max-width: 768px) {
  .about {
    padding: 64px 0;
  }

  .about__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about__title {
    font-size: 40px;
  }

  .about__visual {
    min-height: auto;
  }

  .about__machine {
    display: none;
  }
}
</style>
