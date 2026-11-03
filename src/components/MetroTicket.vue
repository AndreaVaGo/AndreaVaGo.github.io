<script setup>
import { useLanguageStore } from '@/stores/language'

defineProps({
  inserted: {
    type: Boolean,
    default: false,
  },
})

const languageStore = useLanguageStore()
</script>

<template>
  <article
    class="ticket"
    :class="{ 'ticket--inserted': inserted }"
    :aria-label="languageStore.texts.ticket.label"
  >
    <header class="ticket__top">
      <span>{{ languageStore.texts.ticket.type }}</span>
      <span>{{ languageStore.texts.ticket.number }}</span>
    </header>

    <dl class="ticket__fields">
      <div
        v-for="field in languageStore.texts.ticket.fields"
        :key="field.label"
        class="ticket__field"
      >
        <dt class="ticket__label">{{ field.label }}</dt>
        <dd class="ticket__value">{{ field.value }}</dd>
      </div>
    </dl>

    <p class="ticket__stamp">{{ languageStore.texts.ticket.stamp }}</p>

    <div class="ticket__stripe" aria-hidden="true"></div>
  </article>
</template>

<style scoped>
.ticket {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 470px;
  overflow: hidden;
  border-radius: 14px;
  background-color: #fbfaf7;
  color: #1e1424;
  font-family: var(--font-mono);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  opacity: 0;
}

/* Pink band on top */
.ticket__top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 18px;
  background-color: var(--line-front);
  color: #ffffff;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Fields in two columns */
.ticket__fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 20px;
  margin: 0;
  padding: 16px 18px 36px;
  font-size: 13px;
}

.ticket__label {
  color: #6b5d73;
  font-size: 11px;
  text-transform: uppercase;
}

.ticket__value {
  margin: 0;
  font-weight: 600;
}

/* "Validated" stamp, like real ink */
.ticket__stamp {
  position: absolute;
  top: 96px;
  right: 26px;
  margin: 0;
  padding: 6px 12px;
  border: 3px solid var(--line-data);
  border-radius: 6px;
  color: var(--line-data);
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
  transform: rotate(-14deg);
}

/* Magnetic stripe at the bottom */
.ticket__stripe {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 18px;
  background-color: #2b2230;
}

/* ===== Animations (only when the ticket is inserted) ===== */
.ticket--inserted {
  animation: insert 1.6s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.ticket--inserted .ticket__stamp {
  animation: stamp 2.2s ease-out both;
}

@keyframes insert {
  0% {
    opacity: 0;
    transform: translateX(-60px) rotate(-4deg);
  }

  30% {
    opacity: 1;
  }

  55%,
  100% {
    opacity: 1;
    transform: translateX(0) rotate(-2deg);
  }
}

@keyframes stamp {
  0%,
  60% {
    opacity: 0;
    transform: scale(1.6) rotate(-14deg);
  }

  75% {
    opacity: 0.8;
    transform: scale(0.95) rotate(-14deg);
  }

  100% {
    opacity: 0.8;
    transform: scale(1) rotate(-14deg);
  }
}
</style>
