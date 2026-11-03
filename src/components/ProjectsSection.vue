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

      <div class="projects__others">
        <h3 class="projects__others-title">{{ languageStore.texts.projects.othersTitle }}</h3>
        <ul class="projects__others-list">
          <li
            v-for="other in languageStore.texts.projects.others"
            :key="other"
            class="projects__other"
          >
            {{ other }}
          </li>
        </ul>
      </div>
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

.projects__others {
  margin-top: 48px;
}

.projects__others-title {
  margin: 0 0 14px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.projects__others-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.projects__other {
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 600;
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
