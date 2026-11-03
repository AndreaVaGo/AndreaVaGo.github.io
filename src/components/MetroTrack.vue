<template>
  <div class="track" aria-hidden="true">
    <span class="track__train"></span>
  </div>
</template>

<style scoped>
.track {
  position: relative;
  height: 10px;
  margin-top: 72px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    var(--line-front) 0 33%,
    var(--line-data) 33% 66%,
    var(--line-back) 66% 100%
  );
}

.track__train {
  position: absolute;
  top: -6px;
  left: 0;
  width: 22px;
  height: 22px;
  border: 5px solid var(--color-ink);
  border-radius: 50%;
  background-color: #ffffff;
  animation: ride 6s ease-in-out infinite alternate;
}

@keyframes ride {
  from {
    left: 0;
  }

  to {
    left: calc(100% - 22px);
  }
}
</style>
