<template>
  <main class="app">
    <p class="app__label">Estación · Station</p>
    <h1 class="app__title">Andrea Vallina</h1>
    <p class="app__subtitle">Full Stack Developer · Portfolio en obras 🚧</p>
  </main>
</template>

<style scoped>
.app {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--page-padding);
}

.app__label {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--line-front);
}

.app__title {
  margin: 8px 0;
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

.app__subtitle {
  margin: 0;
  font-size: 18px;
  color: var(--color-ink-soft);
}
</style>
