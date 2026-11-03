<template>
  <div class="track" aria-hidden="true">
    <span class="track__train">
      <span class="track__window"></span>
      <span class="track__window"></span>
      <span class="track__window"></span>
    </span>
  </div>
</template>

<style scoped>
.track {
  position: relative;
  height: 10px;
  margin-top: 96px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    var(--line-front) 0 33%,
    var(--line-data) 33% 66%,
    var(--line-back) 66% 100%
  );
}

/* Train car */
.track__train {
  position: absolute;
  top: -26px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 64px;
  height: 28px;
  padding: 0 8px;
  border-radius: 6px 16px 16px 6px;
  background-color: var(--color-ink);
  animation: ride 12s ease-in-out infinite;
}

.track__window {
  width: 11px;
  height: 10px;
  border-radius: 3px;
  background-color: var(--color-pink-light);
}

/* Go right, turn around, come back */
@keyframes ride {
  0% {
    left: 0;
    transform: scaleX(1);
  }

  49.9% {
    left: calc(100% - 64px);
    transform: scaleX(1);
  }

  50% {
    left: calc(100% - 64px);
    transform: scaleX(-1);
  }

  100% {
    left: 0;
    transform: scaleX(-1);
  }
}
</style>
