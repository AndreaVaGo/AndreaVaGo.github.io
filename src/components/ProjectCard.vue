<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card" :style="{ '--line-color': `var(--line-${project.line})` }">
    <div class="card__stripe" aria-hidden="true"></div>

    <img
      :src="project.image"
      :alt="project.imageAlt"
      class="card__image"
      width="800"
      height="450"
      loading="lazy"
    />

    <div class="card__body">
      <div class="card__meta">
        <span class="card__line">{{ project.lineLabel }}</span>

        <ul class="card__badges">
          <li
            v-for="badge in project.badges"
            :key="badge.type"
            class="card__badge"
            :class="`card__badge--${badge.type}`"
          >
            {{ badge.label }}
          </li>
        </ul>
      </div>

      <h3 class="card__title">{{ project.name }}</h3>
      <p class="card__description">{{ project.description }}</p>

      <ul class="card__stack">
        <li v-for="tech in project.stack" :key="tech" class="card__tech">{{ tech }}</li>
      </ul>

      <div class="card__links">
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card__link"
        >
          {{ link.label }} ↗
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(28, 16, 39, 0.14);
}

.card__stripe {
  height: 8px;
  background-color: var(--line-color);
}

/* Project screenshot */
.card__image {
  width: 100%;
  height: 180px;
  background-color: #eee8f4;
  object-fit: cover;
  object-position: top;
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
}

.card__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.card__line {
  color: var(--line-color);
  font-size: 13px;
  font-weight: 700;
}

/* Badges */
.card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card__badge {
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.card__badge--wip {
  background-color: #fce4f1;
  color: #a3105f;
}

.card__badge--team {
  background-color: #ece3fb;
  color: #4a0fa3;
}

.card__badge--live {
  background-color: #dcf5ec;
  color: #0a6b5d;
}

.card__title {
  margin: 0;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.card__description {
  margin: 0;
  color: var(--color-ink-soft);
  font-size: 15px;
}

.card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card__tech {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  background-color: var(--color-bg);
  font-family: var(--font-mono);
  font-size: 12px;
}

.card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: auto;
  padding-top: 8px;
}

.card__link {
  font-size: 14px;
  font-weight: 800;
  text-decoration-color: var(--line-color);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.card__link:hover {
  color: var(--line-color);
}
</style>
