<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
</script>

<template>
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="container">
      <header class="projects__header">
        <p class="projects__eyebrow">{{ languageStore.texts.projects.eyebrow }}</p>
        <h2 id="projects-title" class="projects__title">
          {{ languageStore.texts.projects.title }}
        </h2>
      </header>

      <div class="projects__grid">
        <ProjectCard
          v-for="project in languageStore.texts.projects.featured"
          :key="project.name"
          :project="project"
        />
      </div>

      <a
        href="https://github.com/AndreaVaGo?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="projects__more"
      >
        {{ languageStore.texts.projects.othersTitle }} ↗
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 96px 0;
  background-color: var(--color-surface);
}

.projects__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.projects__eyebrow {
  margin: 0;
  color: var(--line-back);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.projects__title {
  margin: 0;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

/* Three cards per row */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 40px;
}

/* Link to all repositories */
.projects__more {
  display: inline-flex;
  align-items: center;
  min-height: 52px;
  margin-top: 48px;
  padding: 0 26px;
  border: 2px solid var(--color-ink);
  border-radius: var(--radius-pill);
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.projects__more:hover {
  background-color: var(--color-ink);
  color: var(--color-on-dark);
  transform: translateY(-3px);
}

/* Tablets: two cards per row */
@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Phones: one card per row */
@media (max-width: 768px) {
  .projects {
    padding: 64px 0;
  }

  .projects__title {
    font-size: 40px;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
