<script setup>
import { useLanguageStore } from '@/stores/language'

defineProps({
  line: {
    type: Object,
    required: true,
  },
})

const languageStore = useLanguageStore()
</script>

<template>
  <div class="line" :style="{ '--line-color': `var(--line-${line.id})` }">
    <h3 class="line__name">
      <span class="line__swatch" aria-hidden="true"></span>
      {{ line.name }}
    </h3>

    <ol class="line__stations">
      <li
        v-for="station in line.stations"
        :key="station.name"
        class="line__station"
        :class="{ 'line__station--final': station.final }"
      >
        <span class="line__dot" aria-hidden="true"></span>

        <div class="line__info">
          <span class="line__station-name">{{ station.name }}</span>
          <span v-if="station.project" class="line__project">{{ station.project }}</span>
          <span v-if="station.final" class="line__final">
            {{ languageStore.texts.journey.finalLabel }}
          </span>
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.line__name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.line__swatch {
  width: 36px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--line-color);
}

/* Stations in a row, with the track behind */
.line__stations {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.line__stations::before {
  content: '';
  position: absolute;
  top: 9px;
  right: 0;
  left: 0;
  height: 10px;
  border-radius: 5px;
  background-color: var(--line-color);
}

.line__station {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.line__dot {
  position: relative;
  z-index: 1;
  width: 28px;
  height: 28px;
  border: 6px solid var(--line-color);
  border-radius: 50%;
  background-color: #ffffff;
}

.line__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.line__station-name {
  font-size: 16px;
  font-weight: 800;
}

.line__project {
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  font-size: 13px;
}

/* Last stop: Acompáñame */
.line__station--final .line__dot {
  width: 38px;
  height: 38px;
  margin-top: -5px;
  border-color: #ffffff;
  background-color: var(--line-front);
  box-shadow: 0 0 0 3px var(--line-color);
}

.line__final {
  color: var(--line-front);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Phones: the line goes down */
@media (max-width: 768px) {
  .line__stations {
    flex-direction: column;
    gap: 28px;
  }

  .line__stations::before {
    top: 0;
    bottom: 0;
    left: 9px;
    width: 10px;
    height: auto;
  }

  .line__station {
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;
    text-align: left;
  }

  .line__info {
    align-items: flex-start;
    padding-top: 2px;
  }

  .line__station--final .line__dot {
    margin-top: 0;
    margin-left: -5px;
  }
}
</style>
